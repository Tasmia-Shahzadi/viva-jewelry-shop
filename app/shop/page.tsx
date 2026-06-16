'use client';

import { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, X, Eye, ShoppingCart, Check, User, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

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
  { id: 21, name: 'Pearl Strand', price: 249, category: 'Necklace', image: 'https://images.unsplash.com/photo-1589679102716-11f8e12d46e3?q=80&w=400&auto=format&fit=crop', badge: 'Best Seller' },
  { id: 22, name: 'Gold Chain', price: 389, category: 'Necklace', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=400&auto=format&fit=crop', badge: 'Luxury' },
  { id: 23, name: 'Pendant Necklace', price: 179, category: 'Necklace', image: 'https://images.unsplash.com/photo-1599643478518-a785e5dc7a1d?q=80&w=400&auto=format&fit=crop', badge: 'Classic' },
  { id: 24, name: 'Choker Set', price: 99, category: 'Necklace', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=400&auto=format&fit=crop', badge: 'Sale' },
  { id: 25, name: 'Lariat Necklace', price: 799, category: 'Necklace', image: 'https://images.unsplash.com/photo-1599643478518-a785e5dc7a1d?q=80&w=400&auto=format&fit=crop', badge: 'Premium' },
  { id: 26, name: 'Collar Necklace', price: 129, category: 'Necklace', image: 'https://images.unsplash.com/photo-1589679102716-11f8e12d46e3?q=80&w=400&auto=format&fit=crop', badge: '' },
  { id: 27, name: 'Bib Necklace', price: 219, category: 'Necklace', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=400&auto=format&fit=crop', badge: 'New' },
  { id: 28, name: 'Tassel Necklace', price: 149, category: 'Necklace', image: 'https://images.unsplash.com/photo-1599643478518-a785e5dc7a1d?q=80&w=400&auto=format&fit=crop', badge: '' },
  { id: 29, name: 'Gemstone Pendant', price: 329, category: 'Necklace', image: 'https://images.unsplash.com/photo-1589679102716-11f8e12d46e3?q=80&w=400&auto=format&fit=crop', badge: 'Best Seller' },
  { id: 30, name: 'Layered Necklace', price: 199, category: 'Necklace', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=400&auto=format&fit=crop', badge: '' },

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

const categories = ['All', 'Watches', 'Rings', 'Necklace', 'Bangles', 'Earrings'];

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [wishlist, setWishlist] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const [buyNowProduct, setBuyNowProduct] = useState(null);
  const [showBuyNowModal, setShowBuyNowModal] = useState(false);
  const [isBuyNowSubmitting, setIsBuyNowSubmitting] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  
  // User Information State
  const [userInfo, setUserInfo] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  useEffect(() => {
    setIsMounted(true);
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = existingCart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(existingCart));
    setCartItems(existingCart);
    
    setAddedToCart({ ...addedToCart, [product.id]: true });
    setTimeout(() => {
      setAddedToCart({ ...addedToCart, [product.id]: false });
    }, 2000);
    
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const openQuickView = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeQuickView = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  const buyNow = (product) => {
    setBuyNowProduct(product);
    setShowBuyNowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeBuyNowModal = () => {
    setShowBuyNowModal(false);
    setBuyNowProduct(null);
    setUserInfo({
      fullName: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      phone: '',
    });
    document.body.style.overflow = 'auto';
  };

  const handleUserInfoChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const placeDirectOrder = () => {
    // Validate form
    if (!userInfo.fullName || !userInfo.email || !userInfo.address || !userInfo.city || !userInfo.phone) {
      alert('Please fill in all required fields');
      return;
    }

    setIsBuyNowSubmitting(true);
    
    setTimeout(() => {
      const orderNumber = 'VIVA-' + Math.random().toString(36).substring(2, 10).toUpperCase();
      const orderData = {
        orderNumber,
        items: [{ ...buyNowProduct, quantity: 1 }],
        shippingInfo: userInfo,
        paymentMethod: paymentMethod,
        subtotal: buyNowProduct.price,
        shipping: 0,
        tax: buyNowProduct.price * 0.05,
        total: buyNowProduct.price + (buyNowProduct.price * 0.05),
        orderDate: new Date().toLocaleString(),
        estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
      };
      setOrderDetails(orderData);
      setIsBuyNowSubmitting(false);
      setShowBuyNowModal(false);
      document.body.style.overflow = 'auto';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  if (!isMounted) return null;

  // Receipt Page for Buy Now
  if (orderDetails) {
    return (
      <div className="min-h-screen bg-[#faf8f6] pt-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
          <div className="bg-[#c5a059]/10 border border-[#c5a059]/30 rounded-2xl p-8 text-center mb-8">
            <div className="w-20 h-20 bg-[#c5a059] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#c5a059]/20">
              <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-light text-gray-800">Order Placed Successfully!</h2>
            <p className="text-gray-600 text-sm mt-2">Thank you for your purchase. Your order has been confirmed.</p>
            <div className="mt-4 inline-block px-6 py-2 bg-[#c5a059] text-black text-sm tracking-wider rounded-full font-medium">
              Order #: {orderDetails.orderNumber}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-[#0a0806] text-white p-6 md:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-serif font-light text-[#c5a059]">VIVA</h3>
                  <p className="text-xs text-gray-400 tracking-widest mt-1">Luxury Jewelry</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400 tracking-wider">Receipt</p>
                  <p className="text-xs text-[#c5a059] mt-1 font-medium">{orderDetails.orderNumber}</p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-gray-100 pb-6">
                <div>
                  <p className="text-xs text-gray-400 tracking-wider uppercase">Order Date</p>
                  <p className="text-sm text-gray-800 mt-1 font-medium">{orderDetails.orderDate}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 tracking-wider uppercase">Estimated Delivery</p>
                  <p className="text-sm text-gray-800 mt-1 font-medium">{orderDetails.estimatedDelivery}</p>
                </div>
              </div>

              <div className="border-b border-gray-100 py-6">
                <p className="text-xs text-gray-400 tracking-wider uppercase mb-3">Shipping Details</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-800">{orderDetails.shippingInfo.fullName}</p>
                    <p className="text-sm text-gray-600">{orderDetails.shippingInfo.address}</p>
                    <p className="text-sm text-gray-600">{orderDetails.shippingInfo.city}, {orderDetails.shippingInfo.state} {orderDetails.shippingInfo.zipCode}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">📧 {orderDetails.shippingInfo.email}</p>
                    <p className="text-sm text-gray-600">📱 {orderDetails.shippingInfo.phone}</p>
                    <p className="text-sm text-gray-600">💳 {orderDetails.paymentMethod === 'credit-card' ? 'Credit Card' : 'Cash on Delivery'}</p>
                  </div>
                </div>
              </div>

              <div className="py-6">
                <p className="text-xs text-gray-400 tracking-wider uppercase mb-4">Order Items</p>
                <div className="space-y-4">
                  {orderDetails.items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-3 bg-[#faf8f6] rounded-xl">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800">{item.name}</p>
                        <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-sm font-medium text-[#c5a059]">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-800">${orderDetails.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-800">${orderDetails.shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="text-gray-800">${orderDetails.tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-serif font-light pt-2 border-t border-[#c5a059]/30">
                    <span className="text-gray-800">Total</span>
                    <span className="text-[#c5a059] font-medium text-xl">${orderDetails.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#faf8f6] px-6 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <svg className="w-4 h-4 text-[#c5a059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Order confirmed • Processing • Shipped soon</span>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => window.print()}
                  className="px-6 py-2 border border-gray-300 text-xs tracking-widest uppercase hover:bg-[#c5a059] hover:text-black hover:border-[#c5a059] transition rounded-full"
                >
                  Print Receipt
                </button>
                <Link href="/">
                  <button className="px-6 py-2 bg-[#c5a059] text-black text-xs tracking-widest uppercase hover:bg-[#d4b06a] transition rounded-full shadow-lg shadow-[#c5a059]/20">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Background Image */}
      <div 
        className="relative py-20 md:py-28 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <span className="text-[#c5a059] text-sm tracking-[0.4em] uppercase font-light">Luxury Collection</span>
          <h1 className="text-4xl md:text-6xl font-serif font-light text-white mt-3 tracking-wide">
            Our Collection
          </h1>
          <p className="text-gray-300 text-sm md:text-base font-light mt-3 tracking-wider max-w-2xl mx-auto">
            Discover 50 exquisite pieces of luxury jewelry crafted with precision and passion
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="w-12 h-[1px] bg-[#c5a059]"></span>
            <span className="text-[#c5a059] text-xs">✦</span>
            <span className="w-12 h-[1px] bg-[#c5a059]"></span>
          </div>
        </div>
      </div>

      {/* Search & Filter Section */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 focus:border-[#c5a059] outline-none rounded-full text-sm transition-colors"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 text-xs uppercase tracking-widest transition-all rounded-full whitespace-nowrap ${
                  selectedCategory === cat 
                    ? 'bg-[#c5a059] text-black' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-[#c5a059] hover:text-[#c5a059]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="text-sm text-gray-500 mb-6">
          Showing {filteredProducts.length} of {allProducts.length} products
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                
                {product.badge && (
                  <span className={`absolute top-3 left-3 text-[10px] px-3 py-1 tracking-widest uppercase font-medium rounded-full ${
                    product.badge === 'Sale' ? 'bg-red-500 text-white' :
                    product.badge === 'Best Seller' ? 'bg-[#c5a059] text-black' :
                    product.badge === 'Luxury' || product.badge === 'Premium' ? 'bg-black text-white' :
                    'bg-white/90 text-black'
                  }`}>
                    {product.badge}
                  </span>
                )}

                <button 
                  onClick={() => toggleWishlist(product.id)} 
                  className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all z-10"
                >
                  <Heart className={`w-4 h-4 transition-colors ${wishlist.includes(product.id) ? 'fill-[#c5a059] text-[#c5a059]' : 'text-gray-600'}`} />
                </button>

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                  <button 
                    onClick={() => openQuickView(product)}
                    className="px-6 py-2 bg-white text-black text-xs tracking-widest uppercase font-medium hover:bg-[#c5a059] hover:text-white transition rounded-full flex items-center gap-2"
                  >
                    <Eye className="w-3 h-3" /> Quick View
                  </button>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-sm font-serif font-light text-gray-800 group-hover:text-[#c5a059] transition-colors truncate">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-[#c5a059] font-medium">${product.price}</p>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider">{product.category}</span>
                </div>
                <div className="flex gap-2 mt-3">
                  <button 
                    onClick={() => addToCart(product)} 
                    className={`flex-1 py-2 text-[10px] uppercase tracking-widest transition rounded-full flex items-center justify-center gap-1 ${
                      addedToCart[product.id] 
                        ? 'bg-green-500 text-white border-green-500' 
                        : 'border border-gray-300 hover:bg-black hover:text-white hover:border-black'
                    }`}
                  >
                    {addedToCart[product.id] ? (
                      <>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Added
                      </>
                    ) : (
                      'Add to Cart'
                    )}
                  </button>
                  <button 
                    onClick={() => buyNow(product)}
                    className="flex-1 py-2 bg-[#c5a059] text-black text-[10px] uppercase tracking-widest hover:bg-[#d4b06a] transition rounded-full"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg font-light">No products found</p>
            <p className="text-gray-400 text-sm mt-2">Try adjusting your search or filter</p>
          </div>
        )}

        {/* Quick View Modal */}
        {isModalOpen && selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeQuickView}></div>
            <div className="relative bg-white rounded-2xl max-w-2xl w-full p-6 md:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
              <button 
                onClick={closeQuickView}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    className="w-full aspect-square object-cover rounded-xl"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center">
                  <span className="text-[#c5a059] text-xs tracking-[0.3em] uppercase">{selectedProduct.category}</span>
                  <h3 className="text-2xl font-serif font-light text-gray-800 mt-2">{selectedProduct.name}</h3>
                  <p className="text-[#c5a059] text-2xl font-medium mt-2">${selectedProduct.price}</p>
                  {selectedProduct.badge && (
                    <span className={`inline-block mt-2 text-[10px] px-3 py-1 tracking-widest uppercase font-medium rounded-full w-fit ${
                      selectedProduct.badge === 'Sale' ? 'bg-red-500 text-white' :
                      selectedProduct.badge === 'Best Seller' ? 'bg-[#c5a059] text-black' :
                      selectedProduct.badge === 'Luxury' || selectedProduct.badge === 'Premium' ? 'bg-black text-white' :
                      'bg-gray-200 text-gray-700'
                    }`}>
                      {selectedProduct.badge}
                    </span>
                  )}
                  <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div className="flex gap-3 mt-6">
                    <button 
                      onClick={() => {
                        addToCart(selectedProduct);
                        closeQuickView();
                      }}
                      className="flex-1 py-3 border border-gray-300 text-xs tracking-widest uppercase hover:bg-black hover:text-white hover:border-black transition rounded-full"
                    >
                      Add to Cart
                    </button>
                    <button 
                      onClick={() => {
                        buyNow(selectedProduct);
                        closeQuickView();
                      }}
                      className="flex-1 py-3 bg-[#c5a059] text-black text-xs tracking-widest uppercase hover:bg-[#d4b06a] transition rounded-full"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Buy Now - User Information Modal */}
        {showBuyNowModal && buyNowProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeBuyNowModal}></div>
            <div className="relative bg-white rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
              <button 
                onClick={closeBuyNowModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#c5a059]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ShoppingCart className="w-8 h-8 text-[#c5a059]" />
                </div>
                <h3 className="text-xl font-serif font-light text-gray-800">Complete Your Order</h3>
                <p className="text-gray-500 text-sm mt-1">Please fill in your details to place the order</p>
              </div>

              {/* Product Summary */}
              <div className="flex items-center gap-4 p-4 bg-[#faf8f6] rounded-xl mb-6">
                <img src={buyNowProduct.image} alt={buyNowProduct.name} className="w-16 h-16 object-cover rounded-lg" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{buyNowProduct.name}</p>
                  <p className="text-[#c5a059] font-semibold">${buyNowProduct.price}</p>
                </div>
              </div>

              {/* User Information Form */}
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-gray-500 tracking-wider uppercase block mb-1">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      name="fullName"
                      value={userInfo.fullName}
                      onChange={handleUserInfoChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-[#faf8f6] border border-gray-200 focus:border-[#c5a059] focus:ring-2 focus:ring-[#c5a059]/20 outline-none rounded-lg text-sm transition"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-500 tracking-wider uppercase block mb-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={userInfo.email}
                      onChange={handleUserInfoChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-[#faf8f6] border border-gray-200 focus:border-[#c5a059] focus:ring-2 focus:ring-[#c5a059]/20 outline-none rounded-lg text-sm transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-500 tracking-wider uppercase block mb-1">Address *</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      name="address"
                      value={userInfo.address}
                      onChange={handleUserInfoChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-[#faf8f6] border border-gray-200 focus:border-[#c5a059] focus:ring-2 focus:ring-[#c5a059]/20 outline-none rounded-lg text-sm transition"
                      placeholder="123 Main Street"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-500 tracking-wider uppercase block mb-1">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={userInfo.city}
                      onChange={handleUserInfoChange}
                      required
                      className="w-full px-4 py-3 bg-[#faf8f6] border border-gray-200 focus:border-[#c5a059] focus:ring-2 focus:ring-[#c5a059]/20 outline-none rounded-lg text-sm transition"
                      placeholder="New York"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 tracking-wider uppercase block mb-1">State</label>
                    <input
                      type="text"
                      name="state"
                      value={userInfo.state}
                      onChange={handleUserInfoChange}
                      className="w-full px-4 py-3 bg-[#faf8f6] border border-gray-200 focus:border-[#c5a059] focus:ring-2 focus:ring-[#c5a059]/20 outline-none rounded-lg text-sm transition"
                      placeholder="NY"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-500 tracking-wider uppercase block mb-1">Zip Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={userInfo.zipCode}
                      onChange={handleUserInfoChange}
                      className="w-full px-4 py-3 bg-[#faf8f6] border border-gray-200 focus:border-[#c5a059] focus:ring-2 focus:ring-[#c5a059]/20 outline-none rounded-lg text-sm transition"
                      placeholder="10001"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 tracking-wider uppercase block mb-1">Phone *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={userInfo.phone}
                        onChange={handleUserInfoChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-[#faf8f6] border border-gray-200 focus:border-[#c5a059] focus:ring-2 focus:ring-[#c5a059]/20 outline-none rounded-lg text-sm transition"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-500 tracking-wider uppercase block mb-2">Payment Method</label>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setPaymentMethod('credit-card')}
                      className={`flex-1 px-4 py-2.5 border rounded-lg text-sm transition flex items-center justify-center gap-2 ${
                        paymentMethod === 'credit-card'
                          ? 'border-[#c5a059] bg-[#c5a059]/10 text-[#c5a059]'
                          : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      Credit Card
                    </button>
                    <button
                      onClick={() => setPaymentMethod('cod')}
                      className={`flex-1 px-4 py-2.5 border rounded-lg text-sm transition flex items-center justify-center gap-2 ${
                        paymentMethod === 'cod'
                          ? 'border-[#c5a059] bg-[#c5a059]/10 text-[#c5a059]'
                          : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Cash on Delivery
                    </button>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={closeBuyNowModal}
                    className="flex-1 px-6 py-3 border border-gray-300 text-sm tracking-widest uppercase hover:bg-gray-50 transition rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={placeDirectOrder}
                    disabled={isBuyNowSubmitting}
                    className="flex-1 px-6 py-3 bg-[#c5a059] text-black text-sm tracking-widest uppercase hover:bg-[#d4b06a] transition rounded-lg shadow-lg shadow-[#c5a059]/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isBuyNowSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      'Place Order'
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-[#0a0806] text-white mt-12">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 border-b border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-serif font-light text-[#c5a059]">50+</p>
              <p className="text-xs text-gray-400 tracking-widest uppercase mt-2">Exclusive Products</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif font-light text-[#c5a059]">100%</p>
              <p className="text-xs text-gray-400 tracking-widest uppercase mt-2">Authentic Gems</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif font-light text-[#c5a059]">4.9★</p>
              <p className="text-xs text-gray-400 tracking-widest uppercase mt-2">Customer Rating</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif font-light text-[#c5a059]">24/7</p>
              <p className="text-xs text-gray-400 tracking-widest uppercase mt-2">Customer Support</p>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-gray-500 tracking-[0.3em] uppercase font-light">
            © 2026 Viva Jewelry. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-[10px] text-gray-500 hover:text-[#c5a059] tracking-[0.2em] uppercase font-light transition">
              Privacy Policy
            </Link>
            <span className="w-px h-3 bg-gray-700"></span>
            <Link href="#" className="text-[10px] text-gray-500 hover:text-[#c5a059] tracking-[0.2em] uppercase font-light transition">
              Terms of Service
            </Link>
            <span className="w-px h-3 bg-gray-700"></span>
            <Link href="#" className="text-[10px] text-gray-500 hover:text-[#c5a059] tracking-[0.2em] uppercase font-light transition">
              Cookie Policy
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-gray-500 tracking-[0.2em] uppercase font-light">Secure Payment</span>
            <span className="text-xs text-gray-500">💳 🔒</span>
          </div>
        </div>
      </div>
    </div>
  );
}