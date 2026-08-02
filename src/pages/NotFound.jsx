// src/pages/NotFound.jsx
import { Home } from 'lucide-react';
import SEO from '../seo/SEO';
import Button from '../components/common/Button';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" noindex />

      <section className="min-h-screen flex items-center justify-center px-4 bg-slate-50">
        <div className="text-center max-w-lg">
          <p className="text-8xl font-bold text-navy-800 font-[family-name:var(--font-heading)] mb-4">404</p>
          <h1 className="text-2xl md:text-3xl font-bold text-navy-800 mb-3">Page Not Found</h1>
          <p className="text-slate-600 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back home.
          </p>
          <Button to="/" variant="primary" size="lg">
            <Home size={18} className="mr-2" />
            Back to Home
          </Button>
        </div>
      </section>
    </>
  );
}
