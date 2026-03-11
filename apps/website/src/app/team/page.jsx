import ComingSoon from "@/components/ComingSoon";
import {withPageSEO} from "@/lib/seo";

export const metadata = withPageSEO({
    title: 'Meet the SkillYards Team – Mentors, Trainers & Innovators',
    description:
        'Meet the SkillYards team of mentors, trainers, and professionals dedicated to delivering industry-relevant learning and real-world skill development.',
    canonical: 'https://www.skillyards.in/team',
    keywords: [
        'SkillYards team',
        'SkillYards mentors',
        'SkillYards trainers',
        'IT training experts',
        'Skill-based learning team',
        'SkillYards leadership',
    ],
    ogImage: '',
    twitterImage: '',
});


export default function TeamPage() {
    return (
        <ComingSoon
            title="Our Team — Coming Soon"
            description="We’re getting ready to introduce the people behind SkillYards — our mentors, leaders, and support team. Stay tuned!"
        />
    );
}
