export default function Cooldock() {
  return (
    <section id="cooldock" className="py-24 px-6 bg-[#060818]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-[#0d1117] via-indigo-950/40 to-[#0d1117] border border-indigo-500/15 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Text */}
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <span className="inline-block text-xs font-bold text-indigo-300/60 uppercase tracking-widest bg-indigo-400/10 border border-indigo-400/15 rounded-full px-3 py-1 mb-6 self-start">
                Also by the maker
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                Meet Cooldock
              </h2>
              <p className="text-indigo-300/60 text-lg leading-relaxed mb-4">
                A beautiful Dock for live widgets
              </p>
              <p className="text-indigo-200/40 leading-relaxed mb-8">
                Your smart second Dock. Music controls, todos, calendar events, weather, quick search, system stats, and powerful quick actions — all in one elegant bar that lives right in your macOS Dock.
              </p>

              {/* Widget previews */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["🎵 Music", "✅ Todos", "📅 Events", "🌤 Weather", "🔍 Search", "📊 Stats"].map((w) => (
                  <span key={w} className="bg-white/5 text-indigo-300/60 text-xs px-3 py-1.5 rounded-full border border-white/10">
                    {w}
                  </span>
                ))}
              </div>

              <a
                href="https://dock.cool"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold px-6 py-3.5 rounded-2xl hover:bg-gray-100 transition-colors self-start text-sm"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L8 11M8 11L4 7M8 11L12 7" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1 14H15" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Download Cooldock for macOS
              </a>
            </div>

            {/* Visual */}
            <div className="p-8 lg:p-12 flex items-center justify-center">
              <div className="w-full max-w-sm">
                {/* Dock simulation */}
                <div className="bg-[#161b27] backdrop-blur border border-white/10 rounded-2xl p-3 mb-6">
                  <p className="text-xs text-indigo-300/30 font-medium mb-3 px-1">Cooldock</p>
                  <div className="grid grid-cols-2 gap-2">
                    {/* Music widget */}
                    <div className="bg-white/5 rounded-xl p-3 col-span-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-white truncate">Beethoven — Moonlight</p>
                          <p className="text-xs text-indigo-300/40">Focus mode</p>
                        </div>
                        <div className="flex gap-1.5">
                          <button className="w-6 h-6 bg-white/10 rounded-lg flex items-center justify-center">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="white" opacity="0.7">
                              <rect x="1" y="1" width="3" height="8"/>
                              <rect x="6" y="1" width="3" height="8"/>
                            </svg>
                          </button>
                          <button className="w-6 h-6 bg-white/10 rounded-lg flex items-center justify-center">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M2 5h6M6 2l3 3-3 3" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="mt-2 bg-white/10 rounded-full h-1">
                        <div className="bg-purple-400 h-1 rounded-full w-2/5" />
                      </div>
                    </div>

                    {/* Weather */}
                    <div className="bg-indigo-950/60 rounded-xl p-3 border border-indigo-500/15">
                      <p className="text-xs text-indigo-400/50 mb-1">Weather</p>
                      <p className="text-lg font-bold text-white">22°C</p>
                      <p className="text-xs text-indigo-300/40">Clear skies ☀️</p>
                    </div>

                    {/* Stats */}
                    <div className="bg-white/5 rounded-xl p-3">
                      <p className="text-xs text-indigo-300/40 mb-1">Stats</p>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-indigo-300/40">CPU</span>
                          <span className="text-emerald-400">18%</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-indigo-300/40">RAM</span>
                          <span className="text-amber-400">61%</span>
                        </div>
                      </div>
                    </div>

                    {/* Todos */}
                    <div className="bg-white/5 rounded-xl p-3 col-span-2">
                      <p className="text-xs text-indigo-300/40 mb-2">Today&apos;s Reflections</p>
                      <div className="space-y-1">
                        {["Revisit Marcus Aurelius on patience ✓", "Add insights from Sapiens Chapter 12", "Share Feynman quote with team"].map((t, i) => (
                          <div key={i} className={`text-xs flex items-center gap-1.5 ${i === 0 ? "text-indigo-400/30 line-through" : "text-indigo-200/50"}`}>
                            <div className={`w-3 h-3 rounded-sm border flex-shrink-0 flex items-center justify-center ${i === 0 ? "bg-emerald-500 border-emerald-500" : "border-indigo-500/30"}`}>
                              {i === 0 && (
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                                  <path d="M1.5 4l1.5 1.5L6.5 3" stroke="white" strokeWidth="1" strokeLinecap="round"/>
                                </svg>
                              )}
                            </div>
                            {t}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-center text-xs text-indigo-400/25">dock.cool</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
