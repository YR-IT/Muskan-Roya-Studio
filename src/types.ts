export type CategoryType = 
  | 'All'
  | 'Wedding'
  | 'Pre-Wedding'
  | 'Haldi & Mehendi'
  | 'Engagement & Reception'
  | 'Groom\'s Portrait'
  | 'Baby & Maternity';

export interface GalleryItem {
  id: string;
  title: string;
  category: CategoryType;
  imageUrl: string;
  location: string;
  description: string;
  featured?: boolean;
  date?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  startingPrice: string;
  imageUrl: string;
}

export interface CinematicFilm {
  id: string;
  title: string;
  couple: string;
  location: string;
  instagramUrl: string;
  reelId: string;
  thumbnailUrl: string;
  duration: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  weddingLocation: string;
  rating: number;
  review: string;
  avatarUrl: string;
  date: string;
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  eventDate: string;
  eventType: string;
  city: string;
  estimatedGuests: string;
  budgetRange: string;
  message: string;
  servicesNeeded: string[];
}
