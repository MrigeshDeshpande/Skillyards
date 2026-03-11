import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const stories = [
    {
        name: "Ankit Sharma",
        role: "Frontend Developer Intern",
        company: "Startup (Remote)",
        story:
            "Joined SkillYards with zero coding background. Within 6 months, built production-ready apps and cracked an internship.",
        image: "https://picsum.photos/400/400?random=21",
    },
    {
        name: "Pooja Verma",
        role: "Full Stack Developer",
        company: "IT Services Company",
        story:
            "On Job Degree program helped me learn while earning. Real client projects made interviews easy.",
        image: "https://picsum.photos/400/400?random=22",
    },
    {
        name: "Rohit Singh",
        role: "Backend Engineer",
        company: "Product Startup",
        story:
            "SkillYards transformed my basics into job-ready skills. Mentorship was the real game changer.",
        image: "https://picsum.photos/400/400?random=23",
    },
];

export default function StudentSuccessStories() {
    return (
        <section className="py-20 bg-white dark:bg-neutral-950">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-14">
                    <h2 className="text-3xl sm:text-4xl font-extrabold">
                        Student Success Stories
                    </h2>
                    <p className="mt-3 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        Real people. Real journeys. Real careers built at SkillYards.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {stories.map((story) => (
                        <div
                            key={story.name}
                            className="group rounded-2xl border border-neutral-200 dark:border-neutral-800
                         bg-neutral-50 dark:bg-neutral-900 p-6
                         hover:shadow-xl transition"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <Image
                                    src={story.image}
                                    alt={story.name}
                                    height={500}
                                    width={500}
                                    className="h-14 w-14 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold">{story.name}</p>
                                    <p className="text-sm text-neutral-500">
                                        {story.role}
                                    </p>
                                </div>
                            </div>

                            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                                “{story.story}”
                            </p>

                            <div className="flex items-center justify-between text-sm">
                <span className="text-indigo-600 font-medium">
                  {story.company}
                </span>
                                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button size="lg" variant="outline">
                        View More Success Stories
                    </Button>
                </div>
            </div>
        </section>
    );
}
