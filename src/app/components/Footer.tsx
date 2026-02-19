import React from 'react';
import { Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer 
      className="py-12 border-t"
      style={{ 
        background: 'linear-gradient(180deg, #F0F0FA 0%, #ffffff 100%)',
        borderColor: '#B9FEE0'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <span className="text-3xl font-bold">
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
        
        <p className="mb-4 text-lg" style={{ color: '#0F172A', opacity: 0.7 }}>
          הטכנולוגיה שמנהלת את המזונות, כדי שאת לא תצטרכי
        </p>
        
        {/* Israeli Law compliance notice */}
        <div 
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full"
          style={{ 
            backgroundColor: '#F0F0FA',
            border: '1px solid #B9FEE0'
          }}
        >
          <Shield size={16} style={{ color: '#05FB90' }} />
          <span className="text-sm font-medium" style={{ color: '#0F172A' }}>
            פועלים על פי החוק הישראלי
          </span>
        </div>
        
        <p className="text-sm mb-6" style={{ color: '#0F172A', opacity: 0.5 }}>
          © 2026 Buffx. כל הזכויות שמורות.
        </p>
        
        <div className="flex items-center justify-center gap-6 text-sm font-medium">
          <a href="#" className="transition-colors hover:opacity-70" style={{ color: '#0F172A' }}>תנאי שימוש</a>
          <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#05FB90' }} />
          <a href="#" className="transition-colors hover:opacity-70" style={{ color: '#0F172A' }}>מדיניות פרטיות</a>
        </div>
      </div>
    </footer>
  );
}