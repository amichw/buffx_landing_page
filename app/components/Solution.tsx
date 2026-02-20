export function Solution() {
  return (
    <section id="solution" className="relative bg-[#0f172a] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 text-center md:mb-20">
          <h2 className="mb-5 font-['Viga',sans-serif] text-4xl text-white md:text-6xl">The Solution</h2>
          <p className="mx-auto max-w-3xl font-['Noto_Sans',sans-serif] text-lg text-white opacity-60 md:text-xl">
            Technology-first execution transforming legal agreements into automated financial workflows
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {[
            {
              title: "AI & NLP Parser",
              text: "Converts unstructured legal documents into executable smart contracts with 99.7% accuracy.",
              points: ["OCR + NLP extraction", "Automated compliance mapping", "Real-time indexing updates"],
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              ),
            },
            {
              title: "Automated Billing & Collection",
              text: "Hybrid enforcement model: from soft reminders to legal execution all automated.",
              points: ["Dynamic payment scheduling", "Multi-tier escalation engine", "Direct legal integration"],
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />,
            },
            {
              title: "The Buffer Protocol",
              text: "Total technical separation preventing escalation and interpersonal friction.",
              points: ["Zero direct communication", "Anonymous transaction layer", "Encrypted data isolation"],
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
            },
          ].map((card, i) => (
            <article
              key={card.title}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-[0px_4px_10.7px_0px_rgba(0,0,0,0.25)] transition-all hover:shadow-[0px_8px_20px_0px_rgba(5,251,144,0.2)] md:p-10"
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#b9fee0] opacity-0 blur-3xl transition-opacity group-hover:opacity-20" />
              <div className="relative">
                <div
                  className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl"
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
                    {card.icon}
                  </svg>
                </div>
                <h3 className="mb-4 font-['Noto_Sans',sans-serif] text-2xl font-bold text-[#0f172a]">{card.title}</h3>
                <p className="mb-6 font-['Noto_Sans',sans-serif] text-base leading-relaxed text-[#0f172a] opacity-60">{card.text}</p>
                <ul className="space-y-3">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#05fb90]">
                        <svg className="h-3 w-3 text-[#0f172a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="font-['Noto_Sans',sans-serif] text-sm text-[#0f172a] opacity-70">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
