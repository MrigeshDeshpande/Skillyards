import { Linkedin, Twitter, Github, Facebook, Instagram, Youtube, Globe } from "lucide-react";
import {withPageSEO} from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import SuryanshHero from "@/components/suryanshupadhyay/SuryanshHero";

// Social icon mapping
const iconMap = {
    linkedin: Linkedin,
    twitter: Twitter,
    github: Github,
    facebook: Facebook,
    instagram: Instagram,
    youtube: Youtube,
    threads: Globe, // replace with real Threads icon if available
};

const suryansh = {
    name: "Suryansh Upadhyay",
    role: "Chief Executive Officer",
    avatar: "/images/team/suryansh-upadhyay.webp",
    bio: "Suryansh Upadhyay is the visionary chief executive officer at SkillYards, driving innovation in IT training and software development programs across India.",
};

export const metadata = withPageSEO({
    title: 'Suryansh Upadhyay – Chief Executive Officer',
    description:
        'Learn about Suryansh Upadhyay, CEO at SkillYards, and his vision to build industry-ready IT professionals through practical, outcome-driven training.',
    canonical: 'https://www.skillyards.in/team/suryanshupadhyay',
    keywords: [
        'Suryansh Upadhyay',
        'SkillYards CEO',
        'IT education India',
        'SkillYards leadership',
    ],
    ogImage: '/images/opengraph/suryansh-upadhyay-og.jpg',
    twitterImage: '/images/opengraph/suryansh-upadhyay-twitter.jpg',
});


export default function SuryanshPage() {
    const suryanshSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: suryansh.name,
        jobTitle: suryansh.role,
        image: suryansh.avatar,
        url: suryansh.link,
        sameAs: suryansh.socials?.map((s) => s.url) || [],
        description: suryansh.bio,
    };

    return (
        <>
            <SuryanshHero />
            <JsonLd schema={suryanshSchema} id="suryansh-upadhyay-schema" />
        </>
    );
}

