// src/seo/SEO.jsx
import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'RK Builders & Developers';
const DEFAULT_DESCRIPTION = 'RK Builders & Developers — Premium real estate builder and developer in Mumbai. Explore luxury apartments, exclusive villas, and commercial spaces across the city.';
const SITE_URL = 'https://rkbuildersanddevelopers.in';

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  image,
  url,
  type = 'website',
  article,
  structuredData,
  canonical,
  noindex = false,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Premium Real Estate in Mumbai`;
  const pageUrl = url ? `${SITE_URL}${url}` : SITE_URL;
  const ogImage = image || `${SITE_URL}/og-image.jpg`;

  return (
    <Helmet>
      {/* Primary Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Article-specific */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedAt} />
          <meta property="article:author" content={article.author} />
          {article.category && <meta property="article:section" content={article.category} />}
        </>
      )}

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
