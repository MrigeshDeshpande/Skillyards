"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Linkedin } from "lucide-react";

const mentors = [
  {
    name: "Alex Rivera",
    company: "Google",
    role: "Product Manager",
    quote: "SkillYards bridges the gap between traditional theory and modern execution in ways I've never seen before.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&h=300&auto=format&fit=crop",
  },
  {
    name: "Jessica Wu",
    company: "Amazon",
    role: "Senior Analyst",
    quote: "The students here don't just learn business; they learn how to navigate the complex corporate world effectively.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&h=300&auto=format&fit=crop",
  },
  {
    name: "Marcus Thorne",
    company: "Tesla",
    role: "Operations Lead",
    quote: "Practical, project-based learning is the only way to build real leadership skills in today's economy.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=300&h=300&auto=format&fit=crop",
  },
  {
    name: "Sophia Lee",
    company: "Microsoft",
    role: "Marketing Director",
    quote: "Direct mentorship from industry insiders gives these graduates an unfair advantage in the job market.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&h=300&auto=format&fit=crop",
  },
];

export const Mentors = () => {
  return (
    <section id="mentors" className="py-[10vh] md:py-[15vh] bg-secondary/5 dark:bg-neutral-900/30 relative overflow-hidden w-full">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4 block"
          >
            Direct Access
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold mb-4 sm:mb-6 tracking-tight text-foreground dark:text-neutral-50"
          >
            Mentors from <span className="text-primary italic">Fortune 500</span> Companies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground dark:text-neutral-400 text-sm md:text-base lg:text-lg leading-relaxed"
          >
            Get direct, weekly guidance from industry leaders who have already reached the pinnacle of their careers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-card dark:bg-neutral-800 rounded-2xl md:rounded-[3rem] p-6 md:p-8 lg:p-10 shadow-2xl border border-border/50 dark:border-neutral-700 relative group transition-all duration-300 hover:shadow-primary/10 dark:hover:shadow-primary/20"
            >
              <div className="absolute -top-3 md:-top-4 -right-3 md:-right-4 w-10 h-10 md:w-12 md:h-12 bg-primary text-primary-foreground rounded-xl md:rounded-2xl flex items-center justify-center shadow-xl z-20 group-hover:rotate-12 transition-transform">
                <Quote size={19} className="fill-current" />
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl mb-6 md:mb-8 border-4 border-border/50 dark:border-neutral-700 group-hover:rounded-lg md:group-hover:rounded-2xl transition-all duration-500">
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 112px) 112px, 112px"
                  />
                </div>
                
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-1 group-hover:text-primary transition-colors text-foreground dark:text-neutral-50">{mentor.name}</h3>
                <div className="flex items-center gap-2 mb-4 md:mb-6 flex-wrap justify-center">
                  <span className="text-primary font-extrabold uppercase tracking-tighter text-xs md:text-sm">{mentor.company}</span>
                  <div className="w-1 h-1 rounded-full bg-border dark:bg-neutral-600" />
                  <span className="text-muted-foreground dark:text-neutral-400 font-medium text-xs md:text-sm italic">{mentor.role}</span>
                </div>

                <div className="relative pt-4 md:pt-6 border-t border-border/50 dark:border-neutral-700 w-full">
                  <p className="text-muted-foreground dark:text-neutral-400 font-medium leading-relaxed italic text-xs md:text-sm">
                    &ldquo;{mentor.quote}&rdquo;
                  </p>
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  className="mt-6 md:mt-8 text-primary/40 hover:text-primary transition-colors"
                >
                  <Linkedin size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
