import Image from "next/image";

export function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-[#0f172a] py-24 md:py-32">
      <div className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-[#b9fee0] opacity-25 blur-[110px] md:left-20 md:h-96 md:w-96" />
      <div className="absolute bottom-24 right-[-10%] h-72 w-72 rounded-full bg-[#b9fee0] opacity-25 blur-[110px] md:right-20 md:h-96 md:w-96" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 text-center md:mb-20">
          <h2 className="mb-6 font-['Viga',sans-serif] text-4xl text-white md:text-6xl">Why Us?</h2>
          <p className="mx-auto max-w-3xl font-['Noto_Sans',sans-serif] text-lg text-white opacity-60 md:text-xl">
            Domain expertise meets technical execution
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:mb-20 md:gap-8 lg:grid-cols-3">
          {[
            {
              title: "Domain Expertise",
              text: "A decade of experience in Treasury, FP&A, and enterprise cash flow management",
              points: ["Enterprise-scale financial operations", "Financial automation systems", "Compliance & regulatory frameworks"],
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />,
            },
            {
              title: "Founder/Market Fit",
              text: "Deep analytical execution combined with exact target-audience pain point understanding",
              points: ["First-hand market validation", "Product-led growth strategy", "Data-driven decision making"],
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />,
            },
            {
              title: "Technical Excellence",
              text: "Advanced engineering infrastructure built for scale and compliance",
              points: ["AI/ML-powered automation", "Bank-grade security", "Scalable cloud architecture"],
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
            },
          ].map((card, i) => (
            <article key={card.title} className="group relative overflow-hidden rounded-3xl bg-white p-8 md:p-10">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#b9fee0] opacity-0 blur-3xl transition-opacity group-hover:opacity-20" />

              <div className="relative">
                <div
                  className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl"
                  style={{
                    backgroundImage:
                      i === 0
                        ? "linear-gradient(140.906deg, rgb(5, 251, 144) 12.106%, rgb(185, 254, 224) 90.127%)"
                        : i === 1
                          ? "linear-gradient(140.194deg, rgb(5, 251, 144) 12.858%, rgb(185, 254, 224) 85.206%)"
                          : "linear-gradient(144.689deg, rgb(5, 251, 144) 11.684%, rgb(185, 254, 224) 88.681%)",
                  }}
                >
                  <svg className="h-10 w-10 text-[#0f172a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {card.icon}
                  </svg>
                </div>

                <h3 className="mb-4 font-['Noto_Sans',sans-serif] text-2xl font-bold text-[#0f172a]">{card.title}</h3>

                <p className="mb-6 font-['Noto_Sans',sans-serif] text-base leading-relaxed text-[#0f172a] opacity-70">{card.text}</p>

                <div className="space-y-3">
                  {card.points.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#05fb90]" />
                      <span className="font-['Noto_Sans',sans-serif] text-sm text-[#0f172a] opacity-60">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto max-w-4xl">
          <h3 className="mb-8 text-center font-['Noto_Sans',sans-serif] text-2xl font-bold text-white md:text-3xl">Meet the Team</h3>

          <div className="mb-12 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm overflow-hidden rounded-2xl shadow-[0px_20px_60px_0px_rgba(0,0,0,0.3)]">
                <video
                  src="/assets/team_vid.mp4"
                  className="h-auto w-full"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label="Buffx team video"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
                <p className="mb-4 text-center font-['Noto_Sans',sans-serif] text-sm text-white">
                  Michal Sela Forum Accelerator, Cohort 6
                  <br />
                  In partnership with Google for Startups
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <div
                    className="flex items-center gap-2 rounded-lg px-3 py-2 shadow-md"
                    style={{ backgroundImage: "linear-gradient(177.078deg, rgb(5, 251, 144) 7.24%, rgb(185, 254, 224) 92.76%)" }}
                  >
                    <Image
                      src="/assets/new-design/498ad49a85fc2e17c1492c2d526951817680ed52.png"
                      alt="Michal Sela Forum"
                      width={300}
                      height={254}
                      className="h-5 w-auto"
                    />
                    <span className="font-['Arial',sans-serif] text-xs font-bold text-[#0f172a]">פורום מיכל סלה</span>
                  </div>

                  <div className="flex items-center justify-center rounded-lg bg-white px-3 py-2 shadow-md">
                    <Image
                      src="/assets/new-design/7ed9d2c9656a71a86120344164b10d136ddf8e19.png"
                      alt="Google for Startups"
                      width={295}
                      height={86}
                      className="h-3 w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
