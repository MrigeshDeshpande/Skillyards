import { withPageSEO } from "@/lib/seo";
import { LandingPage } from "@/components/landingPageBBA/LandingPage";

export const metadata = withPageSEO({
    title: 'BBA with On-Job Training | SkillYards',
    description: 'Join the premium BBA program at SkillYards with industry-led training, elite mentorship, and 100% placement assistance in Agra.',
    canonical: 'https://www.skillyards.in/programs/bba',
    keywords: ['BBA program Agra', 'on-job training BBA', 'SkillYards BBA', 'business administration degree'],
});

export default function BBAPage() {
    return (
        <div className="w-full overflow-x-hidden">
            <LandingPage />
        </div>
    );
}
