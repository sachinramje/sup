import type { Metadata } from "next";
import Studio from "@/components/network/Studio";

export const metadata: Metadata = {
  title: "Studio · Visual Social Layer",
  description:
    "Run a transcript through the extraction, scoring and rendering pipeline and see the branded assets it produces.",
};

export default function StudioPage() {
  return <Studio />;
}
