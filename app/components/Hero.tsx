'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// Syntax corrected: Missing quotes aur extra commas hata diye hain
const slides = [
  { id: 1, image: '/hero1.jpg', title: 'Luxury Collection', desc: 'Crafted with care' },
  { id: 2, image: '/hero2.jpg', title: 'Timeless Elegance', desc: 'Discover the beauty' },
  { id: 3, image: '/hero3.jpg', title: 'Celebrate Moments', desc: 'Jewelry for you' },
];

export default function Hero() {
  return (
    <section className="w-full h-[80vh] relative group overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-6">
              <h1 className="text-4xl md:text-6xl font-serif tracking-[0.2em] uppercase mb-4">
                {slide.title}
              </h1>
              <p className="text-sm md:text-base tracking-[0.4em] font-light">
                {slide.desc}
              </p>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <div className="swiper-button-prev !text-[#c5a059] !bg-white/90 !w-14 !h-14 !left-10 rounded-full shadow-lg hover:!bg-[#c5a059] hover:!text-white transition-all opacity-0 group-hover:opacity-100 duration-500"></div>
        <div className="swiper-button-next !text-[#c5a059] !bg-white/90 !w-14 !h-14 !right-10 rounded-full shadow-lg hover:!bg-[#c5a059] hover:!text-white transition-all opacity-0 group-hover:opacity-100 duration-500"></div>
      </Swiper>
    </section>
  );
}