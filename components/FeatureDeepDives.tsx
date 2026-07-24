"use client";

const WisdomLibraryDemo = () => (
  <div className="bg-[#0d1117] rounded-2xl border border-indigo-500/20 overflow-hidden shadow-[0_0_60px_rgba(99,102,241,0.12)]">
    <div className="bg-[#161b27] border-b border-white/5 px-4 py-3 flex items-center gap-2">
      <div className="w-3 h-3 rounded-full bg-red-500/60" />
      <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
      <div className="w-3 h-3 rounded-full bg-green-500/60" />
      <span className="ml-2 text-xs text-indigo-300/50 font-medium">Wisdom Vault</span>
    </div>
    <div className="p-4 space-y-2.5">
      <div className="bg-gradient-to-r from-amber-500/15 to-yellow-500/5 border border-amber-500/20 rounded-xl p-3.5">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-amber-400 text-xs">✦</span>
          <span className="text-xs text-amber-400/60 font-medium uppercase tracking-wider">Philosophy</span>
        </div>
        <p className="text-xs text-white/80 italic leading-relaxed">
          &ldquo;The unexamined life is not worth living.&rdquo;
        </p>
        <p className="text-xs text-indigo-300/40 mt-1.5">— Socrates · added 2m ago</p>
      </div>
      <div className="bg-gradient-to-r from-indigo-500/15 to-violet-500/5 border border-indigo-500/20 rounded-xl p-3.5">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-indigo-400 text-xs">◈</span>
          <span className="text-xs text-indigo-400/60 font-medium uppercase tracking-wider">Science</span>
        </div>
        <p className="text-xs text-white/80 italic leading-relaxed">
          &ldquo;Imagination is more important than knowledge.&rdquo;
        </p>
        <p className="text-xs text-indigo-300/40 mt-1.5">— Albert Einstein · added 8m ago</p>
      </div>
      <div className="bg-gradient-to-r from-emerald-500/15 to-teal-500/5 border border-emerald-500/20 rounded-xl p-3.5">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-emerald-400 text-xs">◆</span>
          <span className="text-xs text-emerald-400/60 font-medium uppercase tracking-wider">Literature</span>
        </div>
        <p className="text-xs text-white/80 italic leading-relaxed">
          &ldquo;Not all those who wander are lost.&rdquo;
        </p>
        <p className="text-xs text-indigo-300/40 mt-1.5">— J.R.R. Tolkien · added 15m ago</p>
      </div>
      <div className="flex items-center gap-2 border-t border-white/5 pt-2.5">
        <div className="flex-1 bg-white/5 rounded-lg px-3 py-1.5 text-xs text-indigo-300/30">⌘K  Search all wisdom...</div>
        <button className="text-xs bg-amber-400/20 text-amber-300 px-2.5 py-1.5 rounded-lg font-medium border border-amber-400/20">Recall</button>
      </div>
    </div>
  </div>
);

const KnowledgeGraphDemo = () => (
  <div className="bg-[#0d1117] rounded-2xl border border-purple-500/20 overflow-hidden shadow-[0_0_60px_rgba(139,92,246,0.1)]">
    <div className="p-4">
      <p className="text-xs text-purple-300/50 font-semibold uppercase tracking-wider mb-3">Knowledge Graph</p>
      <div className="relative h-52 bg-[#080c18] rounded-xl border border-white/5 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 300 200">
          {/* Connection lines */}
          <line x1="150" y1="100" x2="80" y2="60" stroke="#6366f1" strokeWidth="0.8" strokeOpacity="0.4"/>
          <line x1="150" y1="100" x2="220" y2="60" stroke="#6366f1" strokeWidth="0.8" strokeOpacity="0.4"/>
          <line x1="150" y1="100" x2="80" y2="145" stroke="#6366f1" strokeWidth="0.8" strokeOpacity="0.4"/>
          <line x1="150" y1="100" x2="220" y2="145" stroke="#6366f1" strokeWidth="0.8" strokeOpacity="0.4"/>
          <line x1="80" y1="60" x2="30" y2="40" stroke="#818cf8" strokeWidth="0.5" strokeOpacity="0.3"/>
          <line x1="80" y1="60" x2="40" y2="100" stroke="#818cf8" strokeWidth="0.5" strokeOpacity="0.3"/>
          <line x1="220" y1="60" x2="270" y2="40" stroke="#818cf8" strokeWidth="0.5" strokeOpacity="0.3"/>
          <line x1="220" y1="60" x2="260" y2="100" stroke="#818cf8" strokeWidth="0.5" strokeOpacity="0.3"/>
          <line x1="80" y1="145" x2="30" y2="165" stroke="#818cf8" strokeWidth="0.5" strokeOpacity="0.3"/>
          <line x1="220" y1="145" x2="270" y2="165" stroke="#818cf8" strokeWidth="0.5" strokeOpacity="0.3"/>
          {/* Centre node - pulsing */}
          <circle cx="150" cy="100" r="18" fill="#312e81" stroke="#6366f1" strokeWidth="1.5"/>
          <text x="150" y="97" textAnchor="middle" fill="#a5b4fc" fontSize="7" fontWeight="600">Wisdom</text>
          <text x="150" y="106" textAnchor="middle" fill="#818cf8" fontSize="5.5">2,841 ideas</text>
          {/* Branch nodes */}
          {[
            { cx: 80, cy: 60, label: "Philosophy", color: "#f59e0b", bg: "#1c1400" },
            { cx: 220, cy: 60, label: "Science", color: "#38bdf8", bg: "#001420" },
            { cx: 80, cy: 145, label: "Literature", color: "#34d399", bg: "#001410" },
            { cx: 220, cy: 145, label: "History", color: "#f472b6", bg: "#1a0014" },
          ].map((n, i) => (
            <g key={i}>
              <circle cx={n.cx} cy={n.cy} r="14" fill={n.bg} stroke={n.color} strokeWidth="1" strokeOpacity="0.6"/>
              <text x={n.cx} y={n.cy + 3} textAnchor="middle" fill={n.color} fontSize="5.5" fontWeight="600">{n.label}</text>
            </g>
          ))}
          {/* Leaf nodes */}
          {[
            { cx: 30, cy: 40, label: "Stoicism" },
            { cx: 40, cy: 100, label: "Ethics" },
            { cx: 270, cy: 40, label: "Physics" },
            { cx: 260, cy: 100, label: "Math" },
            { cx: 30, cy: 165, label: "Poetry" },
            { cx: 270, cy: 165, label: "Ancient" },
          ].map((n, i) => (
            <g key={i}>
              <circle cx={n.cx} cy={n.cy} r="9" fill="#0d1117" stroke="#4f46e5" strokeWidth="0.8" strokeOpacity="0.5"/>
              <text x={n.cx} y={n.cy + 3} textAnchor="middle" fill="#a5b4fc" fontSize="4.5" opacity="0.7">{n.label}</text>
            </g>
          ))}
        </svg>
      </div>
      <div className="flex items-center gap-2 mt-3">
        <div className="flex items-center gap-1.5 text-xs text-indigo-300/50">
          <div className="w-2 h-2 rounded-full bg-amber-400/60" /> Philosophy
        </div>
        <div className="flex items-center gap-1.5 text-xs text-indigo-300/50">
          <div className="w-2 h-2 rounded-full bg-sky-400/60" /> Science
        </div>
        <div className="flex items-center gap-1.5 text-xs text-indigo-300/50">
          <div className="w-2 h-2 rounded-full bg-emerald-400/60" /> Literature
        </div>
      </div>
    </div>
  </div>
);

const OCRWisdomDemo = () => (
  <div className="bg-[#0d1117] rounded-2xl border border-emerald-500/20 overflow-hidden shadow-[0_0_60px_rgba(16,185,129,0.08)]">
    <div className="bg-[#161b27] p-4 border-b border-white/5">
      <p className="text-xs text-emerald-400/60 font-semibold uppercase tracking-wider mb-3">Screenshot OCR — Book Page</p>
      <div className="bg-[#080c18] rounded-xl p-4 border border-white/5 font-serif">
        <p className="text-xs text-white/40 mb-1 text-center italic">— Chapter IV —</p>
        <p className="text-xs text-white/70 leading-relaxed text-center italic">
          &ldquo;The measure of intelligence is the ability to change.&rdquo;
        </p>
        <p className="text-xs text-white/30 text-right mt-2 not-italic" style={{fontFamily: 'sans-serif'}}>p. 142</p>
      </div>
    </div>
    <div className="p-4 border-t border-white/5">
      <p className="text-xs font-semibold text-emerald-400/60 uppercase tracking-wider mb-2">Extracted & saved automatically</p>
      <div className="bg-emerald-500/10 rounded-xl p-3 border border-emerald-500/20 text-xs text-white/80 italic leading-relaxed mb-3">
        &ldquo;The measure of intelligence is the ability to change.&rdquo;
      </div>
      <div className="flex items-center gap-2">
        <button className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/20 px-3 py-1.5 rounded-lg font-medium">Add to Library</button>
        <button className="text-xs text-indigo-300/50 px-3 py-1.5 rounded-lg border border-white/10">Tag thinker</button>
      </div>
    </div>
  </div>
);

const DailyWisdomDemo = () => (
  <div className="bg-[#0d1117] rounded-2xl border border-amber-500/20 overflow-hidden shadow-[0_0_60px_rgba(251,191,36,0.08)]">
    <div className="bg-gradient-to-br from-amber-950/80 to-[#0d1117] p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-amber-400 text-lg">✦</span>
        <p className="text-xs text-amber-400/70 font-semibold uppercase tracking-widest">Today&apos;s Wisdom — July 24</p>
      </div>
      <blockquote className="text-base text-white/90 italic leading-relaxed font-serif mb-4">
        &ldquo;Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.&rdquo;
      </blockquote>
      <p className="text-sm text-amber-400/60 font-medium">— The Buddha</p>
      <div className="mt-4 flex items-center gap-2">
        <span className="text-xs bg-amber-400/10 text-amber-400/70 border border-amber-400/20 px-2.5 py-1 rounded-full">Mindfulness</span>
        <span className="text-xs bg-amber-400/10 text-amber-400/70 border border-amber-400/20 px-2.5 py-1 rounded-full">Eastern Philosophy</span>
      </div>
    </div>
    <div className="px-4 pb-4 pt-3 border-t border-white/5">
      <p className="text-xs text-indigo-300/40 mb-2">Your streak</p>
      <div className="flex gap-1">
        {[true,true,true,true,true,true,true,false,false,false].map((active, i) => (
          <div key={i} className={`flex-1 h-1.5 rounded-full ${active ? "bg-amber-400/60" : "bg-white/5"}`} />
        ))}
      </div>
      <p className="text-xs text-amber-400/50 mt-1.5">7-day reflection streak 🔥</p>
    </div>
  </div>
);

const deepDives = [
  {
    badge: "Library",
    title: "One beautiful place for all your wisdom",
    desc: "Every quote, insight, and idea you encounter — captured in a stunning visual library, organised by thinker, theme, and discipline. Search everything in an instant.",
    component: <WisdomLibraryDemo />,
    quote: { text: "This is the first tool that actually made me want to read more — because I know nothing I find will slip away.", author: "Evan", role: "Philosopher & Product Designer" },
  },
  {
    badge: "Knowledge Graph",
    title: "See how ideas connect across centuries",
    desc: "Wisdom doesn't exist in silos. Supaste maps your collected insights into a living knowledge graph — revealing unexpected connections between thinkers, disciplines, and eras.",
    component: <KnowledgeGraphDemo />,
    quote: { text: "I discovered that Seneca and Epictetus and Marcus Aurelius all said the same thing in different ways. Supaste revealed that pattern.", author: "Antal Balazs", role: "Author & Researcher" },
    reverse: true,
  },
  {
    badge: "Screenshot OCR",
    title: "Capture wisdom from books and images",
    desc: "Photograph a page from any book. Supaste reads the text with Apple Vision on-device and adds it to your library — fully searchable, instantly attributed to the source.",
    component: <OCRWisdomDemo />,
  },
  {
    badge: "Daily Reflection",
    title: "Start every day with a spark of insight",
    desc: "Each morning, Supaste surfaces a piece of wisdom from your own library. Revisit forgotten ideas. Build a daily reflection habit. Let great thoughts compound over time.",
    component: <DailyWisdomDemo />,
    reverse: true,
  },
];

export default function FeatureDeepDives() {
  return (
    <section className="py-24 px-6 bg-[#060818]">
      <div className="max-w-6xl mx-auto space-y-32">
        {deepDives.map((item, i) => (
          <div key={i}
            className={`flex flex-col ${item.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}
          >
            <div className="flex-1">
              <span className="inline-block text-xs font-bold text-amber-400/80 uppercase tracking-widest bg-amber-400/10 border border-amber-400/15 rounded-full px-3 py-1 mb-4">
                {item.badge}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 leading-snug">
                {item.title}
              </h2>
              <p className="text-indigo-200/60 text-lg leading-relaxed mb-8">{item.desc}</p>
              {item.quote && (
                <div className="bg-indigo-950/50 border border-indigo-500/15 rounded-2xl p-5">
                  <p className="text-sm text-indigo-100/70 leading-relaxed mb-3 italic">
                    &ldquo;{item.quote.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500/40 to-purple-500/40 rounded-full border border-indigo-400/20" />
                    <div>
                      <p className="text-sm font-semibold text-white/80">{item.quote.author}</p>
                      <p className="text-xs text-indigo-400/50">{item.quote.role}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex-1 w-full max-w-md lg:max-w-none">{item.component}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
