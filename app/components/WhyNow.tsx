import { TrendingUp, Scale, Building2, Bot } from "lucide-react";

export function WhyNow() {
  return (
    <section id="why-now" className="relative bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-['Viga',sans-serif] text-[#0f172a] text-4xl md:text-6xl mb-6">
            Why Now?
          </h2>
          <p className="font-['Noto_Sans',sans-serif] text-[#0f172a] opacity-60 text-lg md:text-xl max-w-3xl mx-auto">
            Perfect market timing meets technological breakthrough
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 - Divorce Rate */}
          <div className="bg-[#0f172a] rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#05fb90] opacity-10 blur-2xl rounded-full" />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-[rgba(0,255,157,0.1)]">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <defs>
                    <linearGradient id="gradient-divorce" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#05fb90" />
                      <stop offset="100%" stopColor="#b9fee0" />
                    </linearGradient>
                  </defs>
                  <TrendingUp className="w-full h-full" stroke="url(#gradient-divorce)" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="font-['Noto_Sans',sans-serif] font-bold text-white text-xl mb-4">
                50% divorce rate
              </h3>
              <p className="font-['Noto_Sans',sans-serif] text-white opacity-70 text-base leading-relaxed">
                Massive, growing market
              </p>
            </div>
          </div>

          {/* Card 2 - Receipt Economy */}
          <div className="bg-[#0f172a] rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#05fb90] opacity-10 blur-2xl rounded-full" />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-[rgba(0,255,157,0.1)]">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <defs>
                    <linearGradient id="gradient-receipt" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#05fb90" />
                      <stop offset="100%" stopColor="#b9fee0" />
                    </linearGradient>
                  </defs>
                  <Scale className="w-full h-full" stroke="url(#gradient-receipt)" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="font-['Noto_Sans',sans-serif] font-bold text-white text-xl mb-4">
                The "Receipt Economy"
              </h3>
              <p className="font-['Noto_Sans',sans-serif] text-white opacity-70 text-base leading-relaxed">
                Shared custody = endless variable expenses
              </p>
            </div>
          </div>

          {/* Card 3 - Broken Enforcement */}
          <div className="bg-[#0f172a] rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#05fb90] opacity-10 blur-2xl rounded-full" />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-[rgba(0,255,157,0.1)]">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <defs>
                    <linearGradient id="gradient-enforcement" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#05fb90" />
                      <stop offset="100%" stopColor="#b9fee0" />
                    </linearGradient>
                  </defs>
                  <Building2 className="w-full h-full" stroke="url(#gradient-enforcement)" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="font-['Noto_Sans',sans-serif] font-bold text-white text-xl mb-4">
                Broken enforcement
              </h3>
              <p className="font-['Noto_Sans',sans-serif] text-white opacity-70 text-base leading-relaxed">
                $15B in expenses abandoned annually
              </p>
            </div>
          </div>

          {/* Card 4 - AI Unlock */}
          <div className="bg-[#0f172a] rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#05fb90] opacity-10 blur-2xl rounded-full" />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-[rgba(0,255,157,0.1)]">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <defs>
                    <linearGradient id="gradient-ai" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#05fb90" />
                      <stop offset="100%" stopColor="#b9fee0" />
                    </linearGradient>
                  </defs>
                  <Bot className="w-full h-full" stroke="url(#gradient-ai)" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="font-['Noto_Sans',sans-serif] font-bold text-white text-xl mb-4">
                AI unlock
              </h3>
              <p className="font-['Noto_Sans',sans-serif] text-white opacity-70 text-base leading-relaxed">
                Automation finally possible
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

