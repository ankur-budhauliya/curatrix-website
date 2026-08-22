import { Hero } from '@/components/sections/hero';
import { TrustSection } from '@/components/sections/trust-section';
import { ServicesSection } from '@/components/sections/services';
import { DestinationsSection } from '@/components/sections/destinations/destinations-section';
import { WhyCuratrix } from '@/components/home/WhyCuratrix';

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustSection />
      <ServicesSection />
      <DestinationsSection />
      <WhyCuratrix />
    </div>
  );
}
