export function MarketOpportunity() {
  return (
    <section id="market" className="relative bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-['Viga',sans-serif] text-[#0f172a] text-4xl md:text-6xl mb-6">
            Market Opportunity
          </h2>
          <p className="font-['Noto_Sans',sans-serif] text-[#0f172a] opacity-60 text-lg md:text-xl max-w-3xl mx-auto">
            A broken system. A massive opportunity.
          </p>
        </div>

        {/* Two Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* TAM Card - Dark */}
          <div className="bg-gradient-to-b from-[#0f172a] to-[#1a2642] rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#05fb90] opacity-10 blur-3xl rounded-full" />
            
            <div className="relative">
              <p className="font-['Noto_Sans',sans-serif] text-[#05fb90] text-sm font-bold tracking-wider uppercase mb-6">
                Total Addressable Market
              </p>
              
              <div className="mb-6">
                <span 
                  className="font-['Viga',sans-serif] text-6xl md:text-7xl bg-clip-text"
                  style={{ 
                    backgroundImage: "linear-gradient(209.515deg, rgb(5, 251, 144) 39.735%, rgb(185, 254, 224) 101.37%)",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  $115B
                </span>
              </div>
              
              <p className="font-['Noto_Sans',sans-serif] text-white opacity-70 text-base mb-8 leading-relaxed">
                Total divorce-related financial transactions in the US market
              </p>
              
              <div className="border-t border-white/10 pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#05fb90] mt-2 flex-shrink-0" />
                  <span className="font-['Noto_Sans',sans-serif] text-white opacity-60 text-sm">
                    14M+ custodial parents in US
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#05fb90] mt-2 flex-shrink-0" />
                  <span className="font-['Noto_Sans',sans-serif] text-white opacity-60 text-sm">
                    5.5M middle-class households in target segment
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#05fb90] mt-2 flex-shrink-0" />
                  <span className="font-['Noto_Sans',sans-serif] text-white opacity-60 text-sm">
                    Multi-year payment cycles
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Immediate Opportunity Card - White with Green Border */}
          <div className="bg-white border-2 border-[#05fb90] rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-[0px_20px_60px_0px_rgba(5,251,144,0.15)]">
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#b9fee0] opacity-20 blur-3xl rounded-full" />
            
            <div className="relative">
              <p className="font-['Noto_Sans',sans-serif] text-[#05fb90] text-sm font-bold tracking-wider uppercase mb-6">
                Immediate Opportunity
              </p>
              
              <div className="mb-6">
                <span className="font-['Viga',sans-serif] text-[#0f172a] text-6xl md:text-7xl">
                  $45B
                </span>
              </div>
              
              <p className="font-['Noto_Sans',sans-serif] text-[#0f172a] opacity-70 text-base mb-8 leading-relaxed">
                The Compliance Gap
              </p>
              
              <div className="border-t border-[#0f172a]/10 pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0f172a] mt-2 flex-shrink-0" />
                  <span className="font-['Noto_Sans',sans-serif] text-[#0f172a] opacity-60 text-sm">
                    Can Pay, Won't Pay
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0f172a] mt-2 flex-shrink-0" />
                  <span className="font-['Noto_Sans',sans-serif] text-[#0f172a] opacity-60 text-sm">
                    $30B compliance gap
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0f172a] mt-2 flex-shrink-0" />
                  <span className="font-['Noto_Sans',sans-serif] text-[#0f172a] opacity-60 text-sm">
                    $15B Unclaimed variable expenses
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0f172a] mt-2 flex-shrink-0" />
                  <span className="font-['Noto_Sans',sans-serif] text-[#0f172a] opacity-60 text-sm">
                    High-intent user acquisition
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


