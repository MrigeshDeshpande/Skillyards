import ComingSoon from "@/components/ComingSoon";
import {withPageSEO} from "@/lib/seo";

export const metadata = withPageSEO({
    title: 'SkillYards Image Gallery – Campus, Events & Student Moments',
    description:
        'Explore the SkillYards image gallery featuring campus life, training sessions, workshops, events, and memorable moments from our learning community.',
    canonical: 'https://www.skillyards.in/gallery/images',
    keywords: [
        'SkillYards image gallery',
        'SkillYards photos',
        'IT training institute gallery',
        'SkillYards campus images',
        'Student training photos',
        'SkillYards events gallery',
    ],
    ogImage: '/images/opengraph/gallery-og.jpg',
    twitterImage: '/images/opengraph/gallery-twitter.jpg',
});


export default function GalleryImagesPage() {
    return (
        <ComingSoon
            title="Image Gallery — Coming Soon"
            description="We’re organizing images from SkillYards classrooms, workshops, events, and student activities. Check back soon!"
        />
    );
}
