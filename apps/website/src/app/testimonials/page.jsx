import ComingSoon from "@/components/ComingSoon";
import { buildSEO } from "@/lib/seo/buildSEO";

export const metadata = buildSEO({
    title: "SkillYards Testimonials",
    description:
        "Read authentic testimonials and reviews from SkillYards students sharing their learning experiences, skill growth, and career outcomes.",
    path: "/testimonials",
    keywords: [
        "SkillYards testimonials",
        "SkillYards reviews",
        "Student reviews SkillYards",
        "IT training testimonials",
        "Skill-based learning reviews",
        "SkillYards student feedback",
    ],
    ogImage: "/images/opengraph/testimonials-og.jpg",
});

export default function TestimonialsPage() {
    return (
        <ComingSoon
            title="Student Testimonials — Coming Soon"
            description="We’re collecting authentic stories and experiences from SkillYards learners to showcase their journeys and success. Check back soon!"
        />
    );
}