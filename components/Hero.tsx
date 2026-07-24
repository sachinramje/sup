"use client";
import React, { useEffect, useState } from "react";

const clipItems = [
  { type: "text", content: "Meeting at 3pm tomorrow — conference room B", app: "Slack", time: "2m ago", color: "bg-purple-50 border-purple-100" },
  { type: "color", content: "#2563EB", hex: "#2563EB", app: "Figma", time: "5m ago", color: "bg-blue-50 border-blue-100" },
  { type: "code", content: "const [state, setState] = useState(null)", app: "VS Code", time: "8m ago", color: "bg-gray-50 border-gray-100" },
  { type: "link", content: "https://dribbble.com/shots/24892...", app: "Safari", time: "12m ago", color: "bg-green-50 border-green-100" },
  { type: "text", content: "Q4 Revenue: $2.4M — up 34% YoY 🚀", app: "Notion", time: "18m ago", color: "bg-yellow-50 border-yellow-100" },
  { type: "image", content: "Screenshot 2024-01-15.png", app: "Screenshot", time: "25m ago", color: "bg-rose-50 border-rose-100" },
];

const typeIcons: Record<string, React.ReactElement> = {
  text: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M1 2h10M1 5h7M1 8h9" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  color: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <circle cx="6" cy="6" r="5" stroke="#6B7280" strokeWidth="1.2"/>
    </svg>
  ),
  code: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M4 3L1 6l3 3M8 3l3 3-3 3" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  link: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M5 7l2-2m0 0l2-2M7 5L5 7m4-4l1-1a2.121 2.121 0 013 3l-1 1M2 10l1-1m0 0a2.121 2.121 0 010-3" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  image: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <rect x="1" y="2" width="10" height="8" rx="1" stroke="#6B7280" strokeWidth="1.2"/>
      <circle cx="4" cy="5" r="1" stroke="#6B7280" strokeWidth="1"/>
      <path d="M1 8.5l3-3 2 2 2-2 3 2" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

export default function Hero() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible((v) => Math.min(v + 1, clipItems.length));
    }, 300);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-100 rounded-full px-4 py-1.5 text-sm font-medium">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1l1.5 3.5L12 5l-2.5 2.5.6 3.5L7 9.5 3.9 11l.6-3.5L2 5l3.5-.5L7 1z" fill="#2563EB" stroke="#2563EB" strokeWidth="0.5" strokeLinejoin="round"/>
            </svg>
            #4 Product of the Day on Product Hunt
          </div>
        </div>

        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.05] mb-6">
            Copy once.{" "}
            <span className="text-blue-600">Reuse anytime.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Supaste saves your clipboard and screenshots in a beautiful visual history,
            automatically grouped by type, app, and custom categories, so you can search,
            find, and paste anything back in seconds.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3.5 rounded-2xl hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-200 text-base"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2L9 12M9 12L5 8M9 12L13 8" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 15H16" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
            Download for macOS
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 text-gray-600 font-medium px-6 py-3.5 rounded-2xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all text-base"
          >
            See features
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7H11M11 7L7 3M11 7L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <p className="text-center text-sm text-gray-400 mb-16">
          One-time purchase · Fully offline · macOS Sonoma 14.0+
        </p>

        {/* App Mockup */}
        <div className="max-w-3xl mx-auto">
          {/* macOS window */}
          <div className="rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.15)] border border-gray-200 bg-white">
            {/* Title bar */}
            <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-white border border-gray-200 rounded-lg px-4 py-1.5 text-xs text-gray-500 flex items-center gap-2 min-w-48">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="5" cy="5" r="3.5" stroke="#9CA3AF" strokeWidth="1.2"/>
                    <path d="M8 8L10.5 10.5" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  Search clips...
                  <span className="ml-auto text-gray-300 text-xs">⌘K</span>
                </div>
              </div>
              <div className="w-16" />
            </div>

            {/* Content area */}
            <div className="flex">
              {/* Sidebar */}
              <div className="w-48 border-r border-gray-100 bg-gray-50 p-3 hidden sm:block">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">Categories</p>
                {[
                  { label: "All clips", count: 2841, active: true },
                  { label: "Screenshots", count: 124 },
                  { label: "Colors", count: 89 },
                  { label: "Code", count: 432 },
                  { label: "Links", count: 671 },
                  { label: "Images", count: 204 },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center justify-between px-2 py-1.5 rounded-lg mb-0.5 cursor-pointer text-xs ${
                      item.active
                        ? "bg-blue-600 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <span className="font-medium">{item.label}</span>
                    <span className={`text-xs ${item.active ? "text-blue-100" : "text-gray-400"}`}>
                      {item.count}
                    </span>
                  </div>
                ))}

                <div className="mt-4 border-t border-gray-200 pt-3">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-2">Apps</p>
                  {["Figma", "Slack", "VS Code", "Safari"].map((app) => (
                    <div key={app} className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs text-gray-600 hover:bg-gray-100 cursor-pointer">
                      <div className="w-4 h-4 rounded-sm bg-gray-200" />
                      {app}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main panel */}
              <div className="flex-1 p-4 bg-white min-h-80">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">All clips</h3>
                    <p className="text-xs text-gray-400">2,841 items</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-lg">Grid</button>
                    <button className="text-xs text-gray-400 px-2 py-1 rounded-lg">List</button>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  {clipItems.slice(0, visible).map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 ${item.color}`}
                      style={{ animation: `fadeSlideIn 0.3s ease forwards` }}
                    >
                      <div className="flex-shrink-0 w-7 h-7 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        {item.type === "color" ? (
                          <div className="w-4 h-4 rounded-full shadow-inner" style={{ backgroundColor: item.hex }} />
                        ) : (
                          typeIcons[item.type]
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-gray-700 truncate">{item.content}</p>
                        <p className="text-xs text-gray-400">{item.app}</p>
                      </div>
                      <span className="text-xs text-gray-300 flex-shrink-0">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
