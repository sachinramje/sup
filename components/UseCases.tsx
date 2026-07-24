const useCases = [
  {
    emoji: "🎨",
    title: "Designers",
    color: "bg-purple-50 border-purple-100",
    accent: "text-purple-700",
    items: [
      "Color palettes from Figma & Coolors",
      "Icon libraries and SVG assets",
      "Visual references and mood boards",
      "Font stacks and design tokens",
      "Client feedback snippets",
    ],
  },
  {
    emoji: "💻",
    title: "Developers",
    color: "bg-blue-50 border-blue-100",
    accent: "text-blue-700",
    items: [
      "Code snippets and functions",
      "Terminal commands",
      "Stack Overflow answers",
      "API responses and endpoints",
      "Error messages for debugging",
    ],
  },
  {
    emoji: "📣",
    title: "Content & Marketing",
    color: "bg-amber-50 border-amber-100",
    accent: "text-amber-700",
    items: [
      "Viral hooks and headlines",
      "Keywords and SEO data",
      "Draft copy and CTAs",
      "Competitor screenshots",
      "Campaign research notes",
    ],
  },
  {
    emoji: "💼",
    title: "Sales & Support",
    color: "bg-emerald-50 border-emerald-100",
    accent: "text-emerald-700",
    items: [
      "Response templates",
      "Product links and pricing",
      "Client conversation notes",
      "Demo screenshots",
      "Objection-handling scripts",
    ],
  },
  {
    emoji: "🚀",
    title: "Founders & Operators",
    color: "bg-rose-50 border-rose-100",
    accent: "text-rose-700",
    items: [
      "Meeting notes and action items",
      "Business ideas and frameworks",
      "Competitor research",
      "Investor contact details",
      "Product roadmap snippets",
    ],
  },
  {
    emoji: "🏠",
    title: "Personal Use",
    color: "bg-cyan-50 border-cyan-100",
    accent: "text-cyan-700",
    items: [
      "Addresses and contacts",
      "Recipes and meal plans",
      "Travel bookings and links",
      "Inspirational quotes",
      "Grocery lists",
    ],
  },
];

export default function UseCases() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Use Cases</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Built for everyone<br />who works on a Mac
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Whatever you do, Supaste quietly saves everything you copy and makes it instantly retrievable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc, i) => (
            <div
              key={i}
              className={`${uc.color} border rounded-2xl p-6 hover:shadow-lg transition-all duration-200`}
            >
              <div className="text-3xl mb-3">{uc.emoji}</div>
              <h3 className={`text-lg font-bold mb-4 ${uc.accent}`}>{uc.title}</h3>
              <ul className="space-y-2">
                {uc.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-400" viewBox="0 0 16 16" fill="none">
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
