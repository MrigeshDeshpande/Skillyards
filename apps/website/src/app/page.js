import dynamic from "next/dynamic";
import HeroCarousel from "@/components/homepage/HeroCarousel";
import AboutSection from "@/components/homepage/AboutSection";
import { withPageSEO } from "@/lib/seo";

const ProgramsShowcase   = dynamic(() => import("@/components/homepage/ProgrammeShowcase"));
const FeaturesSection    = dynamic(() => import("@/components/homepage/FeaturesSection"));
const HearFromStudents   = dynamic(() => import("@/components/homepage/HearFromStudents"));
const FeaturedRoles      = dynamic(() => import("@/components/homepage/FeaturedRoles"));
const BlogSection        = dynamic(() => import("@/components/homepage/BlogSection").then(m => ({ default: m.BlogSection })));
const LeadersSection     = dynamic(() => import("@/components/common/LeadersSection"));
const PartnersSlider     = dynamic(() => import("@/components/common/PartnersSlider"));
// const CTASection         = dynamic(() => import("@/components/homepage/CTASection"));
const ServicesSection    = dynamic(() => import("@/components/homepage/ServicesSection"));
const FAQSection         = dynamic(() => import("@/components/common/FAQSection"));
const SubscribeSection   = dynamic(() => import("@/components/common/SubscribeSection"));

export const metadata = withPageSEO({
    title: 'Learn, Train & Get Certified Online',
    description:
        'SkillYards.in is a skill-based learning platform offering online courses, live training, and professional certifications. Learn from industry experts and build job-ready skills.',
    canonical: 'https://www.skillyards.in/',
    keywords: [
        'SkillYards',
        'online courses India',
        'skill development platform',
        'professional certifications',
        'live online training',
        'job-ready skills',
        'IT training India',
        'career growth',
        'e-learning platform',
    ],
    ogImage: '/images/opengraph/home-og.jpg',
    twitterImage: '/images/opengraph/home-twitter.jpg',
});

export default function Home() {
    return (
        <div className="min-h-screen w-full bg-background text-foreground transition-colors duration-500">

            <HeroCarousel />

            <AboutSection />
            <ProgramsShowcase />
            <FeaturesSection />
            <HearFromStudents />
            <FeaturedRoles />
            <BlogSection />
            <LeadersSection />
            <PartnersSlider />
            {/* <CTASection /> */}
            <ServicesSection />
            <FAQSection />
            <SubscribeSection />

        </div>
    );
}
