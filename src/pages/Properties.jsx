// src/pages/Properties.jsx
import { useMemo, useState } from 'react';
import { LayoutGrid, List, SlidersHorizontal, X } from 'lucide-react';
import SEO from '../seo/SEO';
import { breadcrumbSchema } from '../seo/structuredData';
import SectionHeading from '../components/common/SectionHeading';
import PropertyCard from '../components/common/PropertyCard';
import Button from '../components/common/Button';
import { FilterProvider, useFilters } from '../context/FilterContext';
import { getProperties } from '../services/propertyService';
import { propertyTypes, propertyStatuses, cities } from '../data/properties';

export default function Properties() {
  return (
    <FilterProvider>
      <PropertiesContent />
    </FilterProvider>
  );
}

function PropertiesContent() {
  const { filters, setFilter, clearFilters } = useFilters();
  const [viewMode, setViewMode] = useState('grid');
  const [mobileFilters, setMobileFilters] = useState(false);

  const results = useMemo(() => getProperties(filters), [filters]);

  const hasFilters = Object.values(filters).some((v) => v !== '');

  const FilterPanel = () => (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <label htmlFor="filter-search" className="block text-sm font-semibold text-navy-800 mb-2">Search</label>
        <input
          id="filter-search"
          type="text"
          placeholder="Search properties..."
          value={filters.search}
          onChange={(e) => setFilter('search', e.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm focus:border-gold-400 focus:ring-0"
        />
      </div>

      {/* Property Type */}
      <div>
        <label htmlFor="filter-type" className="block text-sm font-semibold text-navy-800 mb-2">Property Type</label>
        <select
          id="filter-type"
          value={filters.type}
          onChange={(e) => setFilter('type', e.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm focus:border-gold-400 focus:ring-0"
        >
          <option value="">All Types</option>
          {propertyTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* Status */}
      <div>
        <label htmlFor="filter-status" className="block text-sm font-semibold text-navy-800 mb-2">Status</label>
        <select
          id="filter-status"
          value={filters.status}
          onChange={(e) => setFilter('status', e.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm focus:border-gold-400 focus:ring-0"
        >
          <option value="">All Statuses</option>
          {propertyStatuses.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* City */}
      <div>
        <label htmlFor="filter-city" className="block text-sm font-semibold text-navy-800 mb-2">City</label>
        <select
          id="filter-city"
          value={filters.city}
          onChange={(e) => setFilter('city', e.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm focus:border-gold-400 focus:ring-0"
        >
          <option value="">All Cities</option>
          {cities.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Bedrooms */}
      <div>
        <label htmlFor="filter-bedrooms" className="block text-sm font-semibold text-navy-800 mb-2">Min Bedrooms</label>
        <select
          id="filter-bedrooms"
          value={filters.bedrooms}
          onChange={(e) => setFilter('bedrooms', e.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm focus:border-gold-400 focus:ring-0"
        >
          <option value="">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
      </div>

      {/* Price Range */}
      <div>
        <label htmlFor="filter-maxPrice" className="block text-sm font-semibold text-navy-800 mb-2">Max Budget</label>
        <select
          id="filter-maxPrice"
          value={filters.maxPrice}
          onChange={(e) => setFilter('maxPrice', e.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm focus:border-gold-400 focus:ring-0"
        >
          <option value="">Any Budget</option>
          <option value="3000000">Up to ₹30 Lakh</option>
          <option value="5000000">Up to ₹50 Lakh</option>
          <option value="7500000">Up to ₹75 Lakh</option>
          <option value="10000000">Up to ₹1 Cr</option>
          <option value="50000000">Up to ₹5 Cr</option>
        </select>
      </div>

      {/* Clear */}
      {hasFilters && (
        <button
          onClick={clearFilters}
          className="w-full text-sm text-red-500 hover:text-red-600 font-medium py-2"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <>
      <SEO
        title="Properties"
        description="Browse premium apartments, villas, plots, and commercial properties by RK Builders & Developers across Mumbai."
        url="/properties"
        structuredData={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Properties' },
        ])}
      />

      {/* Header */}
      <section className="pt-32 pb-12 px-4 bg-navy-800">
        <div className="max-w-7xl mx-auto">
          <p className="text-gold-400 font-semibold tracking-widest uppercase text-sm mb-3">Properties</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Find Your Property</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-28 rounded-xl border border-slate-200 bg-white p-6">
              <h2 className="font-bold text-navy-800 mb-4 font-[family-name:var(--font-heading)]">Filters</h2>
              <FilterPanel />
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-slate-600">
                <strong className="text-navy-800">{results.length}</strong> properties found
              </p>

              <div className="flex items-center gap-3">
                {/* Mobile filter toggle */}
                <button
                  onClick={() => setMobileFilters(true)}
                  className="lg:hidden flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-300 text-sm text-slate-700 hover:bg-slate-50 transition-colors duration-200"
                >
                  <SlidersHorizontal size={16} />
                  Filters
                </button>

                {/* Sort */}
                <select
                  value={filters.sort}
                  onChange={(e) => setFilter('sort', e.target.value)}
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:border-gold-400 focus:ring-0"
                  aria-label="Sort properties"
                >
                  <option value="">Sort by</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                </select>

                {/* View toggle */}
                <div className="hidden sm:flex rounded-lg border border-slate-300 overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-navy-800 text-white' : 'text-slate-600 hover:bg-slate-50'} transition-colors duration-200`}
                    aria-label="Grid view"
                  >
                    <LayoutGrid size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-navy-800 text-white' : 'text-slate-600 hover:bg-slate-50'} transition-colors duration-200`}
                    aria-label="List view"
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Results */}
            {results.length > 0 ? (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-4'}>
                {results.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-slate-500 text-lg mb-4">No properties match your filters.</p>
                <Button onClick={clearFilters} variant="outline">Clear Filters</Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile Filter Drawer */}
      {mobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-navy-950/60" onClick={() => setMobileFilters(false)} />
          <div className="absolute bottom-0 left-0 right-0 max-h-[80vh] bg-white rounded-t-2xl overflow-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-navy-800 text-lg">Filters</h2>
              <button
                onClick={() => setMobileFilters(false)}
                className="p-2 rounded-lg hover:bg-slate-100 text-slate-600"
                aria-label="Close filters"
              >
                <X size={20} />
              </button>
            </div>
            <FilterPanel />
            <button
              onClick={() => setMobileFilters(false)}
              className="w-full mt-6 bg-navy-800 text-white py-3 rounded-lg font-semibold text-sm"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </>
  );
}
