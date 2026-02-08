import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Thank you | Layer Zero Studio',
  description: 'Your payment was successful.',
};

export default function CheckoutSuccessPage() {
  return (
    <>
      <Navigation variant="ai" />
      <main className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 bg-[#F3F1ED]">
        <div className="max-w-lg text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] mb-4">
            Thank you
          </h1>
          <p className="text-[#666666] mb-8">
            Your payment was successful. We&apos;ll be in touch shortly to get started.
          </p>
          <Link
            href="/#pricing"
            className="inline-block py-4 px-8 bg-[#0A0A0A] text-[#F3F1ED] text-sm font-bold uppercase hover:bg-[#FF4D00] transition-colors"
          >
            Back to pricing
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
