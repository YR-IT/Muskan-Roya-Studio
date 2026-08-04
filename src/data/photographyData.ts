import photo1 from '../assets/photos/1 (14).jpg.jpeg';
import photo2 from '../assets/photos/1 (5).jpeg';
import photo3 from '../assets/photos/1 (5).jpg.jpeg';
import photo4 from '../assets/photos/C8113T01.JPG.jpeg';
import photo5 from '../assets/photos/DSA!.png';
import photo6 from '../assets/photos/DSC_9268.JPG.jpeg';
import photo8 from '../assets/photos/_G0A5912.JPG.jpeg';
import photo9 from '../assets/photos/a (7).jpg.jpeg';
import photo10 from '../assets/photos/1 (10).jpg.jpeg';
import photo11 from '../assets/photos/MDS_2673.JPG.jpeg';
import photo12 from '../assets/photos/1 (15).jpeg';
import photo13 from '../assets/photos/DS1.png';
import { GalleryItem, ServiceItem, CinematicFilm, Testimonial } from '../types';

export const ASSET_IMAGES = {
  preWedding: photo1,
  candid: photo2,
  bridalPortrait: photo3,
  sangeet: photo4,
  heroBanner: photo6,
  haldiMehendi: photo8,
  rituals: photo9,
  drone: photo1, // Reuse for drone
  groomPortrait: photo2, // Reuse for groom
} as const;

export const BUSINESS_INFO = {
  name: 'Muskan Royal Photo Studio',
  tagline: 'Your Love Deserves Royal Memories',
  subtagline: 'Capturing Emotions • Preserving Royal Memories',
  location: 'Nandgaon, Bhiwani (Haryana)',
  fullAddress: 'V.P.O. Nandgaon, Distt. Bhiwani (Haryana) 127311',
  phone: '+91 9518004158',
  whatsappNumber: '919518004158',
  email: 'muskanroyalphotostudio@gmail.com',
  instagramUrl: 'https://www.instagram.com/muskan_royal_photo_studio',
  instagramHandle: '@muskan_royal_photo_studio',
  googleSitesUrl: 'https://maps.google.com/?q=Nandgaon+Bhiwani+Haryana',
  youtubeUrl: 'https://www.youtube.com/@Muskanroyalstudio',
  facebookUrl: 'https://facebook.com',
  experienceYears: '8+',
  weddingsCaptured: '500+',
  satisfactionRate: '100%',
  citiesCovered: 'Bhiwani, Hisar, Rohtak, Jind, Delhi NCR, Jaipur, Destination Weddings'
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Grand Royal Wedding Ceremony',
    category: 'Wedding',
    imageUrl: ASSET_IMAGES.heroBanner,
    location: 'Nandgaon, Haryana',
    description: 'A grand royal wedding ceremony captured with timeless elegance and artistic perfection.',
    featured: true,
    date: 'February 2026'
  },
  {
    id: 'gal-2',
    title: 'Romantic Pre-Wedding Shoot',
    category: 'Pre-Wedding',
    imageUrl: ASSET_IMAGES.preWedding,
    location: 'Bhiwani, Haryana',
    description: 'Ethereal pre-wedding romance captured amidst golden light and scenic landscapes.',
    featured: true,
    date: 'January 2026'
  },
  {
    id: 'gal-3',
    title: 'Vibrant Haldi & Mehendi Celebration',
    category: 'Haldi & Mehendi',
    imageUrl: ASSET_IMAGES.haldiMehendi,
    location: 'Nandgaon, Haryana',
    description: 'Joyful laughter, yellow marigolds, and blessed turmeric traditions captured beautifully.',
    featured: true,
    date: 'December 2025'
  },
  {
    id: 'gal-4',
    title: 'Heritage Bridal Portrait',
    category: 'Wedding',
    imageUrl: ASSET_IMAGES.bridalPortrait,
    location: 'Bhiwani, Haryana',
    description: 'Classical bridal portraiture emphasizing intricate embroidery and heirloom jewellery.',
    featured: true,
    date: 'January 2026'
  },
  {
    id: 'gal-5',
    title: 'Grand Reception Celebration',
    category: 'Engagement & Reception',
    imageUrl: photo10,
    location: 'Bhiwani, Haryana',
    description: 'Under warm crystal chandeliers and sparkling lights, celebrating love forever.',
    featured: true,
    date: 'November 2025'
  },
  {
    id: 'gal-6',
    title: "Groom's Portrait",
    category: "Groom's Portrait",
    imageUrl: photo5,
    location: 'Haryana',
    description: 'A refined royal groom portrait captured with elegant styling and timeless detail.',
    featured: true,
    date: 'December 2025'
  },
  {
    id: 'gal-7',
    title: 'Natural Pre-Wedding Shoot',
    category: 'Pre-Wedding',
    imageUrl: ASSET_IMAGES.candid,
    location: 'Bhiwani, Haryana',
    description: 'Beautiful natural pre-wedding moments captured amidst serene surroundings.',
    featured: false,
    date: 'March 2026'
  },
  {
    id: 'gal-8',
    title: 'Sangeet Dance Celebration',
    category: 'Engagement & Reception',
    imageUrl: ASSET_IMAGES.sangeet,
    location: 'Bhiwani, Haryana',
    description: 'High energy dance moves and family bonding during sangeet celebrations.',
    featured: false,
    date: 'January 2026'
  },
  {
    id: 'gal-9',
    title: 'Emotional Phera & Sacred Fire Rituals',
    category: 'Wedding',
    imageUrl: ASSET_IMAGES.rituals,
    location: 'Nandgaon, Haryana',
    description: 'Candid emotional glimpses during the sacred wedding ceremonies.',
    featured: false,
    date: 'February 2026'
  },
  {
    id: 'gal-10',
    title: 'Haldi Ceremony',
    category: 'Haldi & Mehendi',
    imageUrl: photo11,
    location: 'Bhiwani, Haryana',
    description: 'Vibrant and joyful moments from the Haldi ceremony.',
    featured: false,
    date: 'February 2026'
  },
  {
    id: 'gal-11',
    title: 'Mehendi Ceremony',
    category: 'Haldi & Mehendi',
    imageUrl: photo12,
    location: 'Bhiwani, Haryana',
    description: 'Intricate henna designs and playful moments from the Mehendi ceremony.',
    featured: false,
    date: 'February 2026'
  },
  {
    id: 'gal-12',
    title: 'Bride Solo Shoot',
    category: 'Pre-Wedding',
    imageUrl: photo13,
    location: 'Bhiwani, Haryana',
    description: 'A stunning solo capture showcasing the elegant styling and beauty of the bride.',
    featured: false,
    date: 'March 2026'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'silver-package',
    title: 'Silver Package',
    iconName: 'Camera',
    shortDesc: 'Beautiful wedding coverage capturing your precious moments with perfection.',
    fullDesc: 'Preserve the most beautiful moments of your life forever with our Silver Package. Focused on beautiful wedding coverage with professional photography to capture every special detail perfectly.',
    highlights: ['Beautiful wedding coverage', 'Professional photography', 'Capture precious moments with perfection'],
    startingPrice: '₹45,000',
    imageUrl: ASSET_IMAGES.heroBanner
  },
  {
    id: 'gold-package',
    title: 'Gold Package',
    iconName: 'Sparkles',
    shortDesc: 'Advanced wedding coverage including professional photography & videography.',
    fullDesc: 'Step up to our Gold Package for advanced wedding coverage. This package includes high-quality professional photography & videography along with attractive editing and premium-quality output.',
    highlights: ['Advanced wedding coverage', 'Professional photography & videography', 'Attractive editing with premium-quality output'],
    startingPrice: '₹74,999',
    imageUrl: ASSET_IMAGES.rituals
  },
  {
    id: 'premium-package',
    title: 'Premium Package',
    iconName: 'Film',
    shortDesc: 'Complete wedding coverage, cinematic videography, and creative pre-wedding shoots.',
    fullDesc: 'Get full cinematic storytelling with our Premium Package. Includes complete wedding coverage, professional cinematic videography, a creative pre-wedding and special moments shoot, professional editing, and a premium wedding album.',
    highlights: ['Complete wedding coverage', 'Cinematic videography', 'Creative pre-wedding & special moments shoot', 'High-quality wedding album & professional editing'],
    startingPrice: '₹1,20,000',
    imageUrl: ASSET_IMAGES.preWedding
  },
  {
    id: 'premium-gold-package',
    title: 'Premium Gold Package',
    iconName: 'BookOpen',
    shortDesc: 'Our most luxurious service with complete cinematic coverage and exclusive presentation.',
    fullDesc: 'Our most luxurious and premium service designed to turn your wedding into a cinematic masterpiece. Complete cinematic wedding coverage, premium photography & video production, exclusive creative shoots, and a luxury wedding album with a memorable presentation.',
    highlights: ['Our most luxurious and premium service', 'Complete cinematic wedding coverage', 'Premium photography & video production', 'Exclusive creative shoots', 'Luxury wedding album with a memorable presentation'],
    startingPrice: '₹1,80,000',
    imageUrl: ASSET_IMAGES.bridalPortrait
  }
];

export const CINEMATIC_FILMS: CinematicFilm[] = [
  {
    id: 'film-1',
    title: 'Royal Wedding Teaser | Nandgaon',
    couple: 'Royal Wedding',
    location: 'Nandgaon, Haryana',
    instagramUrl: 'https://www.instagram.com/reel/Daf-syLJLiX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    reelId: 'Daf-syLJLiX',
    thumbnailUrl: ASSET_IMAGES.heroBanner,
    duration: '1:45 Min',
    category: 'Royal Wedding'
  },
  {
    id: 'film-2',
    title: 'Pre-Wedding Magic | Bhiwani',
    couple: 'Pre-Wedding',
    location: 'Bhiwani, Haryana',
    instagramUrl: 'https://www.instagram.com/reel/DadSExSpBgQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    reelId: 'DadSExSpBgQ',
    thumbnailUrl: ASSET_IMAGES.preWedding,
    duration: '2:10 Min',
    category: 'Pre-Wedding'
  },
  {
    id: 'film-3',
    title: 'Golden Haldi Celebration | Haryana',
    couple: 'Haldi Celebration',
    location: 'Nandgaon, Haryana',
    instagramUrl: 'https://www.instagram.com/reel/DZz3l0ppmTi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    reelId: 'DZz3l0ppmTi',
    thumbnailUrl: ASSET_IMAGES.haldiMehendi,
    duration: '1:15 Min',
    category: 'Haldi & Sangeet'
  },
  {
    id: 'film-4',
    title: 'Grand Reception Film | Bhiwani',
    couple: 'Grand Reception',
    location: 'Bhiwani, Haryana',
    instagramUrl: 'https://www.instagram.com/reel/DadTl-rpXuX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    reelId: 'DadTl-rpXuX',
    thumbnailUrl: ASSET_IMAGES.sangeet,
    duration: '3:05 Min',
    category: 'Grand Reception'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Rahul & Priya',
    role: 'Bride & Groom',
    weddingLocation: 'Nandgaon, Haryana',
    rating: 5,
    review: 'Amazing photography and outstanding cinematic video! Thank you, Muskan Royal Photo Studio, for making our wedding unforgettable. The team felt like family and captured every ritual with royal elegance.',
    avatarUrl: ASSET_IMAGES.heroBanner,
    date: 'February 2026'
  },
  {
    id: 'test-2',
    name: 'Amit & Neha',
    role: 'Bride & Groom',
    weddingLocation: 'Bhiwani, Haryana',
    rating: 5,
    review: 'Professional team, beautiful editing, and timely delivery. Highly recommended! The pre-wedding reel was stunning and our wedding album is literally a work of art. Best studio in Haryana!',
    avatarUrl: ASSET_IMAGES.preWedding,
    date: 'January 2026'
  },
  {
    id: 'test-3',
    name: 'Vikram & Sunita',
    role: 'Bride & Groom',
    weddingLocation: 'Nandgaon, Haryana',
    rating: 5,
    review: 'They captured our Haldi and Mehendi so vibrantly! We were crying tears of joy watching our teaser film. The drone shots of the baraat left all our relatives mesmerized. Premium quality work!',
    avatarUrl: ASSET_IMAGES.haldiMehendi,
    date: 'December 2025'
  },
  {
    id: 'test-4',
    name: 'Deepak & Anjali',
    role: 'Bride & Groom',
    weddingLocation: 'Bhiwani, Haryana',
    rating: 5,
    review: 'Super prompt team with extreme attention to detail. From lighting to candid emotions, Muskan Royal Photo Studio delivered exactly what they promised. Truly a stunning cinematic experience!',
    avatarUrl: ASSET_IMAGES.candid,
    date: 'November 2025'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Luxury Wedding Photography',
    description: 'Premium quality wedding photography with professional cameras, advanced lighting, and modern editing techniques.',
    icon: 'Camera'
  },
  {
    title: '4K Cinematic Wedding Films',
    description: 'Hollywood-grade 4K cinematic wedding films with customized music, live audio, and stunning visual storytelling.',
    icon: 'Film'
  },
  {
    title: 'Professional & Experienced Team',
    description: 'Years of creative experience handling luxury weddings, destination events, and large-scale celebrations.',
    icon: 'UserCheck'
  },
  {
    title: 'Creative Storytelling',
    description: 'Every couple has a unique bond. We craft custom cinematic narratives that capture your genuine personalities.',
    icon: 'BookOpen'
  },
  {
    title: 'Timely Delivery',
    description: 'Get your digital teaser reels within 48 hours and your full curated gallery & premium albums right on time.',
    icon: 'Clock'
  },
  {
    title: 'Trusted & Professional Service',
    description: '5-star reviewed by hundreds of thrilled couples. Premium quality, personalized client experience, and fast delivery.',
    icon: 'HeartHandshake'
  }
];
