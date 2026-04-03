import { buildSEO } from "@/lib/seo/buildSEO";
import TeamSection from "@/components/teampage/TeamSection";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = buildSEO({
    title: "Meet the Team | SkillYards",
    description:
        "Meet the SkillYards team — founders, engineers, and support staff dedicated to delivering industry-relevant learning and authentic real-world skill development.",
    path: "/team",
    keywords: [
        "SkillYards team",
        "SkillYards mentors",
        "SkillYards trainers",
        "engineering team",
        "SkillYards leadership",
    ],
});

// ─────────────────────────────────────────────────────────────────────────────
// DATA SOURCES
// ─────────────────────────────────────────────────────────────────────────────

const leadership = [
    {
        name: "Rahul Singh",
        role: "COO",
        bio: "Visionary behind SkillYards, dedicated to delivering industry-relevant learning and empowering tech professionals to bridge the gap between theory and reality.",
        image: "/images/team/rahul-singh.png",
        badge: "Leadership",
        socials: {
            linkedin: "https://linkedin.com",
        },
    },
    {
        name: "Suryansh Upadhyay",
        role: "CEO",
        bio: "Transforming Education & Training by driving product strategy and ensuring we deliver immense value to our students and industry partners alike.",
        image: "/images/team/suryanshSir.webp",
        badge: "Leadership",
        socials: {
            linkedin: "https://linkedin.com",
        },
    },
];

const engineering = [
    {
        name: "Mrigesh Deshpande",
        role: "Sr. Full Stack Developer",
        bio: "Full Stack Engineer focused on backend scalability, system design, and building robust real-world production systems.",
        image: "/images/team/Mrigesh-Deshpande.jpg",
        badge: "Core",
        socials: {
            linkedin: "https://linkedin.com/in/mrigeshdeshpande",
        },
    },
    {
        name: "Chakresh Chakshu",
        role: "Jr. Full Stack Developer",
        bio: "React & Next.js developer obsessed with high performance, fluid motion animations, and delivering clean UX.",
        image: "/images/team/Chakresh-Chakshu.webp",
        socials: {
            linkedin: "https://linkedin.com/in/chakreshchakshu",
        },
    },
    {
        name: "Neeraj Dang",
        role: "SEO & Marketing Specialist",
        bio: "Specialist in Technical SEO and search strategy, ensuring SkillYards' reach natively connects with ambitious learners.",
        image: "/images/team/Neeraj.png",
        socials: {
            linkedin: "https://linkedin.com",
        },
    },
];

const operations = [
    {
        name: "Kaushal Parihar",
        role: "Field Sales Executive",
        bio: "Sales on the move, results on target. Drives physical outreach and builds enterprise partnerships.",
        image: "/images/team/KaushalSIr.png",
        badge: "Ops",
        socials: {
            linkedin: "https://linkedin.com",
        },
    },
    {
        name: "Karan Singh Tomar",
        role: "Business Development Associate",
        bio: "Crafts stories that drive sales and cultivates long-term relationships with institutional partners.",
        image: "/images/team/Karan.webp",
        socials: {
            linkedin: "https://linkedin.com",
        },
    },
    {
        name: "Saurabh Verma",
        role: "Business Development Associate",
        bio: "Selling solutions, not just products. Connects learners with the exact programs they need to succeed.",
        image: "/images/team/Saurav.webp",
        socials: {
            linkedin: "https://linkedin.com",
        },
    },
    {
        name: "Khushali Gupta",
        role: "Business Development Executive",
        bio: "Where words meet results. Spearheads outbound campaigns and deepens community engagement pipelines.",
        image: "/images/team/khushali.jpeg",
        socials: {
            linkedin: "https://linkedin.com",
        },
    },
    {
        name: "Bhanu Sharma",
        role: "Administrative Head",
        bio: "Behind the scenes leader: orchestrating systems, managing people, and laying the groundwork for success.",
        image: "/images/team/Bhanu.jpg",
        socials: {
            linkedin: "https://linkedin.com",
        },
    },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-background relative selection:bg-primary/30 selection:text-primary">
            
            {/* Custom Hero Spline/Gradient Background */}
            <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden -z-10 pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-primary/10 blur-[120px] mix-blend-multiply opacity-70" />
                <div className="absolute top-[10%] -left-[10%] w-[600px] h-[600px] rounded-full bg-secondary/10 blur-[120px] mix-blend-multiply opacity-50" />
            </div>

            {/* Bespoke Page Hero */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                    <div className="mb-8">
                        <Breadcrumbs />
                    </div>
                    
                    <h1 className="text-2xl md:text-4xl lg:text-6xl font-black tracking-tighter text-foreground leading-[0.95] mb-6">
                        The Minds Behind <br />
                        <span className="italic text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                            SkillYards.
                        </span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
                        We are a collective of engineers, founders, and community builders fiercely dedicated to closing the gap between academic theory and real-world execution.
                    </p>
                </div>
            </section>

            {/* Main Content Areas */}
            <div className="max-w-7xl mx-auto px-6 pb-32">
                
                <TeamSection
                    title="Executive Board"
                    subtitle="Setting the vision, standard, and trajectory."
                    members={leadership}
                    featured={true}
                />

                <TeamSection
                    title="Product & Engineering"
                    subtitle="Architecting the platforms and curriculums."
                    members={engineering}
                    featured={false}
                />

                <TeamSection
                    title="Operations & Sales"
                    subtitle="Fueling growth and supporting student journeys."
                    members={operations}
                    featured={false}
                />

            </div>
        </main>
    );
}