import { buildSEO } from "@/lib/seo/buildSEO";
import JsonLd from "@/components/JsonLd";
import RahulHero from "@/components/rahulsingh/RahulHero";

const rahul = {
    name: "Rahul Singh",
    role: "Chief Operating Officer",
    avatar: "/images/team/rahul-singh.webp",
    bio: "Rahul Singh is the Chief Operating Officer at SkillYards, driving operational excellence, scalability, and impactful learning experiences.",
};

export const metadata = buildSEO({
    title: "Rahul Singh – Chief Operating Officer",
    description:
        "Learn about Rahul Singh, COO at SkillYards, and his role in driving operational excellence, scalability, and impactful learning experiences.",
    path: "/team/rahulsingh",
    keywords: [
        "Rahul Singh",
        "SkillYards COO",
        "operations leadership",
        "SkillYards management",
    ],
    ogImage: "/images/opengraph/rahul-singh-og.jpg",
});

export default function RahulPage() {
    const rahulSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: rahul.name,
        jobTitle: rahul.role,
        image: rahul.avatar,
        url: "https://www.skillyards.in/team/rahulsingh",
        sameAs: [],
        description: rahul.bio,
    };

    return (
        <>
            <RahulHero />
            <JsonLd schema={rahulSchema} id="rahul-singh-schema" />
        </>
    );
}