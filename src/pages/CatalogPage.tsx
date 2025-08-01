import { useMemo, useState } from "react";
import { Link } from "react-router";
import Seo from "../components/Seo";
import { books, categories, searchBooks } from "../data/books";
import type { Book, BookFilters } from "../types";

interface BookCardProps {
  book: Book;
}

function BookCard({ book }: BookCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : categoryId;
  };

  return (
    <Link
      to={`/buku/${book.id}`}
      className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col h-full"
    >
      <div className="aspect-[2/3] bg-gray-100 overflow-hidden">
        <img
          src={book.coverImage}
          alt={`Cover buku ${book.title}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-700 transition-colors">
            {book.title}
          </h3>
          <p className="text-sm text-gray-600 mb-1">{book.author}</p>
          <p className="text-xs text-blue-600 mb-2">
            {getCategoryName(book.category)}
          </p>
        </div>
        <p className="text-lg font-bold text-green-600 mt-auto">
          {formatPrice(book.price)}
        </p>
      </div>
    </Link>
  );
}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        ← Sebelumnya
      </button>

      <div className="flex space-x-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-2 text-sm font-medium rounded-md ${
              page === currentPage
                ? "bg-blue-600 text-white"
                : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Selanjutnya →
      </button>
    </div>
  );
}

export default function CatalogPage() {
  const [filters, setFilters] = useState<BookFilters>({
    search: "",
    category: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Filter dan search logic
  const filteredBooks = useMemo(() => {
    let result = books;

    // Apply search filter
    if (filters.search) {
      result = searchBooks(filters.search);
    }

    // Apply category filter
    if (filters.category) {
      result = result.filter((book) => book.category === filters.category);
    }

    return result;
  }, [filters]);

  // Pagination logic
  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedBooks = filteredBooks.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Reset to first page when filters change
  const handleFilterChange = (newFilters: Partial<BookFilters>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Seo
        title="Katalog Buku - Publisher Islami"
        description="Jelajahi koleksi lengkap buku-buku Islam berkualitas dari publisher terpercaya. Temukan buku Aqidah, Fiqh, Sirah, Hadits, dan lainnya."
        keywords="katalog buku islam, buku islami, fiqh, aqidah, sirah, hadits, tafsir, akhlaq"
      />

      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Katalog Buku
            </h1>
            <p className="text-gray-600">
              Jelajahi koleksi lengkap buku-buku Islam berkualitas
            </p>
          </div>

          {/* Search and Filter */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1">
                <label htmlFor="search" className="sr-only">
                  Cari buku
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="search"
                    placeholder="Cari berdasarkan judul, penulis, atau kata kunci..."
                    value={filters.search}
                    onChange={(e) =>
                      handleFilterChange({ search: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 border border-gray-100 rounded-lg focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 transition-colors duration-200 text-sm"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="md:w-64">
                <label htmlFor="category" className="sr-only">
                  Filter kategori
                </label>
                <div className="relative">
                  <select
                    id="category"
                    value={filters.category}
                    onChange={(e) =>
                      handleFilterChange({ category: e.target.value })
                    }
                    className="w-full appearance-none px-4 py-3 pr-10 border border-gray-100 rounded-lg focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 transition-colors duration-200 text-sm bg-white cursor-pointer"
                  >
                    <option value="">📚 Semua Kategori</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Info */}
          <div className="mb-6">
            <p className="text-gray-600">
              Menampilkan {paginatedBooks.length} dari {filteredBooks.length}{" "}
              buku
              {filters.search && (
                <span className="ml-1">untuk pencarian "{filters.search}"</span>
              )}
              {filters.category && (
                <span className="ml-1">
                  dalam kategori{" "}
                  {categories.find((cat) => cat.id === filters.category)?.name}
                </span>
              )}
            </p>
          </div>

          {/* Books Grid */}
          {paginatedBooks.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                {paginatedBooks.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>

              {/* Pagination */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          ) : (
            /* Empty State */
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Tidak ada buku ditemukan
                </h3>
                <p className="text-gray-500 mb-4">
                  Coba ubah kata kunci pencarian atau pilih kategori yang
                  berbeda.
                </p>
                <button
                  onClick={() => {
                    setFilters({ search: "", category: "" });
                    setCurrentPage(1);
                  }}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Reset Filter
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
