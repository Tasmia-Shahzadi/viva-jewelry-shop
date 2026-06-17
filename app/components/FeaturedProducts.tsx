'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

// Featured Products Component
export const FeaturedProducts = () => {
  const { cart, addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [addedProducts, setAddedProducts] = useState({});

  const products = [
    { 
      id: 1, 
      name: 'Royal Gold Ring', 
      price: '$299', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmJzmWTDwdgjA_wIMZKstCJ_j84BbaJFfLyA&s',
      badge: 'Best Seller',
      description: 'Exquisite 18K gold ring with intricate royal design. Perfect for special occasions.'
    },
    { 
      id: 2, 
      name: 'Diamond Studs', 
      price: '$450', 
      image: 'data:image/jpeg;base64,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',
      badge: 'New',
      description: 'Stunning diamond stud earrings with 0.5 carat clarity. Elegant and timeless.'
    },
    { 
      id: 3, 
      name: 'Pearl Necklace', 
      price: '$599', 
      image: 'data:image/jpeg;base64,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',
      badge: 'Limited',
      description: 'Elegant freshwater pearl necklace with gold clasp. A timeless piece for every woman.'
    },
    { 
      id: 4, 
      name: 'Elegant Bracelet', 
      price: '$350', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgEhOW4ySWvhInPp_TqhGahRhG9x-EUlPQ2w&s',
      badge: 'Sale',
      description: 'Stunning silver bracelet with cubic zirconia stones. Perfect for daily wear.'
    },
  ];

  // Check if product is in cart
  const isInCart = (productId) => {
    return cart.some(item => item.id === productId);
  };

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleAddToCart = (product) => {
    if (!isInCart(product.id)) {
      addToCart({ ...product, quantity: 1 });
      // Show tick mark
      setAddedProducts(prev => ({
        ...prev,
        [product.id]: true
      }));
      // Hide tick mark after 2 seconds
      setTimeout(() => {
        setAddedProducts(prev => ({
          ...prev,
          [product.id]: false
        }));
      }, 2000);
    }
  };

  const handleViewAll = () => {
    window.location.href = '/shop';
  };

  return (
    <>
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-[#c5a059] text-xs tracking-[0.3em] uppercase font-light">
              Our Collection
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mt-2 mb-3">
              Featured Products
            </h2>
            <div className="w-16 h-[1px] bg-[#c5a059] mx-auto"></div>
            <p className="text-gray-500 text-sm mt-4 font-light tracking-wide max-w-2xl mx-auto">
              Discover our handpicked selection of exquisite jewelry pieces
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products.map((p) => (
              <div key={p.id} className="group cursor-pointer">
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-lg bg-gray-100">
                  <img 
                    src={p.image} 
                    alt={p.name} 
                    className="w-full aspect-square object-cover group-hover:scale-105 transition duration-700" 
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x400/e0e0e0/999999?text=No+Image';
                    }}
                  />
                  
                  {/* Badge */}
                  <span className="absolute top-3 left-3 bg-[#c5a059] text-black text-[10px] px-3 py-1 tracking-widest uppercase font-medium">
                    {p.badge}
                  </span>

                  {/* Quick View Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <button 
                      onClick={() => handleQuickView(p)}
                      className="bg-white text-black px-6 py-2 text-xs tracking-widest uppercase hover:bg-[#c5a059] hover:text-white transition"
                    >
                      Quick View
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="mt-4 text-center">
                  <h3 className="text-sm md:text-base font-serif font-light text-gray-800 group-hover:text-[#c5a059] transition">
                    {p.name}
                  </h3>
                  <p className="text-[#c5a059] font-medium mt-1 text-sm md:text-base">
                    {p.price}
                  </p>
                  <button 
                    onClick={() => handleAddToCart(p)}
                    className={`mt-3 w-full py-2 text-xs tracking-[0.2em] uppercase transition duration-300 ${
                      addedProducts[p.id]
                        ? 'bg-green-600 text-white border border-green-600'
                        : 'border border-gray-300 hover:bg-black hover:text-white hover:border-black'
                    }`}
                  >
                    {addedProducts[p.id] ? '✓ Added' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button 
              onClick={handleViewAll}
              className="px-10 py-3 border border-[#c5a059] text-[#c5a059] text-xs tracking-[0.3em] uppercase hover:bg-[#c5a059] hover:text-black transition duration-300 hover:scale-105"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white max-w-2xl w-full rounded-lg overflow-hidden max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center text-2xl font-light shadow-lg"
              >
                ✕
              </button>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-6">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    className="w-full aspect-square object-cover rounded-lg"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x400/e0e0e0/999999?text=No+Image';
                    }}
                  />
                </div>
                <div className="md:w-1/2 p-6 flex flex-col justify-center">
                  <span className="text-[#c5a059] text-xs tracking-[0.3em] uppercase font-light mb-2">
                    {selectedProduct.badge}
                  </span>
                  <h2 className="text-2xl font-serif font-light text-gray-900 mb-2">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-[#c5a059] text-2xl font-medium mb-4">
                    {selectedProduct.price}
                  </p>
                  <p className="text-gray-600 text-sm font-light mb-6">
                    {selectedProduct.description}
                  </p>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => {
                        handleAddToCart(selectedProduct);
                      }}
                      className={`flex-1 px-6 py-3 text-sm tracking-[0.2em] uppercase transition ${
                        addedProducts[selectedProduct.id]
                          ? 'bg-green-600 text-white'
                          : 'bg-[#c5a059] text-black hover:bg-[#d4b06a]'
                      }`}
                    >
                      {addedProducts[selectedProduct.id] ? '✓ Added to Cart' : 'Add to Cart'}
                    </button>
                    <button 
                      onClick={() => setShowModal(false)}
                      className="flex-1 border border-gray-300 px-6 py-3 text-sm tracking-[0.2em] uppercase hover:bg-gray-100 transition"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Trust Section
export const TrustSection = () => (
  <section className="py-16 px-4 bg-[#f9f7f5] border-t border-gray-200">
    <div className="max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <div className="text-center group">
          <div className="w-12 h-12 mx-auto mb-4 border border-[#c5a059]/30 rounded-full flex items-center justify-center group-hover:border-[#c5a059] transition">
            <span className="text-[#c5a059] text-xl">✦</span>
          </div>
          <h4 className="font-serif text-lg font-light text-gray-800 mb-2">Lifetime Warranty</h4>
          <p className="text-xs text-gray-500 tracking-wide font-light">Quality that lasts forever. Every piece is guaranteed.</p>
        </div>
        <div className="text-center group">
          <div className="w-12 h-12 mx-auto mb-4 border border-[#c5a059]/30 rounded-full flex items-center justify-center group-hover:border-[#c5a059] transition">
            <span className="text-[#c5a059] text-xl">✦</span>
          </div>
          <h4 className="font-serif text-lg font-light text-gray-800 mb-2">Free Delivery</h4>
          <p className="text-xs text-gray-500 tracking-wide font-light">Fast and secure shipping worldwide. Free on all orders.</p>
        </div>
        <div className="text-center group">
          <div className="w-12 h-12 mx-auto mb-4 border border-[#c5a059]/30 rounded-full flex items-center justify-center group-hover:border-[#c5a059] transition">
            <span className="text-[#c5a059] text-xl">✦</span>
          </div>
          <h4 className="font-serif text-lg font-light text-gray-800 mb-2">Certified Gems</h4>
          <p className="text-xs text-gray-500 tracking-wide font-light">100% authentic materials with certificate of authenticity.</p>
        </div>
      </div>
    </div>
  </section>
);

// Newsletter Section
export const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-16 px-4 bg-[#0a0806]">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-[#c5a059] text-xs tracking-[0.3em] uppercase font-light">Stay Updated</span>
        <h3 className="text-white text-2xl md:text-3xl font-serif font-light mt-2 mb-4">Subscribe to Our Newsletter</h3>
        <p className="text-gray-400 text-sm font-light mb-6">Be the first to know about new collections and exclusive offers</p>
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 justify-center">
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-6 py-3 bg-gray-900 text-white border border-gray-800 focus:border-[#c5a059] outline-none transition text-sm flex-1 min-w-[250px]"
          />
          <button type="submit" className="px-8 py-3 bg-[#c5a059] text-black text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#d4b06a] transition hover:scale-105">
            Subscribe
          </button>
        </form>
        {subscribed && (
          <div className="mt-4 text-green-400 text-sm font-light animate-pulse">✅ Successfully Subscribed!</div>
        )}
      </div>
    </section>
  );
};