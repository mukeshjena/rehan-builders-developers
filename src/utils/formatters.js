// src/utils/formatters.js

/**
 * Format price in Indian currency format
 */
export function formatPrice(price) {
  if (price >= 10000000) {
    return `₹${(price / 10000000).toFixed(2)} Cr`;
  }
  if (price >= 100000) {
    return `₹${(price / 100000).toFixed(2)} Lakh`;
  }
  return `₹${price.toLocaleString('en-IN')}`;
}

/**
 * Format area with unit
 */
export function formatArea(area, unit = 'sq ft') {
  return `${area.toLocaleString('en-IN')} ${unit}`;
}

/**
 * Format date to readable string
 */
export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Generate initials from a name
 */
export function getInitials(name) {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

/**
 * Get status badge color classes
 */
export function getStatusColor(status) {
  switch (status) {
    case 'Ready to Move':
    case 'Completed':
      return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    case 'Under Construction':
    case 'Ongoing':
      return 'bg-amber-50 text-amber-700 border-amber-200';
    case 'Upcoming':
      return 'bg-blue-50 text-blue-700 border-blue-200';
    default:
      return 'bg-slate-50 text-slate-700 border-slate-200';
  }
}
