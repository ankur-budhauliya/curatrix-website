import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';

export const metadata: Metadata = {
  title: 'Curatrix | Academic Advisors • Global Admissions Mentorship',
  description:
    'Curatrix Academic Advisors is a premier bespoke study abroad advisory platform empowering students with 360° profile evaluation, top-tier university admissions mentorship across the USA, UK, Canada, Germany, and Australia.',
  keywords: [
    'Curatrix Academic Advisors',
    'study abroad',
    'university admissions consultancy',
    'Ivy League mentorship',
    'study in USA',
    'study in UK',
    'study in Canada',
    'study in Germany',
    'study in Australia',
    'home counselling',
    'scholarships abroad',
  ],
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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#F7F8F5] text-slate-900 font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
