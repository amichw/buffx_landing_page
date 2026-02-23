import { Clock, FileText, DollarSign } from "lucide-react";

export function Problem() {
  return (
    <section id="problem" className="relative bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-['Viga',sans-serif] text-[#0f172a] text-4xl md:text-6xl mb-6">
            The Market Failure
          </h2>
          <p className="font-['Noto_Sans',sans-serif] text-[#0f172a] opacity-60 text-lg md:text-xl max-w-3xl mx-auto">
            A systemic breakdown fueled by bureaucracy and technical friction
          </p>
        </div>

        {/* Main Stat Card */}
        <div className="relative mb-20 max-w-7xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-b from-[#b9fee0] to-[#05fb90] opacity-10 blur-[64px] rounded-3xl" />
          <div className="relative bg-white border-2 border-[#05fb90] rounded-3xl shadow-[0px_20px_60px_0px_rgba(5,251,144,0.2)] p-12 md:p-16">
            <div className="text-center">
              <h3 
                className="font-['Viga',sans-serif] text-[72px] leading-[72px] md:text-[128px] md:leading-[128px] bg-clip-text mb-4"
                style={{
                  backgroundImage: "linear-gradient(212.486deg, rgb(5, 251, 144) 39.735%, rgb(185, 254, 224) 101.37%)",
                  WebkitTextFillColor: "transparent"
                }}
              >
                $45B
              </h3>
              <h4 className="font-['Noto_Sans',sans-serif] font-bold text-[#0f172a] text-2xl md:text-3xl mb-4">
                lost annually at the bottom of this funnel
              </h4>
              <p className="font-['Noto_Sans',sans-serif] text-[#0f172a] opacity-70 text-base md:text-lg max-w-2xl mx-auto">
                Annual capital loss caused by manual tracking, communication breakdown, and enforcement delays
              </p>
            </div>
          </div>
        </div>

        {/* Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Card 1 - Bureaucratic Friction */}
          <div className="bg-[#0f172a] rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-32 bg-[#05fb90] opacity-10 blur-[40px] rounded-full" />
            <div className="relative">
              <div className="w-14 h-14 bg-[rgba(0,255,157,0.1)] rounded-xl flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#05fb90" />
                      <stop offset="100%" stopColor="#b9fee0" />
                    </linearGradient>
                  </defs>
                  <Clock className="w-full h-full" stroke="url(#gradient1)" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="font-['Noto_Sans',sans-serif] font-bold text-white text-xl mb-4">
                Bureaucratic Friction
              </h3>
              <p className="font-['Noto_Sans',sans-serif] text-white opacity-70 text-base leading-relaxed">
                Manual enforcement requires court intervention, creating 6-18 month delays and allowing systematic non-compliance.
              </p>
            </div>
          </div>

          {/* Card 2 - Technical Breakdown */}
          <div className="bg-[#0f172a] rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-32 bg-[#05fb90] opacity-10 blur-[40px] rounded-full" />
            <div className="relative">
              <div className="w-14 h-14 bg-[rgba(0,255,157,0.1)] rounded-xl flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <defs>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#05fb90" />
                      <stop offset="100%" stopColor="#b9fee0" />
                    </linearGradient>
                  </defs>
                  <FileText className="w-full h-full" stroke="url(#gradient2)" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="font-['Noto_Sans',sans-serif] font-bold text-white text-xl mb-4">
                Technical Breakdown
              </h3>
              <p className="font-['Noto_Sans',sans-serif] text-white opacity-70 text-base leading-relaxed">
                Court rulings remain unstructured PDFs. No API, no automation, no compliance tracking—just analog processes in a digital economy.
              </p>
            </div>
          </div>

          {/* Card 3 - Economic Violence */}
          <div className="bg-[#0f172a] rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-32 bg-[#05fb90] opacity-10 blur-[40px] rounded-full" />
            <div className="relative">
              <div className="w-14 h-14 bg-[rgba(0,255,157,0.1)] rounded-xl flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <defs>
                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#05fb90" />
                      <stop offset="100%" stopColor="#b9fee0" />
                    </linearGradient>
                  </defs>
                  <DollarSign className="w-full h-full" stroke="url(#gradient3)" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="font-['Noto_Sans',sans-serif] font-bold text-white text-xl mb-4">
                Economic Violence
              </h3>
              <p className="font-['Noto_Sans',sans-serif] text-white opacity-70 text-base leading-relaxed">
                System inefficiency becomes individual suffering. Families lose financial stability while billions remain uncollected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

