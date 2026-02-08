import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Checkout cancelled | Layer Zero Studio',
  description: 'Your checkout was cancelled.',
};

export default function CheckoutCancelPage() {
  return (
    <>
      <Navigation variant="ai" />
      <main className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 bg-[#F3F1ED]">
        <div className="max-w-lg text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] mb-4">
            Checkout cancelled
          </h1>
          <p className="text-[#666666] mb-8">
            You cancelled the checkout. No charge was made. If you have questions, we&apos;re happy to help.
          </p>
          <Link
            href="/#pricing"
            className="inline-block py-4 px-8 border-2 border-[#0A0A0A] text-[#0A0A0A] text-sm font-bold uppercase hover:bg-[#0A0A0A] hover:text-[#F3F1ED] transition-colors"
          >
            Back to pricing
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
