import JsonLd from "@/components/JsonLd";
import AboutHero from "@/components/aboutpage/AboutHero";
import AboutMissionVision from "@/components/aboutpage/AboutMissionVision";
import AboutWhyChoose from "@/components/aboutpage/AboutWhyChoose";
import TestimonialsByInterns from "@/components/aboutpage/TestimonialsByInterns";
import CTASection from "@/components/aboutpage/CTASection";
import LifeAtSkillYards from "@/components/aboutpage/LifeAtSkillYards";
import TechnologiesWeTeach from "@/components/aboutpage/TechnologiesWeTeach";
import StudentSuccessStories from "@/components/aboutpage/StudentSuccessStories";
import SkillYardsJourney from "@/components/aboutpage/SkillYardsJourney";
import CtaBanner from "@/components/aboutpage/CtaBanner";
import LeadersSection from "@/components/common/LeadersSection";
import PartnersSlider from "@/components/common/PartnersSlider";
import FAQSection from "@/components/common/FAQSection";
import PlacementStats from "@/components/aboutpage/PlacementStats";
import {withPageSEO} from "@/lib/seo";
import OtherTeam from "@/components/aboutpage/OtherTeam";

export const metadata = withPageSEO({
    title: 'About SkillYards – Learn, Train & Get Certified',
    description:
        'Learn about SkillYards, a skill-based learning platform empowering professionals with industry-relevant training, live classes, and certifications led by experts.',
    canonical: 'https://www.skillyards.in/about',
    keywords: [
        'About SkillYards',
        'SkillYards learning platform',
        'Skill development India',
        'Online training institute',
        'Professional certifications',
        'Career-focused learning',
    ],
    ogImage: '/images/opengraph/about-og.jpg',
    twitterImage: '/images/opengraph/about-twitter.jpg',
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

            {/* JSON-LD Structured Data */}
            <JsonLd schema={aboutPageSchema} id="about-page-schema-skillyards" />
        </>
    );
}
