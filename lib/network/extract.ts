import type { Episode, Insight, InsightKind } from "./types";

/**
 * Transcript -> ranked insights.
 *
 * The scorer is deterministic and runs locally: the same episode always yields
 * the same pack, which is what makes the weekly output reviewable and the
 * studio preview honest. It is a density heuristic, not a summariser — it
 * selects sentences the hosts actually said rather than writing new ones.
 */

const STOPWORDS = new Set(
  `a an and are as at be been but by for from had has have he her his how i if in into is it its me my not of on or our out she so than that the their them then there these they this to too us was we were what when where which who will with would you your about just really very much some can could should really actually thing things lot going get got know think like say said want need make made take takes come came look looking one two`.split(
    /\s+/,
  ),
);

const ADMIN_MARKERS = [
  "welcome to",
  "welcome back",
  "thanks for having me",
  "thank you for having me",
  "subscribe",
  "leave us a review",
  "sponsored by",
  "brought to you by",
  "we'll be right back",
  "after the break",
  "today's episode",
  "on this episode",
  "let's get into it",
  "see you next week",
  "that's all the time",
  "find us at",
  "follow us on",
];

const CONTRARIAN_MARKERS = [
  "most people think",
  "everyone thinks",
  "everybody thinks",
  "conventional wisdom",
  "the mistake",
  "biggest mistake",
  "nobody talks about",
  "no one talks about",
  "counterintuitive",
  "the opposite",
  "it's a myth",
  "wrong about",
  "overrated",
  "underrated",
  "the truth is",
  "in reality",
  "turns out",
];

const PRESCRIPTIVE_MARKERS = [
  "the key is",
  "you have to",
  "you need to",
  "you should",
  "start by",
  "the first thing",
  "the trick is",
  "the rule is",
  "what works is",
  "the answer is",
  "the way to",
  "if you want",
];

const FRAMEWORK_MARKERS = [
  "framework",
  "principle",
  "there are three",
  "there are two",
  "there are four",
  "three things",
  "two things",
  "four things",
  "step one",
  "first phase",
  "the model",
  "the system",
  "boils down to",
  "comes down to",
];

const STORY_MARKERS = [
  "when i ",
  "i remember",
  "we tried",
  "back in",
  "the first time",
  "one of our",
  "i once",
  "we spent",
  "we built",
];

const HEDGE_MARKERS = [
  "kind of",
  "sort of",
  "you know",
  "i mean",
  "i guess",
  "i think maybe",
  " um ",
  " uh ",
  "or whatever",
  "something like that",
];

/** Numbers that carry weight: percentages, multiples, money, large counts. */
const FIGURE_RE =
  /(\d+(?:\.\d+)?\s?%|\$\s?\d[\d,.]*\s?(?:k|m|bn?|million|billion|trillion)?|\b\d+(?:\.\d+)?\s?(?:x|×)\b|\b\d+(?:\.\d+)?\s?(?:million|billion|thousand|hours|years|days|weeks|minutes)\b|\b\d{2,}\b)/i;

interface Utterance {
  speaker: string;
  isGuest: boolean;
  text: string;
}

/** Stable, collision-resistant enough id so renders match between server and client. */
function hashId(prefix: string, text: string, index: number): string {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return `${prefix}-${index}-${(h >>> 0).toString(36)}`;
}

function countMarkers(lower: string, markers: string[]): number {
  let n = 0;
  for (const m of markers) if (lower.includes(m)) n++;
  return n;
}

/**
 * Splits a transcript into speaker turns. Accepts either `Name: text` lines
 * (the common export format) or plain prose, which is treated as one speaker.
 */
export function parseTranscript(
  transcript: string,
  host?: string,
  guest?: string,
): Utterance[] {
  const lines = transcript
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  const utterances: Utterance[] = [];
  let current: Utterance | null = null;

  for (const line of lines) {
    // "Speaker Name: some text" — bounded so prose colons don't false-match.
    const match = line.match(/^([A-Z][\w.'-]*(?:\s+[A-Z][\w.'-]*){0,3})\s*:\s*(.+)$/);
    if (match) {
      const speaker = match[1].trim();
      const isGuest = guest
        ? speaker.toLowerCase().includes(guest.toLowerCase().split(" ")[0])
        : host
          ? !speaker.toLowerCase().includes(host.toLowerCase().split(" ")[0])
          : false;
      current = { speaker, isGuest, text: match[2].trim() };
      utterances.push(current);
    } else if (current) {
      current.text += " " + line;
    } else {
      current = { speaker: guest ?? host ?? "Speaker", isGuest: Boolean(guest), text: line };
      utterances.push(current);
    }
  }

  return utterances;
}

function splitSentences(text: string): string[] {
  return text
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s+(?=[A-Z"'“])/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function wordCount(s: string): number {
  return s.split(/\s+/).filter(Boolean).length;
}

/** Rewards the 10-30 word window where a sentence reads well on a tile. */
function lengthFit(words: number): number {
  if (words < 7 || words > 42) return -14;
  if (words >= 10 && words <= 30) return 18;
  if (words < 10) return 6;
  return 4;
}

function classify(lower: string, hasFigure: boolean): InsightKind {
  if (hasFigure) return "stat";
  if (countMarkers(lower, CONTRARIAN_MARKERS)) return "contrarian";
  if (countMarkers(lower, FRAMEWORK_MARKERS)) return "framework";
  if (countMarkers(lower, PRESCRIPTIVE_MARKERS)) return "tactic";
  if (countMarkers(lower, STORY_MARKERS)) return "story";
  return "principle";
}

/**
 * Weak modifiers that survive the stopword pass but carry no meaning in a
 * two-word heading.
 */
const WEAK_WORDS = new Set(
  `roughly almost really usually actually maybe exactly simply genuinely entirely structurally personally probably basically literally certainly obviously clearly definitely essentially generally particularly specifically relatively somewhat rather quite always never often sometimes still even also because instead rather without within across around before after during`.split(
    /\s+/,
  ),
);

function isKeyword(word: string): boolean {
  const lower = word.toLowerCase();
  if (word.length < 4) return false;
  if (STOPWORDS.has(lower)) return false;
  if (WEAK_WORDS.has(lower)) return false;
  if (/^\d/.test(word)) return false; // numerals belong to the figure, not the label
  return true;
}

/**
 * Compresses a sentence to a 2-3 word tile heading.
 *
 * When the sentence carries a figure, the heading is built from the words the
 * figure is actually about — the tokens nearest it — rather than from the
 * opening of the sentence, which is usually narrative setup.
 */
export function deriveLabel(text: string, figure?: string): string {
  const words = text
    .replace(/[^\w\s%$.-]/g, " ")
    .split(/\s+/)
    .map((w) => w.replace(/^[.\-]+|[.\-]+$/g, ""))
    .filter(Boolean);

  const pickUnique = (candidates: string[], max: number): string[] => {
    const out: string[] = [];
    for (const w of candidates) {
      if (!isKeyword(w)) continue;
      if (out.some((k) => k.toLowerCase() === w.toLowerCase())) continue;
      out.push(w);
      if (out.length === max) break;
    }
    return out;
  };

  if (figure) {
    // Anchor on the figure and read outwards: what follows it first, then what precedes it.
    const figureHead = figure.split(/\s+/)[0].toLowerCase();
    const anchor = words.findIndex((w) => w.toLowerCase().startsWith(figureHead));
    const after = anchor >= 0 ? words.slice(anchor + 1) : words;
    const before = anchor >= 0 ? words.slice(0, anchor).reverse() : [];
    const keywords = pickUnique([...after, ...before], 2);
    return keywords.length ? `${figure} ${keywords.join(" ")}` : figure;
  }

  const keywords = pickUnique(words, 3);
  return keywords.length ? keywords.join(" ") : "Key Point";
}

function contentTokens(text: string): Set<string> {
  return new Set(
    text
      .toLowerCase()
      .replace(/[^\w\s]/g, " ")
      .split(/\s+/)
      .filter((w) => w.length > 3 && !STOPWORDS.has(w)),
  );
}

function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 || b.size === 0) return 0;
  let shared = 0;
  for (const t of a) if (b.has(t)) shared++;
  return shared / (a.size + b.size - shared);
}

function toTimecode(position: number, runtimeMinutes: number): string {
  const totalSeconds = Math.round(position * runtimeMinutes * 60);
  const mm = Math.floor(totalSeconds / 60);
  const ss = totalSeconds % 60;
  return `${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;
}

export interface ExtractOptions {
  /** Cap on returned insights. Defaults to 12 — one HP-9 plus alternates. */
  limit?: number;
  /** Similarity above which two insights are considered the same point. */
  dedupeThreshold?: number;
}

export function extractInsights(
  episode: Episode,
  options: ExtractOptions = {},
): Insight[] {
  const { limit = 12, dedupeThreshold = 0.45 } = options;
  const utterances = parseTranscript(episode.transcript, episode.host, episode.guest);

  // Flatten to sentences first so `position` reflects the whole episode.
  const sentences: { text: string; speaker: string; isGuest: boolean }[] = [];
  for (const u of utterances) {
    for (const s of splitSentences(u.text)) {
      sentences.push({ text: s, speaker: u.speaker, isGuest: u.isGuest });
    }
  }

  const total = sentences.length || 1;
  const scored: Insight[] = [];

  sentences.forEach((sentence, index) => {
    const text = sentence.text.trim();
    const lower = text.toLowerCase();
    const words = wordCount(text);
    const position = index / total;

    if (words < 6) return;
    if (text.endsWith("?")) return;
    if (countMarkers(lower, ADMIN_MARKERS) > 0) return;

    const figureMatch = text.match(FIGURE_RE);
    const figure = figureMatch ? figureMatch[0].trim() : undefined;

    let score = 40;
    score += lengthFit(words);
    if (figure) score += 16;
    score += countMarkers(lower, CONTRARIAN_MARKERS) * 14;
    score += countMarkers(lower, PRESCRIPTIVE_MARKERS) * 12;
    score += countMarkers(lower, FRAMEWORK_MARKERS) * 10;
    score += countMarkers(lower, STORY_MARKERS) * 6;

    // Aphoristic shape: a general claim rather than a narrative aside.
    if (/\b(is|isn't|are|aren't|means|becomes)\b/.test(lower) && words <= 26) score += 8;

    score -= countMarkers(lower, HEDGE_MARKERS) * 7;
    if (sentence.isGuest) score += 6;
    // Intros and outros are administrative even when they dodge the markers.
    if (position < 0.05 || position > 0.95) score -= 12;

    score = Math.max(0, Math.min(100, Math.round(score)));
    if (score < 45) return;

    scored.push({
      id: hashId(episode.id, text, index),
      text,
      label: deriveLabel(text, figure),
      kind: classify(lower, Boolean(figure)),
      speaker: sentence.speaker,
      isGuest: sentence.isGuest,
      score,
      position,
      timecode: toTimecode(position, episode.runtimeMinutes),
      figure,
    });
  });

  scored.sort((a, b) => b.score - a.score || a.position - b.position);

  // Drop restatements of a point we've already taken, keeping the higher score.
  const kept: Insight[] = [];
  const keptTokens: Set<string>[] = [];
  for (const insight of scored) {
    const tokens = contentTokens(insight.text);
    if (keptTokens.some((t) => jaccard(t, tokens) > dedupeThreshold)) continue;
    kept.push(insight);
    keptTokens.push(tokens);
    if (kept.length >= limit) break;
  }

  return kept;
}

export type Viability = "full" | "reduced" | "insufficient";

export interface ViabilityReport {
  viability: Viability;
  count: number;
  /** Blocks the episode can fill: 9, 7, 5 or 3. */
  blocks: number;
  formatName: string;
  note: string;
}

/**
 * Source Viability Assessment. An episode that can't fill nine blocks drops to
 * a smaller grid rather than getting padded with weak material.
 */
export function assessViability(insights: Insight[]): ViabilityReport {
  const strong = insights.filter((i) => i.score >= 55).length;
  const blocks = strong >= 9 ? 9 : strong >= 7 ? 7 : strong >= 5 ? 5 : strong >= 3 ? 3 : 0;

  if (blocks === 9) {
    return {
      viability: "full",
      count: strong,
      blocks: 9,
      formatName: "HP-9",
      note: "Full nine-block grid.",
    };
  }
  if (blocks >= 3) {
    return {
      viability: "reduced",
      count: strong,
      blocks,
      formatName: `HP-${blocks}`,
      note: `Only ${strong} blocks cleared the density bar — running the reduced ${blocks}-block grid instead of padding.`,
    };
  }
  return {
    viability: "insufficient",
    count: strong,
    blocks: 0,
    formatName: "—",
    note: "Below the density bar. Route to a quote-card-only pack and flag the episode.",
  };
}
