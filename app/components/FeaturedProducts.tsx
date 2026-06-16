'use client'

// Featured Products Component
export const FeaturedProducts = () => {
  const products = [
    { 
      id: 1, 
      name: 'Royal Gold Ring', 
      price: '$299', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmJzmWTDwdgjA_wIMZKstCJ_j84BbaJFfLyA&s',
      badge: 'Best Seller'
    },
    { 
      id: 2, 
      name: 'Diamond Studs', 
      price: '$450', 
      image: 'data:image/jpeg;base64,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',
      badge: 'New'
    },
    { 
      id: 3, 
      name: 'Pearl Necklace', 
      price: '$599', 
      image: 'data:image/jpeg;base64,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',
      badge: 'Limited'
    },
    { 
      id: 4, 
      name: 'Elegant Bracelet', 
      price: '$350', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgEhOW4ySWvhInPp_TqhGahRhG9x-EUlPQ2w&s',
      badge: 'Sale'
    },
  ];

  return (
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
                />
                
                {/* Badge */}
                <span className="absolute top-3 left-3 bg-[#c5a059] text-black text-[10px] px-3 py-1 tracking-widest uppercase font-medium">
                  {p.badge}
                </span>

                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <button className="bg-white text-black px-6 py-2 text-xs tracking-widest uppercase hover:bg-[#c5a059] hover:text-white transition">
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
                <button className="mt-3 w-full border border-gray-300 py-2 text-xs tracking-[0.2em] uppercase hover:bg-black hover:text-white hover:border-black transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-10 py-3 border border-[#c5a059] text-[#c5a059] text-xs tracking-[0.3em] uppercase hover:bg-[#c5a059] hover:text-black transition duration-300 hover:scale-105">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

// Trust Section
export const TrustSection = () => (
  <section className="py-16 px-4 bg-[#f9f7f5] border-t border-gray-200">
    <div className="max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {/* Trust Item 1 */}
        <div className="text-center group">
          <div className="w-12 h-12 mx-auto mb-4 border border-[#c5a059]/30 rounded-full flex items-center justify-center group-hover:border-[#c5a059] transition">
            <span className="text-[#c5a059] text-xl">✦</span>
          </div>
          <h4 className="font-serif text-lg font-light text-gray-800 mb-2">
            Lifetime Warranty
          </h4>
          <p className="text-xs text-gray-500 tracking-wide font-light">
            Quality that lasts forever. Every piece is guaranteed.
          </p>
        </div>

        {/* Trust Item 2 */}
        <div className="text-center group">
          <div className="w-12 h-12 mx-auto mb-4 border border-[#c5a059]/30 rounded-full flex items-center justify-center group-hover:border-[#c5a059] transition">
            <span className="text-[#c5a059] text-xl">✦</span>
          </div>
          <h4 className="font-serif text-lg font-light text-gray-800 mb-2">
            Free Delivery
          </h4>
          <p className="text-xs text-gray-500 tracking-wide font-light">
            Fast and secure shipping worldwide. Free on all orders.
          </p>
        </div>

        {/* Trust Item 3 */}
        <div className="text-center group">
          <div className="w-12 h-12 mx-auto mb-4 border border-[#c5a059]/30 rounded-full flex items-center justify-center group-hover:border-[#c5a059] transition">
            <span className="text-[#c5a059] text-xl">✦</span>
          </div>
          <h4 className="font-serif text-lg font-light text-gray-800 mb-2">
            Certified Gems
          </h4>
          <p className="text-xs text-gray-500 tracking-wide font-light">
            100% authentic materials with certificate of authenticity.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Newsletter Section (Bonus)
export const NewsletterSection = () => (
  <section className="py-16 px-4 bg-[#0a0806]">
    <div className="max-w-2xl mx-auto text-center">
      <span className="text-[#c5a059] text-xs tracking-[0.3em] uppercase font-light">
        Stay Updated
      </span>
      <h3 className="text-white text-2xl md:text-3xl font-serif font-light mt-2 mb-4">
        Subscribe to Our Newsletter
      </h3>
      <p className="text-gray-400 text-sm font-light mb-6">
        Be the first to know about new collections and exclusive offers
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="px-6 py-3 bg-gray-900 text-white border border-gray-800 focus:border-[#c5a059] outline-none transition text-sm flex-1 min-w-[250px]"
        />
        <button className="px-8 py-3 bg-[#c5a059] text-black text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#d4b06a] transition hover:scale-105">
          Subscribe
        </button>
      </div>
    </div>
  </section>
);

