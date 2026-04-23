import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const VALID_TIERS = ['build', 'partnership'] as const;
type Tier = (typeof VALID_TIERS)[number];

function isTier(value: unknown): value is Tier {
  return typeof value === 'string' && VALID_TIERS.includes(value as Tier);
}

function getStripeClient(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  return new Stripe(key);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const tier = body?.tier;

    if (!isTier(tier)) {
      return NextResponse.json(
        { error: 'Invalid or missing tier. Use "build" or "partnership".' },
        { status: 400 }
      );
    }

    const priceBuild = process.env.STRIPE_PRICE_BUILD;
    const pricePartnership = process.env.STRIPE_PRICE_PARTNERSHIP;
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    const stripe = getStripeClient();
    if (!stripe) {
      return NextResponse.json(
        { error: 'Stripe is not configured.' },
        { status: 500 }
      );
    }

    if (tier === 'build' && !priceBuild) {
      return NextResponse.json(
        { error: 'STRIPE_PRICE_BUILD is not set.' },
        { status: 500 }
      );
    }

    if (tier === 'partnership' && !pricePartnership) {
      return NextResponse.json(
        { error: 'STRIPE_PRICE_PARTNERSHIP is not set.' },
        { status: 500 }
      );
    }

    const priceId = tier === 'build' ? priceBuild! : pricePartnership!;
    const mode: 'payment' | 'subscription' = tier === 'build' ? 'payment' : 'subscription';

    const session = await stripe.checkout.sessions.create({
      mode,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout/cancel`,
      metadata: { tier },
    });

    if (!session.url) {
      return NextResponse.json(
        { error: 'Failed to create checkout session.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('Stripe checkout error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Checkout failed.' },
      { status: 500 }
    );
  }
}
