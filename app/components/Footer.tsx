'use client';

export default function Footer() {
  return (
    <footer className="bg-[#0a0806] text-white pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-light tracking-[0.3em] text-[#c5a059]">
              VIVA
            </h2>
            <p className="text-gray-400 text-sm font-light leading-relaxed max-w-sm">
              Elevating elegance through timeless jewelry craftsmanship since 1985.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <span className="text-[10px] text-gray-500 tracking-[0.2em] uppercase">Follow Us</span>
              <div className="flex gap-3">
                <a href="#" className="text-gray-500 hover:text-[#c5a059] transition-colors duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/></svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-[#c5a059] transition-colors duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-[#c5a059] transition-colors duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/></svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-[#c5a059] transition-colors duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-medium text-white tracking-[0.3em] uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Shop All', 'New Arrivals', 'Best Sellers', 'Sale'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 text-sm font-light hover:text-[#c5a059] transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[11px] font-medium text-white tracking-[0.3em] uppercase mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {['Shipping Policy', 'Returns & Exchanges', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 text-sm font-light hover:text-[#c5a059] transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-medium text-white tracking-[0.3em] uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {['About Us', 'Our Heritage', 'Store Locator', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 text-sm font-light hover:text-[#c5a059] transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-[10px] text-gray-500 tracking-[0.3em] uppercase font-light">
            © 2026 Viva Jewelry. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-[10px] text-gray-500 hover:text-[#c5a059] tracking-[0.2em] uppercase font-light transition-colors duration-300">
              Privacy Policy
            </a>
            <span className="w-px h-3 bg-gray-700"></span>
            <a href="#" className="text-[10px] text-gray-500 hover:text-[#c5a059] tracking-[0.2em] uppercase font-light transition-colors duration-300">
              Terms of Service
            </a>
            <span className="w-px h-3 bg-gray-700"></span>
            <a href="#" className="text-[10px] text-gray-500 hover:text-[#c5a059] tracking-[0.2em] uppercase font-light transition-colors duration-300">
              Cookie Policy
            </a>
          </div>

          {/* Payment Methods */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-gray-500 tracking-[0.2em] uppercase font-light">Secure Payment</span>
            <div className="flex gap-2 text-gray-500">
              <span className="text-xs">💳</span>
              <span className="text-xs">🔒</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}