import ComingSoon from "@/components/ComingSoon";
import { buildSEO } from "@/lib/seo/buildSEO";

export const metadata = buildSEO({
    title: "SkillYards Image Gallery",
    description:
        "Explore the SkillYards image gallery featuring campus life, training sessions, workshops, events, and memorable moments from our learning community.",
    path: "/gallery/images",
    keywords: [
        "SkillYards image gallery",
        "SkillYards photos",
        "IT training institute gallery",
        "SkillYards campus images",
        "Student training photos",
        "SkillYards events gallery",
    ],
    ogImage: "/images/opengraph/gallery-og.jpg",
});

export default function GalleryImagesPage() {
    return (
        <ComingSoon
            title="Image Gallery — Coming Soon"
            description="We're organizing images from SkillYards classrooms, workshops, events, and student activities. Check back soon!"
        />
    );
}
