import { alpha } from "@/lib/network/brand";
import { fitText } from "@/lib/network/typeset";
import type { AssetSpec, BrandKit } from "@/lib/network/types";
import { Kicker, Lockup, Monogram, TextureDefs, TextureRect } from "./primitives";

/**
 * One slide of a carousel. Frame 0 is the cover, the final frame is the end
 * card, and the frames between carry one insight each.
 */
export default function CarouselSlide({
  asset,
  brand,
  frame,
}: {
  asset: AssetSpec;
  brand: BrandKit;
  frame: number;
}) {
  const { width: W, height: H } = asset;
  const PAD = 72;
  const contentWidth = W - PAD * 2;
  const textureId = `tex-car-${asset.id}-${frame}`;
  const lastFrame = asset.frames - 1;
  const isCover = frame === 0;
  const isEndCard = frame === lastFrame;
  const insight = asset.insights[frame - 1];

  const shell = (children: React.ReactNode) => (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      width="100%"
      role="img"
      aria-label={`Carousel slide ${frame + 1} of ${asset.frames}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <TextureDefs brand={brand} id={textureId} />
      <rect width={W} height={H} fill={isCover ? brand.accent : brand.base} />
      {isCover ? null : (
        <TextureRect brand={brand} id={textureId} width={W} height={H} />
      )}
      {children}
      {/* Progress rail, so the reader knows how far through the argument they are. */}
      {Array.from({ length: asset.frames }, (_, i) => (
        <rect
          key={i}
          x={PAD + i * (contentWidth / asset.frames)}
          y={H - 46}
          width={contentWidth / asset.frames - 8}
          height={4}
          rx={2}
          fill={
            i === frame
              ? isCover
                ? brand.base
                : brand.accent
              : alpha(isCover ? brand.base : brand.inkMuted, 0.3)
          }
        />
      ))}
    </svg>
  );

  if (isCover) {
    const title = fitText(asset.episodeTitle, contentWidth, 460, {
      maxFontSize: 78,
      minFontSize: 40,
      lineHeight: 1.06,
      bold: true,
    });
    return shell(
      <>
        <text
          x={PAD}
          y={128}
          fill={alpha(brand.base, 0.7)}
          fontFamily={brand.bodyFont}
          fontSize={18}
          fontWeight={700}
          letterSpacing={2.6}
        >
          {asset.showName.toUpperCase()}
        </text>

        <text
          x={PAD}
          y={300}
          fill={brand.base}
          fontFamily={brand.displayFont}
          fontSize={title.fontSize}
          fontWeight={800}
          letterSpacing={-1.6}
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
          y={H - 120}
          fill={alpha(brand.base, 0.75)}
          fontFamily={brand.bodyFont}
          fontSize={24}
          fontWeight={600}
        >
          {`${asset.insights.length} ideas  ·  swipe →`}
        </text>
      </>,
    );
  }

  if (isEndCard || !insight) {
    return shell(
      <>
        <Monogram brand={brand} x={PAD} y={200} size={72} />
        <text
          x={PAD}
          y={420}
          fill={brand.ink}
          fontFamily={brand.displayFont}
          fontSize={54}
          fontWeight={800}
          letterSpacing={-1}
        >
          <tspan x={PAD} dy={0}>
            Listen to the
          </tspan>
          <tspan x={PAD} dy={62}>
            full episode.
          </tspan>
        </text>
        <text
          x={PAD}
          y={540}
          fill={brand.inkMuted}
          fontFamily={brand.bodyFont}
          fontSize={26}
        >
          {asset.showName}
        </text>
        <Lockup brand={brand} x={PAD} y={H - 180} width={contentWidth} />
      </>,
    );
  }

  const body = fitText(insight.text, contentWidth, 520, {
    maxFontSize: 50,
    minFontSize: 26,
    lineHeight: 1.24,
    bold: true,
  });

  return shell(
    <>
      <text
        x={PAD}
        y={132}
        fill={brand.accent}
        fontFamily={brand.displayFont}
        fontSize={80}
        fontWeight={800}
        letterSpacing={-2}
      >
        {String(frame).padStart(2, "0")}
      </text>

      <Kicker x={PAD} y={200} brand={brand} fill={brand.inkMuted} size={17}>
        {insight.label}
      </Kicker>

      <text
        x={PAD}
        y={280}
        fill={brand.ink}
        fontFamily={brand.displayFont}
        fontSize={body.fontSize}
        fontWeight={800}
        letterSpacing={-0.8}
      >
        {body.lines.map((line, i) => (
          <tspan
            key={i}
            x={PAD}
            dy={i === 0 ? body.fontSize * 0.84 : body.fontSize * body.lineHeight}
          >
            {line}
          </tspan>
        ))}
      </text>

      <text
        x={PAD}
        y={H - 110}
        fill={alpha(brand.inkMuted, 0.8)}
        fontFamily={brand.bodyFont}
        fontSize={20}
      >
        {`${insight.speaker} · ${insight.timecode}`}
      </text>
    </>,
  );
}
