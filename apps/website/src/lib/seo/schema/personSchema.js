import { ORGANIZATION_ID } from "./global";

export const getPersonSchema = (person) => {
  if (!person) return null;
  
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.role,
    worksFor: {
      "@id": ORGANIZATION_ID
    },
    ...(person.url && { url: `https://www.skillyards.in${person.url}` }),
    ...(person.image && { image: `https://www.skillyards.in${person.image}` }),
    ...(person.description && { description: person.description })
  };
};
