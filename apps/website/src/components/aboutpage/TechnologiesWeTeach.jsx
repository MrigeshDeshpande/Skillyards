import {
    Code2,
    Database,
    Cloud,
    Cpu,
    ShieldCheck,
    Smartphone,
    Brain,
    Globe
} from "lucide-react";

const technologies = [
    { name: "Web Development", icon: Code2 },
    { name: "Backend & APIs", icon: Database },
    { name: "Cloud Computing", icon: Cloud },
    { name: "DevOps & Automation", icon: Cpu },
    { name: "Cyber Security", icon: ShieldCheck },
    { name: "Mobile App Development", icon: Smartphone },
    { name: "AI & Machine Learning", icon: Brain },
    { name: "Emerging Technologies", icon: Globe },
];

export default function TechnologiesWeTeach() {
    return (
        <section className="py-20 bg-white dark:bg-neutral-950">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-14">
                    <h2 className="text-3xl sm:text-4xl font-extrabold">
                        Technologies We Teach
                    </h2>
                    <p className="mt-3 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        Industry-aligned technologies designed for real-world projects,
                        internships, and on-job learning.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {technologies.map(({ name, icon: Icon }) => (
                        <div
                            key={name}
                            className="group rounded-2xl border border-neutral-200 dark:border-neutral-800
                         bg-neutral-50 dark:bg-neutral-900 p-6 text-center
                         hover:border-indigo-500 hover:shadow-lg transition"
                        >
                            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center
                              rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600">
                                <Icon className="h-7 w-7" />
                            </div>
                            <p className="font-semibold">{name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
