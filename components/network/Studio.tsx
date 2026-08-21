"use client";

import { useMemo, useState } from "react";
import AssetCard from "@/components/network/AssetCard";
import { BRAND_PRESETS } from "@/lib/network/brand";
import { DEMO_EPISODES, DEMO_NETWORK } from "@/lib/network/demo";
import { assessViability, extractInsights } from "@/lib/network/extract";
import { PLATFORM_LABELS } from "@/lib/network/formats";
import { cutEpisode } from "@/lib/network/package";
import type { Episode, Show } from "@/lib/network/types";

/**
 * The studio: the same pipeline the weekly package runs, exposed one episode at
 * a time so a prospect can put their own transcript through it and see exactly
 * what comes back.
 */

interface Draft {
  showName: string;
  title: string;
  host: string;
  guest: string;
  runtimeMinutes: number;
  transcript: string;
}

function draftFromDemo(index: number): Draft {
  const episode = DEMO_EPISODES[index];
  const show = DEMO_NETWORK.shows.find((s) => s.id === episode.showId);
  return {
    showName: show?.name ?? "Untitled Show",
    title: episode.title,
    host: episode.host ?? "",
    guest: episode.guest ?? "",
    runtimeMinutes: episode.runtimeMinutes,
    transcript: episode.transcript,
  };
}

const KIND_LABELS: Record<string, string> = {
  stat: "Stat",
  contrarian: "Contrarian",
  framework: "Framework",
  principle: "Principle",
  tactic: "Tactic",
  story: "Story",
};

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-white/40">
        {label}
      </span>
      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-lg border border-white/12 bg-[#0d0d10] px-3 py-2 text-[13px] text-white placeholder:text-white/25 outline-none transition-colors focus:border-white/35";

export default function Studio() {
  const [draft, setDraft] = useState<Draft>(() => draftFromDemo(0));
  // Seeded from the same object as `draft`, so identity comparison reports the
  // form as clean on first paint rather than offering a no-op run.
  const [submitted, setSubmitted] = useState<Draft>(draft);
  const [brandSlug, setBrandSlug] = useState<string>("meridian");

  const brand = BRAND_PRESETS[brandSlug];

  const run = useMemo(() => {
    const episode: Episode = {
      id: "studio-episode",
      showId: "studio-show",
      title: submitted.title.trim() || "Untitled episode",
      host: submitted.host.trim() || undefined,
      guest: submitted.guest.trim() || undefined,
      runtimeMinutes: submitted.runtimeMinutes || 45,
      transcript: submitted.transcript,
    };
    const show: Show = {
      id: "studio-show",
      name: submitted.showName.trim() || "Untitled show",
      vertical: "—",
      host: submitted.host.trim() || "—",
      episodesPerWeek: 1,
    };

    const insights = extractInsights(episode, { limit: 16 });
    const report = assessViability(insights);
    const cut = cutEpisode(episode, show, DEMO_NETWORK.name);
    return { insights, report, assets: cut.assets };
  }, [submitted]);

  const wordCount = submitted.transcript.split(/\s+/).filter(Boolean).length;
  const dirty = draft !== submitted;

  return (
    <main className="mx-auto max-w-7xl px-5 py-10">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Studio
        </h1>
        <p className="mt-3 text-[15px] leading-relaxed text-white/55">
          Paste a transcript and run it. The scorer, the viability check, the
          format routing and the renderers are the same ones behind the weekly
          package — this is the product, not a preview of it.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[360px_1fr] lg:items-start">
        {/* ── Input ── */}
        <div className="space-y-5 lg:sticky lg:top-20">
          <div className="rounded-xl border border-white/10 bg-[#0b0b0e] p-5">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
              Load a sample
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {DEMO_EPISODES.map((episode, i) => (
                <button
                  key={episode.id}
                  type="button"
                  onClick={() => {
                    const next = draftFromDemo(i);
                    setDraft(next);
                    setSubmitted(next);
                  }}
                  className="rounded-md border border-white/15 px-2.5 py-1.5 text-[12px] text-white/65 transition-colors hover:border-white/35 hover:text-white"
                >
                  {DEMO_NETWORK.shows.find((s) => s.id === episode.showId)?.name ??
                    episode.title}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4 rounded-xl border border-white/10 bg-[#0b0b0e] p-5">
            <Field label="Show">
              <input
                className={inputClass}
                value={draft.showName}
                onChange={(e) => setDraft({ ...draft, showName: e.target.value })}
              />
            </Field>
            <Field label="Episode title">
              <input
                className={inputClass}
                value={draft.title}
                onChange={(e) => setDraft({ ...draft, title: e.target.value })}
              />
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Host">
                <input
                  className={inputClass}
                  value={draft.host}
                  onChange={(e) => setDraft({ ...draft, host: e.target.value })}
                />
              </Field>
              <Field label="Guest">
                <input
                  className={inputClass}
                  value={draft.guest}
                  onChange={(e) => setDraft({ ...draft, guest: e.target.value })}
                />
              </Field>
            </div>
            <Field label="Runtime (minutes)">
              <input
                type="number"
                min={1}
                className={inputClass}
                value={draft.runtimeMinutes}
                onChange={(e) =>
                  setDraft({ ...draft, runtimeMinutes: Number(e.target.value) })
                }
              />
            </Field>
            <Field label="Transcript">
              <textarea
                rows={10}
                className={`${inputClass} resize-y font-mono text-[12px] leading-relaxed`}
                placeholder={"Speaker Name: what they said…"}
                value={draft.transcript}
                onChange={(e) => setDraft({ ...draft, transcript: e.target.value })}
              />
            </Field>
            <p className="text-[11px] text-white/30">
              Speaker-labelled lines score best — the guest is weighted above the
              host. Plain prose works too.
            </p>

            <button
              type="button"
              onClick={() => setSubmitted(draft)}
              disabled={!dirty}
              className="w-full rounded-lg bg-white px-4 py-2.5 text-[14px] font-semibold text-black transition-colors hover:bg-white/85 disabled:cursor-default disabled:bg-white/20 disabled:text-white/40"
            >
              {dirty ? "Run the pipeline" : "Up to date"}
            </button>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#0b0b0e] p-5">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
              Brand kit
            </p>
            <div className="mt-3 space-y-2">
              {Object.entries(BRAND_PRESETS).map(([slug, preset]) => (
                <button
                  key={slug}
                  type="button"
                  onClick={() => setBrandSlug(slug)}
                  className={`flex w-full items-center gap-3 rounded-lg border px-3 py-2 text-left transition-colors ${
                    slug === brandSlug
                      ? "border-white/40 bg-white/5"
                      : "border-white/10 hover:border-white/25"
                  }`}
                >
                  <span
                    className="h-6 w-6 shrink-0 rounded"
                    style={{
                      backgroundColor: preset.accent,
                      border: `2px solid ${preset.surface}`,
                    }}
                  />
                  <span className="text-[13px] text-white/75">{preset.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Output ── */}
        <div className="space-y-8">
          <div className="grid gap-4 sm:grid-cols-4">
            {[
              { value: wordCount.toLocaleString("en-US"), label: "words in" },
              { value: `${run.insights.length}`, label: "insights found" },
              { value: run.report.formatName, label: "grid format" },
              { value: `${run.assets.length}`, label: "assets out" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-[#0b0b0e] px-4 py-3.5"
              >
                <p className="text-2xl font-semibold tabular-nums text-white">
                  {item.value}
                </p>
                <p className="mt-0.5 text-[12px] text-white/40">{item.label}</p>
              </div>
            ))}
          </div>

          <div
            className={`rounded-xl border px-4 py-3 text-[13px] ${
              run.report.viability === "full"
                ? "border-emerald-400/25 bg-emerald-400/[0.06] text-emerald-200/80"
                : run.report.viability === "reduced"
                  ? "border-amber-400/25 bg-amber-400/[0.06] text-amber-200/80"
                  : "border-rose-400/25 bg-rose-400/[0.06] text-rose-200/80"
            }`}
          >
            <span className="font-semibold">
              Source viability: {run.report.viability}
            </span>{" "}
            — {run.report.note}
          </div>

          {run.insights.length > 0 ? (
            <div>
              <h2 className="text-[15px] font-semibold text-white">
                Scored insights
              </h2>
              <div className="mt-3 overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full min-w-[620px] border-collapse text-left text-[13px]">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/[0.03] text-[11px] uppercase tracking-wider text-white/40">
                      <th className="px-4 py-2.5 font-semibold">Score</th>
                      <th className="px-4 py-2.5 font-semibold">Kind</th>
                      <th className="px-4 py-2.5 font-semibold">At</th>
                      <th className="px-4 py-2.5 font-semibold">Block label</th>
                      <th className="px-4 py-2.5 font-semibold">Line</th>
                    </tr>
                  </thead>
                  <tbody>
                    {run.insights.map((insight) => (
                      <tr
                        key={insight.id}
                        className="border-b border-white/[0.06] last:border-0"
                      >
                        <td className="px-4 py-3 tabular-nums font-semibold text-white">
                          {insight.score}
                        </td>
                        <td className="px-4 py-3 text-white/50">
                          {KIND_LABELS[insight.kind] ?? insight.kind}
                        </td>
                        <td className="px-4 py-3 tabular-nums text-white/35">
                          {insight.timecode}
                        </td>
                        <td className="px-4 py-3 font-medium text-white/75">
                          {insight.label}
                        </td>
                        <td className="max-w-md px-4 py-3 text-white/40">
                          {insight.text}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <p className="rounded-xl border border-white/10 bg-[#0b0b0e] px-4 py-8 text-center text-[13px] text-white/40">
              No sentences cleared the density bar. Paste a longer transcript, or
              one with speaker labels.
            </p>
          )}

          {run.assets.length > 0 ? (
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-[15px] font-semibold text-white">
                  Generated assets
                </h2>
                <p className="text-[12px] text-white/35">
                  {(["linkedin", "instagram", "x"] as const)
                    .map(
                      (p) =>
                        `${run.assets.filter((a) => a.platform === p).length} ${PLATFORM_LABELS[p]}`,
                    )
                    .join(" · ")}
                </p>
              </div>
              <div className="mt-4 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {run.assets.map((asset) => (
                  <AssetCard key={asset.id} asset={asset} brand={brand} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
}
