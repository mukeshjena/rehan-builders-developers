// src/services/contactService.js

/**
 * Submit contact form data.
 * Currently logs to console — replace with API call, EmailJS, or Formspree.
 */
export async function submitContactForm(data) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // In production, replace with:
  // return api.post('/contact', data);
  // or use EmailJS / Formspree

  console.log('Contact form submitted:', data);
  return { success: true, message: 'Thank you for your message! We will get back to you soon.' };
}

/**
 * Submit property enquiry form data.
 */
export async function submitEnquiryForm(data) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log('Enquiry form submitted:', data);
  return { success: true, message: 'Thank you for your enquiry! Our team will contact you shortly.' };
}
