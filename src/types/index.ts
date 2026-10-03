export interface Review {
  id: string;
  name: string;
  role: string;
  organization: string;
  textEn: string;
  textBn: string;
  rating: number;
  avatarUrl: string;
  isVerified?: boolean;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  company: string;
  image: string;
  order: number;
  featured?: boolean;
  isDevNoPhoto?: boolean;
}

export interface SiteSettings {
  id: string;
  logoUrl: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  secondaryAddress: string;
  facebookUrl: string;
  instagramUrl: string;
  linkedinUrl: string;
  youtubeUrl: string;
  heroHeadlineEn: string;
  heroHeadlineBn: string;
  heroSubtitleEn: string;
  heroSubtitleBn: string;
  statsProjects: string;
  statsClients: string;
  statsServices: string;
  statsSolutions: string;
  bridgeTitleEn: string;
  bridgeTitleBn: string;
  bridgeSubtitleEn: string;
  bridgeSubtitleBn: string;
  heroImageUrl?: string;
  bridgeImageUrl?: string;
  keyboardPosterUrl?: string;
  shellPosterUrl?: string;
  memorablePosterUrl?: string;
  phonePosterUrl?: string;
  updatedAt: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  titleEn: string;
  titleBn: string;
  descEn: string;
  descBn: string;
  iconName: string;
  tag: string;
}

export interface PortfolioItem {
  id: string;
  titleEn: string;
  titleBn: string;
  category: 'All' | 'Healthcare' | 'Branding' | 'Digital Marketing' | 'Web Development' | 'Creative';
  descEn: string;
  descBn: string;
  imageUrl: string;
  client?: string;
}
