'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Rocket, BookOpen, Briefcase, Award } from 'lucide-react';

export const ProgramPhases = () => {
  const phases = [
    {
      icon: <BookOpen size={32} />,
      title: "Foundations",
      duration: "Months 1-12",
      description: "Master the core principles of business, economics, and management."
    },
    {
      icon: <Rocket size={32} />,
      title: "Specialization",
      duration: "Months 13-24",
      description: "Deep dive into your chosen track: Marketing, Finance, or Operations."
    },
    {
      icon: <Briefcase size={32} />,
      title: "Industry Immersion",
      duration: "Months 25-30",
      description: "Real-world projects and internships with global partner companies."
    },
    {
      icon: <Award size={32} />,
      title: "Capstone & Placement",
      duration: "Months 31-36",
      description: "Final project presentation and dedicated placement support."
    }
  ];

  return (
    <section className="py-32 px-6 bg-background relative overflow-hidden w-full">
      {/* Background Line */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-secondary/20 hidden lg:block -translate-y-1/2" />

      <div className="w-full relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif mb-6"
          >
            Your 3-Year Journey
          </motion.h2>
          <p className="text-muted-foreground text-xl">A structured path from student to industry professional.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {phases.map((phase, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="w-20 h-20 bg-primary text-primary-foreground rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-primary/30 mx-auto lg:mx-0 relative z-10">
                {phase.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold border-4 border-background">
                  {index + 1}
                </div>
              </div>
              
              <div className="text-center lg:text-left">
                <span className="text-primary font-bold text-sm uppercase tracking-widest mb-2 block">{phase.duration}</span>
                <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
