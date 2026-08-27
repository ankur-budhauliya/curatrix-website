import type { Metadata } from 'next';
import { TouristVisaHero } from '@/components/tourist-visa/tourist-visa-hero';
import { TouristVisaDestinations } from '@/components/tourist-visa/tourist-visa-destinations';
import { TouristVisaServices } from '@/components/tourist-visa/tourist-visa-services';
import { TouristVisaProcess } from '@/components/tourist-visa/tourist-visa-process';
import { TouristVisaDocuments } from '@/components/tourist-visa/tourist-visa-documents';
import { TouristVisaFaqs } from '@/components/tourist-visa/tourist-visa-faqs';
import { TouristVisaNotice } from '@/components/tourist-visa/tourist-visa-notice';
import { TouristVisaCta } from '@/components/tourist-visa/tourist-visa-cta';

export const metadata: Metadata = {
  title: 'Tourist Visa Services | Curatrix Private Limited',
  description:
    'Professional Tourist Visa assistance for selected countries including Ireland, Sri Lanka, UAE, Malaysia, Vietnam, Indonesia, USA, UK, Australia, and Canada by Curatrix Private Limited.',
  keywords: [
    'Tourist Visa Consultant',
    'Ireland Tourist Visa',
    'Sri Lanka ETA',
    'UAE Tourist Visa',
    'Malaysia Tourist Visa',
    'Vietnam eVisa',
    'Indonesia Tourist Visa',
    'USA Tourist Visa',
    'UK Tourist Visa',
    'Australia Tourist Visa',
    'Canada Tourist Visa',
    'Tourist Visa Services',
    'Curatrix Private Limited',
  ],
  openGraph: {
    title: 'Tourist Visa Services | Curatrix Private Limited',
    description:
      'Professional Tourist Visa assistance, document verification, and filing guidance across 10 selected international destinations.',
    url: 'https://curatrix.co.in/tourist-visa',
    siteName: 'Curatrix Private Limited',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'Curatrix Private Limited Official Emblem',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function TouristVisaPage() {
  return (
    <div className="flex flex-col">
      {/* 1. Tourist Visa Hero (Plane Visual) */}
      <TouristVisaHero />

      {/* 2. Countries We Cover (10 Destinations) */}
      <TouristVisaDestinations />

      {/* 3. Why Choose Curatrix for Tourist Visas (Tourist Visual + Services) */}
      <TouristVisaServices />

      {/* 4. Simple Visa Process Timeline (6 Steps) */}
      <TouristVisaProcess />

      {/* 5. Required Documents Checklist */}
      <TouristVisaDocuments />

      {/* 6. Frequently Asked Questions */}
      <TouristVisaFaqs />

      {/* 7. Important Embassy Disclaimer & Advisory Notice */}
      <TouristVisaNotice />

      {/* 8. Bottom Consultation Call-to-Action */}
      <TouristVisaCta />
    </div>
  );
}
