// src/components/common/Input.jsx
import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const Input = forwardRef(function Input(
  { label, id, error, type = 'text', className = '', ...props },
  ref
) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      {type === 'textarea' ? (
        <motion.textarea
          ref={ref}
          id={id}
          whileFocus={{ scale: 1.01, borderColor: 'var(--color-gold-400)' }}
          className={`w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none ${error ? 'border-red-400' : ''} ${className}`}
          rows={5}
          {...props}
        />
      ) : type === 'select' ? (
        <motion.select
          ref={ref}
          id={id}
          whileFocus={{ scale: 1.01, borderColor: 'var(--color-gold-400)' }}
          className={`w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 focus:outline-none ${error ? 'border-red-400' : ''} ${className}`}
          {...props}
        />
      ) : (
        <motion.input
          ref={ref}
          id={id}
          type={type}
          whileFocus={{ scale: 1.01, borderColor: 'var(--color-gold-400)' }}
          className={`w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none ${error ? 'border-red-400' : ''} ${className}`}
          {...props}
        />
      )}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
});

export default Input;
