import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DeploymentFAQ from '@/components/ai/DeploymentFAQ';
import FAQCTASection from '@/components/ai/FAQCTASection';

export const metadata = {
  title: 'FAQ | Layer Zero Studio',
  description: 'Frequently asked questions about AI deployment, custom infrastructure builds, pricing, security, and support.',
};

export default function FAQPage() {
  return (
    <>
      <Navigation variant="ai" />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-20 md:pb-24 overflow-hidden bg-[#050505] text-zinc-400">
          {/* Background Grid */}
          <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-[0.03] pointer-events-none"></div>
          <div className="absolute top-0 inset-x-0 h-[600px] hero-glow pointer-events-none"></div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
            <div className="flex flex-col items-center text-center">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#f97316]/20 bg-[#f97316]/5 text-[#f97316] text-[10px] sm:text-[11px] font-mono mb-6 sm:mb-8 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f97316] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f97316]"></span>
                </span>
                FREQUENTLY ASKED QUESTIONS
              </div>

              {/* Main Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-white mb-6 sm:mb-8 max-w-4xl leading-tight">
                Everything you need to know<br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#f97316] to-[#c2410c]">about our AI services.</span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-500 max-w-2xl font-light leading-relaxed mb-8 sm:mb-10 px-4 sm:px-0">
                From deployment and pricing to security and support—answers to the most common questions about working with Layer Zero Studio.
              </p>

              {/* Quick Links */}
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="#faq" className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-white text-sm hover:bg-white/10 transition-all backdrop-blur-md">
                  View all questions
                </a>
                <a href="/deployment" className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-white text-sm hover:bg-white/10 transition-all backdrop-blur-md">
                  White-glove deployment
                </a>
                <a href="/custom-builds" className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-white text-sm hover:bg-white/10 transition-all backdrop-blur-md">
                  Custom builds
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <div id="faq">
          <DeploymentFAQ />
        </div>

        {/* CTA Section */}
        <FAQCTASection />
      </main>
      <Footer />
    </>
  );
}
