import { alpha } from "@/lib/network/brand";
import { fitText } from "@/lib/network/typeset";
import type { AssetSpec, BrandKit } from "@/lib/network/types";
import { Lockup, TextureDefs, TextureRect } from "./primitives";

/**
 * Landscape pull-quote for the timeline. Leads with the claim and carries a
 * second, supporting line beneath it when the episode offers one.
 */
export default function XCard({
  asset,
  brand,
}: {
  asset: AssetSpec;
  brand: BrandKit;
}) {
  const { width: W, height: H } = asset;
  const PAD = 80;
  const contentWidth = W - PAD * 2;
  const [lead, support] = asset.insights;
  const textureId = `tex-x-${asset.id}`;

  const quote = fitText(lead.text, contentWidth, support ? 300 : 420, {
    maxFontSize: 56,
    minFontSize: 30,
    lineHeight: 1.2,
    bold: true,
  });

  // Centre the claim (and its supporting line) between the kicker and the
  // lockup so a short pull-quote doesn't leave the lower half empty.
  const regionTop = 168;
  const regionBottom = H - PAD - 76;
  const blockHeight = quote.height + (support ? 78 : 0);
  const quoteTop =
    regionTop + Math.max(0, (regionBottom - regionTop - blockHeight) / 2);
  const supportTop = quoteTop + quote.height + 48;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      width="100%"
      role="img"
      aria-label={`Post card: ${lead.text}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <TextureDefs brand={brand} id={textureId} />
      <rect width={W} height={H} fill={brand.base} />
      <TextureRect brand={brand} id={textureId} width={W} height={H} />
      <rect x={0} y={0} width={8} height={H} fill={brand.accent} />

      <text
        x={PAD}
        y={116}
        fill={brand.accent}
        fontFamily={brand.bodyFont}
        fontSize={17}
        fontWeight={700}
        letterSpacing={2.4}
      >
        {asset.showName.toUpperCase()}
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

      {support ? (
        <>
          <line
            x1={PAD}
            y1={supportTop - 22}
            x2={PAD + contentWidth}
            y2={supportTop - 22}
            stroke={brand.line}
            strokeWidth={1}
          />
          <text
            x={PAD}
            y={supportTop}
            fill={alpha(brand.inkMuted, 0.95)}
            fontFamily={brand.bodyFont}
            fontSize={22}
          >
            {fitText(support.text, contentWidth, 90, {
              maxFontSize: 22,
              minFontSize: 17,
              lineHeight: 1.35,
            }).lines.map((line, i) => (
              <tspan key={i} x={PAD} dy={i === 0 ? 20 : 30}>
                {line}
              </tspan>
            ))}
          </text>
        </>
      ) : null}

      <Lockup
        brand={brand}
        x={PAD}
        y={H - PAD - 32}
        width={contentWidth}
        right={lead.speaker}
        markSize={32}
      />
    </svg>
  );
}
