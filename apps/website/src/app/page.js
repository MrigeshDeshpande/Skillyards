import HeroCarousel from "@/components/homepage/HeroCarousel";
import AboutSection from "@/components/homepage/AboutSection";
import FeaturesSection from "@/components/homepage/FeaturesSection";
import LeadersSection from "@/components/common/LeadersSection";
// import SubscribeSection from "@/components/common/SubscribeSection";
import CTASection from "@/components/homepage/CTASection";
import FAQSection from "@/components/common/FAQSection";
import { BlogSection } from "@/components/homepage/BlogSection";
import ServicesSection from "@/components/homepage/ServicesSection";
import PartnersSlider from "@/components/common/PartnersSlider";
import ProgramsShowcase from "@/components/homepage/ProgrammeShowcase";
import HearFromStudents from "@/components/homepage/HearFromStudents";
import FeaturedRoles from "@/components/homepage/FeaturedRoles";
import { buildSEO } from "@/lib/seo/buildSEO";
import Script from "next/script";


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

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Skillyards",
    url: "https://www.skillyards.in",
    logo: "https://www.skillyards.in/images/logo-square.png",
    sameAs: [
      "https://www.linkedin.com/company/skillyards",
      "https://www.instagram.com/skillyards"
    ]
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <div className="min-h-screen w-full bg-background text-foreground transition-colors duration-500">
        <HeroCarousel />


        <AboutSection />
        <ProgramsShowcase />
        <FeaturesSection />
        <HearFromStudents />
        <FeaturedRoles />
        <ServicesSection />
        <BlogSection />
        <LeadersSection />
        <PartnersSlider />
        <CTASection />
        <FAQSection />
        {/* <SubscribeSection /> */}
      </div>
    </>
  );
}

