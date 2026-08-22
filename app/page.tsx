import { Hero } from '@/components/sections/hero';
import { TrustSection } from '@/components/sections/trust-section';
import { ServicesSection } from '@/components/sections/services';

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustSection />
      <ServicesSection />
    </div>
  );
}
