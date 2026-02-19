import React from 'react';
import { Shield } from 'lucide-react';

export function HeroSection() {
  return (
    <section 
      className="relative pt-32 pb-20 overflow-hidden" 
      style={{ 
        background: 'linear-gradient(135deg, #F0F0FA 0%, #ffffff 50%, #F0F0FA 100%)'
      }}
    >
      {/* Enhanced Decorative elements with gradients */}
      <div 
        className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-40 blur-3xl animate-pulse"
        style={{ 
          background: 'radial-gradient(circle, #05FB90 0%, #B9FEE0 100%)'
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
        style={{ 
          background: 'radial-gradient(circle, #B9FEE0 0%, #05FB90 50%, transparent 100%)'
        }}
      />
      
      {/* Additional gradient orbs */}
      <div 
        className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full opacity-20 blur-2xl"
        style={{ 
          background: 'radial-gradient(circle, #05FB90 0%, transparent 70%)'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge with gradient border */}
          <div 
            className="inline-flex items-center gap-2 mb-8 px-6 py-3 rounded-full font-medium relative"
            style={{ 
              backgroundColor: '#0F172A',
              color: '#05FB90',
              boxShadow: '0 0 30px rgba(5, 251, 144, 0.3), inset 0 0 20px rgba(5, 251, 144, 0.1)'
            }}
          >
            <div 
              className="w-2 h-2 rounded-full animate-pulse" 
              style={{ 
                backgroundColor: '#05FB90',
                boxShadow: '0 0 10px #05FB90'
              }} 
            />
            <span>המערכת החכמה לגביית מזונות</span>
          </div>
          
          {/* Main Heading */}
          <h1 
            className="mb-6 leading-tight"
            style={{ 
              fontSize: '4rem',
              color: '#0F172A',
              fontWeight: 800 
            }}
          >
            הסוף למרדף אחרי{' '}
            <span 
              className="relative inline-block"
              style={{ 
                background: 'linear-gradient(135deg, #05FB90 0%, #B9FEE0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              המזונות
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                <defs>
                  <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#05FB90" />
                    <stop offset="100%" stopColor="#B9FEE0" />
                  </linearGradient>
                </defs>
                <path d="M2 10C100 2, 200 2, 298 10" stroke="url(#underlineGradient)" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          
          <h2 
            className="mb-10 text-2xl leading-relaxed max-w-3xl mx-auto"
            style={{ color: '#0F172A', opacity: 0.7 }}
          >
            הטכנולוגיה שלנו דואגת שתקבלי את הכסף, הוא מקבל דרישת תשלום מסודרת, ושניכם לא צריכים להחליף מילה.
          </h2>
          
          {/* ⭐ VISUAL CENTERPIECE - Phone Mockup with Notification (CRITICAL!) */}
          <div className="mb-10 flex justify-center">
            <div className="relative" style={{ maxWidth: '320px', width: '100%' }}>
              {/* Phone Frame with gradient border */}
              <div 
                className="relative rounded-[3rem] overflow-hidden mx-auto shadow-2xl"
                style={{ 
                  width: '100%',
                  aspectRatio: '9/19',
                  background: 'linear-gradient(135deg, #0F172A 0%, #1a2332 100%)',
                  padding: '14px',
                  boxShadow: '0 30px 80px rgba(15, 23, 42, 0.5)'
                }}
              >
                {/* Phone Screen */}
                <div 
                  className="w-full h-full rounded-[2.5rem] overflow-hidden relative"
                  style={{ backgroundColor: '#F0F0FA' }}
                >
                  {/* Blurred background - simulating medical/legal documents */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(240, 240, 250, 0.95), rgba(240, 240, 250, 0.95)),
                        repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(15, 23, 42, 0.03) 20px, rgba(15, 23, 42, 0.03) 22px),
                        repeating-linear-gradient(90deg, transparent, transparent 100px, rgba(15, 23, 42, 0.02) 100px, rgba(15, 23, 42, 0.02) 102px)
                      `,
                      filter: 'blur(2px)'
                    }}
                  />
                  
                  {/* Additional document texture */}
                  <div 
                    className="absolute top-12 left-8 right-8 space-y-2 opacity-20"
                  >
                    {[...Array(8)].map((_, i) => (
                      <div 
                        key={i}
                        className="h-2 rounded"
                        style={{ 
                          backgroundColor: '#0F172A',
                          width: i % 3 === 0 ? '70%' : '100%'
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* ⭐ THE NOTIFICATION CARD - This is the centerpiece! */}
                  <div 
                    className="absolute top-16 left-4 right-4 p-5 rounded-2xl shadow-2xl animate-[slideDown_0.6s_ease-out]"
                    style={{ 
                      background: 'linear-gradient(135deg, #ffffff 0%, #F0F0FA 100%)',
                      boxShadow: '0 20px 60px rgba(15, 23, 42, 0.3), 0 0 0 1px rgba(15, 23, 42, 0.05)'
                    }}
                  >
                    {/* App Icon & Name */}
                    <div className="flex items-start gap-3 mb-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ 
                          background: 'linear-gradient(135deg, #05FB90 0%, #B9FEE0 100%)',
                          boxShadow: '0 4px 12px rgba(5, 251, 144, 0.4)'
                        }}
                      >
                        <span className="text-2xl" style={{ color: '#0F172A', fontWeight: 900 }}>B</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-bold mb-1" style={{ color: '#0F172A', fontSize: '14px' }}>Buffx</div>
                        <div className="text-xs" style={{ color: '#0F172A', opacity: 0.5 }}>עכשיו</div>
                      </div>
                    </div>
                    
                    {/* ⭐ THE KEY MESSAGE - Payment Received Notification */}
                    <div className="text-right">
                      <div 
                        className="text-xl font-bold mb-2"
                        style={{ 
                          background: 'linear-gradient(135deg, #05FB90 0%, #B9FEE0 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}
                      >
                        התקבל תשלום: 1,200 ₪
                      </div>
                      <div className="text-base font-medium" style={{ color: '#0F172A', opacity: 0.7 }}>
                        (מחצית טיפול שיניים)
                      </div>
                    </div>
                    
                    {/* Success indicator */}
                    <div className="mt-3 flex items-center gap-2 justify-end">
                      <span className="text-xs font-medium" style={{ color: '#05FB90' }}>אושר ✓</span>
                    </div>
                  </div>
                  
                  {/* Decorative blurred cards at bottom (simulating other apps/content) */}
                  <div 
                    className="absolute bottom-20 left-6 right-6 h-14 rounded-xl opacity-10"
                    style={{ backgroundColor: '#0F172A' }}
                  />
                  <div 
                    className="absolute bottom-6 left-6 right-6 h-12 rounded-xl opacity-5"
                    style={{ backgroundColor: '#0F172A' }}
                  />
                </div>
                
                {/* Phone notch */}
                <div 
                  className="absolute top-[14px] left-1/2 transform -translate-x-1/2 w-24 h-6 rounded-full z-10"
                  style={{ 
                    background: 'linear-gradient(135deg, #0F172A 0%, #1a2332 100%)'
                  }}
                />
              </div>
              
              {/* Glow effect around phone */}
              <div 
                className="absolute inset-0 rounded-[3rem] opacity-30 blur-3xl -z-10"
                style={{
                  background: 'radial-gradient(circle, #05FB90 0%, transparent 70%)'
                }}
              />
            </div>
          </div>
          
          {/* CTA Button with gradient */}
          <button 
            className="px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 mb-6 relative overflow-hidden group"
            style={{ 
              background: 'linear-gradient(135deg, #05FB90 0%, #B9FEE0 100%)',
              color: '#0F172A',
              boxShadow: '0 20px 60px rgba(5, 251, 144, 0.4), 0 0 40px rgba(5, 251, 144, 0.2)'
            }}
            onClick={() => {
              const form = document.getElementById('waitlist-form');
              form?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="relative z-10">אני רוצה שקט נפשי - הצטרפות לבטא</span>
            {/* Hover gradient effect */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: 'linear-gradient(135deg, #B9FEE0 0%, #05FB90 100%)'
              }}
            />
          </button>
          
          {/* Trust Signal */}
          <div className="flex items-center justify-center gap-2" style={{ color: '#0F172A', opacity: 0.6 }}>
            <Shield size={18} />
            <span className="font-medium">דיסקרטיות מלאה | הצפנת נתונים בסטנדרט מחמיר</span>
          </div>
        </div>
      </div>
    </section>
  );
}