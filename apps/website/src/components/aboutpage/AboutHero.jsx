"use client";

import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function AboutHero() {
    return (
        <section className="relative bg-linear-to-b from-white via-zinc-50 to-zinc-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-black text-neutral-900 dark:text-neutral-100 transition-colors duration-500">
            {/* Container */}
            <div className="max-w-7xl mx-auto px-6 py-32 flex flex-col-reverse lg:flex-row items-center gap-12">

                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left space-y-6">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                        About SkillYards
                    </h1>
                    {/* Breadcrumbs */}
                    <Breadcrumbs />

                    <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto lg:mx-0">
                        SkillYards is an IT training institute and software development company based in Agra.
                        We empower students with On Job Training and On Job Degree programs in emerging IT technologies.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a
                            href="/contact"
                            className="rounded-xl bg-indigo-600 hover:bg-indigo-700 px-6 py-3 font-medium text-white transition"
                        >
                            Contact Us
                        </a>
                        <a
                            href="/programs"
                            className="rounded-xl border border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-neutral-800 px-6 py-3 font-medium transition"
                        >
                            Explore Programs
                        </a>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="flex-1 relative w-full h-72 sm:h-96 lg:h-112">
                    <Image
                        src="/images/hero/about-hero-placeholder.jpg"
                        alt="SkillYards Team and Training"
                        fill
                        className="object-cover rounded-2xl shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}
