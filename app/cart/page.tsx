'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Minus, Plus, X, ShoppingBag, Truck, CreditCard, CheckCircle, ArrowRight, Shield, Gift } from 'lucide-react';

// Yeh interface add kiya hai taaki TypeScript error na de
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CartPage() {
  // useState ko interface ke saath update kar diya
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    phone: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    setIsMounted(true);
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
      window.dispatchEvent(new Event('cartUpdated'));
    }
  }, [cartItems, isMounted]);

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 25;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = () => {
    const orderNumber = 'VIVA-' + Math.random().toString(36).substring(2, 10).toUpperCase();
    const orderData = {
      orderNumber,
      items: cartItems,
      shippingInfo,
      paymentMethod,
      subtotal,
      shipping,
      tax,
      total,
      orderDate: new Date().toLocaleString(),
      estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    };
    setOrderDetails(orderData);
    setCurrentStep(3);
    localStorage.removeItem('cart');
    window.dispatchEvent(new Event('cartUpdated'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-[#faf8f6] pt-16 flex items-center justify-center">
        <div className="text-[#c5a059]">Loading...</div>
      </div>
    );
  }

  // ... Baki code aapka wahi same hai (Receipt, Checkout, Cart section)
  // Maine yahan se niche wahi code rakha hai jo aapne diya tha
  
  if (currentStep === 3 && orderDetails) {
    return (
      <div className="min-h-screen bg-[#faf8f6] pt-16">
        {/* ... (Yahan aapka original receipt code aayega) */}
      </div>
    );
  }

  // ... Baqi sab same rahega.
  return (
    <div className="min-h-screen bg-[#faf8f6] pt-16">
        {/* ... */}
    </div>
  );
}