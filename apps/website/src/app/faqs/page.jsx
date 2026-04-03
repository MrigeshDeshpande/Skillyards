import { buildSEO } from "@/lib/seo/buildSEO";
import PageHero from "@/components/PageHero";
import FAQsAccordion from "@/components/faqspage/FAQsAccordion";
import JsonLd from "@/components/JsonLd";
import { getFAQSchema } from "@/lib/seo/schema/faqSchema";
import { faqCategories } from "@/data/faqs";

export const metadata = buildSEO({
    title: "Frequently Asked Questions | SkillYards Agra",
    description:
        "Find clear answers to questions about SkillYards programs, admissions, fees, placement, BCA, BBA, Full-Stack Development, Digital Marketing, and more.",
    path: "/faqs",
    keywords: [
        "SkillYards FAQs",
        "SkillYards questions",
        "IT training FAQs Agra",
        "full stack course questions",
        "digital marketing course FAQs",
        "BCA BBA admission questions",
        "SkillYards placement FAQ",
    ],
    ogImage: "/images/opengraph/faqs-og.jpg",
});

export default function FaqsPage() {
    const allFaqs = Object.values(faqCategories).flatMap(cat => cat.faqs);
    const faqSchema = getFAQSchema(allFaqs);

    return (
        <>
            <PageHero
                title="Frequently Asked Questions"
                subtitle="Everything you want to know about SkillYards — programs, admissions, fees, placement, and more. Organised by topic."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "FAQs" },
                ]}
            />
            <FAQsAccordion />
            {faqSchema && <JsonLd data={faqSchema} id="faq-schema" />}
        </>
    );
}
