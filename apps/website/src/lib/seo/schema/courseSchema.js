import { ORGANIZATION_ID } from "./global";

export const getCourseSchema = (course) => ({
  "@context": "https://schema.org",
  "@type": "Course",

  "@id": `https://www.skillyards.in${course.seo.path}#course`,

  name: course.title,
  description: course.description,

  provider: {
    "@id": ORGANIZATION_ID,
  },

  image: "https://www.skillyards.in/images/opengraph/fullstack-og.jpg",

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
        streetAddress: "A3, Behind Manoj Dhaba, Bhagwan Talkies Xing",
        addressLocality: "Agra",
        addressRegion: "Uttar Pradesh",
        postalCode: "282005",
        addressCountry: "IN",
      },
    },

    ...(course.startDate && {
      startDate: new Date(course.startDate).toISOString().split("T")[0],
    }),
  },

  offers: {
    "@type": "Offer",
    category: "Educational",
    availability: "https://schema.org/InStock",
    url: `https://www.skillyards.in${course.seo.path}`,
  },
});