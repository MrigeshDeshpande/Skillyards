import { buildSEO } from "@/lib/seo/buildSEO";
import GalleryVideosContent from "./GalleryVideosContent";
import JsonLd from "@/components/JsonLd";
import { getVideoGallerySchema } from "@/lib/seo/schema/webPageSchema";
import { getBreadcrumbSchema } from "@/lib/seo/schema/breadcrumbSchema";

export const metadata = buildSEO({
    title: "SkillYards Video Gallery | Learning in Action",
    description: "Watch sessions, workshops, student stories, and real learning moments from SkillYards Agra.",
    path: "/gallery/videos",
    keywords: ["SkillYards video gallery", "IT training videos", "student success videos", "learning sessions", "workshop videos"],
    ogImage: "/images/opengraph/gallery-og.jpg",
});

export default function GalleryVideosPage() {
    const gallerySchema = getVideoGallerySchema({
        url: "/gallery/videos",
        name: "SkillYards Video Gallery | Learning in Action",
        description: "Watch sessions, workshops, student stories, and real learning moments from SkillYards Agra."
    });

    const breadcrumbSchema = getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Gallery", url: "/gallery" },
        { name: "Videos", url: "/gallery/videos" },
    ]);

    const combinedSchema = [gallerySchema, breadcrumbSchema].filter(Boolean);

    return (
        <>
            <JsonLd data={combinedSchema} id="gallery-videos-schema" />
            <GalleryVideosContent />
        </>
    );
}
