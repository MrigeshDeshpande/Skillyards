import ComingSoon from "@/components/ComingSoon";
import { buildSEO } from "@/lib/seo/buildSEO";

export const metadata = buildSEO({
    title: "SkillYards Team",
    description:
        "Meet the SkillYards team of mentors, trainers, and professionals dedicated to delivering industry-relevant learning and real-world skill development.",
    path: "/team",
    keywords: [
        "SkillYards team",
        "SkillYards mentors",
        "SkillYards trainers",
        "IT training experts",
        "Skill-based learning team",
        "SkillYards leadership",
    ],
    // No ogImage → fallback to defaultOGImage
});

export default function TeamPage() {
    return (
        <ComingSoon
            title="Our Team — Coming Soon"
            description="We’re getting ready to introduce the people behind SkillYards — our mentors, leaders, and support team. Stay tuned!"
        />
    );
}