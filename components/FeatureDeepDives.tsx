"use client";

const ClipboardDemo = () => (
  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
    <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 flex items-center gap-2">
      <div className="w-3 h-3 rounded-full bg-red-400" />
      <div className="w-3 h-3 rounded-full bg-yellow-400" />
      <div className="w-3 h-3 rounded-full bg-green-400" />
      <span className="ml-2 text-xs text-gray-500 font-medium">Supaste</span>
    </div>
    <div className="p-4">
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="col-span-2 bg-blue-600 text-white rounded-xl p-3 text-xs">
          <p className="text-blue-200 text-xs mb-0.5">Text • Slack • 2m ago</p>
          <p className="font-medium">Meeting moved to 3pm, please update your calendars</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-3 text-xs border border-gray-100">
          <p className="text-gray-400 text-xs mb-0.5">Color • Figma</p>
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-md bg-blue-600 shadow-sm" />
            <span className="font-mono font-medium">#2563EB</span>
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-3 text-xs border border-gray-100">
          <p className="text-gray-400 text-xs mb-0.5">Code • VS Code</p>
          <p className="font-mono text-gray-700 truncate">const router = use…</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-3 text-xs border border-gray-100">
          <p className="text-gray-400 text-xs mb-0.5">Link • Safari</p>
          <p className="text-blue-500 truncate">dribbble.com/shot…</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-3 text-xs border border-gray-100">
          <p className="text-gray-400 text-xs mb-0.5">Screenshot</p>
          <div className="w-full h-10 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg" />
        </div>
      </div>
      <div className="flex items-center gap-2 border-t border-gray-100 pt-3">
        <div className="flex-1 bg-gray-100 rounded-lg px-3 py-1.5 text-xs text-gray-400">⌘K  Search clips...</div>
        <button className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-lg font-medium">Paste</button>
      </div>
    </div>
  </div>
);

const NotchDemo = () => (
  <div className="relative">
    {/* Notch shelf */}
    <div className="bg-gray-900 rounded-2xl p-1 mb-4 inline-flex items-center gap-1 mx-auto flex justify-center">
      <div className="bg-gray-800 rounded-xl px-3 py-2 flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">S</div>
        <div className="text-white text-xs">
          <p className="font-medium">Supaste</p>
          <p className="text-gray-400">6 clips</p>
        </div>
      </div>
      <div className="w-px h-8 bg-gray-700" />
      {["📋", "🎨", "💻", "🖼️", "🔗"].map((emoji, i) => (
        <div key={i} className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-sm cursor-pointer hover:bg-gray-700 transition-colors">
          {emoji}
        </div>
      ))}
    </div>
    {/* App window */}
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-xl">🎨</div>
        <div>
          <p className="text-sm font-semibold text-gray-900">Figma</p>
          <p className="text-xs text-gray-400">Design canvas</p>
        </div>
      </div>
      <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-center min-h-24 text-xs text-gray-400 border-2 border-dashed border-gray-200">
        Drop clips here to paste instantly ✨
      </div>
    </div>
  </div>
);

const OCRDemo = () => (
  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
    <div className="bg-gray-900 p-4">
      <div className="bg-gray-800 rounded-xl p-3">
        <p className="text-gray-400 text-xs mb-2 font-medium">Screenshot · Just now</p>
        <div className="bg-gray-700 rounded-lg p-3 text-xs text-white font-mono leading-relaxed">
          <p><span className="text-yellow-300">function</span> <span className="text-green-300">calculateRevenue</span>(data) {"{"}</p>
          <p className="pl-3"><span className="text-blue-300">return</span> data.reduce((sum, item) ={">"}</p>
          <p className="pl-6">sum + item.value, 0);</p>
          <p>{"}"}</p>
        </div>
      </div>
    </div>
    <div className="p-4 border-t border-gray-100">
      <p className="text-xs font-semibold text-gray-500 mb-2">Extracted text (OCR)</p>
      <div className="bg-gray-50 rounded-xl p-3 text-xs font-mono text-gray-700">
        function calculateRevenue(data) {"{"}<br/>
        &nbsp;&nbsp;return data.reduce((sum, item) ={">"}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;sum + item.value, 0);<br/>
        {"}"}
      </div>
      <div className="flex items-center gap-2 mt-2">
        <button className="text-xs bg-blue-600 text-white px-3 py-1.5 rounded-lg font-medium">Copy text</button>
        <button className="text-xs text-gray-500 px-3 py-1.5 rounded-lg border border-gray-200">Search</button>
      </div>
    </div>
  </div>
);

const MultiClipDemo = () => (
  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4">
    <p className="text-xs font-semibold text-gray-500 mb-3">Multi-clip selection</p>
    <div className="space-y-2 mb-4">
      {[
        { text: "John Smith — john@example.com", checked: true },
        { text: "First quarter revenue: $2.4M", checked: true },
        { text: "Meeting scheduled for Tuesday", checked: false },
        { text: "API_KEY=sk-proj-abc123xyz", checked: true },
        { text: "Design review at 2pm", checked: false },
      ].map((item, i) => (
        <div key={i} className={`flex items-center gap-2.5 p-2.5 rounded-xl text-xs ${item.checked ? "bg-blue-50 border border-blue-100" : "bg-gray-50 border border-gray-100"}`}>
          <div className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 ${item.checked ? "bg-blue-600" : "border border-gray-300 bg-white"}`}>
            {item.checked && (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
          <span className={item.checked ? "text-gray-800 font-medium" : "text-gray-500"}>{item.text}</span>
        </div>
      ))}
    </div>
    <button className="w-full bg-blue-600 text-white text-xs font-semibold py-2 rounded-xl">
      Paste 3 selected clips
    </button>
  </div>
);

const deepDives = [
  {
    badge: "Library",
    title: "One beautiful place for everything",
    desc: "Your entire clipboard history in a stunning visual interface. Browse by timeline, filter by type, search instantly. Access quick tools for color picking, text capture, and quick notes — all without leaving your flow.",
    component: <ClipboardDemo />,
    quote: {
      text: "I've been using Supaste now for a week and I LOVE It. It's become an essential part of my daily workflow.",
      author: "Evan",
      role: "Lead Designer & Developer",
    },
  },
  {
    badge: "Notch Shelf",
    title: "Reuse anything without switching apps",
    desc: "Drag clips directly onto the macOS notch shelf and drop them into any app. No context switching, no CMD+Tab, no interruptions. Just grab what you need and keep building.",
    component: <NotchDemo />,
    quote: {
      text: "I've been searching for a productivity app that truly saves me time. Supaste is exactly that.",
      author: "Antal Balazs",
      role: "Product Designer",
    },
    reverse: true,
  },
  {
    badge: "OCR",
    title: "Search inside images and screenshots",
    desc: "Supaste reads text inside your screenshots using Apple's Vision framework — completely on-device. Copy code from a screenshot, find a phone number in a photo, or search across all your visual content.",
    component: <OCRDemo />,
  },
  {
    badge: "Multi-Clip",
    title: "Copy once, paste many",
    desc: "Select multiple clips and paste them all at once. Perfect for filling out forms, sending bulk messages, or assembling content from multiple sources without the back-and-forth.",
    component: <MultiClipDemo />,
    reverse: true,
  },
];

export default function FeatureDeepDives() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-32">
        {deepDives.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col ${item.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}
          >
            {/* Text */}
            <div className="flex-1">
              <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 rounded-full px-3 py-1 mb-4">
                {item.badge}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4 leading-snug">
                {item.title}
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">{item.desc}</p>

              {item.quote && (
                <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                  <p className="text-sm text-gray-700 leading-relaxed mb-3 italic">
                    &ldquo;{item.quote.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{item.quote.author}</p>
                      <p className="text-xs text-gray-400">{item.quote.role}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Demo */}
            <div className="flex-1 w-full max-w-md lg:max-w-none">{item.component}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
