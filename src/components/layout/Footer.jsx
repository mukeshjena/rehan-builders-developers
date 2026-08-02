// src/components/layout/Footer.jsx
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink, Building2 } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const quickLinks = [
  { to: '/properties', label: 'Properties' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About Us' },
  { to: '/news', label: 'News & Blog' },
  { to: '/contact', label: 'Contact Us' },
];

const secondaryLinks = [
  { to: '/gallery', label: 'Gallery' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/faq', label: 'FAQ' },
  { to: '/emi-calculator', label: 'EMI Calculator' },
  { to: '/careers', label: 'Careers' },
];

const legalLinks = [
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms-and-conditions', label: 'Terms & Conditions' },
];

const socialLinks = [
  { href: 'https://facebook.com/rkbuildersanddevelopers', icon: FaFacebook, fullLabel: 'Facebook' },
  { href: 'https://instagram.com/rkbuildersanddevelopers', icon: FaInstagram, fullLabel: 'Instagram' },
  { href: 'https://linkedin.com/company/rkbuildersanddevelopers', icon: FaLinkedin, fullLabel: 'LinkedIn' },
  { href: 'https://youtube.com/@rkbuildersanddevelopers', icon: FaYoutube, fullLabel: 'YouTube' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gold-400 shrink-0">
                <Building2 className="text-navy-900" size={28} />
              </div>
              <div>
                <span className="font-bold text-lg text-white font-[family-name:var(--font-heading)]">RK Builders</span>
                <span className="block text-xs text-white/60 -mt-1">& Developers</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Building dreams into reality since 2026. Premium residential and commercial properties across Mumbai.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ href, icon: Icon, fullLabel }) => (
                <a
                  key={fullLabel}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:bg-gold-400 hover:text-navy-900 transition-colors duration-200"
                  aria-label={fullLabel}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-slate-400 hover:text-gold-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-white">Explore</h3>
            <ul className="space-y-2.5">
              {secondaryLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-slate-400 hover:text-gold-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin size={20} className="text-gold-400 mt-1 shrink-0" />
                <span>Unit 401, RK Hub, Bandra Kurla Complex,<br />Bandra East, Mumbai, Maharashtra 400051</span>
              </li>
              <li>
                <a
                  href="tel:+917738434041"
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-gold-400 transition-colors duration-200"
                >
                  <Phone size={18} className="text-gold-400 shrink-0" />
                  +91 77384 34041
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@rkbuildersanddevelopers.in"
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-gold-400 transition-colors duration-200"
                >
                  <Mail size={18} className="text-gold-400 shrink-0" />
                  info@rkbuildersanddevelopers.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} RK Builders & Developers. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-slate-500 hover:text-gold-400 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
