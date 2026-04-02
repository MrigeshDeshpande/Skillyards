export const ORGANIZATION_ID = "https://www.skillyards.in/#organization";
export const WEBSITE_ID = "https://www.skillyards.in/#website";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",

  "@id": ORGANIZATION_ID,

  name: "SkillYards",
  url: "https://www.skillyards.in",

  description:
    "SkillYards is a next-generation learning and certification platform based in Agra, India, offering industry-aligned training and professional certifications.",
  logo: {
    "@type": "ImageObject",
    url: "https://www.skillyards.in/images/logo-square.png",
    width: 512,
    height: 512
  },

  image: {
    "@type": "ImageObject",
    url: "https://www.skillyards.in/images/opengraph/home-og.jpg",
    width: 1200,
    height: 630
  },

  address: {
    "@type": "PostalAddress",
    streetAddress: "A3, Behind Manoj Dhaba, Bhagwan Talkies Xing",
    addressLocality: "Agra",
    addressRegion: "Uttar Pradesh",
    postalCode: "282005",
    addressCountry: "IN"
  },

  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91 7895501840",
    contactType: "customer support",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"]
  },

  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "120"
  },

  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Rahul Sharma" },
      reviewBody: "SkillYards transformed my career. The On Job Training program allowed me to learn while working on real projects. Highly recommend!",
      reviewRating: { "@type": "Rating", ratingValue: "5" }
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sneha Verma" },
      reviewBody: "The On Job Degree program helped me earn a degree while gaining practical experience. The mentors are top-notch!",
      reviewRating: { "@type": "Rating", ratingValue: "5" }
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Vikram Singh" },
      reviewBody: "Hands-on projects, flexible schedule, and career guidance – SkillYards covers everything you need to succeed in IT.",
      reviewRating: { "@type": "Rating", ratingValue: "5" }
    }
  ],

  sameAs: [
    "https://www.facebook.com/skillyardss",
    "https://www.linkedin.com/company/skillyards",
    "https://www.instagram.com/skillyardss",
    "https://www.twitter.com/skillyardss",
    "https://www.youtube.com/@Skillyardss"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,

  url: "https://www.skillyards.in",
  name: "SkillYards",

  publisher: {
    "@id": ORGANIZATION_ID
  },

  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.skillyards.in/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};