import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  orderNumber: String,
  totalAmount: Number,
  cart: [{
    name: String,   // Product ka naam
    price: Number,  // Product ki price
    quantity: Number
  }],
  createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);
export default Order;