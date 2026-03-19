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
    <section className="py-24 bg-background w-full relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold mb-6 tracking-tight"
          >
            Future-Ready <span className="text-primary italic">Skills.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg md:text-xl leading-relaxed"
          >
            We don't just teach business theory; we build leaders equipped with the hard and soft skills necessary for the modern digital economy.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center group cursor-default"
            >
              <div className="relative w-24 h-24 bg-card rounded-[2rem] flex items-center justify-center mb-6 border border-border/50 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-500 shadow-xs group-hover:shadow-2xl group-hover:shadow-primary/30 z-10">
                {skill.icon}
                <div className="absolute inset-0 bg-primary/10 rounded-[2rem] scale-0 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
              </div>

              <span className="font-bold text-center text-lg text-foreground group-hover:text-primary transition-colors">
                {skill.label}
              </span>

              <div className="w-full h-1.5 bg-muted/50 rounded-full mt-4 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  className="h-full bg-primary rounded-full group-hover:bg-secondary transition-colors"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

