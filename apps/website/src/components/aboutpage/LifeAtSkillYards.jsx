"use client";

import Link from "next/link";
import { ImageIcon, VideoIcon } from "lucide-react";
import Image from "next/image";

const images = Array.from({ length: 10 }).map(
    (_, i) => `https://picsum.photos/600/800?random=${i + 1}`
);

export default function LifeAtSkillYards() {
    return (
        <section className="bg-neutral-50 dark:bg-neutral-950 py-20 transition-colors">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-neutral-100">
                            Life @ SkillYards
                        </h2>
                        <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
                            A glimpse into our culture, classrooms, internships, hackathons, and everyday moments
                            that shape future tech professionals.
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex gap-3">
                        <Link
                            href="/gallery/images"
                            className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 dark:border-neutral-700
                         bg-white dark:bg-neutral-900 px-4 py-2 text-sm font-medium
                         hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
                        >
                            <ImageIcon className="h-4 w-4" />
                            Image Gallery
                        </Link>

                        <Link
                            href="/gallery/videos"
                            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2
                         text-sm font-medium text-white hover:bg-indigo-700 transition"
                        >
                            <VideoIcon className="h-4 w-4" />
                            Video Gallery
                        </Link>
                    </div>
                </div>

                {/* Masonry Grid */}
                <div
                    className="
            columns-1
            sm:columns-2
            lg:columns-3
            gap-6
            [column-fill:balance]
          "
                >
                    {images.map((src, i) => (
                        <div
                            key={i}
                            className="mb-6 break-inside-avoid overflow-hidden rounded-2xl
                         bg-white dark:bg-neutral-900 shadow
                         hover:shadow-xl transition group"
                        >
                            <div className="relative">
                                <Image
                                    src={src}
                                    alt={`Life at SkillYards ${i + 1}`}
                                    height={500}
                                    width={500}
                                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />

                                {/* Overlay */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent
                             opacity-0 group-hover:opacity-100 transition"
                                />

                                <div
                                    className="pointer-events-none absolute bottom-4 left-4 right-4
                             translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                             transition-all duration-300"
                                >
                                    <p className="text-sm font-medium text-white">
                                        Internships • Training • Campus Life
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
