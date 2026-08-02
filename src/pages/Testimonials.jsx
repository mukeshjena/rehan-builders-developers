// src/pages/Testimonials.jsx
import SEO from '../seo/SEO';
import { breadcrumbSchema } from '../seo/structuredData';
import TestimonialCard from '../components/common/TestimonialCard';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <>
      <SEO
        title="Testimonials"
        description="Read what our customers say about RK Builders & Developers. Real reviews from happy homeowners across Mumbai."
        url="/testimonials"
        structuredData={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Testimonials' },
        ])}
      />

      <section className="pt-32 pb-12 px-4 bg-navy-800">
        <div className="max-w-7xl mx-auto">
          <p className="text-gold-400 font-semibold tracking-widest uppercase text-sm mb-3">Testimonials</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Customer Reviews</h1>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
