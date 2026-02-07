import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AIHero from '@/components/ai/AIHero';
import ServicesComparison from '@/components/ai/ServicesComparison';
import WhyUs from '@/components/ai/WhyUs';
import UseCases from '@/components/ai/UseCases';

export const metadata = {
  title: 'Layer Zero Studio',
  description: 'Enterprise-grade AI automation architecture. We build the infrastructure that scales your business autonomously.',
};

export default function Home() {
  return (
    <>
      <Navigation variant="ai" />
      <main>
        <AIHero showCTAs={false} />
        <ServicesComparison />
        <WhyUs />
        <UseCases />
      </main>
      <Footer />
    </>
  );
}
