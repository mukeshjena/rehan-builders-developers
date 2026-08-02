// src/pages/ProjectDetail.jsx
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '../seo/SEO';
import { breadcrumbSchema } from '../seo/structuredData';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [currentImage, setCurrentImage] = useState(0);

  if (!project) {
    return (
      <div className="pt-32 pb-20 text-center px-4">
        <h1 className="text-3xl font-bold text-navy-800 mb-4">Project Not Found</h1>
        <p className="text-slate-600 mb-6">The project you&apos;re looking for doesn&apos;t exist.</p>
        <Button to="/projects">Browse Projects</Button>
      </div>
    );
  }

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % project.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);

  return (
    <>
      <SEO
        title={project.title}
        description={project.description}
        url={`/projects/${project.slug}`}
        image={project.image}
        structuredData={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Projects', url: '/projects' },
          { name: project.title },
        ])}
      />

      {/* Breadcrumb */}
      <div className="pt-32 pb-4 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-navy-800 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-navy-800 transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-navy-800 font-medium">{project.title}</span>
          </nav>
        </div>
      </div>

      <article className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Badge status={project.status} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-navy-800 mb-2">{project.title}</h1>
            <p className="flex items-center gap-1.5 text-slate-500">
              <MapPin size={16} />
              {project.location}
            </p>
          </div>

          {/* Gallery */}
          <div className="relative rounded-xl overflow-hidden border border-slate-200 mb-8">
            <img
              src={project.images[currentImage]}
              alt={`${project.title} - Image ${currentImage + 1}`}
              className="w-full aspect-[16/9] object-cover"
            />
            {project.images.length > 1 && (
              <>
                <button onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white" aria-label="Previous image">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white" aria-label="Next image">
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {project.highlights.map((h) => (
              <div key={h} className="p-4 rounded-xl border border-slate-200 text-center">
                <p className="font-bold text-navy-800 text-sm">{h}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">About This Project</h2>
            <p className="text-slate-600 leading-relaxed">{project.description}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="p-4 rounded-xl border border-slate-200 text-center">
              <p className="text-2xl font-bold text-navy-800">{project.totalUnits}</p>
              <p className="text-xs text-slate-500">Total Units</p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 text-center">
              <p className="text-2xl font-bold text-navy-800">{project.unitsSold}</p>
              <p className="text-xs text-slate-500">Units Sold</p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 text-center">
              <p className="text-2xl font-bold text-navy-800">{project.area}</p>
              <p className="text-xs text-slate-500">Total Area</p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200 text-center">
              <p className="text-2xl font-bold text-navy-800">{project.completedYear || project.expectedCompletion || 'TBA'}</p>
              <p className="text-xs text-slate-500">{project.completedYear ? 'Completed' : 'Expected'}</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-navy-800 mb-6">Project Timeline</h2>
            <div className="space-y-4">
              {project.timeline.map((t, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-16 shrink-0 text-right">
                    <span className="font-bold text-navy-800">{t.year}</span>
                  </div>
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-gold-400 mt-1.5" />
                    {i < project.timeline.length - 1 && (
                      <div className="absolute left-1.5 top-4 bottom-0 w-px bg-slate-200 -translate-x-1/2 h-8" />
                    )}
                  </div>
                  <p className="text-slate-600 text-sm pt-0.5">{t.event}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-xl bg-navy-800 p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Interested in {project.title}?</h2>
            <p className="text-white/70 mb-6">Contact us for more details, site visit, or booking.</p>
            <Button to="/contact" variant="secondary">Contact Us</Button>
          </div>
        </div>
      </article>
    </>
  );
}
