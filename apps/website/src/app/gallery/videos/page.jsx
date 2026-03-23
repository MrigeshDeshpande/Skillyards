import ComingSoon from "@/components/ComingSoon";
import { buildSEO } from "@/lib/seo/buildSEO";

export const metadata = buildSEO({
    title: "SkillYards Video Gallery",
    description:
        "Watch videos from SkillYards including training sessions, workshops, events, student success stories, and real learning experiences.",
    path: "/gallery/videos",
    keywords: [
        "SkillYards video gallery",
        "SkillYards videos",
        "IT training videos",
        "SkillYards workshops videos",
        "Student learning videos",
        "SkillYards events videos",
    ],
    ogImage: "/images/opengraph/gallery-og.jpg",
});

export default function GalleryVideosPage() {
    return (
        <ComingSoon
            title="Video Gallery — Coming Soon"
            description="We’re preparing a collection of videos showcasing SkillYards sessions, events, student stories, and learning moments. Stay tuned!"
        />
    );
}