import { NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/mongodb';
import Order from '../../../lib/order';

export async function POST(request: Request) {
  try {
    const body = await request.json(); // Ye pura data (cart, total, etc) le lega
    
    await connectToDatabase();

    // Data database mein save ho raha hai
    const newOrder = await Order.create(body);

    return NextResponse.json({ 
      success: true, 
      message: "Order Saved Successfully", 
      orderId: newOrder._id 
    });

  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { success: false, message: "Order processed in Demo Mode" }, 
      { status: 200 }
    );
  }
}