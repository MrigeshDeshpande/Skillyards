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

  isPartOf: {
    "@type": "EducationalOccupationalProgram",
    name: course.title,
    description: course.description,
    provider: {
      "@id": ORGANIZATION_ID,
    }
  },

  image: course.seo?.ogImage ? `https://www.skillyards.in${course.seo.ogImage}` : "https://www.skillyards.in/images/opengraph/fullstack-og.jpg",

  educationalLevel: "Beginner to Advanced",
  inLanguage: "en",
  ...(course.certification && {
    educationalCredentialAwarded: [{
      "@type": "EducationalOccupationalCredential",
      name: course.certification,
      credentialCategory: "Certificate"
    }]
  }),

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

  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "85"
  },

  offers: {
    "@type": "Offer",
    category: "Professional Training",
    availability: "https://schema.org/InStock",
    url: `https://www.skillyards.in${course.seo.path}`,
    priceCurrency: "INR",
  },
});