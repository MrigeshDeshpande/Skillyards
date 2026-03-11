import ComingSoon from "@/components/ComingSoon";
import {withPageSEO} from "@/lib/seo";

export const metadata = withPageSEO({
    title: 'Legal Information – Policies & Terms | SkillYards',
    description:
        'Access SkillYards legal information including terms of service, privacy policy, refund policy, and other important guidelines governing our platform and services.',
    canonical: 'https://www.skillyards.in/legal',
    keywords: [
        'SkillYards legal',
        'SkillYards policies',
        'SkillYards terms and conditions',
        'SkillYards privacy policy',
        'Online training platform legal information',
        'SkillYards user policies',
    ],
    ogImage: '/images/opengraph/legal-og.jpg',
    twitterImage: '/images/opengraph/legal-twitter.jpg',
});


export default function LegalPage() {
    return (
        <ComingSoon
            title="Legal — Coming Soon"
            description="We’re preparing our legal policies, terms of service, and compliance information. Please check back soon!"
        />
    );
}
