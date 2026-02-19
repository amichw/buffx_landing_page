import React from 'react';
import { MessageCircleOff, Shield, Zap } from 'lucide-react';

export function PainSection() {
  const features = [
    {
      icon: MessageCircleOff,
      title: 'אפס שיחות מביכות',
      subtitle: 'התקשורת דרך המערכת בלבד',
      gradient: 'linear-gradient(135deg, #B9FEE0 0%, #05FB90 100%)'
    },
    {
      icon: Shield,
      title: 'חישובים מדויקים',
      subtitle: 'הצמדה אוטומטית למדד',
      gradient: 'linear-gradient(135deg, #05FB90 0%, #B9FEE0 100%)'
    },
    {
      icon: Zap,
      title: 'גבייה מהירה',
      subtitle: 'דרישת תשלום מיידית',
      gradient: 'linear-gradient(135deg, #B9FEE0 30%, #05FB90 100%)'
    }
  ];

  return (
    <section 
      className="py-24 relative overflow-hidden" 
      style={{ 
        background: 'linear-gradient(180deg, #0F172A 0%, #1a2332 100%)'
      }}
    >
      {/* Enhanced floating decorative elements with glow */}
      <div 
        className="absolute top-20 right-10 w-32 h-40 rounded-2xl opacity-30 rotate-12 animate-pulse"
        style={{ 
          background: 'linear-gradient(135deg, #B9FEE0 0%, #05FB90 100%)',
          boxShadow: '0 20px 60px rgba(185, 254, 224, 0.4), 0 0 80px rgba(5, 251, 144, 0.3)'
        }}
      />
      <div 
        className="absolute top-40 left-20 w-24 h-32 rounded-2xl opacity-25 -rotate-12"
        style={{ 
          background: 'linear-gradient(135deg, #05FB90 0%, #B9FEE0 100%)',
          boxShadow: '0 20px 60px rgba(5, 251, 144, 0.4), 0 0 80px rgba(185, 254, 224, 0.3)'
        }}
      />
      <div 
        className="absolute bottom-32 right-1/4 w-28 h-36 rounded-2xl opacity-20 rotate-6"
        style={{ 
          background: 'linear-gradient(135deg, #B9FEE0 0%, #05FB90 100%)',
          boxShadow: '0 20px 60px rgba(185, 254, 224, 0.4)'
        }}
      />
      <div 
        className="absolute bottom-20 left-10 w-20 h-28 rounded-2xl opacity-30 -rotate-6 animate-pulse"
        style={{ 
          background: 'linear-gradient(135deg, #05FB90 0%, #B9FEE0 100%)',
          boxShadow: '0 20px 60px rgba(5, 251, 144, 0.4)'
        }}
      />
      <div 
        className="absolute top-1/2 right-1/3 w-16 h-20 rounded-xl opacity-20 rotate-45"
        style={{ 
          background: 'linear-gradient(135deg, #B9FEE0 0%, #05FB90 100%)',
          boxShadow: '0 20px 60px rgba(185, 254, 224, 0.4)'
        }}
      />
      
      {/* Additional gradient blobs for atmosphere */}
      <div 
        className="absolute top-10 left-1/3 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ 
          background: 'radial-gradient(circle, #05FB90 0%, transparent 70%)'
        }}
      />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Heading with gradient text */}
        <div className="text-center mb-16">
          <h2 
            className="mb-8 leading-tight"
            style={{ 
              fontSize: '3.5rem',
              fontWeight: 800
            }}
          >
            <span style={{ color: '#ffffff' }}>למה להמשיך לריב</span>
            <br />
            <span style={{ color: '#ffffff' }}>על כל </span>
            <span 
              style={{ 
                background: 'linear-gradient(135deg, #05FB90 0%, #B9FEE0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              קבלה?
            </span>
          </h2>
          
          <p 
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: '#B9FEE0' }}
          >
            את לא צריכה להיות רואת חשבון וגם לא עורכת דין. את רק צריכה שהכסף יכנס בזמן. 
            במקום לשלוח וואטסאפים, לריב על "מחציות", לחשב הצמדות ולשמוע תירוצים – 
            תני לטכנולוגיה להיות החיץ (Buffer) ביניכם.
          </p>
        </div>
        
        {/* Three cards with gradient borders and hover effects */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl text-right group relative overflow-hidden transition-all hover:scale-105"
              style={{
                backgroundColor: '#ffffff',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
              }}
            >
              {/* Gradient border effect on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
                style={{
                  background: feature.gradient,
                  zIndex: -1,
                  padding: '2px'
                }}
              />
              <div 
                className="absolute inset-[2px] bg-white rounded-2xl group-hover:opacity-95"
                style={{ zIndex: -1 }}
              />
              
              <div 
                className="inline-flex p-3 rounded-xl mb-4 transition-all group-hover:scale-110"
                style={{ 
                  background: feature.gradient,
                  boxShadow: '0 10px 30px rgba(5, 251, 144, 0.2)'
                }}
              >
                <feature.icon size={28} style={{ color: '#0F172A' }} />
              </div>
              
              <h3 
                className="mb-2 text-lg"
                style={{ 
                  color: '#0F172A',
                  fontWeight: 700
                }}
              >
                {feature.title}
              </h3>
              
              <p 
                className="text-sm"
                style={{ color: '#0F172A', opacity: 0.6 }}
              >
                {feature.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}