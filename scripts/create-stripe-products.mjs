/**
 * One-time script: creates Stripe products and prices, prints Price IDs for .env.local
 * Run: node scripts/create-stripe-products.mjs
 */
import Stripe from 'stripe';

const key = process.env.STRIPE_SECRET_KEY;
if (!key) {
  console.error('Set STRIPE_SECRET_KEY in env');
  process.exit(1);
}
const mode = key.startsWith('sk_test_') ? 'TEST' : 'LIVE';
console.log(`Creating products in Stripe ${mode} mode...\n`);

const stripe = new Stripe(key);

async function main() {
  // Product 1: Autonomous Infrastructure Build — one-time $10000
  const buildProduct = await stripe.products.create({
    name: 'Autonomous Infrastructure Build',
    description: 'Systems Blueprint Session plus build and deploy of production automations. Final price based on complexity.',
  });
  const buildPrice = await stripe.prices.create({
    product: buildProduct.id,
    unit_amount: 10000_00, // $10000 in cents
    currency: 'usd',
  });

  // Product 2: Managed Momentum Partnership — $15000/month
  const partnershipProduct = await stripe.products.create({
    name: 'Managed Momentum Partnership',
    description: 'Ongoing engineering + optimization. Fixed monthly retainer.',
  });
  const partnershipPrice = await stripe.prices.create({
    product: partnershipProduct.id,
    unit_amount: 15000_00, // $15000 in cents
    currency: 'usd',
    recurring: { interval: 'month' },
  });

  console.log('\nAdd these to .env.local:\n');
  console.log(`STRIPE_PRICE_BUILD=${buildPrice.id}`);
  console.log(`STRIPE_PRICE_PARTNERSHIP=${partnershipPrice.id}`);
  console.log('');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
