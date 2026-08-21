import { assessViability, extractInsights } from "./extract";
import {
  EPISODE_RECIPE,
  FORMATS,
  buildCaption,
  toHeadline,
  kickerFor,
} from "./formats";
import type {
  AssetFormat,
  AssetSpec,
  DistributionPackage,
  Episode,
  Insight,
  Network,
  PackageSummary,
  Platform,
  Show,
} from "./types";

/**
 * Assembles the weekly distribution package: every episode in the roster is
 * extracted, assessed, and cut into platform-ready assets, then trimmed to the
 * contracted weekly volume.
 */

const EMPTY_PLATFORMS: Record<Platform, number> = { linkedin: 0, instagram: 0, x: 0 };
const EMPTY_FORMATS: Record<AssetFormat, number> = {
  hypergrid: 0,
  carousel: 0,
  quote: 0,
  stat: 0,
  story: 0,
  xcard: 0,
};

/**
 * The grid is the episode's full summary, so it draws from the whole pool
 * without consuming it — every other asset amplifies an individual point and
 * must therefore be exclusive, or the week's feed repeats itself.
 */
const NON_CONSUMING: ReadonlySet<AssetFormat> = new Set<AssetFormat>(["hypergrid"]);

/**
 * Picks the insights an asset should carry, preferring kinds that suit the
 * format, and never handing the same insight to two amplifier assets of the
 * same episode.
 */
function selectInsights(
  format: AssetFormat,
  pool: Insight[],
  used: Set<string>,
): Insight[] {
  const spec = FORMATS[format];
  const available = NON_CONSUMING.has(format)
    ? pool
    : pool.filter((i) => !used.has(i.id));
  if (available.length === 0) return [];

  const preferred: Partial<Record<AssetFormat, Insight["kind"][]>> = {
    stat: ["stat"],
    carousel: ["framework", "tactic", "contrarian"],
    quote: ["principle", "contrarian"],
    story: ["story", "principle"],
    xcard: ["contrarian", "stat"],
  };

  const wanted = preferred[format];
  const ranked = wanted
    ? [...available].sort((a, b) => {
        const aPref = wanted.indexOf(a.kind);
        const bPref = wanted.indexOf(b.kind);
        const aRank = aPref === -1 ? wanted.length : aPref;
        const bRank = bPref === -1 ? wanted.length : bPref;
        return aRank - bRank || b.score - a.score;
      })
    : available;

  // The grid reads best in episode order, not score order.
  const take = ranked.slice(0, Math.min(spec.insightsUsed, ranked.length));
  const chosen = format === "hypergrid" ? [...take].sort((a, b) => a.position - b.position) : take;
  if (!NON_CONSUMING.has(format)) chosen.forEach((i) => used.add(i.id));
  return chosen;
}

export interface EpisodeCut {
  episode: Episode;
  insights: Insight[];
  assets: AssetSpec[];
  note?: string;
}

/** Cuts a single episode into its asset set. */
export function cutEpisode(
  episode: Episode,
  show: Show,
  networkName: string,
): EpisodeCut {
  const insights = extractInsights(episode, { limit: 16 });
  const report = assessViability(insights);
  const used = new Set<string>();
  const assets: AssetSpec[] = [];

  // Below the density bar the flagship grid is skipped entirely.
  const recipe =
    report.viability === "insufficient"
      ? (["quote", "quote", "xcard"] as AssetFormat[])
      : EPISODE_RECIPE;

  for (const format of recipe) {
    const spec = FORMATS[format];
    const chosen = selectInsights(format, insights, used);
    if (chosen.length === 0) continue;
    // A grid that can't fill its blocks runs reduced rather than padded.
    if (format === "hypergrid" && chosen.length < 3) continue;

    const lead = chosen[0];
    const caption = buildCaption(format, chosen, {
      showName: show.name,
      episodeTitle: episode.title,
      guest: episode.guest,
      networkName,
    });

    assets.push({
      id: `${episode.id}-${format}-${assets.length}`,
      format,
      platform: spec.platform,
      showId: show.id,
      showName: show.name,
      episodeId: episode.id,
      episodeTitle: episode.title,
      width: spec.width,
      height: spec.height,
      insights: chosen,
      headline:
        format === "hypergrid"
          ? episode.title
          : toHeadline(lead, format === "story" ? 12 : 16),
      subhead: format === "hypergrid" ? `${chosen.length} ideas` : kickerFor(lead),
      caption,
      frames:
        format === "carousel"
          ? Math.min(spec.frames, chosen.length + 2) // cover + insights + endcard
          : spec.frames,
    });
  }

  return {
    episode,
    insights,
    assets,
    note:
      report.viability === "full"
        ? undefined
        : `${show.name} — "${episode.title}": ${report.note}`,
  };
}

function summarise(assets: AssetSpec[], shows: Show[]): PackageSummary {
  const byPlatform = { ...EMPTY_PLATFORMS };
  const byFormat = { ...EMPTY_FORMATS };
  let totalFrames = 0;

  for (const asset of assets) {
    byPlatform[asset.platform] += 1;
    byFormat[asset.format] += 1;
    totalFrames += asset.frames;
  }

  const byShow = shows
    .map((show) => ({
      showId: show.id,
      showName: show.name,
      assets: assets.filter((a) => a.showId === show.id).length,
    }))
    .filter((row) => row.assets > 0);

  return { totalAssets: assets.length, totalFrames, byPlatform, byFormat, byShow };
}

export interface BuildPackageOptions {
  weekOf: string;
  /** Contracted weekly asset ceiling. Assets beyond it are held back. */
  weeklyTarget?: number;
}

/**
 * Interleaves each show's assets so trimming to the weekly target cuts evenly
 * across the roster instead of starving whichever show sorts last.
 */
function interleaveByShow(cuts: EpisodeCut[]): AssetSpec[] {
  const queues = cuts.map((c) => [...c.assets]);
  const out: AssetSpec[] = [];
  let drained = false;

  while (!drained) {
    drained = true;
    for (const queue of queues) {
      const next = queue.shift();
      if (next) {
        out.push(next);
        drained = false;
      }
    }
  }

  return out;
}

export function buildPackage(
  network: Network,
  episodes: Episode[],
  options: BuildPackageOptions,
): DistributionPackage {
  const { weekOf, weeklyTarget } = options;
  const showsById = new Map(network.shows.map((s) => [s.id, s]));

  const cuts: EpisodeCut[] = [];
  for (const episode of episodes) {
    const show = showsById.get(episode.showId);
    if (!show) continue;
    cuts.push(cutEpisode(episode, show, network.name));
  }

  const interleaved = interleaveByShow(cuts);
  const assets =
    weeklyTarget && interleaved.length > weeklyTarget
      ? interleaved.slice(0, weeklyTarget)
      : interleaved;

  const notes = cuts.map((c) => c.note).filter((n): n is string => Boolean(n));
  if (weeklyTarget && interleaved.length > weeklyTarget) {
    notes.push(
      `${interleaved.length - weeklyTarget} assets held in reserve above the ${weeklyTarget}/week contracted volume — available for evergreen re-runs.`,
    );
  }

  return {
    networkSlug: network.slug,
    networkName: network.name,
    weekOf,
    assets,
    summary: summarise(assets, network.shows),
    notes,
  };
}
