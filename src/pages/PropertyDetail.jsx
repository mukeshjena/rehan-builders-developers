// src/pages/PropertyDetail.jsx
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  MapPin, BedDouble, Bath, Maximize, ChevronLeft, ChevronRight as ChevronRightIcon,
  Check, Download, Phone
} from 'lucide-react';
import SEO from '../seo/SEO';
import { realEstateListingSchema, breadcrumbSchema } from '../seo/structuredData';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import Input from '../components/common/Input';
import PropertyCard from '../components/common/PropertyCard';
import { getPropertyBySlug, getRelatedProperties } from '../services/propertyService';
import { submitEnquiryForm } from '../services/contactService';
import { formatPrice, formatArea } from '../utils/formatters';

const enquirySchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  message: z.string().min(5, 'Please enter your message'),
  honeypot: z.string().max(0), // spam trap
});

export default function PropertyDetail() {
  const { slug } = useParams();
  const property = getPropertyBySlug(slug);
  const [currentImage, setCurrentImage] = useState(0);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(enquirySchema),
    defaultValues: { message: property ? `I am interested in ${property.title}. Please share more details.` : '' },
  });

  if (!property) {
    return (
      <div className="pt-32 pb-20 text-center px-4">
        <h1 className="text-3xl font-bold text-navy-800 mb-4">Property Not Found</h1>
        <p className="text-slate-600 mb-6">The property you&apos;re looking for doesn&apos;t exist.</p>
        <Button to="/properties">Browse Properties</Button>
      </div>
    );
  }

  const related = getRelatedProperties(slug, property.type);

  const onSubmit = async (data) => {
    const { honeypot, ...formData } = data;
    try {
      await submitEnquiryForm({ ...formData, propertyTitle: property.title, propertySlug: property.slug });
      setSubmitStatus('success');
      reset();
    } catch {
      setSubmitStatus('error');
    }
  };

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % property.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length);

  return (
    <>
      <SEO
        title={property.title}
        description={property.description}
        url={`/properties/${property.slug}`}
        image={property.image}
        structuredData={[
          realEstateListingSchema(property),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Properties', url: '/properties' },
            { name: property.title },
          ]),
        ]}
      />

      {/* Breadcrumb */}
      <div className="pt-32 pb-4 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-navy-800 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/properties" className="hover:text-navy-800 transition-colors">Properties</Link>
            <span>/</span>
            <span className="text-navy-800 font-medium">{property.title}</span>
          </nav>
        </div>
      </div>

      <article className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Badge status={property.status} />
                <span className="text-sm text-slate-500">{property.type}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-navy-800">{property.title}</h1>
              <p className="flex items-center gap-1.5 text-slate-500 mt-2">
                <MapPin size={16} />
                {property.location}
              </p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-navy-800 font-[family-name:var(--font-heading)]">
                {formatPrice(property.price)}
              </p>
              <p className="text-sm text-slate-500">Onwards</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <div className="relative rounded-xl overflow-hidden border border-slate-200">
                <img
                  src={property.images[currentImage]}
                  alt={`${property.title} - Image ${currentImage + 1}`}
                  className="w-full aspect-[16/10] object-cover"
                />
                {property.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRightIcon size={20} />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                      {property.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentImage(i)}
                          className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentImage ? 'bg-white' : 'bg-white/50'}`}
                          aria-label={`View image ${i + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {property.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {property.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      className={`shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-colors ${i === currentImage ? 'border-gold-400' : 'border-slate-200'}`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Key Details */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {property.bedrooms > 0 && (
                  <div className="p-4 rounded-xl border border-slate-200 text-center">
                    <BedDouble size={24} className="text-gold-400 mx-auto mb-2" />
                    <p className="text-lg font-bold text-navy-800">{property.bedrooms}</p>
                    <p className="text-xs text-slate-500">Bedrooms</p>
                  </div>
                )}
                {property.bathrooms > 0 && (
                  <div className="p-4 rounded-xl border border-slate-200 text-center">
                    <Bath size={24} className="text-gold-400 mx-auto mb-2" />
                    <p className="text-lg font-bold text-navy-800">{property.bathrooms}</p>
                    <p className="text-xs text-slate-500">Bathrooms</p>
                  </div>
                )}
                <div className="p-4 rounded-xl border border-slate-200 text-center">
                  <Maximize size={24} className="text-gold-400 mx-auto mb-2" />
                  <p className="text-lg font-bold text-navy-800">{formatArea(property.area)}</p>
                  <p className="text-xs text-slate-500">Area</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 text-center">
                  <div className="w-6 h-6 rounded-full bg-gold-400 mx-auto mb-2 flex items-center justify-center text-white text-xs font-bold">₹</div>
                  <p className="text-lg font-bold text-navy-800">{property.priceLabel}</p>
                  <p className="text-xs text-slate-500">Price</p>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-navy-800 mb-4">About This Property</h2>
                <p className="text-slate-600 leading-relaxed">{property.description}</p>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="text-2xl font-bold text-navy-800 mb-4">Amenities</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {property.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2 text-sm text-slate-700">
                      <Check size={16} className="text-emerald-500 shrink-0" />
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>

              {/* Floor Plan */}
              {property.floorPlan && (
                <div>
                  <h2 className="text-2xl font-bold text-navy-800 mb-4">Floor Plan</h2>
                  <div className="rounded-xl border border-slate-200 overflow-hidden">
                    <img src={property.floorPlan} alt={`${property.title} floor plan`} className="w-full" />
                  </div>
                </div>
              )}
            </div>

            {/* Right Column — Enquiry Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 rounded-xl border border-slate-200 bg-white p-6">
                <h2 className="text-xl font-bold text-navy-800 mb-1 font-[family-name:var(--font-heading)]">
                  Enquire About This Property
                </h2>
                <p className="text-sm text-slate-500 mb-6">Fill the form and our team will contact you.</p>

                {submitStatus === 'success' ? (
                  <div className="p-4 rounded-lg bg-emerald-50 text-emerald-700 text-sm border border-emerald-200">
                    Thank you! Our team will contact you shortly about {property.title}.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="sr-only" aria-hidden="true">
                      <input type="text" tabIndex={-1} {...register('honeypot')} autoComplete="off" />
                    </div>
                    <Input id="enquiry-name" label="Your Name" placeholder="Full name" error={errors.name?.message} {...register('name')} />
                    <Input id="enquiry-email" label="Email" type="email" placeholder="email@example.com" error={errors.email?.message} {...register('email')} />
                    <Input id="enquiry-phone" label="Phone" type="tel" placeholder="+91 XXXXX XXXXX" error={errors.phone?.message} {...register('phone')} />
                    <Input id="enquiry-message" label="Message" type="textarea" error={errors.message?.message} {...register('message')} />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-navy-800 text-white py-3 rounded-lg font-semibold text-sm hover:bg-navy-700 transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                    </button>

                    {submitStatus === 'error' && (
                      <p className="text-sm text-red-500 text-center">Something went wrong. Please try again.</p>
                    )}
                  </form>
                )}

                <div className="mt-6 pt-6 border-t border-slate-200 space-y-3">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-navy-800 text-navy-800 font-semibold text-sm hover:bg-navy-800 hover:text-white transition-colors"
                  >
                    <Phone size={16} />
                    Call: +91 98765 43210
                  </a>
                  {property.floorPlan && (
                    <a
                      href={property.floorPlan}
                      download
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
                    >
                      <Download size={16} />
                      Download Brochure
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Related Properties */}
          {related.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-navy-800 mb-6">Similar Properties</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((p) => (
                  <PropertyCard key={p.id} property={p} />
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </>
  );
}
