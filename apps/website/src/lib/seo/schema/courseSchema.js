export const getCourseSchema = (course) => ({
  "@context": "https://schema.org",
  "@type": "Course",

  name: course.title,
  description: course.description,

  provider: {
    "@type": "Organization",
    "@id": "https://www.skillyards.in/#organization"
  },

  educationalCredentialAwarded: course.certification,

  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "offline",
    location: {
      "@type": "Place",
      name: "Skillyards",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Agra",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN"
      }
    }
  }
});