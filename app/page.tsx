import { Hero } from '@/components/sections/hero';
import { ServicesSection } from '@/components/sections/services';
import { DestinationsSection } from '@/components/sections/destinations/destinations-section';
import { WhyCuratrix } from '@/components/home/WhyCuratrix';
import { AdmissionProcess } from '@/components/home/AdmissionProcess';
import { EligibilityCalculator } from '@/components/home/EligibilityCalculator';
import { FaqSection } from '@/components/home/FaqSection';
import { ConsultationCta } from '@/components/home/ConsultationCta';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section (Strictly Study Abroad) */}
      <Hero />

      {/* 2. End-to-End Study Abroad Services */}
      <ServicesSection />

      {/* 3. Study Destinations (USA, UK, Canada, Germany, Australia) */}
      <DestinationsSection />

      {/* 4. Why Choose Curatrix Section */}
      <WhyCuratrix />

      {/* 5. Study Abroad Roadmap (7-Step Timeline) */}
      <AdmissionProcess />

      {/* 6. Interactive Eligibility Calculator */}
      <EligibilityCalculator />

      {/* 7. Frequently Asked Questions (Accordion) */}
      <FaqSection />

      {/* 8. Contact / Consultation CTA Banner */}
      <ConsultationCta />
    </div>
  );
}
