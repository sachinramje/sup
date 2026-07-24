import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Supaste – Copy once. Reuse anytime.",
  description:
    "Supaste saves your clipboard and screenshots in a beautiful visual history, automatically grouped by type, app, and custom categories, so you can search, find, and paste anything back in seconds.",
  openGraph: {
    title: "Supaste – Copy once. Reuse anytime.",
    description:
      "Beautiful clipboard manager for macOS. Local-first, privacy-focused, one-time purchase.",
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
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
