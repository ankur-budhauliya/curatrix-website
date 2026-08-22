export interface DestinationItem {
  id: string;
  country: string;
  code: string;
  flagEmoji: string;
  tagline: string;
  description: string;
  popularIntakes: string;
  popularDegrees: string[];
  avgTuitionRange: string;
  avgLivingCost: string;
  workOpportunities: string;
  highlightBadge?: string;
  image: string;
  ctaHref: string;
}
