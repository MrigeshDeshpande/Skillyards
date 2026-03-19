"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  BookOpen,
  Briefcase,
  Award,
} from "lucide-react";

const phases = [
  {
    icon: BookOpen,
    title: "Foundations",
    duration: "Start",
    description:
      "Build strong fundamentals with practical learning instead of theory-heavy education.",
  },
  {
    icon: Rocket,
    title: "Skill Building",
    duration: "Growth",
    description:
      "Develop real-world skills through projects, mentorship, and guided learning.",
  },
  {
    icon: Briefcase,
    title: "Real Experience",
    duration: "Execution",
    description:
      "Work on live projects and understand how real companies operate.",
  },
  {
    icon: Award,
    title: "Career Ready",
    duration: "Outcome",
    description:
      "Become confident, job-ready, and capable of starting your career early.",
  },
];

export default function JourneyTimeline() {
  return (
    <section className="relative py-32 bg-background overflow-hidden">

      {/* Ambient Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[140px] rounded-full" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground">
            Your <span className="text-primary italic">Journey</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            From confusion to confidence — a structured transformation into a skilled professional.
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative">

          {/* Wavy Line */}
          <svg
            className="absolute left-1/2 -translate-x-1/2 h-full w-[200px] hidden md:block"
            viewBox="0 0 200 1000"
            preserveAspectRatio="none"
          >
            <path
              d="M100 0 C 150 150, 50 300, 100 450 C 150 600, 50 750, 100 1000"
              stroke="url(#gradient)"
              strokeWidth="3"
              fill="none"
            />
            <defs>
              <linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="1000">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
                <stop offset="50%" stopColor="currentColor" stopOpacity="0.6" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          {/* Items */}
          <div className="space-y-32">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative flex items-center justify-between"
                >

                  {/* LEFT */}
                  <div className={`w-[45%] ${isLeft ? "block" : "hidden md:block"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="group relative p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-xl shadow-lg hover:-translate-y-2 transition-all"
                    >
                      <CardContent phase={phase} />
                    </motion.div>
                  </div>

                  {/* CENTER DOT */}
                  <div className="relative z-20 flex flex-col items-center">

                    {/* Breathing Glow */}
                    <motion.div
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute w-12 h-12 bg-primary/30 rounded-full blur-xl"
                    />

                    {/* Dot */}
                    <div className="relative w-6 h-6 rounded-full bg-primary border-4 border-background shadow-lg" />

                  </div>

                  {/* RIGHT */}
                  <div className={`w-[45%] ${!isLeft ? "block" : "hidden md:block"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="group relative p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-xl shadow-lg hover:-translate-y-2 transition-all"
                    >
                      <CardContent phase={phase} />
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Inline Card Content */
function CardContent({ phase }) {
  const Icon = phase.icon;

  return (
    <>
      <div className="mb-4 flex items-center gap-3">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
          <Icon size={20} />
        </div>
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
          {phase.duration}
        </span>
      </div>

      <h3 className="text-xl font-bold text-foreground mb-2">
        {phase.title}
      </h3>

      <p className="text-muted-foreground text-sm leading-relaxed">
        {phase.description}
      </p>

      {/* Hover Glow */}
      <div className="absolute inset-0 rounded-2xl bg-primary/10 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
    </>
  );
}