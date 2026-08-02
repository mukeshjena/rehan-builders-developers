// src/pages/Careers.jsx
import { Briefcase } from 'lucide-react';
import SEO from '../seo/SEO';
import { breadcrumbSchema } from '../seo/structuredData';
import Button from '../components/common/Button';

const openPositions = []; // No open positions currently — add objects like { title, department, location, type } when available

export default function Careers() {
  return (
    <>
      <SEO
        title="Careers"
        description="Join the RK Builders & Developers team. Explore career opportunities in real estate development, construction, sales, and more."
        url="/careers"
        structuredData={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Careers' },
        ])}
      />

      <section className="pt-32 pb-12 px-4 bg-navy-800">
        <div className="max-w-7xl mx-auto">
          <p className="text-gold-400 font-semibold tracking-widest uppercase text-sm mb-3">Careers</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Join Our Team</h1>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">Work at RK Builders & Developers</h2>
            <p className="text-slate-600 leading-relaxed">
              We&apos;re always looking for talented, passionate people to join our growing team. At RK Builders & Developers, you&apos;ll work on meaningful projects that shape communities and create homes families love.
            </p>
          </div>

          {openPositions.length > 0 ? (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-navy-800">Open Positions</h3>
              {openPositions.map((pos, i) => (
                <div key={i} className="rounded-xl border border-slate-200 p-5 flex items-center justify-between hover:border-gold-400 transition-colors">
                  <div>
                    <h4 className="font-bold text-navy-800">{pos.title}</h4>
                    <p className="text-sm text-slate-500">{pos.department} · {pos.location} · {pos.type}</p>
                  </div>
                  <Button to="/contact" size="sm">Apply</Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 rounded-xl border border-dashed border-slate-300 bg-slate-50">
              <Briefcase size={48} className="text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-navy-800 mb-2">No Open Positions Right Now</h3>
              <p className="text-slate-500 mb-6 max-w-md mx-auto">
                We don&apos;t have any openings at the moment, but we&apos;re always interested in hearing from talented individuals. Send us your resume and we&apos;ll keep it on file.
              </p>
              <Button to="/contact" variant="outline">Send Your Resume</Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
