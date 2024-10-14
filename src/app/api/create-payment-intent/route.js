import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16", // Ensure you're using the latest Stripe API version
});

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      orderNumber,
      date,
      time,
      pickup,
      destination,
      vehicleName,
      passengers,
      totalPrice,
      contact,
    } = body;

    // Validate required fields
    if (!orderNumber || !totalPrice || !vehicleName || !contact) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (!contact.name || !contact.email || !contact.phone) {
      return NextResponse.json(
        { error: "Incomplete contact information." },
        { status: 400 }
      );
    }

    // Create or retrieve existing customer
    const existingCustomers = await stripe.customers.list({
      email: contact.email,
      limit: 1,
    });

    let customer;
    if (existingCustomers.data.length > 0) {
      customer = existingCustomers.data[0];
    } else {
      customer = await stripe.customers.create({
        email: contact.email,
        name: contact.name,
        phone: contact.phone,
        metadata: {
          orderNumber,
          date,
          time,
          pickup,
          destination,
          vehicleName,
          passengers: passengers?.toString() || "N/A",
        },
      });
    }

    // Create a Checkout Session to charge $20 upfront and save payment method
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer: customer.id,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Booking Order #${orderNumber}`,
              description: `Initial Confirmation Payment of $20 for Booking #${orderNumber}. Total Price: $${totalPrice}.`,
            },
            unit_amount: Math.round(20 * 100), // Charge $20 upfront (in cents)
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      payment_intent_data: {
        setup_future_usage: "off_session", // Set at PaymentIntent level
      },
      success_url: `${request.headers.get(
        "origin"
      )}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get("origin")}/cancel`,
      metadata: {
        orderNumber,
        date,
        time,
        pickup,
        destination,
        vehicleName,
        passengers: passengers?.toString() || "N/A",
        totalPrice: totalPrice.toString(),
      },
    });

    // Optionally, store the order details in your database with status "Pending Payment"

    // Return session URL for frontend to redirect user to Stripe Checkout
    return NextResponse.json({ sessionId: session.id }, { status: 200 });
  } catch (err) {
    console.error("Error creating checkout session:", err.message);
    return NextResponse.json(
      { error: "Server Error", details: err.message },
      { status: 500 }
    );
  }
}
