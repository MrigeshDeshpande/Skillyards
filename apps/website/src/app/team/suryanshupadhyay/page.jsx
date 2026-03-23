import { buildSEO } from "@/lib/seo/buildSEO";
import JsonLd from "@/components/JsonLd";
import SuryanshHero from "@/components/suryanshupadhyay/SuryanshHero";

const suryansh = {
  name: "Suryansh Upadhyay",
  role: "Chief Executive Officer",
  avatar: "/images/team/suryansh-upadhyay.webp",
  bio: "Suryansh Upadhyay is the visionary chief executive officer at SkillYards, driving innovation in IT training and software development programs across India.",
};

export async function generateMetadata() {
  return buildSEO({
    title: "Suryansh Upadhyay – Chief Executive Officer",
    description:
      "Learn about Suryansh Upadhyay, CEO at SkillYards, and his vision to build industry-ready IT professionals through practical, outcome-driven training.",
    path: "/team/suryanshupadhyay",

    keywords: [
      "Suryansh Upadhyay",
      "SkillYards CEO",
      "IT education India",
      "SkillYards leadership",
    ],

    ogImage: "/images/opengraph/suryansh-upadhyay-og.jpg",
  });
}

export default function SuryanshPage() {
  const suryanshSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: suryansh.name,
    jobTitle: suryansh.role,
    image: suryansh.avatar,
    description: suryansh.bio,
  };

  return (
    <>
      <SuryanshHero />
      <JsonLd schema={suryanshSchema} id="suryansh-upadhyay-schema" />
    </>
  );
}