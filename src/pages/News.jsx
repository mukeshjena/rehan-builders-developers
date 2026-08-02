// src/pages/News.jsx
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../seo/SEO';
import { breadcrumbSchema } from '../seo/structuredData';
import { articles, newsCategories } from '../data/news';
import { formatDate } from '../utils/formatters';

export default function News() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    let result = [...articles];
    if (activeCategory !== 'All') {
      result = result.filter((a) => a.category === activeCategory);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter((a) =>
        a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q)
      );
    }
    return result;
  }, [activeCategory, searchQuery]);

  return (
    <>
      <SEO
        title="News & Blog"
        description="Latest news, guides, and market insights from RK Builders & Developers. Stay updated on real estate trends in Mumbai."
        url="/news"
        structuredData={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'News' },
        ])}
      />

      <section className="pt-32 pb-12 px-4 bg-navy-800">
        <div className="max-w-7xl mx-auto">
          <p className="text-gold-400 font-semibold tracking-widest uppercase text-sm mb-3">News & Blog</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Latest Updates</h1>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex gap-2 overflow-x-auto pb-2 flex-1">
              {newsCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors duration-200 ${
                    activeCategory === cat
                      ? 'bg-navy-800 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm w-full sm:w-64 focus:border-gold-400 focus:ring-0"
            />
          </div>

          {/* Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <Link
                key={article.id}
                to={`/news/${article.slug}`}
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
                  <h2 className="text-lg font-bold text-navy-800 mt-2 mb-2 line-clamp-2 group-hover:text-gold-400 transition-colors duration-200 font-[family-name:var(--font-heading)]">
                    {article.title}
                  </h2>
                  <p className="text-sm text-slate-600 line-clamp-2 mb-3">{article.excerpt}</p>
                  <p className="text-xs text-slate-500">{formatDate(article.publishedAt)} · {article.readTime}</p>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-slate-500 py-12">No articles found.</p>
          )}
        </div>
      </section>
    </>
  );
}
