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
    <section id="mentors" className="py-24 bg-secondary/5 relative overflow-hidden w-full">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Direct Access
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-extrabold mb-6 tracking-tight"
          >
            Mentors from <span className="text-primary italic">Fortune 500</span> Companies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg md:text-xl leading-relaxed"
          >
            Get direct, weekly guidance from industry leaders who have already reached the pinnacle of their careers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-card rounded-[3rem] p-10 shadow-2xl border border-border/50 relative group transition-all duration-300 hover:shadow-primary/5"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center shadow-xl z-20 group-hover:rotate-12 transition-transform">
                <Quote size={20} className="fill-current" />
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="relative w-28 h-28 rounded-[2.5rem] overflow-hidden shadow-2xl mb-8 border-4 border-border/50 group-hover:rounded-2xl transition-all duration-500">
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 112px) 112px, 112px"
                  />
                </div>
                
                <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{mentor.name}</h3>
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-primary font-extrabold uppercase tracking-tighter text-sm">{mentor.company}</span>
                  <div className="w-1 h-1 rounded-full bg-border" />
                  <span className="text-muted-foreground font-medium text-sm italic">{mentor.role}</span>
                </div>

                <div className="relative pt-6 border-t border-border/50 w-full">
                  <p className="text-muted-foreground font-medium leading-relaxed italic text-sm">
                    &ldquo;{mentor.quote}&rdquo;
                  </p>
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  className="mt-8 text-primary/40 hover:text-primary transition-colors"
                >
                  <Linkedin size={18} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
