import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  ogUrl?: string;
  structuredData?: object;
}

const SEO = ({
  title = "Darkstack7 | Cybersecurity Leadership & Incident Response",
  description = "Elite cybersecurity leadership. 24/7 incident response, virtual CISO, penetration testing, and security consulting.",
  keywords = "cybersecurity, incident response, virtual CISO, penetration testing, security consulting, cyber defense, darkstack7",
  canonical,
  ogType = "website",
  ogImage = "https://darkstack7.com/darkstack7-logo.png",
  ogUrl,
  structuredData
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        if (property) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Darkstack7');

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:image', ogImage, true);
    const resolvedOgUrl = ogUrl || canonical || (typeof window !== 'undefined' ? window.location.href : undefined);
    if (resolvedOgUrl) {
      updateMetaTag('og:url', resolvedOgUrl, true);
    }

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Canonical URL
    if (canonical) {
      let linkElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'canonical');
        document.head.appendChild(linkElement);
      }
      linkElement.setAttribute('href', canonical);
    }

    // Structured Data
    if (structuredData) {
      let scriptElement = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, canonical, ogType, ogImage, ogUrl, structuredData]);

  return null;
};

export default SEO;