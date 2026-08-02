// src/pages/Contact.jsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SEO from '../seo/SEO';
import { breadcrumbSchema } from '../seo/structuredData';
import Input from '../components/common/Input';
import { submitContactForm } from '../services/contactService';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  honeypot: z.string().max(0),
});

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data) => {
    const { honeypot, ...formData } = data;
    try {
      await submitContactForm(formData);
      setSubmitStatus('success');
      reset();
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with RK Builders & Developers. Visit our office in Mumbai, call us, or send a message."
        url="/contact"
        structuredData={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Contact Us' },
        ])}
      />

      <section className="pt-32 pb-12 px-4 bg-navy-800">
        <div className="max-w-7xl mx-auto">
          <p className="text-gold-400 font-semibold tracking-widest uppercase text-sm mb-3">Contact Us</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Get in Touch</h1>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="rounded-xl border border-slate-200 p-6">
              <h2 className="font-bold text-navy-800 text-lg mb-4 font-[family-name:var(--font-heading)]">Office Address</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-gold-400 mt-1 shrink-0" />
                  <div>
                    <p className="font-medium text-navy-800">Head Office</p>
                    <p className="text-sm text-slate-600">Unit 401, RK Hub, Bandra Kurla Complex,<br />Bandra East, Mumbai, Maharashtra 400051</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={20} className="text-gold-400 mt-1 shrink-0" />
                  <div>
                    <p className="font-medium text-navy-800">Phone</p>
                    <a href="tel:+919876543210" className="text-sm text-slate-600 hover:text-gold-400 transition-colors">+91 98765 43210</a>
                    <br />
                    <a href="tel:+919876543211" className="text-sm text-slate-600 hover:text-gold-400 transition-colors">+91 98765 43211</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={20} className="text-gold-400 mt-1 shrink-0" />
                  <div>
                    <p className="font-medium text-navy-800">Email</p>
                    <a href="mailto:info@rkbuilders.com" className="text-sm text-slate-600 hover:text-gold-400 transition-colors">info@rkbuilders.com</a>
                    <br />
                    <a href="mailto:sales@rkbuilders.com" className="text-sm text-slate-600 hover:text-gold-400 transition-colors">sales@rkbuilders.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={20} className="text-gold-400 mt-1 shrink-0" />
                  <div>
                    <p className="font-medium text-navy-800">Office Hours</p>
                    <p className="text-sm text-slate-600">Mon – Sat: 9:00 AM – 7:00 PM</p>
                    <p className="text-sm text-slate-600">Sunday: By appointment only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-slate-200 h-64">
              <iframe
                title="RK Builders Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15082.350355153205!2d72.86438965!3d19.06649735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8df0b5b56ab%3A0x8085a6dbd4131562!2sBandra%20Kurla%20Complex%2C%20Bandra%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-slate-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-navy-800 mb-2 font-[family-name:var(--font-heading)]">Send Us a Message</h2>
              <p className="text-slate-500 mb-8">Have a question or want to schedule a site visit? Fill out the form and we&apos;ll get back to you within 24 hours.</p>

              {submitStatus === 'success' ? (
                <div className="p-6 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <h3 className="font-bold text-lg mb-1">Thank You!</h3>
                  <p className="text-sm">Your message has been sent. We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="sr-only" aria-hidden="true">
                    <input type="text" tabIndex={-1} {...register('honeypot')} autoComplete="off" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Input id="contact-name" label="Full Name" placeholder="Your full name" error={errors.name?.message} {...register('name')} />
                    <Input id="contact-email" label="Email Address" type="email" placeholder="email@example.com" error={errors.email?.message} {...register('email')} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Input id="contact-phone" label="Phone Number" type="tel" placeholder="+91 XXXXX XXXXX" error={errors.phone?.message} {...register('phone')} />
                    <Input id="contact-subject" label="Subject" placeholder="How can we help?" error={errors.subject?.message} {...register('subject')} />
                  </div>
                  <Input id="contact-message" label="Message" type="textarea" placeholder="Tell us more about your requirements..." error={errors.message?.message} {...register('message')} />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-navy-800 text-white px-8 py-3 rounded-lg font-semibold text-sm hover:bg-navy-700 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  {submitStatus === 'error' && (
                    <p className="text-sm text-red-500">Something went wrong. Please try again or call us directly.</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
