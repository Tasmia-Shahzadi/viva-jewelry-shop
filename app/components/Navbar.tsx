'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext'; 

export default function Navbar() {
  const { cart } = useCart(); 
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Auto calculate cart count
  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

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
        <div className="flex items-center justify-between h-20 md:h-24">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-3xl md:text-4xl font-serif font-light tracking-[0.3em] text-[#c5a059] hover:scale-105 transition-transform duration-300">
              VIVA
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-[11px] uppercase tracking-[0.25em] font-medium text-gray-700 hover:text-[#c5a059] transition-all relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c5a059] group-hover:w-full transition-all"></span>
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/cart" className="relative group flex items-center gap-2 px-4 py-2 bg-[#c5a059]/10 hover:bg-[#c5a059] transition-all rounded-full">
              <svg className="w-4 h-4 text-[#c5a059] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="text-[11px] uppercase tracking-widest font-medium text-[#c5a059] group-hover:text-white transition-colors">
                Cart {cartCount > 0 ? `(${cartCount})` : ''}
              </span>
            </Link>
          </div>

          {/* Hamburger */}
          <button className="lg:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[300px]' : 'max-h-0'}`}>
          <div className="py-6 space-y-4 border-t">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="block text-[13px] uppercase tracking-widest py-2" onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}