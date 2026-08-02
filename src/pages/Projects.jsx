// src/pages/Projects.jsx
import { useState, useMemo } from 'react';
import SEO from '../seo/SEO';
import { breadcrumbSchema } from '../seo/structuredData';
import SectionHeading from '../components/common/SectionHeading';
import ProjectCard from '../components/common/ProjectCard';
import { projects, projectStatuses } from '../data/projects';

export default function Projects() {
  const [activeStatus, setActiveStatus] = useState('All');

  const filtered = useMemo(
    () => activeStatus === 'All' ? projects : projects.filter((p) => p.status === activeStatus),
    [activeStatus]
  );

  return (
    <>
      <SEO
        title="Our Projects"
        description="Explore completed, ongoing, and upcoming residential and commercial projects by RK Builders & Developers across Mumbai."
        url="/projects"
        structuredData={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Projects' },
        ])}
      />

      <section className="pt-32 pb-12 px-4 bg-navy-800">
        <div className="max-w-7xl mx-auto">
          <p className="text-gold-400 font-semibold tracking-widest uppercase text-sm mb-3">Our Projects</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Landmark Developments</h1>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Filter Tabs */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {['All', ...projectStatuses].map((status) => (
              <button
                key={status}
                onClick={() => setActiveStatus(status)}
                className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors duration-200 ${
                  activeStatus === status
                    ? 'bg-navy-800 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-slate-500 py-12">No projects in this category yet.</p>
          )}
        </div>
      </section>
    </>
  );
}
