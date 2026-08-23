import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Curatrix | Academic Advisors • Premier Study Abroad Mentorship',
  description:
    'Curatrix Academic Advisors is a bespoke study abroad advisory platform providing 360° profile evaluation, home counselling, and top-tier university admissions mentorship across the USA, UK, Canada, Germany, and Australia.',
  keywords: [
    'Curatrix Academic Advisors',
    'study abroad consultancy',
    'study in USA',
    'study in UK',
    'study in Canada',
    'study in Germany',
    'study in Australia',
    'home counselling study abroad',
    'Ivy League admissions',
    'Russell Group admissions',
    'study abroad scholarships',
    'visa guidance',
  ],
  authors: [{ name: 'Curatrix Academic Advisors' }],
  metadataBase: new URL('https://curatrix.co.in'),
  openGraph: {
    title: 'Curatrix | Academic Advisors • Premier Study Abroad Mentorship',
    description:
      'Bespoke global admissions advisory, 360° candidate evaluation, and home counselling for top universities across the USA, UK, Canada, Germany, and Australia.',
    url: 'https://curatrix.co.in',
    siteName: 'Curatrix Academic Advisors',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'Curatrix Academic Advisors Official Emblem',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curatrix | Academic Advisors',
    description:
      'Premier study abroad consultancy offering profile evaluation, home counselling, and Ivy/Tier-1 mentorship across USA, UK, Canada, Germany, and Australia.',
    images: ['/logo.png'],
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#F7F8F5] text-slate-900 font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
