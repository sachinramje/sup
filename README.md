# Visual Social Layer for Podcast Networks

A white-label system for podcast networks: episodes go in, and a structured
visual distribution package comes out — formatted for LinkedIn, Instagram and
X, with the network's brand applied to every asset.

The product surface lives under `/network`:

| Route | What it is |
| --- | --- |
| `/network` | How the system works, the format catalogue, and a week of real output. |
| `/network/studio` | Paste a transcript and run the live pipeline: scoring, viability, format routing, rendering. |
| `/network/proposal/[slug]` | The network-facing proposal — roster, sample assets in the network's own brand, and pricing by budget cycle. |

Three demo networks are wired up: `meridian`, `northgate`, `helix`.

## The pipeline

```
Episode ──▶ extractInsights ──▶ assessViability ──▶ cutEpisode ──▶ buildPackage
           (score + dedupe)     (HP-9/7/5/3)      (format routing)  (weekly volume)
```

Everything is deterministic and runs locally — the same episode always produces
the same package, which is what makes the weekly output reviewable and the
studio preview an honest representation of the deliverable.

| Module | Responsibility |
| --- | --- |
| `lib/network/types.ts` | Domain types: `Episode`, `Insight`, `AssetSpec`, `BrandKit`, `DistributionPackage`. |
| `lib/network/extract.ts` | Transcript → scored, de-duplicated insights, plus the Source Viability Assessment. |
| `lib/network/formats.ts` | The six formats, their export dimensions, and platform-native caption copy. |
| `lib/network/package.ts` | Episode → assets, and roster → weekly package trimmed to contracted volume. |
| `lib/network/pricing.ts` | Tiers, budget-cycle terms, quote maths, and the in-house comparison. |
| `lib/network/brand.ts` | Brand kit resolution and presets. |
| `lib/network/typeset.ts` | SVG text fitting — every line break and type size is decided here. |

### Scoring

Sentences are scored for insight density: figures, contrarian turns,
frameworks and prescriptions score up; hedging, questions and show admin score
down or are excluded. Near-duplicates are dropped by token overlap so nine
distinct ideas survive rather than nine restatements of one.

An episode that can't fill nine blocks drops to a reduced grid (HP-7, HP-5,
HP-3) instead of being padded with weak material.

### Formats

The flagship HyperGrid draws from the whole insight pool without consuming it —
it is the episode's full summary. Every other asset amplifies an individual
point and takes exclusive ownership of its insights, so a week's feed never
repeats itself.

## White-label

`BrandKit` is the entire white-label surface: palette, type stacks, monogram,
wordmark, corner radius and background texture. Nothing in the renderers is
hard-coded to a client, and per-show accents let individual shows stay distinct
inside one network frame. See the three-brand comparison on `/network`.

## Development

```bash
npm install
npm run dev      # http://localhost:3000/network
npm run build
npx tsc --noEmit
npx eslint .
```

Built on Next.js 16 (App Router, Turbopack) and Tailwind CSS v4.
