// lib/order.ts
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  // ✅ Order number
  orderNumber: { type: String, required: true },
  
  // ✅ Amounts
  subtotal: { type: Number, required: true },
  shipping: { type: Number, default: 0 },
  tax: { type: Number, default: 0 },
  totalAmount: { type: Number, required: true },
  
  // ✅ Cart items (products)
  cart: [{
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    image: { type: String }
  }],
  
  // ✅ Shipping details
  shippingInfo: {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String },
    zipCode: { type: String },
    phone: { type: String, required: true }
  },
  
  // ✅ Payment method
  paymentMethod: { type: String, default: 'Cash on Delivery' },
  
  // ✅ Order date
  orderDate: { type: Date, default: Date.now },
  estimatedDelivery: { type: String },
  
  createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);
export default Order;