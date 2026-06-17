// app/api/server-order/route.js
import { NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/mongodb';
import Order from '../../../lib/order';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    console.log("📦 Received Order Data:", JSON.stringify(body, null, 2));
    
    await connectToDatabase();
    console.log("✅ Database connected");

    // ✅ Data ko model ke hisaab se map karein
    const orderData = {
      orderNumber: `ORD-${Date.now()}`,
      subtotal: body.subtotal || 0,
      shipping: body.shipping || 0,
      tax: body.tax || 0,
      totalAmount: body.total || body.totalAmount || 0,
      cart: body.cart || body.items || [],  // ✅ Dono handle karega
      shippingInfo: {
        fullName: body.shippingInfo?.fullName || body.name || '',
        email: body.shippingInfo?.email || body.email || '',
        address: body.shippingInfo?.address || body.address || '',
        city: body.shippingInfo?.city || body.city || '',
        zipCode: body.shippingInfo?.zipCode || body.zipCode || '',
        phone: body.shippingInfo?.phone || body.phone || ''
      },
      paymentMethod: body.paymentMethod || 'Cash on Delivery',
      orderDate: body.orderDate || new Date().toISOString(),
      estimatedDelivery: body.estimatedDelivery || ''
    };

    console.log("📝 Saving Order:", JSON.stringify(orderData, null, 2));

    const newOrder = await Order.create(orderData);
    console.log("✅ Order Saved with ID:", newOrder._id);

    return NextResponse.json({ 
      success: true, 
      message: "Order Saved Successfully", 
      orderId: newOrder._id 
    }, { status: 201 });

  } catch (error: any) {
    console.error("❌ Database Error:", error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: error.message || "Order processing failed" 
      }, 
      { status: 500 }
    );
  }
}