/**
 * Core domain types for the network visual social layer.
 *
 * The pipeline is: Episode -> Insight[] -> AssetSpec[] -> DistributionPackage,
 * with a BrandKit applied at render time so the same pipeline serves any network.
 */

export type Platform = "linkedin" | "instagram" | "x";

/** The kind of claim an insight makes. Drives which asset format it earns. */
export type InsightKind =
  | "stat"
  | "contrarian"
  | "framework"
  | "principle"
  | "tactic"
  | "story";

export type AssetFormat =
  | "hypergrid"
  | "carousel"
  | "quote"
  | "stat"
  | "story"
  | "xcard";

/** A single scored claim lifted out of an episode transcript. */
export interface Insight {
  id: string;
  /** Verbatim sentence from the transcript. */
  text: string;
  /** Compressed label used as a block heading (2-4 words, uppercase at render). */
  label: string;
  kind: InsightKind;
  speaker: string;
  /** Whether the speaker is the guest (vs. the host). Guests score higher. */
  isGuest: boolean;
  /** 0-100 insight density score. */
  score: number;
  /** Position in the transcript, 0-1. Used to estimate a timestamp. */
  position: number;
  /** Estimated mm:ss mark, derived from position and runtime. */
  timecode: string;
  /** The number carried by the insight, when it has one (e.g. "80%", "3x"). */
  figure?: string;
}

export interface Episode {
  id: string;
  showId: string;
  title: string;
  guest?: string;
  host?: string;
  /** Minutes. Used to estimate insight timecodes. */
  runtimeMinutes: number;
  publishedOn?: string;
  transcript: string;
}

export interface Show {
  id: string;
  name: string;
  /** Short descriptor used on assets and in the proposal roster table. */
  vertical: string;
  host: string;
  /** Episodes published per week. Drives package volume. */
  episodesPerWeek: number;
  /** Optional per-show accent that overrides the network accent. */
  accent?: string;
}

export interface Network {
  slug: string;
  name: string;
  /** One line describing the network, used in the proposal header. */
  positioning: string;
  shows: Show[];
  brand: BrandKit;
  /** Named contact for the proposal cover. */
  contact?: { name: string; role: string };
}

/**
 * The white-label surface. Everything a network can change about how its
 * assets look lives here — nothing else in the renderers is hard-coded.
 */
export interface BrandKit {
  name: string;
  /** Page/canvas background. */
  base: string;
  /** Panel/tile fill, sitting on top of `base`. */
  surface: string;
  /** Primary accent — numbers, rules, the mark. */
  accent: string;
  /** Secondary accent — used sparingly, for the single emphasised tile. */
  accentAlt: string;
  /** Primary type colour. */
  ink: string;
  /** Secondary type colour. */
  inkMuted: string;
  /** Hairline colour for tile borders and rules. */
  line: string;
  /** CSS font stacks. */
  displayFont: string;
  bodyFont: string;
  /** 1-3 character monogram drawn in the corner of every asset. */
  monogram: string;
  /** Footer lockup text, e.g. "sequoiaaudio.fm". */
  wordmark: string;
  /** Corner radius in asset units. */
  radius: number;
  /** Rendered behind tiles for texture. */
  texture: "none" | "grid" | "dots";
}

/** A single deliverable in the weekly package. */
export interface AssetSpec {
  id: string;
  format: AssetFormat;
  platform: Platform;
  showId: string;
  showName: string;
  episodeId: string;
  episodeTitle: string;
  /** Pixel dimensions of the exported file. */
  width: number;
  height: number;
  /** Insights bound to this asset, in render order. */
  insights: Insight[];
  headline: string;
  subhead?: string;
  /** Platform-native post copy that ships with the image. */
  caption: string;
  /** Slide count for multi-frame formats; 1 otherwise. */
  frames: number;
}

export interface PackageSummary {
  totalAssets: number;
  totalFrames: number;
  byPlatform: Record<Platform, number>;
  byFormat: Record<AssetFormat, number>;
  byShow: { showId: string; showName: string; assets: number }[];
}

export interface DistributionPackage {
  networkSlug: string;
  networkName: string;
  weekOf: string;
  assets: AssetSpec[];
  summary: PackageSummary;
  /** Episodes that produced too few viable insights to hit full format. */
  notes: string[];
}
