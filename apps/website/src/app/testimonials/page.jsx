import ComingSoon from "@/components/ComingSoon";
import {withPageSEO} from "@/lib/seo";

export const metadata = withPageSEO({
    title: 'SkillYards Testimonials – Student Reviews & Learning Experiences',
    description:
        'Read authentic testimonials and reviews from SkillYards students sharing their learning experiences, skill growth, and career outcomes.',
    canonical: 'https://www.skillyards.in/testimonials',
    keywords: [
        'SkillYards testimonials',
        'SkillYards reviews',
        'Student reviews SkillYards',
        'IT training testimonials',
        'Skill-based learning reviews',
        'SkillYards student feedback',
    ],
    ogImage: '/images/opengraph/testimonials-og.jpg',
    twitterImage: '/images/opengraph/testimonials-twitter.jpg',
});


export default function TestimonialsPage() {
    return (
        <ComingSoon
            title="Student Testimonials — Coming Soon"
            description="We’re collecting authentic stories and experiences from SkillYards learners to showcase their journeys and success. Check back soon!"
        />
    );
}
