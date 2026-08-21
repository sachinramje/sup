import Link from "next/link";
import AssetCard from "@/components/network/AssetCard";
import AssetRenderer from "@/components/network/assets/AssetRenderer";
import { BRAND_PRESETS } from "@/lib/network/brand";
import { DEMO_EPISODES, DEMO_NETWORK, DEMO_NETWORKS } from "@/lib/network/demo";
import { FORMATS, PLATFORM_LABELS } from "@/lib/network/formats";
import { buildPackage } from "@/lib/network/package";
import { formatUSD, marketRatePerAsset, recommendTier } from "@/lib/network/pricing";
import type { AssetFormat } from "@/lib/network/types";

/**
 * The system overview. Every figure and every asset on this page is produced by
 * the same pipeline the client runs each week — nothing here is mocked up.
 */

const pkg = buildPackage(DEMO_NETWORK, DEMO_EPISODES, {
  weekOf: "Week of 24 August",
  weeklyTarget: 30,
});

const PIPELINE = [
  {
    step: "01",
    title: "Episodes land",
    body: "The network drops audio or a transcript into a shared folder. No new tool for producers to learn, no change to how shows get made.",
  },
  {
    step: "02",
    title: "Insights are scored",
    body: "Every sentence is scored for density — figures, contrarian turns, frameworks, prescriptions — then de-duplicated so nine distinct ideas survive, not nine restatements of one.",
  },
  {
    step: "03",
    title: "Formats are assigned",
    body: "Each idea earns a format by what it is. Numbers become stat cards, arguments become carousels, and the episode as a whole becomes the grid.",
  },
  {
    step: "04",
    title: "Brand is applied",
    body: "The network's kit renders every asset — type, palette, mark, corner radius, texture. Per-show accents let individual shows stay distinct inside one network frame.",
  },
  {
    step: "05",
    title: "The week ships",
    body: "A single package lands Monday: artwork at export dimensions, platform-native caption copy, and a review board the network signs off in one pass.",
  },
];

function StatBlock({
  value,
  label,
  detail,
}: {
  value: string;
  label: string;
  detail: string;
}) {
  return (
    <div className="border-l border-white/15 pl-4">
      <p className="text-3xl font-semibold tracking-tight text-white tabular-nums">
        {value}
      </p>
      <p className="mt-1 text-[13px] font-medium text-white/70">{label}</p>
      <p className="mt-1 text-[12px] leading-relaxed text-white/40">{detail}</p>
    </div>
  );
}

export default function NetworkOverview() {
  const hero = pkg.assets.find((a) => a.format === "hypergrid")!;
  const showcase: AssetFormat[] = ["carousel", "quote", "stat", "story", "xcard"];
  const tier = recommendTier(DEMO_NETWORK.shows);
  const episodesPerWeek = DEMO_NETWORK.shows.reduce(
    (sum, s) => sum + s.episodesPerWeek,
    0,
  );

  return (
    <main className="mx-auto max-w-7xl px-5">
      {/* ── Hero ── */}
      <section className="grid gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
            White-label · Podcast networks
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Episodes in.
            <br />
            A branded distribution
            <br />
            package out.
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/55">
            A network uploads its week of episodes. What comes back is 20–30
            finished social assets across the full show roster — formatted for
            LinkedIn, Instagram and X, with the network&rsquo;s brand applied to
            every piece. Not a clip tool. A visual content system on a monthly
            retainer.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/network/studio"
              className="rounded-lg bg-white px-5 py-2.5 text-[14px] font-semibold text-black transition-colors hover:bg-white/85"
            >
              Run an episode through it
            </Link>
            <Link
              href={`/network/proposal/${DEMO_NETWORK.slug}`}
              className="rounded-lg border border-white/20 px-5 py-2.5 text-[14px] font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              See a network proposal
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <StatBlock
              value={`${pkg.summary.totalAssets}`}
              label="assets this week"
              detail={`From ${DEMO_EPISODES.length} episodes, ${pkg.summary.totalFrames} frames total.`}
            />
            <StatBlock
              value={`${Object.keys(FORMATS).length}`}
              label="formats"
              detail="Each one sized to a platform's native spec."
            />
            <StatBlock
              value={formatUSD(marketRatePerAsset())}
              label="freelance rate/asset"
              detail="What the same work costs commissioned piece by piece."
            />
            <StatBlock
              value="Mon"
              label="weekly drop"
              detail="One package, one review pass, one sign-off."
            />
          </div>
        </div>

        <div className="lg:pl-4">
          <div className="overflow-hidden rounded-xl border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
            <AssetRenderer asset={hero} brand={DEMO_NETWORK.brand} />
          </div>
          <p className="mt-3 text-[12px] text-white/35">
            The HyperGrid — {DEMO_NETWORK.name}, &ldquo;{hero.episodeTitle}
            &rdquo;. Generated from the transcript, not laid out by hand.
          </p>
        </div>
      </section>

      {/* ── Pipeline ── */}
      <section className="border-t border-white/10 py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          What happens between upload and Monday
        </h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-5">
          {PIPELINE.map((item) => (
            <div key={item.step} className="bg-[#0b0b0e] p-5">
              <p className="text-[11px] font-bold tabular-nums tracking-widest text-white/30">
                {item.step}
              </p>
              <h3 className="mt-3 text-[15px] font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-white/45">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── White-label proof ── */}
      <section className="border-t border-white/10 py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            One system, the network&rsquo;s brand
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/55">
            The same episode, the same layout engine, three different brand kits.
            Palette, type, mark, corner radius and background texture all come
            from the network&rsquo;s guidelines. Nothing in the renderer is
            hard-coded to a client, which is what makes this deployable across a
            roster in a week rather than a quarter.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(BRAND_PRESETS).map(([slug, brand]) => (
            <div key={slug}>
              <div className="overflow-hidden rounded-xl border border-white/10">
                <AssetRenderer
                  asset={pkg.assets.find((a) => a.format === "quote")!}
                  brand={brand}
                />
              </div>
              <p className="mt-2.5 flex items-center gap-2 text-[12px] text-white/45">
                <span
                  className="inline-block h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: brand.accent }}
                />
                {brand.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Format catalogue ── */}
      <section className="border-t border-white/10 py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            The format system
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/55">
            Six formats, each with a job. An idea is routed to the format that
            suits its shape, so the week&rsquo;s output is varied by design
            rather than by a designer&rsquo;s mood.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left text-[13px]">
            <thead>
              <tr className="border-b border-white/15 text-[11px] uppercase tracking-wider text-white/40">
                <th className="py-3 pr-4 font-semibold">Format</th>
                <th className="py-3 pr-4 font-semibold">Platform</th>
                <th className="py-3 pr-4 font-semibold">Export</th>
                <th className="py-3 pr-4 font-semibold">Role</th>
                <th className="py-3 text-right font-semibold">Freelance rate</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(FORMATS).map((spec) => (
                <tr key={spec.format} className="border-b border-white/[0.07]">
                  <td className="py-4 pr-4 font-semibold text-white">
                    {spec.name}
                    {spec.frames > 1 ? (
                      <span className="ml-1.5 text-[11px] font-normal text-white/35">
                        {spec.frames} frames
                      </span>
                    ) : null}
                  </td>
                  <td className="py-4 pr-4 text-white/55">
                    {PLATFORM_LABELS[spec.platform]}
                  </td>
                  <td className="py-4 pr-4 tabular-nums text-white/45">
                    {spec.width}×{spec.height}
                  </td>
                  <td className="py-4 pr-4 max-w-md text-white/45">{spec.role}</td>
                  <td className="py-4 text-right tabular-nums text-white/55">
                    {formatUSD(spec.marketRate)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Sample output ── */}
      <section className="border-t border-white/10 py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            A week off the line
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/55">
            Five of the {pkg.summary.totalAssets} assets generated for{" "}
            {DEMO_NETWORK.name} this week, each with the post copy it ships with.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {showcase.map((format) => {
            const asset = pkg.assets.find((a) => a.format === format);
            return asset ? (
              <AssetCard key={asset.id} asset={asset} brand={DEMO_NETWORK.brand} />
            ) : null;
          })}
        </div>
      </section>

      {/* ── Scale ── */}
      <section className="border-t border-white/10 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              It scales with the roster, not the headcount
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/55">
              {DEMO_NETWORK.name} publishes {episodesPerWeek} episodes a week
              across {DEMO_NETWORK.shows.length} shows. Adding a seventh show
              adds a row to the roster table, not a hire. The recommended
              deployment is{" "}
              <span className="font-semibold text-white">{tier.name}</span> —{" "}
              {tier.assetsPerWeek} assets a week, up to {tier.maxShows} shows.
            </p>
            <Link
              href={`/network/proposal/${DEMO_NETWORK.slug}`}
              className="mt-6 inline-block rounded-lg border border-white/20 px-5 py-2.5 text-[14px] font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              Read the {DEMO_NETWORK.name} proposal
            </Link>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#0b0b0e] p-5">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
              This week&rsquo;s package
            </p>
            <div className="mt-4 space-y-2.5">
              {pkg.summary.byShow.map((row) => (
                <div key={row.showId} className="flex items-center gap-3">
                  <span className="w-36 shrink-0 truncate text-[13px] text-white/70">
                    {row.showName}
                  </span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/[0.07]">
                    <div
                      className="h-full rounded-full bg-white/60"
                      style={{
                        width: `${(row.assets / pkg.summary.totalAssets) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="w-8 shrink-0 text-right text-[12px] tabular-nums text-white/45">
                    {row.assets}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
              {(Object.keys(pkg.summary.byPlatform) as (keyof typeof pkg.summary.byPlatform)[]).map(
                (platform) => (
                  <div key={platform}>
                    <p className="text-xl font-semibold tabular-nums text-white">
                      {pkg.summary.byPlatform[platform]}
                    </p>
                    <p className="text-[12px] text-white/40">
                      {PLATFORM_LABELS[platform]}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Proposal index ── */}
      <section className="border-t border-white/10 py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Network proposals
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/55">
          Each proposal is generated for one network: its roster, its recommended
          tier, and pricing on the term that matches how it budgets.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {DEMO_NETWORKS.map((network) => {
            const t = recommendTier(network.shows);
            return (
              <Link
                key={network.slug}
                href={`/network/proposal/${network.slug}`}
                className="group rounded-xl border border-white/10 bg-[#0b0b0e] p-5 transition-colors hover:border-white/25"
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="grid h-8 w-8 place-items-center rounded-md text-[11px] font-black"
                    style={{
                      backgroundColor: network.brand.accent,
                      color: network.brand.base,
                    }}
                  >
                    {network.brand.monogram}
                  </span>
                  <p className="text-[14px] font-semibold text-white">
                    {network.name}
                  </p>
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-white/45">
                  {network.positioning}
                </p>
                <p className="mt-4 text-[12px] text-white/60">
                  {network.shows.length} shows · {t.name} tier ·{" "}
                  {formatUSD(t.monthly)}/mo
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
