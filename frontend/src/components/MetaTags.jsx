import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const MetaTags = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl, 
  ogImage, 
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noIndex = false,
  structuredData = null
}) => {
  const siteName = 'FunwithJuli';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const defaultDescription = 'Premium escort service in Delhi NCR offering safe, private meetings with verified companions. Professional escort services in Delhi, Noida, Gurgaon, Ghaziabad, and Greater Noida.';
  const defaultKeywords = 'escort service Delhi, call girls Delhi NCR, premium escort service, private meetings, safe escort service, Delhi escort, Noida escort, Gurgaon escort, Ghaziabad escort, Greater Noida escort, verified companions, discreet escort service';
  const baseUrl = 'https://funwithjuli.com';
  const defaultOgImage = `${baseUrl}/og-image.jpg`;

  useEffect(() => {
    // Update document title for immediate effect
    if (title) {
      document.title = fullTitle;
    }
  }, [title, fullTitle]);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="author" content={siteName} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="language" content="English" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl || baseUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl || baseUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={canonicalUrl || baseUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content={ogImage || defaultOgImage} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#ec4899" />
      <meta name="msapplication-TileColor" content="#ec4899" />
      <meta name="application-name" content={siteName} />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default MetaTags;
