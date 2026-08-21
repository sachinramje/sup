import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import AssetRenderer from "@/components/network/assets/AssetRenderer";
import ProposalPricing from "@/components/network/ProposalPricing";
import { DEMO_EPISODES, DEMO_NETWORKS, findNetwork } from "@/lib/network/demo";
import { EPISODE_RECIPE, FORMATS, PLATFORM_LABELS } from "@/lib/network/formats";
import { buildPackage } from "@/lib/network/package";
import {
  recommendTier,
  reserveCapacity,
  rosterWeeklyCapacity,
} from "@/lib/network/pricing";
import type { Episode } from "@/lib/network/types";

/**
 * The network-facing proposal.
 *
 * One page per network, generated from its roster and brand kit. The sample
 * assets are rendered live in the network's own brand, so the proposal is
 * itself a demonstration of the deliverable rather than a description of it.
 */

export function generateStaticParams() {
  return DEMO_NETWORKS.map((network) => ({ slug: network.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const network = findNetwork(slug);
  if (!network) return { title: "Proposal not found" };
  return {
    title: `${network.name} · Visual distribution proposal`,
    description: network.positioning,
  };
}

const ONBOARDING = [
  {
    window: "Days 1–3",
    title: "Brand kit",
    body: "We take the network's guidelines and build the kit: palette, type, mark, radius, texture, plus per-show accents. Signed off before anything is produced.",
  },
  {
    window: "Days 4–7",
    title: "Calibration pack",
    body: "One episode from each show runs through the pipeline. The network marks up what it wants tighter — tone, framing, how much verbatim to keep.",
  },
  {
    window: "Days 8–10",
    title: "First package",
    body: "The full weekly volume ships against the calibrated kit. From here it is a standing Monday delivery.",
  },
  {
    window: "Ongoing",
    title: "Weekly rhythm",
    body: "Episodes land by Thursday. The package lands Monday morning with captions attached. Revisions inside the same week.",
  },
];

const SCOPE = {
  included: [
    "Insight extraction and scoring on every episode delivered",
    "All artwork at platform export dimensions",
    "Platform-native caption copy for every asset",
    "Brand kit maintenance and per-show accent variants",
    "A review board per week, with revisions inside the week",
    "Monthly read on which formats and shows are performing",
  ],
  excluded: [
    "Posting and scheduling — the network keeps control of its own accounts",
    "Video editing and audiogram production",
    "Paid media, boosting, or community management",
    "Podcast artwork, show branding, or website design",
    "Episode production, editing, or transcription services",
  ],
};

export default async function ProposalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const network = findNetwork(slug);
  if (!network) notFound();

  const tier = recommendTier(network.shows);
  const capacity = rosterWeeklyCapacity(network.shows);
  const reserve = reserveCapacity(network.shows, tier);
  const episodesPerWeek = network.shows.reduce(
    (sum, s) => sum + s.episodesPerWeek,
    0,
  );

  // Sample assets are rendered from real transcripts, re-titled to this
  // network's own shows so the proposal shows their roster, not ours.
  const sampleEpisodes: Episode[] = DEMO_EPISODES.slice(
    0,
    Math.min(3, network.shows.length),
  ).map((episode, i) => ({
    ...episode,
    showId: network.shows[i].id,
  }));
  const samplePackage = buildPackage(network, sampleEpisodes, {
    weekOf: "Sample week",
    weeklyTarget: tier.assetsPerWeek,
  });
  const heroAsset = samplePackage.assets.find((a) => a.format === "hypergrid");
  const supportingAssets = (["carousel", "quote", "stat"] as const)
    .map((format) => samplePackage.assets.find((a) => a.format === format))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <main className="mx-auto max-w-6xl px-5">
      {/* ── Cover ── */}
      <section className="border-b border-white/10 py-14">
        <div className="flex items-center gap-3">
          <span
            className="grid h-11 w-11 place-items-center rounded-lg text-[14px] font-black"
            style={{
              backgroundColor: network.brand.accent,
              color: network.brand.base,
            }}
          >
            {network.brand.monogram}
          </span>
          <div>
            <p className="text-[15px] font-semibold text-white">{network.name}</p>
            <p className="text-[12px] text-white/40">{network.brand.wordmark}</p>
          </div>
        </div>

        <h1 className="mt-8 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          A visual social layer for the {network.name} roster
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/55">
          {network.positioning} This proposal covers what ships each week, how it
          is produced, and what it costs on the term that fits your budget cycle.
        </p>

        {network.contact ? (
          <p className="mt-8 text-[13px] text-white/40">
            Prepared for{" "}
            <span className="text-white/70">{network.contact.name}</span>,{" "}
            {network.contact.role}
          </p>
        ) : null}
      </section>

      {/* ── The situation ── */}
      <section className="border-b border-white/10 py-14">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          Where the roster stands
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              value: `${network.shows.length}`,
              label: "shows",
              detail: "Each needs a distinct look inside one network frame.",
            },
            {
              value: `${episodesPerWeek}`,
              label: "episodes a week",
              detail: "Every one of them is unmined visual material today.",
            },
            {
              value: `${capacity}`,
              label: "assets the roster could carry",
              detail: `At ${EPISODE_RECIPE.length} assets per episode across the format system.`,
            },
            {
              value: `${tier.assetsPerWeek}`,
              label: "contracted per week",
              detail:
                reserve > 0
                  ? `The other ${reserve} become the evergreen reserve.`
                  : "Full coverage of the roster's weekly output.",
            },
          ].map((item) => (
            <div key={item.label} className="border-l border-white/15 pl-4">
              <p className="text-3xl font-semibold tabular-nums tracking-tight text-white">
                {item.value}
              </p>
              <p className="mt-1 text-[13px] font-medium text-white/70">
                {item.label}
              </p>
              <p className="mt-1 text-[12px] leading-relaxed text-white/40">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full min-w-[640px] border-collapse text-left text-[13px]">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.03] text-[11px] uppercase tracking-wider text-white/40">
                <th className="px-4 py-2.5 font-semibold">Show</th>
                <th className="px-4 py-2.5 font-semibold">Vertical</th>
                <th className="px-4 py-2.5 font-semibold">Host</th>
                <th className="px-4 py-2.5 text-right font-semibold">Eps/wk</th>
                <th className="px-4 py-2.5 text-right font-semibold">
                  Assets/wk
                </th>
              </tr>
            </thead>
            <tbody>
              {network.shows.map((show) => (
                <tr key={show.id} className="border-b border-white/[0.06] last:border-0">
                  <td className="px-4 py-3">
                    <span className="flex items-center gap-2.5">
                      <span
                        className="h-2.5 w-2.5 shrink-0 rounded-full"
                        style={{
                          backgroundColor: show.accent ?? network.brand.accent,
                        }}
                      />
                      <span className="font-medium text-white">{show.name}</span>
                    </span>
                  </td>
                  <td className="px-4 py-3 text-white/50">{show.vertical}</td>
                  <td className="px-4 py-3 text-white/50">{show.host}</td>
                  <td className="px-4 py-3 text-right tabular-nums text-white/50">
                    {show.episodesPerWeek}
                  </td>
                  <td className="px-4 py-3 text-right tabular-nums text-white/70">
                    {show.episodesPerWeek * EPISODE_RECIPE.length}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Sample output in their brand ── */}
      <section className="border-b border-white/10 py-14">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          What it looks like in your brand
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/55">
          These are generated assets, rendered live in the {network.name} kit —
          not mockups. The palette, type, mark and corner treatment below are the
          ones every asset would carry from week one.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {heroAsset ? (
            <div>
              <div className="overflow-hidden rounded-xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                <AssetRenderer asset={heroAsset} brand={network.brand} />
              </div>
              <p className="mt-3 text-[12px] text-white/35">
                The flagship grid — {heroAsset.showName}.
              </p>
            </div>
          ) : null}

          <div className="grid gap-6 sm:grid-cols-2">
            {supportingAssets.map((asset) => (
              <div key={asset.id}>
                <div className="overflow-hidden rounded-xl border border-white/10">
                  <AssetRenderer asset={asset} brand={network.brand} />
                </div>
                <p className="mt-2.5 text-[12px] text-white/35">
                  {FORMATS[asset.format].name} ·{" "}
                  {PLATFORM_LABELS[asset.platform]} · {asset.width}×
                  {asset.height}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Link
          href="/network/studio"
          className="mt-8 inline-block rounded-lg border border-white/20 px-5 py-2.5 text-[14px] font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
        >
          Run one of your own episodes through it
        </Link>
      </section>

      {/* ── Pricing ── */}
      <section className="border-b border-white/10 py-14">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          Investment
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/55">
          A fixed monthly retainer against a contracted weekly asset floor. Pick
          the term that matches how {network.name} budgets — the deliverable is
          identical across all four.
        </p>
        <div className="mt-10">
          <ProposalPricing
            recommendedTierId={tier.id}
            networkName={network.name}
          />
        </div>
      </section>

      {/* ── Onboarding ── */}
      <section className="border-b border-white/10 py-14">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          The first ten working days
        </h2>
        <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-4">
          {ONBOARDING.map((phase) => (
            <div key={phase.window} className="bg-[#0b0b0e] p-5">
              <p className="text-[11px] font-bold uppercase tracking-widest text-white/30">
                {phase.window}
              </p>
              <h3 className="mt-3 text-[15px] font-semibold text-white">
                {phase.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-white/45">
                {phase.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Scope ── */}
      <section className="border-b border-white/10 py-14">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          Scope
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
              Included
            </p>
            <ul className="mt-4 space-y-2.5">
              {SCOPE.included.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 text-[13.5px] leading-relaxed text-white/65"
                >
                  <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/70" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
              Not included
            </p>
            <ul className="mt-4 space-y-2.5">
              {SCOPE.excluded.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 text-[13.5px] leading-relaxed text-white/45"
                >
                  <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Next step ── */}
      <section className="py-14">
        <div className="rounded-2xl border border-white/15 bg-[#0b0b0e] p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            The next step
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/55">
            Send one episode from each of two shows. Within five working days
            {network.contact ? ` ${network.contact.name.split(" ")[0]} gets` : " you get"}{" "}
            a calibration pack in the {network.name} brand — the real
            deliverable, at full quality, before any commitment. If the pack
            isn&rsquo;t right, there is nothing to cancel.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/network/studio"
              className="rounded-lg bg-white px-5 py-2.5 text-[14px] font-semibold text-black transition-colors hover:bg-white/85"
            >
              Open the studio
            </Link>
            <Link
              href="/network"
              className="rounded-lg border border-white/20 px-5 py-2.5 text-[14px] font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              How the system works
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
