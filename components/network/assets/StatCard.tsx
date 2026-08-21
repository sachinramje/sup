import { alpha } from "@/lib/network/brand";
import { fitText } from "@/lib/network/typeset";
import type { AssetSpec, BrandKit } from "@/lib/network/types";
import { Kicker, Lockup, TextureDefs, TextureRect } from "./primitives";

/**
 * Landscape, number-led. Splits into a figure panel and a claim panel so the
 * number does the stopping and the sentence does the explaining.
 */
export default function StatCard({
  asset,
  brand,
}: {
  asset: AssetSpec;
  brand: BrandKit;
}) {
  const { width: W, height: H } = asset;
  const PAD = 72;
  const insight = asset.insights[0];
  const textureId = `tex-stat-${asset.id}`;

  const figure = insight.figure ?? insight.label.split(" ")[0];
  const figurePanelWidth = 560;
  const claimX = PAD + figurePanelWidth + 64;
  const claimWidth = W - claimX - PAD;

  const figureFit = fitText(figure, figurePanelWidth, 260, {
    maxFontSize: 210,
    minFontSize: 72,
    lineHeight: 1,
    bold: true,
  });

  const claim = fitText(insight.text, claimWidth, 380, {
    maxFontSize: 40,
    minFontSize: 22,
    lineHeight: 1.3,
    bold: true,
  });

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      width="100%"
      role="img"
      aria-label={`Stat card: ${insight.text}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <TextureDefs brand={brand} id={textureId} />
      <rect width={W} height={H} fill={brand.base} />
      <TextureRect brand={brand} id={textureId} width={W} height={H} />

      <Kicker x={PAD} y={104} brand={brand}>
        By the numbers
      </Kicker>

      <text
        x={PAD}
        y={H / 2 + 40}
        fill={brand.accent}
        fontFamily={brand.displayFont}
        fontSize={figureFit.fontSize}
        fontWeight={800}
        letterSpacing={-6}
      >
        {figure}
      </text>

      <line
        x1={claimX - 34}
        y1={132}
        x2={claimX - 34}
        y2={H - 132}
        stroke={brand.line}
        strokeWidth={1}
      />

      <text
        x={claimX}
        y={H / 2 - claim.height / 2}
        fill={brand.ink}
        fontFamily={brand.displayFont}
        fontSize={claim.fontSize}
        fontWeight={700}
      >
        {claim.lines.map((line, i) => (
          <tspan
            key={i}
            x={claimX}
            dy={i === 0 ? claim.fontSize * 0.84 : claim.fontSize * claim.lineHeight}
          >
            {line}
          </tspan>
        ))}
      </text>

      <text
        x={claimX}
        y={H / 2 + claim.height / 2 + 44}
        fill={alpha(brand.inkMuted, 0.9)}
        fontFamily={brand.bodyFont}
        fontSize={19}
      >
        {`${insight.speaker} · ${asset.showName}`}
      </text>

      <Lockup brand={brand} x={PAD} y={H - PAD - 32} width={figurePanelWidth} markSize={32} />
    </svg>
  );
}
