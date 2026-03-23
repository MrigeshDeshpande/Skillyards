import ComingSoon from "@/components/ComingSoon";
import { buildSEO } from "@/lib/seo/buildSEO";

export const metadata = buildSEO({
    title: "SkillYards Support",
    description:
        "Get help and support from SkillYards for programs, enrollment, training, and technical queries. We’re here to guide you at every step.",
    path: "/support",
    keywords: [
        "SkillYards support",
        "SkillYards help center",
        "Student support SkillYards",
        "IT training support",
        "Course enrollment assistance",
        "SkillYards contact support",
    ],
    ogImage: "/images/opengraph/support-og.jpg",
});

export default function SupportPage() {
    return (
        <ComingSoon
            title="Support Center — Coming Soon"
            description="We’re setting up a dedicated support center to help you with questions, issues, and guidance related to SkillYards. Stay tuned!"
        />
    );
}