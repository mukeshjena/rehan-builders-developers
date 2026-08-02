// src/routes/AppRouter.jsx
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../components/layout/Layout';

// Lazy-loaded pages for code splitting
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Properties = lazy(() => import('../pages/Properties'));
const PropertyDetail = lazy(() => import('../pages/PropertyDetail'));
const Projects = lazy(() => import('../pages/Projects'));
const ProjectDetail = lazy(() => import('../pages/ProjectDetail'));
const News = lazy(() => import('../pages/News'));
const Article = lazy(() => import('../pages/Article'));
const Contact = lazy(() => import('../pages/Contact'));
const Gallery = lazy(() => import('../pages/Gallery'));
const Testimonials = lazy(() => import('../pages/Testimonials'));
const FAQ = lazy(() => import('../pages/FAQ'));
const EMICalculator = lazy(() => import('../pages/EMICalculator'));
const Careers = lazy(() => import('../pages/Careers'));
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('../pages/TermsAndConditions'));
const NotFound = lazy(() => import('../pages/NotFound'));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-3 border-slate-200 border-t-navy-800 rounded-full animate-spin" />
        <p className="text-sm text-slate-500">Loading...</p>
      </div>
    </div>
  );
}

function SuspenseWrapper({ children }) {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <SuspenseWrapper><Home /></SuspenseWrapper> },
      { path: 'about', element: <SuspenseWrapper><About /></SuspenseWrapper> },
      { path: 'properties', element: <SuspenseWrapper><Properties /></SuspenseWrapper> },
      { path: 'properties/:slug', element: <SuspenseWrapper><PropertyDetail /></SuspenseWrapper> },
      { path: 'projects', element: <SuspenseWrapper><Projects /></SuspenseWrapper> },
      { path: 'projects/:slug', element: <SuspenseWrapper><ProjectDetail /></SuspenseWrapper> },
      { path: 'news', element: <SuspenseWrapper><News /></SuspenseWrapper> },
      { path: 'news/:slug', element: <SuspenseWrapper><Article /></SuspenseWrapper> },
      { path: 'contact', element: <SuspenseWrapper><Contact /></SuspenseWrapper> },
      { path: 'gallery', element: <SuspenseWrapper><Gallery /></SuspenseWrapper> },
      { path: 'testimonials', element: <SuspenseWrapper><Testimonials /></SuspenseWrapper> },
      { path: 'faq', element: <SuspenseWrapper><FAQ /></SuspenseWrapper> },
      { path: 'emi-calculator', element: <SuspenseWrapper><EMICalculator /></SuspenseWrapper> },
      { path: 'careers', element: <SuspenseWrapper><Careers /></SuspenseWrapper> },
      { path: 'privacy-policy', element: <SuspenseWrapper><PrivacyPolicy /></SuspenseWrapper> },
      { path: 'terms-and-conditions', element: <SuspenseWrapper><TermsAndConditions /></SuspenseWrapper> },
      { path: '*', element: <SuspenseWrapper><NotFound /></SuspenseWrapper> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
