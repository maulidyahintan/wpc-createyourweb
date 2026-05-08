import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://createyourweb.id";

export const siteConfig = {
  name: "CreateYourWeb",
  description:
    "Digital agency profesional untuk landing page, company profile, dashboard, SaaS platform, mobile app, UI/UX, API integration, dan maintenance.",
  url: siteUrl,
  locale: "id_ID",
  image: `${siteUrl}/og-image.svg`,
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Digital Agency Profesional`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Digital Agency Profesional`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.image,
        width: 1200,
        height: 630,
        alt: "CreateYourWeb Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Digital Agency Profesional`,
    description: siteConfig.description,
    images: [siteConfig.image],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  keywords: [
    "jasa pembuatan website",
    "digital agency indonesia",
    "jasa landing page",
    "jasa company profile",
    "jasa dashboard admin",
    "jasa mobile app",
    "jasa ui ux",
    "api integration",
  ],
  category: "technology",
};

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const canonicalUrl = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      images: [siteConfig.image],
    },
    twitter: {
      title,
      description,
      images: [siteConfig.image],
    },
  };
}
