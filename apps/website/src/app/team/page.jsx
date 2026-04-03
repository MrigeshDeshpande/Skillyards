import { buildSEO } from "@/lib/seo/buildSEO";
import TeamSection from "@/components/teampage/TeamSection";
import PageHero from "@/components/PageHero";

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
        name: "Rahul Singh",
        role: "Founder & CEO",
        bio: "Visionary behind SkillYards, dedicated to delivering industry-relevant learning and empowering tech professionals.",
        image: "/images/team/rahul-singh.png",
        badge: "Leadership",
        socials: {
            linkedin: "https://linkedin.com",
        },
    },
    {
        name: "Suryansh Upadhyay",
        role: "Co-Founder & Director",
        bio: "Driving product strategy and ensuring we deliver value to our students and industry partners.",
        image: "/images/team/suryansh-upadhyay.png",
        badge: "Leadership",
        socials: {
            linkedin: "https://linkedin.com",
        },
    },
];

const instructors = [
    {
        name: "Suryansh Sir",
        role: "Lead Instructor",
        bio: "Expert mentor specializing in full-stack web development and core programming architectures.",
        image: "/images/team/suryanshSir.webp",
        socials: {
            linkedin: "https://linkedin.com",
        },
    },
    {
        name: "Kaushal Sir",
        role: "Senior Instructor",
        bio: "Experienced developer and instructor with an eye for UI/UX and modern frontend technologies.",
        image: "/images/team/KaushalSIr.png",
        socials: {
            linkedin: "https://linkedin.com",
        },
    },
    {
        name: "Neeraj",
        role: "Technical Mentor",
        bio: "Helps students debug, build projects, and understand complex software design patterns.",
        image: "/images/team/Neeraj.png",
        socials: {
            linkedin: "https://linkedin.com",
        },
    },
    {
        name: "Bhanu",
        role: "Software Developer Intern",
        bio: "Building internal tools and participating in continuous software delivery and mentorship.",
        image: "/images/team/Bhanu.jpg",
        socials: {
            linkedin: "https://linkedin.com",
        },
    },
];

const support = [
    {
        name: "Khushali",
        role: "Community & Support",
        bio: "Connects students with resources and ensures a smooth learning journey from enrolment.",
        image: "/images/team/khushali.jpeg",
        socials: {
            linkedin: "https://linkedin.com",
        },
    },
];
// ─────────────────────────────────────────────────────────────────────────────

export default function TeamPage() {
    return (
        <>
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
