import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import WorkSection from '@/components/home/WorkSection';
import ServicesSection from '@/components/home/ServicesSection';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <>
      <Navigation variant="home" />
      <main>
        <Hero />
        <WorkSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
