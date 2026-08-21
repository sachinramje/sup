import { BRAND_PRESETS } from "./brand";
import type { Episode, Network } from "./types";

/**
 * Demo roster. Stands in for a real client during onboarding — the studio runs
 * the identical pipeline against these that it runs against a network's own
 * uploads, so what a prospect sees in the preview is what they receive.
 */

export const DEMO_EPISODES: Episode[] = [
  {
    id: "ep-capital-114",
    showId: "show-capital",
    title: "Why most seed rounds are priced wrong",
    guest: "Dana Whitfield",
    host: "Marcus Reid",
    runtimeMinutes: 58,
    publishedOn: "2026-08-18",
    transcript: `Marcus Reid: Welcome back to The Capital Line. Today I'm joined by Dana Whitfield, who has led seed investments for the better part of a decade.
Dana Whitfield: Thanks for having me, Marcus.
Marcus Reid: Let's start with the thing you keep saying that annoys people.
Dana Whitfield: Most people think a seed round is priced off traction, but it is almost entirely priced off scarcity of access to the round.
Dana Whitfield: The mistake founders make is optimising for the headline valuation instead of the quality of the cap table they end up with.
Dana Whitfield: We looked at 340 seed rounds from the last four years and the ones that raised at the highest multiples were 30% more likely to take a flat or down round next time.
Marcus Reid: That is a genuinely uncomfortable number.
Dana Whitfield: It is, and nobody talks about it because the headline number is the only part of the round that becomes public.
Dana Whitfield: The key is to raise the smallest round that buys you eighteen months of conviction, not the largest round the market will clear.
Dana Whitfield: There are three things a seed round actually has to buy: a hiring window, a proof point, and the right to be believed next time.
Dana Whitfield: If a round does not buy all three, the price is irrelevant because you are going to be back in the market before the story has changed.
Marcus Reid: How do you explain that to a founder who has a term sheet in hand at a number they love?
Dana Whitfield: I ask them what the next round looks like at three times this price, and most of the time the room goes quiet.
Dana Whitfield: Valuation is a promise about the future that you personally have to keep.
Dana Whitfield: When I started investing I thought the job was picking winners, and it turns out the job is surviving your own pattern matching.
Dana Whitfield: The best founders I have backed treat their investors as a distribution problem rather than a funding problem.
Dana Whitfield: A good board member changes the speed of a decision, not the direction of it.
Marcus Reid: What about the dilution maths, because founders obsess over that.
Dana Whitfield: Founders will fight for two points of dilution and then give away eighteen months of focus on a product line that never had a market.
Dana Whitfield: Focus is the only genuinely scarce input in an early company, and it is the one nobody puts on the cap table.
Dana Whitfield: We tell every company to write down the one number that would make the next round obvious, and then to delete every project that does not move it.
Dana Whitfield: Roughly 70% of the seed companies we see have four active priorities and none of them are that number.
Dana Whitfield: The trick is that constraint is not a limitation you accept, it is a decision you make on purpose.
Marcus Reid: Let's talk about the current market for a second.
Dana Whitfield: Conventional wisdom says capital is scarce right now, but capital is abundant and conviction is scarce.
Dana Whitfield: There is more dry powder sitting in seed funds than at any point in the last decade and it is moving slower than it ever has.
Dana Whitfield: The founders raising well right now are the ones who have made their progress legible rather than the ones who have made the most progress.
Dana Whitfield: Legibility is a skill and most technical founders treat it as a tax.
Marcus Reid: That is a good line to end the first half on.
Dana Whitfield: The last thing I would say is that your first ten hires price your company more accurately than any investor ever will.
Dana Whitfield: You should treat every hire in the first year as a two hundred thousand dollar bet with no liquidation preference.
Marcus Reid: Dana, this has been great. Thanks for coming on.`,
  },
  {
    id: "ep-build-088",
    showId: "show-build",
    title: "The operations debt nobody budgets for",
    guest: "Priya Raman",
    host: "Elena Cortez",
    runtimeMinutes: 44,
    publishedOn: "2026-08-19",
    transcript: `Elena Cortez: This is Build Notes. Priya Raman has scaled operations at three companies through the messy middle.
Priya Raman: Happy to be here.
Elena Cortez: You have a phrase you use, operations debt. Define it.
Priya Raman: Operations debt is every manual process you kept because it was working, right up until the week it stopped working for everyone at once.
Priya Raman: Most teams think they have a tooling problem, but they almost always have an ownership problem wearing a tooling costume.
Priya Raman: When we audited our own processes we found 62 recurring workflows and exactly 11 of them had a named owner.
Elena Cortez: That ratio is brutal.
Priya Raman: The rule is simple: if a process does not have one name attached to it, it does not exist, it is just a habit several people share.
Priya Raman: There are two failure modes in scaling operations, and they look identical from the outside.
Priya Raman: The first is that you automated too early and encoded a process nobody had actually agreed on.
Priya Raman: The second is that you automated too late and now three teams have built incompatible workarounds you have to unwind first.
Priya Raman: The way to tell them apart is to ask how many people would notice if you turned the process off tomorrow.
Elena Cortez: What does the fix actually look like week to week?
Priya Raman: We spent a full quarter doing nothing but writing down what already happened, and it was the highest leverage quarter of the year.
Priya Raman: You cannot automate a process you cannot describe out loud in under two minutes.
Priya Raman: Documentation is not overhead, it is the interface between the people who built the process and the people who will inherit it.
Priya Raman: Every handoff between two teams costs you about a day and a half of real calendar time regardless of how urgent everyone says it is.
Priya Raman: So the highest return move in operations is almost always removing a handoff rather than speeding one up.
Priya Raman: We cut our onboarding flow from nine steps to four and the completion rate moved 23 points in six weeks.
Elena Cortez: And that was purely structural, no new tooling?
Priya Raman: No new tooling at all, we just deleted the steps that existed because somebody in 2023 wanted a report.
Priya Raman: A surprising amount of operational complexity is a report that outlived the person who asked for it.
Priya Raman: The counterintuitive part is that adding a person to an overloaded operations team usually makes throughput worse for the first two months.
Priya Raman: You should hire into operations one quarter before the pain arrives, not one quarter after, and almost nobody budgets that way.
Elena Cortez: Because the pain is what unlocks the headcount.
Priya Raman: Exactly, and that is why operations is structurally always behind.
Priya Raman: If you want one metric, track the number of processes with a named owner and watch it against headcount growth.
Priya Raman: When that line diverges you have about a quarter before something visible breaks.
Elena Cortez: Priya, thank you, this was excellent.`,
  },
  {
    id: "ep-signal-042",
    showId: "show-signal",
    title: "What audience data actually tells you",
    guest: "Tomas Nkemelu",
    host: "Ruth Alvarez",
    runtimeMinutes: 51,
    publishedOn: "2026-08-20",
    transcript: `Ruth Alvarez: Welcome to Signal Room. Tomas Nkemelu spends his days inside audience data for media companies.
Tomas Nkemelu: Glad to be here, Ruth.
Ruth Alvarez: Start with the thing people get wrong.
Tomas Nkemelu: Everyone thinks audience data tells you what people want, but it only ever tells you what people were offered and then tolerated.
Tomas Nkemelu: Downloads measure distribution, completion measures the product, and only one of those is under your control.
Tomas Nkemelu: We analysed 1200 shows and completion rate predicted twelve month retention roughly four times better than raw download growth.
Ruth Alvarez: Which is the opposite of what most networks report to advertisers.
Tomas Nkemelu: It is, and that gap is the single biggest mispricing in podcast advertising today.
Tomas Nkemelu: A show with 40000 loyal listeners is worth more than a show with 200000 casual ones, and the market has not caught up.
Tomas Nkemelu: The truth is that attention compounds and reach does not.
Tomas Nkemelu: There are three signals worth watching: completion, return rate within fourteen days, and whether anyone shares an episode without being asked.
Tomas Nkemelu: The third one is the hardest to measure and it is the only one that predicts a breakout.
Ruth Alvarez: How should a network act on that?
Tomas Nkemelu: You should stop optimising the first thirty seconds and start optimising minute eight, because that is where the drop actually happens.
Tomas Nkemelu: We found the median drop-off cluster sits between minute six and minute nine on almost every interview format.
Tomas Nkemelu: The key is that people do not leave because the episode got worse, they leave because it stopped promising anything new.
Tomas Nkemelu: An episode needs a second promise around the eight minute mark and almost no one writes one.
Tomas Nkemelu: When I was producing I thought the cold open was the whole game, and the cold open is maybe 20% of the game.
Tomas Nkemelu: Visual distribution is now doing the job the cold open used to do, because the decision to listen happens on a feed, not in a player.
Tomas Nkemelu: A podcast without a visual layer is competing for attention with one hand behind its back.
Tomas Nkemelu: Networks that post consistently formatted visual assets see roughly 3x the episode-page traffic of networks that post clips alone.
Ruth Alvarez: Why formatted rather than just more?
Tomas Nkemelu: Because recognition is a compounding asset and volume without consistency resets it every week.
Tomas Nkemelu: The mistake is treating social as a clip factory instead of as the front door to the network.
Tomas Nkemelu: If your shows do not look like they come from the same place, your audience never accrues to the network, it accrues to one host.
Tomas Nkemelu: That is fine until that host leaves, and then you learn what you actually built.
Tomas Nkemelu: A network brand is just the promise that the next thing will be as good as the last thing.
Ruth Alvarez: Tomas, that is a great place to stop. Thank you.`,
  },
];

export const DEMO_NETWORK: Network = {
  slug: "meridian",
  name: "Meridian Audio",
  positioning:
    "Six business and technology shows, 210,000 weekly listeners, no in-house design team.",
  contact: { name: "Alex Moreau", role: "VP, Audience Development" },
  brand: BRAND_PRESETS.meridian,
  shows: [
    {
      id: "show-capital",
      name: "The Capital Line",
      vertical: "Venture & finance",
      host: "Marcus Reid",
      episodesPerWeek: 1,
      accent: "#f0b429",
    },
    {
      id: "show-build",
      name: "Build Notes",
      vertical: "Operations & scaling",
      host: "Elena Cortez",
      episodesPerWeek: 1,
      accent: "#4cc9c0",
    },
    {
      id: "show-signal",
      name: "Signal Room",
      vertical: "Media & audience",
      host: "Ruth Alvarez",
      episodesPerWeek: 1,
      accent: "#e5744f",
    },
    {
      id: "show-margin",
      name: "Margin Call",
      vertical: "Markets",
      host: "Dev Patel",
      episodesPerWeek: 2,
    },
    {
      id: "show-longform",
      name: "The Long Form",
      vertical: "Founder interviews",
      host: "Naomi Bright",
      episodesPerWeek: 1,
    },
    {
      id: "show-desk",
      name: "Front Desk",
      vertical: "Weekly news roundup",
      host: "Sam Okoye",
      episodesPerWeek: 2,
    },
  ],
};

/** Networks available at /network/proposal/[slug]. */
export const DEMO_NETWORKS: Network[] = [
  DEMO_NETWORK,
  {
    slug: "northgate",
    name: "Northgate Media",
    positioning:
      "Four narrative and interview shows in health and longevity, 95,000 weekly listeners.",
    contact: { name: "Jordan Ellis", role: "Head of Growth" },
    brand: BRAND_PRESETS.northgate,
    shows: [
      { id: "show-capital", name: "The Long Half-Life", vertical: "Longevity science", host: "Dr. Ada Kwon", episodesPerWeek: 1 },
      { id: "show-build", name: "Clinical Notes", vertical: "Practice & care", host: "Ben Marsh", episodesPerWeek: 1 },
      { id: "show-signal", name: "Threshold", vertical: "Performance", host: "Iris Vaughn", episodesPerWeek: 1 },
    ],
  },
  {
    slug: "helix",
    name: "Helix Network",
    positioning:
      "Twelve shows across climate, energy, and industrial technology. 480,000 weekly listeners.",
    contact: { name: "Rae Lindqvist", role: "Chief Marketing Officer" },
    brand: BRAND_PRESETS.helix,
    shows: [
      { id: "show-capital", name: "Grid Logic", vertical: "Energy markets", host: "Omar Haddad", episodesPerWeek: 2 },
      { id: "show-build", name: "Heavy Industry", vertical: "Manufacturing", host: "Lena Fischer", episodesPerWeek: 1 },
      { id: "show-signal", name: "Carbon Desk", vertical: "Climate policy", host: "Tobi Adeyemi", episodesPerWeek: 2 },
      { id: "show-margin", name: "Materials", vertical: "Supply chain", host: "Kai Tanaka", episodesPerWeek: 1 },
      { id: "show-longform", name: "The Retrofit", vertical: "Built environment", host: "Sofia Bianchi", episodesPerWeek: 1 },
      { id: "show-desk", name: "Load Balance", vertical: "Utilities", host: "Cole Devereux", episodesPerWeek: 2 },
      { id: "show-extra-1", name: "Fission", vertical: "Nuclear", host: "Mira Sørensen", episodesPerWeek: 1 },
      { id: "show-extra-2", name: "Downstream", vertical: "Oil & gas transition", host: "Ravi Menon", episodesPerWeek: 1 },
    ],
  },
];

export function findNetwork(slug: string): Network | undefined {
  return DEMO_NETWORKS.find((n) => n.slug === slug);
}
