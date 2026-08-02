// src/components/layout/MobileMenu.jsx
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { X } from 'lucide-react';

const secondaryLinks = [
  { to: '/gallery', label: 'Gallery' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/faq', label: 'FAQ' },
  { to: '/emi-calculator', label: 'EMI Calculator' },
  { to: '/careers', label: 'Careers' },
];

export default function MobileMenu({ isOpen, onClose, links }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-navy-950/60 backdrop-blur-sm z-50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Slide-in Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-full bg-white z-50 transform transition-transform duration-300 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200">
          <span className="font-bold text-navy-800 font-[family-name:var(--font-heading)]">Menu</span>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors duration-200"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="p-5" aria-label="Mobile navigation">
          <div className="space-y-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={onClose}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-navy-50 text-gold-400'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <hr className="my-4 border-slate-200" />

          <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            More
          </p>
          <div className="space-y-1">
            {secondaryLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={onClose}
                className={({ isActive }) =>
                  `block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-navy-50 text-gold-400'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Contact */}
        <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-slate-200 bg-slate-50">
          <a
            href="tel:+919876543210"
            className="block w-full text-center px-4 py-3 bg-navy-800 text-white rounded-lg font-semibold text-sm hover:bg-navy-700 transition-colors duration-200"
          >
            Call: +91 98765 43210
          </a>
        </div>
      </div>
    </>
  );
}
