"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Twitter, ExternalLink } from "lucide-react";

const educators = [
  {
    name: "Dr. Sarah Johnson",
    role: "Strategic Management",
    specialization: "Harvard Business School Alumna",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&auto=format&fit=crop",
  },
  {
    name: "Prof. Michael Chen",
    role: "Digital Marketing",
    specialization: "Ex-Google Marketing Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&auto=format&fit=crop",
  },
  {
    name: "Dr. Elena Rodriguez",
    role: "Financial Analysis",
    specialization: "Wall Street Veteran",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop",
  },
  {
    name: "Prof. David Smith",
    role: "Operations Excellence",
    specialization: "6 Sigma Master Black Belt",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&auto=format&fit=crop",
  },
];

export const Educators = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Elite Faculty
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-extrabold mb-6 tracking-tight"
          >
            Learn from the <span className="text-primary italic">Best.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg md:text-xl leading-relaxed"
          >
            Our educators aren't just academics; they are industry leaders, founders, and experts who have shaped the modern business landscape.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {educators.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-square rounded-[3.5rem] overflow-hidden mb-8 shadow-2xl border-4 border-border transition-all duration-500 group-hover:rounded-[2.5rem]">
                <Image
                  src={edu.image}
                  alt={edu.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4 backdrop-blur-xs">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-background text-primary rounded-full flex items-center justify-center shadow-xl hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin size={20} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-background text-primary rounded-full flex items-center justify-center shadow-xl hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Twitter size={20} />
                  </motion.button>
                </div>
              </div>

              <div className="text-center px-4">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {edu.name}
                </h3>
                <div className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-bold mb-3">
                  {edu.role}
                </div>
                <p className="text-muted-foreground text-sm font-medium leading-relaxed italic">
                  {edu.specialization}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
