import React, { useState } from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { getSupabaseBrowserClient } from '../../lib/supabase';

export function WaitlistForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    hasDivorceDoc: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendConfirmationEmail = async (fullName: string, email: string) => {
    try {
      const response = await fetch('/api/waitlist/confirmation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fullName, email })
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Failed to send confirmation email:', errorText);
      }
    } catch (error) {
      console.error('Confirmation email request failed:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    const supabase = getSupabaseBrowserClient();
    const tableName = process.env.NEXT_PUBLIC_SUPABASE_WAITLIST_TABLE ?? 'waitlist_submissions';

    if (!supabase) {
      console.error('Missing Supabase environment variables');
      alert('שגיאת מערכת: חסרים פרטי חיבור. נסי שוב מאוחר יותר.');
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase.from(tableName).insert({
      full_name: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      has_divorce_doc: formData.hasDivorceDoc,
      submitted_at: new Date().toISOString()
    });

    if (error) {
      console.error('Supabase insert error:', error);
      alert('אירעה שגיאה בשליחת הטופס. נסי שוב בעוד רגע.');
      setIsSubmitting(false);
      return;
    }

    await sendConfirmationEmail(formData.fullName, formData.email);

    setSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setIsSubmitting(false);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        hasDivorceDoc: false
      });
    }, 3000);
  };

  return (
    <section 
      id="waitlist-form"
      className="py-24 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(180deg, #0F172A 0%, #1a2332 100%)'
      }}
    >
      {/* Enhanced decorative blobs with gradients */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl animate-pulse"
        style={{ 
          background: 'radial-gradient(circle, #05FB90 0%, #B9FEE0 50%, transparent 100%)'
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl"
        style={{ 
          background: 'radial-gradient(circle, #B9FEE0 0%, #05FB90 50%, transparent 100%)'
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full opacity-10 blur-2xl"
        style={{ 
          background: 'radial-gradient(circle, #05FB90 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 
            className="mb-4 text-5xl"
            style={{ 
              color: '#ffffff',
              fontWeight: 800
            }}
          >
            הזמנה להצטרף ל<span 
              style={{ 
                background: 'linear-gradient(135deg, #05FB90 0%, #B9FEE0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              מהפכה השקטה
            </span>
          </h2>
          
          <p 
            className="text-xl"
            style={{ color: '#B9FEE0' }}
          >
            השאירי פרטים ונעדכן אותך ברגע שהמערכת תהיה זמינה
          </p>
        </div>

        <div 
          className="p-10 rounded-3xl relative overflow-hidden"
          style={{
            backgroundColor: '#ffffff',
            boxShadow: '0 30px 80px rgba(5, 251, 144, 0.3), 0 0 60px rgba(5, 251, 144, 0.2)'
          }}
        >
          {/* Animated gradient border */}
          <div 
            className="absolute inset-0 rounded-3xl opacity-70"
            style={{
              background: 'linear-gradient(135deg, #05FB90 0%, #B9FEE0 50%, #05FB90 100%)',
              padding: '3px',
              zIndex: -1
            }}
          />
          <div 
            className="absolute inset-[3px] bg-white rounded-3xl"
            style={{ zIndex: 0 }}
          />
          
          <div className="relative z-10">
            {submitted ? (
              <div className="text-center py-8">
                <div 
                  className="inline-flex p-6 rounded-full mb-6"
                  style={{ 
                    background: 'linear-gradient(135deg, #B9FEE0 0%, #05FB90 100%)',
                    boxShadow: '0 20px 40px rgba(5, 251, 144, 0.4)'
                  }}
                >
                  <CheckCircle size={60} style={{ color: '#0F172A' }} />
                </div>
                <h3 
                  className="text-3xl mb-3"
                  style={{ color: '#0F172A', fontWeight: 700 }}
                >
                  תודה על ההרשמה!
                </h3>
                <p className="text-xl" style={{ color: '#0F172A', opacity: 0.7 }}>
                  נשלח לך עדכון ברגע שהמערכת תהיה זמינה
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="text-right">
                  <label 
                    htmlFor="fullName"
                    className="block mb-2 font-bold"
                    style={{ color: '#0F172A' }}
                  >
                    שם מלא
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl border-2 focus:outline-none transition-all text-right text-lg"
                    style={{ 
                      background: 'linear-gradient(135deg, #F0F0FA 0%, #ffffff 100%)',
                      borderColor: '#F0F0FA',
                      color: '#0F172A'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#05FB90';
                      e.target.style.boxShadow = '0 0 20px rgba(5, 251, 144, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#F0F0FA';
                      e.target.style.boxShadow = 'none';
                    }}
                    placeholder="הזיני את שמך המלא"
                  />
                </div>

                {/* Phone */}
                <div className="text-right">
                  <label 
                    htmlFor="phone"
                    className="block mb-2 font-bold"
                    style={{ color: '#0F172A' }}
                  >
                    טלפון נייד
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl border-2 focus:outline-none transition-all text-right text-lg"
                    style={{ 
                      background: 'linear-gradient(135deg, #F0F0FA 0%, #ffffff 100%)',
                      borderColor: '#F0F0FA',
                      color: '#0F172A'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#05FB90';
                      e.target.style.boxShadow = '0 0 20px rgba(5, 251, 144, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#F0F0FA';
                      e.target.style.boxShadow = 'none';
                    }}
                    placeholder="050-1234567"
                  />
                </div>

                {/* Email */}
                <div className="text-right">
                  <label 
                    htmlFor="email"
                    className="block mb-2 font-bold"
                    style={{ color: '#0F172A' }}
                  >
                    כתובת אימייל
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl border-2 focus:outline-none transition-all text-right text-lg"
                    style={{ 
                      background: 'linear-gradient(135deg, #F0F0FA 0%, #ffffff 100%)',
                      borderColor: '#F0F0FA',
                      color: '#0F172A'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#05FB90';
                      e.target.style.boxShadow = '0 0 20px rgba(5, 251, 144, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#F0F0FA';
                      e.target.style.boxShadow = 'none';
                    }}
                    placeholder="example@email.com"
                  />
                </div>

                {/* Checkbox with gradient */}
                <div 
                  className="flex items-center gap-3 justify-end p-5 rounded-xl"
                  style={{ 
                    background: 'linear-gradient(135deg, #F0F0FA 0%, #ffffff 100%)'
                  }}
                >
                  <label 
                    htmlFor="hasDivorceDoc"
                    style={{ color: '#0F172A' }}
                    className="cursor-pointer font-medium"
                  >
                    יש לי פסק דין / הסכם גירושין (לא חובה להעלות כרגע)
                  </label>
                  <input
                    type="checkbox"
                    id="hasDivorceDoc"
                    checked={formData.hasDivorceDoc}
                    onChange={(e) => setFormData({ ...formData, hasDivorceDoc: e.target.checked })}
                    className="w-6 h-6 rounded cursor-pointer"
                    style={{ accentColor: '#05FB90' }}
                  />
                </div>

                {/* Submit Button with gradient */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 rounded-full text-lg font-bold transition-all hover:scale-105 flex items-center justify-center gap-3 group relative overflow-hidden"
                  style={{ 
                    background: 'linear-gradient(135deg, #05FB90 0%, #B9FEE0 100%)',
                    color: '#0F172A',
                    boxShadow: '0 20px 60px rgba(5, 251, 144, 0.4), 0 0 40px rgba(5, 251, 144, 0.2)'
                  }}
                >
                  <span className="relative z-10">{isSubmitting ? 'שולח...' : 'הרשמי לרשימת ההמתנה'}</span>
                  <ArrowLeft size={24} className="transition-transform group-hover:-translate-x-1 relative z-10" />
                  
                  {/* Hover gradient effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: 'linear-gradient(135deg, #B9FEE0 0%, #05FB90 100%)'
                    }}
                  />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
