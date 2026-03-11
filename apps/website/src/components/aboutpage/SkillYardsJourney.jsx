const timeline = [
    {
        year: "2019",
        title: "SkillYards Founded",
        description: "Started with a mission to bridge the gap between education and industry.",
    },
    {
        year: "2020",
        title: "First Internship Program",
        description: "Launched real-world internships for students across Agra.",
    },
    {
        year: "2022",
        title: "On Job Degree Model",
        description: "Introduced On Job Degree & Training programs with live projects.",
    },
    {
        year: "2024",
        title: "Hiring Partner Network",
        description: "Built partnerships with startups and IT companies across India.",
    },
];

export default function SkillYardsJourney() {
    return (
        <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
                        SkillYards Journey
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        A journey of learning, growth, and impact.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded" />

                    <div className="space-y-16">
                        {timeline.map((item, index) => (
                            <div
                                key={index}
                                className={`relative md:flex md:items-center ${
                                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                            >
                                {/* Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:translate-x-0">
                                    <span className="block w-6 h-6 rounded-full bg-indigo-600 shadow-lg ring-4 ring-white dark:ring-gray-900 dark:bg-indigo-400 transition-all"></span>
                                </div>

                                {/* Card */}
                                <div className="mt-6 md:mt-0 md:w-1/2 px-6 py-5 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition hover:scale-105">
                                    <span className="text-indigo-600 font-semibold">{item.year}</span>
                                    <h3 className="text-2xl font-bold mt-2 text-gray-900 dark:text-white">{item.title}</h3>
                                    <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
