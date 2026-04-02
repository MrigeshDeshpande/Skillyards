import { ORGANIZATION_ID } from "./global";

export const getWebPageSchema = (page) => {
  if (!page) return null;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://www.skillyards.in${page.url}#webpage`,
    url: `https://www.skillyards.in${page.url}`,
    name: page.name,
    ...(page.description && { description: page.description }),
    isPartOf: {
      "@id": "https://www.skillyards.in/#website"
    },
    about: {
      "@id": ORGANIZATION_ID
    }
  };
};

export const getAboutPageSchema = (page) => {
  if (!page) return null;
  return {
    ...getWebPageSchema(page),
    "@type": "AboutPage",
  };
};

export const getContactPageSchema = (page) => {
  if (!page) return null;
  return {
    ...getWebPageSchema(page),
    "@type": "ContactPage",
  };
};

export const getCollectionPageSchema = (page) => {
  if (!page) return null;
  return {
    ...getWebPageSchema(page),
    "@type": "CollectionPage"
  };
};

export const getImageGallerySchema = (page) => {
  if (!page) return null;
  return {
    ...getWebPageSchema(page),
    "@type": "ImageGallery"
  };
};

export const getVideoGallerySchema = (page) => {
  if (!page) return null;
  return {
    ...getWebPageSchema(page),
    "@type": "VideoGallery"
  };
};
