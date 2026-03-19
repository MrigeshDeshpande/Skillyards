'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const Stats = () => {
  const [particles, setParticles] = useState([]);

  const stats = [
    { value: "5000+", label: "Students Enrolled", suffix: "Active" },
    { value: "95%", label: "Placement Rate", suffix: "Success" },
    { value: "50+", label: "Industry Partners", suffix: "Global" },
    { value: "12 LPA", label: "Avg. Package", suffix: "Starting" },
  ];

  useEffect(() => {
    const generatedParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 5,
      width: Math.random() * 8 + 2,
      height: Math.random() * 8 + 2,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }));
    const timer = setTimeout(() => {
      setParticles(generatedParticles);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-[10vh] md:py-[15vh] px-4 sm:px-6 bg-primary dark:bg-primary/95 relative overflow-hidden w-full">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
            className="absolute bg-primary-foreground rounded-full"
            style={{
              width: p.width,
              height: p.height,
              left: p.left,
              top: p.top,
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-primary-foreground mb-3 md:mb-4 tracking-tighter font-bold">
                {stat.value}
              </div>
              <div className="text-secondary dark:text-secondary/90 font-bold uppercase tracking-widest text-xs md:text-sm mb-2">
                {stat.suffix}
              </div>
              <div className="text-primary-foreground/70 dark:text-primary-foreground/60 text-sm md:text-base lg:text-lg">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
