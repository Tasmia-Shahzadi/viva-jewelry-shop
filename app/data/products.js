
const allProducts = [
  // Watches (10)
  { id: 1, name: 'Rose Gold Watch', price: 299, category: 'Watches', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop', badge: 'Best Seller' },
  { id: 2, name: 'Leather Strap Watch', price: 249, category: 'Watches', image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?q=80&w=400&auto=format&fit=crop', badge: 'New' },
  { id: 3, name: 'Chronograph Watch', price: 399, category: 'Watches', image: 'https://images.unsplash.com/photo-1508057198894-247c23fe5ade?q=80&w=400&auto=format&fit=crop', badge: 'Luxury' },
  { id: 4, name: 'Minimalist Watch', price: 189, category: 'Watches', image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=400&auto=format&fit=crop', badge: 'Sale' },
  { id: 5, name: 'Diamond Dial Watch', price: 459, category: 'Watches', image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=400&auto=format&fit=crop', badge: 'Premium' },
  { id: 6, name: 'Mesh Bracelet Watch', price: 279, category: 'Watches', image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?q=80&w=400&auto=format&fit=crop', badge: '' },
  { id: 7, name: 'Sport Chrono Watch', price: 329, category: 'Watches', image: 'https://images.unsplash.com/photo-1508057198894-247c23fe5ade?q=80&w=400&auto=format&fit=crop', badge: 'Best Seller' },
  { id: 8, name: 'Classic Gold Watch', price: 219, category: 'Watches', image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=400&auto=format&fit=crop', badge: '' },
  { id: 9, name: 'Moonphase Watch', price: 519, category: 'Watches', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop', badge: 'Luxury' },
  { id: 10, name: 'Skeleton Watch', price: 199, category: 'Watches', image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=400&auto=format&fit=crop', badge: 'Sale' },

  // Rings (10)
  { id: 11, name: 'Solitaire Ring', price: 459, category: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=400&auto=format&fit=crop', badge: 'Best Seller' },
  { id: 12, name: 'Eternity Band', price: 129, category: 'Rings', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=400&auto=format&fit=crop', badge: 'Classic' },
  { id: 13, name: 'Rose Gold Ring', price: 389, category: 'Rings', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400&auto=format&fit=crop', badge: 'Luxury' },
  { id: 14, name: 'Pearl Ring', price: 219, category: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=400&auto=format&fit=crop', badge: 'New' },
  { id: 15, name: 'Diamond Cluster', price: 599, category: 'Rings', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400&auto=format&fit=crop', badge: 'Premium' },
  { id: 16, name: 'Vintage Ring', price: 179, category: 'Rings', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=400&auto=format&fit=crop', badge: '' },
  { id: 17, name: 'Sapphire Ring', price: 349, category: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=400&auto=format&fit=crop', badge: 'Best Seller' },
  { id: 18, name: 'Twist Ring', price: 99, category: 'Rings', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=400&auto=format&fit=crop', badge: 'Sale' },
  { id: 19, name: 'Halo Ring', price: 429, category: 'Rings', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400&auto=format&fit=crop', badge: 'Luxury' },
  { id: 20, name: 'Minimalist Band', price: 79, category: 'Rings', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=400&auto=format&fit=crop', badge: '' },

  // Necklaces (10)
  { id: 21, name: 'Pearl Strand', price: 249, category: 'Necklaces', image: 'https://images.unsplash.com/photo-1589679102716-11f8e12d46e3?q=80&w=400&auto=format&fit=crop', badge: 'Best Seller' },
  { id: 22, name: 'Gold Chain', price: 389, category: 'Necklaces', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=400&auto=format&fit=crop', badge: 'Luxury' },
  { id: 23, name: 'Pendant Necklace', price: 179, category: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a785e5dc7a1d?q=80&w=400&auto=format&fit=crop', badge: 'Classic' },
  { id: 24, name: 'Choker Set', price: 99, category: 'Necklaces', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=400&auto=format&fit=crop', badge: 'Sale' },
  { id: 25, name: 'Lariat Necklace', price: 799, category: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a785e5dc7a1d?q=80&w=400&auto=format&fit=crop', badge: 'Premium' },
  { id: 26, name: 'Collar Necklace', price: 129, category: 'Necklaces', image: 'https://images.unsplash.com/photo-1589679102716-11f8e12d46e3?q=80&w=400&auto=format&fit=crop', badge: '' },
  { id: 27, name: 'Bib Necklace', price: 219, category: 'Necklaces', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=400&auto=format&fit=crop', badge: 'New' },
  { id: 28, name: 'Tassel Necklace', price: 149, category: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a785e5dc7a1d?q=80&w=400&auto=format&fit=crop', badge: '' },
  { id: 29, name: 'Gemstone Pendant', price: 329, category: 'Necklaces', image: 'https://images.unsplash.com/photo-1589679102716-11f8e12d46e3?q=80&w=400&auto=format&fit=crop', badge: 'Best Seller' },
  { id: 30, name: 'Layered Necklace', price: 199, category: 'Necklaces', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=400&auto=format&fit=crop', badge: '' },

  // Bangles (10)
  { id: 31, name: 'Gold Bangle', price: 149, category: 'Bangles', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74a43d?q=80&w=400&auto=format&fit=crop', badge: 'Best Seller' },
  { id: 32, name: 'Silver Cuff', price: 499, category: 'Bangles', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400&auto=format&fit=crop', badge: 'Luxury' },
  { id: 33, name: 'Enamel Bangle', price: 99, category: 'Bangles', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74a43d?q=80&w=400&auto=format&fit=crop', badge: 'Classic' },
  { id: 34, name: 'Diamond Bangle', price: 179, category: 'Bangles', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400&auto=format&fit=crop', badge: 'New' },
  { id: 35, name: 'Twist Bangle', price: 129, category: 'Bangles', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74a43d?q=80&w=400&auto=format&fit=crop', badge: '' },
  { id: 36, name: 'Thin Stack', price: 359, category: 'Bangles', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400&auto=format&fit=crop', badge: 'Premium' },
  { id: 37, name: 'Wide Cuff', price: 189, category: 'Bangles', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74a43d?q=80&w=400&auto=format&fit=crop', badge: 'Best Seller' },
  { id: 38, name: 'Pearl Bangle', price: 249, category: 'Bangles', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400&auto=format&fit=crop', badge: '' },
  { id: 39, name: 'Rose Gold Cuff', price: 109, category: 'Bangles', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74a43d?q=80&w=400&auto=format&fit=crop', badge: 'Sale' },
  { id: 40, name: 'Textured Bangle', price: 289, category: 'Bangles', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400&auto=format&fit=crop', badge: 'Luxury' },

  // Earrings (10)
  { id: 41, name: 'Stud Earrings', price: 79, category: 'Earrings', image: 'https://images.unsplash.com/photo-1635773204964-b054210a5628?q=80&w=400&auto=format&fit=crop', badge: 'Best Seller' },
  { id: 42, name: 'Drop Earrings', price: 179, category: 'Earrings', image: 'https://images.unsplash.com/photo-1599643478518-a785e5dc7a1d?q=80&w=400&auto=format&fit=crop', badge: 'Classic' },
  { id: 43, name: 'Hoop Earrings', price: 99, category: 'Earrings', image: 'https://images.unsplash.com/photo-1635773204964-b054210a5628?q=80&w=400&auto=format&fit=crop', badge: 'New' },
  { id: 44, name: 'Chandelier', price: 329, category: 'Earrings', image: 'https://images.unsplash.com/photo-1599643478518-a785e5dc7a1d?q=80&w=400&auto=format&fit=crop', badge: 'Luxury' },
  { id: 45, name: 'Pearl Studs', price: 149, category: 'Earrings', image: 'https://images.unsplash.com/photo-1635773204964-b054210a5628?q=80&w=400&auto=format&fit=crop', badge: '' },
  { id: 46, name: 'Gold Hoops', price: 129, category: 'Earrings', image: 'https://images.unsplash.com/photo-1599643478518-a785e5dc7a1d?q=80&w=400&auto=format&fit=crop', badge: 'Sale' },
  { id: 47, name: 'Gemstone Drops', price: 249, category: 'Earrings', image: 'https://images.unsplash.com/photo-1635773204964-b054210a5628?q=80&w=400&auto=format&fit=crop', badge: 'Premium' },
  { id: 48, name: 'Tassel Earrings', price: 189, category: 'Earrings', image: 'https://images.unsplash.com/photo-1599643478518-a785e5dc7a1d?q=80&w=400&auto=format&fit=crop', badge: '' },
  { id: 49, name: 'Ear Cuffs', price: 69, category: 'Earrings', image: 'https://images.unsplash.com/photo-1635773204964-b054210a5628?q=80&w=400&auto=format&fit=crop', badge: 'New' },
  { id: 50, name: 'Floral Studs', price: 99, category: 'Earrings', image: 'https://images.unsplash.com/photo-1599643478518-a785e5dc7a1d?q=80&w=400&auto=format&fit=crop', badge: '' },
];
export default allProducts;