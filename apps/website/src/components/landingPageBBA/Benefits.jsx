'use client';

import React from 'react';
import { Rocket, Shield, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export const Benefits = () => {
  const benefits = [
    {
      icon: <Rocket size={32} />,
      title: "Career Growth",
      description: "Our graduates see an average salary increase of 40% within the first year of completion."
    },
    {
      icon: <Shield size={32} />,
      title: "Industry Certified",
      description: "Curriculum designed and certified by top industry leaders and global business schools."
    },
    {
      icon: <Zap size={32} />,
      title: "Fast-Track Learning",
      description: "Intensive modules designed to get you job-ready in record time without compromising quality."
    }
  ];

  return (
    <section id="benefits" className="py-32 px-6 bg-background w-full">
      <div className="w-full">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif mb-6"
          >
            Why Choose SkillYards?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-xl max-w-4xl mx-auto"
          >
            We provide more than just education. We provide a launchpad for your professional success.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group bg-card text-card-foreground rounded-3xl p-10 border border-border/50 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
