import { sanityClient } from "@/lib/sanity/client";
import { urlFor } from "@/lib/sanity/image";
import { PortableText } from "@portabletext/react";
import { calculateReadingTime } from "@/lib/sanity/readingTime";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import { extractHeadings } from "@/lib/sanity/slugifyHeading";
import { portableTextComponents } from "@/lib/sanity/portableTextComponents";
import Image from "next/image";

async function getPost(slug) {
    const query = `*[_type == "post" && slug.current == $slug][0]{
        title,
        excerpt,
        publishedAt,
        coverImage,
        content,
        author
    }`;

    return sanityClient.fetch(query, { slug });
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        return (
            <div className="min-h-screen bg-white dark:bg-[#0a0a0a] flex items-center justify-center transition-colors duration-300">
                <p className="text-gray-500 dark:text-gray-400 text-lg">Post not found</p>
            </div>
        );
    }

    const readingTime = calculateReadingTime(post.content);

    const headings = extractHeadings(post.content);

    return (
        <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white transition-colors duration-300">

            <div className="relative w-full bg-gray-50 dark:bg-[#0f0f0f] border-b border-gray-200 dark:border-white/5 pt-28 pb-10 px-4 transition-colors duration-300">
                <div className="max-w-6xl mx-auto">

                    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-400/10 border border-blue-200 dark:border-blue-400/20 rounded-full px-3 py-1 mb-5">
                        Blog Article
                    </span>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white max-w-4xl mb-6">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1.5">
                            <span>✍️</span>
                            <span>By <strong className="text-gray-900 dark:text-white font-semibold">{post.author || "Skillyards Team"}</strong></span>
                        </span>
                        <span className="text-gray-300 dark:text-gray-700">•</span>
                        <span className="flex items-center gap-1.5">
                            <span>
                                {post.publishedAt &&
                                    new Date(post.publishedAt).toLocaleDateString("en-IN", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                            </span>
                        </span>
                        <span className="text-gray-300 dark:text-gray-700">•</span>
                        <span className="flex items-center gap-1.5">
                            <span>⏱</span>
                            <span>{readingTime} min read</span>
                        </span>
                    </div>

                    <div className="mt-6">
                        <Breadcrumbs
                            items={[
                                { label: "Home", href: "/" },
                                { label: "Blog", href: "/blog" },
                                { label: post.title },
                            ]}
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-12">

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 items-start">

                    <div>

                        {post.coverImage && (
                            <div className="mb-10 rounded-2xl overflow-hidden shadow-xl shadow-black/10 dark:shadow-black/60">
                                <Image
                                    src={urlFor(post.coverImage).width(1400).url()}
                                    alt={post.title}
                                    width={1400}
                                    height={600}
                                    className="w-full aspect-[16/7] object-cover rounded-xl mb-12"
                                    priority
                                />
                            </div>
                        )}


                        <article
                            className="
                                prose prose-gray dark:prose-invert max-w-none
                                prose-headings:font-bold
                                prose-headings:tracking-tight
                                prose-headings:text-gray-900
                                dark:prose-headings:text-white
                                prose-h2:text-2xl
                                prose-h2:mt-12
                                prose-h2:mb-4
                                prose-h2:pb-3
                                prose-h2:border-b
                                prose-h2:border-gray-200
                                dark:prose-h2:border-white/10
                                prose-h3:text-xl
                                prose-h3:mt-8
                                prose-h3:mb-3
                                prose-h3:text-gray-800
                                dark:prose-h3:text-gray-100
                                prose-p:text-gray-600
                                dark:prose-p:text-gray-300
                                prose-p:leading-[1.85]
                                prose-p:my-5
                                prose-li:text-gray-600
                                dark:prose-li:text-gray-300
                                prose-li:leading-relaxed
                                prose-ul:my-5
                                prose-ul:space-y-1
                                prose-li:marker:text-blue-500
                                dark:prose-li:marker:text-blue-400
                                prose-strong:text-gray-900
                                dark:prose-strong:text-white
                                prose-strong:font-semibold
                                prose-a:text-blue-500
                                dark:prose-a:text-blue-400
                                prose-a:no-underline
                                hover:prose-a:underline
                                prose-code:text-blue-600
                                dark:prose-code:text-blue-300
                                prose-code:bg-blue-50
                                dark:prose-code:bg-white/5
                                prose-code:px-1.5
                                prose-code:py-0.5
                                prose-code:rounded
                                prose-blockquote:border-l-blue-500
                                dark:prose-blockquote:border-l-blue-400
                                prose-blockquote:text-gray-500
                                dark:prose-blockquote:text-gray-400
                            "
                        >
                            <PortableText
                                value={post.content || []}
                                components={portableTextComponents}
                            />
                        </article>

                        <div className="mt-14 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/40 dark:from-blue-500/10 dark:via-blue-400/5 dark:to-transparent border border-blue-200 dark:border-blue-400/20 p-8 transition-colors duration-300">
                            <p className="text-xl font-bold text-gray-900 dark:text-white mb-1">Get Skill Tips Weekly</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">Join thousands learning AI &amp; career skills.</p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="
                                        flex-1 rounded-xl px-4 py-2.5 text-sm
                                        bg-white dark:bg-white/5
                                        border border-gray-200 dark:border-white/10
                                        text-gray-900 dark:text-white
                                        placeholder-gray-400 dark:placeholder-gray-500
                                        focus:outline-none focus:border-blue-400
                                        transition-colors duration-200
                                    "
                                />
                                <button className="bg-blue-500 hover:bg-blue-400 transition-colors text-white text-sm font-semibold px-6 py-2.5 rounded-xl whitespace-nowrap">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                    </div>


                    <aside className="hidden lg:flex flex-col gap-5 sticky top-24 self-start max-h-[calc(100vh-7rem)] overflow-y-auto scrollbar-hide">

                        <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] p-5 transition-colors duration-300">

                            <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3 font-semibold">
                                Author
                            </p>

                            <div className="flex items-center gap-3 mb-3">

                                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-500/20 border border-blue-300 dark:border-blue-400/30 flex items-center justify-center text-blue-500 dark:text-blue-400 font-bold text-sm flex-shrink-0">
                                    {post.author
                                        ? post.author
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")
                                            .slice(0, 2)
                                            .toUpperCase()
                                        : "ST"}
                                </div>

                                {/* Name + Role */}
                                <div>
                                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                                        {post.author || "Skillyards Team"}
                                    </p>
                                    <p className="text-xs text-gray-400 dark:text-gray-500">
                                        Content Team
                                    </p>
                                </div>

                            </div>

                            {/* Description */}
                            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                                Insights from the Skillyards team on technology, education and career growth.
                            </p>

                        </div>


                        {headings.length > 0 && (
                            <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] p-5 transition-colors duration-300">
                                <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3 font-semibold">
                                    Table of Contents
                                </p>
                                <TableOfContents headings={headings} />
                            </div>
                        )}

                        <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] p-5 transition-colors duration-300">
                            <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3 font-semibold">🔥 Trending Articles</p>
                            <p className="text-xs text-gray-400 dark:text-gray-500 italic">Check back for more trending posts.</p>
                        </div>

                        <div className="rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-500/20 dark:via-blue-400/10 dark:to-transparent border border-blue-200 dark:border-blue-400/20 p-5 text-center transition-colors duration-300">
                            <p className="text-base font-bold text-gray-900 dark:text-white mb-1">Upgrade Your Skills 🚀</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Join SkillYards programs and get job-ready faster.</p>
                            <a
                                href="/programs"
                                className="inline-block bg-blue-500 hover:bg-blue-400 transition-colors text-white text-xs font-semibold px-5 py-2 rounded-lg"
                            >
                                Explore Programs
                            </a>
                        </div>

                    </aside>

                </div>
            </div>
        </div>
    );
}