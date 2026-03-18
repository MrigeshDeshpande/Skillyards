"use client";

import Link from "next/link";

export default function CTASection() {
    return (
        <section className="bg-linear-to-r from-indigo-600 to-blue-500 dark:from-indigo-700 dark:to-blue-800 text-white py-20 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                    Take the Leap & Upskill with SkillYards
                </h2>
                <p className="text-lg sm:text-xl mb-8 text-white/90">
                    Join our On Job Training & On Job Degree programs today and get hands-on experience in emerging IT technologies.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="/contact"
                        className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition transform"
                    >
                        Get a Free Demo
                    </Link>
                    <Link
                        href="/programs"
                        className="px-8 py-4 bg-indigo-800 text-white font-semibold rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition transform"
                    >
                        Explore Programs
                    </Link>
                </div>

                <p className="mt-6 text-sm text-white/80">
                    Already enrolled? <Link href="/login" className="underline font-medium">Login here</Link>
                </p>
            </div>
        </section>
    );
}
