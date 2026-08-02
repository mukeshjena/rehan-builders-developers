// src/components/layout/Header.jsx
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Building2 } from 'lucide-react';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import MobileMenu from './MobileMenu';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/properties', label: 'Properties' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/news', label: 'News' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollDirection, scrollY } = useScrollDirection();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // Apply scrolled styles if we scrolled past 20px OR if we are NOT on the homepage
  const isScrolled = scrollY > 20 || !isHomePage;
  const isHidden = scrollDirection === 'down' && scrollY > 300;

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 py-3 transition-colors duration-300 ${
          isHidden ? '-translate-y-full' : 'translate-y-0'
        } ${
          isScrolled ? 'bg-white border-b border-slate-100' : 'bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gold-400 shrink-0">
                <Building2 className="text-navy-900" size={24} />
              </div>
              <div className="ml-3 hidden sm:block">
                <span className={`font-bold text-lg font-[family-name:var(--font-heading)] ${isScrolled ? 'text-navy-800' : 'text-white'}`}>
                  RK Builders
                </span>
                <span className={`block text-[11px] font-medium tracking-wide uppercase -mt-1 ${isScrolled ? 'text-slate-500' : 'text-white/80'}`}>
                  & Developers
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-gold-500'
                        : isScrolled
                        ? 'text-slate-700 hover:text-navy-800 hover:bg-slate-50'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+919876543210"
                className={`hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border transition-colors ${
                  isScrolled
                    ? 'border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white'
                    : 'border-white text-white hover:bg-white hover:text-navy-800'
                }`}
                aria-label="Call us"
              >
                <Phone size={16} />
                +91 98765 43210
              </a>

              <button
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  isScrolled ? 'text-navy-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
}
