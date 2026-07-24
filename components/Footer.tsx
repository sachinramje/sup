import Link from "next/link";

export default function Footer() {
  const year = 2026;

  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="3" width="12" height="2" rx="1" fill="white" />
                  <rect x="2" y="7" width="8" height="2" rx="1" fill="white" />
                  <rect x="2" y="11" width="10" height="2" rx="1" fill="white" />
                </svg>
              </div>
              <span className="text-gray-900">Supaste</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              The beautiful clipboard manager for macOS. Copy once, reuse anytime.
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center gap-1.5 text-sm text-blue-600 font-semibold hover:text-blue-700"
            >
              Download for macOS →
            </a>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4">Menu</h4>
            <ul className="space-y-2.5">
              {[
                { href: "#", label: "Home" },
                { href: "#features", label: "Features" },
                { href: "#faq", label: "FAQ" },
                { href: "#pricing", label: "Pricing" },
                { href: "#updates", label: "Updates" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                { href: "mailto:hello@supaste.com", label: "Contact" },
                { href: "#", label: "Roadmap" },
                { href: "#", label: "Privacy Policy" },
                { href: "#", label: "Terms of Service" },
                { href: "#", label: "Customer Portal" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Products */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4">More Products</h4>
            <ul className="space-y-2.5">
              {[
                { href: "https://dock.cool", label: "Cooldock" },
                { href: "#", label: "Macapp.Supply" },
                { href: "#", label: "Runey.app" },
                { href: "#", label: "Revone.app" },
                { href: "#", label: "Icoon.co" },
                { href: "#", label: "Supaframe.io" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {year} Supaste.com — All rights reserved
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            Built with{" "}
            <span className="text-blue-500">💙</span>
            {" "}by{" "}
            <a
              href="https://x.com/SoltWagner"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Solt Wagner
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
