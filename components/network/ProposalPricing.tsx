"use client";

import { useState } from "react";
import {
  IN_HOUSE_BASELINE,
  TERMS,
  TIERS,
  buildQuote,
  formatUSD,
  type TermId,
} from "@/lib/network/pricing";

/**
 * The commercial section of the proposal.
 *
 * A network's objection is rarely the number — it is whether the number fits a
 * budget line that already exists. So the term is the primary control here, and
 * every term states its invoicing shape and payment terms alongside the price.
 */
export default function ProposalPricing({
  recommendedTierId,
  networkName,
}: {
  recommendedTierId: string;
  networkName: string;
}) {
  const [tierId, setTierId] = useState(recommendedTierId);
  const [termId, setTermId] = useState<TermId>("quarterly");
  const quote = buildQuote(tierId, termId);

  return (
    <div className="space-y-8">
      {/* Term selector */}
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
          Commercial term
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {TERMS.map((term) => (
            <button
              key={term.id}
              type="button"
              onClick={() => setTermId(term.id)}
              aria-pressed={term.id === termId}
              className={`rounded-lg border px-4 py-2 text-[13px] font-medium transition-colors ${
                term.id === termId
                  ? "border-white/50 bg-white text-black"
                  : "border-white/15 text-white/65 hover:border-white/35 hover:text-white"
              }`}
            >
              {term.name}
              {term.discount > 0 ? (
                <span
                  className={
                    term.id === termId
                      ? "ml-1.5 text-black/50"
                      : "ml-1.5 text-white/35"
                  }
                >
                  −{Math.round(term.discount * 100)}%
                </span>
              ) : null}
            </button>
          ))}
        </div>
        <p className="mt-3 max-w-2xl text-[13px] leading-relaxed text-white/50">
          {quote.term.budgetFit}
        </p>
      </div>

      {/* Tiers */}
      <div className="grid gap-4 lg:grid-cols-3">
        {TIERS.map((tier) => {
          const tierQuote = buildQuote(tier.id, termId);
          const selected = tier.id === tierId;
          const recommended = tier.id === recommendedTierId;
          return (
            <button
              key={tier.id}
              type="button"
              onClick={() => setTierId(tier.id)}
              aria-pressed={selected}
              className={`flex flex-col rounded-xl border p-5 text-left transition-colors ${
                selected
                  ? "border-white/45 bg-white/[0.06]"
                  : "border-white/10 bg-[#0b0b0e] hover:border-white/25"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-[15px] font-semibold text-white">
                  {tier.name}
                </span>
                {recommended ? (
                  <span className="rounded-full border border-white/25 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/60">
                    Recommended
                  </span>
                ) : null}
              </div>

              <p className="mt-3 text-3xl font-semibold tabular-nums tracking-tight text-white">
                {formatUSD(tierQuote.effectiveMonthly)}
                <span className="ml-1 text-[13px] font-normal text-white/40">
                  /mo
                </span>
              </p>
              {tierQuote.monthlySaving > 0 ? (
                <p className="mt-1 text-[12px] text-white/40">
                  <span className="line-through">
                    {formatUSD(tierQuote.listMonthly)}
                  </span>{" "}
                  on rolling monthly
                </p>
              ) : (
                <p className="mt-1 text-[12px] text-white/40">
                  {tier.assetsPerWeek} assets/week, up to {tier.maxShows} shows
                </p>
              )}

              <p className="mt-4 text-[13px] leading-relaxed text-white/45">
                {tier.positioning}
              </p>

              <ul className="mt-4 space-y-1.5 border-t border-white/10 pt-4">
                {tier.includes.map((line) => (
                  <li
                    key={line}
                    className="flex gap-2 text-[12.5px] leading-relaxed text-white/55"
                  >
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-white/35" />
                    {line}
                  </li>
                ))}
              </ul>
            </button>
          );
        })}
      </div>

      {/* Selected quote */}
      <div className="rounded-xl border border-white/15 bg-[#0b0b0e] p-6">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
          {networkName} — {quote.tier.name}, {quote.term.name}
        </p>

        <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              value: formatUSD(quote.effectiveMonthly),
              label: "per month",
              detail: `${quote.assetsPerMonth} assets a month.`,
            },
            {
              value: `${quote.invoiceCount}×${" "}${formatUSD(quote.invoiceAmount)}`,
              label: "invoicing",
              detail: `${quote.term.invoicing}. ${quote.term.paymentTerms}.`,
            },
            {
              value: formatUSD(quote.costPerAsset),
              label: "per asset",
              detail: `Against ${formatUSD(quote.marketCostPerAsset)} commissioned freelance.`,
            },
            {
              value: formatUSD(quote.commitmentTotal),
              label: "term total",
              detail:
                quote.term.months === 1
                  ? "Rolling, 30 days' notice."
                  : `Across ${quote.term.months} months.`,
            },
          ].map((item) => (
            <div key={item.label} className="border-l border-white/15 pl-4">
              <p className="text-2xl font-semibold tabular-nums tracking-tight text-white">
                {item.value}
              </p>
              <p className="mt-1 text-[12.5px] font-medium text-white/70">
                {item.label}
              </p>
              <p className="mt-1 text-[12px] leading-relaxed text-white/40">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* What it replaces */}
      <div>
        <h3 className="text-[15px] font-semibold text-white">
          What this replaces
        </h3>
        <p className="mt-2 max-w-2xl text-[13px] leading-relaxed text-white/50">
          The realistic in-house equivalent is {IN_HOUSE_BASELINE.designers}{" "}
          mid-level designers at {formatUSD(IN_HOUSE_BASELINE.salaryPerDesigner)}{" "}
          each, plus{" "}
          {Math.round(IN_HOUSE_BASELINE.overheadRate * 100)}% loaded overhead and{" "}
          {formatUSD(IN_HOUSE_BASELINE.toolingPerYear)} of tooling a year. That
          team ships roughly {quote.inHouseAssetsPerMonth} assets a month, so the
          two are only comparable per asset.
        </p>

        <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full min-w-[560px] border-collapse text-left text-[13px]">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.03] text-[11px] uppercase tracking-wider text-white/40">
                <th className="px-4 py-2.5 font-semibold" />
                <th className="px-4 py-2.5 text-right font-semibold">In-house</th>
                <th className="px-4 py-2.5 text-right font-semibold">
                  {quote.tier.name} · {quote.term.name}
                </th>
              </tr>
            </thead>
            <tbody className="tabular-nums">
              <tr className="border-b border-white/[0.06]">
                <td className="px-4 py-3 text-white/60">Cost per month</td>
                <td className="px-4 py-3 text-right text-white/70">
                  {formatUSD(
                    (IN_HOUSE_BASELINE.designers *
                      IN_HOUSE_BASELINE.salaryPerDesigner *
                      (1 + IN_HOUSE_BASELINE.overheadRate) +
                      IN_HOUSE_BASELINE.toolingPerYear) /
                      12,
                  )}
                </td>
                <td className="px-4 py-3 text-right font-semibold text-white">
                  {formatUSD(quote.effectiveMonthly)}
                </td>
              </tr>
              <tr className="border-b border-white/[0.06]">
                <td className="px-4 py-3 text-white/60">Assets per month</td>
                <td className="px-4 py-3 text-right text-white/70">
                  {quote.inHouseAssetsPerMonth}
                </td>
                <td className="px-4 py-3 text-right font-semibold text-white">
                  {quote.assetsPerMonth}
                </td>
              </tr>
              <tr className="border-b border-white/[0.06]">
                <td className="px-4 py-3 text-white/60">Cost per asset</td>
                <td className="px-4 py-3 text-right text-white/70">
                  {formatUSD(quote.inHouseCostPerAsset)}
                </td>
                <td className="px-4 py-3 text-right font-semibold text-white">
                  {formatUSD(quote.costPerAsset)}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-white/60">Time to first asset</td>
                <td className="px-4 py-3 text-right text-white/70">
                  8–12 weeks to hire
                </td>
                <td className="px-4 py-3 text-right font-semibold text-white">
                  10 working days
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
