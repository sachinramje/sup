import type { BrandKit } from "./types";

/**
 * The house brand — what a network sees before it hands over its own tokens.
 * Every preset below is a full override, so nothing leaks between clients.
 */
export const HOUSE_BRAND: BrandKit = {
  name: "HyperVisuals",
  base: "#0a0a0c",
  surface: "#141419",
  accent: "#e8c547",
  accentAlt: "#5b8def",
  ink: "#f5f5f2",
  inkMuted: "#9a9aa2",
  line: "#2a2a32",
  displayFont:
    "'Inter Tight', 'Inter', -apple-system, BlinkMacSystemFont, Helvetica, sans-serif",
  bodyFont:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, sans-serif",
  monogram: "HV",
  wordmark: "hypervisuals.co",
  radius: 14,
  texture: "grid",
};

/**
 * Demo networks. These stand in for a real client's brand kit — in production
 * the same shape is filled from the network's own guidelines during onboarding.
 */
export const BRAND_PRESETS: Record<string, BrandKit> = {
  meridian: {
    name: "Meridian Audio",
    base: "#0b1120",
    surface: "#141d33",
    accent: "#f0b429",
    accentAlt: "#4cc9c0",
    ink: "#f8fafc",
    inkMuted: "#94a3b8",
    line: "#24304d",
    displayFont:
      "'Inter Tight', 'Inter', -apple-system, BlinkMacSystemFont, Helvetica, sans-serif",
    bodyFont:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, sans-serif",
    monogram: "M",
    wordmark: "meridianaudio.fm",
    radius: 16,
    texture: "grid",
  },
  northgate: {
    name: "Northgate Media",
    base: "#12100e",
    surface: "#1e1b17",
    accent: "#d97757",
    accentAlt: "#c8b89a",
    ink: "#faf7f2",
    inkMuted: "#a8a096",
    line: "#332e28",
    displayFont:
      "'Inter Tight', 'Inter', -apple-system, BlinkMacSystemFont, Helvetica, sans-serif",
    bodyFont:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, sans-serif",
    monogram: "NG",
    wordmark: "northgate.media",
    radius: 6,
    texture: "dots",
  },
  helix: {
    name: "Helix Network",
    base: "#08110f",
    surface: "#0f1c19",
    accent: "#3ddc97",
    accentAlt: "#b388ff",
    ink: "#f2fbf8",
    inkMuted: "#8fa8a1",
    line: "#1a2f2a",
    displayFont:
      "'Inter Tight', 'Inter', -apple-system, BlinkMacSystemFont, Helvetica, sans-serif",
    bodyFont:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, sans-serif",
    monogram: "HX",
    wordmark: "helix.fm",
    radius: 22,
    texture: "none",
  },
};

/** Falls back to the house brand for any token a network hasn't supplied. */
export function resolveBrand(partial?: Partial<BrandKit> | null): BrandKit {
  if (!partial) return HOUSE_BRAND;
  return { ...HOUSE_BRAND, ...partial };
}

/**
 * Per-show accents let one network run visually distinct shows while keeping
 * the network's frame, type, and lockup identical across the roster.
 */
export function brandForShow(brand: BrandKit, accent?: string): BrandKit {
  return accent ? { ...brand, accent } : brand;
}

/** Hex -> rgba(), for the translucent washes the renderers use. */
export function alpha(hex: string, a: number): string {
  const clean = hex.replace("#", "");
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean;
  const n = Number.parseInt(full, 16);
  if (Number.isNaN(n)) return hex;
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}
