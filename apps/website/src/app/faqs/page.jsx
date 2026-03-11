import ComingSoon from "@/components/ComingSoon";
import {withPageSEO} from "@/lib/seo";

export const metadata = withPageSEO({
    title: 'SkillYards FAQs – Programs, Training & Career Support',
    description:
        'Find answers to frequently asked questions about SkillYards programs, training model, certifications, enrollment process, and career support.',
    canonical: 'https://www.skillyards.in/faqs',
    keywords: [
        'SkillYards FAQs',
        'SkillYards questions',
        'SkillYards training FAQs',
        'Skill-based learning FAQs',
        'Career training questions',
        'IT training institute FAQs',
    ],
    ogImage: '/images/opengraph/faqs-og.jpg',
    twitterImage: '/images/opengraph/faqs-twitter.jpg',
});


export default function FaqsPage() {
    return (
        <ComingSoon
            title="FAQs — Coming Soon"
            description="We’re compiling clear answers to common questions about SkillYards, our programs, and learning approach. Check back soon!"
        />
    );
}
