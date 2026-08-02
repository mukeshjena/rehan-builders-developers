// src/pages/TermsAndConditions.jsx
import SEO from '../seo/SEO';

export default function TermsAndConditions() {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="Terms and Conditions for RK Builders & Developers website. Please read these terms carefully before using our services."
        url="/terms-and-conditions"
        noindex
      />

      <section className="pt-32 pb-12 px-4 bg-navy-800">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Terms & Conditions</h1>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto prose prose-lg prose-headings:text-navy-800 prose-headings:font-[family-name:var(--font-heading)]">
          <p className="text-slate-500 text-sm">Last updated: August 1, 2026</p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the RK Builders & Developers website, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website.
          </p>

          <h2>2. Use of Website</h2>
          <p>
            This website is provided for informational purposes about RK Builders & Developers and our real estate projects. You agree to use the website only for lawful purposes and in a way that does not infringe upon the rights of others.
          </p>

          <h2>3. Property Information</h2>
          <p>
            All property information, pricing, and specifications displayed on this website are indicative and subject to change without notice. For accurate, up-to-date information, please contact our sales team directly.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            All content on this website — including text, images, logos, designs, and graphics — is the property of RK Builders & Developers and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or modify any content without our written consent.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            RK Builders & Developers shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on any information provided herein.
          </p>

          <h2>6. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of these external sites.
          </p>

          <h2>7. Governing Law</h2>
          <p>
            These Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
          </p>

          <h2>8. Changes to Terms</h2>
          <p>
            We reserve the right to update these Terms and Conditions at any time. Changes will be effective immediately upon posting on this page.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            For any questions regarding these Terms, please contact us at:
            <br />Email: info@rkbuilders.com
            <br />Phone: +91 98765 43210
          </p>

          <p className="text-sm text-slate-400 mt-8 italic">
            Note: This is placeholder legal text. Please have it reviewed by legal counsel before publishing.
          </p>
        </div>
      </section>
    </>
  );
}
