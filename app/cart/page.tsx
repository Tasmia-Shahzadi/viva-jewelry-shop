'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Minus, Plus, X, ShoppingBag, Truck, CreditCard, CheckCircle, ArrowRight, Shield, Gift } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
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
  const [orderDetails, setOrderDetails] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  const cartItems = cart || [];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => {
    const price = typeof item.price === 'string' ? parseFloat(item.price.replace('$', '')) : item.price;
    return sum + price * (item.quantity || 1);
  }, 0);
  const shipping = subtotal > 100 ? 0 : 25;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  const handleShippingChange = (e) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = async () => {
    if (!shippingInfo.fullName || !shippingInfo.email || !shippingInfo.address || !shippingInfo.city || !shippingInfo.phone) {
      alert('Please fill in all required fields');
      return;
    }

    const orderNumber = 'VIVA-' + Math.random().toString(36).substring(2, 10).toUpperCase();
    const orderData = {
      orderNumber: orderNumber,
      cart: cartItems.map((item) => ({
        name: item.name,
        price: typeof item.price === 'string' ? parseFloat(item.price.replace('$', '')) : item.price,
        quantity: item.quantity || 1,
        image: item.image
      })),
      shippingInfo: {
        fullName: shippingInfo.fullName,
        email: shippingInfo.email,
        address: shippingInfo.address,
        city: shippingInfo.city,
        zipCode: shippingInfo.zipCode,
        phone: shippingInfo.phone
      },
      paymentMethod: paymentMethod === 'credit-card' ? 'Credit Card' : 'Cash on Delivery',
      subtotal: subtotal,
      shipping: shipping,
      tax: tax,
      total: total,
      orderDate: new Date().toLocaleString(),
      estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    };

    try {
      const response = await fetch('/api/server-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        setOrderDetails(orderData);
        setCurrentStep(3);
        clearCart();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        alert('Error placing order. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Server connection failed.');
    }
  };

  // ... rest of your JSX (same rahega)
}