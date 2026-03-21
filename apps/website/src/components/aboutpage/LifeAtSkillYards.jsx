"use client";

import Link from "next/link";
import { ImageIcon, VideoIcon } from "lucide-react";
import DomeGallery from "@/components/ui/Domegallery";

const images = Array.from({ length: 10 }).map((_, i) => ({
    src: `https://picsum.photos/600/800?random=${i + 1}`,
    alt: `Life at SkillYards ${i + 1}`,
}));

export default function LifeAtSkillYards() {
    return (
        <section className="bg-background py-20 transition-colors">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
                            Life @ SkillYards
                        </h2>
                        <p className="mt-2 max-w-2xl text-muted-foreground">
                            A glimpse into our culture, classrooms, internships, hackathons, and everyday moments
                            that shape future tech professionals.
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex gap-3">
                        <Link
                            href="/gallery/images"
                            className="inline-flex items-center gap-2 rounded-xl border border-primary dark:border-foreground
                          px-4 py-2 text-sm font-medium transition text-accent-foreground hover:bg-accent"
                        >
                            <ImageIcon className="h-4 w-4" />
                            Image Gallery
                        </Link>

                        <Link
                            href="/gallery/videos"
                            className="inline-flex items-center gap-2 rounded-xl bg-background px-4 py-2
                         text-sm font-medium text-primary hover:text-foreground transition"
                        >
                            <VideoIcon className="h-4 w-4" />
                            Video Gallery
                        </Link>
                    </div>
                </div>
            </div>

            {/* Dome Gallery */}
            <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
                <DomeGallery
                    images={images}
                    fit={0.85}
                    minRadius={650}
                    maxVerticalRotationDeg={8}
                    segments={24}
                    dragDampening={2}
                    grayscale={false}
                    overlayBlurColor="transparent"
                />
                {/* Vignette overlay — dark mode only */}
                <div
                    className="opacity-0 dark:opacity-100"
                    style={{
                        position: "absolute",
                        inset: 0,
                        pointerEvents: "none",
                        background:
                            "radial-gradient(ellipse at center, transparent 40%, color-mix(in srgb, var(--background) 60%, transparent) 70%, var(--background) 100%)",
                    }}
                />
            </div>
        </section>
    );
}
