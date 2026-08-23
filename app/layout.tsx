import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Curatrix Private Limited | Study Abroad Mentorship & Global Admissions',
  description:
    'Curatrix Private Limited provides transparent, bespoke study abroad advisory, profile evaluation, home counselling, and university admissions mentorship across the USA, UK, Canada, Germany, and Australia.',
  keywords: [
    'Curatrix Private Limited',
    'Curatrix',
    'study abroad advisory',
    'study in USA',
    'study in UK',
    'study in Canada',
    'study in Germany',
    'study in Australia',
    'home counselling study abroad',
    'university admissions mentorship',
    'scholarship advisory',
    'visa guidance',
  ],
  authors: [{ name: 'Curatrix Private Limited' }],
  metadataBase: new URL('https://curatrix.co.in'),
  openGraph: {
    title: 'Curatrix Private Limited | Study Abroad Mentorship & Global Admissions',
    description:
      'Transparent, bespoke study abroad advisory, candidate profile evaluation, and home counselling across the USA, UK, Canada, Germany, and Australia.',
    url: 'https://curatrix.co.in',
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
  twitter: {
    card: 'summary_large_image',
    title: 'Curatrix Private Limited',
    description:
      'Bespoke study abroad advisory offering profile evaluation, home counselling, and admissions mentorship across USA, UK, Canada, Germany, and Australia.',
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
