import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AIHero from '@/components/ai/AIHero';
import ArchitectureGrid from '@/components/ai/ArchitectureGrid';
import ProcessTimeline from '@/components/ai/ProcessTimeline';
import PricingSection from '@/components/ai/PricingSection';
import ContactSection from '@/components/ai/ContactSection';

export const metadata = {
  title: 'AI Services | Layer Zero Studio',
  description: 'Enterprise-grade AI automation architecture. We build the infrastructure that scales your business autonomously.',
};

export default function AIServicesPage() {
  return (
    <>
      <Navigation variant="ai" />
      <main>
        <AIHero />
        <ArchitectureGrid />
        <ProcessTimeline />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
