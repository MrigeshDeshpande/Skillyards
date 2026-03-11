import ComingSoon from "@/components/ComingSoon";
import {withPageSEO} from "@/lib/seo";

export const metadata = withPageSEO({
    title: 'SkillYards Video Gallery – Sessions, Events & Student Stories',
    description:
        'Watch videos from SkillYards including training sessions, workshops, events, student success stories, and real learning experiences.',
    canonical: 'https://www.skillyards.in/gallery/videos',
    keywords: [
        'SkillYards video gallery',
        'SkillYards videos',
        'IT training videos',
        'SkillYards workshops videos',
        'Student learning videos',
        'SkillYards events videos',
    ],
    ogImage: '/images/opengraph/gallery-og.jpg',
    twitterImage: '/images/opengraph/gallery-twitter.jpg',
});


export default function GalleryVideosPage() {
    return (
        <ComingSoon
            title="Video Gallery — Coming Soon"
            description="We’re preparing a collection of videos showcasing SkillYards sessions, events, student stories, and learning moments. Stay tuned!"
        />
    );
}
