import type { Author, Book, Category } from "../types";

export const categories: Category[] = [
  {
    id: "aqidah",
    name: "Aqidah",
    description: "Buku-buku tentang keyakinan dan tauhid dalam Islam",
  },
  {
    id: "fiqh",
    name: "Fiqh",
    description: "Buku-buku tentang hukum Islam dan praktik ibadah",
  },
  {
    id: "akhlaq",
    name: "Akhlaq",
    description: "Buku-buku tentang moral dan etika Islam",
  },
  {
    id: "thibbun-nabawi",
    name: "Thibbun Nabawi",
    description: "Buku-buku tentang Thibbun Nabawi",
  },
  {
    id: "herbal",
    name: "Herbal",
    description: "Buku-buku tentang herbal",
  },
  {
    id: "sirah",
    name: "Sirah",
    description: "Buku-buku tentang sejarah Nabi dan para sahabat",
  },
  {
    id: "tafsir",
    name: "Tafsir",
    description: "Buku-buku penafsiran Al-Quran",
  },
  {
    id: "hadits",
    name: "Hadits",
    description: "Buku-buku tentang hadits dan sunnah Nabi",
  },
];

export const authors: Author[] = [
  {
    id: "ustadz-dani",
    name: "Ustadz Abdurahman Dani",
    bio: "Alumni Darul Hadist Yaman & Praktisi Thibbun Nabawi",
    photo: "/images/logoustdani.jpg",
  },
  {
    id: "master-basirun",
    name: "Master Basirun. M.sc",
    bio: "Ulama besar Saudi Arabia yang terkenal dengan penjelasan fiqh yang mudah dipahami.",
    photo: "/images/authors/utsaimin.jpg",
  },
];

export const books: Book[] = [
  {
    id: "1",
    title: "Sehat Dengan Konsep Pola Makan Panas & Dingin",
    author: "Ustadz Abdurahman Dani",
    category: "thibbun-nabawi",
    description:
      "Mengetahui hikmah dari 4 mizaj karakteristik tubuh, Literasi kutipan konsep thibbun nabawi & kedokteran arab klasik dari zaman klasik hingga modern",
    price: 150000,
    coverImage: "/images/books/1.jpeg",
    backCoverImage:
      "https://placehold.co/600x900/6366F1/FFFFFF/png?text=Back+Cover",
    pages: 250,
    size: "14 x 21 cm",
    publishYear: 2023,
    paperType: "HVS",
    isbn: "978-602-1234-567-8",
    quote:
      '"Makanan panas dan dingin memiliki pengaruh besar terhadap kesehatan tubuh menurut konsep thibbun nabawi."',
    authorBio: "Alumni Darul Hadist Yaman & Praktisi Thibbun Nabawi",
    authorPhoto: "/author/logoustdani.jpg",
  },
  {
    id: "2",
    title: "Faedah Pengobatan Secara Islami",
    author: "Ustadz Abdurahman Dani",
    category: "thibbun-nabawi",
    description:
      "Panduan lengkap tentang faedah dan manfaat pengobatan secara Islami berdasarkan Al-Quran dan Sunnah. Menjelaskan berbagai metode pengobatan yang dicontohkan Rasulullah SAW.",
    price: 150000,
    coverImage: "/images/books/2.jpeg",
    pages: 320,
    size: "14 x 21 cm",
    publishYear: 2023,
    paperType: "HVS",
    isbn: "978-602-1234-568-5",
    quote:
      '"Sesungguhnya Allah tidak menurunkan penyakit kecuali Dia juga menurunkan obatnya."',
    authorBio: "Alumni Darul Hadist Yaman & Praktisi Thibbun Nabawi",
    authorPhoto: "/author/logoustdani.jpg",
  },
  {
    id: "3",
    title: "Botani Sistematika Mortofologi Anatomi Khasiat Tumbuhan",
    author: "Master Basirun. M.sc",
    category: "herbal",
    description:
      "Pembahasan sistematika mortofologi anatomi khasiat tumbuhan, termasuk penjelasan konsep konsep botani, anatomi, mortofologi, dan khasiat.",
    price: 150000,
    coverImage: "/images/books/3.jpeg",
    pages: 200,
    size: "14 x 21 cm",
    publishYear: 2023,
    paperType: "HVS",
    isbn: "978-602-1234-569-2",
    quote:
      '"Tumbuhan adalah salah satu karunia Allah yang penuh dengan manfaat dan khasiat untuk kehidupan manusia."',
    authorBio:
      "Dr. Salim Bahmid adalah dosen dan penulis buku-buku Islam kontemporer.",
    authorPhoto: "/images/authors/bahmid.jpg",
  },
  {
    id: "sirah-nabawiyah",
    title:
      "Islamic Medicine Pengibatan Thibbun Nabawi & Kedokteran Arab Klasik",
    author: "Ustadz Abdurahman Dani",
    category: "thibbun-nabawi",
    description:
      "Pembahasan mendalam tentang Islamic Medicine, pengobatan thibbun nabawi dan kedokteran Arab klasik. Menggabungkan ilmu kedokteran modern dengan tradisi pengobatan Islami.",
    price: 150000,
    coverImage: "/images/books/4.jpeg",
    pages: 450,
    size: "15 x 23 cm",
    publishYear: 2023,
    paperType: "HVS",
    isbn: "978-602-1234-570-8",
    quote:
      '"Kedokteran Islam adalah warisan berharga yang menggabungkan ilmu pengetahuan dengan nilai-nilai spiritual."',
    authorBio: "Alumni Darul Hadist Yaman & Praktisi Thibbun Nabawi",
    authorPhoto: "/images/logoustdani.jpg",
  },
  {
    id: "tafsir-juz-amma",
    title: "Sehat dengan Pola Makan Panas & Dingin",
    author: "Ustadz Abdurahman Dani",
    category: "thibbun-nabawi",
    description:
      "Panduan praktis untuk hidup sehat dengan memahami konsep pola makan panas dan dingin dalam thibbun nabawi. Menjelaskan cara menyeimbangkan makanan untuk kesehatan optimal.",
    price: 150000,
    coverImage: "/images/books/5.jpeg",
    pages: 180,
    size: "14 x 21 cm",
    publishYear: 2023,
    paperType: "HVS",
    isbn: "978-602-1234-571-5",
    quote:
      '"Keseimbangan dalam makanan adalah kunci untuk mencapai kesehatan yang optimal."',
    authorBio: "Alumni Darul Hadist Yaman & Praktisi Thibbun Nabawi",
    authorPhoto: "/author/logoustdani.jpg",
  },
  {
    id: "hadits-40",
    title: "Modul Fashdu Kedokteran Arab Klasik",
    author: "Ustadz Abdurahman Dani",
    category: "thibbun-nabawi",
    description:
      "Modul pembelajaran tentang fashdu (bekam) dalam kedokteran Arab klasik. Menjelaskan teknik, manfaat, dan aplikasi fashdu berdasarkan literatur kedokteran tradisional.",
    price: 150000,
    coverImage: "/images/books/6.jpeg",
    pages: 150,
    size: "12 x 19 cm",
    publishYear: 2023,
    paperType: "HVS",
    isbn: "978-602-1234-572-2",
    quote:
      '"Fashdu adalah salah satu metode pengobatan yang telah terbukti manfaatnya sejak zaman klasik."',
    authorBio: "Alumni Darul Hadist Yaman & Praktisi Thibbun Nabawi",
    authorPhoto: "/author/logoustdani.jpg",
  },
  {
    id: "hadits-41",
    title: "Buku Catatan Perjalanan Alumni ITHBI",
    author: "Ustadz Abdurahman Dani",
    category: "thibbun-nabawi",
    description:
      "Kumpulan catatan perjalanan dan pengalaman para alumni ITHBI dalam menerapkan ilmu thibbun nabawi. Berisi kisah inspiratif dan pembelajaran berharga dari praktisi lapangan.",
    price: 150000,
    coverImage: "/images/books/7.jpeg",
    pages: 150,
    size: "12 x 19 cm",
    publishYear: 2023,
    paperType: "HVS",
    isbn: "978-602-1234-572-2",
    quote:
      '"Perjalanan menuntut ilmu adalah investasi terbaik untuk kehidupan dunia dan akhirat."',
    authorBio: "Alumni Darul Hadist Yaman & Praktisi Thibbun Nabawi",
    authorPhoto: "/author/logoustdani.jpg",
  },
  {
    id: "hadits-42",
    title: "Terapi Nabawi Mandiri",
    author: "Ustadz Abdurahman Dani",
    category: "thibbun-nabawi",
    description:
      "Panduan praktis untuk melakukan terapi nabawi secara mandiri di rumah. Menjelaskan berbagai metode pengobatan alami yang diajarkan Rasulullah SAW dengan cara yang mudah dipraktikkan.",
    price: 150000,
    coverImage: "/images/books/8.jpeg",
    pages: 150,
    size: "12 x 19 cm",
    publishYear: 2023,
    paperType: "HVS",
    isbn: "978-602-1234-572-2",
    quote:
      '"Setiap orang dapat menjadi terapis bagi dirinya sendiri dengan mengikuti sunnah Rasulullah."',
    authorBio: "Alumni Darul Hadist Yaman & Praktisi Thibbun Nabawi",
    authorPhoto: "/author/logoustdani.jpg",
  },
  {
    id: "hadits-43",
    title: "Terapi Jiwa Para Terapis",
    author: "Ustadz Abdurahman Dani",
    category: "thibbun-nabawi",
    description:
      "Panduan khusus untuk para terapis dalam menjaga kesehatan jiwa dan mental mereka sendiri. Menjelaskan cara mengatasi burnout dan stress dalam profesi sebagai terapis dengan pendekatan Islami.",
    price: 150000,
    coverImage: "/images/books/9.jpeg",
    pages: 150,
    size: "12 x 19 cm",
    publishYear: 2023,
    paperType: "HVS",
    isbn: "978-602-1234-572-2",
    quote:
      '"Seorang terapis harus terlebih dahulu menyembuhkan jiwanya sendiri sebelum menyembuhkan orang lain."',
    authorBio: "Alumni Darul Hadist Yaman & Praktisi Thibbun Nabawi",
    authorPhoto: "/author/logoustdani.jpg",
  },
  {
    id: "hadits-44",
    title: "Ilmu Bekam Yang Hilang",
    author: "Ustadz Abdurahman Dani",
    category: "thibbun-nabawi",
    description:
      "Mengungkap kembali ilmu bekam yang hampir hilang dari peradaban modern. Menjelaskan teknik-teknik bekam tradisional yang telah terbukti efektif sejak zaman Rasulullah Shallallahu 'alaihi wasallam.",
    price: 150000,
    coverImage: "/images/books/10.jpeg",
    pages: 150,
    size: "12 x 19 cm",
    publishYear: 2023,
    paperType: "HVS",
    isbn: "978-602-1234-572-2",
    quote:
      '"Bekam adalah warisan pengobatan yang harus dilestarikan dan dipraktikkan kembali."',
    authorBio: "Alumni Darul Hadist Yaman & Praktisi Thibbun Nabawi",
    authorPhoto: "/author/logoustdani.jpg",
  },
];

// Helper functions
export const getBookById = (id: string): Book | undefined => {
  return books.find((book) => book.id === id);
};

export const getBooksByCategory = (categoryId: string): Book[] => {
  return books.filter((book) => book.category === categoryId);
};

export const getBooksByAuthor = (authorName: string): Book[] => {
  return books.filter((book) =>
    book.author.toLowerCase().includes(authorName.toLowerCase())
  );
};

export const searchBooks = (query: string): Book[] => {
  const lowercaseQuery = query.toLowerCase();
  return books.filter(
    (book) =>
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
    .filter(
      (book) => book.category === currentBook.category && book.id !== bookId
    )
    .slice(0, limit);

  // If not enough books in same category, fill with other books
  if (relatedBooks.length < limit) {
    const otherBooks = books
      .filter(
        (book) => book.category !== currentBook.category && book.id !== bookId
      )
      .slice(0, limit - relatedBooks.length);
    relatedBooks.push(...otherBooks);
  }

  return relatedBooks;
};
