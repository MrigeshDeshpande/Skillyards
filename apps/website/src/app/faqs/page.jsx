import ComingSoon from "@/components/ComingSoon";
import { buildSEO } from "@/lib/seo/buildSEO";

export const metadata = buildSEO({
  title: "SkillYards FAQs",
  description:
    "Find answers to frequently asked questions about SkillYards programs, training model, certifications, enrollment process, and career support.",
  path: "/faqs",
  keywords: [
    "SkillYards FAQs",
    "SkillYards questions",
    "SkillYards training FAQs",
    "Skill-based learning FAQs",
    "Career training questions",
    "IT training institute FAQs",
  ],
  ogImage: "/images/opengraph/faqs-og.jpg",
});

export default function FaqsPage() {
  return (
    <ComingSoon
      title="FAQs — Coming Soon"
      description="We’re compiling clear answers to common questions about SkillYards, our programs, and learning approach. Check back soon!"
    />
  );
}