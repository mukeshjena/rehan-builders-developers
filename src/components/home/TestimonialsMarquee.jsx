// src/components/home/TestimonialsMarquee.jsx
import { motion } from 'framer-motion';
import { testimonials } from '../../data/testimonials';
import TestimonialCard from '../common/TestimonialCard';

export default function TestimonialsMarquee() {
  // Duplicate array for seamless looping
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <div className="relative overflow-hidden py-10 w-full flex items-center">
      {/* Left/Right Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10" />

      <motion.div
        className="flex gap-8 px-4"
        animate={{ x: [0, -2000] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 30, // Adjust speed
        }}
        // Stop animation on hover
        whileHover={{ animationPlayState: 'paused' }} 
      >
        {marqueeItems.map((testimonial, idx) => (
          <div key={`${testimonial.id}-${idx}`} className="w-[350px] shrink-0">
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
