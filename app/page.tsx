import { Hero } from '@/components/sections/hero';
import { TrustSection } from '@/components/sections/trust-section';
import { ServicesSection } from '@/components/sections/services';
import { WhyCuratrix } from '@/components/home/WhyCuratrix';
import { DestinationsSection } from '@/components/sections/destinations/destinations-section';
import { AdmissionProcess } from '@/components/home/AdmissionProcess';
import { FaqSection } from '@/components/home/FaqSection';
import { ConsultationCta } from '@/components/home/ConsultationCta';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust Section (University Logos Marquee, Success Metrics & Accreditations) */}
      <TrustSection />

      {/* 3. Services Section */}
      <ServicesSection />

      {/* 4. Why Choose Curatrix Section */}
      <WhyCuratrix />

      {/* 5. Study Destinations Section (USA, UK, Canada, Germany, Australia) */}
      <DestinationsSection />

      {/* 6. Admission Process Roadmap (7-Step Horizontal Timeline) */}
      <AdmissionProcess />

      {/* 7. Frequently Asked Questions (Accordion) */}
      <FaqSection />

      {/* 8. Consultation CTA Banner (WhatsApp Direct) */}
      <ConsultationCta />
    </div>
  );
}
