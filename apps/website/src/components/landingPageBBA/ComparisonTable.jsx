"use client";

import React from "react";
import {
  BookOpen,
  Users,
  FileText,
  Award,
  Laptop,
  MessageSquare,
  Briefcase,
  Code,
  Trophy,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const comparisonData = [
  {
    icon: <BookOpen />,
    aspect: "Approach",
    traditional: "Focused on theory, bound by the syllabus and BBA Course",
    skillyards: "Practical, skill-based, and industry-aligned BBA Course with a focus on real-world application.",
  },
  {
    icon: <Users />,
    aspect: "Learning Style",
    traditional: "Traditional passive learning through lectures, textbook reading, and minimal interaction.",
    skillyards: "Active learning via hands-on workshops, live projects, and interactive sessions.",
  },
  {
    icon: <FileText />,
    aspect: "Content Relevance",
    traditional: "Often outdated, emphasizing broad theoretical concepts with limited real-world application and relevance.",
    skillyards: "Continuously updated to reflect the latest market trends and industry requirements.",
  },
  {
    icon: <Award />,
    aspect: "Focus Area",
    traditional: "Academic performance is measured through assessments, exams, and theoretical learning.",
    skillyards: "Career readiness, application of knowledge, real-world problem-solving, and industry exposure.",
  },
  {
    icon: <Laptop />,
    aspect: "Technology Exposure",
    traditional: "Restricted to conventional or outdated tools and software, lacking exposure to modern industry technologies.",
    skillyards: "Exposure to modern, cutting-edge technologies like SEO, SMM, CMS, PPC, and more.",
  },
  {
    icon: <MessageSquare />,
    aspect: "Soft Skills",
    traditional: "Traditional lectures with minimal focus on personal growth or professional etiquette.",
    skillyards: "Strong emphasis on developing communication, teamwork, leadership, and professional confidence.",
  },
  {
    icon: <Briefcase />,
    aspect: "Career Preparation",
    traditional: "Provides limited career support, focusing mainly on academic performance and exam scores.",
    skillyards: "Comprehensive support including resume building, LinkedIn optimization, and guaranteed placements.",
  },
  {
    icon: <Code />,
    aspect: "Project Work",
    traditional: "Primarily theory-based assignments and documentation with minimal practical engagement.",
    skillyards: "Real-world, portfolio-worthy projects that offer practical experience and problem-solving.",
  },
  {
    icon: <Trophy />,
    aspect: "Outcome",
    traditional: "Graduates often lack practical skills and industry exposure for immediate job readiness.",
    skillyards: "Graduates equipped with relevant skills and industry experience, with placement guarantees up to 20 LPA.",
  },
];

const ComparisonSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-linear-to-b from-primary/5 via-transparent to-primary/5" />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Side-by-Side Comparison
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-extrabold mb-6 tracking-tight"
          >
            SkillYards <span className="text-primary italic">vs</span> Traditional
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Discover why our skill-first approach is the future of business education compared to the standard academic model.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border/50 -translate-x-1/2" />

          {/* Traditional Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-muted/30 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 border border-border/50 flex flex-col h-full"
          >
            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-border/50">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground">
                <XCircle size={28} />
              </div>
              <h3 className="text-2xl font-bold text-foreground/80">Traditional Education</h3>
            </div>

            <div className="space-y-10">
              {comparisonData.map((item, i) => (
                <div key={i} className="group relative">
                  <div className="flex items-start gap-4 transition-all group-hover:translate-x-1">
                      <div className="mt-1 w-6 h-6 rounded-full border border-border flex items-center justify-center text-muted-foreground shrink-0">
                      {React.cloneElement(item.icon, { size: 14 })}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-muted-foreground mb-1 uppercase tracking-wider">{item.aspect}</h4>
                      <p className="text-base text-foreground/70 font-medium leading-relaxed">{item.traditional}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* SkillYards Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-white dark:bg-zinc-900 shadow-2xl rounded-[2.5rem] p-8 md:p-12 border-2 border-primary/20 flex flex-col h-full"
          >
            {/* Advantage Badge */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-bold uppercase tracking-widest shadow-xl shadow-primary/20 whitespace-nowrap z-20">
              The SkillYards Edge
            </div>

            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-border/50">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <CheckCircle2 size={28} />
              </div>
              <h3 className="text-2xl font-bold text-primary">Modern Industry-Ready</h3>
            </div>

            <div className="space-y-10">
              {comparisonData.map((item, i) => (
                <div key={i} className="group relative">
                  <div className="flex items-start gap-4 transition-all group-hover:translate-x-1">
                    <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      {React.cloneElement(item.icon, { size: 14 })}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary mb-1 uppercase tracking-wider">{item.aspect}</h4>
                      <p className="text-base text-foreground font-semibold leading-relaxed group-hover:text-primary transition-colors">{item.skillyards}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
