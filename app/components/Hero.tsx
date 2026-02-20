export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-[88px]">
      <div className="absolute left-[72%] top-[8%] h-[380px] w-[380px] rounded-full bg-[#b9fee0] opacity-25 blur-[110px] md:h-[600px] md:w-[600px]" />
      <div className="absolute left-[-20%] top-[18%] h-[320px] w-[320px] rounded-full bg-[#05fb90] opacity-20 blur-[95px] md:left-[5%] md:h-[500px] md:w-[500px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-20 text-center md:px-8 md:py-32">
        <div className="mb-8 inline-block">
          <div className="rounded-full bg-[#0f172a] px-6 py-2.5 md:px-8 md:py-3">
            <p className="font-['Noto_Sans',sans-serif] text-xs font-medium text-[#05fb90] md:text-sm">
              FinTech x LegalTech Platform
            </p>
          </div>
        </div>

        <h1 className="mb-6 tracking-tight">
          <span className="block font-['Viga',sans-serif] text-[2.45rem] leading-[1.08] text-[#0f172a] md:text-7xl md:leading-tight">
            Buffx: Transforming
          </span>
          <span
            className="block bg-clip-text font-['Viga',sans-serif] text-[2.45rem] leading-[1.08] md:text-7xl md:leading-tight"
            style={{
              backgroundImage:
                "linear-gradient(269.839deg, rgb(5, 251, 144) 44.27%, rgb(185, 254, 224) 118.24%)",
              WebkitTextFillColor: "transparent",
            }}
          >
            Legal Rulings into
          </span>
          <span className="block font-['Viga',sans-serif] text-[2.45rem] leading-[1.08] text-[#0f172a] md:text-7xl md:leading-tight">
            Executable Financial Workflows
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-4xl font-['Noto_Sans',sans-serif] text-[1.125rem] leading-8 text-[#0f172a] opacity-70 md:mb-12 md:text-2xl md:leading-relaxed">
          A FinTech platform converting divorce agreements into smart contracts, fully automating the collection of
          mandatory debts and variable expenses.
        </p>

        <a
          href="#contact"
          className="inline-block rounded-full px-10 py-4 font-['Noto_Sans',sans-serif] text-base font-bold text-[#0f172a] shadow-[0px_23.16px_49.1px_0px_rgba(5,251,144,0.3)] transition-all hover:scale-105 hover:shadow-[0px_28px_60px_0px_rgba(5,251,144,0.4)] md:px-12 md:py-5 md:text-lg"
          style={{
            backgroundImage: "linear-gradient(120.485deg, rgb(5, 251, 144) 41.43%, rgb(185, 254, 224) 94.857%)",
          }}
        >
          Join Waitlist
        </a>

        <div className="mt-10 flex items-center justify-center gap-3 opacity-60 md:mt-12">
          <svg className="h-5 w-5 text-[#0f172a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <p className="font-['Noto_Sans',sans-serif] text-center text-xs text-[#0f172a] md:text-sm">
            Enterprise-Grade Security | Regulatory Compliant | SOC 2 Type II
          </p>
        </div>
      </div>
    </section>
  );
}
