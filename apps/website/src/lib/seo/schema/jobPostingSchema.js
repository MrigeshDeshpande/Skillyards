import { ORGANIZATION_ID } from "./global";

export const getJobPostingSchema = (job) => {
  if (!job) return null;
  
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    ...(job.description && { description: job.description }),
    datePosted: job.datePosted || new Date().toISOString(),
    ...(job.validThrough && { validThrough: job.validThrough }),
    employmentType: job.employmentType || "FULL_TIME",
    hiringOrganization: {
      "@id": ORGANIZATION_ID
    },
    skills: job.skills || "Communication, Technical Proficiency, Teamwork",
    responsibilities: job.responsibilities || "Execute projects, maintain quality, collaborate with teams",
    experienceRequirements: job.experience || "Entry Level",
    jobLocation: {
      "@type": "Place",
      name: "SkillYards",
      address: {
        "@type": "PostalAddress",
        streetAddress: "A3, Behind Manoj Dhaba, Bhagwan Talkies Xing",
        addressLocality: "Agra",
        addressRegion: "Uttar Pradesh",
        postalCode: "282005",
        addressCountry: "IN"
      }
    }
  };
};
