// src/seo/structuredData.js

const SITE_URL = 'https://rkbuilders.com'; // Replace with actual domain

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'RK Builders & Developers',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: 'Premium real estate builder and developer in Mumbai, specializing in luxury apartments, villas, and commercial properties.',
    url: 'https://rkbuilders.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Unit 401, RK Hub, Bandra Kurla Complex, Bandra East',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400051',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9876543210',
      contactType: 'sales',
    },
    sameAs: [
      'https://facebook.com/rkbuilders',
      'https://instagram.com/rkbuilders',
      'https://linkedin.com/company/rkbuilders',
    ],
  };
}

export function realEstateListingSchema(property) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: property.title,
    description: property.description,
    url: `${SITE_URL}/properties/${property.slug}`,
    image: property.images?.[0] || property.image,
    offers: {
      '@type': 'Offer',
      price: property.price,
      priceCurrency: 'INR',
      availability: property.status === 'Ready to Move'
        ? 'https://schema.org/InStock'
        : 'https://schema.org/PreOrder',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: property.city,
      addressRegion: 'Odisha',
      addressCountry: 'IN',
    },
    numberOfRooms: property.bedrooms,
    floorSize: {
      '@type': 'QuantitativeValue',
      value: property.area,
      unitText: property.areaUnit,
    },
  };
}

export function articleSchema(article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    url: `${SITE_URL}/news/${article.slug}`,
    datePublished: article.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'RK Builders & Developers',
    },
    publisher: {
      '@type': 'Organization',
      name: 'RK Builders & Developers',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
  };
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ? `${SITE_URL}${item.url}` : undefined,
    })),
  };
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
