import { ORGANIZATION_ID } from "./global";

export const getBlogPostingSchema = (post) => {
  if (!post) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.skillyards.in/blog/${post.slug?.current || post.slug}`
    },
    headline: post.title,
    ...(post.mainImage && { image: `https://www.skillyards.in${post.mainImage}` }),
    datePublished: post.publishedAt || new Date().toISOString(),
    dateModified: post._updatedAt || post.publishedAt || new Date().toISOString(),
    author: {
      "@type": "Person",
      name: post.author?.name || "SkillYards Team"
    },
    publisher: {
      "@id": ORGANIZATION_ID
    },
    ...(post.excerpt && { description: post.excerpt })
  };
};

export const getBlogSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://www.skillyards.in/blog#blog",
  name: "SkillYards Blog",
  description: "Read the latest news, tutorials, and insights regarding technology and careers from SkillYards.",
  publisher: {
      "@id": ORGANIZATION_ID
  }
});
