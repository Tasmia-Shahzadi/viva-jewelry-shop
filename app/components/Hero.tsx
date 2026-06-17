'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const slides = [
  { id: 1, image: '/hero1.jpg', title: 'Luxury Collection', desc: 'Crafted with care' },
  { id: 2, image: '/hero2.jpg', title: 'Timeless Elegance', desc: 'Discover the beauty' },
  { id: 3, image: '/hero3.jpg', title: 'Celebrate Moments', desc: 'Jewelry for you' },
];

export default function Hero() {
  return (
    <section className="w-full h-[60vh] md:h-[80vh] relative group overflow-hidden pt-14 md:pt-16">
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
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
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4 md:p-6">
              <h1 className="text-xl md:text-4xl lg:text-5xl font-serif italic tracking-[0.15em] md:tracking-[0.2em] uppercase mb-2 md:mb-3 text-[#c5a059]">
                {slide.title}
              </h1>
              <p className="text-xs md:text-base tracking-[0.3em] md:tracking-[0.4em] font-light text-white/90 px-2">
                {slide.desc}
              </p>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
        <div className="swiper-button-prev !text-[#c5a059] !bg-white/90 !w-10 !h-10 md:!w-14 md:!h-14 !left-2 md:!left-10 rounded-full shadow-lg hover:!bg-[#c5a059] hover:!text-white transition-all opacity-0 group-hover:opacity-100 duration-500 hidden sm:flex"></div>
        <div className="swiper-button-next !text-[#c5a059] !bg-white/90 !w-10 !h-10 md:!w-14 md:!h-14 !right-2 md:!right-10 rounded-full shadow-lg hover:!bg-[#c5a059] hover:!text-white transition-all opacity-0 group-hover:opacity-100 duration-500 hidden sm:flex"></div>
      </Swiper>
    </section>
  );
}