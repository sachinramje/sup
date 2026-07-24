"use client";
import { useState } from "react";

const categories = [
  { label: "Philosophy", count: 432, color: "bg-amber-950/60 text-amber-400 border border-amber-500/20" },
  { label: "Science", count: 289, color: "bg-indigo-950/60 text-indigo-300 border border-indigo-500/20" },
  { label: "Literature", count: 561, color: "bg-emerald-950/60 text-emerald-400 border border-emerald-500/20" },
  { label: "History", count: 198, color: "bg-purple-950/60 text-purple-300 border border-purple-500/20" },
  { label: "Technology", count: 334, color: "bg-sky-950/60 text-sky-300 border border-sky-500/20" },
];

const disciplineFilters = ["All", "Philosophy", "Science", "Literature", "History", "Technology"];
const typeFilters = ["quotes", "concepts", "insights", "book notes", "mental models", "aphorisms"];

const mockEntries = [
  { type: "quote", content: "Know thyself.", source: "Socrates", category: "Philosophy", color: "from-amber-500/20 border-amber-500/20 text-amber-300" },
  { type: "insight", content: "The art of medicine consists in amusing the patient while nature cures the disease.", source: "Voltaire", category: "Philosophy", color: "from-indigo-500/20 border-indigo-500/20 text-indigo-300" },
  { type: "concept", content: "What is not started today is never finished tomorrow.", source: "Goethe", category: "Literature", color: "from-emerald-500/20 border-emerald-500/20 text-emerald-300" },
  { type: "quote", content: "In the middle of every difficulty lies opportunity.", source: "Einstein", category: "Science", color: "from-sky-500/20 border-sky-500/20 text-sky-300" },
  { type: "insight", content: "Those who cannot remember the past are condemned to repeat it.", source: "Santayana", category: "History", color: "from-purple-500/20 border-purple-500/20 text-purple-300" },
  { type: "concept", content: "Be the change you wish to see in the world.", source: "Gandhi", category: "Philosophy", color: "from-amber-500/20 border-amber-500/20 text-amber-300" },
  { type: "quote", content: "Two roads diverged in a wood, and I — I took the one less traveled by.", source: "Frost", category: "Literature", color: "from-emerald-500/20 border-emerald-500/20 text-emerald-300" },
  { type: "insight", content: "The measure of intelligence is the ability to change.", source: "Einstein", category: "Science", color: "from-sky-500/20 border-sky-500/20 text-sky-300" },
  { type: "concept", content: "It does not matter how slowly you go as long as you do not stop.", source: "Confucius", category: "Philosophy", color: "from-amber-500/20 border-amber-500/20 text-amber-300" },
  { type: "quote", content: "Simplicity is the ultimate sophistication.", source: "Da Vinci", category: "Technology", color: "from-indigo-500/20 border-indigo-500/20 text-indigo-300" },
  { type: "insight", content: "The only true wisdom is knowing you know nothing.", source: "Socrates", category: "Philosophy", color: "from-amber-500/20 border-amber-500/20 text-amber-300" },
  { type: "concept", content: "Not all those who wander are lost.", source: "Tolkien", category: "Literature", color: "from-emerald-500/20 border-emerald-500/20 text-emerald-300" },
];

export default function Organization() {
  const [activeDiscipline, setActiveDiscipline] = useState("All");
  const [activeType, setActiveType] = useState("");

  const filtered = mockEntries.filter(e =>
    (activeDiscipline === "All" || e.category === activeDiscipline) &&
    (activeType === "" || e.type === activeType)
  );

  return (
    <section className="py-24 px-6 bg-[#060818]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-amber-400/80 uppercase tracking-widest mb-3">Organisation</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-white">Organised your</span>{" "}
            <span className="bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text text-transparent">way</span>
          </h2>
          <p className="text-lg text-indigo-200/50 max-w-2xl mx-auto">
            Create custom disciplines, filter by thinker or content type, and surface any piece of wisdom in seconds.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <div key={cat.label} className={`${cat.color} rounded-2xl px-5 py-3 text-sm font-semibold flex items-center gap-2`}>
              {cat.label}
              <span className="opacity-60 text-xs font-normal">{cat.count}</span>
            </div>
          ))}
          <div className="bg-white/5 border-2 border-dashed border-indigo-500/20 rounded-2xl px-5 py-3 text-sm font-medium text-indigo-400/40 flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            New discipline
          </div>
        </div>

        {/* Filter bar */}
        <div className="bg-[#0d1117] border border-indigo-500/15 rounded-2xl p-6 mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-semibold text-indigo-400/40 uppercase tracking-wider self-center mr-2">By Discipline:</span>
            {disciplineFilters.map((d) => (
              <button
                key={d}
                onClick={() => setActiveDiscipline(d)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeDiscipline === d
                    ? "bg-amber-400 text-gray-900 shadow-sm"
                    : "bg-white/5 border border-white/10 text-indigo-300/60 hover:border-indigo-400/30"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-semibold text-indigo-400/40 uppercase tracking-wider self-center mr-2">By Type:</span>
            {typeFilters.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(activeType === type ? "" : type)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeType === type
                    ? "bg-amber-400 text-gray-900 shadow-sm"
                    : "bg-white/5 border border-white/10 text-indigo-300/60 hover:border-indigo-400/30"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of wisdom entries */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {(filtered.length ? filtered : mockEntries).map((entry, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${entry.color.split(' ')[0]} border ${entry.color.split(' ')[1]} rounded-2xl p-4 hover:scale-[1.02] transition-all cursor-pointer group`}
            >
              <div className="mb-3">
                <span className={`text-xs font-semibold uppercase tracking-wider ${entry.color.split(' ')[2]} opacity-60`}>
                  {entry.type}
                </span>
              </div>
              <p className="text-xs text-white/80 leading-relaxed italic mb-3 line-clamp-3">
                &ldquo;{entry.content}&rdquo;
              </p>
              <p className="text-xs text-indigo-300/40">— {entry.source}</p>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-3">
                <button className={`w-full text-xs py-1.5 rounded-lg font-medium ${entry.color.split(' ')[2]} bg-white/10`}>
                  Recall
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
