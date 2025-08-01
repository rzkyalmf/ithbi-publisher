import { Link } from 'react-router';
import Seo from '../components/Seo';

const NotFound: React.FC = () => {
  return (
    <>
      <Seo
        title="Halaman Tidak Ditemukan - 404"
        description="Halaman yang Anda cari tidak ditemukan. Kembali ke beranda untuk menjelajahi koleksi buku Islam kami."
      />
      
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-primary-100 rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-primary-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-1.01-5.986-2.709M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">404</h1>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Halaman Tidak Ditemukan
          </h2>
          
          <p className="text-gray-600 mb-8">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman tersebut telah dipindahkan atau tidak pernah ada.
          </p>
          
          <div className="space-y-3">
            <Link
              to="/"
              className="block w-full btn-primary"
            >
              Kembali ke Beranda
            </Link>
            
            <Link
              to="/katalog"
              className="block w-full btn-secondary"
            >
              Lihat Katalog Buku
            </Link>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-3">
              Butuh bantuan? Hubungi kami:
            </p>
            <div className="flex justify-center space-x-4 text-sm">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
              >
                WhatsApp
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="mailto:info@penerbitislami.com"
                className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;