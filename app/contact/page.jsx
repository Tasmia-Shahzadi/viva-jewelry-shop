'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#faf8f6] pt-16">
      {/* Hero Section */}
      <div 
        className="relative py-20 md:py-28 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f6] via-transparent to-transparent"></div>
        <div className="relative max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <div className="inline-block px-6 py-1.5 border border-[#c5a059]/40 bg-[#c5a059]/10 backdrop-blur-sm text-[#c5a059] text-[10px] tracking-[0.4em] uppercase font-light mb-4">
            Get in Touch
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-white mt-3 tracking-wide">
            Contact <span className="text-[#c5a059]">Us</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base font-light mt-4 tracking-wider max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you. Reach out to us for any inquiries, custom orders, or assistance.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="w-16 h-[1px] bg-[#c5a059]"></span>
            <span className="text-[#c5a059] text-sm animate-pulse">✦</span>
            <span className="w-16 h-[1px] bg-[#c5a059]"></span>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 -mt-8 relative z-10">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-[#c5a059]/20 to-[#c5a059]/5 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-[#c5a059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 className="font-serif text-xl font-light text-gray-800">Visit Us</h4>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              123 Luxury Avenue,<br />
              Diamond District, NYC 10001
            </p>
            <div className="mt-4 w-12 h-[1px] bg-[#c5a059] group-hover:w-20 transition-all"></div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-[#c5a059]/20 to-[#c5a059]/5 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-[#c5a059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h4 className="font-serif text-xl font-light text-gray-800">Call Us</h4>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              +1 (800) 123-4567<br />
              Mon-Fri: 9AM - 8PM EST
            </p>
            <div className="mt-4 w-12 h-[1px] bg-[#c5a059] group-hover:w-20 transition-all"></div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-[#c5a059]/20 to-[#c5a059]/5 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-[#c5a059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="font-serif text-xl font-light text-gray-800">Email Us</h4>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              info@vivajewelry.com<br />
              support@vivajewelry.com
            </p>
            <div className="mt-4 w-12 h-[1px] bg-[#c5a059] group-hover:w-20 transition-all"></div>
          </div>
        </div>

        {/* Contact Form & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="mb-8">
              <h3 className="text-3xl font-serif font-light text-gray-800">Send a Message</h3>
              <div className="w-16 h-[1px] bg-[#c5a059] mt-2"></div>
              <p className="text-gray-500 text-sm mt-3">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>
            
            {isSubmitted ? (
              <div className="bg-gradient-to-r from-[#c5a059]/10 to-[#c5a059]/5 border border-[#c5a059]/30 rounded-xl p-8 text-center">
                <div className="w-20 h-20 bg-[#c5a059] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#c5a059]/30">
                  <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-2xl font-serif font-light text-gray-800">Message Sent!</h4>
                <p className="text-gray-500 text-sm mt-2">Thank you for reaching out. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-gray-500 tracking-wider uppercase block mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3.5 bg-[#faf8f6] border border-gray-200 focus:border-[#c5a059] focus:ring-2 focus:ring-[#c5a059]/20 outline-none rounded-xl text-sm transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 tracking-wider uppercase block mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3.5 bg-[#faf8f6] border border-gray-200 focus:border-[#c5a059] focus:ring-2 focus:ring-[#c5a059]/20 outline-none rounded-xl text-sm transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-500 tracking-wider uppercase block mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 bg-[#faf8f6] border border-gray-200 focus:border-[#c5a059] focus:ring-2 focus:ring-[#c5a059]/20 outline-none rounded-xl text-sm transition"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 tracking-wider uppercase block mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-3.5 bg-[#faf8f6] border border-gray-200 focus:border-[#c5a059] focus:ring-2 focus:ring-[#c5a059]/20 outline-none rounded-xl text-sm transition resize-none"
                    placeholder="Write your message here..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#c5a059] text-black text-sm tracking-widest uppercase font-medium hover:bg-[#d4b06a] transition-all rounded-xl shadow-lg shadow-[#c5a059]/20 hover:shadow-[#c5a059]/30 hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Map & Location Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Map */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="relative w-full h-[280px] bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bb7af8d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1644262070686!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Store Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h4 className="font-serif text-lg font-light text-gray-800 mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#c5a059]/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#c5a059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Store Hours
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2.5 border-b border-gray-50">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="text-gray-800 font-medium">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-gray-50">
                  <span className="text-gray-600">Saturday</span>
                  <span className="text-gray-800 font-medium">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2.5">
                  <span className="text-gray-600">Sunday</span>
                  <span className="text-[#c5a059] font-medium">Closed</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h4 className="font-serif text-lg font-light text-gray-800 mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#c5a059]/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#c5a059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                  </svg>
                </div>
                Follow Us
              </h4>
              <div className="flex gap-3 flex-wrap">
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-[#c5a059]/20 to-[#c5a059]/5 rounded-full flex items-center justify-center hover:bg-[#c5a059] transition-all duration-300 group hover:scale-110 shadow-sm hover:shadow-lg">
                  <span className="text-[#c5a059] group-hover:text-white transition-colors font-bold text-sm">IG</span>
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-[#c5a059]/20 to-[#c5a059]/5 rounded-full flex items-center justify-center hover:bg-[#c5a059] transition-all duration-300 group hover:scale-110 shadow-sm hover:shadow-lg">
                  <span className="text-[#c5a059] group-hover:text-white transition-colors font-bold text-sm">f</span>
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-[#c5a059]/20 to-[#c5a059]/5 rounded-full flex items-center justify-center hover:bg-[#c5a059] transition-all duration-300 group hover:scale-110 shadow-sm hover:shadow-lg">
                  <span className="text-[#c5a059] group-hover:text-white transition-colors font-bold text-sm">T</span>
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-[#c5a059]/20 to-[#c5a059]/5 rounded-full flex items-center justify-center hover:bg-[#c5a059] transition-all duration-300 group hover:scale-110 shadow-sm hover:shadow-lg">
                  <span className="text-[#c5a059] group-hover:text-white transition-colors font-bold text-sm">YT</span>
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-[#c5a059]/20 to-[#c5a059]/5 rounded-full flex items-center justify-center hover:bg-[#c5a059] transition-all duration-300 group hover:scale-110 shadow-sm hover:shadow-lg">
                  <span className="text-[#c5a059] group-hover:text-white transition-colors font-bold text-sm">WA</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-serif font-light text-gray-800">Frequently Asked Questions</h3>
            <div className="w-16 h-[1px] bg-[#c5a059] mx-auto mt-2"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-[#faf8f6] rounded-xl hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <span className="text-[#c5a059]">✦</span> Shipping Options
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">We offer free standard shipping on all orders over $100. Express shipping is available at checkout.</p>
            </div>
            <div className="p-6 bg-[#faf8f6] rounded-xl hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <span className="text-[#c5a059]">✦</span> Custom Jewelry Design
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">Yes! Our master craftsmen can create custom pieces tailored to your preferences. Contact us for a consultation.</p>
            </div>
            <div className="p-6 bg-[#faf8f6] rounded-xl hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <span className="text-[#c5a059]">✦</span> Return Policy
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">We offer a 30-day return policy on all unworn items. Custom pieces are final sale.</p>
            </div>
            <div className="p-6 bg-[#faf8f6] rounded-xl hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                <span className="text-[#c5a059]">✦</span> International Shipping
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">Yes, we ship worldwide. International shipping rates and delivery times vary by location.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#0a0806] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-gray-500 tracking-[0.3em] uppercase font-light">
            © 2026 Viva Jewelry. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-[10px] text-gray-500 hover:text-[#c5a059] tracking-[0.2em] uppercase font-light transition">
              Privacy Policy
            </Link>
            <span className="w-px h-3 bg-gray-700"></span>
            <Link href="#" className="text-[10px] text-gray-500 hover:text-[#c5a059] tracking-[0.2em] uppercase font-light transition">
              Terms of Service
            </Link>
            <span className="w-px h-3 bg-gray-700"></span>
            <Link href="#" className="text-[10px] text-gray-500 hover:text-[#c5a059] tracking-[0.2em] uppercase font-light transition">
              Cookie Policy
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-gray-500 tracking-[0.2em] uppercase font-light">Secure Payment</span>
            <span className="text-xs text-gray-500">💳 🔒</span>
          </div>
        </div>
      </div>
    </div>
  );
}