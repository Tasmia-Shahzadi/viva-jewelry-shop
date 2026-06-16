'use client';
import Link from 'next/link';

const categories = [
  { 
    id: 1, 
    title: 'Engagement Rings', 
    subtitle: 'Forever Begins Here',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop',
    count: '48 Designs'
  },
  { 
    id: 2, 
    title: 'Bangles', 
    subtitle: 'Statement of Elegance',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZa-G9ejNUw0YJF5c107zKtpzaWKAYsITGwQ&',
    count: '36 Designs'
  },
  { 
    id: 3, 
    title: 'Necklace Set', 
    subtitle: 'Timeless Traditions',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=2070&auto=format&fit=crop',
    count: '52 Designs'
  },
  { 
    id: 4, 
    title: 'Earrings', 
    subtitle: 'Everyday Glamour',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVpX4UsXcQH3PwBLWl8oCfJ9nfjyn7eGnrOw&s',
    count: '44 Designs'
  }
];

export default function CategoryGrid() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-[#f8f6f3]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[#c5a059] text-xs tracking-[0.3em] uppercase font-light">
            Explore Our Collections
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mt-2">
            Shop by Category
          </h2>
          <div className="w-16 h-[1px] bg-[#c5a059] mx-auto mt-3"></div>
          <p className="text-gray-500 text-sm mt-3 font-light tracking-wide max-w-2xl mx-auto">
            Discover our exquisite collection of handcrafted jewelry pieces
          </p>
        </div>

        {/* Category Grid - Square Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, index) => (
            <div 
              key={cat.id || index}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Image */}
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              
              {/* Gradient Overlay - Light Theme */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/60 transition-all duration-500" />
              
              {/* Gold Border Glow */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#c5a059]/60 rounded-2xl transition-all duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 md:pb-8 text-center p-4">
                {/* Decorative Line */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="w-6 h-[1px] bg-[#c5a059]"></span>
                    <span className="text-[#c5a059] text-[8px]">✦</span>
                    <span className="w-6 h-[1px] bg-[#c5a059]"></span>
                  </div>
                </div>

                {/* Count */}
                <span className="text-[#c5a059] text-[10px] tracking-[0.2em] font-light opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  {cat.count}
                </span>

                {/* Title */}
                <h3 className="text-white text-sm md:text-base lg:text-lg font-serif font-light tracking-wide mt-1">
                  {cat.title}
                </h3>
                
                {/* Shop Button */}
                <Link 
                  href="/shop" 
                  className="mt-3 px-6 py-1.5 bg-[#c5a059] text-black text-[10px] tracking-[0.2em] uppercase font-medium hover:bg-[#d4b06a] transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 hover:scale-105 inline-block text-center"
                >
                  Shop Now
                </Link>
              </div>

              {/* Category Number Badge */}
              <div className="absolute top-3 right-3 w-7 h-7 border border-[#c5a059]/30 rounded-full flex items-center justify-center text-[#c5a059] text-[10px] font-light opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm bg-black/20">
                {String(cat.id || index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            href="/shop" 
            className="px-12 py-3.5 border-2 border-[#c5a059] text-[#c5a059] text-xs tracking-[0.3em] uppercase font-medium hover:bg-[#c5a059] hover:text-black transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#c5a059]/20 inline-block"
          >
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
}