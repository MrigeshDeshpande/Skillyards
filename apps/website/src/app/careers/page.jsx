import JsonLd from "@/components/JsonLd";
import CareersHero from "@/components/careerspage/CareersHero";
import WhyWorkAtSkillYards from "@/components/careerspage/WhyWorkAtSkillYards";
import LifeAtSkillYards from "@/components/careerspage/LifeAtSkillYards";
import OpenRoles from "@/components/careerspage/OpenRoles";
import HiringProcess from "@/components/careerspage/HiringProcess";
import CareersCTA from "@/components/careerspage/CareersCTA";
import PageHero from "@/components/PageHero";

import { buildSEO } from "@/lib/seo/buildSEO";

export const metadata = buildSEO({
  title: "Careers at SkillYards",
  description:
    "Explore career opportunities at SkillYards. Join our team of educators, engineers, and professionals shaping the future of skill-based learning in India.",
  path: "/careers",
  keywords: [
    "SkillYards careers",
    "Jobs at SkillYards",
    "EdTech jobs India",
    "Online teaching jobs",
    "IT trainer jobs",
    "SkillYards hiring",
  ],
  ogImage: "/images/opengraph/careers-og.jpg",
});

export function jobPostingSchema(job) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    identifier: {
      "@type": "PropertyValue",
      name: "SkillYards",
      value: job.id,
    },
    datePosted: job.created_at,
    validThrough: job.apply_deadline ?? undefined,
    employmentType: job.employment_type.toUpperCase().replace("-", "_"),
    hiringOrganization: {
      "@type": "Organization",
      name: "SkillYards",
      sameAs: "https://www.skillyards.in",
      logo: "https://www.skillyards.in/images/logo.png",
    },
    jobLocation: job.location
      ? {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: job.location,
            addressCountry: "IN",
          },
        }
      : undefined,
    baseSalary:
      job.salary_min && job.salary_max
        ? {
            "@type": "MonetaryAmount",
            currency: "INR",
            value: {
              "@type": "QuantitativeValue",
              minValue: job.salary_min,
              maxValue: job.salary_max,
              unitText: "YEAR",
            },
          }
        : undefined,
  };
}

export default async function CareersPage() {
  const roles = [];

  const careersPageSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SkillYards",
    url: "https://www.skillyards.in/careers",
    logo: "https://www.skillyards.in/images/logo.png",
    sameAs: [
      process.env.NEXT_PUBLIC_FACEBOOK_URL,
      process.env.NEXT_PUBLIC_TWITTER_URL,
      process.env.NEXT_PUBLIC_LINKEDIN_URL,
      process.env.NEXT_PUBLIC_INSTAGRAM_URL,
      process.env.NEXT_PUBLIC_YOUTUBE_URL,
    ],
    description:
      "SkillYards is an education-first technology company focused on real-world skill development, industry-aligned training, and career transformation.",
    contactPoint: {
      "@type": "ContactPoint",
      email: process.env.NEXT_PUBLIC_EMAIL,
      telephone: process.env.NEXT_PUBLIC_PHONE,
      contactType: "recruitment",
    },
  };

  return (
    <>
      <div className="bg-linear-to-b from-white via-zinc-50 to-zinc-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-black text-neutral-900 dark:text-neutral-100 transition-colors duration-500">
        <CareersHero />
        <WhyWorkAtSkillYards />
        <LifeAtSkillYards />
        <OpenRoles roles={roles} />
        <HiringProcess />
        <CareersCTA />
      </div>

      <JsonLd
        schema={careersPageSchema}
        id="careers-page-schema-skillyards"
      />

      {roles?.length > 0 &&
        roles.map((job) => (
          <JsonLd
            key={job.id}
            schema={jobPostingSchema(job)}
            id={`job-schema-${job.id}`}
          />
        ))}
    </>
  );
}