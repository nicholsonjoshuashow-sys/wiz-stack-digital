export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Darkstack7",
  "alternateName": "Darkstack7 Cyber Defense",
  "url": "https://darkstack7.com",
  "logo": "https://darkstack7.com/logo.png",
  "description": "Elite cybersecurity leadership for high-stakes moments. 24/7 incident response, virtual CISO services, penetration testing, and security consulting.",
  "founder": {
    "@type": "Person",
    "name": "Joshua R. Nicholson",
    "jobTitle": "Founder & Cybersecurity Expert",
    "description": "24-year cybersecurity veteran and former U.S. Marine with leadership experience across Fortune 500 companies and government agencies."
  },
  "serviceArea": {
    "@type": "Place",
    "name": "Global"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Cybersecurity Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "24/7 Incident Response",
          "description": "On-demand IR Commander for active breaches. Board-level briefings, forensic leadership, regulatory guidance, threat validation, and executive crisis communication.",
          "serviceType": "Emergency Cybersecurity Response"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Virtual CISO Services",
          "description": "Technical leadership with real-world experience. Executive-level cybersecurity expertise focused on strategy, architecture, threat defense, and security engineering.",
          "serviceType": "Cybersecurity Consulting"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Penetration Testing",
          "description": "Comprehensive security assessments that uncover real risks, validate controls, and build practical, scalable, and resilient security strategies.",
          "serviceType": "Security Testing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Insider Threat Investigations",
          "description": "Comprehensive insider threat investigations, behavioral analysis, digital forensics, and remediation for trusted insider incidents.",
          "serviceType": "Digital Forensics"
        }
      }
    ]
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Emergency Response",
    "availableLanguage": "English",
    "hoursAvailable": "24/7"
  }
};

export const penetrationTestingServiceData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Penetration Testing Services",
  "description": "Comprehensive security assessments that uncover real risks, validate controls, and build practical, scalable, and resilient security strategies for your organization.",
  "provider": {
    "@type": "Organization",
    "name": "Darkstack7",
    "url": "https://darkstack7.com"
  },
  "serviceType": "Cybersecurity Testing",
  "category": "Information Security",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Penetration Testing Types",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Network Penetration Testing",
          "description": "Comprehensive assessment of network infrastructure, firewalls, and perimeter defenses."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Application Testing",
          "description": "OWASP-based security testing for web applications and APIs."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cloud Infrastructure Testing",
          "description": "Security assessment of AWS, Azure, and GCP environments."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile Application Testing",
          "description": "Security testing for iOS and Android applications."
        }
      }
    ]
  }
};