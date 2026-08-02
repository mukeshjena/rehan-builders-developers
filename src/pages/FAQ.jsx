// src/pages/FAQ.jsx
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SEO from '../seo/SEO';
import { faqSchema, breadcrumbSchema } from '../seo/structuredData';
import { faqs } from '../data/faq';

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <>
      <SEO
        title="Frequently Asked Questions"
        description="Find answers to common questions about RK Builders & Developers — booking process, payment plans, home loans, RERA, and more."
        url="/faq"
        structuredData={[
          faqSchema(faqs),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'FAQ' },
          ]),
        ]}
      />

      <section className="pt-32 pb-12 px-4 bg-navy-800">
        <div className="max-w-7xl mx-auto">
          <p className="text-gold-400 font-semibold tracking-widest uppercase text-sm mb-3">FAQ</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Frequently Asked Questions</h1>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="rounded-xl border border-slate-200 bg-white overflow-hidden"
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors duration-200"
                aria-expanded={openId === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="font-semibold text-navy-800 pr-4">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-slate-400 shrink-0 transition-transform duration-200 ${openId === faq.id ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                id={`faq-answer-${faq.id}`}
                className={`overflow-hidden transition-all duration-300 ${openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                role="region"
              >
                <p className="px-5 pb-5 text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
