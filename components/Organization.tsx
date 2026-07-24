"use client";
import { useState } from "react";

const categories = [
  { label: "History", count: 2841, color: "bg-gray-100 text-gray-700" },
  { label: "Colors", count: 89, color: "bg-blue-100 text-blue-700" },
  { label: "Assets", count: 204, color: "bg-purple-100 text-purple-700" },
  { label: "Prompts", count: 67, color: "bg-amber-100 text-amber-700" },
  { label: "Inspirations", count: 143, color: "bg-pink-100 text-pink-700" },
];

const appFilters = ["All", "Safari", "Figma", "Slack", "Xcode", "Mail"];
const typeFilters = ["text", "links", "screenshots", "images", "files", "code", "colors"];

const mockClips = [
  { type: "color", content: "#2563EB", color: "#2563EB", app: "Figma" },
  { type: "color", content: "#7C3AED", color: "#7C3AED", app: "Figma" },
  { type: "color", content: "#10B981", color: "#10B981", app: "Figma" },
  { type: "color", content: "#F59E0B", color: "#F59E0B", app: "Figma" },
  { type: "color", content: "#EF4444", color: "#EF4444", app: "Figma" },
  { type: "color", content: "#EC4899", color: "#EC4899", app: "Figma" },
  { type: "text", content: "Meeting at 3pm — board room", app: "Slack" },
  { type: "code", content: "const [state, setState] = useState(null)", app: "VS Code" },
  { type: "link", content: "dribbble.com/shots/2489…", app: "Safari" },
  { type: "text", content: "Q4 Revenue: $2.4M ↑34%", app: "Notion" },
  { type: "image", content: "screenshot.png", app: "Screenshot" },
  { type: "code", content: "SELECT * FROM users WHERE active = true", app: "TablePlus" },
];

export default function Organization() {
  const [activeApp, setActiveApp] = useState("All");
  const [activeType, setActiveType] = useState("");

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Organization</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Organized your way
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Create custom categories, filter by app or content type, and find anything in seconds.
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
          <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl px-5 py-3 text-sm font-medium text-gray-400 flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            New category
          </div>
        </div>

        {/* Filter bar */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider self-center mr-2">By App:</span>
            {appFilters.map((app) => (
              <button
                key={app}
                onClick={() => setActiveApp(app)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeApp === app
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
              >
                {app}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider self-center mr-2">By Type:</span>
            {typeFilters.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(activeType === type ? "" : type)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeType === type
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of clips */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {mockClips.map((clip, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-3 hover:border-blue-200 hover:shadow-md transition-all cursor-pointer group"
            >
              {clip.type === "color" ? (
                <div className="mb-2">
                  <div
                    className="w-full aspect-square rounded-xl shadow-sm mb-2"
                    style={{ backgroundColor: clip.color }}
                  />
                  <p className="text-xs font-mono text-gray-600 truncate">{clip.content}</p>
                </div>
              ) : clip.type === "image" ? (
                <div className="mb-2">
                  <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 mb-2 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <rect x="2" y="3" width="16" height="12" rx="2" stroke="#A78BFA" strokeWidth="1.5"/>
                      <path d="M2 12l4-4 3 3 4-5 5 6" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-xs text-gray-500 truncate">{clip.content}</p>
                </div>
              ) : (
                <div className="mb-2">
                  <div className="w-full aspect-square rounded-xl bg-gray-50 mb-2 flex items-center justify-center overflow-hidden p-2">
                    <p className="text-xs text-gray-500 font-mono leading-relaxed line-clamp-4 text-center break-all">{clip.content}</p>
                  </div>
                  <p className="text-xs text-gray-400 truncate">{clip.app}</p>
                </div>
              )}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-full text-xs bg-blue-600 text-white rounded-lg py-1 font-medium">
                  Paste
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
