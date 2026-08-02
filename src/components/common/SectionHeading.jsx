// src/components/common/SectionHeading.jsx

export default function SectionHeading({ label, title, description, align = 'center', className = '' }) {
  const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-2xl mb-12 ${alignClasses} ${className}`}>
      {label && (
        <span className="inline-block text-gold-400 font-semibold text-sm tracking-widest uppercase mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">{title}</h2>
      {description && (
        <p className="text-slate-600 text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
}
