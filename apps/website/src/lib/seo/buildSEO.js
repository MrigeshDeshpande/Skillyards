import { SEO_CONFIG } from "./seo.config";
import { validateSEO } from "./validateSEO";

export function buildSEO({
  title,
  description,
  path,
  keywords = [],
  ogImage,
  twitterImage,
}) {
  validateSEO({ title, description, path });

  const canonical = `${SEO_CONFIG.baseUrl}${path}`;

  const finalOGImage = ogImage || SEO_CONFIG.defaultOGImage;
  const finalTwitterImage =
    twitterImage || ogImage || SEO_CONFIG.defaultOGImage;

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
      title,
      description,
      url: canonical,
      images: [
        {
          url: finalOGImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: finalTwitterImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}