import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services-section";
import FlexibilitySection from "@/components/sections/flexibility-section";
import SchedulePricingSection from "@/components/sections/schedule-pricing-section";
import FaqSection from "@/components/sections/faq-section";
import Footer from "@/components/sections/footer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <HeroSection />
        <ServicesSection />
        <FlexibilitySection />
        <SchedulePricingSection />
        <FaqSection />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: SITE.name,
            url: SITE.url,
            legalName: SITE.legalName,
            telephone: "+18453831299",
            email: SITE.email,
            description:
              "Professional Class A and Class B CDL training with bilingual instruction and flexible scheduling.",
          }).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
