'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export const Mentors = () => {
  const mentors = [
    {
      name: "Alex Rivera",
      company: "Google",
      role: "Product Manager",
      image: "https://picsum.photos/seed/alex/400/400"
    },
    {
      name: "Jessica Wu",
      company: "Amazon",
      role: "Senior Analyst",
      image: "https://picsum.photos/seed/jessica/400/400"
    },
    {
      name: "Marcus Thorne",
      company: "Tesla",
      role: "Operations Lead",
      image: "https://picsum.photos/seed/marcus/400/400"
    },
    {
      name: "Sophia Lee",
      company: "Microsoft",
      role: "Marketing Director",
      image: "https://picsum.photos/seed/sophia/400/400"
    }
  ];

  return (
    <section id="mentors" className="py-32 px-6 bg-secondary/10 w-full">
      <div className="w-full">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif mb-6"
          >
            Mentors from Top Tier Companies
          </motion.h2>
          <p className="text-muted-foreground text-xl">Get direct guidance from industry leaders who&apos;ve been there.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {mentors.map((mentor, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-card rounded-[2.5rem] p-8 shadow-2xl border border-border/50 relative group"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center shadow-xl z-10">
                <Quote size={20} />
              </div>
              
              <div className="flex flex-col items-center text-center mb-6">
                <div className="relative w-28 h-28 rounded-3xl overflow-hidden shadow-lg mb-6">
                  <Image 
                    src={mentor.image} 
                    alt={mentor.name} 
                    fill 
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{mentor.name}</h3>
                  <p className="text-primary font-semibold">{mentor.company}</p>
                </div>
              </div>

              <p className="text-muted-foreground italic text-sm leading-relaxed text-center">
                &quot;Direct guidance from industry leaders who&apos;ve been there.&quot;
              </p>
              
              <div className="mt-6 pt-6 border-t border-border flex items-center justify-center">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{mentor.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
