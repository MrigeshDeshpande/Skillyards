import { sanityClient } from "@/lib/sanity/client";
import { POSTS_QUERY } from "@/lib/sanity/queries";
import BlogCard from "@/components/blog/BlogCard";


export async function BlogSection() {
    const posts = await sanityClient.fetch(POSTS_QUERY);

    const recentPosts = posts ? posts.slice(0, 3) : [];

    return (
        <section className="py-16 bg-background">
            <div className="max-w-[1200px] mx-auto px-12 space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground">
                        Latest Blogs & Tips
                    </h2>
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