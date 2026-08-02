// src/components/common/ProjectCard.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Badge from './Badge';

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
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
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            loading="lazy"
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.1 }
            }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3">
            <Badge status={project.status} />
          </div>
        </div>

        <div className="p-5">
          <motion.h3
            variants={{
              rest: { color: 'var(--color-navy-800)' },
              hover: { color: 'var(--color-gold-400)' }
            }}
            className="text-lg font-bold mb-1 font-[family-name:var(--font-heading)]"
          >
            {project.title}
          </motion.h3>
          <p className="flex items-center gap-1.5 text-sm text-slate-500 mb-3">
            <MapPin size={14} />
            {project.location}
          </p>

          <div className="flex items-center gap-4 pt-3 border-t border-slate-100 text-sm text-slate-600">
            <span><strong className="text-navy-800">{project.totalUnits}</strong> Units</span>
            <span><strong className="text-navy-800">{project.area}</strong></span>
            {project.status === 'Completed' && (
              <span className="ml-auto text-emerald-600 font-semibold">Delivered</span>
            )}
            {project.expectedCompletion && (
              <span className="ml-auto text-amber-600 font-medium text-xs">Est. {project.expectedCompletion}</span>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
