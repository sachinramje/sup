import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Supaste – Collect once. Know forever.",
  description:
    "Supaste saves every quote, insight, and idea you encounter in a beautiful wisdom library — organised by thinker, theme, and discipline, so you can search, find, and revisit any piece of wisdom in seconds.",
  openGraph: {
    title: "Supaste – Collect once. Know forever.",
    description:
      "Your personal library of timeless wisdom. Local-first, privacy-focused, one-time purchase.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#060818] text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
