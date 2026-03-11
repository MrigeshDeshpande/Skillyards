import ComingSoon from "@/components/ComingSoon";
import {withPageSEO} from "@/lib/seo";

export const metadata = withPageSEO({
    title: 'SkillYards Success Stories – Real Student Journeys & Career Growth',
    description:
        'Discover real success stories from SkillYards students who transformed their careers through hands-on training, real projects, and industry-relevant skills.',
    canonical: 'https://www.skillyards.in/success-stories',
    keywords: [
        'SkillYards success stories',
        'SkillYards student success',
        'Career transformation stories',
        'IT training success stories',
        'Skill-based learning outcomes',
        'Student career growth stories',
    ],
    ogImage: '/images/opengraph/success-stories-og.jpg',
    twitterImage: '/images/opengraph/success-stories-twitter.jpg',
});


export default function SuccessStoriesPage() {
    return (
        <ComingSoon
            title="Success Stories — Coming Soon"
            description="We’re collecting inspiring journeys of SkillYards students who turned learning into real career success. Stay tuned!"
        />
    );
}
