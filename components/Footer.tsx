import Link from "next/link";

export default function Footer() {
  const year = 2026;

  return (
    <footer className="bg-[#0d1117] border-t border-indigo-500/10 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-900 text-sm">✦</span>
              </div>
              <span className="text-white">Supaste</span>
            </div>
            <p className="text-sm text-indigo-200/40 leading-relaxed mb-4">
              Your personal library of timeless wisdom. Collect once. Know forever.
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center gap-1.5 text-sm text-amber-400/70 font-semibold hover:text-amber-400 transition-colors"
            >
              Start collecting wisdom →
            </a>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-sm font-bold text-white/60 mb-4">Menu</h4>
            <ul className="space-y-2.5">
              {[
                { href: "#", label: "Home" },
                { href: "#features", label: "Features" },
                { href: "#faq", label: "FAQ" },
                { href: "#pricing", label: "Pricing" },
                { href: "#updates", label: "Updates" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-indigo-300/40 hover:text-indigo-200 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold text-white/60 mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                { href: "mailto:hello@supaste.com", label: "Contact" },
                { href: "#", label: "Roadmap" },
                { href: "#", label: "Privacy Policy" },
                { href: "#", label: "Terms of Service" },
                { href: "#", label: "Customer Portal" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-indigo-300/40 hover:text-indigo-200 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Products */}
          <div>
            <h4 className="text-sm font-bold text-white/60 mb-4">More Products</h4>
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
                    className="text-sm text-indigo-300/40 hover:text-indigo-200 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-indigo-500/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-indigo-300/30">
            © {year} Supaste.com — All rights reserved
          </p>
          <div className="flex items-center gap-2 text-sm text-indigo-300/30">
            Built with{" "}
            <span className="text-amber-400">✦</span>
            {" "}by{" "}
            <a
              href="https://x.com/SoltWagner"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-300/50 hover:text-indigo-200 font-medium transition-colors"
            >
              Solt Wagner
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
