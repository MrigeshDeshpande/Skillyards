import ComingSoon from "@/components/ComingSoon";
import {withPageSEO} from "@/lib/seo";

export const metadata = withPageSEO({
    title: 'SkillYards Programs – BCA, BBA & Job-Oriented IT Training',
    description:
        'Explore SkillYards programs including BCA and BBA with on-job training, industry-aligned curriculum, live classes, and real-world projects.',
    canonical: 'https://www.skillyards.in/programs',
    keywords: [
        'SkillYards programs',
        'BCA programs with training',
        'BBA programs with IT skills',
        'On-job training programs',
        'Skill-based degree programs',
        'IT training programs India',
    ],
    ogImage: '/images/opengraph/programs-og.jpg',
    twitterImage: '/images/opengraph/programs-twitter.jpg',
});


export default function ProgramsPage() {
    return (
        <ComingSoon
            title="Programs — Coming Soon"
            description="We’re preparing detailed information about SkillYards programs, learning paths, and outcomes. Please check back soon!"
        />
    );
}
