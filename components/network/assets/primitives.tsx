import { alpha } from "@/lib/network/brand";
import { fitText, type FitOptions } from "@/lib/network/typeset";
import type { BrandKit } from "@/lib/network/types";

/**
 * Shared SVG building blocks. Every visual decision here reads from the brand
 * kit, so a network swap is a data change and never a code change.
 */

/** Background texture, referenced by id from each asset's own <defs>. */
export function TextureDefs({ brand, id }: { brand: BrandKit; id: string }) {
  if (brand.texture === "none") return null;
  return (
    <defs>
      <pattern id={id} width="32" height="32" patternUnits="userSpaceOnUse">
        {brand.texture === "grid" ? (
          <path
            d="M32 0H0V32"
            fill="none"
            stroke={alpha(brand.ink, 0.05)}
            strokeWidth="1"
          />
        ) : (
          <circle cx="2" cy="2" r="1.2" fill={alpha(brand.ink, 0.08)} />
        )}
      </pattern>
    </defs>
  );
}

export function TextureRect({
  brand,
  id,
  width,
  height,
}: {
  brand: BrandKit;
  id: string;
  width: number;
  height: number;
}) {
  if (brand.texture === "none") return null;
  return <rect width={width} height={height} fill={`url(#${id})`} />;
}

/** Uppercase, letter-spaced kicker used above headlines and on tiles. */
export function Kicker({
  children,
  x,
  y,
  brand,
  fill,
  size = 15,
  anchor = "start",
}: {
  children: string;
  x: number;
  y: number;
  brand: BrandKit;
  fill?: string;
  size?: number;
  anchor?: "start" | "middle" | "end";
}) {
  return (
    <text
      x={x}
      y={y}
      fill={fill ?? brand.accent}
      fontFamily={brand.bodyFont}
      fontSize={size}
      fontWeight={700}
      letterSpacing={size * 0.14}
      textAnchor={anchor}
    >
      {children.toUpperCase()}
    </text>
  );
}

/**
 * A wrapped, auto-sized text block. Returns nothing measurable to the caller,
 * so callers that need the height should call `fitText` themselves.
 */
export function TextBlock({
  text,
  x,
  y,
  width,
  height,
  brand,
  fill,
  options,
  fontFamily,
  anchor = "start",
}: {
  text: string;
  x: number;
  y: number;
  width: number;
  height: number;
  brand: BrandKit;
  fill?: string;
  options: FitOptions;
  fontFamily?: string;
  anchor?: "start" | "middle" | "end";
}) {
  const fit = fitText(text, width, height, options);
  return (
    <text
      x={x}
      y={y}
      fill={fill ?? brand.ink}
      fontFamily={fontFamily ?? brand.bodyFont}
      fontSize={fit.fontSize}
      fontWeight={options.bold ? 700 : 400}
      textAnchor={anchor}
    >
      {fit.lines.map((line, i) => (
        <tspan
          key={i}
          x={x}
          dy={i === 0 ? fit.fontSize * 0.86 : fit.fontSize * fit.lineHeight}
        >
          {line}
        </tspan>
      ))}
    </text>
  );
}

/** The network monogram, drawn as a mark rather than an image. */
export function Monogram({
  brand,
  x,
  y,
  size = 44,
}: {
  brand: BrandKit;
  x: number;
  y: number;
  size?: number;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={size}
        height={size}
        rx={Math.min(brand.radius, size / 2)}
        fill={brand.accent}
      />
      <text
        x={x + size / 2}
        y={y + size / 2}
        fill={brand.base}
        fontFamily={brand.displayFont}
        fontSize={size * (brand.monogram.length > 1 ? 0.4 : 0.52)}
        fontWeight={800}
        textAnchor="middle"
        dominantBaseline="central"
        letterSpacing={0.5}
      >
        {brand.monogram}
      </text>
    </g>
  );
}

/** Bottom lockup: mark, wordmark, and the show attribution. */
export function Lockup({
  brand,
  x,
  y,
  width,
  right,
  markSize = 36,
}: {
  brand: BrandKit;
  x: number;
  y: number;
  width: number;
  right?: string;
  markSize?: number;
}) {
  return (
    <g>
      <line
        x1={x}
        y1={y - 22}
        x2={x + width}
        y2={y - 22}
        stroke={brand.line}
        strokeWidth={1}
      />
      <Monogram brand={brand} x={x} y={y} size={markSize} />
      <text
        x={x + markSize + 14}
        y={y + markSize / 2}
        fill={brand.ink}
        fontFamily={brand.displayFont}
        fontSize={markSize * 0.42}
        fontWeight={700}
        dominantBaseline="central"
      >
        {brand.wordmark}
      </text>
      {right ? (
        <text
          x={x + width}
          y={y + markSize / 2}
          fill={brand.inkMuted}
          fontFamily={brand.bodyFont}
          fontSize={markSize * 0.36}
          textAnchor="end"
          dominantBaseline="central"
        >
          {right}
        </text>
      ) : null}
    </g>
  );
}
