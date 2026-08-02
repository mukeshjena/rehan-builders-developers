// src/pages/Gallery.jsx
import { useState } from 'react';
import SEO from '../seo/SEO';
import { breadcrumbSchema } from '../seo/structuredData';
import Modal from '../components/common/Modal';

const galleryData = [
  {
    category: 'RK Green City',
    items: [
      { id: 1, src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800', alt: 'RK Green City exterior view' },
      { id: 2, src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=800', alt: 'RK Green City clubhouse' },
      { id: 3, src: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&q=80&w=800', alt: 'RK Green City swimming pool' },
      { id: 4, src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800', alt: 'RK Green City garden' },
    ],
  },
  {
    category: 'Skyline Towers',
    items: [
      { id: 5, src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=800', alt: 'Skyline Towers tower A' },
      { id: 6, src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800', alt: 'Skyline Towers lobby' },
      { id: 7, src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800', alt: 'Skyline Towers interior' },
    ],
  },
  {
    category: 'RK Heritage Villas',
    items: [
      { id: 8, src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800', alt: 'Heritage Villas front view' },
      { id: 9, src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800', alt: 'Heritage Villas living room' },
      { id: 10, src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800', alt: 'Heritage Villas private garden' },
    ],
  },
  {
    category: 'Events & Site Visits',
    items: [
      { id: 11, src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800', alt: 'Project launch event' },
      { id: 12, src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800', alt: 'Client site visit' },
    ],
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = ['All', ...galleryData.map((g) => g.category)];

  const filteredItems = activeCategory === 'All'
    ? galleryData.flatMap((g) => g.items)
    : galleryData.find((g) => g.category === activeCategory)?.items || [];

  return (
    <>
      <SEO
        title="Gallery"
        description="Explore photos and videos of RK Builders & Developers' completed projects, interiors, and events."
        url="/gallery"
        structuredData={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Gallery' },
        ])}
      />

      <section className="pt-32 pb-12 px-4 bg-navy-800">
        <div className="max-w-7xl mx-auto">
          <p className="text-gold-400 font-semibold tracking-widest uppercase text-sm mb-3">Gallery</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Photo Gallery</h1>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Category Tabs */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'bg-navy-800 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setLightboxImage(item)}
                className="group rounded-xl overflow-hidden border border-slate-200 hover:border-gold-400 transition-colors duration-200"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Modal
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
        title={lightboxImage?.alt}
      >
        {lightboxImage && (
          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            className="w-full"
          />
        )}
      </Modal>
    </>
  );
}
