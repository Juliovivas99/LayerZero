'use client';

import Link from 'next/link';
import { useContactModal } from '@/components/ContactModalProvider';

export default function FAQCTASection() {
  const { openContactModal } = useContactModal();

  return (
    <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-12 bg-[#0A0A0A] text-[#F3F1ED]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          Still Have Questions?
        </h2>
        <p className="text-base sm:text-lg text-[#F3F1ED]/70 mb-8 max-w-2xl mx-auto leading-relaxed">
          Book a free 30-minute consultation. We&apos;ll answer your specific questions and help you understand what&apos;s possible for your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={openContactModal}
            className="inline-block px-8 py-4 bg-[#f97316] text-white font-bold hover:bg-[#ea580c] transition-colors uppercase text-sm"
          >
            Book a call
          </button>
          <Link 
            href="/" 
            className="inline-block px-8 py-4 border-2 border-white/10 bg-white/5 text-white font-bold hover:bg-white/10 transition-colors uppercase text-sm"
          >
            View all services
          </Link>
        </div>
      </div>
    </section>
  );
}
