export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-72px)] overflow-hidden md:min-h-[900px]">
      <video
        src="/assets/header_vid.mp4"
        className="absolute inset-0 h-full w-full object-cover object-center"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(122.726deg, rgba(0, 0, 0, 0.36) 1.594%, rgba(0, 0, 0, 0) 80.871%)",
        }}
      />
      <div className="absolute left-[-20%] top-[10%] h-[260px] w-[260px] rounded-full bg-[#05fb90] opacity-20 blur-[90px] md:left-[6%] md:top-[14%] md:h-[500px] md:w-[500px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-14 pt-20 md:px-8 md:pb-20 md:pt-28">
        <div className="max-w-[760px]">
          <h1 className="font-['Viga',sans-serif] text-[2.25rem] leading-[1.08] text-white md:text-[72px] md:leading-[90px]">
            A fintech platform for automated collection of child support and shared expenses
          </h1>

          <p
            className="mt-6 max-w-[690px] font-['Noto_Sans',sans-serif] text-[1.05rem] leading-8 text-white/90 md:mt-8 md:text-[24px] md:leading-[39px]"
            style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}
          >
            Buffx is the financial layer for divorce agreements - automating child support collection, expense
            tracking, and enforcement-ready documentation.
          </p>

          <a
            href="#contact"
            className="mt-10 inline-flex h-[60px] w-full max-w-[304px] items-center justify-center rounded-full font-['Noto_Sans',sans-serif] text-base font-bold text-[#0f172a] shadow-[0px_23.16px_49.1px_0px_rgba(5,251,144,0.3)] transition-all hover:scale-105 hover:shadow-[0px_28px_60px_0px_rgba(5,251,144,0.4)] md:mt-12 md:h-[68px] md:text-[18px]"
            style={{ backgroundImage: "linear-gradient(174.092deg, rgb(5, 251, 144) 43.971%, rgb(185, 254, 224) 81.558%)" }}
          >
            Schedule Pitch Deck
          </a>
        </div>
      </div>
    </section>
  );
}
