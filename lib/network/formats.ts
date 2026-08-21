import type { AssetFormat, Insight, Platform } from "./types";

/** Export dimensions and editorial role for each format in the system. */
export interface FormatSpec {
  format: AssetFormat;
  name: string;
  platform: Platform;
  width: number;
  height: number;
  /** Frames in the export (carousel slides); 1 for single images. */
  frames: number;
  /** Insights consumed per asset. */
  insightsUsed: number;
  role: string;
  /** Roughly what a freelance designer charges for one, used in the ROI table. */
  marketRate: number;
}

export const FORMATS: Record<AssetFormat, FormatSpec> = {
  hypergrid: {
    format: "hypergrid",
    name: "HyperGrid",
    platform: "linkedin",
    width: 1200,
    height: 1500,
    frames: 1,
    insightsUsed: 9,
    role: "The flagship. One episode compressed into a nine-block grid — the asset that gets saved and re-shared.",
    marketRate: 450,
  },
  carousel: {
    format: "carousel",
    name: "Carousel",
    platform: "linkedin",
    width: 1080,
    height: 1350,
    frames: 6,
    insightsUsed: 4,
    role: "Swipe-through breakdown of a single argument. Highest dwell time of any format.",
    marketRate: 380,
  },
  quote: {
    format: "quote",
    name: "Quote Card",
    platform: "instagram",
    width: 1080,
    height: 1080,
    frames: 1,
    insightsUsed: 1,
    role: "One line, set large. The workhorse of the feed.",
    marketRate: 120,
  },
  stat: {
    format: "stat",
    name: "Stat Card",
    platform: "x",
    width: 1600,
    height: 900,
    frames: 1,
    insightsUsed: 1,
    role: "Number-led. Built for the timeline, where a figure stops the scroll.",
    marketRate: 140,
  },
  story: {
    format: "story",
    name: "Story Frame",
    platform: "instagram",
    width: 1080,
    height: 1920,
    frames: 1,
    insightsUsed: 1,
    role: "Vertical, thumb-stopping, with room for a sticker or link.",
    marketRate: 110,
  },
  xcard: {
    format: "xcard",
    name: "Post Card",
    platform: "x",
    width: 1600,
    height: 900,
    frames: 1,
    insightsUsed: 2,
    role: "Landscape pull-quote sized for an in-timeline preview.",
    marketRate: 130,
  },
};

export const PLATFORM_LABELS: Record<Platform, string> = {
  linkedin: "LinkedIn",
  instagram: "Instagram",
  x: "X",
};

/**
 * The weekly per-episode recipe. Ordered by priority so a low-viability episode
 * can be truncated from the bottom without losing the flagship asset.
 */
export const EPISODE_RECIPE: AssetFormat[] = [
  "hypergrid",
  "carousel",
  "quote",
  "stat",
  "quote",
  "story",
  "xcard",
];

function sentenceCase(text: string): string {
  const trimmed = text.trim().replace(/\s+/g, " ");
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

/** Trims a verbatim line to a headline without inventing new claims. */
export function toHeadline(insight: Insight, maxWords = 12): string {
  const stripped = insight.text
    .replace(/^(and|but|so|well|i mean|you know|like)[,\s]+/i, "")
    .replace(/[.]+$/, "");
  const words = stripped.split(/\s+/);
  if (words.length <= maxWords) return sentenceCase(stripped);
  return sentenceCase(words.slice(0, maxWords).join(" ")) + "…";
}

export interface CaptionContext {
  showName: string;
  episodeTitle: string;
  guest?: string;
  networkName: string;
}

/**
 * Platform-native post copy. Each platform gets a different register: LinkedIn
 * runs long with a takeaway list, Instagram runs short, X runs shortest.
 */
export function buildCaption(
  format: AssetFormat,
  insights: Insight[],
  ctx: CaptionContext,
): string {
  const spec = FORMATS[format];
  const lead = insights[0];
  if (!lead) return "";

  const attribution = ctx.guest ? `${ctx.guest} on ${ctx.showName}` : ctx.showName;

  if (spec.platform === "linkedin") {
    const takeaways = insights
      .slice(0, 3)
      .map((i) => `→ ${toHeadline(i, 14)}`)
      .join("\n");
    return [
      `"${toHeadline(lead, 18)}"`,
      "",
      `${attribution}, on ${ctx.episodeTitle}.`,
      "",
      takeaways,
      "",
      `Full episode linked below. More from ${ctx.networkName}.`,
    ].join("\n");
  }

  if (spec.platform === "instagram") {
    return [
      `"${toHeadline(lead, 16)}"`,
      "",
      `— ${attribution}`,
      "",
      `New episode out now. Link in bio.`,
    ].join("\n");
  }

  return [`"${toHeadline(lead, 14)}"`, "", `— ${attribution}`].join("\n");
}

/** Kind-aware kicker printed above the headline on single-insight assets. */
export function kickerFor(insight: Insight): string {
  switch (insight.kind) {
    case "stat":
      return "By the numbers";
    case "contrarian":
      return "The counterpoint";
    case "framework":
      return "The framework";
    case "tactic":
      return "How it's done";
    case "story":
      return "From the field";
    default:
      return "The principle";
  }
}
