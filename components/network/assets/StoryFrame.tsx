import { alpha } from "@/lib/network/brand";
import { fitText } from "@/lib/network/typeset";
import { kickerFor } from "@/lib/network/formats";
import type { AssetSpec, BrandKit } from "@/lib/network/types";
import { Kicker, Monogram, TextureDefs, TextureRect } from "./primitives";

/**
 * Vertical story frame. The lower third is deliberately left clear for a link
 * sticker, so the composition sits high in the safe area.
 */
export default function StoryFrame({
  asset,
  brand,
}: {
  asset: AssetSpec;
  brand: BrandKit;
}) {
  const { width: W, height: H } = asset;
  const PAD = 88;
  const contentWidth = W - PAD * 2;
  const insight = asset.insights[0];
  const textureId = `tex-story-${asset.id}`;

  const quote = fitText(insight.text, contentWidth, 620, {
    maxFontSize: 62,
    minFontSize: 32,
    lineHeight: 1.18,
    bold: true,
  });

  const quoteTop = 520;
  const stickerY = H - 460;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      width="100%"
      role="img"
      aria-label={`Story frame: ${insight.text}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <TextureDefs brand={brand} id={textureId} />
      <defs>
        <linearGradient id={`story-wash-${asset.id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={alpha(brand.accent, 0.22)} />
          <stop offset="55%" stopColor={alpha(brand.base, 0)} />
        </linearGradient>
      </defs>

      <rect width={W} height={H} fill={brand.base} />
      <TextureRect brand={brand} id={textureId} width={W} height={H} />
      <rect width={W} height={H} fill={`url(#story-wash-${asset.id})`} />

      <Monogram brand={brand} x={PAD} y={200} size={64} />

      <Kicker x={PAD} y={340} brand={brand}>
        {kickerFor(insight)}
      </Kicker>
      <text
        x={PAD}
        y={392}
        fill={brand.inkMuted}
        fontFamily={brand.bodyFont}
        fontSize={26}
      >
        {asset.showName}
      </text>

      <text
        x={PAD}
        y={quoteTop}
        fill={brand.ink}
        fontFamily={brand.displayFont}
        fontSize={quote.fontSize}
        fontWeight={800}
        letterSpacing={-1}
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
        y1={quoteTop + quote.height + 60}
        x2={PAD + 80}
        y2={quoteTop + quote.height + 60}
        stroke={brand.accent}
        strokeWidth={5}
      />
      <text
        x={PAD}
        y={quoteTop + quote.height + 116}
        fill={brand.inkMuted}
        fontFamily={brand.bodyFont}
        fontSize={28}
      >
        {insight.speaker}
      </text>

      {/* Safe area for the link sticker — kept empty by design. */}
      <rect
        x={PAD}
        y={stickerY}
        width={contentWidth}
        height={132}
        rx={brand.radius * 2}
        fill="none"
        stroke={alpha(brand.inkMuted, 0.28)}
        strokeWidth={2}
        strokeDasharray="10 10"
      />
      <text
        x={W / 2}
        y={stickerY + 66}
        fill={alpha(brand.inkMuted, 0.55)}
        fontFamily={brand.bodyFont}
        fontSize={22}
        fontWeight={600}
        letterSpacing={2}
        textAnchor="middle"
        dominantBaseline="central"
      >
        LINK STICKER SAFE AREA
      </text>

      <text
        x={W / 2}
        y={H - 132}
        fill={brand.inkMuted}
        fontFamily={brand.bodyFont}
        fontSize={24}
        fontWeight={600}
        letterSpacing={3}
        textAnchor="middle"
      >
        {brand.wordmark.toUpperCase()}
      </text>
    </svg>
  );
}
