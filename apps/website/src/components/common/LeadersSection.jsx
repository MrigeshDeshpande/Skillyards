"use client";

import { motion } from "framer-motion";
import SuryanshHero from "@/components/suryanshupadhyay/SuryanshHero";
import RahulHero from "@/components/rahulsingh/RahulHero";

export default function LeadersSection() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Ambient Background Effects */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-primary/5 blur-[140px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-secondary/5 blur-[120px] rounded-full" />
            </div>

            {/* Section Header */}
            <div className="max-w-4xl mx-auto px-6 text-center mb-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
                        The Team
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
                        Visionary Leadership
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                        Meet the driving forces behind SkillYards — building the future of skill-based education.
                    </p>
                    <div className="w-20 h-1 bg-linear-to-r from-primary/80 to-secondary/60 rounded-full mx-auto mt-6" />
                </motion.div>
            </div>

            {/* Leader Cards */}
            <div className="max-w-6xl mx-auto">
                <div className="divide-y divide-border/40">
                    <SuryanshHero />
                    <RahulHero />
                </div>
            </div>
        </section>
    );
}
