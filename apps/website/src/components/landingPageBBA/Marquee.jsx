'use client';

import React from 'react';
import { motion } from 'motion/react';

export const Marquee = () => {
  const partners = [
    "Google", "Amazon", "Tesla", "Microsoft", "Meta", "Apple", "Netflix", "Adobe", "Salesforce", "Intel"
  ];

  return (
    <section className="py-20 bg-muted/30 overflow-hidden border-y border-border/50 w-full">
      <div className="w-full px-6 mb-10 text-center">
        <h3 className="text-muted-foreground font-bold uppercase tracking-[0.3em] text-sm">
          Trusted by Industry Leaders
        </h3>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap py-4"
        >
          {[...partners, ...partners].map((partner, index) => (
            <div 
              key={index} 
              className="mx-12 text-4xl md:text-6xl font-serif font-black text-muted-foreground/20 hover:text-primary/40 transition-colors cursor-default"
            >
              {partner}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
