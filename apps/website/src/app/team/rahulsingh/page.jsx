import {withPageSEO} from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import RahulHero from "@/components/rahulsingh/RahulHero";


const rahul = {
    name: "Rahul Singh",
    role: "Chief operating Officer",
    avatar: "/images/team/rahul-singh.webp",
    bio: "Rahul  Singh is the visionary chief operating officer at SkillYards, driving innovation in IT training and software development programs across India.",
};

export const metadata = withPageSEO({
    title: 'Rahul Singh – Chief Operating Officer',
    description:
        'Learn about Rahul Singh, COO at SkillYards, and his role in driving operational excellence, scalability, and impactful learning experiences.',
    canonical: 'https://www.skillyards.in/team/rahulsingh',
    keywords: [
        'Rahul Singh',
        'SkillYards COO',
        'operations leadership',
        'SkillYards management',
    ],
    ogImage: '/images/opengraph/rahul-singh-og.jpg',
    twitterImage: '/images/opengraph/rahul-singh-twitter.jpg',
});


export default function RahulPage() {
    const rahulSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: rahul.name,
        jobTitle: rahul.role,
        image: rahul.avatar,
        url: rahul.link,
        sameAs: rahul.socials?.map((s) => s.url) || [],
        description: rahul.bio,
    };

    return (
        <>
            <RahulHero />
            <JsonLd schema={rahulSchema} id="rahul-singh-schema" />
        </>
    );
}



