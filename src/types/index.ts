// Types untuk aplikasi publisher Islami

export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  price: number;
  coverImage: string;
  backCoverImage?: string;
  pages: number;
  size: string;
  publishYear: number;
  paperType: string;
  isbn?: string;
  quote?: string;
  authorBio?: string;
  authorPhoto?: string;
  pdfPreview?: string;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
}

export interface Author {
  id: string;
  name: string;
  bio?: string;
  photo?: string;
  books?: string[]; // Array of book IDs
}

export interface ContactInfo {
  whatsapp: string;
  email: string;
  address: string;
  operatingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  socialMedia: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface PublisherInfo {
  name: string;
  description: string;
  vision: string;
  mission: string[];
  values: {
    title: string;
    description: string;
    icon?: string;
  }[];
  team?: {
    name: string;
    position: string;
    bio: string;
    photo?: string;
  }[];
}

// Props untuk komponen SEO
export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

// Props untuk komponen Layout
export interface LayoutProps {
  children: React.ReactNode;
}

// Filter untuk katalog buku
export interface BookFilters {
  category?: string;
  author?: string;
  search?: string;
}

// Pagination
export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}