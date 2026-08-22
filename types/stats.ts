export interface TrustStat {
  id: string;
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  description: string;
  highlight?: boolean;
}

export interface HeroAdmitHighlight {
  studentName: string;
  university: string;
  program: string;
  scholarship?: string;
  country: string;
  avatarUrl?: string;
}
