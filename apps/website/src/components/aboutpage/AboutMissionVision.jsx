"use client";

import { Lightbulb, Eye } from "lucide-react"; // Shadcn compatible icons

export default function AboutMissionVision() {
    return (
        <section className="bg-white dark:bg-neutral-900 py-20 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Mission Card */}
                <div className="flex flex-col gap-4 bg-gray-50 dark:bg-neutral-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-100">
                        <Lightbulb className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                        Our Mission
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                        To empower students and professionals with cutting-edge IT skills through On Job Training and On Job Degree programs, enabling them to thrive in real-world projects.
                    </p>
                </div>

                {/* Vision Card */}
                <div className="flex flex-col gap-4 bg-gray-50 dark:bg-neutral-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-100">
                        <Eye className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                        Our Vision
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                        To become the leading IT training institute and software development hub in India, fostering innovation, practical learning, and professional growth for every learner.
                    </p>
                </div>

            </div>
        </section>
    );
}
