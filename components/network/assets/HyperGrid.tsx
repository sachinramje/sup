import { alpha } from "@/lib/network/brand";
import { fitText } from "@/lib/network/typeset";
import type { AssetSpec, BrandKit } from "@/lib/network/types";
import { Kicker, Lockup, TextBlock, TextureDefs, TextureRect } from "./primitives";

/**
 * The HyperGrid — one episode compressed into a block grid.
 *
 * The grid adapts to however many blocks cleared the density bar (3, 5, 7 or
 * 9); the final row stretches to fill the width so a reduced grid still reads
 * as a finished composition rather than a nine-block grid with holes.
 */

const PAD = 56;
const GUTTER = 16;

interface RowPlan {
  y: number;
  height: number;
  tiles: { x: number; width: number; index: number }[];
}

function planRows(
  count: number,
  gridTop: number,
  gridHeight: number,
  contentWidth: number,
): RowPlan[] {
  const rowCount = Math.ceil(count / 3);

  // A reduced grid must not stretch its tiles down the whole canvas, so row
  // height is capped against the standard tile width and the shorter grid is
  // centred in the space instead.
  const maxRowHeight = ((contentWidth - GUTTER * 2) / 3) * 1.15;
  const rowHeight = Math.min(
    (gridHeight - (rowCount - 1) * GUTTER) / rowCount,
    maxRowHeight,
  );
  const usedHeight = rowCount * rowHeight + (rowCount - 1) * GUTTER;
  const offsetY = Math.max(0, (gridHeight - usedHeight) / 2);
  const rows: RowPlan[] = [];

  for (let r = 0; r < rowCount; r++) {
    const start = r * 3;
    const inRow = Math.min(3, count - start);
    const tileWidth = (contentWidth - (inRow - 1) * GUTTER) / inRow;
    rows.push({
      y: gridTop + offsetY + r * (rowHeight + GUTTER),
      height: rowHeight,
      tiles: Array.from({ length: inRow }, (_, c) => ({
        x: PAD + c * (tileWidth + GUTTER),
        width: tileWidth,
        index: start + c,
      })),
    });
  }

  return rows;
}

export default function HyperGrid({
  asset,
  brand,
}: {
  asset: AssetSpec;
  brand: BrandKit;
}) {
  const { width: W, height: H, insights } = asset;
  const contentWidth = W - PAD * 2;
  const textureId = `tex-grid-${asset.id}`;

  const title = fitText(asset.episodeTitle, contentWidth, 200, {
    maxFontSize: 58,
    minFontSize: 32,
    lineHeight: 1.08,
    bold: true,
  });

  const kickerY = 92;
  const titleY = kickerY + 34;
  const metaY = titleY + title.height + 34;
  const gridTop = metaY + 34;
  const footerY = H - PAD - 36;
  const gridHeight = footerY - 46 - gridTop;

  const rows = planRows(insights.length, gridTop, gridHeight, contentWidth);

  // The single strongest block carries the accent fill; the rest stay quiet.
  const heroIndex = insights.reduce(
    (best, insight, i) => (insight.score > insights[best].score ? i : best),
    0,
  );

  const guest = insights.find((i) => i.isGuest)?.speaker;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      width="100%"
      role="img"
      aria-label={`HyperGrid for ${asset.episodeTitle}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <TextureDefs brand={brand} id={textureId} />
      <rect width={W} height={H} fill={brand.base} />
      <TextureRect brand={brand} id={textureId} width={W} height={H} />

      <Kicker x={PAD} y={kickerY} brand={brand}>
        {asset.showName}
      </Kicker>
      <text
        x={W - PAD}
        y={kickerY}
        fill={brand.inkMuted}
        fontFamily={brand.bodyFont}
        fontSize={15}
        fontWeight={600}
        letterSpacing={2}
        textAnchor="end"
      >
        {`${insights.length} IDEAS`}
      </text>

      <text
        x={PAD}
        y={titleY}
        fill={brand.ink}
        fontFamily={brand.displayFont}
        fontSize={title.fontSize}
        fontWeight={800}
        letterSpacing={-1}
      >
        {title.lines.map((line, i) => (
          <tspan
            key={i}
            x={PAD}
            dy={i === 0 ? title.fontSize * 0.84 : title.fontSize * title.lineHeight}
          >
            {line}
          </tspan>
        ))}
      </text>

      <text
        x={PAD}
        y={metaY}
        fill={brand.inkMuted}
        fontFamily={brand.bodyFont}
        fontSize={19}
      >
        {guest ? `${guest} · ${asset.showName}` : asset.showName}
      </text>

      {rows.map((row) =>
        row.tiles.map((tile) => {
          const insight = insights[tile.index];
          const isHero = tile.index === heroIndex;
          const tilePad = 22;
          const innerW = tile.width - tilePad * 2;
          const inkOn = isHero ? brand.base : brand.ink;
          const mutedOn = isHero ? alpha(brand.base, 0.65) : brand.inkMuted;

          const label = fitText(insight.label.toUpperCase(), innerW, 60, {
            maxFontSize: 18,
            minFontSize: 13,
            lineHeight: 1.15,
            bold: true,
          });
          const labelBottom = tilePad + 26 + label.height;
          const bodyTop = labelBottom + 12;
          const bodyHeight = row.height - bodyTop - tilePad - 20;

          return (
            <g key={insight.id} transform={`translate(${tile.x}, ${row.y})`}>
              <rect
                width={tile.width}
                height={row.height}
                rx={brand.radius}
                fill={isHero ? brand.accent : brand.surface}
                stroke={isHero ? "none" : brand.line}
                strokeWidth={1}
              />

              <text
                x={tilePad}
                y={tilePad + 14}
                fill={isHero ? alpha(brand.base, 0.55) : brand.accent}
                fontFamily={brand.bodyFont}
                fontSize={13}
                fontWeight={700}
                letterSpacing={1.5}
              >
                {String(tile.index + 1).padStart(2, "0")}
              </text>

              <text
                x={tilePad}
                y={tilePad + 26}
                fill={inkOn}
                fontFamily={brand.displayFont}
                fontSize={label.fontSize}
                fontWeight={800}
                letterSpacing={0.4}
              >
                {label.lines.map((line, i) => (
                  <tspan
                    key={i}
                    x={tilePad}
                    dy={i === 0 ? label.fontSize * 0.9 : label.fontSize * label.lineHeight}
                  >
                    {line}
                  </tspan>
                ))}
              </text>

              <TextBlock
                text={insight.text}
                x={tilePad}
                y={bodyTop}
                width={innerW}
                height={bodyHeight}
                brand={brand}
                fill={mutedOn}
                options={{
                  // Wide range on purpose: short blocks set large and fill the
                  // tile, long blocks step down. The variation reads as
                  // editorial rather than as inconsistency.
                  maxFontSize: 24,
                  minFontSize: 11,
                  lineHeight: 1.34,
                }}
              />

              <text
                x={tilePad}
                y={row.height - tilePad}
                fill={isHero ? alpha(brand.base, 0.5) : alpha(brand.inkMuted, 0.7)}
                fontFamily={brand.bodyFont}
                fontSize={12}
                fontWeight={600}
                letterSpacing={0.8}
              >
                {insight.timecode}
              </text>
            </g>
          );
        }),
      )}

      <Lockup
        brand={brand}
        x={PAD}
        y={footerY}
        width={contentWidth}
        right={asset.episodeTitle.length > 42 ? undefined : "Full episode in bio"}
      />
    </svg>
  );
}
