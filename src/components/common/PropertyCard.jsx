// src/components/common/PropertyCard.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, BedDouble, Bath, Maximize } from 'lucide-react';
import Badge from './Badge';
import { formatPrice, formatArea } from '../../utils/formatters';

export default function PropertyCard({ property }) {
  return (
    <Link
      to={`/properties/${property.slug}`}
      className="block"
    >
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={{
          rest: { y: 0 },
          hover: { y: -4 }
        }}
        className="rounded-2xl border border-slate-200 bg-white overflow-hidden"
      >
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.img
            src={property.image}
            alt={property.title}
            loading="lazy"
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.1 }
            }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3">
            <Badge status={property.status} />
          </div>
          <div className="absolute bottom-3 right-3 bg-navy-800 text-white px-3 py-1.5 rounded-lg text-sm font-bold">
            {formatPrice(property.price)}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <motion.h3 
            variants={{
              rest: { color: 'var(--color-navy-800)' },
              hover: { color: 'var(--color-gold-400)' }
            }}
            className="text-lg font-bold mb-1 font-[family-name:var(--font-heading)]"
          >
            {property.title}
          </motion.h3>
          <p className="flex items-center gap-1.5 text-sm text-slate-500 mb-4">
            <MapPin size={14} />
            {property.location}
          </p>

          {/* Stats */}
          <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
            {property.bedrooms > 0 && (
              <div className="flex items-center gap-1.5 text-sm text-slate-600">
                <BedDouble size={16} className="text-slate-400" />
                <span>{property.bedrooms} Beds</span>
              </div>
            )}
            {property.bathrooms > 0 && (
              <div className="flex items-center gap-1.5 text-sm text-slate-600">
                <Bath size={16} className="text-slate-400" />
                <span>{property.bathrooms} Baths</span>
              </div>
            )}
            <div className="flex items-center gap-1.5 text-sm text-slate-600">
              <Maximize size={16} className="text-slate-400" />
              <span>{formatArea(property.area)}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
