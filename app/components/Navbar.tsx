'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext'; 

export default function Navbar() {
  const { cart } = useCart(); 
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'
      } border-b border-gray-100/50`}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-14 md:h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl md:text-3xl font-serif font-light tracking-[0.3em] text-[#c5a059] hover:scale-105 transition-transform duration-300">
              VIVA
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-[10px] uppercase tracking-[0.25em] font-medium text-gray-700 hover:text-[#c5a059] transition-all relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c5a059] group-hover:w-full transition-all"></span>
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Mobile Cart - lg se chhote screen pe dikhega */}
            <Link href="/cart" className="lg:hidden relative group flex items-center gap-1.5 px-2.5 py-1.5 bg-[#c5a059]/10 hover:bg-[#c5a059] transition-all rounded-full">
              <svg className="w-3.5 h-3.5 text-[#c5a059] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="text-[9px] uppercase tracking-widest font-medium text-[#c5a059] group-hover:text-white transition-colors">
                Cart
              </span>
            </Link>

            {/* Desktop Cart - lg se bade screen pe dikhega */}
            <Link href="/cart" className="hidden lg:flex relative group items-center gap-2 px-3 py-1.5 bg-[#c5a059]/10 hover:bg-[#c5a059] transition-all rounded-full">
              <svg className="w-3.5 h-3.5 text-[#c5a059] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="text-[10px] uppercase tracking-widest font-medium text-[#c5a059] group-hover:text-white transition-colors">
                Cart
              </span>
            </Link>

            {/* Hamburger */}
            <button className="lg:hidden text-xl text-gray-700" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[300px]' : 'max-h-0'}`}>
          <div className="py-4 space-y-3 border-t border-gray-200/50">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="block text-[12px] uppercase tracking-widest py-1.5 text-gray-700 hover:text-[#c5a059]" onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}