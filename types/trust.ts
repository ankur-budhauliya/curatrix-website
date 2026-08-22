export interface UniversityLogo {
  id: string;
  name: string;
  shortName: string;
  country: string;
  category?: string;
  ranking?: string;
}

export interface TrustMetricItem {
  id: string;
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  sublabel: string;
  highlightColor?: 'blue' | 'green' | 'slate';
}

export interface AccreditationItem {
  id: string;
  title: string;
  issuer: string;
  description: string;
  icon: string;
}
