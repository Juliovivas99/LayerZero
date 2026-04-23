import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import Stripe from 'stripe';

function getStripeClient(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  return new Stripe(key);
}

export async function POST(request: NextRequest) {
  const stripe = getStripeClient();
  if (!stripe) {
    return NextResponse.json({ error: 'Stripe is not configured.' }, { status: 500 });
  }

  const body = await request.text();
  const headersList = await headers();
  const signature = headersList.get('stripe-signature');

  if (!signature || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json(
      { error: 'Missing signature or webhook secret.' },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('Stripe webhook signature verification failed:', message);
    return NextResponse.json(
      { error: `Webhook Error: ${message}` },
      { status: 400 }
    );
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      // Payment or subscription started; optionally persist to DB or send confirmation email
      console.log('Checkout completed:', session.id, session.metadata?.tier);
      break;
    }
    case 'customer.subscription.updated': {
      const subscription = event.data.object as Stripe.Subscription;
      console.log('Subscription updated:', subscription.id);
      break;
    }
    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription;
      console.log('Subscription deleted:', subscription.id);
      break;
    }
    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
