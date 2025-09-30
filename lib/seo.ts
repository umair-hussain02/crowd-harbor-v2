import type { Metadata } from "next"

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: "website" | "article"
}

export function generateSEO({
  title = "CrowdHarbor - Connecting Startups to Equity Crowdfunding Success",
  description = "CrowdHarbor connects innovative startups with equity crowdfunding opportunities through our trusted partnership with Crowdcube. Raise €200k-€8M for your startup.",
  keywords = [
    "equity crowdfunding",
    "startup funding",
    "Crowdcube",
    "investment",
    "venture capital",
    "startup capital",
    "crowdfunding platform",
    "business funding",
    "startup investment",
    "equity investment",
  ],
  image = "/og-image.jpg",
  url = "https://crowdharbor.com",
  type = "website",
}: SEOProps = {}): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://crowdharbor.com"
  const fullUrl = url.startsWith("http") ? url : `${baseUrl}${url}`
  const fullImageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`

  return {
    title,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: "CrowdHarbor" }],
    creator: "CrowdHarbor",
    publisher: "CrowdHarbor",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type,
      title,
      description,
      url: fullUrl,
      siteName: "CrowdHarbor",
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [fullImageUrl],
      creator: "@crowdharbor",
      site: "@crowdharbor",
    },
    alternates: {
      canonical: fullUrl,
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
      yandex: process.env.YANDEX_VERIFICATION,
      yahoo: process.env.YAHOO_VERIFICATION,
    },
  }
}

export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CrowdHarbor",
    description: "Connecting startups to equity crowdfunding success through trusted Crowdcube partnership",
    url: "https://crowdharbor.com",
    logo: "https://crowdharbor.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+44-20-7946-0958",
      contactType: "customer service",
      email: "hello@crowdharbor.com",
    },
    sameAs: ["https://linkedin.com/company/crowdharbor", "https://twitter.com/crowdharbor"],
  },

  service: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Equity Crowdfunding Services",
    description: "Professional equity crowdfunding consultation and Crowdcube partnership services for startups",
    provider: {
      "@type": "Organization",
      name: "CrowdHarbor",
    },
    serviceType: "Financial Services",
    areaServed: "Worldwide",
  },
}
