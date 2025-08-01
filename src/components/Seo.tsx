import { Helmet } from 'react-helmet';
import type { SEOProps } from '../types';

interface SeoComponentProps extends SEOProps {
  children?: React.ReactNode;
}

const Seo: React.FC<SeoComponentProps> = ({
  title,
  description,
  keywords,
  image = '/images/og-default.jpg',
  url = window.location.href,
  type = 'website',
  children
}) => {
  const siteName = 'Penerbit Islami Nusantara';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={siteName} />
      <link rel="canonical" href={url} />
      
      {/* Custom children */}
      {children}
    </Helmet>
  );
};

export default Seo;