'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update cart count function
  const updateCartCount = () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const cart = JSON.parse(savedCart);
      const total = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
      setCartCount(total);
    } else {
      setCartCount(0);
    }
  };

  useEffect(() => {
    updateCartCount();

    // Listen for cart updates
    const handleCartUpdate = () => {
      updateCartCount();
    };

    window.addEventListener('cartUpdated', handleCartUpdate);
    window.addEventListener('storage', handleCartUpdate);

    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
      window.removeEventListener('storage', handleCartUpdate);
    };
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
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/80 backdrop-blur-sm'
      } border-b border-gray-100/50`}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-3xl md:text-4xl font-serif font-light tracking-[0.3em] text-[#c5a059] hover:scale-105 transition-transform duration-300 cursor-pointer">
              VIVA
            </Link>
            <div className="hidden lg:block ml-4 text-[10px] text-gray-400 tracking-[0.4em] uppercase font-light border-l border-gray-300 pl-4">
              Luxury Jewelry
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.25em] font-medium text-gray-700 hover:text-[#c5a059] transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c5a059] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="text-[11px] uppercase tracking-widest text-gray-500 hover:text-[#c5a059] transition-colors duration-300">
              Search
            </button>
            <div className="h-4 w-[1px] bg-gray-300"></div>
            <button className="text-[11px] uppercase tracking-widest text-gray-500 hover:text-[#c5a059] transition-colors duration-300">
              Wishlist
            </button>
            <div className="h-4 w-[1px] bg-gray-300"></div>
            
            {/* Cart Button with Count */}
            <Link href="/cart" className="relative group flex items-center gap-2 px-4 py-2 bg-[#c5a059]/10 hover:bg-[#c5a059] transition-all duration-300 rounded-full">
              <svg className="w-4 h-4 text-[#c5a059] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="text-[11px] uppercase tracking-widest font-medium text-[#c5a059] group-hover:text-white transition-colors duration-300">
                Cart
              </span>
              <span className="text-[10px] font-bold bg-[#c5a059] text-white px-1.5 py-0.5 rounded-full group-hover:bg-white group-hover:text-[#c5a059] transition-all duration-300 min-w-[20px] text-center">
                {cartCount}
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className="lg:hidden text-gray-700 hover:text-[#c5a059] transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-2xl">{isOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-6 space-y-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-[13px] uppercase tracking-[0.2em] font-medium text-gray-700 hover:text-[#c5a059] transition-colors duration-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-6">
              <button className="text-[13px] text-gray-600 hover:text-[#c5a059] transition-colors duration-300">Search</button>
              <button className="text-[13px] text-gray-600 hover:text-[#c5a059] transition-colors duration-300">Wishlist</button>
              <Link href="/cart" className="text-[13px] font-medium text-gray-800 hover:text-[#c5a059] transition-colors duration-300 flex items-center gap-2" onClick={() => setIsOpen(false)}>
                Cart
                <span className="bg-[#c5a059] text-black text-[10px] px-2 py-0.5 rounded-full font-bold">
                  {cartCount}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}