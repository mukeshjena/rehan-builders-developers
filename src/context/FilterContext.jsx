// src/context/FilterContext.jsx
import { createContext, useContext, useMemo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

const FilterContext = createContext(null);

export function FilterProvider({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = useMemo(() => ({
    type: searchParams.get('type') || '',
    status: searchParams.get('status') || '',
    city: searchParams.get('city') || '',
    minPrice: searchParams.get('minPrice') || '',
    maxPrice: searchParams.get('maxPrice') || '',
    bedrooms: searchParams.get('bedrooms') || '',
    search: searchParams.get('search') || '',
    sort: searchParams.get('sort') || '',
  }), [searchParams]);

  const setFilter = useCallback((key, value) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (value) {
        next.set(key, value);
      } else {
        next.delete(key);
      }
      return next;
    });
  }, [setSearchParams]);

  const setMultipleFilters = useCallback((newFilters) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      Object.entries(newFilters).forEach(([key, value]) => {
        if (value) {
          next.set(key, value);
        } else {
          next.delete(key);
        }
      });
      return next;
    });
  }, [setSearchParams]);

  const clearFilters = useCallback(() => {
    setSearchParams(new URLSearchParams());
  }, [setSearchParams]);

  return (
    <FilterContext.Provider value={{ filters, setFilter, setMultipleFilters, clearFilters }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilters() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilters must be used within a FilterProvider');
  }
  return context;
}
