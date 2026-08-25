import { NavItem, AnnouncementItem } from '@/types/navigation';

export const WHATSAPP_CONFIG = {
  number: '919667795333',
  link:
    'https://wa.me/919667795333?text=' +
    encodeURIComponent(
      'Hi Curatrix Private Limited,\n\nI would like to book a consultation regarding studying abroad.\n\nPlease guide me further.'
    ),
  touristVisaLink:
    'https://wa.me/919667795333?text=' +
    encodeURIComponent(
      'Hi Curatrix Private Limited,\n\nI would like assistance for a Tourist Visa.\n\nPlease guide me regarding the process.'
    ),
  touristVisaCountryLink: (countryName: string) =>
    'https://wa.me/919667795333?text=' +
    encodeURIComponent(
      `Hi Curatrix Private Limited,\n\nI would like assistance for a Tourist Visa for ${countryName}.\n\nPlease guide me regarding the process.`
    ),
};

export const CONTACT_INFO = {
  companyName: 'Curatrix Private Limited',
  phone: '+91 9667795333',
  whatsappNumber: '+91 9667795333',
  whatsappHref: WHATSAPP_CONFIG.link,
  email: 'info@curatrix.co.in',
  officeAddress: 'B320, Logix Technova, Sector 134, Noida, Uttar Pradesh, India',
  socialLinks: {
    instagram: 'https://www.instagram.com/curatrix.pvt.ltd?igsi=NXViYjhwaHlheTRp',
  },
};

export const ANNOUNCEMENT_DATA: AnnouncementItem = {
  id: 'fall-2026-admissions',
  badge: 'Fall 2026 & Spring 2027 Admissions Open',
  text: 'Book your 1-on-1 profile strategy session for USA, UK, Canada, Germany & Australia.',
  linkText: 'Book Free Consultation',
  href: WHATSAPP_CONFIG.link,
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Study Abroad',
    href: '/',
    children: [
      {
        title: 'Profile Evaluation',
        href: '/#services',
        description: 'Comprehensive academic & leadership profile audit',
        badge: 'Foundation',
        icon: 'compass',
      },
      {
        title: 'Home Counselling',
        href: '/#services',
        description: 'Personalized in-person mentorship at student residence',
        badge: 'Bespoke',
        icon: 'home',
      },
      {
        title: 'University Shortlisting',
        href: '/#services',
        description: 'Targeted dream, reach, and safe institution selection',
        icon: 'target',
      },
      {
        title: 'Scholarship Assistance',
        href: '/#services',
        description: 'University fellowships & international financial aid guidance',
        icon: 'award',
      },
      {
        title: 'Application Support',
        href: '/#services',
        description: 'SOP narrative development, resume polishing & LOR advisory',
        badge: 'Core',
        icon: 'edit',
      },
      {
        title: 'Student Visa Guidance',
        href: '/#services',
        description: 'Flawless consular documentation & mock interview drills',
        icon: 'shield',
      },
      {
        title: 'Pre-Departure Support',
        href: '/#services',
        description: 'Housing, forex, international banking & campus readiness',
        icon: 'plane',
      },
      {
        title: 'Career & Post Study Guidance',
        href: '/#services',
        description: 'STEM OPT, UK Graduate Route & long-term career ROI mapping',
        icon: 'briefcase',
      },
    ],
  },
  {
    label: 'Tourist Visa',
    href: '/tourist-visa',
    badge: 'Complementary',
    children: [
      {
        title: 'United States',
        href: '/tourist-visa#countries',
        description: 'B1/B2 Visitor Visa documentation & DS-160 support',
        badge: 'B1/B2',
        icon: 'us',
      },
      {
        title: 'United Kingdom',
        href: '/tourist-visa#countries',
        description: 'Standard Visitor Visa (6 Months) application assistance',
        badge: 'Standard',
        icon: 'gb',
      },
      {
        title: 'Canada',
        href: '/tourist-visa#countries',
        description: 'Temporary Resident Visa (TRV) & Visitor Visa filing',
        badge: 'TRV',
        icon: 'ca',
      },
      {
        title: 'Germany',
        href: '/tourist-visa#countries',
        description: 'Schengen Short-Stay Tourist Visa guidance',
        badge: 'Schengen',
        icon: 'de',
      },
      {
        title: 'United Arab Emirates',
        href: '/tourist-visa#countries',
        description: '30 / 60-Day Dubai & UAE Tourist Visa assistance',
        badge: 'Fast-Track',
        icon: 'uae',
      },
      {
        title: 'Singapore',
        href: '/tourist-visa#countries',
        description: 'Electronic Tourist Visa (eVisa) & Form 14A support',
        badge: 'eVisa',
        icon: 'sg',
      },
      {
        title: 'Thailand',
        href: '/tourist-visa#countries',
        description: 'Tourist Visa & Visa on Arrival documentation checklist',
        badge: 'Tourist',
        icon: 'th',
      },
    ],
  },
  {
    label: 'Destinations',
    href: '/#destinations',
  },
  {
    label: 'Why Curatrix',
    href: '/#why-curatrix',
  },
  {
    label: 'Roadmap',
    href: '/#roadmap',
  },
  {
    label: 'FAQs',
    href: '/#faq',
  },
  {
    label: 'Contact',
    href: '/#contact',
  },
];
