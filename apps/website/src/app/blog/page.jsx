import ComingSoon from "@/components/ComingSoon";
import { withPageSEO } from "@/lib/seo";
import { sanityClient } from "@/lib/sanity/client";
import { POSTS_QUERY } from "@/lib/sanity/queries";

export const metadata = withPageSEO({
    title: 'SkillYards Blog – Insights, Tutorials & Career Guidance',
    description:
        'Explore the SkillYards Blog for expert insights, practical tutorials, learning resources, and career guidance in IT and emerging technologies.',
    canonical: 'https://www.skillyards.in/blog',
    keywords: [
        'SkillYards blog',
        'IT learning blog',
        'Programming tutorials',
        'Career guidance blog',
        'Skill development articles',
        'Technology education insights',
    ],
    ogImage: '/images/opengraph/blog-og.jpg',
    twitterImage: '/images/opengraph/blog-twitter.jpg',
});


export default async function BlogPage() {

    const posts = await sanityClient.fetch(POSTS_QUERY);

    return (
        <div className="container mx-auto py-16">
            <h1 className="text-3xl font-bold mb-10">SkillYards Blog</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <div key={post._id} className="border rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-2">
                            {post.title}
                        </h2>

                        <p className="text-sm text-gray-600 mb-4">
                            {post.excerpt}
                        </p>

                        <a
                            href={`/blog/${post.slug}`}
                            className="text-blue-600 font-medium"
                        >
                            Read More →
                        </a>
                    </div>
                ))}
            </div>

        </div>
    );
}
