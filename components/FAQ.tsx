"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What is Supaste?",
    a: "Supaste is a native macOS clipboard manager that automatically saves everything you copy — text, images, colors, code, links, files, and screenshots — into a beautiful visual history. You can search, filter, and paste anything back in seconds.",
  },
  {
    q: "Where is my clipboard history stored?",
    a: "Everything is stored locally on your Mac in an encrypted SQLite database. Nothing is ever uploaded to any server. Your clipboard data stays on your device, always.",
  },
  {
    q: "Does Supaste upload any data?",
    a: "No. Supaste is 100% offline. There are no analytics, no telemetry, no cloud sync, and no accounts required. Your data never leaves your device.",
  },
  {
    q: "What types of content does Supaste capture?",
    a: "Supaste captures text, rich text, images, screenshots, colors (hex, RGB, HSL), files, links, and code snippets. It automatically detects and categorizes each type for easy filtering.",
  },
  {
    q: "Can I search inside screenshots and images?",
    a: "Yes! Supaste uses Apple's Vision framework to run OCR (optical character recognition) on your screenshots and images locally on-device. You can search for text that appears inside any image in your history.",
  },
  {
    q: "Does Supaste detect sensitive content like passwords?",
    a: "Yes. Supaste automatically detects passwords, API keys, and other sensitive content using pattern matching. These items are flagged and blurred by default, so they're protected in your history.",
  },
  {
    q: "Can I pause clipboard capture?",
    a: "Yes. You can pause Supaste from the menu bar at any time — for example, when entering sensitive information. Supaste won't capture anything while paused.",
  },
  {
    q: "Does it include my screenshot history?",
    a: "Yes. Any screenshot taken with CMD+Shift+3 or CMD+Shift+4 is automatically captured and added to your history with a preview. You can browse, search, and re-use any past screenshot.",
  },
  {
    q: "Is it a subscription?",
    a: "No — Supaste is a one-time purchase. You pay once and get lifetime access, including all future updates. No monthly fees, ever.",
  },
  {
    q: "How do I access Supaste after purchase?",
    a: "After purchasing, you'll receive an email with a download link and license key. Download the app, enter your key, and you're set. No account creation required.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Questions? Answered.
          </h2>
          <p className="text-lg text-gray-500">
            Everything you need to know before buying.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border overflow-hidden transition-all duration-200 ${
                open === i ? "border-blue-200 shadow-md" : "border-gray-100 hover:border-gray-200"
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                    open === i ? "bg-blue-600 rotate-45" : "bg-gray-100"
                  }`}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 2v8M2 6h8" stroke={open === i ? "white" : "#6B7280"} strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </button>
              {open === i && (
                <div className="px-6 pb-6">
                  <p className="text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Still have questions?{" "}
            <a href="mailto:hello@supaste.com" className="text-blue-600 font-medium hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
