import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const MetaTags = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType = "website",
  twitterCard = "summary_large_image",
  noIndex = false,
  structuredData = null,
}) => {
  const siteName = "FunwithJuli";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const baseUrl = "https://funwithjuli.in";
  const defaultOgImage = `${baseUrl}/og-image.jpg`;

  // Force meta tag updates by adding timestamp
  useEffect(() => {
    // Update document title for immediate effect
    if (title) {
      document.title = fullTitle;
    }

    // Force meta description update
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta && description) {
      descMeta.setAttribute("content", description);
    }

    // Force keywords update
    const keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (keywordsMeta && keywords) {
      keywordsMeta.setAttribute("content", keywords);
    }
  }, [title, description, keywords, fullTitle]);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={siteName} />
      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow"}
      />
      <meta name="language" content="English" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
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
