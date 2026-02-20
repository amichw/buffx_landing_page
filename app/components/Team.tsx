export function Team() {
  return (
    <section id="team" className="relative bg-[#0f172a] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 text-center md:mb-20">
          <h2 className="mb-5 font-['Viga',sans-serif] text-4xl text-white md:text-6xl">Why Us?</h2>
          <p className="mx-auto max-w-3xl font-['Noto_Sans',sans-serif] text-lg text-white opacity-60 md:text-xl">
            Domain expertise meets technical execution
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:mb-20 md:gap-8 lg:grid-cols-3">
          {[
            {
              title: "Domain Expertise",
              text: "A decade of experience in Treasury, FP&A, and enterprise cash flow management",
              points: [
                "Fortune 500 treasury operations",
                "Financial automation systems",
                "Compliance & regulatory frameworks",
              ],
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
            },
            {
              title: "Founder/Market Fit",
              text: "Deep analytical execution combined with exact target-audience pain point understanding",
              points: ["First-hand market validation", "Product-led growth strategy", "Data-driven decision making"],
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
            },
            {
              title: "Tech Execution",
              text: "Led by an experienced Lead AI Engineer and top-tier UX/UI team building scalable infrastructure",
              points: ["AI/ML core competency", "Enterprise-grade architecture", "Security-first development"],
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
            },
          ].map((card, i) => (
            <article key={card.title} className="group relative overflow-hidden rounded-3xl bg-white p-8 md:p-10">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#b9fee0] opacity-0 blur-3xl transition-opacity group-hover:opacity-30" />
              <div className="relative">
                <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-2xl" style={{
                  backgroundImage:
                    i === 0
                      ? "linear-gradient(140.906deg, rgb(5, 251, 144) 8.629%, rgb(185, 254, 224) 93.809%)"
                      : i === 1
                        ? "linear-gradient(140.194deg, rgb(5, 251, 144) 9.8138%, rgb(185, 254, 224) 88.091%)"
                        : "linear-gradient(144.689deg, rgb(5, 251, 144) 6.4132%, rgb(185, 254, 224) 94.003%)",
                }}>
                  <svg className="h-10 w-10 text-[#0f172a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {card.icon}
                  </svg>
                </div>
                <h3 className="mb-4 font-['Noto_Sans',sans-serif] text-2xl font-bold text-[#0f172a]">{card.title}</h3>
                <p className="mb-6 font-['Noto_Sans',sans-serif] text-base leading-relaxed text-[#0f172a] opacity-70">{card.text}</p>
                <div className="space-y-3">
                  {card.points.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#05fb90]" />
                      <span className="font-['Noto_Sans',sans-serif] text-sm text-[#0f172a] opacity-60">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-[#05fb90] to-[#b9fee0] p-8 md:p-12">
          <h3 className="mb-10 text-center font-['Noto_Sans',sans-serif] text-3xl font-bold text-[#0f172a]">Current Traction</h3>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {[
              ["Beta", "Platform Status"],
              ["200+", "Waitlist Users"],
              ["3", "Legal Partnerships"],
              ["99.7%", "Parser Accuracy"],
            ].map(([value, label]) => (
              <article key={label} className="text-center">
                <div className="mb-2 font-['Viga',sans-serif] text-4xl text-[#0f172a] md:mb-3 md:text-5xl">{value}</div>
                <p className="font-['Noto_Sans',sans-serif] text-xs text-[#0f172a] opacity-70 md:text-sm">{label}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
