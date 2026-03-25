import { buildSEO } from "@/lib/seo/buildSEO";
import SupportHero from "@/components/supportpage/SupportHero";
import SupportCategories from "@/components/supportpage/SupportCategories";
import SupportFAQ from "@/components/supportpage/SupportFAQ";
import SupportChannels from "@/components/supportpage/SupportChannels";

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
    return (
        <div className="w-full overflow-x-hidden">
            <SupportHero />
            <SupportCategories />
            <SupportFAQ />
            <SupportChannels />
        </div>
    );
}
