// src/components/common/TestimonialCard.jsx
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { getInitials } from '../../utils/formatters';

export default function TestimonialCard({ testimonial }) {
  return (
    <motion.div 
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{
        rest: { y: 0 },
        hover: { y: -4 }
      }}
      className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col h-full"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < testimonial.rating ? 'fill-gold-400 text-gold-400' : 'text-slate-200'}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-slate-600 leading-relaxed mb-6 flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
        {testimonial.avatar ? (
          <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-navy-800 text-white flex items-center justify-center text-sm font-semibold">
            {getInitials(testimonial.name)}
          </div>
        )}
        <div>
          <p className="font-semibold text-navy-800 text-sm">{testimonial.name}</p>
          <p className="text-slate-500 text-xs">{testimonial.location}</p>
        </div>
      </div>
    </motion.div>
  );
}
