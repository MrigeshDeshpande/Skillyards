import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { sanityClient } from "@/lib/sanity/client";
import { POSTS_QUERY } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

const BlogCard = ({ post }) => {
    // Determine the image URL. Use a placeholder if not found.
    const imageUrl = post.coverImage ? urlFor(post.coverImage).url() : "/images/placeholder.jpg";
    
    // Format date string from Sanity's publishedAt or use a default
    const formattedDate = post.publishedAt 
        ? new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", year: "numeric", day: "numeric" })
        : "Recent";

    return (
        <div className="group relative w-full h-[450px] sm:h-[480px] rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 cursor-pointer bg-muted">

            {/* ── Background Image ── */}
            <Image
                src={imageUrl}
                alt={post.title || "Blog Post"}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.35,0.13,0.0,0.99)] group-hover:scale-105"
            />

            {/* ── Thumbnail strip: starts hidden at bottom edge (behind content panel), slides up on hover ── */}
            <div
                className={[
                    "absolute bottom-0 left-0 z-10",
                    "w-[100px] h-[130px]",
                    "bg-white dark:bg-zinc-900",
                    "rounded-tr-2xl",
                    "flex items-center justify-center",
                    "pointer-events-none select-none",
                    "translate-y-0",
                    "group-hover:-translate-y-[140px]",
                    "transition-transform duration-500 ease-[cubic-bezier(0.35,0.13,0.0,0.99)]",
                    "hidden sm:flex",
                ].join(" ")}
            >
                <div className="relative w-[90px] h-[120px] rounded-lg overflow-hidden shadow ring-1 ring-white/10">
                    <Image src={imageUrl} alt="Thumbnail" fill className="object-cover" />
                </div>
            </div>

            {/* ── Content panel ── */}
            <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 px-5 py-4 z-20 flex flex-col gap-2.5">

                {/* Inverted corner top-right: always visible */}
                <svg className="hidden sm:block absolute top-[-11px] right-0 w-3 h-3 text-white dark:text-zinc-900 -rotate-90 pointer-events-none" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M 0 12 L 12 12 C 5.373 12 0 6.627 0 0 Z" />
                </svg>

                {/* Inverted corner top-left: appears on hover to seamlessly connect thumbnail block */}
                <svg className="hidden sm:block absolute top-[-11px] left-0 w-3 h-3 text-white dark:text-zinc-900 -scale-x-100 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M 0 12 L 12 12 C 5.373 12 0 6.627 0 0 Z" />
                </svg>

                {/* Author defaults to SkillYards Team */}
                <span className="font-sans text-xs font-semibold text-muted-foreground tracking-widest uppercase">
                    SkillYards Team
                </span>

                {/* Title */}
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground leading-snug line-clamp-2">
                    {post.title}
                </h3>

                {/* Category + Date / Arrow */}
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

            {/* Full-card accessible link */}
            <Link href={`/blog/${post.slug || post.slug?.current}`} className="absolute inset-0 z-30">
                <span className="sr-only">Read {post.title}</span>
            </Link>
        </div>
    );
};

export async function BlogSection() {
    // Fetch posts dynamically from Sanity
    const posts = await sanityClient.fetch(POSTS_QUERY);
    
    // Only safely grab up to 3 posts for the homepage section
    const recentPosts = posts ? posts.slice(0, 3) : [];

    return (
        <section className="py-16 bg-background">
            <div className="max-w-[1200px] mx-auto px-12 space-y-12">
                <div className="text-center space-y-4">
                    {/* Section heading */}
                    <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground">
                        Latest Blogs & Tips
                    </h2>
                    {/* Subheading */}
                    <p className="font-sans text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                        Explore our latest insights, tips, and guides to stay ahead in your IT career.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recentPosts.map((post) => (
                        <BlogCard key={post._id} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
}