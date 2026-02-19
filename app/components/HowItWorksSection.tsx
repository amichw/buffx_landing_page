import React from 'react';
import { Scan, ReceiptText, Zap, Scale } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      icon: Scan,
      number: '1',
      title: 'סריקת פסק דין והסכם גירושין',
      subtitle: 'AI ANALYSIS',
      description: 'את מעלה את המסמכים (PDF/תמונה). ה-AI שלנו לומד בדיוק מה מגיע לך: הצמדה למדד, מחצית הוצאות רפואיות, חוגים וקייטנות.'
    },
    {
      icon: ReceiptText,
      number: '2',
      title: 'איסוף הוצאות אוטומטי',
      subtitle: 'SMART TRACKING',
      description: 'מעלה קבלות שוטפות או צילומי מסך (גם מביט/פייבוקס). המערכת מסווגת אותן לפי פסק הדין ומכינה "תיק חיוב" חודשי.'
    },
    {
      icon: Zap,
      number: '3',
      title: 'גבייה ושקט נפשי',
      subtitle: 'AUTOMATED COLLECTION',
      description: 'אנחנו מפיקים דרישת תשלום רשמית ומנומקת ושולחים אותה אליו. הכסף עובר, התיעוד נשמר, ואת נשארת מחוץ לויכוח.'
    },
    {
      icon: Scale,
      number: '4',
      title: 'גיבוי משפטי בלחיצת כפתור',
      subtitle: 'ENFORCEMENT READY',
      description: 'במידה ואין שיתוף פעולה והחוב מצטבר, המערכת מפיקה עבורך תיק הוצאה לפועל חתום, מפורט ומסודר, שמוכן להגשה ישירות לרשם. את לא צריכה להתחיל לחשב חובות רטרואקטיבית – הכל כבר מוכן.'
    }
  ];

  return (
    <section 
      className="py-24 relative overflow-hidden" 
      style={{ 
        backgroundColor: '#0F172A'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 
            className="mb-4 text-5xl"
            style={{ 
              color: '#ffffff',
              fontWeight: 800
            }}
          >
            איך זה עובד?
          </h2>
          <p className="text-xl" style={{ color: '#B9FEE0' }}>
            ארבעה שלבים פשוטים לחיים רגועים יותר
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group"
            >
              <div
                className="p-10 rounded-3xl text-right transition-all hover:scale-[1.02] relative overflow-hidden"
                style={{
                  backgroundColor: '#ffffff'
                }}
              >
                {/* Giant number in background */}
                <div 
                  className="absolute top-4 left-8 text-[200px] font-black leading-none pointer-events-none select-none"
                  style={{ 
                    color: '#B9FEE0',
                    opacity: 0.4
                  }}
                >
                  {step.number}
                </div>
                
                <div className="relative z-10">
                  {/* Icon container with gradient */}
                  <div className="flex justify-end mb-6">
                    <div 
                      className="w-20 h-20 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110"
                      style={{ 
                        background: 'linear-gradient(135deg, #05FB90 0%, #B9FEE0 100%)'
                      }}
                    >
                      <step.icon size={40} style={{ color: '#0F172A' }} strokeWidth={2.5} />
                    </div>
                  </div>
                  
                  {/* Subtitle with gradient */}
                  <div className="mb-3 text-right">
                    <span 
                      className="text-sm font-bold tracking-widest"
                      style={{ 
                        color: '#05FB90'
                      }}
                    >
                      {step.subtitle}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 
                    className="mb-4 text-2xl"
                    style={{ 
                      color: '#0F172A',
                      fontWeight: 700
                    }}
                  >
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p 
                    className="leading-relaxed"
                    style={{ color: '#0F172A', opacity: 0.6 }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}