// src/pages/About.jsx
import { motion } from 'framer-motion';
import { Target, Eye, Shield, Clock } from 'lucide-react';
import SEO from '../seo/SEO';
import { breadcrumbSchema } from '../seo/structuredData';
import SectionHeading from '../components/common/SectionHeading';
import OwnerCard from '../components/common/OwnerCard';
import Button from '../components/common/Button';
import { owners } from '../data/owners';

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const timeline = [
  { year: 2026, event: 'RK Builders & Developers founded in Mumbai by Mr. Rehan Khan with a vision to redefine luxury living.' },
  { year: 2027, event: 'Launched the highly anticipated Sea View Towers in Worli.' },
  { year: 2028, event: 'Expanded into the premium commercial sector with RK Andheri Hub.' },
  { year: 2029, event: 'Recognized as the most promising luxury developer in Maharashtra.' },
];

const values = [
  { icon: Shield, title: 'Quality', description: 'We use premium materials and follow stringent quality checks at every stage of construction.' },
  { icon: Clock, title: 'Timely Delivery', description: 'Our track record speaks for itself — we deliver projects on time, every time.' },
  { icon: Target, title: 'Transparency', description: 'Clear pricing, RERA compliance, and honest communication from day one.' },
  { icon: Eye, title: 'Innovation', description: 'Modern design, smart home features, and sustainable building practices.' },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about RK Builders & Developers — over two decades of trust, quality construction, and redefining the Mumbai skyline."
        url="/about"
        structuredData={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'About Us' },
        ])}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-navy-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold-400 font-semibold tracking-widest uppercase text-sm mb-3">About Us</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Building Dreams Into Reality
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            RK Builders & Developers is shaping the modern skyline of Mumbai with ultra-premium residential and commercial properties.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-gold-400 font-semibold text-sm tracking-widest uppercase">Our Story</span>
            <h2 className="text-3xl font-bold text-navy-800 mt-2 mb-6">From a Vision to a Legacy</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Founded in 2026 by Mr. Rehan Khan, RK Builders & Developers started with a powerful vision — to build homes that redefine the concept of luxury and trust. With an uncompromising commitment to architectural brilliance and sustainable design, we are rapidly emerging as Mumbai&apos;s most sought-after real estate brand.
              </p>
              <p>
                Our rapidly expanding portfolio spans ultra-luxury apartments, exclusive private villas, and state-of-the-art commercial spaces across Bandra, Worli, South Mumbai, and the thriving suburbs. Every RK Builders project is a testament to our dedication to creating not just living spaces, but legacies.
              </p>
              <p>
                Our success is built on three pillars: uncompromising quality, timely delivery, and complete transparency. Every project undergoes rigorous quality checks, and our RERA-registered developments ensure your investment is protected.
              </p>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200"
              alt="RK Builders & Developers office"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission/Vision/Values */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Our Values"
            title="What We Stand For"
            description="The principles that guide every project we undertake."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl border border-slate-200 bg-white text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-navy-50 flex items-center justify-center mx-auto mb-4">
                  <Icon size={28} className="text-navy-800" />
                </div>
                <h3 className="font-bold text-navy-800 text-lg mb-2 font-[family-name:var(--font-heading)]">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            label="Our Journey"
            title="Milestones"
            description="Key moments in the RK Builders & Developers story."
          />
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />
            {timeline.map((m, i) => (
              <motion.div
                key={m.year}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} hidden md:block`}>
                  <div className={`inline-block p-4 rounded-xl border border-slate-200 bg-white`}>
                    <p className="font-bold text-navy-800 text-sm">{m.year}</p>
                    <p className="text-slate-600 text-sm mt-1">{m.event}</p>
                  </div>
                </div>
                <div className="relative z-10 w-8 h-8 rounded-full bg-navy-800 border-4 border-white flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-gold-400" />
                </div>
                <div className="flex-1 md:hidden">
                  <div className="p-4 rounded-xl border border-slate-200 bg-white">
                    <p className="font-bold text-navy-800 text-sm">{m.year}</p>
                    <p className="text-slate-600 text-sm mt-1">{m.event}</p>
                  </div>
                </div>
                <div className="flex-1 hidden md:block">
                  {i % 2 !== 0 ? null : <div />}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            label="Leadership"
            title="Meet Our Team"
            description="The experienced team driving RK Builders & Developers forward."
          />
          <div className="max-w-4xl mx-auto">
            {owners.map((owner) => (
              <OwnerCard key={owner.id} owner={owner} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-navy-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want to Work With Us?</h2>
          <p className="text-white/70 text-lg mb-8">
            Whether you&apos;re looking for a home or a business opportunity, we&apos;d love to hear from you.
          </p>
          <Button to="/contact" variant="secondary" size="lg">Get in Touch</Button>
        </div>
      </section>
    </>
  );
}
