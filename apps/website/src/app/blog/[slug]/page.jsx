import { sanityClient } from "@/lib/sanity/client";
import { urlFor } from "@/lib/sanity/image";
import { PortableText } from "@portabletext/react";
import { calculateReadingTime } from "@/lib/sanity/readingTime";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import { extractHeadings } from "@/lib/sanity/slugifyHeading";
import { portableTextComponents } from "@/lib/sanity/portableTextComponents";
import Image from "next/image";
import DisqusWrapper from "@/components/blog/DisqusComments";
import Link from "next/link";
import Comments from "@/components/blog/Comments";

const CalendarIcon = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const ClockIcon = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

async function getPost(slug) {
    const query = `*[_type == "post" && slug.current == $slug][0]{
        _id, title, slug, excerpt, publishedAt, coverImage, content, author
    }`;
    return sanityClient.fetch(query, { slug });
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">404</h1>
                    <p className="text-gray-500">Post not found</p>
                    <Link href="/blog" className="mt-4 text-blue-500 hover:underline">Return to blog</Link>
                </div>
            </div>
        );
    }

    const readingTime = calculateReadingTime(post.content);
    const headings = extractHeadings(post.content);

    return (
        <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 transition-colors duration-300">

            {/* PROGRESS BAR (UX: Visual feedback on scroll) */}
            <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-100 dark:bg-white/10">
                <div className="h-full bg-blue-500 transition-all duration-150" style={{ width: '0%' }} id="scroll-progress"></div>
            </div>

            {/* HEADER SECTION */}
            <header className="pt-32 pb-12 border-b border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-[#0f0f0f]/50 backdrop-blur-sm">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="mb-6">
                        <Breadcrumbs
                            items={[
                                { label: "Home", href: "/" },
                                { label: "Blog", href: "/blog" },
                                { label: post.title.slice(0, 30) + "..." },
                            ]}
                        />
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-8">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">
                                {post.author?.split(" ").map(n => n[0]).join("").toUpperCase() || "SY"}
                            </div>
                            <span>{post.author || "Skillyards Team"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CalendarIcon />
                            <span>{new Date(post.publishedAt).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ClockIcon />
                            <span>{readingTime} min read</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* CONTENT GRID */}
            <main className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16">

                    {/* ARTICLE COLUMN */}
                    <div className="max-w-3xl mx-auto lg:mx-0 w-full">
                        {post.coverImage && (
                            <div className="mb-12 group overflow-hidden rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
                                <Image
                                    src={urlFor(post.coverImage).width(1200).url()}
                                    alt={post.title}
                                    width={1200}
                                    height={675}
                                    className="w-full object-cover"
                                    priority
                                />
                            </div>
                        )}

                        <article className="prose prose-lg lg:prose-xl dark:prose-invert prose-blue max-w-none 
                            prose-headings:font-bold prose-a:text-blue-500 prose-img:rounded-2xl prose-pre:bg-gray-900 prose-pre:border prose-pre:border-white/10">
                            <PortableText
                                value={post.content || []}
                                components={portableTextComponents}
                            />
                        </article>

                        {/* ENGAGEMENT ZONE */}
                        <section className="mt-20 p-8 md:p-12 rounded-[2.5rem] bg-blue-600 dark:bg-blue-700 text-white relative overflow-hidden shadow-xl shadow-blue-500/20">
                            <div className="relative z-10 max-w-md">
                                <h3 className="text-2xl font-bold mb-2">Level up your skills.</h3>
                                <p className="text-blue-100 mb-8">Join 10k+ readers getting weekly insights on AI and career growth.</p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        className="flex-1 rounded-2xl px-5 py-4 text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-400/50 transition-all"
                                    />
                                    <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-800 transition-colors">
                                        Join Now
                                    </button>
                                </div>
                            </div>
                            {/* Decorative Circle */}
                            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
                        </section>

                        <div className="mt-20 pt-10 border-t border-gray-100 dark:border-white/5">
                            <DisqusWrapper slug={slug} title={post.title} id={post._id} />
                        </div>

                        <div className="mt-12 border-t pt-6">
                            <h3 className="text-lg font-semibold mb-4">
                                Discussion
                            </h3>
                            <Comments />
                        </div>
                    </div>

                    {/* STICKY SIDEBAR (UX: Informative but doesn't distract) */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-32 space-y-10">

                            <div className="p-6 rounded-3xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5">
                                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">The Author</h4>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold">
                                        {post.author?.[0] || "S"}
                                    </div>
                                    <div>
                                        <p className="font-bold">{post.author || "Skillyards Team"}</p>
                                        <p className="text-xs text-blue-500 font-medium">Expert Contributor</p>
                                    </div>
                                </div>
                                <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                                    Dedicated to bridging the gap between education and modern industry demands.
                                </p>
                            </div>

                            {headings.length > 0 && (
                                <div className="px-2">
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6 flex items-center gap-2">
                                        <span className="w-4 h-[2px] bg-blue-500"></span>
                                        On this page
                                    </h4>
                                    <TableOfContents headings={headings} />
                                </div>
                            )}
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}