import { useState } from "react";
import { Link, useParams } from "react-router";
import Seo from "../components/Seo";
import { categories, getBookById, getRelatedBooks } from "../data/books";
import type { Book } from "../types";

interface BookGalleryProps {
  book: Book;
}

function BookGallery({ book }: BookGalleryProps) {
  const [currentView, setCurrentView] = useState<"front" | "back">("front");

  return (
    <div className="space-y-4">
      <div className="aspect-[2/3] bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={
            currentView === "front"
              ? book.coverImage
              : book.backCoverImage || book.coverImage
          }
          alt={`${
            currentView === "front" ? "Sampul depan" : "Sampul belakang"
          } buku ${book.title}`}
          className="w-full h-full object-cover"
        />
      </div>

      {book.backCoverImage && (
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentView("front")}
            className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              currentView === "front"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Sampul Depan
          </button>
          <button
            onClick={() => setCurrentView("back")}
            className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              currentView === "back"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Sampul Belakang
          </button>
        </div>
      )}
    </div>
  );
}

interface RelatedBooksProps {
  books: Book[];
}

function RelatedBooks({ books }: RelatedBooksProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (books.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Buku Terkait</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <Link
            key={book.id}
            to={`/buku/${book.id}`}
            className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
          >
            <div className="aspect-[2/3] bg-gray-100 overflow-hidden">
              <img
                src={book.coverImage}
                alt={`Cover buku ${book.title}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {book.title}
              </h3>
              <p className="text-sm text-gray-600 mb-1">{book.author}</p>
              <p className="text-lg font-bold text-green-600">
                {formatPrice(book.price)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function BookDetailPage() {
  const { id } = useParams<{ id: string }>();
  const book = id ? getBookById(id) : null;
  const relatedBooks = book ? getRelatedBooks(book.id, 3) : [];

  if (!book) {
    return (
      <>
        <Seo
          title="Buku Tidak Ditemukan - Publisher Islami"
          description="Buku yang Anda cari tidak ditemukan"
        />

        <div className="min-h-screen bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📚</div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Buku Tidak Ditemukan
              </h1>
              <p className="text-gray-600 mb-6">
                Maaf, buku yang Anda cari tidak tersedia.
              </p>
              <Link
                to="/katalog"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                ← Kembali ke Katalog
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

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

  const whatsappMessage = encodeURIComponent(
    `Halo, saya tertarik dengan buku "${book.title}" oleh ${book.author}. Bisakah saya mendapatkan informasi lebih lanjut?`
  );
  const whatsappUrl = `https://wa.me/6285187695229?text=${whatsappMessage}`;
  const emailSubject = encodeURIComponent(
    `Pertanyaan tentang buku: ${book.title}`
  );
  const emailBody = encodeURIComponent(
    `Halo,\n\nSaya tertarik dengan buku "${book.title}" oleh ${book.author}.\n\nBisakah saya mendapatkan informasi lebih lanjut tentang ketersediaan dan cara pembelian?\n\nTerima kasih.`
  );
  const emailUrl = `mailto:ptakademiaththibbulbadil@gmail.com?subject=${emailSubject}&body=${emailBody}`;

  return (
    <>
      <Seo
        title={`${book.title} - ${book.author} | Publisher Islami`}
        description={book.description}
        keywords={`${book.title}, ${book.author}, ${getCategoryName(
          book.category
        )}, buku islam`}
        image={book.coverImage}
        type="article"
      />

      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link
              to="/katalog"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Kembali ke Katalog
            </Link>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 p-6 lg:p-8">
              {/* Left Column - Book Cover */}
              <div className="mb-8 lg:mb-0">
                <BookGallery book={book} />
              </div>

              {/* Right Column - Book Information */}
              <div className="space-y-6">
                {/* Title and Basic Info */}
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-3">
                    {book.title}
                  </h1>
                  <p className="text-lg text-gray-600 mb-2">
                    Oleh: <span className="font-semibold">{book.author}</span>
                  </p>
                  <p className="text-sm text-blue-600 font-medium">
                    Kategori: {getCategoryName(book.category)}
                  </p>
                </div>

                {/* Description */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    Deskripsi
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {book.description}
                  </p>
                </div>

                {/* Book Details */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    Detail Buku
                  </h2>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span>Jumlah halaman:</span>
                      <span className="font-medium">{book.pages} halaman</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Ukuran:</span>
                      <span className="font-medium">{book.size}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Tahun terbit:</span>
                      <span className="font-medium">{book.publishYear}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Jenis kertas:</span>
                      <span className="font-medium">{book.paperType}</span>
                    </li>
                    {book.isbn && (
                      <li className="flex justify-between">
                        <span>ISBN:</span>
                        <span className="font-medium">{book.isbn}</span>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Price */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-700 mb-1">Harga:</p>
                  <p className="text-2xl font-bold text-green-600">
                    {formatPrice(book.price)}
                  </p>
                </div>

                {/* Call to Action */}
                <div className="space-y-3">
                  {/* PDF Preview Button */}
                  {book.pdfPreview && (
                    <a
                      href={book.pdfPreview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Lihat Preview PDF
                    </a>
                  )}

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                    Hubungi via WhatsApp
                  </a>

                  <div className="text-center text-gray-500 text-sm">atau</div>

                  <a
                    href={emailUrl}
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Kirim Email
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Sections */}
            <div className="border-t border-gray-200 p-6 lg:p-8 space-y-8">
              {/* Author Info */}
              {book.authorBio && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Tentang Penulis
                  </h2>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-start space-x-4">
                      {book.authorPhoto && (
                        <img
                          src={book.authorPhoto}
                          alt={book.author}
                          className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                        />
                      )}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {book.author}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {book.authorBio}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Quote */}
              {book.quote && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Kutipan dari Buku
                  </h2>
                  <blockquote className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                    <p className="text-lg italic text-gray-800 leading-relaxed">
                      {book.quote}
                    </p>
                  </blockquote>
                </div>
              )}
            </div>
          </div>

          {/* Related Books */}
          <RelatedBooks books={relatedBooks} />
        </div>
      </div>
    </>
  );
}
