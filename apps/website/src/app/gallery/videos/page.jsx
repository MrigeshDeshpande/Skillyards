import { buildSEO } from "@/lib/seo/buildSEO";
import GalleryVideosContent from "./GalleryVideosContent";
import JsonLd from "@/components/JsonLd";
import { getVideoGallerySchema } from "@/lib/seo/schema/webPageSchema";
import { getBreadcrumbSchema } from "@/lib/seo/schema/breadcrumbSchema";
"use client";
import Image from "next/image";

const galleryVideoKeywords = ["SkillYards video gallery", "IT training videos", "student success videos", "learning sessions", "workshop videos"];

export const metadata = buildSEO({
    title: "SkillYards Video Gallery | Learning in Action",
    description: "Watch sessions, workshops, student stories, and real learning moments from SkillYards Agra.",
    path: "/gallery/videos",
    keywords: galleryVideoKeywords,
    ogImage: "/images/opengraph/gallery-og.jpg",
});

export default function GalleryVideosPage() {
    const gallerySchema = getVideoGallerySchema({
        url: "/gallery/videos",
        name: "SkillYards Video Gallery | Learning in Action",
        description: "Watch sessions, workshops, student stories, and real learning moments from SkillYards Agra.",
        keywords: galleryVideoKeywords
    });

    const breadcrumbSchema = getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Gallery", url: "/gallery" },
        { name: "Videos", url: "/gallery/videos" },
    ]);

    const combinedSchema = [gallerySchema, breadcrumbSchema].filter(Boolean);

    return (
        <>
<<<<<<< HEAD
            <JsonLd data={combinedSchema} id="gallery-videos-schema" />
            <GalleryVideosContent />
=======
            <PageHero
                title="Video Gallery"
                description="Watch sessions, workshops, student stories, and real learning moments from SkillYards."
            />

            {/* ── Feature Section ──────────────────────────────────────────── */}
            <section
                ref={playerRef}
                className="relative overflow-hidden bg-background"
            >
                {/* Decorative top border */}
                <div className="absolute top-0 left-0 right-0 h-px bg-border" />

                {/* Soft primary glow behind laptop */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(ellipse 70% 60% at 50% 50%, color-mix(in srgb, var(--primary) 8%, transparent) 0%, transparent 70%)",
                    }}
                />

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-12">
                    {/* Label */}
                    <div className="flex items-center justify-center mb-6">
                        <div className="inline-flex items-center gap-2 border border-border bg-card rounded-full px-4 py-1.5 shadow-sm">
                            <MonitorPlay size={13} className="text-primary" />
                            <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                                Featured Video
                            </span>
                        </div>
                    </div>

                    {/* Laptop */}
                    <LaptopScreen videoId={featuredId} />
                </div>

                {/* Decorative bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
            </section>

            {/* ── All Videos Grid ───────────────────────────────────────────── */}
            <div className="bg-background">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
                    {/* Section header */}
                    <div className="flex items-center gap-3 mb-8">
                        <h3 className="text-xl font-bold text-foreground">All Videos</h3>
                        <span className="text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full">
                            {videos.length}
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                        {videos.map((video) => (
                            <button
                                key={video.id}
                                onClick={() => {
                                    setFeaturedId(video.id);
                                    playerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                                }}
                                className="group relative rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-left"
                            >
                                {/* Thumbnail */}
                                <div className="relative aspect-video w-full overflow-hidden">
                                    <Image
                                        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                                        alt={video.title}
                                        onError={(e) => {
                                            if (!e.target.dataset.fallback) {
                                                e.target.dataset.fallback = "1";
                                                e.target.src = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
                                            }
                                        }}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-200" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/90 text-primary shadow-lg group-hover:scale-110 transition-transform duration-200">
                                            <Play size={22} className="ml-1" fill="currentColor" />
                                        </div>
                                    </div>
                                </div>

                                {/* Title row */}
                                <div className="px-4 py-3 flex items-center justify-between">
                                    <p className="text-sm font-semibold text-foreground">{video.title}</p>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
                                        {video.category}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
>>>>>>> deaa6e7 (refactor: update image components, refine team section logic, adjust educator card styling, and remove unused FAQ schema code)
        </>
    );
}
