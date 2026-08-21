import { alpha } from "@/lib/network/brand";
import { fitText } from "@/lib/network/typeset";
import { kickerFor } from "@/lib/network/formats";
import type { AssetSpec, BrandKit } from "@/lib/network/types";
import { Kicker, Lockup, TextureDefs, TextureRect } from "./primitives";

/** Square feed card: one line, set as large as it will go. */
export default function QuoteCard({
  asset,
  brand,
}: {
  asset: AssetSpec;
  brand: BrandKit;
}) {
  const { width: W, height: H } = asset;
  const PAD = 76;
  const contentWidth = W - PAD * 2;
  const insight = asset.insights[0];
  const textureId = `tex-quote-${asset.id}`;

  const quote = fitText(insight.text, contentWidth, 520, {
    maxFontSize: 60,
    minFontSize: 28,
    lineHeight: 1.2,
    bold: true,
  });

  // The quote, its rule and the attribution are centred as one block between
  // the kicker and the lockup, so a short line doesn't leave the card
  // bottom-heavy and a long one still clears both.
  // regionTop leaves room for the glyph, which is drawn above `quoteTop`.
  const regionTop = 346;
  const regionBottom = H - PAD - 96;
  const blockHeight = quote.height + 132;
  const quoteTop =
    regionTop + Math.max(0, (regionBottom - regionTop - blockHeight) / 2);
  const glyphSize = 150;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      width="100%"
      role="img"
      aria-label={`Quote card: ${insight.text}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <TextureDefs brand={brand} id={textureId} />
      <rect width={W} height={H} fill={brand.base} />
      <TextureRect brand={brand} id={textureId} width={W} height={H} />

      <Kicker x={PAD} y={112} brand={brand}>
        {kickerFor(insight)}
      </Kicker>

      {/* Oversized open quote, set above the line it opens. */}
      <text
        x={PAD - 8}
        y={quoteTop - 26}
        fill={alpha(brand.accent, 0.2)}
        fontFamily={brand.displayFont}
        fontSize={glyphSize}
        fontWeight={800}
      >
        &ldquo;
      </text>

      <text
        x={PAD}
        y={quoteTop}
        fill={brand.ink}
        fontFamily={brand.displayFont}
        fontSize={quote.fontSize}
        fontWeight={800}
        letterSpacing={-0.8}
      >
        {quote.lines.map((line, i) => (
          <tspan
            key={i}
            x={PAD}
            dy={i === 0 ? quote.fontSize * 0.84 : quote.fontSize * quote.lineHeight}
          >
            {line}
          </tspan>
        ))}
      </text>

      <line
        x1={PAD}
        y1={quoteTop + quote.height + 46}
        x2={PAD + 64}
        y2={quoteTop + quote.height + 46}
        stroke={brand.accent}
        strokeWidth={4}
      />
      <text
        x={PAD}
        y={quoteTop + quote.height + 86}
        fill={brand.inkMuted}
        fontFamily={brand.bodyFont}
        fontSize={22}
      >
        {`${insight.speaker} · ${asset.showName}`}
      </text>

      <Lockup brand={brand} x={PAD} y={H - PAD - 36} width={contentWidth} />
    </svg>
  );
}
