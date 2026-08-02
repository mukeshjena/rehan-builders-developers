// src/pages/Home.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Building2, Users, Award, CalendarCheck, ArrowRight, ChevronRight } from 'lucide-react';
import SEO from '../seo/SEO';
import { organizationSchema } from '../seo/structuredData';
import SectionHeading from '../components/common/SectionHeading';
import PropertyCard from '../components/common/PropertyCard';
import ProjectCard from '../components/common/ProjectCard';
import TestimonialCard from '../components/common/TestimonialCard';
import Button from '../components/common/Button';
import HeroSlider from '../components/home/HeroSlider';
import TestimonialsMarquee from '../components/home/TestimonialsMarquee';
import { getFeaturedProperties } from '../services/propertyService';
import { projects } from '../data/projects';
import { articles } from '../data/news';
import { testimonials } from '../data/testimonials';
import { propertyTypes, cities } from '../data/properties';
import { formatDate } from '../utils/formatters';

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stats = [
  { icon: CalendarCheck, value: '20+', label: 'Years of Experience' },
  { icon: Building2, value: '50+', label: 'Projects Delivered' },
  { icon: Users, value: '5,000+', label: 'Happy Families' },
  { icon: Award, value: '15+', label: 'Awards Won' },
];

export default function Home() {
  const navigate = useNavigate();
  const featuredProperties = getFeaturedProperties().slice(0, 3);
  const featuredProjects = projects.filter((p) => p.status !== 'Upcoming').slice(0, 3);
  const latestNews = articles.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);

  const [searchForm, setSearchForm] = useState({ city: '', type: '', maxPrice: '' });

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchForm.city) params.set('city', searchForm.city);
    if (searchForm.type) params.set('type', searchForm.type);
    if (searchForm.maxPrice) params.set('maxPrice', searchForm.maxPrice);
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <>
      <SEO
        title="Premium Real Estate in Mumbai"
        description="RK Builders & Developers — Discover luxury apartments, exclusive villas, and commercial properties in Mumbai. 20+ years of trust."
        url="/"
        structuredData={organizationSchema()}
      />

      {/* ── Hero ── */}
      <section className="relative z-10 min-h-[600px] md:min-h-screen flex items-center justify-center bg-navy-900 overflow-hidden">
        <HeroSlider />

        <div className="relative z-20 max-w-5xl mx-auto px-4 text-center text-white pt-20 pb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gold-400 font-semibold tracking-widest uppercase text-sm mb-4"
          >
            Trusted Since 2026
          </motion.p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-[family-name:var(--font-heading)]">
            Building Dreams <br className="hidden md:block" />
            <span className="text-gold-400">Into Reality</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Premium residential and commercial properties in Mumbai. Luxury construction, timely delivery, and customer satisfaction — guaranteed.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button to="/properties" variant="secondary" size="lg">
              View Properties
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button to="/contact" variant="outline-white" size="lg">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Search Widget ── */}
      <section className="relative z-30 -mt-12 max-w-4xl mx-auto px-4 mb-4">
        <form
          onSubmit={handleSearch}
          className="bg-white rounded-xl border border-slate-200 p-6 grid grid-cols-1 sm:grid-cols-4 gap-4"
        >
          <div>
            <label htmlFor="search-city" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Location</label>
            <select
              id="search-city"
              value={searchForm.city}
              onChange={(e) => setSearchForm((f) => ({ ...f, city: e.target.value }))}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 focus:border-gold-400 focus:ring-0"
            >
              <option value="">All Cities</option>
              {cities.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="search-type" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Property Type</label>
            <select
              id="search-type"
              value={searchForm.type}
              onChange={(e) => setSearchForm((f) => ({ ...f, type: e.target.value }))}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 focus:border-gold-400 focus:ring-0"
            >
              <option value="">All Types</option>
              {propertyTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="search-budget" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Max Budget</label>
            <select
              id="search-budget"
              value={searchForm.maxPrice}
              onChange={(e) => setSearchForm((f) => ({ ...f, maxPrice: e.target.value }))}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 focus:border-gold-400 focus:ring-0"
            >
              <option value="">Any Budget</option>
              <option value="3000000">Up to ₹30 Lakh</option>
              <option value="5000000">Up to ₹50 Lakh</option>
              <option value="7500000">Up to ₹75 Lakh</option>
              <option value="10000000">Up to ₹1 Cr</option>
              <option value="50000000">Up to ₹5 Cr</option>
            </select>
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full bg-navy-800 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-navy-700 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Search size={16} />
              Search
            </button>
          </div>
        </form>
      </section>

      {/* ── Featured Properties ── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Featured Properties"
            title="Discover Your Dream Home"
            description="Hand-picked properties by RK Builders & Developers — from affordable apartments to luxury villas."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property, i) => (
              <motion.div
                key={property.id}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1 }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button to="/properties" variant="outline">
              View All Properties
              <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-20 px-4 bg-navy-800">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, label }) => (
            <motion.div
              key={label}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <Icon size={32} className="text-gold-400 mx-auto mb-3" />
              <p className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-heading)]">{value}</p>
              <p className="text-sm text-white/60 mt-1">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Our Projects"
            title="Landmark Developments"
            description="Explore our completed and ongoing residential and commercial projects."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button to="/projects" variant="outline">
              View All Projects
              <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Testimonials"
            title="What Our Customers Say"
            description="Hear from families who chose RK Builders & Developers for their dream home."
          />
          <TestimonialsMarquee />
          <div className="text-center mt-10">
            <Button to="/testimonials" variant="outline">
              Read More Reviews
              <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── Latest News ── */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Latest News"
            title="News & Insights"
            description="Stay updated with RK Builders & Developers' latest announcements, guides, and market insights."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestNews.map((article) => (
              <a
                key={article.id}
                href={`/news/${article.slug}`}
                className="group block rounded-xl border border-slate-200 bg-white overflow-hidden hover:border-gold-400 transition-colors duration-200"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-gold-400 uppercase tracking-wider">{article.category}</span>
                  <h3 className="text-lg font-bold text-navy-800 mt-2 mb-2 line-clamp-2 group-hover:text-gold-400 transition-colors duration-200 font-[family-name:var(--font-heading)]">
                    {article.title}
                  </h3>
                  <p className="text-sm text-slate-500">{formatDate(article.publishedAt)} · {article.readTime}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button to="/news" variant="outline">
              View All News
              <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 px-4 bg-navy-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            Let RK Builders & Developers help you find the perfect property. Contact us today for a personalised consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/properties" variant="secondary" size="lg">
              Browse Properties
            </Button>
            <Button to="/contact" variant="outline-white" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
