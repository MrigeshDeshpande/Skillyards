import { ORGANIZATION_ID } from "./global";

export const getCourseSchema = (course) => ({
  "@context": "https://schema.org",
  "@type": "Course",

  name: course.title,
  description: course.description,

  provider: {
    "@id": ORGANIZATION_ID,
  },

  educationalLevel: "Beginner to Advanced",
  inLanguage: "en",

  hasCourseInstance: {
    "@type": "CourseInstance",

    courseMode: "offline",

    location: {
      "@type": "Place",
      name: "SkillYards",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Agra",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
    },

    startDate: course.startDate || undefined,
  },

  offers: {
    "@type": "Offer",
    category: "Educational",
    availability: "https://schema.org/InStock",
    url: `https://www.skillyards.in${course.seo.path}`,
  },
});