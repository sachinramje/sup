/**
 * Text fitting for SVG assets.
 *
 * SVG has no text reflow, so every line break and type size is decided here.
 * Widths are approximated from a per-character table rather than measured in a
 * browser, which keeps rendering identical on the server and the client — the
 * assets must look the same in the studio preview and in the export.
 */

/** Roughly Inter's proportions, as a multiple of font size. */
const NARROW = new Set("iIljtfr.,;:'!|()[]{}-` ".split(""));
const WIDE = new Set("mwMW@%".split(""));

function charWidth(ch: string, fontSize: number, bold: boolean): number {
  const base = NARROW.has(ch) ? 0.31 : WIDE.has(ch) ? 0.87 : 0.55;
  return fontSize * (bold ? base * 1.05 : base);
}

export function measure(text: string, fontSize: number, bold = false): number {
  let w = 0;
  for (const ch of text) w += charWidth(ch, fontSize, bold);
  return w;
}

/** Greedy word wrap. Words longer than the box are hard-split. */
export function wrapText(
  text: string,
  maxWidth: number,
  fontSize: number,
  bold = false,
): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let line = "";

  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (measure(candidate, fontSize, bold) <= maxWidth) {
      line = candidate;
      continue;
    }
    if (line) lines.push(line);

    if (measure(word, fontSize, bold) > maxWidth) {
      // A single unbreakable token wider than the box: split it by character.
      let chunk = "";
      for (const ch of word) {
        if (measure(chunk + ch, fontSize, bold) > maxWidth) {
          lines.push(chunk);
          chunk = ch;
        } else {
          chunk += ch;
        }
      }
      line = chunk;
    } else {
      line = word;
    }
  }

  if (line) lines.push(line);
  return lines;
}

export interface FitOptions {
  maxFontSize: number;
  minFontSize: number;
  lineHeight?: number;
  bold?: boolean;
}

export interface FitResult {
  fontSize: number;
  lines: string[];
  lineHeight: number;
  /** Total rendered height of the block. */
  height: number;
  /** True when the text had to be cut to fit at the minimum size. */
  truncated: boolean;
}

/**
 * Finds the largest size at which the text fits the box, stepping down and
 * truncating with an ellipsis only as a last resort.
 */
export function fitText(
  text: string,
  boxWidth: number,
  boxHeight: number,
  options: FitOptions,
): FitResult {
  const { maxFontSize, minFontSize, lineHeight = 1.32, bold = false } = options;

  for (let size = maxFontSize; size >= minFontSize; size -= 1) {
    const lines = wrapText(text, boxWidth, size, bold);
    const height = lines.length * size * lineHeight;
    if (height <= boxHeight) {
      return { fontSize: size, lines, lineHeight, height, truncated: false };
    }
  }

  const lines = wrapText(text, boxWidth, minFontSize, bold);
  const maxLines = Math.max(1, Math.floor(boxHeight / (minFontSize * lineHeight)));
  if (lines.length <= maxLines) {
    return {
      fontSize: minFontSize,
      lines,
      lineHeight,
      height: lines.length * minFontSize * lineHeight,
      truncated: false,
    };
  }

  const kept = lines.slice(0, maxLines);
  kept[kept.length - 1] = kept[kept.length - 1].replace(/[,;:.\s]+$/, "") + "…";
  return {
    fontSize: minFontSize,
    lines: kept,
    lineHeight,
    height: kept.length * minFontSize * lineHeight,
    truncated: true,
  };
}
