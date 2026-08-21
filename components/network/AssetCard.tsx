"use client";

import { useState } from "react";
import { FORMATS, PLATFORM_LABELS } from "@/lib/network/formats";
import type { AssetSpec, BrandKit } from "@/lib/network/types";
import AssetRenderer from "./assets/AssetRenderer";

/**
 * Review-board chrome around one asset: what it is, where it posts, the
 * rendered artwork, and the caption that ships with it.
 *
 * The chrome is deliberately neutral — the only colour on screen should be the
 * network's own, coming from the asset itself.
 */
export default function AssetCard({
  asset,
  brand,
}: {
  asset: AssetSpec;
  brand: BrandKit;
}) {
  const [frame, setFrame] = useState(0);
  const [showCaption, setShowCaption] = useState(false);
  const [copied, setCopied] = useState(false);
  const spec = FORMATS[asset.format];
  const multiFrame = asset.frames > 1;

  async function copyCaption() {
    try {
      await navigator.clipboard.writeText(asset.caption);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard is unavailable (insecure context or denied) — the caption is
      // still on screen to select manually, so this needs no error state.
      setShowCaption(true);
    }
  }

  return (
    <figure className="flex flex-col self-start rounded-2xl border border-white/10 bg-[#0e0e11] overflow-hidden">
      <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/10">
        <div className="min-w-0">
          <p className="text-[13px] font-semibold text-white truncate">
            {spec.name}
          </p>
          <p className="text-[11px] text-white/40 truncate">{asset.showName}</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="rounded-full border border-white/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/60">
            {PLATFORM_LABELS[asset.platform]}
          </span>
          <span className="text-[10px] tabular-nums text-white/30">
            {asset.width}×{asset.height}
          </span>
        </div>
      </div>

      <div className="bg-black/40 p-4">
        <div className="overflow-hidden rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <AssetRenderer asset={asset} brand={brand} frame={frame} />
        </div>

        {multiFrame ? (
          <div className="mt-3 flex items-center justify-center gap-1.5">
            {Array.from({ length: asset.frames }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setFrame(i)}
                aria-label={`Show slide ${i + 1} of ${asset.frames}`}
                aria-current={i === frame}
                className={`h-1.5 rounded-full transition-all ${
                  i === frame ? "w-6 bg-white/80" : "w-1.5 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
            <span className="ml-2 text-[10px] tabular-nums text-white/35">
              {frame + 1}/{asset.frames}
            </span>
          </div>
        ) : null}
      </div>

      <figcaption className="border-t border-white/10 px-4 py-3">
        <div className="flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => setShowCaption((v) => !v)}
            className="text-[11px] font-semibold uppercase tracking-wider text-white/50 hover:text-white/80 transition-colors"
            aria-expanded={showCaption}
          >
            {showCaption ? "Hide caption" : "Post copy"}
          </button>
          <button
            type="button"
            onClick={copyCaption}
            className="rounded-md border border-white/15 px-2.5 py-1 text-[11px] font-medium text-white/70 hover:border-white/35 hover:text-white transition-colors"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        {showCaption ? (
          <pre className="mt-3 whitespace-pre-wrap font-sans text-[12px] leading-relaxed text-white/65">
            {asset.caption}
          </pre>
        ) : null}
      </figcaption>
    </figure>
  );
}
