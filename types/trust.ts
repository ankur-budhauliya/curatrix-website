export interface UniversityLogo {
  id: string;
  name: string;
  shortName: string;
  country: string;
  category: string;
}

export interface TrustValueItem {
  id: string;
  title: string;
  description: string;
  iconName: 'UserCheck' | 'ShieldCheck' | 'HeartHandshake' | 'Compass' | 'Home' | 'Workflow';
  badge?: string;
}

export interface AccreditationItem {
  id: string;
  title: string;
  issuer: string;
  description: string;
}
