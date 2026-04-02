import { ORGANIZATION_ID } from "./global";

export const getServiceSchema = (service) => {
  if (!service) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://www.skillyards.in${service.url}#service`,
    name: service.name,
    description: service.description,
    provider: {
      "@id": ORGANIZATION_ID
    },
    areaServed: {
      "@type": "City",
      name: "Agra"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "SkillYards Training & Services",
      itemListElement: service.items?.map((item, index) => ({
        "@type": "OfferCatalog",
        name: item.name,
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: item.name
            }
          }
        ]
      })) || []
    }
  };
};

export const getQuizSchema = (quiz) => {
  if (!quiz) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Quiz",
    "@id": `https://www.skillyards.in${quiz.url}#quiz`,
    name: quiz.name,
    description: quiz.description,
    learningResourceType: "Quiz",
    educationalLevel: "Beginner to Advanced",
    assesses: "HTML, CSS, JavaScript, SEO",
    publisher: {
      "@id": ORGANIZATION_ID
    }
  };
};
