const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3C8 3 3 8 3 14s5 11 11 11 11-5 11-11S20 3 14 3z" stroke="url(#g1)" strokeWidth="1.4"/>
        <path d="M14 8v6l4 2.5" stroke="url(#g1)" strokeWidth="1.4" strokeLinecap="round"/>
        <defs><linearGradient id="g1" x1="3" y1="3" x2="25" y2="25" gradientUnits="userSpaceOnUse"><stop stopColor="#fbbf24"/><stop offset="1" stopColor="#f59e0b"/></linearGradient></defs>
      </svg>
    ),
    title: "Timeless quotes",
    desc: "Collect quotes from the greatest minds across philosophy, science, and literature.",
    bg: "bg-gradient-to-br from-amber-950/60 to-yellow-950/40 border-amber-800/30",
    glow: "shadow-amber-900/20",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="5" stroke="url(#g2)" strokeWidth="1.4"/>
        <path d="M14 3v3M14 22v3M3 14h3M22 14h3M6.2 6.2l2.1 2.1M19.7 19.7l2.1 2.1M6.2 21.8l2.1-2.1M19.7 8.3l2.1-2.1" stroke="url(#g2)" strokeWidth="1.4" strokeLinecap="round"/>
        <defs><linearGradient id="g2" x1="3" y1="3" x2="25" y2="25" gradientUnits="userSpaceOnUse"><stop stopColor="#818cf8"/><stop offset="1" stopColor="#6366f1"/></linearGradient></defs>
      </svg>
    ),
    title: "Deep insights",
    desc: "Capture breakthrough ideas and mental models that rewire how you think.",
    bg: "bg-gradient-to-br from-indigo-950/60 to-violet-950/40 border-indigo-800/30",
    glow: "shadow-indigo-900/20",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 7h18M5 12h14M5 17h16M5 22h11" stroke="url(#g3)" strokeWidth="1.4" strokeLinecap="round"/>
        <defs><linearGradient id="g3" x1="5" y1="7" x2="23" y2="22" gradientUnits="userSpaceOnUse"><stop stopColor="#34d399"/><stop offset="1" stopColor="#10b981"/></linearGradient></defs>
      </svg>
    ),
    title: "Book summaries",
    desc: "Distil books into their core ideas and keep them searchable forever.",
    bg: "bg-gradient-to-br from-emerald-950/60 to-teal-950/40 border-emerald-800/30",
    glow: "shadow-emerald-900/20",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="8" cy="14" r="2.5" stroke="url(#g4)" strokeWidth="1.4"/>
        <circle cx="20" cy="8" r="2.5" stroke="url(#g4)" strokeWidth="1.4"/>
        <circle cx="20" cy="20" r="2.5" stroke="url(#g4)" strokeWidth="1.4"/>
        <path d="M10.5 13L17.5 9M10.5 15L17.5 19" stroke="url(#g4)" strokeWidth="1.4"/>
        <defs><linearGradient id="g4" x1="5" y1="5" x2="23" y2="23" gradientUnits="userSpaceOnUse"><stop stopColor="#f472b6"/><stop offset="1" stopColor="#ec4899"/></linearGradient></defs>
      </svg>
    ),
    title: "Knowledge graph",
    desc: "Connect ideas across thinkers and disciplines into a living knowledge network.",
    bg: "bg-gradient-to-br from-pink-950/60 to-rose-950/40 border-pink-800/30",
    glow: "shadow-pink-900/20",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4l2.5 5.5L22 10.5l-4 4 1 5.5-5-2.8-5 2.8 1-5.5-4-4 5.5-1L14 4z" stroke="url(#g5)" strokeWidth="1.4" strokeLinejoin="round"/>
        <defs><linearGradient id="g5" x1="4" y1="4" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#fb923c"/><stop offset="1" stopColor="#f97316"/></linearGradient></defs>
      </svg>
    ),
    title: "Wisdom search",
    desc: "Instantly find any quote, concept, or idea across your entire library.",
    bg: "bg-gradient-to-br from-orange-950/60 to-red-950/40 border-orange-800/30",
    glow: "shadow-orange-900/20",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="16" rx="2" stroke="url(#g6)" strokeWidth="1.4"/>
        <path d="M9 11h10M9 15h7" stroke="url(#g6)" strokeWidth="1.4" strokeLinecap="round"/>
        <defs><linearGradient id="g6" x1="4" y1="6" x2="24" y2="22" gradientUnits="userSpaceOnUse"><stop stopColor="#38bdf8"/><stop offset="1" stopColor="#0ea5e9"/></linearGradient></defs>
      </svg>
    ),
    title: "Daily reflection",
    desc: "Surface a random piece of wisdom each morning to spark your thinking.",
    bg: "bg-gradient-to-br from-sky-950/60 to-cyan-950/40 border-sky-800/30",
    glow: "shadow-sky-900/20",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M9 6h10l2 4-2 4H9L7 10l2-4z" stroke="url(#g7)" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M14 14v8M10 22h8" stroke="url(#g7)" strokeWidth="1.4" strokeLinecap="round"/>
        <defs><linearGradient id="g7" x1="7" y1="6" x2="21" y2="22" gradientUnits="userSpaceOnUse"><stop stopColor="#a78bfa"/><stop offset="1" stopColor="#7c3aed"/></linearGradient></defs>
      </svg>
    ),
    title: "Thinker profiles",
    desc: "Explore wisdom organized by thinker — from Aristotle to Alan Turing.",
    bg: "bg-gradient-to-br from-violet-950/60 to-purple-950/40 border-violet-800/30",
    glow: "shadow-violet-900/20",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 5C14 5 8 9 8 15a6 6 0 0012 0C20 9 14 5 14 5z" stroke="url(#g8)" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M14 15v4" stroke="url(#g8)" strokeWidth="1.4" strokeLinecap="round"/>
        <defs><linearGradient id="g8" x1="8" y1="5" x2="20" y2="21" gradientUnits="userSpaceOnUse"><stop stopColor="#fde68a"/><stop offset="1" stopColor="#fbbf24"/></linearGradient></defs>
      </svg>
    ),
    title: "Idea sparks",
    desc: "Tag and cluster raw ideas that haven't fully formed yet — let them brew.",
    bg: "bg-gradient-to-br from-amber-950/60 to-orange-950/40 border-amber-800/30",
    glow: "shadow-amber-900/20",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-[#060818]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-amber-400/80 uppercase tracking-widest mb-3">Features</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Every kind of knowledge,<br />
            <span className="bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text text-transparent">
              beautifully captured.
            </span>
          </h2>
          <p className="text-lg text-indigo-200/50 max-w-2xl mx-auto">
            From Stoic philosophy to quantum physics — Supaste turns scattered wisdom into a living, searchable library that's entirely yours.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              className={`${f.bg} border rounded-2xl p-6 shadow-lg ${f.glow} transition-all duration-200 hover:-translate-y-1 hover:shadow-xl cursor-default`}
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="font-semibold text-white/90 mb-1.5 text-sm">{f.title}</h3>
              <p className="text-xs text-indigo-200/50 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
