"use client";

const plans = [
  {
    name: "Scholar",
    price: 15,
    desc: "Perfect for solo learners and daily readers.",
    popular: false,
  },
  {
    name: "Sage",
    price: 29,
    desc: "For the serious knowledge collector — your primary and travel Mac.",
    popular: true,
  },
  {
    name: "Luminary",
    price: 39,
    desc: "All your devices, one unlimited wisdom library.",
    popular: false,
  },
];

const perks = [
  "Lifetime license — no subscription",
  "All future updates included",
  "14-day money-back guarantee",
  "Unlimited wisdom entries",
  "100% offline, fully private",
  "Native macOS app",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-[#060818]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-950/60 text-amber-400 border border-amber-500/20 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
            ✦ Limited early-collector offer — 12 spots left
          </div>
          <p className="text-sm font-semibold text-amber-400/80 uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-white">Pay once.</span>{" "}
            <span className="bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text text-transparent">Know forever.</span>
          </h2>
          <p className="text-lg text-indigo-200/50 max-w-xl mx-auto">
            No subscription, no hidden fees. Buy once, unlock your entire wisdom library — and all future updates.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 flex flex-col transition-all duration-200 ${
                plan.popular
                  ? "bg-gradient-to-br from-indigo-600 to-violet-600 shadow-[0_20px_60px_rgba(99,102,241,0.35)] scale-105"
                  : "bg-[#0d1117] border border-indigo-500/20 hover:border-indigo-400/30"
              }`}
            >
              {plan.popular && (
                <div className="inline-flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1 text-xs font-bold text-white mb-4 self-start">
                  ✦ Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-1 text-white">{plan.name}</h3>
              </div>

              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-bold tracking-tight text-white">${plan.price}</span>
                  <span className={`text-sm mb-2 ${plan.popular ? "text-indigo-200" : "text-indigo-400/50"}`}>
                    one-time
                  </span>
                </div>
                <p className={`text-sm mt-2 ${plan.popular ? "text-indigo-100" : "text-indigo-300/50"}`}>
                  {plan.desc}
                </p>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {perks.map((perk, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.popular ? "bg-white/20" : "bg-amber-400/10"
                    }`}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke={plan.popular ? "white" : "#FBBF24"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className={plan.popular ? "text-indigo-100" : "text-indigo-200/60"}>{perk}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`w-full text-center py-3.5 rounded-2xl font-bold text-sm transition-all ${
                  plan.popular
                    ? "bg-white text-indigo-700 hover:bg-indigo-50"
                    : "bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-900 hover:opacity-90"
                }`}
              >
                Start collecting wisdom →
              </a>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-indigo-300/40">
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L4 3.5v3.5c0 3.5 2.3 6.8 4 7.8 1.7-1 4-4.3 4-7.8V3.5L8 1z" stroke="#34D399" strokeWidth="1.2"/>
              <path d="M5.5 8l1.5 1.5L10 6" stroke="#34D399" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-emerald-400/70">14-day money-back guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Instant download
          </div>
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1.5L10 6h4.5L11 8.8l1.5 4.7L8 11l-4.5 2.5L5 8.8 1.5 6H6L8 1.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
            </svg>
            macOS Sonoma 14.0+
          </div>
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            Lifetime updates
          </div>
        </div>
      </div>
    </section>
  );
}
