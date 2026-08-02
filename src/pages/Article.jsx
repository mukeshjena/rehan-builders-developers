// src/pages/Article.jsx
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, Share2 } from 'lucide-react';
import SEO from '../seo/SEO';
import { articleSchema, breadcrumbSchema } from '../seo/structuredData';
import Button from '../components/common/Button';
import { articles } from '../data/news';
import { formatDate } from '../utils/formatters';

export default function Article() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="pt-32 pb-20 text-center px-4">
        <h1 className="text-3xl font-bold text-navy-800 mb-4">Article Not Found</h1>
        <p className="text-slate-600 mb-6">The article you&apos;re looking for doesn&apos;t exist.</p>
        <Button to="/news">Browse News</Button>
      </div>
    );
  }

  const related = articles.filter((a) => a.id !== article.id).slice(0, 3);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <>
      <SEO
        title={article.title}
        description={article.excerpt}
        url={`/news/${article.slug}`}
        image={article.image}
        type="article"
        article={{ publishedAt: article.publishedAt, author: article.author, category: article.category }}
        structuredData={[
          articleSchema(article),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'News', url: '/news' },
            { name: article.title },
          ]),
        ]}
      />

      {/* Breadcrumb */}
      <div className="pt-32 pb-4 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-navy-800 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/news" className="hover:text-navy-800 transition-colors">News</Link>
            <span>/</span>
            <span className="text-navy-800 font-medium truncate">{article.title}</span>
          </nav>
        </div>
      </div>

      <article className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <span className="inline-block text-xs font-semibold text-gold-400 uppercase tracking-wider mb-3">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <User size={14} />
                {article.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {formatDate(article.publishedAt)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {article.readTime}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-xl overflow-hidden border border-slate-200 mb-10">
            <img
              src={article.image}
              alt={article.title}
              className="w-full aspect-[16/9] object-cover"
            />
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-navy-800 prose-headings:font-[family-name:var(--font-heading)] prose-a:text-gold-400 prose-a:no-underline hover:prose-a:underline mb-12"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Share */}
          <div className="flex items-center gap-4 py-6 border-t border-slate-200">
            <span className="text-sm font-semibold text-navy-800 flex items-center gap-2">
              <Share2 size={16} />
              Share:
            </span>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-500 hover:text-navy-800 transition-colors"
            >
              Facebook
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-500 hover:text-navy-800 transition-colors"
            >
              Twitter
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`${article.title} ${shareUrl}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-500 hover:text-navy-800 transition-colors"
            >
              WhatsApp
            </a>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-12 pt-12 border-t border-slate-200">
              <h2 className="text-2xl font-bold text-navy-800 mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((a) => (
                  <Link
                    key={a.id}
                    to={`/news/${a.slug}`}
                    className="group block rounded-xl border border-slate-200 bg-white overflow-hidden hover:border-gold-400 transition-colors"
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img src={a.image} alt={a.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-bold text-navy-800 line-clamp-2 group-hover:text-gold-400 transition-colors font-[family-name:var(--font-heading)]">{a.title}</h3>
                      <p className="text-xs text-slate-500 mt-1">{formatDate(a.publishedAt)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
