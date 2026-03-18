'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Linkedin, Twitter } from 'lucide-react';

export const Educators = () => {
  const educators = [
    {
      name: "Dr. Sarah Johnson",
      role: "Strategic Management",
      image: "https://picsum.photos/seed/sarah/400/400"
    },
    {
      name: "Prof. Michael Chen",
      role: "Digital Marketing",
      image: "https://picsum.photos/seed/michael/400/400"
    },
    {
      name: "Dr. Elena Rodriguez",
      role: "Financial Analysis",
      image: "https://picsum.photos/seed/elena/400/400"
    },
    {
      name: "Prof. David Smith",
      role: "Operations Excellence",
      image: "https://picsum.photos/seed/david/400/400"
    }
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
            Learn from the Best
          </motion.h2>
          <p className="text-muted-foreground text-xl">Academic excellence meets real-world expertise.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {educators.map((edu, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-square rounded-[2.5rem] overflow-hidden mb-6 shadow-2xl">
                <Image 
                  src={edu.image} 
                  alt={edu.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  <motion.button whileHover={{ scale: 1.2 }} className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center shadow-xl">
                    <Linkedin size={20} />
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.2 }} className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center shadow-xl">
                    <Twitter size={20} />
                  </motion.button>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-1">{edu.name}</h3>
                <p className="text-primary font-medium">{edu.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
