"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Globe,
  PieChart,
  Briefcase,
  TrendingUp,
  Search,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

const SkillCard = ({ icon, label, level, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08 }}
    whileHover={{ y: -4, transition: { duration: 0.3 } }}
    className="group"
  >
    <div className="bg-card dark:bg-neutral-900/40 border border-border dark:border-neutral-800 rounded-lg p-6 text-center hover:border-primary/50 dark:hover:border-primary/40 transition-all duration-300 backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-foreground dark:text-neutral-100 group-hover:text-primary transition-colors">
        {label}
      </h3>
    </div>
  </motion.div>
);

export const Skills = () => {
  const skills = [
    { icon: <BarChart3 size={32} />, label: "Data Analytics", level: 90 },
    { icon: <Globe size={32} />, label: "Global Business", level: 85 },
    { icon: <PieChart size={32} />, label: "Finance", level: 80 },
    { icon: <Briefcase size={32} />, label: "Management", level: 95 },
    { icon: <TrendingUp size={32} />, label: "Marketing", level: 88 },
    { icon: <Search size={32} />, label: "Strategy", level: 82 },
    { icon: <MessageSquare size={32} />, label: "Communication", level: 92 },
    { icon: <ShieldCheck size={32} />, label: "Ethics", level: 85 },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background dark:bg-neutral-950 w-full relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-primary/10 dark:bg-primary/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-secondary/10 dark:bg-secondary/15 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 block"
          >
            Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold mb-6 tracking-tight text-foreground dark:text-neutral-50"
          >
            Future-Ready <span className="text-primary italic">Skills.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground dark:text-neutral-400 text-base md:text-lg leading-relaxed"
          >
            We don&apos;t just teach business theory; we build leaders equipped with the hard and soft skills necessary for the modern digital economy.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

