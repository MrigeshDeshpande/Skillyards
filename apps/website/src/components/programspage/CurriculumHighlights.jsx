"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen } from "lucide-react";

const programs = [
  {
    id: "bca",
    name: "BCA",
    color: "border-primary text-primary bg-primary",
    topics: [
      { phase: "Year 1", subjects: ["Programming Fundamentals (C/C++)", "Mathematics for Computing", "Web Design Basics", "Database Concepts", "IT Essentials"] },
      { phase: "Year 2", subjects: ["Data Structures & Algorithms", "Java Programming", "Operating Systems", "Computer Networks", "Python for Development"] },
      { phase: "Year 3", subjects: ["Full-Stack Web Development", "Cloud Computing & DevOps", "Software Engineering", "AI/ML Introduction", "Capstone Project + On-Job Training"] },
    ],
  },
  {
    id: "bba",
    name: "BBA",
    color: "border-secondary text-secondary-foreground bg-secondary",
    topics: [
      { phase: "Year 1", subjects: ["Business Communication", "Principles of Management", "Financial Accounting", "Marketing Fundamentals", "Digital Tools for Business"] },
      { phase: "Year 2", subjects: ["Digital Marketing Strategy", "Business Analytics", "Human Resource Management", "Consumer Behaviour", "E-Commerce Management"] },
      { phase: "Year 3", subjects: ["Advanced SEO & SEM", "Social Media Advertising", "Startup & Entrepreneurship", "Brand Management", "Internship + Live Projects"] },
    ],
  },
  {
    id: "fullstack",
    name: "Full-Stack",
    color: "border-green-500 text-green-700 dark:text-green-400 bg-green-500",
    topics: [
      { phase: "Month 1–2", subjects: ["HTML5, CSS3 & Responsive Design", "JavaScript ES6+ Fundamentals", "Git & Version Control", "Figma to Code Workflow"] },
      { phase: "Month 3–4", subjects: ["React.js (Hooks, Context, Router)", "Next.js & SSR/SSG", "Node.js & Express REST APIs", "MongoDB & Mongoose"] },
      { phase: "Month 5–6", subjects: ["Authentication & Security (JWT)", "SQL & Relational DBs", "Deployment (Vercel, AWS)", "Portfolio Projects + Mock Interviews"] },
    ],
  },
  {
    id: "digitalmarketing",
    name: "Digital Marketing",
    color: "border-orange-500 text-orange-700 dark:text-orange-400 bg-orange-500",
    topics: [
      { phase: "Month 1", subjects: ["SEO Fundamentals & Keyword Research", "Content Marketing Strategy", "WordPress & Website Basics", "Google Analytics 4"] },
      { phase: "Month 2", subjects: ["Google Ads (Search + Display)", "Meta Ads (Facebook & Instagram)", "Email Marketing Campaigns", "Influencer & Affiliate Marketing"] },
      { phase: "Month 3", subjects: ["Social Media Strategy & Scheduling", "E-Commerce Marketing", "Reporting & Data Analysis", "Live Client Campaign + Certifications"] },
    ],
  },
];

export default function CurriculumHighlights() {
  const [active, setActive] = useState("bca");
  const current = programs.find((p) => p.id === active);

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary"
          >
            <BookOpen size={13} />
            Curriculum
          </motion.div>
          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Industry-Aligned. <span className="italic text-primary">No Outdated Syllabus.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Every topic is mapped to real job requirements not just textbooks.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {programs.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${
                active === p.id
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid gap-4 sm:grid-cols-3"
          >
            {current.topics.map((block, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <div className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-bold text-white ${current.color.split(" ").find(c => c.startsWith("bg-"))}`}>
                  {block.phase}
                </div>
                <ul className="space-y-2">
                  {block.subjects.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
