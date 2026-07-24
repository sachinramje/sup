"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What is Supaste?",
    a: "Supaste is a native macOS app that turns scattered quotes, insights, and ideas into a beautiful, searchable wisdom library. Capture passages from books, screenshots of text, or type insights directly — then search, filter, and recall anything in seconds.",
  },
  {
    q: "Where is my wisdom library stored?",
    a: "Everything is stored locally on your Mac in an encrypted database. Nothing is ever uploaded to any server. Your collected wisdom stays on your device, always — fully private and yours.",
  },
  {
    q: "Can I capture quotes from books and PDFs?",
    a: "Yes. Supaste uses Apple's Vision framework to run OCR on any screenshot you take, extracting the text and attributing it to the source. Photograph a book page, screenshot a PDF passage — it all flows straight into your library.",
  },
  {
    q: "How does the Knowledge Graph work?",
    a: "As you collect wisdom, Supaste maps relationships between thinkers, disciplines, and ideas. You'll start to see that Seneca and Marcus Aurelius and Epictetus all converge on the same themes — and discover unexpected connections across centuries.",
  },
  {
    q: "Can I search inside my library?",
    a: "Yes — with ⌘K you can search across every quote, insight, and note in your library instantly. Results are ranked by relevance, and you can filter by thinker, discipline, date added, or content type.",
  },
  {
    q: "What is the Daily Reflection feature?",
    a: "Each morning, Supaste surfaces a piece of wisdom from your own library — something you collected days, weeks, or months ago. It's a gentle reminder that great ideas compound when revisited, and helps you build a daily reflection habit.",
  },
  {
    q: "Does Supaste work offline?",
    a: "Completely. Supaste is 100% offline — there are no accounts, no cloud sync, no analytics, and no telemetry. Everything runs locally on your Mac using native Apple frameworks.",
  },
  {
    q: "Can I organise wisdom by thinker?",
    a: "Yes. Every entry can be attributed to a thinker — philosopher, scientist, author, historical figure. Thinker profiles let you browse the collected wisdom of Aristotle, Einstein, Feynman, or anyone else in your library at a glance.",
  },
  {
    q: "Is it a subscription?",
    a: "No — Supaste is a one-time purchase. You pay once and receive lifetime access, including all future updates. No monthly fees, ever.",
  },
  {
    q: "How do I access Supaste after purchase?",
    a: "After purchasing, you'll receive an email with a download link and your license key. Install the app, enter your key, and your wisdom library awaits — no account creation required.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-[#060818]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-amber-400/80 uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Questions? Answered.
          </h2>
          <p className="text-lg text-indigo-200/50">
            Everything you need to know before starting your library.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-[#0d1117] rounded-2xl border overflow-hidden transition-all duration-200 ${
                open === i ? "border-amber-500/30 shadow-[0_0_30px_rgba(251,191,36,0.06)]" : "border-indigo-500/10 hover:border-indigo-500/20"
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-white/80 pr-4">{faq.q}</span>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                    open === i ? "bg-amber-400 rotate-45" : "bg-white/5"
                  }`}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 2v8M2 6h8" stroke={open === i ? "#111" : "#818cf8"} strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </button>
              {open === i && (
                <div className="px-6 pb-6">
                  <p className="text-indigo-200/60 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-indigo-300/40 text-sm">
            Still curious?{" "}
            <a href="mailto:hello@supaste.com" className="text-amber-400/70 font-medium hover:text-amber-400 transition-colors">
              Write to us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
