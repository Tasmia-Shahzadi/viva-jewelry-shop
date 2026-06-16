'use client';

import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import { FeaturedProducts, TrustSection, NewsletterSection } from './components/FeaturedProducts';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <TrustSection />
      <NewsletterSection />
       <Footer/>
    </main>
  );
}