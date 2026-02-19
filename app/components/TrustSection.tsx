import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Quote, Sparkles } from 'lucide-react';

export function TrustSection() {
  return (
    <section 
      className="py-20 relative overflow-hidden" 
      style={{ 
        background: 'linear-gradient(180deg, #ffffff 0%, #F0F0FA 100%)'
      }}
    >
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 
            className="mb-3 leading-tight text-4xl"
            style={{ 
              color: '#0F172A',
              fontWeight: 800
            }}
          >
            "הבנתי שזו לא רק הבעיה שלי –{' '}
            <span 
              style={{ 
                background: 'linear-gradient(135deg, #05FB90 0%, #B9FEE0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              זו מכת מדינה
            </span>
            ."
          </h2>
        </div>
        
        {/* Main Content Card */}
        <div 
          className="rounded-3xl overflow-hidden relative"
          style={{
            backgroundColor: '#ffffff',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)'
          }}
        >
          {/* Image Section */}
          <div className="relative h-64">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1650784854430-3ab0c30afdf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFuJTIwcG9ydHJhaXQlMjBmaW5hbmNlfGVufDF8fHx8MTc3MTI2Mjc0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="חנה בר - מייסדת Buffx"
              className="w-full h-full object-cover"
            />
            
            {/* Gradient overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to bottom, transparent 40%, rgba(15, 23, 42, 0.8) 100%)'
              }}
            />
            
            {/* Name badge on image */}
            <div className="absolute bottom-6 right-6">
              <div 
                className="px-5 py-3 rounded-full backdrop-blur-md"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                }}
              >
                <div className="flex items-center gap-2">
                  <Sparkles size={20} style={{ color: '#05FB90' }} />
                  <div className="text-right">
                    <div className="font-bold" style={{ color: '#0F172A' }}>חנה בר</div>
                    <div className="text-xs" style={{ color: '#05FB90' }}>מייסדת Buffx</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="p-8 text-right">
            {/* Quote */}
            <div 
              className="inline-flex p-2 rounded-lg mb-4"
              style={{ 
                background: 'linear-gradient(135deg, #05FB90 0%, #B9FEE0 100%)'
              }}
            >
              <Quote size={24} style={{ color: '#0F172A' }} />
            </div>
            
            <p 
              className="text-base leading-relaxed mb-4"
              style={{ color: '#0F172A', opacity: 0.8 }}
            >
              אני מגיעה מעולם הכספים, ניהלתי תקציבי עתק בחברות ענק. אבל כאמא גרושה, מצאתי את עצמי חסרת אונים מול בירוקרטיה של קבלות ומאבקים יומיומיים. הקמתי את <span className="font-bold">Buffx</span> כדי לתת לכל אמא את הכוח הטכנולוגי שיש לחברות הגדולות.
            </p>
            
            {/* Partner Logos - Compact */}
            <div className="pt-4 border-t" style={{ borderColor: '#F0F0FA' }}>
              <div className="flex items-center justify-end gap-4 flex-wrap">
                <span className="text-xs" style={{ color: '#0F172A', opacity: 0.5 }}>נתמכים ע״י:</span>
                
                {/* Google for Startups Logo - Compact */}
                <div 
                  className="px-4 py-2 rounded-lg flex items-center gap-2"
                  style={{ 
                    backgroundColor: '#F0F0FA'
                  }}
                >
                  <div 
                    className="w-5 h-5 rounded flex items-center justify-center text-xs font-bold"
                    style={{ 
                      background: 'linear-gradient(135deg, #4285F4 0%, #34A853 50%, #FBBC04 75%, #EA4335 100%)',
                      color: '#ffffff'
                    }}
                  >
                    G
                  </div>
                  <span className="font-semibold text-xs" style={{ color: '#0F172A' }}>
                    Google for Startups
                  </span>
                </div>
                
                {/* Michal Sela Forum Logo - Compact */}
                <div 
                  className="px-4 py-2 rounded-lg"
                  style={{ 
                    background: 'linear-gradient(135deg, #05FB90 0%, #B9FEE0 100%)'
                  }}
                >
                  <span className="font-semibold text-xs" style={{ color: '#0F172A' }}>
                    פורום מיכל סלע
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