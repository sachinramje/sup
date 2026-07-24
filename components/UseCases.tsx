const useCases = [
  {
    icon: "✦",
    title: "Philosophers & Thinkers",
    color: "bg-gradient-to-br from-amber-950/60 to-yellow-950/40 border-amber-800/30",
    accent: "text-amber-400",
    items: [
      "Quotes from Stoics, Epicureans, and Existentialists",
      "Logical arguments and dialectics",
      "Cross-era idea comparisons",
      "Annotations from primary texts",
      "Personal philosophical frameworks",
    ],
  },
  {
    icon: "◈",
    title: "Researchers & Academics",
    color: "bg-gradient-to-br from-indigo-950/60 to-violet-950/40 border-indigo-800/30",
    accent: "text-indigo-300",
    items: [
      "Cited passages from academic papers",
      "Hypothesis and research notes",
      "Key findings from studies",
      "Cross-disciplinary insights",
      "Bibliography and source tracking",
    ],
  },
  {
    icon: "◆",
    title: "Writers & Authors",
    color: "bg-gradient-to-br from-emerald-950/60 to-teal-950/40 border-emerald-800/30",
    accent: "text-emerald-400",
    items: [
      "Inspiring passages from literature",
      "Character quotes and archetypes",
      "Narrative structures and motifs",
      "Metaphors and powerful imagery",
      "Draft lines and writing experiments",
    ],
  },
  {
    icon: "✦",
    title: "Students & Learners",
    color: "bg-gradient-to-br from-sky-950/60 to-cyan-950/40 border-sky-800/30",
    accent: "text-sky-300",
    items: [
      "Textbook key concepts and summaries",
      "Lecture notes and definitions",
      "Mnemonics and memory hooks",
      "Professor insights worth keeping",
      "Study flashcard content",
    ],
  },
  {
    icon: "◈",
    title: "Founders & Leaders",
    color: "bg-gradient-to-br from-purple-950/60 to-violet-950/40 border-purple-800/30",
    accent: "text-purple-300",
    items: [
      "Mental models from great thinkers",
      "Decision-making frameworks",
      "Leadership wisdom from history",
      "Inspirational founder quotes",
      "Strategic insight from biographies",
    ],
  },
  {
    icon: "◆",
    title: "Personal Growth",
    color: "bg-gradient-to-br from-rose-950/60 to-pink-950/40 border-rose-800/30",
    accent: "text-rose-300",
    items: [
      "Daily affirmations and intentions",
      "Mindfulness and presence quotes",
      "Journal prompts from thinkers",
      "Wisdom to share with loved ones",
      "Life philosophy you live by",
    ],
  },
];

export default function UseCases() {
  return (
    <section className="py-24 px-6 bg-[#060818]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-amber-400/80 uppercase tracking-widest mb-3">Who It&apos;s For</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-white">Built for everyone</span>
            <br />
            <span className="bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text text-transparent">
              who thinks deeply
            </span>
          </h2>
          <p className="text-lg text-indigo-200/50 max-w-2xl mx-auto">
            Whatever your pursuit, Supaste quietly captures the ideas that move you — and makes them instantly retrievable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc, i) => (
            <div
              key={i}
              className={`${uc.color} border rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-200`}
            >
              <div className={`text-2xl mb-3 ${uc.accent}`}>{uc.icon}</div>
              <h3 className={`text-lg font-bold mb-4 ${uc.accent}`}>{uc.title}</h3>
              <ul className="space-y-2">
                {uc.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-indigo-200/50">
                    <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${uc.accent} opacity-60`} viewBox="0 0 16 16" fill="none">
                      <path d="M6 8l1.5 1.5L10.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
