"use client";

const InlineShortcutsDemo = () => (
  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Inline Shortcuts</p>
    <div className="space-y-3">
      <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
        <p className="text-xs text-gray-500 mb-2">Type a shortcut in any app:</p>
        <div className="font-mono text-sm text-gray-800 bg-white rounded-lg p-3 border border-gray-200">
          /email<span className="inline-block w-0.5 h-4 bg-blue-500 align-middle ml-0.5 animate-pulse" />
        </div>
      </div>
      <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
        <p className="text-xs text-blue-600 font-medium mb-2">↳ Expands to:</p>
        <p className="text-sm text-gray-700">hello@yourcompany.com</p>
      </div>
    </div>
    <div className="mt-4 grid grid-cols-2 gap-2">
      {[
        { shortcut: "/addr", value: "123 Main St, NY" },
        { shortcut: "/sig", value: "Best regards, ..." },
        { shortcut: "/ph", value: "+1 (555) 000-0000" },
        { shortcut: "/meet", value: "cal.com/yourlink" },
      ].map((s, i) => (
        <div key={i} className="bg-gray-50 rounded-lg p-2 border border-gray-100">
          <p className="text-xs font-mono text-blue-600">{s.shortcut}</p>
          <p className="text-xs text-gray-500 truncate">{s.value}</p>
        </div>
      ))}
    </div>
  </div>
);

const RemindersDemo = () => (
  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Clip Reminders</p>
    <div className="space-y-3">
      {[
        { text: "Follow up with Sarah about the proposal", time: "Tomorrow, 9:00 AM", urgent: false },
        { text: "Submit Q4 report to finance team", time: "Today, 5:00 PM", urgent: true },
        { text: "Review pull request #482", time: "In 2 hours", urgent: false },
      ].map((r, i) => (
        <div
          key={i}
          className={`flex items-start gap-3 p-3 rounded-xl border ${
            r.urgent ? "bg-red-50 border-red-100" : "bg-gray-50 border-gray-100"
          }`}
        >
          <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${r.urgent ? "bg-red-400" : "bg-blue-400"}`} />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-gray-700 mb-0.5">{r.text}</p>
            <p className={`text-xs ${r.urgent ? "text-red-500 font-medium" : "text-gray-400"}`}>{r.time}</p>
          </div>
          <button className="text-xs bg-white border border-gray-200 px-2 py-1 rounded-lg text-gray-500 flex-shrink-0">
            ✓
          </button>
        </div>
      ))}
    </div>
    <button className="w-full mt-3 text-xs border-2 border-dashed border-gray-200 text-gray-400 py-2.5 rounded-xl hover:border-blue-200 hover:text-blue-400 transition-colors">
      + Add reminder
    </button>
  </div>
);

const QuickPasteDemo = () => (
  <div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
    <div className="p-4 border-b border-gray-800">
      <div className="flex items-center gap-2 bg-gray-800 rounded-xl px-4 py-2.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="6.5" cy="6.5" r="4.5" stroke="#6B7280" strokeWidth="1.2"/>
          <path d="M10.5 10.5L13 13" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
        <span className="text-gray-400 text-sm flex-1">Quick paste...</span>
        <kbd className="text-xs text-gray-600 bg-gray-700 rounded px-1.5 py-0.5">⌃⌘V</kbd>
      </div>
    </div>
    <div className="p-3 space-y-1">
      {[
        { text: "Meeting notes from Tuesday", app: "Notion", shortcut: "⌃⌘1" },
        { text: "const handleSubmit = async (e) =>", app: "VS Code", shortcut: "⌃⌘2" },
        { text: "#2563EB — Primary blue", app: "Figma", shortcut: "⌃⌘3" },
        { text: "https://figma.com/design/abc12", app: "Safari", shortcut: "⌃⌘4" },
        { text: "Sarah Chen — Product Lead", app: "Contacts", shortcut: "⌃⌘5" },
      ].map((item, i) => (
        <div
          key={i}
          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-colors ${
            i === 0 ? "bg-blue-600" : "hover:bg-gray-800"
          }`}
        >
          <div className={`flex-1 min-w-0`}>
            <p className={`text-sm truncate ${i === 0 ? "text-white font-medium" : "text-gray-300"}`}>
              {item.text}
            </p>
            <p className={`text-xs ${i === 0 ? "text-blue-200" : "text-gray-500"}`}>{item.app}</p>
          </div>
          <kbd className={`text-xs px-1.5 py-0.5 rounded flex-shrink-0 ${
            i === 0 ? "bg-blue-500 text-blue-100" : "bg-gray-800 text-gray-500"
          }`}>
            {item.shortcut}
          </kbd>
        </div>
      ))}
    </div>
  </div>
);

const features = [
  {
    badge: "Shortcuts",
    title: "Inline shortcuts that expand anywhere",
    desc: "Define text shortcuts and they expand into your saved clips in any app — without opening Supaste. /email becomes your address, /sig becomes your signature.",
    component: <InlineShortcutsDemo />,
    reverse: false,
  },
  {
    badge: "Reminders",
    title: "Set reminders on any clip",
    desc: "Pin a reminder to any clip and get notified at the right time. Never forget to follow up on that email, submit that report, or revisit that idea.",
    component: <RemindersDemo />,
    reverse: true,
  },
  {
    badge: "Quick Paste",
    title: "⌃⌘V — Paste anything, instantly",
    desc: "Hit Control+Command+V to open a lightning-fast launcher. Your last 10 clips are one keystroke away — no mouse, no window switching, just paste and keep going.",
    component: <QuickPasteDemo />,
    reverse: false,
  },
];

export default function MoreFeatures() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-32">
        {features.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col ${item.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}
          >
            <div className="flex-1">
              <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 rounded-full px-3 py-1 mb-4">
                {item.badge}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4 leading-snug">
                {item.title}
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">{item.desc}</p>
            </div>
            <div className="flex-1 w-full max-w-md lg:max-w-none">{item.component}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
