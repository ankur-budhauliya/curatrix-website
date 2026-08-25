export interface TouristVisaCountry {
  id: string;
  country: string;
  code: string;
  flagEmoji: string;
  image: string;
  tagline: string;
  description: string;
  visaType: string;
  popularHighlights: string[];
  ctaHref: string;
}

export interface TouristVisaService {
  id: string;
  title: string;
  description: string;
  iconName: 'Compass' | 'FileCheck' | 'SearchCheck' | 'CalendarCheck' | 'Plane';
  deliverables: string[];
}

export interface TouristVisaStep {
  stepNumber: number;
  title: string;
  tagline: string;
  description: string;
  iconName: 'MessageSquare' | 'FolderCheck' | 'FileEdit' | 'Send' | 'Clock' | 'PlaneTakeoff';
}
