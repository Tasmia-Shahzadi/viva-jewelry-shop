'use client';

import Link from 'next/link';
import { Award, Gem, Heart, Shield, Star, Truck, Clock, Users, Sparkles, Quote, Crown, Medal } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#faf8f6]">
      {/* Hero Section with Parallax Effect */}
      <div 
        className="relative py-24 md:py-32 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0806] via-transparent to-transparent"></div>
        <div className="relative max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <div className="inline-block px-6 py-1.5 border border-[#c5a059]/40 bg-[#c5a059]/10 backdrop-blur-sm text-[#c5a059] text-[10px] tracking-[0.4em] uppercase font-light mb-4">
            Since 1985
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-white mt-3 tracking-wide">
            Crafting <span className="text-[#c5a059]">Timeless</span> Elegance
          </h1>
          <p className="text-gray-300 text-sm md:text-base font-light mt-4 tracking-wider max-w-2xl mx-auto leading-relaxed">
            Where passion meets precision, creating jewelry that tells stories for generations
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="w-16 h-[1px] bg-[#c5a059]"></span>
            <span className="text-[#c5a059] text-sm animate-pulse">✦</span>
            <span className="w-16 h-[1px] bg-[#c5a059]"></span>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-[#0a0806] border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="group">
              <p className="text-3xl md:text-4xl font-serif font-light text-[#c5a059] group-hover:scale-110 transition-transform">40+</p>
              <p className="text-[10px] text-gray-500 tracking-[0.3em] uppercase mt-1">Years of Excellence</p>
            </div>
            <div className="group">
              <p className="text-3xl md:text-4xl font-serif font-light text-[#c5a059] group-hover:scale-110 transition-transform">10K+</p>
              <p className="text-[10px] text-gray-500 tracking-[0.3em] uppercase mt-1">Happy Customers</p>
            </div>
            <div className="group">
              <p className="text-3xl md:text-4xl font-serif font-light text-[#c5a059] group-hover:scale-110 transition-transform">50+</p>
              <p className="text-[10px] text-gray-500 tracking-[0.3em] uppercase mt-1">Awards Won</p>
            </div>
            <div className="group">
              <p className="text-3xl md:text-4xl font-serif font-light text-[#c5a059] group-hover:scale-110 transition-transform">100%</p>
              <p className="text-[10px] text-gray-500 tracking-[0.3em] uppercase mt-1">Authentic Gems</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <span className="text-[#c5a059] text-xs tracking-[0.3em] uppercase font-light flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#c5a059]"></span> Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mt-3 mb-4">
                A Legacy of <span className="text-[#c5a059]">Excellence</span>
              </h2>
              <div className="w-16 h-[1px] bg-[#c5a059] mb-6"></div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Founded in 1985, VIVA Jewelry has been at the forefront of luxury jewelry design, 
                combining traditional craftsmanship with contemporary elegance. Our commitment to 
                quality and attention to detail has made us a trusted name in the industry.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Each piece in our collection tells a unique story of passion, precision, and 
                artistic vision. We believe that jewelry is more than just an accessory – it's 
                a timeless expression of individuality and emotion.
              </p>
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#c5a059]/10 rounded-full flex items-center justify-center">
                    <Gem className="w-5 h-5 text-[#c5a059]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Premium Quality</p>
                    <p className="text-xs text-gray-500">Finest materials</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#c5a059]/10 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-[#c5a059]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Handcrafted</p>
                    <p className="text-xs text-gray-500">With love & care</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop" 
                  alt="Jewelry craftsmanship"
                  className="w-full h-[450px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#c5a059]/10 rounded-full blur-3xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#c5a059]/5 rounded-full blur-2xl"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-[#c5a059] rounded-full flex items-center justify-center">
                  <Crown className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="text-sm font-serif font-light text-gray-800">Luxury Jewelry</p>
                  <p className="text-[10px] text-gray-400 tracking-wider">Since 1985</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision with Background */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-[#0a0806] to-[#1a1410]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#c5a059] text-xs tracking-[0.3em] uppercase font-light">Our Promise</span>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-white mt-2">
              Mission & Vision
            </h2>
            <div className="w-16 h-[1px] bg-[#c5a059] mx-auto mt-3"></div>
            <p className="text-gray-400 text-sm font-light mt-3 max-w-2xl mx-auto">
              Guiding principles that drive us to create exceptional jewelry experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#c5a059]/40 transition-all group hover:bg-white/10">
              <div className="w-16 h-16 bg-[#c5a059]/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#c5a059] transition-colors">
                <Gem className="w-8 h-8 text-[#c5a059] group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-xl font-serif font-light text-white mb-3">Our Mission</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                To create exquisite jewelry that celebrates life's most precious moments, 
                combining unparalleled craftsmanship with sustainable practices and ethical sourcing.
              </p>
              <div className="mt-4 flex items-center gap-2 text-[#c5a059] text-xs">
                <span>✦</span>
                <span className="tracking-wider">Excellence in every piece</span>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#c5a059]/40 transition-all group hover:bg-white/10">
              <div className="w-16 h-16 bg-[#c5a059]/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#c5a059] transition-colors">
                <Award className="w-8 h-8 text-[#c5a059] group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-xl font-serif font-light text-white mb-3">Our Vision</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                To be the world's most admired luxury jewelry brand, recognized for our 
                exceptional quality, innovative designs, and commitment to customer delight.
              </p>
              <div className="mt-4 flex items-center gap-2 text-[#c5a059] text-xs">
                <span>✦</span>
                <span className="tracking-wider">Inspiring timeless elegance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values with Icons */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#c5a059] text-xs tracking-[0.3em] uppercase font-light">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mt-2">
              Our Core Values
            </h2>
            <div className="w-16 h-[1px] bg-[#c5a059] mx-auto mt-3"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Quality', desc: 'Uncompromising standards' },
              { icon: Heart, title: 'Passion', desc: 'Love for craftsmanship' },
              { icon: Star, title: 'Excellence', desc: 'Striving for perfection' },
              { icon: Users, title: 'Trust', desc: 'Building relationships' }
            ].map((value, index) => (
              <div key={index} className="text-center group p-6 rounded-2xl hover:shadow-xl transition-all hover:bg-[#f9f7f5]">
                <div className="w-20 h-20 mx-auto bg-[#c5a059]/10 rounded-full flex items-center justify-center group-hover:bg-[#c5a059] transition-all duration-300">
                  <value.icon className="w-10 h-10 text-[#c5a059] group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="font-serif text-xl font-light text-gray-800 mt-4">{value.title}</h4>
                <p className="text-xs text-gray-500 font-light mt-1">{value.desc}</p>
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[#c5a059] text-xs">✦</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Section with Cards */}
      <section className="py-20 px-4 md:px-8 bg-[#f9f7f5]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#c5a059] text-xs tracking-[0.3em] uppercase font-light">Artisans</span>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mt-2">
              Master Craftsmen
            </h2>
            <div className="w-16 h-[1px] bg-[#c5a059] mx-auto mt-3"></div>
            <p className="text-gray-500 text-sm font-light mt-3 max-w-2xl mx-auto">
              Meet the talented artisans behind our exquisite jewelry creations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Ahmed Hassan', role: 'Master Jeweler', experience: '25 years', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop' },
              { name: 'Sarah Khan', role: 'Diamond Expert', experience: '18 years', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop' },
              { name: 'Omar Ali', role: 'Design Lead', experience: '15 years', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop' }
            ].map((artisan, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
                <div className="relative overflow-hidden">
                  <img 
                    src={artisan.image} 
                    alt={artisan.name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                    <span className="text-white text-xs tracking-widest uppercase border border-white/60 px-4 py-2 rounded-full">
                      {artisan.role}
                    </span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="font-serif text-xl font-light text-gray-800">{artisan.name}</h4>
                  <p className="text-[#c5a059] text-xs tracking-widest uppercase font-light">{artisan.role}</p>
                  <p className="text-gray-400 text-xs mt-2">{artisan.experience} of experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#c5a059] text-xs tracking-[0.3em] uppercase font-light">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mt-2">
              The VIVA Difference
            </h2>
            <div className="w-16 h-[1px] bg-[#c5a059] mx-auto mt-3"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Gem, title: 'Ethical Sourcing', desc: 'We source our gems and metals from certified ethical suppliers, ensuring sustainability and fair trade.', color: 'from-amber-500/20 to-amber-600/10' },
              { icon: Shield, title: 'Lifetime Warranty', desc: 'Every piece comes with a lifetime warranty against manufacturing defects and craftsmanship issues.', color: 'from-blue-500/20 to-blue-600/10' },
              { icon: Clock, title: 'Free Lifetime Cleaning', desc: 'Enjoy free professional cleaning and maintenance services for your jewelry, forever.', color: 'from-emerald-500/20 to-emerald-600/10' }
            ].map((item, index) => (
              <div key={index} className={`p-8 rounded-2xl bg-gradient-to-br ${item.color} border border-white/50 hover:shadow-xl transition-all group`}>
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-[#c5a059]" />
                </div>
                <h4 className="font-serif text-xl font-light text-gray-800 mb-3">{item.title}</h4>
                <p className="text-gray-600 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Quote */}
      <section className="py-20 px-4 md:px-8 bg-[#0a0806]">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-12 h-12 text-[#c5a059]/30 mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl font-serif font-light text-white leading-relaxed">
            "Jewelry is not just about adornment; it's about preserving memories, 
            celebrating love, and creating heirlooms that will be treasured for generations."
          </blockquote>
          <div className="mt-6">
            <p className="text-[#c5a059] font-light">— Founder, VIVA Jewelry</p>
          </div>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-12 h-[1px] bg-[#c5a059]/30"></span>
            <span className="text-[#c5a059] text-xs">✦</span>
            <span className="w-12 h-[1px] bg-[#c5a059]/30"></span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#c5a059]/5 to-[#c5a059]/10 rounded-3xl p-12 border border-[#c5a059]/20">
            <span className="text-[#c5a059] text-xs tracking-[0.3em] uppercase font-light">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mt-3 mb-4">
              Let's Create Something <span className="text-[#c5a059]">Beautiful</span>
            </h2>
            <p className="text-gray-600 text-sm font-light mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you're looking for the perfect piece or want to create a custom design, 
              our team of experts is here to help you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-10 py-3 bg-[#c5a059] text-black text-xs tracking-[0.3em] uppercase font-medium hover:bg-[#d4b06a] transition hover:scale-105 rounded-full shadow-lg hover:shadow-[#c5a059]/30">
                  Contact Us
                </button>
              </Link>
              <Link href="/shop">
                <button className="px-10 py-3 border border-gray-300 text-gray-700 text-xs tracking-[0.3em] uppercase font-light hover:bg-[#0a0806] hover:text-white hover:border-[#0a0806] transition rounded-full">
                  Explore Collection
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

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