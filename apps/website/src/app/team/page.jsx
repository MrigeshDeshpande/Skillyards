import { buildSEO } from "@/lib/seo/buildSEO";
import TeamSection from "@/components/teampage/TeamSection";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { getAboutPageSchema } from "@/lib/seo/schema/webPageSchema";

export const metadata = buildSEO({
    title: "Meet the Team | SkillYards Agra",
    description:
        "Meet the SkillYards team — founders, mentors, instructors, and support staff dedicated to delivering industry-relevant learning and real-world skill development.",
    path: "/team",
    keywords: [
        "SkillYards team",
        "SkillYards mentors",
        "SkillYards trainers",
        "IT training experts Agra",
        "SkillYards leadership",
    ],
});


const leadership = [
    {
        name: "Rajesh Sharma",
        role: "Founder & CEO",
        bio: "Visionary behind SkillYards, with 15+ years in IT education and enterprise software development.",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        badge: "Founder",
        socials: {
            linkedin: "https://linkedin.com",
        },
    },
];

const instructors = [
    {
        name: "Ankit Gupta",
        role: "Digital Marketing Instructor",
        bio: "Google & Meta certified marketer. Runs live ad campaigns for real clients alongside teaching.",
        image: "https://randomuser.me/api/portraits/men/58.jpg",
        socials: {
            linkedin: "https://linkedin.com",
        },
    },
];

const support = [
    {
        name: "Neha Agarwal",
        role: "Placement Coordinator",
        bio: "Connects students with hiring partners and prepares them for interviews from day one.",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        socials: {
            linkedin: "https://linkedin.com",
        },
    },
];

export default function TeamPage() {
    const aboutPageSchema = getAboutPageSchema({
        url: "/team",
        name: "Meet the Team | SkillYards Agra",
        description: "Meet the SkillYards team — founders, mentors, instructors, and support staff dedicated to delivering industry-relevant learning and real-world skill development."
    });

    return (
        <>
            <JsonLd data={aboutPageSchema} id="team-schema" />
            <PageHero
                title="Meet the Team"
                subtitle="The people behind SkillYards — builders, educators, and mentors committed to your growth."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Team" },
                ]}
            />

            <section className="max-w-7xl mx-auto px-6 py-16">
                <TeamSection
                    title="Leadership"
                    subtitle="The founders and directors shaping the vision of SkillYards."
                    members={leadership}
                />
                <TeamSection
                    title="Instructors"
                    subtitle="Domain experts who deliver our hands-on curriculum."
                    members={instructors}
                />
                <TeamSection
                    title="Support Staff"
                    subtitle="The team making sure every student's journey is smooth from enrolment to placement."
                    members={support}
                />
            </section>
        </>
    );
}
