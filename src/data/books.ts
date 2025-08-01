import type { Book, Category, Author } from '../types';

export const categories: Category[] = [
  {
    id: 'aqidah',
    name: 'Aqidah',
    description: 'Buku-buku tentang keyakinan dan tauhid dalam Islam'
  },
  {
    id: 'fiqh',
    name: 'Fiqh',
    description: 'Buku-buku tentang hukum Islam dan praktik ibadah'
  },
  {
    id: 'akhlaq',
    name: 'Akhlaq',
    description: 'Buku-buku tentang moral dan etika Islam'
  },
  {
    id: 'sirah',
    name: 'Sirah',
    description: 'Buku-buku tentang sejarah Nabi dan para sahabat'
  },
  {
    id: 'tafsir',
    name: 'Tafsir',
    description: 'Buku-buku penafsiran Al-Quran'
  },
  {
    id: 'hadits',
    name: 'Hadits',
    description: 'Buku-buku tentang hadits dan sunnah Nabi'
  }
];

export const authors: Author[] = [
  {
    id: 'syaikh-albani',
    name: 'Syaikh Muhammad Nashiruddin Al-Albani',
    bio: 'Seorang ulama hadits terkemuka yang dikenal dengan keahliannya dalam ilmu hadits dan manhaj salaf.',
    photo: '/images/authors/albani.jpg'
  },
  {
    id: 'syaikh-utsaimin',
    name: 'Syaikh Muhammad bin Shalih Al-Utsaimin',
    bio: 'Ulama besar Saudi Arabia yang terkenal dengan penjelasan fiqh yang mudah dipahami.',
    photo: '/images/authors/utsaimin.jpg'
  },
  {
    id: 'syaikh-fauzan',
    name: 'Syaikh Shalih bin Fauzan Al-Fauzan',
    bio: 'Anggota Lajnah Daimah dan ulama kontemporer yang aktif dalam dakwah.',
    photo: '/images/authors/fauzan.jpg'
  },
  {
    id: 'dr-salim-bahmid',
    name: 'Dr. Salim bin Said Bahmid',
    bio: 'Dosen dan penulis buku-buku Islam kontemporer.',
    photo: '/images/authors/bahmid.jpg'
  }
];

export const books: Book[] = [
  {
    id: 'aqidah-wasithiyah',
    title: 'Aqidah Wasithiyah',
    author: 'Syaikh Muhammad Nashiruddin Al-Albani',
    category: 'aqidah',
    description: 'Penjelasan komprehensif tentang aqidah Ahlus Sunnah wal Jamaah berdasarkan Al-Quran dan As-Sunnah. Buku ini membahas dasar-dasar keyakinan Islam yang benar dan lurus.',
    price: 85000,
    coverImage: 'https://placehold.co/600x900/4F46E5/FFFFFF/png?text=Aqidah+Wasithiyah',
    backCoverImage: 'https://placehold.co/600x900/6366F1/FFFFFF/png?text=Back+Cover',
    pages: 250,
    size: '14 x 21 cm',
    publishYear: 2023,
    paperType: 'HVS',
    isbn: '978-602-1234-567-8',
    quote: '"Aqidah yang benar adalah fondasi dari seluruh amalan seorang Muslim."',
    authorBio: 'Syaikh Al-Albani adalah seorang ulama hadits terkemuka yang dikenal dengan keahliannya dalam ilmu hadits dan manhaj salaf.',
    authorPhoto: '/images/authors/albani.jpg'
  },
  {
    id: 'fiqh-shalat',
    title: 'Fiqh Shalat Lengkap',
    author: 'Syaikh Muhammad bin Shalih Al-Utsaimin',
    category: 'fiqh',
    description: 'Panduan lengkap tentang tata cara shalat yang benar sesuai dengan sunnah Rasulullah SAW. Dilengkapi dengan dalil-dalil dari Al-Quran dan hadits shahih.',
    price: 95000,
    coverImage: 'https://placehold.co/600x900/059669/FFFFFF/png?text=Fiqh+Shalat',
    pages: 320,
    size: '14 x 21 cm',
    publishYear: 2023,
    paperType: 'HVS',
    isbn: '978-602-1234-568-5',
    quote: '"Shalat adalah tiang agama, barangsiapa yang menegakkannya maka ia telah menegakkan agama."',
    authorBio: 'Syaikh Al-Utsaimin adalah ulama besar Saudi Arabia yang terkenal dengan penjelasan fiqh yang mudah dipahami.',
    authorPhoto: '/images/authors/utsaimin.jpg'
  },
  {
    id: 'akhlaq-mulia',
    title: 'Akhlaq Mulia dalam Islam',
    author: 'Dr. Salim bin Said Bahmid',
    category: 'akhlaq',
    description: 'Pembahasan mendalam tentang akhlaq mulia yang harus dimiliki setiap Muslim. Buku ini menjelaskan cara membentuk karakter Islami dalam kehidupan sehari-hari.',
    price: 75000,
    coverImage: 'https://placehold.co/600x900/DC2626/FFFFFF/png?text=Akhlaq+Mulia',
    pages: 200,
    size: '14 x 21 cm',
    publishYear: 2023,
    paperType: 'HVS',
    isbn: '978-602-1234-569-2',
    quote: '"Akhlaq yang mulia adalah cerminan dari keimanan yang sempurna."',
    authorBio: 'Dr. Salim Bahmid adalah dosen dan penulis buku-buku Islam kontemporer.',
    authorPhoto: '/images/authors/bahmid.jpg'
  },
  {
    id: 'sirah-nabawiyah',
    title: 'Sirah Nabawiyah: Perjalanan Hidup Rasulullah',
    author: 'Syaikh Shalih bin Fauzan Al-Fauzan',
    category: 'sirah',
    description: 'Kisah lengkap perjalanan hidup Rasulullah SAW dari lahir hingga wafat. Ditulis berdasarkan sumber-sumber shahih dan dapat dipercaya.',
    price: 120000,
    coverImage: 'https://placehold.co/600x900/7C2D12/FFFFFF/png?text=Sirah+Nabawiyah',
    pages: 450,
    size: '15 x 23 cm',
    publishYear: 2023,
    paperType: 'HVS',
    isbn: '978-602-1234-570-8',
    quote: '"Dalam kehidupan Rasulullah terdapat teladan terbaik bagi seluruh umat manusia."',
    authorBio: 'Syaikh Al-Fauzan adalah anggota Lajnah Daimah dan ulama kontemporer yang aktif dalam dakwah.',
    authorPhoto: '/images/authors/fauzan.jpg'
  },
  {
    id: 'tafsir-juz-amma',
    title: 'Tafsir Juz Amma untuk Pemula',
    author: 'Dr. Salim bin Said Bahmid',
    category: 'tafsir',
    description: 'Tafsir sederhana dan mudah dipahami untuk Juz Amma (Juz 30). Cocok untuk pemula yang ingin memahami makna Al-Quran.',
    price: 65000,
    coverImage: 'https://placehold.co/600x900/1E40AF/FFFFFF/png?text=Tafsir+Juz+Amma',
    pages: 180,
    size: '14 x 21 cm',
    publishYear: 2023,
    paperType: 'HVS',
    isbn: '978-602-1234-571-5',
    quote: '"Al-Quran adalah petunjuk bagi orang-orang yang bertakwa."',
    authorBio: 'Dr. Salim Bahmid adalah dosen dan penulis buku-buku Islam kontemporer.',
    authorPhoto: '/images/authors/bahmid.jpg'
  },
  {
    id: 'hadits-40',
    title: '40 Hadits Pilihan',
    author: 'Syaikh Muhammad Nashiruddin Al-Albani',
    category: 'hadits',
    description: 'Kumpulan 40 hadits pilihan yang mencakup berbagai aspek kehidupan Muslim. Setiap hadits dilengkapi dengan penjelasan dan hikmah.',
    price: 55000,
    coverImage: 'https://placehold.co/600x900/7C3AED/FFFFFF/png?text=40+Hadits',
    pages: 150,
    size: '12 x 19 cm',
    publishYear: 2023,
    paperType: 'HVS',
    isbn: '978-602-1234-572-2',
    quote: '"Hadits adalah sumber kedua setelah Al-Quran dalam memahami Islam."',
    authorBio: 'Syaikh Al-Albani adalah seorang ulama hadits terkemuka yang dikenal dengan keahliannya dalam ilmu hadits dan manhaj salaf.',
    authorPhoto: '/images/authors/albani.jpg'
  }
];

// Helper functions
export const getBookById = (id: string): Book | undefined => {
  return books.find(book => book.id === id);
};

export const getBooksByCategory = (categoryId: string): Book[] => {
  return books.filter(book => book.category === categoryId);
};

export const getBooksByAuthor = (authorName: string): Book[] => {
  return books.filter(book => book.author.toLowerCase().includes(authorName.toLowerCase()));
};

export const searchBooks = (query: string): Book[] => {
  const lowercaseQuery = query.toLowerCase();
  return books.filter(book => 
    book.title.toLowerCase().includes(lowercaseQuery) ||
    book.author.toLowerCase().includes(lowercaseQuery) ||
    book.description.toLowerCase().includes(lowercaseQuery)
  );
};

export const getFeaturedBooks = (): Book[] => {
  // Return first 3 books as featured
  return books.slice(0, 3);
};

export const getRelatedBooks = (bookId: string, limit: number = 3): Book[] => {
  const currentBook = getBookById(bookId);
  if (!currentBook) return [];
  
  // Get books from same category, excluding current book
  const relatedBooks = books
    .filter(book => book.category === currentBook.category && book.id !== bookId)
    .slice(0, limit);
  
  // If not enough books in same category, fill with other books
  if (relatedBooks.length < limit) {
    const otherBooks = books
      .filter(book => book.category !== currentBook.category && book.id !== bookId)
      .slice(0, limit - relatedBooks.length);
    relatedBooks.push(...otherBooks);
  }
  
  return relatedBooks;
};