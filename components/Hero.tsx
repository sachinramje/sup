"use client";
import React, { useEffect, useState } from "react";

const wisdomCards = [
  { type: "quote", content: "The only true wisdom is in knowing you know nothing.", source: "Socrates", category: "Philosophy", color: "from-amber-500/20 to-yellow-500/10 border-amber-400/30", icon: "✦" },
  { type: "insight", content: "Intelligence is the ability to adapt to change.", source: "Stephen Hawking", category: "Science", color: "from-blue-500/20 to-cyan-500/10 border-blue-400/30", icon: "◈" },
  { type: "concept", content: "Knowledge itself is power.", source: "Francis Bacon", category: "Philosophy", color: "from-purple-500/20 to-violet-500/10 border-purple-400/30", icon: "◆" },
  { type: "insight", content: "An investment in knowledge pays the best interest.", source: "Benjamin Franklin", category: "Wisdom", color: "from-emerald-500/20 to-teal-500/10 border-emerald-400/30", icon: "✦" },
  { type: "concept", content: "The mind is not a vessel to be filled but a fire to be kindled.", source: "Plutarch", category: "Education", color: "from-rose-500/20 to-pink-500/10 border-rose-400/30", icon: "◈" },
  { type: "quote", content: "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.", source: "Albert Einstein", category: "Learning", color: "from-indigo-500/20 to-blue-500/10 border-indigo-400/30", icon: "◆" },
];

const sidebarCategories = [
  { label: "All Wisdom", count: 2841, active: true },
  { label: "Philosophy", count: 432 },
  { label: "Science", count: 289 },
  { label: "Literature", count: 561 },
  { label: "History", count: 198 },
  { label: "Technology", count: 334 },
];

// Constellation nodes for background decoration
const nodes = [
  { x: 10, y: 15 }, { x: 25, y: 8 }, { x: 40, y: 20 }, { x: 55, y: 10 },
  { x: 70, y: 25 }, { x: 85, y: 12 }, { x: 90, y: 35 }, { x: 78, y: 45 },
  { x: 62, y: 38 }, { x: 45, y: 50 }, { x: 30, y: 42 }, { x: 15, y: 55 },
  { x: 5, y: 40 }, { x: 20, y: 70 }, { x: 35, y: 65 }, { x: 50, y: 72 },
  { x: 65, y: 60 }, { x: 80, y: 68 }, { x: 92, y: 55 }, { x: 75, y: 80 },
];

const edges = [
  [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],
  [10,11],[11,12],[12,0],[8,3],[9,4],[10,1],[7,5],[13,14],[14,15],
  [15,16],[16,17],[17,18],[18,19],[13,10],[14,9],[15,8],[16,7],
];

export default function Hero() {
  const [visible, setVisible] = useState(0);
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const t1 = setInterval(() => setVisible(v => Math.min(v + 1, wisdomCards.length)), 400);
    const t2 = setInterval(() => setPulse(p => (p + 1) % nodes.length), 1200);
    return () => { clearInterval(t1); clearInterval(t2); };
  }, []);

  return (
    <section className="relative pt-28 pb-20 px-6 overflow-hidden bg-[#060818]">

      {/* ── Constellation background ── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <svg className="w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="50" cy="50" rx="60" ry="60" fill="url(#glow)" />
          {edges.map(([a, b], i) => (
            <line key={i}
              x1={nodes[a].x} y1={nodes[a].y}
              x2={nodes[b].x} y2={nodes[b].y}
              stroke="#818cf8" strokeWidth="0.15" strokeOpacity="0.5"
            />
          ))}
          {nodes.map((n, i) => (
            <circle key={i} cx={n.x} cy={n.y}
              r={i === pulse ? 0.8 : 0.35}
              fill={i === pulse ? "#fbbf24" : "#a5b4fc"}
              opacity={i === pulse ? 1 : 0.7}
              style={{ transition: "r 0.6s ease, fill 0.6s ease" }}
            />
          ))}
        </svg>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060818] via-transparent to-[#060818]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-700/10 rounded-full blur-3xl" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-amber-500/6 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 rounded-full px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
            <span className="text-amber-400">✦</span>
            Your personal library of timeless wisdom
          </div>
        </div>

        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            <span className="text-white">Collect once.</span>
            <br />
            <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
              Know forever.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-indigo-200/70 max-w-2xl mx-auto leading-relaxed">
            Capture the quotes, insights, and ideas that shape how you think — organized by source, theme, and thinker, so you can search, find, and revisit any piece of wisdom in seconds.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
          <a href="#pricing"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-900 font-bold px-6 py-3.5 rounded-2xl hover:opacity-90 transition-all hover:shadow-lg hover:shadow-amber-500/25 text-base">
            <span>✦</span> Start collecting wisdom
          </a>
          <a href="#features"
            className="inline-flex items-center gap-2 text-indigo-300 font-medium px-6 py-3.5 rounded-2xl border border-indigo-500/25 hover:border-indigo-400/40 hover:bg-indigo-500/10 transition-all text-base backdrop-blur-sm">
            See how it works
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7H11M11 7L7 3M11 7L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <p className="text-center text-sm text-indigo-400/50 mb-16">
          Local-first · Fully private · macOS Sonoma 14.0+
        </p>

        {/* ── App Mockup ── */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-indigo-500/20 shadow-[0_0_80px_rgba(99,102,241,0.15),0_32px_64px_rgba(0,0,0,0.5)] bg-[#0d1117]">

            {/* Title bar */}
            <div className="bg-[#161b27] border-b border-white/5 px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-1.5 text-xs text-indigo-300/60 flex items-center gap-2 min-w-52">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="5" cy="5" r="3.5" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M8 8L10.5 10.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  Search wisdom, quotes, thinkers…
                  <span className="ml-auto opacity-40 text-xs">⌘K</span>
                </div>
              </div>
              <div className="w-16" />
            </div>

            {/* App body */}
            <div className="flex min-h-96">
              {/* Sidebar */}
              <div className="w-52 border-r border-white/5 bg-[#0d1117] p-3 hidden sm:block">
                <p className="text-xs font-semibold text-indigo-400/50 uppercase tracking-wider mb-3 px-2">Library</p>
                {sidebarCategories.map((item) => (
                  <div key={item.label}
                    className={`flex items-center justify-between px-2 py-1.5 rounded-lg mb-0.5 cursor-pointer text-xs transition-colors ${
                      item.active
                        ? "bg-indigo-600/30 text-indigo-200 border border-indigo-500/20"
                        : "text-indigo-300/50 hover:bg-white/5"
                    }`}
                  >
                    <span className="font-medium">{item.label}</span>
                    <span className={`text-xs ${item.active ? "text-indigo-300/60" : "text-white/20"}`}>{item.count}</span>
                  </div>
                ))}

                <div className="mt-5 border-t border-white/5 pt-4">
                  <p className="text-xs font-semibold text-indigo-400/50 uppercase tracking-wider mb-2 px-2">Thinkers</p>
                  {["Aristotle", "Einstein", "Feynman", "Aurelius", "Curie"].map((t) => (
                    <div key={t} className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs text-indigo-300/40 hover:bg-white/5 cursor-pointer">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-indigo-400/30 to-purple-400/30 border border-indigo-500/20" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1 p-4 bg-[#0d1117]">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-sm font-semibold text-white/80">All Wisdom</h3>
                    <p className="text-xs text-indigo-300/40">2,841 insights collected</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-amber-400/70 bg-amber-400/10 border border-amber-400/20 px-2 py-1 rounded-lg">✦ 12 new today</span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {wisdomCards.slice(0, visible).map((card, i) => (
                    <div key={i}
                      className={`flex items-start gap-3 p-3.5 rounded-xl border bg-gradient-to-r ${card.color} backdrop-blur-sm`}
                      style={{ animation: "fadeSlideIn 0.4s ease forwards" }}
                    >
                      <div className="flex-shrink-0 w-7 h-7 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-sm">
                        {card.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-white/80 leading-relaxed mb-1">
                          &ldquo;{card.content}&rdquo;
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-indigo-300/50">— {card.source}</span>
                          <span className="text-xs text-white/20">·</span>
                          <span className="text-xs text-indigo-400/40 bg-indigo-500/10 px-1.5 py-0.5 rounded-md border border-indigo-500/10">
                            {card.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Glow reflection */}
          <div className="h-12 mx-12 bg-indigo-500/10 blur-2xl rounded-full mt-1" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
