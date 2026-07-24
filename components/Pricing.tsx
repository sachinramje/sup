"use client";

const plans = [
  {
    name: "Single",
    price: 15,
    devices: "1 device",
    desc: "Perfect for personal use on one Mac.",
    popular: false,
  },
  {
    name: "Dual",
    price: 29,
    devices: "2 devices",
    desc: "Use Supaste on your work and personal Mac.",
    popular: true,
  },
  {
    name: "Triple",
    price: 39,
    devices: "3 devices",
    desc: "All your Macs covered with one license.",
    popular: false,
  },
];

const perks = [
  "Lifetime license — no subscription",
  "All future updates included",
  "14-day money-back guarantee",
  "Instant download after purchase",
  "100% offline, privacy-first",
  "Native macOS app",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 border border-amber-100 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
            🥳 Limited early-user offer — 5 spots left
          </div>
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Pay once. Use forever.
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            No subscription, no hidden fees. Buy once, get all features and all future updates.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 flex flex-col ${
                plan.popular
                  ? "bg-blue-600 text-white shadow-[0_20px_60px_rgba(37,99,235,0.35)] scale-105"
                  : "bg-white border border-gray-200 hover:border-gray-300"
              } transition-all duration-200`}
            >
              {plan.popular && (
                <div className="inline-flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1 text-xs font-bold text-white mb-4 self-start">
                  ✦ Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-1 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? "text-blue-200" : "text-gray-500"}`}>
                  {plan.devices}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span className={`text-5xl font-bold tracking-tight ${plan.popular ? "text-white" : "text-gray-900"}`}>
                    ${plan.price}
                  </span>
                  <span className={`text-sm mb-2 ${plan.popular ? "text-blue-200" : "text-gray-400"}`}>
                    one-time
                  </span>
                </div>
                <p className={`text-sm mt-2 ${plan.popular ? "text-blue-100" : "text-gray-500"}`}>
                  {plan.desc}
                </p>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {perks.map((perk, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.popular ? "bg-white/20" : "bg-blue-50"
                    }`}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke={plan.popular ? "white" : "#2563EB"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className={plan.popular ? "text-blue-100" : "text-gray-600"}>{perk}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`w-full text-center py-3.5 rounded-2xl font-bold text-sm transition-all ${
                  plan.popular
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Download for macOS →
              </a>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L4 3.5v3.5c0 3.5 2.3 6.8 4 7.8 1.7-1 4-4.3 4-7.8V3.5L8 1z" stroke="#10B981" strokeWidth="1.2"/>
              <path d="M5.5 8l1.5 1.5L10 6" stroke="#10B981" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            14-day money-back guarantee
          </div>
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2" width="12" height="12" rx="3" stroke="#6B7280" strokeWidth="1.2"/>
              <path d="M5 8l2 2 4-4" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Instant download
          </div>
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1.5L10 6h4.5L11 8.8l1.5 4.7L8 11l-4.5 2.5L5 8.8 1.5 6H6L8 1.5z" stroke="#6B7280" strokeWidth="1.2" strokeLinejoin="round"/>
            </svg>
            macOS Sonoma 14.0+
          </div>
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" stroke="#6B7280" strokeWidth="1.2"/>
              <path d="M8 5v3l2 2" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            Lifetime updates
          </div>
        </div>
      </div>
    </section>
  );
}
