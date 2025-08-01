import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import ErrorBoundary from '../components/ErrorBoundary';
import Homepage from '../pages/Homepage';
import NotFound from '../pages/NotFound';

// Lazy load pages for better performance
import { lazy } from 'react';

const CatalogPage = lazy(() => import('../pages/CatalogPage').catch(() => {
  console.error('Error loading CatalogPage');
  return { default: () => <div>Error loading page</div> };
}));
const BookDetailPage = lazy(() => import('../pages/BookDetailPage').catch(() => {
  console.error('Error loading BookDetailPage');
  return { default: () => <div>Error loading page</div> };
}));
const AboutPage = lazy(() => import('../pages/AboutPage').catch(() => {
  console.error('Error loading AboutPage');
  return { default: () => <div>Error loading page</div> };
}));
const ContactPage = lazy(() => import('../pages/ContactPage').catch(() => {
  console.error('Error loading ContactPage');
  return { default: () => <div>Error loading page</div> };
}));

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary>
        <MainLayout>
          <Homepage />
        </MainLayout>
      </ErrorBoundary>
    ),
    errorElement: (
      <ErrorBoundary>
        <MainLayout>
          <NotFound />
        </MainLayout>
      </ErrorBoundary>
    ),
  },
  {
    path: '/katalog',
    element: (
      <ErrorBoundary>
        <MainLayout>
          <CatalogPage />
        </MainLayout>
      </ErrorBoundary>
    ),
  },
  {
    path: '/buku/:id',
    element: (
      <ErrorBoundary>
        <MainLayout>
          <BookDetailPage />
        </MainLayout>
      </ErrorBoundary>
    ),
  },
  {
    path: '/tentang-kami',
    element: (
      <ErrorBoundary>
        <MainLayout>
          <AboutPage />
        </MainLayout>
      </ErrorBoundary>
    ),
  },
  {
    path: '/kontak',
    element: (
      <ErrorBoundary>
        <MainLayout>
          <ContactPage />
        </MainLayout>
      </ErrorBoundary>
    ),
  },
  {
    path: '*',
    element: (
      <ErrorBoundary>
        <MainLayout>
          <NotFound />
        </MainLayout>
      </ErrorBoundary>
    ),
  },
]);