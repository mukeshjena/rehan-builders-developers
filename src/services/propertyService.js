// src/services/propertyService.js
// Uses mock data for now — swap to API calls when backend is ready

import { properties } from '../data/properties';

/**
 * Get all properties with optional filters
 */
export function getProperties(filters = {}) {
  let result = [...properties];

  if (filters.type) {
    result = result.filter((p) => p.type === filters.type);
  }

  if (filters.status) {
    result = result.filter((p) => p.status === filters.status);
  }

  if (filters.city) {
    result = result.filter((p) => p.city === filters.city);
  }

  if (filters.minPrice) {
    result = result.filter((p) => p.price >= Number(filters.minPrice));
  }

  if (filters.maxPrice) {
    result = result.filter((p) => p.price <= Number(filters.maxPrice));
  }

  if (filters.bedrooms) {
    result = result.filter((p) => p.bedrooms >= Number(filters.bedrooms));
  }

  if (filters.search) {
    const query = filters.search.toLowerCase();
    result = result.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.location.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    );
  }

  // Sort
  if (filters.sort === 'price-asc') {
    result.sort((a, b) => a.price - b.price);
  } else if (filters.sort === 'price-desc') {
    result.sort((a, b) => b.price - a.price);
  } else if (filters.sort === 'newest') {
    result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  return result;
}

/**
 * Get a single property by slug
 */
export function getPropertyBySlug(slug) {
  return properties.find((p) => p.slug === slug) || null;
}

/**
 * Get featured properties
 */
export function getFeaturedProperties() {
  return properties.filter((p) => p.featured);
}

/**
 * Get related properties (same type, excluding current)
 */
export function getRelatedProperties(currentSlug, type, limit = 3) {
  return properties
    .filter((p) => p.slug !== currentSlug && p.type === type)
    .slice(0, limit);
}
