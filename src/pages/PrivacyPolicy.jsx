// src/pages/PrivacyPolicy.jsx
import SEO from '../seo/SEO';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for RK Builders & Developers. Learn how we collect, use, and protect your personal information."
        url="/privacy-policy"
        noindex
      />

      <section className="pt-32 pb-12 px-4 bg-navy-800">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Privacy Policy</h1>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto prose prose-lg prose-headings:text-navy-800 prose-headings:font-[family-name:var(--font-heading)]">
          <p className="text-slate-500 text-sm">Last updated: August 1, 2026</p>

          <h2>1. Introduction</h2>
          <p>
            RK Builders & Developers (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect information that you voluntarily provide to us when you:</p>
          <ul>
            <li>Fill out a contact or enquiry form</li>
            <li>Subscribe to our newsletter</li>
            <li>Request a callback or site visit</li>
          </ul>
          <p>This may include your name, email address, phone number, and any message you provide.</p>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your enquiries and requests</li>
            <li>Send you property updates and newsletters (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>4. Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality obligations.
          </p>

          <h2>5. Cookies</h2>
          <p>
            Our website may use cookies and similar technologies to enhance your browsing experience and analyse site traffic. You can control cookies through your browser settings.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We implement appropriate technical and organisational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2>7. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at info@rkbuilders.com.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
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
