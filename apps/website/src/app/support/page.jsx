import { buildSEO } from "@/lib/seo/buildSEO";
import SupportHero from "@/components/supportpage/SupportHero";
import SupportCategories from "@/components/supportpage/SupportCategories";
import SupportFAQ from "@/components/supportpage/SupportFAQ";
import SupportChannels from "@/components/supportpage/SupportChannels";
import JsonLd from "@/components/JsonLd";
import { getFAQSchema } from "@/lib/seo/schema/faqSchema";
import { faqCategories } from "@/data/faqs";

export const metadata = buildSEO({
    title: "Support Center | SkillYards Agra",
    description:
        "Get help with admissions, fees, placement, technical issues, and more. SkillYards support is available via WhatsApp, phone, and email.",
    path: "/support",
    keywords: [
        "SkillYards support",
        "SkillYards help center",
        "student support SkillYards",
        "IT training support Agra",
        "course enrollment assistance",
        "SkillYards contact support",
    ],
    ogImage: "/images/opengraph/support-og.jpg",
});

export default function SupportPage() {
    const supportFaqs = [
        ...faqCategories.general.faqs.slice(0, 3),
        ...faqCategories.general.faqs.slice(5, 8),
        ...faqCategories.general.faqs.slice(4, 6),
        ...faqCategories.support.faqs.slice(0, 2),
    ];
    const faqSchema = getFAQSchema(supportFaqs);

    return (
        <div className="w-full overflow-x-hidden">
            <SupportHero />
            <SupportCategories />
            <SupportFAQ />
            <SupportChannels />
            {faqSchema && <JsonLd data={faqSchema} id="faq-schema" />}
        </div>
    );
}
