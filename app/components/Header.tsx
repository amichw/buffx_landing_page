import React from 'react';

export function Header() {
  return (
    <header 
      className="fixed top-0 w-full backdrop-blur-lg border-b z-50" 
      style={{ 
        background: 'linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(240,240,250,0.95) 100%)',
        borderColor: '#F0F0FA',
        boxShadow: '0 4px 20px rgba(5, 251, 144, 0.1)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with gradient */}
          <div className="flex items-center">
            <span className="text-2xl font-bold">
              <span style={{ color: '#0F172A' }}>BUFF</span>
              <span 
                style={{ 
                  background: 'linear-gradient(135deg, #05FB90 0%, #B9FEE0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                X
              </span>
            </span>
          </div>
          
          {/* CTA Button with gradient */}
          <button 
            className="px-6 py-2 rounded-full font-medium transition-all hover:scale-105 relative overflow-hidden group"
            style={{ 
              background: 'linear-gradient(135deg, #05FB90 0%, #B9FEE0 100%)',
              color: '#0F172A',
              boxShadow: '0 10px 30px rgba(5, 251, 144, 0.3)'
            }}
            onClick={() => {
              const form = document.getElementById('waitlist-form');
              form?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="relative z-10">הצטרפי לבטא</span>
            
            {/* Hover gradient effect */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: 'linear-gradient(135deg, #B9FEE0 0%, #05FB90 100%)'
              }}
            />
          </button>
        </div>
      </div>
    </header>
  );
}