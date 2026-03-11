import ComingSoon from "@/components/ComingSoon";
import {withPageSEO} from "@/lib/seo";

export const metadata = withPageSEO({
    title: 'SkillYards Blog – Insights, Tutorials & Career Guidance',
    description:
        'Explore the SkillYards Blog for expert insights, practical tutorials, learning resources, and career guidance in IT and emerging technologies.',
    canonical: 'https://www.skillyards.in/blog',
    keywords: [
        'SkillYards blog',
        'IT learning blog',
        'Programming tutorials',
        'Career guidance blog',
        'Skill development articles',
        'Technology education insights',
    ],
    ogImage: '/images/opengraph/blog-og.jpg',
    twitterImage: '/images/opengraph/blog-twitter.jpg',
});


export default function BlogPage() {
    return (
        <ComingSoon
            title="SkillYards Blog — Coming Soon"
            description="We’re preparing insightful articles, tutorials, and real-world learning stories to help you grow your skills. Stay tuned!"
        />
    );
}
