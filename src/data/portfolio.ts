export type PortfolioCategory = 'AI Visuals' | 'Video & Motion' | 'Social Media' | 'Advertising';
export type PortfolioArtworkType = 'ai-visual' | 'video-motion' | 'social-media' | 'product-ad' | 'brand-campaign' | 'creative-lab';

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  imagePath: string | null;
  videoPath: string | null;
  posterPath: string | null;
  imageAlt: string;
  mediaType: 'image' | 'video';
  aspectRatio: string;
  artwork: PortfolioArtworkType;
  featured: boolean;
  demonstration: true;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'ai-visuals-01',
    title: 'Beyond the Ordinary',
    category: 'AI Visuals',
    description: 'AI-generated imagery and imaginative visual concepts.',
    imagePath: null,
    videoPath: null,
    posterPath: null,
    imageAlt: 'Abstract sculptural form surrounded by warm red and mint light',
    mediaType: 'image',
    aspectRatio: '4 / 3',
    artwork: 'ai-visual',
    featured: false,
    demonstration: true
  },
  {
    id: 'video-motion-01',
    title: 'Stories in Motion',
    category: 'Video & Motion',
    description: 'Short-form cinematic videos, visual transformations, and motion concepts.',
    imagePath: null,
    videoPath: null,
    posterPath: null,
    imageAlt: 'Cinematic motion study with a glowing red sun and layered silhouettes',
    mediaType: 'video',
    aspectRatio: '16 / 10',
    artwork: 'video-motion',
    featured: false,
    demonstration: true
  },
  {
    id: 'social-media-01',
    title: 'Built for the Feed',
    category: 'Social Media',
    description: 'Social-first visual content designed for modern digital audiences.',
    imagePath: null,
    videoPath: null,
    posterPath: null,
    imageAlt: 'Coordinated social campaign layouts in square and vertical formats',
    mediaType: 'image',
    aspectRatio: '4 / 3',
    artwork: 'social-media',
    featured: false,
    demonstration: true
  },
  {
    id: 'advertising-01',
    title: 'Made to Stand Out',
    category: 'Advertising',
    description: 'Promotional creatives and product advertising concepts.',
    imagePath: null,
    videoPath: null,
    posterPath: null,
    imageAlt: 'Minimal premium product advertisement with a red glass bottle',
    mediaType: 'image',
    aspectRatio: '4 / 3',
    artwork: 'product-ad',
    featured: false,
    demonstration: true
  },
  {
    id: 'brand-campaign-01',
    title: 'A Brand in Focus',
    category: 'Advertising',
    description: 'Creative campaign concepts for businesses and growing brands.',
    imagePath: null,
    videoPath: null,
    posterPath: null,
    imageAlt: 'Brand campaign composition in restrained red, white, and charcoal',
    mediaType: 'image',
    aspectRatio: '16 / 10',
    artwork: 'brand-campaign',
    featured: false,
    demonstration: true
  },
  {
    id: 'experimental-project-01',
    title: 'The Creative Lab',
    category: 'AI Visuals',
    description: 'Experimental AI workflows, new visual techniques, and creative technology.',
    imagePath: null,
    videoPath: null,
    posterPath: null,
    imageAlt: 'Experimental geometric composition with sculptural red and mint forms',
    mediaType: 'image',
    aspectRatio: '4 / 3',
    artwork: 'creative-lab',
    featured: true,
    demonstration: true
  }
];

export const PORTFOLIO_CATEGORIES: Array<'All Work' | PortfolioCategory> = [
  'All Work',
  'AI Visuals',
  'Video & Motion',
  'Social Media',
  'Advertising'
];