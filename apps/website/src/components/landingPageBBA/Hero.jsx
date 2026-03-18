'use client';

import React from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';
import { motion } from 'motion/react';

import Image from 'next/image';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background w-full">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-secondary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="w-full px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-bold mb-8 shadow-sm"
          >
            <Star size={16} className="fill-current" />
            <span>Top Rated BBA Program 2026</span>
          </motion.div>

          <h1 className="font-serif text-6xl md:text-8xl text-foreground mb-8 leading-[0.9] tracking-tighter">
            Build Your <span className="text-primary italic">Future</span> in Business.
          </h1>

          <p className="font-sans text-xl md:text-2xl text-muted-foreground mb-12 max-w-xl leading-relaxed">
            Accelerate your career with our industry-led BBA program. Gain practical skills, elite mentorship, and global opportunities.
          </p>

          <div className="flex flex-wrap gap-6">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(20, 36, 138, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground rounded-2xl px-10 py-5 font-bold text-xl flex items-center justify-center gap-3 transition-all"
            >
              Start Your Journey <ArrowRight size={24} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 text-foreground font-bold text-xl group"
            >
              <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Play size={20} className="fill-current ml-1" />
              </div>
              Watch Demo
            </motion.button>
          </div>

          <div className="mt-16 flex items-center gap-8">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-background overflow-hidden bg-muted relative">
                  <Image
                    src={`https://picsum.photos/seed/user${i}/100/100`}
                    alt="User"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
            <div>
              <div className="font-bold text-lg">5,000+ Students</div>
              <div className="text-muted-foreground text-sm">Already joined the revolution</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white dark:border-zinc-800 aspect-[4/5]">
            <Image
              src="https://picsum.photos/seed/business/800/1000"
              alt="Business Student"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Floating Stats Card */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 z-20 bg-card p-6 rounded-2xl shadow-2xl border border-border max-w-[200px]"
          >
            <div className="text-primary font-serif text-4xl font-bold mb-1">95%</div>
            <div className="text-muted-foreground text-sm font-medium">Placement success rate for 2025 batch</div>
          </motion.div>

          {/* Decorative Circle */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary rounded-full -z-10 blur-2xl opacity-50" />
        </motion.div>
      </div>
    </section>
  );
};
