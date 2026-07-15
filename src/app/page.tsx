import Navbar from '@/components/sections/navbar';
import HeroSection from '@/components/sections/hero-section';
import StatsSection from '@/components/sections/stats-section';
import ServicesSection from '@/components/sections/services-section';
import FlexibilitySection from '@/components/sections/flexibility-section';
import SchedulePricingSection from '@/components/sections/schedule-pricing-section';
import FaqSection from '@/components/sections/faq-section';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-snow text-void font-sans">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <FlexibilitySection />
      <SchedulePricingSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
