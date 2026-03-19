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
    <section className="py-[10vh] md:py-[15vh] bg-primary dark:bg-primary/95 relative overflow-hidden w-full">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] dark:opacity-[0.02] pointer-events-none mix-blend-overlay">
        <div className="absolute top-[-20%] left-[-10%] w-100 md:w-125 h-100 md:h-125 border-40 border-white rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-125 md:w-150 h-125 md:h-150 border-60 border-white rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-secondary text-secondary-foreground rounded-2xl md:rounded-3xl mb-8 md:mb-12 shadow-2xl"
        >
          <QuoteIcon size={36} className="fill-current" />
        </motion.div>

        <div className="relative min-h-70 md:min-h-55 flex items-center justify-center max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col items-center"
            >
              <blockquote className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif text-primary-foreground leading-snug md:leading-tight mb-8 md:mb-12 italic font-medium px-3">
                &ldquo;{testimonials[activeIndex].text}&rdquo;
              </blockquote>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-1 md:w-16 bg-secondary mb-4 md:mb-6 rounded-full" />
                <cite className="not-italic">
                  <span className="block text-xl md:text-2xl font-bold text-primary-foreground">
                    {testimonials[activeIndex].author}
                  </span>
                  <span className="text-primary-foreground/70 uppercase tracking-widest text-xs md:text-sm font-bold mt-2 block">
                    {testimonials[activeIndex].role}
                  </span>
                </cite>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 md:mt-16 flex justify-center gap-3 md:gap-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === activeIndex
                  ? "w-10 md:w-12 bg-secondary"
                  : "w-2 md:w-3 bg-primary-foreground/20 hover:bg-primary-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

