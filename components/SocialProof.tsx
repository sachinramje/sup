export default function SocialProof() {
  const badges = [
    "Product Hunt", "AppAdvice", "MacStories", "Setapp", "Indie.Deals",
  ];

  return (
    <section className="py-12 border-y border-indigo-500/10 bg-[#060818]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-xs font-semibold text-indigo-400/40 uppercase tracking-widest mb-8">
          Loved by knowledge collectors worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* Goodreads-style */}
          <div className="flex items-center gap-2 bg-amber-950/50 border border-amber-500/20 text-amber-400 rounded-xl px-4 py-2.5 text-sm font-semibold">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2l1.5 3L13 5.5 10.5 8l.6 3.5L8 10l-3.1 1.5.6-3.5L3 5.5 6.5 5 8 2z" fill="#FBBF24" stroke="#FBBF24" strokeWidth="0.5"/>
            </svg>
            #1 Knowledge App
          </div>

          {/* Philosophy badge */}
          <div className="flex items-center gap-2 bg-indigo-950/60 border border-indigo-500/20 text-indigo-300 rounded-xl px-4 py-2.5 text-sm font-semibold">
            <div className="w-4 h-4 bg-indigo-500/60 rounded-full" />
            Philosophy Community
          </div>

          {/* Readers badge */}
          <div className="flex items-center gap-2 bg-emerald-950/50 border border-emerald-500/20 text-emerald-400 rounded-xl px-4 py-2.5 text-sm font-semibold">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 4h10v9H3zM6 4V3a2 2 0 014 0v1" stroke="#34D399" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            Avid Readers&apos; Pick
          </div>

          {badges.map((b) => (
            <div
              key={b}
              className="bg-white/5 border border-white/10 text-indigo-300/60 rounded-xl px-4 py-2.5 text-sm font-medium"
            >
              {b}
            </div>
          ))}
        </div>

        {/* Social stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-10">
          {[
            { value: "2,841+", label: "wisdom entries saved" },
            { value: "500+", label: "thinkers catalogued" },
            { value: "4.9★", label: "average rating" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-indigo-400/50 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
