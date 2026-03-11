"use client";

import { Cpu, Book, Users, Briefcase } from "lucide-react";

const usps = [
    {
        title: "On Job Training",
        description: "Gain real-world experience while learning with our hands-on training programs.",
        Icon: Cpu,
        bg: "bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-100",
    },
    {
        title: "On Job Degree",
        description: "Earn recognized IT degrees while working on live projects with expert guidance.",
        Icon: Book,
        bg: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-100",
    },
    {
        title: "Experienced Trainers",
        description: "Learn from industry professionals with years of experience in IT and software development.",
        Icon: Users,
        bg: "bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-100",
    },
    {
        title: "Industry Collaboration",
        description: "Collaborate with top companies and gain exposure to real IT projects and environments.",
        Icon: Briefcase,
        bg: "bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-100",
    },
];

export default function AboutWhyChoose() {
    return (
        <section className="bg-gray-50 dark:bg-neutral-900 py-20 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100">
                    Why Choose SkillYards
                </h2>
                <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                    Discover the unique benefits of learning with SkillYards, where practical experience and professional growth come first.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {usps.map(({ title, description, Icon, bg }) => (
                    <div
                        key={title}
                        className="flex flex-col items-start gap-4 p-6 rounded-2xl bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl transition"
                    >
                        <div className={`flex items-center justify-center w-12 h-12 rounded-full ${bg}`}>
                            <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                            {title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            {description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
