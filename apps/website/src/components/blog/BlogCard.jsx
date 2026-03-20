"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef, useEffect, useState, useMemo } from "react";
import { urlFor } from "@/lib/sanity/image";

const Highlight = ({ text, query }) => {
    const parts = useMemo(() => {
        if (!query?.trim() || !text) return null;
        const tokens = query.split(/\s+/).filter((t) => t.length > 0);
        const pattern = new RegExp(`(${tokens.join("|")})`, "i");
        return {
            parts: text.split(pattern),
            tokens: tokens.map((t) => t.toLowerCase()),
        };
    }, [text, query]);

    if (!parts) return <span>{text}</span>;

    return (
        <span>
            {parts.parts.map((part, i) =>
                parts.tokens.includes(part.toLowerCase()) ? (
                    <mark
                        key={i}
                        className="bg-yellow-200 dark:bg-yellow-500/30 text-inherit rounded-sm px-0.5"
                    >
                        {part}
                    </mark>
                ) : (
                    <span key={i}>{part}</span>
                )
            )}
        </span>
    );
};

const BlogCard = ({ post, searchQuery }) => {
    const bottomPanelRef = useRef(null);
    const avatarRef = useRef(null);
    const [panelHeight, setPanelHeight] = useState(130);

    useEffect(() => {
        if (!bottomPanelRef.current) return;
        const observer = new ResizeObserver(() => {
            setPanelHeight(bottomPanelRef.current.offsetHeight);
        });
        observer.observe(bottomPanelRef.current);
        return () => observer.disconnect();
    }, []);

    const coverImageUrl = post.coverImage
        ? urlFor(post.coverImage).url()
        : "/images/placeholder.jpg";
    const authorImageUrl = post.author?.image
        ? urlFor(post.author.image).width(200).height(200).url()
        : "/images/avatar-placeholder.png";
    const formattedDate = post.publishedAt
        ? new Date(post.publishedAt).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
            day: "numeric",
        })
        : "Recent";

    const avatarLift = panelHeight - 1.1;

    return (
        <div className="group relative w-full h-[420px] sm:h-[440px] rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 cursor-pointer bg-muted">
            <Image
                src={coverImageUrl}
                alt={post.title || "Blog Post"}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.35,0.13,0.0,0.99)] group-hover:scale-105"
            />

            {/* Author avatar */}
            <div
                ref={avatarRef}
                className="absolute bottom-0 left-0 z-10 w-[90px] h-[90px] bg-white dark:bg-zinc-900 rounded-tr-2xl items-center justify-center pointer-events-none select-none hidden sm:flex"
                style={{
                    opacity: 0,
                    transform: "translateY(0px)",
                    transition:
                        "transform 500ms cubic-bezier(0.35,0.13,0.0,0.99), opacity 500ms cubic-bezier(0.35,0.13,0.0,0.99)",
                    "--avatar-lift": `-${avatarLift}px`,
                }}
                data-avatar
            >
                <div className="relative w-[70px] h-[70px] rounded-full overflow-hidden shadow ring-2 ring-white/20">
                    <Image
                        src={authorImageUrl}
                        alt={post.author?.name || "Author"}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            <div
                ref={bottomPanelRef}
                className="absolute bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 px-5 py-4 z-20 flex flex-col gap-2.5"
            >
                <span className="font-sans text-xs font-semibold text-muted-foreground tracking-widest uppercase">
                    <Highlight text={post.author?.name || "SkillYards Team"} query={searchQuery} />
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground leading-snug line-clamp-2">
                    <Highlight text={post.title} query={searchQuery} />
                </h3>
                {post.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                        {post.tags.map(tag => (
                            <span
                                key={tag.slug}
                                className="text-[10px] px-2 py-0.5 rounded-full border border-border text-muted-foreground bg-background/50 backdrop-blur-sm"
                            >
                                <Highlight text={tag.title} query={searchQuery} />
                            </span>
                        ))}
                    </div>
                )}
                <div className="flex items-center justify-between pt-1">
                    <span className="font-sans bg-secondary/60 text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        Education
                    </span>
                    <div className="flex items-center overflow-hidden">
                        <div className="flex items-center gap-1.5 translate-x-10 group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.35,0.13,0.0,0.99)]">
                            <span className="font-sans text-xs font-medium text-foreground whitespace-nowrap">
                                {formattedDate}
                            </span>
                            <span className="flex items-center justify-center bg-foreground text-background w-5 h-5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0">
                                <ArrowUpRight className="w-3 h-3" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-30">
                <span className="sr-only">Read {post.title}</span>
            </Link>

            <style>{`
                .group:hover [data-avatar] {
                    opacity: 1 !important;
                    transform: translateY(var(--avatar-lift)) !important;
                }
            `}</style>
        </div>
    );
};

export default BlogCard;