import type { AssetSpec, BrandKit } from "@/lib/network/types";
import CarouselSlide from "./CarouselSlide";
import HyperGrid from "./HyperGrid";
import QuoteCard from "./QuoteCard";
import StatCard from "./StatCard";
import StoryFrame from "./StoryFrame";
import XCard from "./XCard";

/** Renders any asset in the system at its export dimensions. */
export default function AssetRenderer({
  asset,
  brand,
  frame = 0,
}: {
  asset: AssetSpec;
  brand: BrandKit;
  frame?: number;
}) {
  switch (asset.format) {
    case "hypergrid":
      return <HyperGrid asset={asset} brand={brand} />;
    case "carousel":
      return <CarouselSlide asset={asset} brand={brand} frame={frame} />;
    case "quote":
      return <QuoteCard asset={asset} brand={brand} />;
    case "stat":
      return <StatCard asset={asset} brand={brand} />;
    case "story":
      return <StoryFrame asset={asset} brand={brand} />;
    case "xcard":
      return <XCard asset={asset} brand={brand} />;
  }
}
