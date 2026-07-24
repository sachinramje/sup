const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="#2563EB" strokeWidth="1.5"/>
        <path d="M12 6v6l4 2" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Local first",
    desc: "All data lives on your Mac. Nothing ever leaves your device.",
    color: "bg-blue-50",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 7v5c0 5.25 3.4 10.15 8 11.35C16.6 22.15 20 17.25 20 12V7L12 2z" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Privacy first",
    desc: "No accounts, no sync, no analytics. 100% private.",
    color: "bg-emerald-50",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke="#8B5CF6" strokeWidth="1.5"/>
        <path d="M20 20l-3-3" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Search anything",
    desc: "Instantly search through all your clips, images, and colors.",
    color: "bg-violet-50",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="14" rx="2" stroke="#F59E0B" strokeWidth="1.5"/>
        <path d="M3 17l4-4 3 3 4-5 4 6" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Screenshots",
    desc: "Capture and browse your full screenshot history with previews.",
    color: "bg-amber-50",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="14" rx="2" stroke="#EC4899" strokeWidth="1.5"/>
        <path d="M8 10h8M8 13h5" stroke="#EC4899" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="18" cy="17" r="3" fill="#EC4899"/>
        <path d="M17 17l.7.7L19.5 16" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Screenshot OCR",
    desc: "Extract and search text inside images and screenshots.",
    color: "bg-pink-50",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="#06B6D4" strokeWidth="1.5"/>
        <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="#06B6D4" strokeWidth="1.5"/>
        <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="#06B6D4" strokeWidth="1.5"/>
        <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="#06B6D4" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Grouped by App",
    desc: "Clips are auto-organized by the app you copied them from.",
    color: "bg-cyan-50",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 6h16M4 10h10M4 14h12M4 18h8" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="20" cy="17" r="3" fill="#F97316"/>
        <path d="M18.5 17l.8.8 2-2" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Type filters",
    desc: "Filter by text, code, links, images, colors, and more.",
    color: "bg-orange-50",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 7v5c0 5.25 3.4 10.15 8 11.35C16.6 22.15 20 17.25 20 12V7L12 2z" stroke="#EF4444" strokeWidth="1.5"/>
        <path d="M12 8v4M12 14v.5" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Sensitive detection",
    desc: "Passwords and secrets are auto-detected and hidden.",
    color: "bg-red-50",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Features</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Everything you&apos;ve ever copied.<br />Finally organized.
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Supaste works silently in the background, capturing everything — then surfaces exactly what you need.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              className={`${f.color} rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg cursor-default`}
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1.5 text-sm">{f.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
