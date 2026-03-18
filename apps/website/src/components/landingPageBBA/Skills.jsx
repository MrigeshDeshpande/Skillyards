'use client';

import React from 'react';
import { motion } from 'motion/react';
import { BarChart3, Globe, PieChart, Briefcase, TrendingUp, Search, MessageSquare, ShieldCheck } from 'lucide-react';

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
    <section className="py-32 px-6 bg-background w-full">
      <div className="w-full">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif mb-6"
          >
            Future-Ready Skills
          </motion.h2>
          <p className="text-muted-foreground text-xl">We don&apos;t just teach business; we build leaders.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center group cursor-default"
            >
              <div className="w-24 h-24 bg-secondary/20 rounded-[2rem] flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-xl group-hover:shadow-primary/30">
                {skill.icon}
              </div>
              <span className="font-bold text-center text-lg">{skill.label}</span>
              
              <div className="w-full h-1 bg-muted/30 rounded-full mt-4 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-primary"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
