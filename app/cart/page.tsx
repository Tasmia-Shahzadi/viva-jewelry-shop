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

  // Load cart from localStorage on mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Calculate totals - FIXED: price ko number mein convert karo
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
    // Validation
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
        const result = await response.json();
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

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-[#faf8f6] pt-16 flex items-center justify-center">
        <div className="text-[#c5a059]">Loading...</div>
      </div>
    );
  }

  // Receipt Page
  if (currentStep === 3 && orderDetails) {
    return (
      <div className="min-h-screen bg-[#faf8f6] pt-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
          <div className="bg-[#c5a059]/10 border border-[#c5a059]/30 rounded-2xl p-8 text-center mb-8">
            <div className="w-20 h-20 bg-[#c5a059] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#c5a059]/20">
              <CheckCircle className="w-10 h-10 text-black" />
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
                    <p className="text-sm text-gray-600">{orderDetails.shippingInfo.city}, {orderDetails.shippingInfo.zipCode}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">📧 {orderDetails.shippingInfo.email}</p>
                    <p className="text-sm text-gray-600">📱 {orderDetails.shippingInfo.phone}</p>
                    <p className="text-sm text-gray-600">💳 {orderDetails.paymentMethod === 'credit-card' ? 'Credit Card' : 'Cash on Delivery'}</p>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="py-6">
                <p className="text-xs text-gray-400 tracking-wider uppercase mb-4">Order Items</p>
                <div className="space-y-4">
                  {orderDetails?.cart?.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 bg-[#faf8f6] rounded-xl">
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

              {/* Total */}
              <div className="border-t border-gray-200 pt-6">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-800">${(orderDetails?.subtotal || 0).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-800">${(orderDetails?.shipping || 0).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="text-gray-800">${(orderDetails?.tax || 0).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-serif font-light pt-2 border-t border-[#c5a059]/30">
                    <span className="text-gray-800">Total</span>
                    <span className="text-[#c5a059] font-medium text-xl">${(orderDetails?.total || 0).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#faf8f6] px-6 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Truck className="w-4 h-4 text-[#c5a059]" />
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

  // Checkout Page
  if (currentStep === 2) {
    return (
      <div className="min-h-screen bg-[#faf8f6] pt-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-serif font-light text-gray-800">Checkout</h1>
            <div className="w-16 h-[1px] bg-[#c5a059] mx-auto mt-3"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                <h3 className="text-lg font-serif font-light text-gray-800 mb-6 flex items-center gap-2">
                  <Truck className="w-5 h-5 text-[#c5a059]" />
                  Shipping Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-500 tracking-wider uppercase block mb-1">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={shippingInfo.fullName}
                      onChange={handleShippingChange}
                      className="w-full px-4 py-3 border border-gray-200 focus:border-[#c5a059] focus:ring-2 focus:ring-[#c5a059]/20 outline-none rounded-lg text-sm transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 tracking-wider uppercase block mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={shippingInfo.email}
                      onChange={handleShippingChange}
                      className="w-full px-4 py-3 border border-gray-200 focus:border-[#c5a059] focus:ring-2 focus:ring-[#c5a059]/20 outline-none rounded-lg text-sm transition"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-xs text-gray-500 tracking-wider uppercase block mb-1">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={shippingInfo.address}
                      onChange={handleShippingChange}
                      className="w-full px-4 py-3 border border-gray-200 focus:border-[#c5a059] focus:ring-2 focus:ring-[#c5a059]/20 outline-none rounded-lg text-sm transition"
                      placeholder="123 Main Street"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 tracking-wider uppercase block mb-1">City</label>
                    <input
                      type="text"
                      name="city"
                      value={shippingInfo.city}
                      onChange={handleShippingChange}
                      className="w-full px-4 py-3 border border-gray-200 focus:border-[#c5a059] focus:ring-2 focus:ring-[#c5a059]/20 outline-none rounded-lg text-sm transition"
                      placeholder="New York"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 tracking-wider uppercase block mb-1">Zip Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={shippingInfo.zipCode}
                      onChange={handleShippingChange}
                      className="w-full px-4 py-3 border border-gray-200 focus:border-[#c5a059] focus:ring-2 focus:ring-[#c5a059]/20 outline-none rounded-lg text-sm transition"
                      placeholder="10001"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-xs text-gray-500 tracking-wider uppercase block mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={shippingInfo.phone}
                      onChange={handleShippingChange}
                      className="w-full px-4 py-3 border border-gray-200 focus:border-[#c5a059] focus:ring-2 focus:ring-[#c5a059]/20 outline-none rounded-lg text-sm transition"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="text-xs text-gray-500 tracking-wider uppercase block mb-3">Payment Method</label>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setPaymentMethod('credit-card')}
                      className={`flex-1 px-4 py-3 border rounded-lg text-sm transition flex items-center justify-center gap-2 ${
                        paymentMethod === 'credit-card'
                          ? 'border-[#c5a059] bg-[#c5a059]/10 text-[#c5a059] shadow-lg shadow-[#c5a059]/10'
                          : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <CreditCard className="w-4 h-4" />
                      Credit Card
                    </button>
                    <button
                      onClick={() => setPaymentMethod('cod')}
                      className={`flex-1 px-4 py-3 border rounded-lg text-sm transition flex items-center justify-center gap-2 ${
                        paymentMethod === 'cod'
                          ? 'border-[#c5a059] bg-[#c5a059]/10 text-[#c5a059] shadow-lg shadow-[#c5a059]/10'
                          : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <Truck className="w-4 h-4" />
                      Cash on Delivery
                    </button>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="px-6 py-3 border border-gray-300 text-sm tracking-widest uppercase hover:bg-gray-50 hover:border-[#c5a059] transition rounded-lg"
                  >
                    Back to Cart
                  </button>
                  <button
                    onClick={placeOrder}
                    className="flex-1 px-6 py-3 bg-[#c5a059] text-black text-sm tracking-widest uppercase hover:bg-[#d4b06a] transition rounded-lg shadow-lg shadow-[#c5a059]/20"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 sticky top-20 border border-gray-100">
                <h4 className="text-lg font-serif font-light text-gray-800 mb-4 flex items-center gap-2">
                  <Gift className="w-5 h-5 text-[#c5a059]" />
                  Order Summary
                </h4>
                <div className="space-y-4">
                  {cartItems.slice(0, 3).map((item) => {
                    const price = typeof item.price === 'string' ? parseFloat(item.price.replace('$', '')) : item.price;
                    return (
                      <div key={item.id} className="flex gap-3 p-2 hover:bg-gray-50 rounded-lg transition">
                        <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg border border-gray-100" />
                        <div className="flex-1">
                          <p className="text-xs font-medium text-gray-800 truncate">{item.name}</p>
                          <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
                        </div>
                        <p className="text-xs font-medium text-[#c5a059]">${(price * (item.quantity || 1)).toFixed(2)}</p>
                      </div>
                    );
                  })}
                  {cartItems.length > 3 && (
                    <p className="text-xs text-gray-400 text-center">+ {cartItems.length - 3} more items</p>
                  )}
                  <div className="border-t border-gray-200 pt-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-medium">${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-serif font-light pt-2 border-t border-[#c5a059]/30">
                      <span className="text-gray-800">Total</span>
                      <span className="text-[#c5a059] font-medium text-xl">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Cart Page
  return (
    <div className="min-h-screen bg-[#faf8f6] pt-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-light text-gray-800">Shopping Cart</h1>
            <p className="text-gray-500 text-sm mt-1">{cartItems.length} items in your cart</p>
            <div className="w-16 h-[1px] bg-[#c5a059] mt-3"></div>
          </div>
          <Link href="/shop">
            <button className="text-xs text-gray-500 hover:text-[#c5a059] tracking-wider uppercase transition flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-full hover:border-[#c5a059]">
              <ArrowRight className="w-4 h-4 rotate-180" /> Continue Shopping
            </button>
          </Link>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center border border-gray-100">
            <div className="w-24 h-24 bg-[#faf8f6] rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-200">
              <ShoppingBag className="w-12 h-12 text-gray-300" />
            </div>
            <h3 className="text-xl font-serif font-light text-gray-800">Your cart is empty</h3>
            <p className="text-gray-500 text-sm mt-2">Start exploring our collection and add items you love.</p>
            <Link href="/shop">
              <button className="mt-6 px-8 py-3 bg-[#c5a059] text-black text-sm tracking-widest uppercase hover:bg-[#d4b06a] transition rounded-full shadow-lg shadow-[#c5a059]/20">
                Browse Products
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => {
                const price = typeof item.price === 'string' ? parseFloat(item.price.replace('$', '')) : item.price;
                return (
                  <div key={item.id} className="bg-white rounded-2xl shadow-sm p-4 md:p-6 flex gap-4 border border-gray-100 hover:shadow-md transition">
                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg border border-gray-100" />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h4 className="font-serif font-light text-gray-800">{item.name}</h4>
                        <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 transition p-1 hover:bg-red-50 rounded-full">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-[#c5a059] font-medium mt-1">${price}</p>
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                          className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center hover:border-[#c5a059] hover:bg-[#c5a059]/10 transition"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity || 1}</span>
                        <button
                          onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                          className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center hover:border-[#c5a059] hover:bg-[#c5a059]/10 transition"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-serif font-light text-gray-800">${(price * (item.quantity || 1)).toFixed(2)}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 sticky top-20 border border-gray-100">
                <h4 className="text-lg font-serif font-light text-gray-800 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#c5a059]" />
                  Order Summary
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-gray-50">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-50">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-50">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between py-3 text-lg font-serif font-light border-t-2 border-[#c5a059]/30">
                    <span className="text-gray-800">Total</span>
                    <span className="text-[#c5a059] font-medium text-xl">${total.toFixed(2)}</span>
                  </div>
                </div>
                <button
                  onClick={() => setCurrentStep(2)}
                  className="w-full mt-6 px-6 py-3 bg-[#c5a059] text-black text-sm tracking-widest uppercase hover:bg-[#d4b06a] transition rounded-full shadow-lg shadow-[#c5a059]/20"
                >
                  Proceed to Checkout
                </button>
                <div className="flex items-center justify-center gap-2 mt-3 text-[10px] text-gray-400">
                  <Shield className="w-3 h-3 text-[#c5a059]" />
                  <span>Secure Checkout • 256-bit encryption</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}