import { SEO_CONFIG } from "./seo.config";
import { validateSEO } from "./validateSEO";

export function buildSEO({
  title,
  description,
  path,
  keywords = [],
  ogImage,
}) {
  validateSEO({ title, description, path });

  const canonical = `${SEO_CONFIG.baseUrl}${path}`;

  // Single source of truth
  const finalImage = ogImage || SEO_CONFIG.defaultOGImage;

  return {
    metadataBase: new URL(SEO_CONFIG.baseUrl),

    title: {
      default: title,
      template: SEO_CONFIG.titleTemplate,
    },

    description: description || SEO_CONFIG.defaultDescription,

    keywords,

    alternates: {
      canonical,
    },

    openGraph: {
      type: "website", 
      title,
      description,
      url: canonical,
      siteName: SEO_CONFIG.siteName, 
      images: [
        {
          url: finalImage,
          width: 1200,
          height: 630,
          alt: `${title} | ${SEO_CONFIG.siteName}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [finalImage], 
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}