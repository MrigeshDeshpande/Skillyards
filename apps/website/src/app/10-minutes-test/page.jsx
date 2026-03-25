import { buildSEO } from "@/lib/seo/buildSEO";
import TestHero from "@/components/testpage/TestHero";
import TestTopics from "@/components/testpage/TestTopics";
import HowItWorks from "@/components/testpage/HowItWorks";
import CertificateSection from "@/components/testpage/CertificateSection";
import TestRegistrationForm from "@/components/testpage/TestRegistrationForm";
import TestFAQ from "@/components/testpage/TestFAQ";

export const metadata = buildSEO({
    title: "Free 10-Minute Skill Test | HTML, CSS, JS & SEO Certificate — SkillYards",
    description:
        "Take SkillYards' free 10-minute skill assessment in HTML, CSS, JavaScript, and SEO. Get an instant score, program recommendation, and a free certificate emailed to you.",
    path: "/10-minutes-test",
    keywords: [
        "free skill test",
        "HTML CSS JavaScript test",
        "SEO skill assessment",
        "free certificate online test",
        "web development quiz Agra",
        "SkillYards free test",
        "skill assessment with certificate",
    ],
});

export default function TenMinuteTestPage() {
    return (
        <div className="w-full overflow-x-hidden">
            <TestHero />
            <TestTopics />
            <HowItWorks />
            <CertificateSection />
            <TestRegistrationForm />
            <TestFAQ />
        </div>
    );
}
