"use client";

import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Briefcase, Clock, Monitor, BookOpen, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const programs = [
  {
    id: "bca",
    name: "BCA",
    fullName: "Bachelor of Computer Applications",
    type: "University Degree",
    typeColor: "text-primary bg-primary/10 border-primary/20",
    badge: "3-Year Degree",
    targetAudience: "12th pass students who want a CS degree with real coding skills",
    skills: ["Full-Stack Development", "Data Structures & Algorithms", "Database Management", "Python & Java", "Cloud Computing", "Software Engineering"],
    duration: "3 Years",
    mode: "Offline (Agra Campus)",
    eligibility: "12th pass (any stream) | Min. 50% marks",
    certification: "University Degree (Accredited) + Industry Certificates",
    avgSalary: "₹3.5 – 6 LPA",
    href: "/programs/bca",
    accentClass: "border-primary/30 hover:border-primary/60",
    badgeBg: "bg-primary/10 text-primary",
  },
  {
    id: "bba",
    name: "BBA",
    fullName: "Bachelor of Business Administration",
    type: "University Degree",
    typeColor: "text-primary bg-primary/10 border-primary/20",
    badge: "3-Year Degree",
    targetAudience: "Students who want a business degree with digital marketing & tech skills",
    skills: ["Digital Marketing", "Business Analytics", "SEO & SEM", "Social Media Strategy", "Financial Management", "Entrepreneurship"],
    duration: "3 Years",
    mode: "Offline (Agra Campus)",
    eligibility: "12th pass (any stream) | Min. 50% marks",
    certification: "University Degree (Accredited) + Digital Marketing Certificate",
    avgSalary: "₹3 – 5.5 LPA",
    href: "/programs/bba",
    accentClass: "border-secondary/50 hover:border-secondary/80",
    badgeBg: "bg-secondary/20 text-secondary-foreground",
  },
  {
    id: "fullstack",
    name: "Full-Stack Web Development",
    fullName: "Full-Stack Development Bootcamp",
    type: "Skill Course",
    typeColor: "text-green-700 bg-green-50 border-green-200 dark:text-green-400 dark:bg-green-950/30 dark:border-green-800",
    badge: "Job-Ready Course",
    targetAudience: "Students & graduates who want to become developers fast",
    skills: ["HTML / CSS / JavaScript", "React.js & Next.js", "Node.js & Express", "MongoDB & SQL", "REST APIs", "Git & Deployment"],
    duration: "6 Months",
    mode: "Offline + Online (Hybrid)",
    eligibility: "10+2 pass | Basic computer knowledge",
    certification: "Industry Certificate + Portfolio Projects",
    avgSalary: "₹4 – 8 LPA",
    href: "/contact",
    accentClass: "border-green-300/50 hover:border-green-400/70 dark:border-green-800/50",
    badgeBg: "bg-green-100 text-green-800 dark:bg-green-950/50 dark:text-green-400",
  },
  {
    id: "digitalmarketing",
    name: "Digital Marketing",
    fullName: "Professional Digital Marketing Program",
    type: "Skill Course",
    typeColor: "text-orange-700 bg-orange-50 border-orange-200 dark:text-orange-400 dark:bg-orange-950/30 dark:border-orange-800",
    badge: "Job-Ready Course",
    targetAudience: "Anyone who wants to build a career in marketing or grow a business online",
    skills: ["SEO & Content Marketing", "Google Ads & Meta Ads", "Email Marketing", "Analytics & Reporting", "Social Media Management", "E-Commerce Marketing"],
    duration: "3 Months",
    mode: "Offline + Online (Hybrid)",
    eligibility: "10+2 pass | No prior experience needed",
    certification: "Google, Meta & SkillYards Certificates",
    avgSalary: "₹3 – 6 LPA",
    href: "/contact",
    accentClass: "border-orange-300/50 hover:border-orange-400/70 dark:border-orange-800/50",
    badgeBg: "bg-orange-100 text-orange-800 dark:bg-orange-950/50 dark:text-orange-400",
  },
];

export default function ProgramCards() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary"
          >
            <BookOpen size={13} />
            Our Programs
          </motion.div>
          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            4 Paths. One{" "}
            <span className="italic text-primary">Guaranteed</span> Outcome.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            Whether you want a university degree or a fast-track skill course — we have a program designed for your goal.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-2">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group flex flex-col rounded-3xl border-2 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-xl ${prog.accentClass}`}
            >
              {/* Header */}
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <span className={`mb-2 inline-block rounded-full px-3 py-1 text-xs font-bold ${prog.badgeBg}`}>
                    {prog.badge}
                  </span>
                  <h3 className="font-serif text-2xl font-extrabold text-foreground">{prog.name}</h3>
                  <p className="text-sm text-muted-foreground">{prog.fullName}</p>
                </div>
                <span className={`shrink-0 rounded-full border px-3 py-1 text-xs font-bold ${prog.typeColor}`}>
                  {prog.type}
                </span>
              </div>

              {/* For whom */}
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Who it&apos;s for: </strong>{prog.targetAudience}
              </p>

              {/* Skills */}
              <div className="mb-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">What you&apos;ll learn</p>
                <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                  {prog.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-1.5 text-xs text-foreground">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Meta row */}
              <div className="mb-5 grid grid-cols-2 gap-3 rounded-2xl bg-background/60 p-4 text-xs">
                <div className="flex items-center gap-2 text-accent-foreground">
                  <Clock size={13} className="shrink-0 text-accent-foreground" />
                  <span><strong>Duration:</strong> {prog.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-accent-foreground">
                  <Monitor size={13} className="text-foreground shrink-0" />
                  <span><strong>Mode:</strong> {prog.mode}</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 text-accent-foreground">
                  <GraduationCap size={13} className="text-foreground shrink-0" />
                  <span><strong>Eligibility:</strong> {prog.eligibility}</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 text-accent-foreground">
                  <Briefcase size={13} className="text-foreground shrink-0" />
                  <span><strong>Certification:</strong> {prog.certification}</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 text-accent-foreground">
                  <TrendingUp size={13} className="text-foreground shrink-0" />
                  <span><strong>Avg. Starting Salary:</strong> {prog.avgSalary}</span>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-auto">
                <Button
                  asChild
                  className="w-full rounded-full bg-foreground text-primary-foreground font-bold transition-all hover:bg-primary/90 hover:scale-[1.02]"
                >
                  <Link href={prog.href}>
                    Explore {prog.name} <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
