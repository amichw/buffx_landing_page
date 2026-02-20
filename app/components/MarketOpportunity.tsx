export function MarketOpportunity() {
  return (
    <section id="market" className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 text-center md:mb-20">
          <h2 className="mb-5 font-['Viga',sans-serif] text-4xl text-[#0f172a] md:text-6xl">Market Opportunity</h2>
          <p className="mx-auto max-w-3xl font-['Noto_Sans',sans-serif] text-lg text-[#0f172a] opacity-60 md:text-xl">
            Massive addressable market with immediate revenue opportunity
          </p>
        </div>

        <div className="mx-auto mb-12 grid max-w-5xl grid-cols-1 gap-6 md:mb-16 md:grid-cols-2 md:gap-8">
          <article className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f172a] to-[#1a2642] p-8 md:p-12">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#05fb90] opacity-10 blur-3xl" />
            <div className="relative">
              <p className="mb-4 font-['Noto_Sans',sans-serif] text-sm font-bold uppercase tracking-wider text-[#05fb90]">
                Total Addressable Market
              </p>
              <div className="mb-6">
                <span
                  className="block bg-clip-text font-['Viga',sans-serif] text-6xl md:text-7xl"
                  style={{
                    backgroundImage:
                      "linear-gradient(235.637deg, rgb(5, 251, 144) 38.222%, rgb(185, 254, 224) 108.94%)",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  $115B
                </span>
              </div>
              <p className="mb-6 font-['Noto_Sans',sans-serif] text-base leading-relaxed text-white opacity-70">
                Total divorce-related financial transactions in the US market
              </p>
              <div className="space-y-3 border-t border-white/10 pt-4">
                {[
                  "750,000+ annual divorces in US",
                  "Average settlement: $150K+",
                  "Multi-year payment cycles",
                ].map((line) => (
                  <div key={line} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#05fb90]" />
                    <span className="font-['Noto_Sans',sans-serif] text-sm text-white opacity-60">{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-3xl border-2 border-[#05fb90] bg-white p-8 shadow-[0px_20px_60px_0px_rgba(5,251,144,0.15)] md:p-12">
            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[#b9fee0] opacity-20 blur-3xl" />
            <div className="relative">
              <p className="mb-4 font-['Noto_Sans',sans-serif] text-sm font-bold uppercase tracking-wider text-[#05fb90]">
                Immediate Opportunity
              </p>
              <div className="mb-6">
                <span className="block font-['Viga',sans-serif] text-6xl text-[#0f172a] md:text-7xl">$15B</span>
              </div>
              <p className="mb-6 font-['Noto_Sans',sans-serif] text-base leading-relaxed text-[#0f172a] opacity-70">
                Uncollected funds ready for automated recovery
              </p>
              <div className="space-y-3 border-t border-[#0f172a]/10 pt-4">
                {[
                  "10-15% collection failure rate",
                  "High-intent user acquisition",
                  "Recurring revenue model",
                ].map((line) => (
                  <div key={line} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0f172a]" />
                    <span className="font-['Noto_Sans',sans-serif] text-sm text-[#0f172a] opacity-60">{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>

        <div className="mx-auto max-w-5xl rounded-3xl bg-[#f0f0fa] p-8 md:p-12">
          <h3 className="mb-8 text-center font-['Noto_Sans',sans-serif] text-2xl font-bold text-[#0f172a]">Revenue Model</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Transaction Fee",
                text: "2.5-3.5% per successful payment",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />,
              },
              {
                title: "SaaS Subscription",
                text: "$49-199/mo tiered access",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />,
              },
              {
                title: "B2B2C + B2C Enterprise",
                text: "White-label for law firms",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
              },
            ].map((item, i) => (
              <article key={item.title} className="text-center">
                <span
                  className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl"
                  style={{
                    backgroundImage:
                      i === 0
                        ? "linear-gradient(140.906deg, rgb(5, 251, 144) 8.629%, rgb(185, 254, 224) 93.809%)"
                        : i === 1
                          ? "linear-gradient(140.194deg, rgb(5, 251, 144) 9.8138%, rgb(185, 254, 224) 88.091%)"
                          : "linear-gradient(144.689deg, rgb(5, 251, 144) 6.4132%, rgb(185, 254, 224) 94.003%)",
                  }}
                >
                  <svg className="h-8 w-8 text-[#0f172a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {item.icon}
                  </svg>
                </span>
                <p className="mb-2 font-['Noto_Sans',sans-serif] text-lg font-bold text-[#0f172a]">{item.title}</p>
                <p className="font-['Noto_Sans',sans-serif] text-sm text-[#0f172a] opacity-60">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
