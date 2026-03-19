"use client";

import React, { useState, useEffect } from "react";
import { Quote as QuoteIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const QuoteSection = () => {
  const testimonials = [
    {
      text: "SkillYards transformed my understanding of business. The mentors are top-notch and the curriculum is incredibly practical.",
      author: "James Wilson",
      role: "BBA Student '24",
    },
    {
      text: "The industry projects gave me the confidence to lead teams in real-world scenarios. Highly recommend this program!",
      author: "Priya Sharma",
      role: "Marketing Associate at Google",
    },
    {
      text: "A perfect blend of theory and practice. The placement support is exceptional.",
      author: "Robert Chen",
      role: "Finance Analyst at Goldman Sachs",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 bg-primary relative overflow-hidden w-full">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none mix-blend-overlay">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] border-40 border-white rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] border-60 border-white rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center w-20 h-20 bg-secondary text-secondary-foreground rounded-3xl mb-12 shadow-2xl"
        >
          <QuoteIcon size={40} className="fill-current" />
        </motion.div>

        <div className="relative min-h-[300px] md:min-h-[200px] flex items-center justify-center max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col items-center"
            >
              <blockquote className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-foreground leading-snug mb-12 italic font-medium">
                &ldquo;{testimonials[activeIndex].text}&rdquo;
              </blockquote>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-1 bg-secondary mb-6 rounded-full" />
                <cite className="not-italic">
                  <span className="block text-2xl font-bold text-primary-foreground">
                    {testimonials[activeIndex].author}
                  </span>
                  <span className="text-primary-foreground/70 uppercase tracking-widest text-sm font-bold mt-2 block">
                    {testimonials[activeIndex].role}
                  </span>
                </cite>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-16 flex justify-center gap-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === activeIndex
                  ? "w-12 bg-secondary"
                  : "w-3 bg-primary-foreground/20 hover:bg-primary-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

