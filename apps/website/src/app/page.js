import dynamic from "next/dynamic";

import HeroCarousel from "@/components/homepage/HeroCarousel";
import AboutSection from "@/components/homepage/AboutSection";

const ProblemSection = dynamic(() => import("@/components/homepage/ProblemSection"));
const FeaturesSection = dynamic(() => import("@/components/homepage/FeaturesSection"));
const LeadersSection = dynamic(() => import("@/components/common/LeadersSection"));
const CTASection = dynamic(() => import("@/components/homepage/CTASection"));
const FAQSection = dynamic(() => import("@/components/common/FAQSection"));
const BlogSection = dynamic(() => import("@/components/homepage/BlogSection").then((mod) => mod.BlogSection));
const ServicesSection = dynamic(() => import("@/components/homepage/ServicesSection"));
const PartnersSlider = dynamic(() => import("@/components/common/PartnersSlider"));
const ProgramsShowcase = dynamic(() => import("@/components/homepage/ProgrammeShowcase"));
const HearFromStudents = dynamic(() => import("@/components/homepage/HearFromStudents"));
const FeaturedRoles = dynamic(() => import("@/components/homepage/FeaturedRoles"));
const SkillTestSection = dynamic(() => import("@/components/homepage/SkillTestSection"));

import { buildSEO } from "@/lib/seo/buildSEO";
import JsonLd from "@/components/JsonLd";

import { getFAQSchema } from "@/lib/seo/schema/faqSchema";
import { faqCategories } from "@/data/faqs";

const homepageFaqs = faqCategories.homepage.faqs.slice(0, 4);
const faqSchema = getFAQSchema(homepageFaqs);

const combinedSchema = [faqSchema].filter(Boolean);

export const metadata = buildSEO({
  title: "Learn, Train & Get Certified Online",
  description:
    "SkillYards is a skill-based learning platform offering online courses, live training, and professional certifications to help you build job-ready skills.",
  path: "/",
  keywords: [
    "SkillYards",
    "online courses India",
    "skill development platform",
    "professional certifications",
    "live online training",
    "job-ready skills",
    "IT training India",
    "career growth",
    "e-learning platform",
  ],
  ogImage: "/images/opengraph/home-og.jpg",
});

export default function Home() {
  return (
    <>
      <JsonLd
        data={combinedSchema}
        id="homepage-schema"
      />

      <div className="min-h-screen w-full bg-background text-foreground transition-colors duration-500">
        <HeroCarousel />
        <AboutSection />
        <ProblemSection />
        <ProgramsShowcase />
        <FeaturesSection />
        <SkillTestSection />
        <HearFromStudents />
        <FeaturedRoles />
        <ServicesSection />
        <BlogSection />
        <LeadersSection />
        <PartnersSlider />
        <CTASection />
        <FAQSection category="homepage" limit={4} />
      </div>
    </>
  );
}