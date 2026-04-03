import dynamic from "next/dynamic";

import JsonLd from "@/components/JsonLd";
import AboutHero from "@/components/aboutpage/AboutHero";
import AboutMissionVision from "@/components/aboutpage/AboutMissionVision";

const AboutWhyChoose = dynamic(() => import("@/components/aboutpage/AboutWhyChoose"));
const TestimonialsByInterns = dynamic(() => import("@/components/aboutpage/TestimonialsByInterns"));
const CTASection = dynamic(() => import("@/components/aboutpage/CTASection"));
const LifeAtSkillYards = dynamic(() => import("@/components/aboutpage/LifeAtSkillYards"));
const TechnologiesWeTeach = dynamic(() => import("@/components/aboutpage/TechnologiesWeTeach"));
const StudentSuccessStories = dynamic(() => import("@/components/aboutpage/StudentSuccessStories"));
const SkillYardsJourney = dynamic(() => import("@/components/aboutpage/SkillYardsJourney"));
const CtaBanner = dynamic(() => import("@/components/aboutpage/CtaBanner"));
const PartnersSlider = dynamic(() => import("@/components/common/PartnersSlider"));
const FAQSection = dynamic(() => import("@/components/common/FAQSection"));
const PlacementStats = dynamic(() => import("@/components/aboutpage/PlacementStats"));
const OtherTeam = dynamic(() => import("@/components/aboutpage/OtherTeam"));
const LeadersSection=dynamic(()=>import("@/components/common/LeadersSection"));

import { buildSEO } from "@/lib/seo/buildSEO";
import { getFAQSchema } from "@/lib/seo/schema/faqSchema";
import { getPageFaqs } from "@/lib/seo/getFaqs";

export const metadata = buildSEO({
  title: "About SkillYards",
  description:
    "Learn about SkillYards, a skill-based learning platform empowering professionals with industry-relevant training, live classes, and certifications led by experts.",
  path: "/about",
  keywords: [
    "About SkillYards",
    "SkillYards learning platform",
    "Skill development India",
    "Online training institute",
    "Professional certifications",
    "Career-focused learning",
  ],
  ogImage: "/images/opengraph/about-og.jpg",
});

export default function AboutPage() {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SkillYards",
    url: "https://www.skillyards.in",
    logo: "/images/logo.png",
    sameAs: [
      process.env.NEXT_PUBLIC_FACEBOOK_URL,
      process.env.NEXT_PUBLIC_TWITTER_URL,
      process.env.NEXT_PUBLIC_LINKEDIN_URL,
      process.env.NEXT_PUBLIC_INSTAGRAM_URL,
      process.env.NEXT_PUBLIC_YOUTUBE_URL,
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: process.env.NEXT_PUBLIC_EMAIL,
        telephone: process.env.NEXT_PUBLIC_PHONE,
        contactType: "customer support",
      },
    ],
    description:
      "SkillYards is an IT training institute and software development company offering on job training and degrees in emerging IT technologies based in Agra, India.",
  };

  const faqSchema = getFAQSchema(getPageFaqs("homepage", 4));
  return (
    <>
      <div className="bg-background text-foreground transition-colors duration-500">
        <AboutHero />
        <AboutMissionVision />
        <AboutWhyChoose />
        <LeadersSection />
        <OtherTeam />
        <PartnersSlider />
        <TestimonialsByInterns />
        <CTASection />
        <LifeAtSkillYards />
        <TechnologiesWeTeach />
        <FAQSection />
        <StudentSuccessStories />
        <PlacementStats />
        <SkillYardsJourney />
        <CtaBanner />
      </div>

      <JsonLd data={aboutPageSchema} id="about-page-schema-skillyards" />
      {faqSchema && <JsonLd data={faqSchema} id="faq-schema" />}
    </>
  );
}