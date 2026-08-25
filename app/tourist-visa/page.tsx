import type { Metadata } from 'next';
import { TouristVisaHero } from '@/components/tourist-visa/tourist-visa-hero';
import { TouristVisaDestinations } from '@/components/tourist-visa/tourist-visa-destinations';
import { TouristVisaProcess } from '@/components/tourist-visa/tourist-visa-process';
import { TouristVisaDocuments } from '@/components/tourist-visa/tourist-visa-documents';
import { TouristVisaFaqs } from '@/components/tourist-visa/tourist-visa-faqs';
import { TouristVisaNotice } from '@/components/tourist-visa/tourist-visa-notice';
import { TouristVisaCta } from '@/components/tourist-visa/tourist-visa-cta';

export const metadata: Metadata = {
  title: 'Tourist Visa Services | Curatrix Private Limited',
  description:
    'Professional Tourist Visa assistance for selected countries including USA, UK, Canada, Germany, UAE, Singapore, and Thailand by Curatrix Private Limited.',
  keywords: [
    'Tourist Visa Consultant',
    'USA Tourist Visa',
    'UK Tourist Visa',
    'Canada Tourist Visa',
    'Germany Tourist Visa',
    'UAE Tourist Visa',
    'Singapore Tourist Visa',
    'Thailand Tourist Visa',
    'Tourist Visa Services',
    'Curatrix Private Limited',
  ],
  openGraph: {
    title: 'Tourist Visa Services | Curatrix Private Limited',
    description:
      'Professional Tourist Visa assistance, document verification, and filing guidance across selected international destinations.',
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
      {/* 1. Tourist Visa Hero */}
      <TouristVisaHero />

      {/* 2. Countries We Serve (7 Destinations) */}
      <TouristVisaDestinations />

      {/* 3. Simple Visa Process Timeline (6 Steps) */}
      <TouristVisaProcess />

      {/* 4. Required Documents Checklist */}
      <TouristVisaDocuments />

      {/* 5. Frequently Asked Questions */}
      <TouristVisaFaqs />

      {/* 6. Important Embassy Disclaimer & Advisory Notice */}
      <TouristVisaNotice />

      {/* 7. Bottom Consultation Call-to-Action */}
      <TouristVisaCta />
    </div>
  );
}
