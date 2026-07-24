"use client";

const QuickRecallDemo = () => (
  <div className="bg-[#0d1117] rounded-2xl border border-indigo-500/20 overflow-hidden shadow-[0_0_60px_rgba(99,102,241,0.1)]">
    <div className="bg-[#161b27] border-b border-white/5 px-4 py-3 flex items-center gap-2">
      <div className="w-3 h-3 rounded-full bg-red-500/60" />
      <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
      <div className="w-3 h-3 rounded-full bg-green-500/60" />
      <span className="ml-2 text-xs text-indigo-300/50 font-medium">Inline Recall</span>
    </div>
    <div className="p-5 space-y-3">
      <div className="bg-[#161b27] rounded-xl p-4 border border-white/5">
        <p className="text-xs text-indigo-300/40 mb-2">Type a shortcut in any writing app:</p>
        <div className="font-mono text-sm text-white/80 bg-[#0d1117] rounded-lg p-3 border border-indigo-500/10">
          /stoic<span className="inline-block w-0.5 h-4 bg-amber-400 align-middle ml-0.5 animate-pulse" />
        </div>
      </div>
      <div className="bg-amber-950/40 rounded-xl p-4 border border-amber-500/15">
        <p className="text-xs text-amber-400/60 font-medium mb-2">↳ Expands to your saved Stoic quote:</p>
        <p className="text-sm text-white/80 italic">&ldquo;You have power over your mind, not outside events.&rdquo; — Marcus Aurelius</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { shortcut: "/buddha", value: "Be present, be aware..." },
          { shortcut: "/plato", value: "The unexamined life..." },
          { shortcut: "/feynman", value: "The first principle is..." },
          { shortcut: "/seneca", value: "Omnia aliena sunt..." },
        ].map((s, i) => (
          <div key={i} className="bg-white/5 rounded-lg p-2 border border-white/5">
            <p className="text-xs font-mono text-amber-400/70">{s.shortcut}</p>
            <p className="text-xs text-indigo-300/40 truncate">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ReflectionRemindersDemo = () => (
  <div className="bg-[#0d1117] rounded-2xl border border-purple-500/20 overflow-hidden shadow-[0_0_60px_rgba(139,92,246,0.08)]">
    <div className="bg-[#161b27] border-b border-white/5 px-4 py-3">
      <p className="text-xs text-purple-300/50 font-semibold uppercase tracking-wider">Reflection Reminders</p>
    </div>
    <div className="p-5 space-y-3">
      {[
        { text: "Revisit Epictetus on resilience before the big pitch", time: "Tomorrow, 7:00 AM", urgent: false, icon: "◈" },
        { text: "Reflect on today's key idea from Thinking, Fast and Slow", time: "Today, 9:00 PM", urgent: true, icon: "✦" },
        { text: "Weekly review — add new book insights to library", time: "Sunday, 10:00 AM", urgent: false, icon: "◆" },
      ].map((r, i) => (
        <div
          key={i}
          className={`flex items-start gap-3 p-3 rounded-xl border ${
            r.urgent
              ? "bg-amber-950/40 border-amber-500/20"
              : "bg-white/5 border-white/5"
          }`}
        >
          <span className={`text-sm flex-shrink-0 mt-0.5 ${r.urgent ? "text-amber-400" : "text-indigo-400"}`}>{r.icon}</span>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-white/70 mb-0.5">{r.text}</p>
            <p className={`text-xs ${r.urgent ? "text-amber-400/60 font-medium" : "text-indigo-300/30"}`}>{r.time}</p>
          </div>
          <button className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded-lg text-indigo-300/40 flex-shrink-0">
            ✓
          </button>
        </div>
      ))}
    </div>
    <div className="px-5 pb-5">
      <button className="w-full text-xs border-2 border-dashed border-indigo-500/20 text-indigo-400/40 py-2.5 rounded-xl hover:border-amber-400/30 hover:text-amber-400/60 transition-colors">
        + Add reflection reminder
      </button>
    </div>
  </div>
);

const QuickSearchDemo = () => (
  <div className="bg-[#080c18] rounded-2xl overflow-hidden border border-indigo-500/20 shadow-[0_0_60px_rgba(99,102,241,0.15)]">
    <div className="p-4 border-b border-white/5">
      <div className="flex items-center gap-2 bg-[#161b27] rounded-xl px-4 py-2.5 border border-indigo-500/15">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="6.5" cy="6.5" r="4.5" stroke="#818cf8" strokeWidth="1.2"/>
          <path d="M10.5 10.5L13 13" stroke="#818cf8" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
        <span className="text-indigo-300/50 text-sm flex-1">Search all wisdom...</span>
        <kbd className="text-xs text-indigo-400/30 bg-white/5 rounded px-1.5 py-0.5">⌘K</kbd>
      </div>
    </div>
    <div className="p-3 space-y-1">
      {[
        { text: "The unexamined life is not worth living", source: "Socrates", category: "Philosophy" },
        { text: "Imagination is more important than knowledge", source: "Einstein", category: "Science" },
        { text: "Not all those who wander are lost", source: "Tolkien", category: "Literature" },
        { text: "In the beginning was the Word", source: "Bible", category: "Scripture" },
        { text: "The medium is the message", source: "McLuhan", category: "Technology" },
      ].map((item, i) => (
        <div
          key={i}
          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-colors ${
            i === 0 ? "bg-indigo-600/30 border border-indigo-500/20" : "hover:bg-white/5"
          }`}
        >
          <div className="flex-1 min-w-0">
            <p className={`text-xs truncate italic ${i === 0 ? "text-white/90 font-medium" : "text-white/50"}`}>
              &ldquo;{item.text}&rdquo;
            </p>
            <p className={`text-xs ${i === 0 ? "text-indigo-300/60" : "text-indigo-300/30"}`}>
              — {item.source} · {item.category}
            </p>
          </div>
          {i === 0 && (
            <span className="text-xs bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-md border border-amber-400/15 flex-shrink-0">Recall</span>
          )}
        </div>
      ))}
    </div>
  </div>
);

const features = [
  {
    badge: "Inline Recall",
    title: "Shortcuts that summon wisdom anywhere",
    desc: "Define text shortcuts tied to your favourite pieces of wisdom. Type /stoic in any app and it expands to a Stoic quote from your library — without breaking your flow.",
    component: <QuickRecallDemo />,
    reverse: false,
  },
  {
    badge: "Reflection Reminders",
    title: "Never let great ideas fade away",
    desc: "Pin a reminder to any piece of wisdom and be nudged at the right moment. Epictetus before a difficult meeting, Feynman before deep work — let your library guide your day.",
    component: <ReflectionRemindersDemo />,
    reverse: true,
  },
  {
    badge: "Instant Search",
    title: "⌘K — Any idea, in under a second",
    desc: "Hit Command+K to open a lightning-fast search across your entire wisdom library. Every quote, insight, and book note is fully indexed — find anything before the thought slips away.",
    component: <QuickSearchDemo />,
    reverse: false,
  },
];

export default function MoreFeatures() {
  return (
    <section className="py-24 px-6 bg-[#060818]">
      <div className="max-w-6xl mx-auto space-y-32">
        {features.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col ${item.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}
          >
            <div className="flex-1">
              <span className="inline-block text-xs font-bold text-amber-400/80 uppercase tracking-widest bg-amber-400/10 border border-amber-400/15 rounded-full px-3 py-1 mb-4">
                {item.badge}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 leading-snug">
                {item.title}
              </h2>
              <p className="text-indigo-200/60 text-lg leading-relaxed">{item.desc}</p>
            </div>
            <div className="flex-1 w-full max-w-md lg:max-w-none">{item.component}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
