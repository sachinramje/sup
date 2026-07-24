export default function SocialProof() {
  const badges = [
    "FoundrList", "Findly.tools", "Turbo0", "Startup Fame", "Twelve Tools", "Indie.Deals",
  ];

  return (
    <section className="py-12 border-y border-gray-100 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">
          Featured on
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* Product Hunt */}
          <div className="flex items-center gap-2 bg-white border border-orange-100 text-orange-600 rounded-xl px-4 py-2.5 text-sm font-semibold shadow-sm">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7.5" stroke="#EA580C" strokeWidth="1"/>
              <path d="M6 5h3a2 2 0 010 4H6V5zm0 4h2" stroke="#EA580C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            #4 Product Hunt
          </div>
          {/* CSS Design Awards */}
          <div className="flex items-center gap-2 bg-white border border-yellow-100 text-yellow-700 rounded-xl px-4 py-2.5 text-sm font-semibold shadow-sm">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2l1.5 3L13 5.5 10.5 8l.6 3.5L8 10l-3.1 1.5.6-3.5L3 5.5 6.5 5 8 2z" fill="#D97706" stroke="#D97706" strokeWidth="0.5"/>
            </svg>
            CSS Design Awards
          </div>
          {/* Muzli */}
          <div className="flex items-center gap-2 bg-white border border-purple-100 text-purple-700 rounded-xl px-4 py-2.5 text-sm font-semibold shadow-sm">
            <div className="w-4 h-4 bg-purple-600 rounded-full" />
            Muzli Picks
          </div>

          {badges.map((b) => (
            <div
              key={b}
              className="bg-white border border-gray-100 text-gray-600 rounded-xl px-4 py-2.5 text-sm font-medium shadow-sm"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
