import { FORMATS, EPISODE_RECIPE } from "./formats";
import type { Show } from "./types";

/**
 * Retainer pricing, built to survive a media network's procurement process:
 * fixed monthly fee, a contracted weekly asset floor, and terms that land on
 * the quarter and annual boundaries networks actually budget against.
 */

export type TermId = "pilot" | "monthly" | "quarterly" | "annual";

export interface Tier {
  id: string;
  name: string;
  /** Roster ceiling. */
  maxShows: number;
  /** Contracted asset floor per week. */
  assetsPerWeek: number;
  /** List monthly rate on rolling monthly terms, in USD. */
  monthly: number;
  positioning: string;
  includes: string[];
  /** Formats unlocked at this tier. */
  formats: string[];
}

export const TIERS: Tier[] = [
  {
    id: "signal",
    name: "Signal",
    maxShows: 3,
    assetsPerWeek: 20,
    monthly: 6500,
    positioning: "A focused roster, or a network testing the system on its top shows.",
    includes: [
      "Up to 3 shows",
      "20 assets per week (~87/month)",
      "One brand kit, applied network-wide",
      "Weekly delivery, Monday drop",
      "Shared review board with two revision rounds",
    ],
    formats: ["HyperGrid", "Carousel", "Quote Card", "Stat Card"],
  },
  {
    id: "network",
    name: "Network",
    maxShows: 8,
    assetsPerWeek: 30,
    monthly: 11500,
    positioning:
      "The standard deployment. Full roster coverage without a design hire.",
    includes: [
      "Up to 8 shows",
      "30 assets per week (~130/month)",
      "Network brand kit plus per-show accents",
      "Weekly delivery, Monday drop",
      "Unlimited revision rounds inside the week",
      "Platform-native caption copy for every asset",
      "Monthly performance read against post-level engagement",
    ],
    formats: [
      "HyperGrid",
      "Carousel",
      "Quote Card",
      "Stat Card",
      "Story Frame",
      "Post Card",
    ],
  },
  {
    id: "flagship",
    name: "Flagship",
    maxShows: 20,
    assetsPerWeek: 45,
    monthly: 18500,
    positioning:
      "Full-catalogue networks, plus custom formats for sponsors and launches.",
    includes: [
      "Up to 20 shows",
      "45 assets per week (~195/month)",
      "Everything in Network",
      "Two custom formats built to the network's spec each quarter",
      "Sponsor-safe asset variants for sold segments",
      "Back-catalogue mining — evergreen packs from archive episodes",
      "Named art director and a standing weekly call",
    ],
    formats: ["All formats", "Custom formats", "Sponsor variants"],
  },
];

export interface Term {
  id: TermId;
  name: string;
  /** Fraction off the list monthly rate. */
  discount: number;
  /** Committed length in months. */
  months: number;
  invoicing: string;
  /** Why it fits a media budget cycle. */
  budgetFit: string;
  paymentTerms: string;
}

export const TERMS: Term[] = [
  {
    id: "pilot",
    name: "Pilot",
    discount: 0,
    months: 1.5,
    invoicing: "Single invoice, due on signature",
    budgetFit:
      "Six weeks, fits inside a discretionary line without a new budget request. Fee credits in full against the first quarter if the network continues.",
    paymentTerms: "Net 15",
  },
  {
    id: "monthly",
    name: "Monthly",
    discount: 0,
    months: 1,
    invoicing: "Invoiced monthly in advance",
    budgetFit:
      "Rolling, cancel with 30 days' notice. The right entry when the budget owner changes mid-year.",
    paymentTerms: "Net 30",
  },
  {
    id: "quarterly",
    name: "Quarterly",
    discount: 0.08,
    months: 3,
    invoicing: "Invoiced at the start of each quarter",
    budgetFit:
      "Billed on the quarter boundary, so the cost lands in one period and reconciles cleanly against quarterly ad revenue.",
    paymentTerms: "Net 30",
  },
  {
    id: "annual",
    name: "Annual",
    discount: 0.15,
    months: 12,
    invoicing: "Annual commitment, invoiced quarterly",
    budgetFit:
      "One line in the annual plan, four predictable invoices. Rate is locked for the term against mid-year increases.",
    paymentTerms: "Net 45",
  },
];

const WEEKS_PER_MONTH = 52 / 12;

/**
 * Cost of doing this in-house, used as the comparison the proposal is argued
 * against. Two mid-level designers is the realistic floor for this volume.
 */
export const IN_HOUSE_BASELINE = {
  designers: 2,
  salaryPerDesigner: 85_000,
  /** Payroll tax, benefits, equipment, space. */
  overheadRate: 0.3,
  /** Adobe CC, stock, scheduling, asset management, per year. */
  toolingPerYear: 7_200,
  /** Realistic output for two designers across a roster, per week. */
  assetsPerWeek: 22,
};

export function inHouseAnnualCost(): number {
  const { designers, salaryPerDesigner, overheadRate, toolingPerYear } =
    IN_HOUSE_BASELINE;
  return designers * salaryPerDesigner * (1 + overheadRate) + toolingPerYear;
}

export function inHouseMonthlyCost(): number {
  return inHouseAnnualCost() / 12;
}

/**
 * The honest comparison. An in-house pair costs less than the top tier in
 * absolute terms but produces a fraction of the volume, so the two are only
 * comparable per asset.
 */
export function inHouseCostPerAsset(): number {
  const monthlyAssets = IN_HOUSE_BASELINE.assetsPerWeek * WEEKS_PER_MONTH;
  return inHouseMonthlyCost() / monthlyAssets;
}

export interface Quote {
  tier: Tier;
  term: Term;
  /** List rate before term discount. */
  listMonthly: number;
  /** What the network actually pays per month. */
  effectiveMonthly: number;
  /** Discount in dollars per month. */
  monthlySaving: number;
  /** Total across the committed term. */
  commitmentTotal: number;
  /** Number of invoices across the term. */
  invoiceCount: number;
  invoiceAmount: number;
  assetsPerMonth: number;
  costPerAsset: number;
  /** Cost per asset at open-market freelance rates, for comparison. */
  marketCostPerAsset: number;
  /** Monthly delta against running an in-house team. */
  vsInHouseMonthly: number;
  vsInHouseAnnual: number;
  /** Per-asset cost of the in-house team, at its realistic output. */
  inHouseCostPerAsset: number;
  /** Assets per month an in-house pair actually ships, for the same comparison. */
  inHouseAssetsPerMonth: number;
}

/** Average freelance rate across the formats in the standard weekly recipe. */
export function marketRatePerAsset(): number {
  const rates = EPISODE_RECIPE.map((f) => FORMATS[f].marketRate);
  return rates.reduce((sum, r) => sum + r, 0) / rates.length;
}

export function buildQuote(tierId: string, termId: TermId): Quote {
  const tier = TIERS.find((t) => t.id === tierId) ?? TIERS[1];
  const term = TERMS.find((t) => t.id === termId) ?? TERMS[1];

  const listMonthly = tier.monthly;
  const effectiveMonthly = Math.round(listMonthly * (1 - term.discount));
  const commitmentTotal = Math.round(effectiveMonthly * term.months);
  const assetsPerMonth = Math.round(tier.assetsPerWeek * WEEKS_PER_MONTH);

  // Quarterly and annual bill on the quarter; monthly and pilot bill once each period.
  const invoiceCount =
    term.id === "annual" ? 4 : term.id === "quarterly" ? 1 : 1;
  const invoiceAmount = Math.round(commitmentTotal / invoiceCount);

  return {
    tier,
    term,
    listMonthly,
    effectiveMonthly,
    monthlySaving: listMonthly - effectiveMonthly,
    commitmentTotal,
    invoiceCount,
    invoiceAmount,
    assetsPerMonth,
    costPerAsset: Math.round(effectiveMonthly / assetsPerMonth),
    marketCostPerAsset: Math.round(marketRatePerAsset()),
    vsInHouseMonthly: Math.round(inHouseMonthlyCost() - effectiveMonthly),
    vsInHouseAnnual: Math.round(inHouseAnnualCost() - effectiveMonthly * 12),
    inHouseCostPerAsset: Math.round(inHouseCostPerAsset()),
    inHouseAssetsPerMonth: Math.round(IN_HOUSE_BASELINE.assetsPerWeek * WEEKS_PER_MONTH),
  };
}

/** Weekly asset volume a roster can actually sustain, from its publish cadence. */
export function rosterWeeklyCapacity(shows: Show[]): number {
  const episodesPerWeek = shows.reduce((sum, s) => sum + s.episodesPerWeek, 0);
  return Math.round(episodesPerWeek * EPISODE_RECIPE.length);
}

/**
 * Smallest tier whose roster ceiling covers the network.
 *
 * Capacity above the tier's contracted volume is deliberately not a reason to
 * upgrade — the overflow becomes the evergreen reserve, which is a feature of
 * the retainer rather than a shortfall in it.
 */
export function recommendTier(shows: Show[]): Tier {
  return TIERS.find((t) => shows.length <= t.maxShows) ?? TIERS[TIERS.length - 1];
}

/** Assets a roster could produce beyond its contracted weekly volume. */
export function reserveCapacity(shows: Show[], tier: Tier): number {
  return Math.max(0, rosterWeeklyCapacity(shows) - tier.assetsPerWeek);
}

export function formatUSD(n: number): string {
  return `$${Math.round(n).toLocaleString("en-US")}`;
}
