import { buildSEO } from "@/lib/seo/buildSEO";
import { BCALandingPage } from "@/components/landingPageBCA/LandingPage";

export const metadata = buildSEO({
    title: "BCA with On-Job Training | SkillYards",
    description:
        "Join the premium BCA program at SkillYards with industry-led training, elite mentorship, and 100% placement assistance in Agra.",
    path: "/programs/bca",
    keywords: [
        "BCA program Agra",
        "on-job training BCA",
        "SkillYards BCA",
        "computer applications degree",
    ],
});

export default function BCAPage() {
    return (
        <div className="w-full overflow-x-hidden">
            <BCALandingPage />
        </div>
    );
}