export function Solution() {
  return (
    <section id="solution" className="relative bg-[#0f172a] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-20">
          <h2 className="font-['Viga',sans-serif] text-white text-4xl md:text-6xl mb-6">The Solution</h2>
          <p className="font-['Noto_Sans',sans-serif] text-white opacity-60 text-xl max-w-3xl mx-auto">
            Technology-first execution transforming legal agreements into automated financial workflows
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0px_4px_10.7px_0px_rgba(0,0,0,0.25)] relative overflow-hidden group hover:shadow-[0px_8px_20px_0px_rgba(5,251,144,0.2)] transition-all">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#b9fee0] opacity-0 group-hover:opacity-20 blur-3xl rounded-full transition-opacity" />
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center" style={{ backgroundImage: "linear-gradient(140.906deg, rgb(5, 251, 144) 8.629%, rgb(185, 254, 224) 93.809%)" }}>
                <svg className="w-8 h-8 text-[#0f172a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-['Noto_Sans',sans-serif] font-bold text-[#0f172a] text-2xl mb-4">AI & NLP Parser</h3>
              <p className="font-['Noto_Sans',sans-serif] text-[#0f172a] opacity-60 text-base leading-relaxed mb-6">
                Converts unstructured legal documents into automated payment rules
              </p>
              <ul className="space-y-3">
                {[
                  "OCR + NLP extraction",
                  "Automated compliance mapping",
                  "Real-time indexing updates",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#05fb90] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[#0f172a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-['Noto_Sans',sans-serif] text-[#0f172a] opacity-70 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0px_4px_10.7px_0px_rgba(0,0,0,0.25)] relative overflow-hidden group hover:shadow-[0px_8px_20px_0px_rgba(5,251,144,0.2)] transition-all">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#b9fee0] opacity-0 group-hover:opacity-20 blur-3xl rounded-full transition-opacity" />
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center" style={{ backgroundImage: "linear-gradient(140.194deg, rgb(5, 251, 144) 9.8138%, rgb(185, 254, 224) 88.091%)" }}>
                <svg className="w-8 h-8 text-[#0f172a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-['Noto_Sans',sans-serif] font-bold text-[#0f172a] text-2xl mb-4">Automated Billing & Collection</h3>
              <p className="font-['Noto_Sans',sans-serif] text-[#0f172a] opacity-60 text-base leading-relaxed mb-6">
                Hybrid enforcement model: from soft reminders to legal execution-all automated.
              </p>
              <ul className="space-y-3">
                {[
                  "Dynamic payment scheduling",
                  "Multi-tier escalation engine",
                  "Direct legal integration",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#05fb90] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[#0f172a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-['Noto_Sans',sans-serif] text-[#0f172a] opacity-70 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0px_4px_10.7px_0px_rgba(0,0,0,0.25)] relative overflow-hidden group hover:shadow-[0px_8px_20px_0px_rgba(5,251,144,0.2)] transition-all">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#b9fee0] opacity-0 group-hover:opacity-20 blur-3xl rounded-full transition-opacity" />
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center" style={{ backgroundImage: "linear-gradient(144.689deg, rgb(5, 251, 144) 6.4132%, rgb(185, 254, 224) 94.003%)" }}>
                <svg className="w-8 h-8 text-[#0f172a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-['Noto_Sans',sans-serif] font-bold text-[#0f172a] text-2xl mb-4">The Buffer Protocol</h3>
              <p className="font-['Noto_Sans',sans-serif] text-[#0f172a] opacity-60 text-base leading-relaxed mb-6">
                Total technical separation preventing escalation and interpersonal friction.
              </p>
              <ul className="space-y-3">
                {[
                  "Zero direct communication",
                  "Anonymous transaction layer",
                  "Encrypted data isolation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#05fb90] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[#0f172a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-['Noto_Sans',sans-serif] text-[#0f172a] opacity-70 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div id="revenue" className="mt-20 bg-[#f0f0fa] rounded-3xl p-8 md:p-12">
          <h3 className="font-['Noto_Sans',sans-serif] font-bold text-[#0f172a] text-2xl mb-8 text-center">Revenue Model</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center" style={{ backgroundImage: "linear-gradient(140.906deg, rgb(5, 251, 144) 12.106%, rgb(185, 254, 224) 90.127%)" }}>
                <svg className="w-8 h-8 text-[#0f172a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h4 className="font-['Noto_Sans',sans-serif] font-bold text-[#0f172a] text-lg mb-4">SaaS Subscription</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2 justify-center"><div className="w-2 h-2 rounded-full bg-[#05fb90] mt-1.5 flex-shrink-0" /><span className="font-['Noto_Sans',sans-serif] text-[#0f172a] opacity-60 text-sm">$14.90-19.90/mo tiered access</span></div>
                <div className="flex items-start gap-2 justify-center"><div className="w-2 h-2 rounded-full bg-[#05fb90] mt-1.5 flex-shrink-0" /><span className="font-['Noto_Sans',sans-serif] text-[#0f172a] opacity-60 text-sm">Tracking, automation & documentation</span></div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center" style={{ backgroundImage: "linear-gradient(140.194deg, rgb(5, 251, 144) 12.858%, rgb(185, 254, 224) 85.206%)" }}>
                <svg className="w-8 h-8 text-[#0f172a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-['Noto_Sans',sans-serif] font-bold text-[#0f172a] text-lg mb-4">Transaction Fee</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2 justify-center"><div className="w-2 h-2 rounded-full bg-[#05fb90] mt-1.5 flex-shrink-0" /><span className="font-['Noto_Sans',sans-serif] text-[#0f172a] opacity-60 text-sm">10-15% of recovered funds</span></div>
                <div className="flex items-start gap-2 justify-center"><div className="w-2 h-2 rounded-full bg-[#05fb90] mt-1.5 flex-shrink-0" /><span className="font-['Noto_Sans',sans-serif] text-[#0f172a] opacity-60 text-sm">No cure, no pay</span></div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center" style={{ backgroundImage: "linear-gradient(144.689deg, rgb(5, 251, 144) 11.684%, rgb(185, 254, 224) 88.681%)" }}>
                <svg className="w-8 h-8 text-[#0f172a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="font-['Noto_Sans',sans-serif] font-bold text-[#0f172a] text-lg mb-4">Distribution Channels</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2 justify-center"><div className="w-2 h-2 rounded-full bg-[#05fb90] mt-1.5 flex-shrink-0" /><span className="font-['Noto_Sans',sans-serif] text-[#0f172a] opacity-60 text-sm">B2C Direct + B2B2C Law Firms</span></div>
                <div className="flex items-start gap-2 justify-center"><div className="w-2 h-2 rounded-full bg-[#05fb90] mt-1.5 flex-shrink-0" /><span className="font-['Noto_Sans',sans-serif] text-[#0f172a] opacity-60 text-sm">App for mothers + White-label for attorneys</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
