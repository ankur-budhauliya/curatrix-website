import {
  TouristVisaCountry,
  TouristVisaService,
  TouristVisaStep,
} from '@/types/touristVisa';

export const TOURIST_VISA_WHATSAPP = {
  heroCta:
    'https://wa.me/919667795333?text=' +
    encodeURIComponent(
      'Hi Curatrix Private Limited,\n\nI would like assistance for a Tourist Visa.\n\nPlease guide me regarding the process.'
    ),
  bottomCta:
    'https://wa.me/919667795333?text=' +
    encodeURIComponent(
      'Hi Curatrix Private Limited,\n\nI would like assistance for a Tourist Visa.\n\nPlease guide me regarding the process.'
    ),
  countryInquiry: (countryName: string) =>
    'https://wa.me/919667795333?text=' +
    encodeURIComponent(
      `Hi Curatrix Private Limited,\n\nI would like assistance for a Tourist Visa for ${countryName}.\n\nPlease guide me regarding the process.`
    ),
};

export const TOURIST_VISA_COUNTRIES: TouristVisaCountry[] = [
  {
    id: 'usa',
    country: 'United States',
    code: 'USA',
    flagEmoji: '🇺🇸',
    image: '/images/tourist-visa/usa.jpg',
    tagline: 'B1/B2 Visitor Visa Guidance',
    description:
      'Assistance with DS-160 application completion, consular appointment scheduling, financial documentation review, and interview preparation.',
    visaType: 'B1 / B2 Tourist Visa',
    popularHighlights: ['DS-160 Filing Support', 'Consular Slot Guidance', 'Financial Documentation'],
    ctaHref: TOURIST_VISA_WHATSAPP.countryInquiry('United States'),
  },
  {
    id: 'uk',
    country: 'United Kingdom',
    code: 'UK',
    flagEmoji: '🇬🇧',
    image: '/images/tourist-visa/uk.jpg',
    tagline: 'Standard Visitor Visa Guidance',
    description:
      'Guidance for holiday, family visit, or business meetings in the UK with structured cover letters, itinerary planning, and proof of funds audit.',
    visaType: 'Standard Visitor Visa (6 Months)',
    popularHighlights: ['Online Application Review', 'Document Verification', 'VFS Appointment Support'],
    ctaHref: TOURIST_VISA_WHATSAPP.countryInquiry('United Kingdom'),
  },
  {
    id: 'canada',
    country: 'Canada',
    code: 'CAN',
    flagEmoji: '🇨🇦',
    image: '/images/tourist-visa/canada.jpg',
    tagline: 'Temporary Resident Visa (TRV)',
    description:
      'Complete filing assistance for Canadian tourist visa, family visits, biometrics scheduling, and travel purpose justification.',
    visaType: 'Visitor Visa / TRV',
    popularHighlights: ['IRCC Portal Guidance', 'Purpose of Travel Letter', 'Biometrics Scheduling'],
    ctaHref: TOURIST_VISA_WHATSAPP.countryInquiry('Canada'),
  },
  {
    id: 'germany',
    country: 'Germany',
    code: 'GER',
    flagEmoji: '🇩🇪',
    image: '/images/tourist-visa/germany.jpg',
    tagline: 'Schengen Tourist Visa Guidance',
    description:
      'Guidance for short-stay Schengen tourist visa for Germany and European travel, cover letter review, and VFS slot assistance.',
    visaType: 'Short-Stay Schengen (Type C)',
    popularHighlights: ['Schengen Itinerary Audit', 'Insurance Compliance Check', 'VFS Appointment Prep'],
    ctaHref: TOURIST_VISA_WHATSAPP.countryInquiry('Germany'),
  },
  {
    id: 'uae',
    country: 'United Arab Emirates',
    code: 'UAE',
    flagEmoji: '🇦🇪',
    image: '/images/tourist-visa/uae.jpg',
    tagline: 'Dubai & UAE Tourist Visa',
    description:
      'Fast-track documentation guidance for 30-day and 60-day tourist visas for leisure, shopping, and family visits across the UAE.',
    visaType: '30 / 60-Day Tourist Visa',
    popularHighlights: ['Express Documentation', 'Passport Verification', 'Hotel & Flight Guidance'],
    ctaHref: TOURIST_VISA_WHATSAPP.countryInquiry('United Arab Emirates'),
  },
  {
    id: 'singapore',
    country: 'Singapore',
    code: 'SGP',
    flagEmoji: '🇸🇬',
    image: '/images/tourist-visa/singapore.jpg',
    tagline: 'Singapore eVisa Assistance',
    description:
      'Authorised submission support for Singapore tourist entry visas, Form 14A completion, and SG Arrival Card guidelines.',
    visaType: 'Electronic Tourist Visa',
    popularHighlights: ['Form 14A Assistance', 'Invitation / Hotel Audit', 'SG Arrival Card Advice'],
    ctaHref: TOURIST_VISA_WHATSAPP.countryInquiry('Singapore'),
  },
  {
    id: 'thailand',
    country: 'Thailand',
    code: 'THA',
    flagEmoji: '🇹🇭',
    image: '/images/tourist-visa/thailand.jpg',
    tagline: 'Thailand Tourist & eVisa',
    description:
      'Guidance on pre-arranged tourist visas, Visa on Arrival requirements, and financial sufficiency checklist for travelers.',
    visaType: 'Single Entry Tourist Visa',
    popularHighlights: ['eVisa Portal Guidance', 'Itinerary Verification', 'Entry Requirements Check'],
    ctaHref: TOURIST_VISA_WHATSAPP.countryInquiry('Thailand'),
  },
];

export const TOURIST_VISA_SERVICES: TouristVisaService[] = [
  {
    id: 'guidance',
    title: 'Tourist Visa Guidance',
    description:
      'Expert advice on country-specific tourist visa categories, eligibility criteria, and required validity periods for your planned travel dates.',
    iconName: 'Compass',
    deliverables: [
      'Country-specific visa category assessment',
      'Travel itinerary & purpose evaluation',
      'Entry rules and validity guidance',
    ],
  },
  {
    id: 'documentation',
    title: 'Documentation Support',
    description:
      'Comprehensive checklists and formatting guidance for bank statements, employment verification, sponsorship letters, and hotel bookings.',
    iconName: 'FileCheck',
    deliverables: [
      'Financial proof & bank statement review',
      'Customized cover letter structuring',
      'Sponsorship & NOC documentation aid',
    ],
  },
  {
    id: 'review',
    title: 'Application Review',
    description:
      'Thorough line-by-line verification of official visa application forms to avoid omissions, formatting errors, or inconsistencies.',
    iconName: 'SearchCheck',
    deliverables: [
      'Line-by-line application form audit',
      'Photograph & biometric specification checks',
      'Travel history & background verification',
    ],
  },
  {
    id: 'appointment',
    title: 'Appointment Assistance',
    description:
      'Assistance with embassy or VFS/TLS appointment slot bookings, payment instructions, and appointment day document pack assembly.',
    iconName: 'CalendarCheck',
    deliverables: [
      'VFS / Embassy appointment booking steps',
      'Fee payment guidance and receipts',
      'Structured interview & document checklist',
    ],
  },
  {
    id: 'travel-planning',
    title: 'Travel Planning Guidance',
    description:
      'General travel advisory including mandatory overseas travel insurance requirements, transit visa regulations, and customs checklist.',
    iconName: 'Plane',
    deliverables: [
      'Compliant travel insurance guidance',
      'Flight & hotel itinerary requirements',
      'Pre-departure customs and entry checklist',
    ],
  },
];

export const TOURIST_VISA_STEPS: TouristVisaStep[] = [
  {
    stepNumber: 1,
    title: 'Consultation',
    tagline: 'Travel Purpose Review',
    description:
      'Connect with our visa advisor to discuss your destination, planned travel dates, duration of stay, and passport eligibility.',
    iconName: 'MessageSquare',
  },
  {
    stepNumber: 2,
    title: 'Document Collection',
    tagline: 'Structured Checklist',
    description:
      'Receive a clear document checklist tailored to your employment, financial profile, and specific country requirements.',
    iconName: 'FolderCheck',
  },
  {
    stepNumber: 3,
    title: 'Application Preparation',
    tagline: 'Error-Free Drafting',
    description:
      'Our team assists with filling online forms (DS-160, VFS portal, eVisa) and structuring your cover letter and itinerary.',
    iconName: 'FileEdit',
  },
  {
    stepNumber: 4,
    title: 'Submission Guidance',
    tagline: 'Appointment & Biometrics',
    description:
      'Guidance on scheduling embassy or visa application center (VFS) appointments, fee payments, and biometrics.',
    iconName: 'Send',
  },
  {
    stepNumber: 5,
    title: 'Visa Processing',
    tagline: 'Embassy Assessment',
    description:
      'Your application is reviewed directly by the respective embassy/consulate according to standard diplomatic timelines.',
    iconName: 'Clock',
  },
  {
    stepNumber: 6,
    title: 'Ready to Travel',
    tagline: 'Passport Collection & Flight',
    description:
      'Collect your passport with the stamped visa, review validity dates, and get ready for your international holiday.',
    iconName: 'PlaneTakeoff',
  },
];

export interface TouristVisaDocumentCategory {
  id: string;
  category: string;
  items: string[];
}

export const TOURIST_VISA_REQUIRED_DOCUMENTS: TouristVisaDocumentCategory[] = [
  {
    id: 'identity',
    category: '1. Identity & Passport',
    items: [
      'Original Passport valid for at least 6 months beyond travel dates with 2 blank pages',
      'Previous passports & copies of previously issued visas / entry stamps',
      'Recent passport-sized photographs conforming to embassy specifications',
    ],
  },
  {
    id: 'financial',
    category: '2. Financial Sufficiency',
    items: [
      'Original Bank Statements for the last 3 to 6 months signed & stamped by bank',
      'Income Tax Returns (ITR-V) or Form 16 for the last 2–3 financial years',
      'Proof of investments, fixed deposits, or property evaluation (where applicable)',
    ],
  },
  {
    id: 'employment',
    category: '3. Employment & Professional Proof',
    items: [
      'Employed: Leave sanction letter / No Objection Certificate (NOC) & salary slips',
      'Self-Employed / Business: Company registration proof, GST & company bank statements',
      'Students / Minors: School/College ID card, bonafide certificate & parental consent',
    ],
  },
  {
    id: 'itinerary',
    category: '4. Travel & Accommodation',
    items: [
      'Confirmed return flight tickets or reserved flight itinerary',
      'Hotel reservations / Proof of confirmed accommodation across travel dates',
      'Day-wise travel plan / tourism itinerary outlining key destinations',
    ],
  },
  {
    id: 'insurance',
    category: '5. Overseas Travel Insurance',
    items: [
      'Mandatory medical travel insurance policy covering hospitalization & repatriation',
      'Minimum coverage of €30,000 for Schengen Europe / $50,000+ for global destinations',
      'Coverage valid for the entire duration of stay in the destination country',
    ],
  },
];

export const TOURIST_VISA_FAQS = [
  {
    id: 'tv-faq-1',
    question: 'How early should I apply for a tourist visa before my travel date?',
    answer:
      'It is strongly recommended to apply 4 to 8 weeks in advance of your planned travel dates. Processing timelines vary significantly by country, peak holiday seasons, and biometric appointment availability at visa application centers (VFS / TLS).',
    category: 'General',
  },
  {
    id: 'tv-faq-2',
    question: 'What financial balance is required for tourist visa approval?',
    answer:
      'Embassies look for steady financial capability and sufficient funds to cover your airfare, accommodation, living expenses, and emergencies without seeking local employment. A healthy, active bank balance with consistent transactions is recommended.',
    category: 'Documentation',
  },
  {
    id: 'tv-faq-3',
    question: 'Does Curatrix Private Limited provide visa guarantees?',
    answer:
      'No legitimate agency can guarantee visa issuance. The final decision rests entirely with the respective embassy or consular officer. Curatrix Private Limited ensures your application is formatted accurately, documents are structured properly, and official guidelines are strictly met to minimize preventable errors.',
    category: 'Advisory',
  },
  {
    id: 'tv-faq-4',
    question: 'Can I visit other European countries on a German Schengen Visa?',
    answer:
      'Yes. A Short-Stay Schengen Visa (Type C) issued by Germany permits travel across all 29 Schengen member states, provided Germany is your primary destination or port of longest stay during the trip.',
    category: 'Destinations',
  },
  {
    id: 'tv-faq-5',
    question: 'What is the validity of a UK Standard Visitor Visa?',
    answer:
      'The standard UK visitor visa is typically granted for 6 months with multiple entries. Longer-term visitor visas (2, 5, or 10 years) are also available for frequent travelers with established immigration compliance history.',
    category: 'Destinations',
  },
];
