// src/components/common/Button.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const variants = {
  primary: 'bg-navy-800 text-white hover:bg-navy-700 border border-navy-800',
  secondary: 'bg-gold-400 text-navy-900 hover:bg-gold-500 border border-gold-400',
  outline: 'bg-transparent text-navy-800 border border-navy-800 hover:bg-navy-800 hover:text-white',
  'outline-white': 'bg-transparent text-white border border-white hover:bg-white hover:text-navy-800',
  ghost: 'bg-transparent text-navy-800 hover:bg-slate-100 border border-transparent',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  className = '',
  disabled = false,
  type = 'button',
  onClick,
  'aria-label': ariaLabel,
  ...props
}) {
  const baseClasses = `inline-flex items-center justify-center font-semibold rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <MotionLink 
        to={to} 
        className={baseClasses} 
        aria-label={ariaLabel} 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <motion.a 
        href={href} 
        className={baseClasses} 
        aria-label={ariaLabel} 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={baseClasses}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      {...props}
    >
      {children}
    </motion.button>
  );
}
