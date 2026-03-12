import HeroCarousel from "@/components/homepage/HeroCarousel";
import AboutSection from "@/components/homepage/AboutSection";
import ProgramsSection from "@/components/homepage/ProgramsSection";
import FeaturesSection from "@/components/homepage/FeaturesSection";
import LeadersSection from "@/components/common/LeadersSection";
import SubscribeSection from "@/components/common/SubscribeSection";
import CTASection from "@/components/homepage/CTASection";
import FAQSection from "@/components/common/FAQSection";

import { BlogSection } from "@/components/homepage/BlogSection";
import ServicesSection from "@/components/homepage/ServicesSection";
import PartnersSlider from "@/components/common/PartnersSlider";
import ProgramsShowcase from "@/components/homepage/ProgrammeShowcase";
import HearFromStudents from "@/components/homepage/HearFromStudents";
import FeaturedRoles from "@/components/homepage/FeaturedRoles";
import { withPageSEO } from "@/lib/seo";

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
        <div className="theme-home min-h-screen w-full bg-home-bg text-home-fg transition-colors duration-500">

            <HeroCarousel />

            <AboutSection />
            <ProgramsShowcase />
            <ProgramsSection />
            <FeaturesSection />
            <HearFromStudents />
            <FeaturedRoles />
            <ServicesSection />
            <BlogSection />
            <LeadersSection />
            <PartnersSlider />
            <CTASection />
            <FAQSection />
            <SubscribeSection />

        </div>
    );
}


