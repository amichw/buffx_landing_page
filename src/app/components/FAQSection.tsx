import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'איך הוא מקבל את הדרישה? זה נראה כאילו אני שלחתי הודעה?',
      answer: 'לא. זה כל הרעיון. הוא מקבל הודעה מסודרת ומקצועית מ-Buffx עם פירוט החיוב ולינק לתשלום/צפייה במסמך. זה מנטרל את הרגש והופך את זה לעניין טכני בלבד.'
    },
    {
      question: 'המזונות שלי צמודים למדד. המערכת יודעת לחשב את זה?',
      answer: 'חד משמעית. המערכת מתעדכנת אוטומטית עם פרסום מדד החודשי, ומעדכנת את סכום החיוב בהתאם לפסק הדין שלך. לא תצטרכי לחשב אחוזים ידנית לעולם.'
    },
    {
      question: 'העליתי קבלה מהסופר-פארם שיש בה גם תרופות לילד וגם דברים אישיים שלי. הוא יראה את הכל?',
      answer: 'לא. הפרטיות שלך קודמת לכל. הטכנולוגיה שלנו מאפשרת לסמן רק את השורות הרלוונטיות לילדים מתוך הקבלה. בדרישת התשלום שהוא יקבל, הוא יראה רק את הסכום הרלוונטי לחיוב.'
    },
    {
      question: 'מה קורה אם אין לי קבלה מסודרת, אלא רק צילום מסך של העברה בביט למורה פרטית?',
      answer: 'המערכת יודעת לקלוט גם צילומי מסך כאסמכתא. כל עוד רואים את התאריך, הסכום והיעד (שם המורה), המערכת תדע לצרף את זה לתיק החיוב החודשי.'
    },
    {
      question: 'האם המידע שלי בטוח?',
      answer: 'בהחלט. אנחנו משתמשים בפרוטוקולי אבטחה מתקדמים. המידע שלך הוא שלך בלבד, והצד השני רואה רק את דרישת התשלום הרלוונטית.'
    }
  ];

  return (
    <section className="py-24" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="mb-4 text-5xl"
            style={{ 
              color: '#0F172A',
              fontWeight: 800
            }}
          >
            שאלות ותשובות
          </h2>
          <p className="text-xl" style={{ color: '#0F172A', opacity: 0.6 }}>
            כל מה שרצית לדעת על Buffx
          </p>
        </div>
        
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="rounded-xl overflow-hidden"
              style={{
                backgroundColor: '#F0F0FA',
                border: '1px solid #F0F0FA'
              }}
            >
              <button
                className="w-full p-5 text-right flex items-center justify-between gap-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 
                  className="text-lg text-right flex-1"
                  style={{ 
                    color: '#0F172A',
                    fontWeight: 600
                  }}
                >
                  {faq.question}
                </h3>
                <ChevronDown 
                  size={24} 
                  style={{ 
                    color: '#0F172A',
                    transition: 'transform 0.3s',
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                  }} 
                />
              </button>
              
              {openIndex === index && (
                <div 
                  className="px-5 pb-5 text-right"
                  style={{ color: '#0F172A', opacity: 0.7 }}
                >
                  <p className="leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}