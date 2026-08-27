import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Curatrix Private Limited | Study Abroad Consultant & Overseas Education Advisory',
  description:
    'Curatrix Private Limited is a premier study abroad consultancy providing personalized admission mentorship, profile evaluation, home counselling, university shortlisting, and student visa guidance across USA, UK, Canada, Germany, and Australia.',
  keywords: [
    'Study Abroad Consultant',
    'Overseas Education Consultant',
    'Study in USA',
    'Study in UK',
    'Study in Canada',
    'Study in Germany',
    'Study in Australia',
    'Curatrix Private Limited',
    'Curatrix',
    'Home Counselling Study Abroad',
    'University Admissions Mentorship',
    'Scholarship Assistance',
    'Student Visa Guidance',
  ],
  authors: [{ name: 'Curatrix Private Limited' }],
  metadataBase: new URL('https://curatrix.co.in'),
  openGraph: {
    title: 'Curatrix Private Limited | Study Abroad Consultant & Overseas Education Advisory',
    description:
      'Personalized study abroad mentorship, candidate profile evaluation, home counselling, and top university admissions across USA, UK, Canada, Germany, and Australia.',
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
    title: 'Curatrix Private Limited | Study Abroad Consultant',
    description:
      'Premier study abroad consultancy offering profile evaluation, home counselling, and university admissions mentorship across USA, UK, Canada, Germany, and Australia.',
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
