export const ORGANIZATION_ID = "https://www.skillyards.in/#organization";
export const WEBSITE_ID = "https://www.skillyards.in/#website";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": ORGANIZATION_ID,

  name: "SkillYards",
  url: "https://www.skillyards.in",

  logo: {
    "@type": "ImageObject",
    url: "https://www.skillyards.in/images/logo-square.png",
  },

  address: {
    "@type": "PostalAddress",
    addressLocality: "Agra",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,

  url: "https://www.skillyards.in",
  name: "SkillYards",

  publisher: {
    "@id": ORGANIZATION_ID,
  },
};