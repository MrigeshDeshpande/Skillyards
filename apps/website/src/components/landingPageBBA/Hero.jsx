"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Star, Play, CheckCircle } from "lucide-react";
import Image from "next/image";
import { LampContainer } from "../ui/lamp";
import { Button } from "@/components/ui/button";

export const BBAHero = () => {
  return (
    <section id="hero" className="w-full relative bg-background overflow-hidden min-h-screen py-6 md:py-12 lg:py-16">
      <LampContainer className="h-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-center h-full z-10 relative mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 w-full items-center">
            {/* Left Column: Content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Top Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-foreground/5 dark:bg-neutral-900/40 text-primary border border-primary/20 text-xs sm:text-sm font-bold mb-4 md:mb-6 backdrop-blur-sm"
              >
                <Star size={14} className="fill-current text-secondary shrink-0" />
                <span>India's #1 Skill-Based BBA Program</span>
              </motion.div>

              {/* Heading Section */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-[1.05] md:leading-[1.1] tracking-tighter text-foreground dark:text-neutral-50 font-extrabold"
              >
                The <span className="text-primary italic">Future</span> of <br/> Business Education.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-muted-foreground dark:text-neutral-400 max-w-xl leading-relaxed"
              >
                Skip the ordinary. Gain <span className="text-foreground dark:text-neutral-50 font-bold">On-Job Training</span> and industry certifications while pursuing your degree.
              </motion.p>

              {/* CTA Group */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="rounded-full bg-primary dark:bg-primary/90 text-primary-foreground px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-extrabold hover:bg-primary/90 dark:hover:bg-primary/80 hover:scale-105 shadow-xl shadow-primary/20 transition-all w-full sm:w-auto"
                >
                  Apply Now <ArrowRight size={18} className="ml-2 shrink-0" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-2 border-border dark:border-neutral-700 bg-foreground/5 dark:bg-neutral-900/40 text-foreground dark:text-neutral-100 px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-bold hover:bg-foreground/10 dark:hover:bg-neutral-800/80 hover:scale-105 transition-all w-full sm:w-auto"
                >
                  <Play size={18} className="mr-2 fill-current shrink-0" /> Watch Demo
                </Button>
              </motion.div>
            </div>

            {/* Right Column: DGM Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative w-full aspect-video lg:aspect-4/3 rounded-2xl md:rounded-3xl overflow-hidden border-4 md:border-8 border-foreground/5 dark:border-neutral-800 shadow-2xl group mt-6 lg:mt-0"
            >
              <Image
                src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1200"
                alt="Digital Marketing Presentation"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 dark:from-neutral-950/90 via-background/10 dark:via-neutral-900/10 to-transparent" />
            </motion.div>
          </div>

          {/* Feature Grid below Hero */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 w-full mt-8 md:mt-12 lg:mt-16 pb-6 md:pb-8"
          >
            {[
              { title: "Placement Guaranteed", desc: "Up to 20 LPA packages with 45+ hiring partners." },
              { title: "Elite Mentorship", desc: "Learn directly from CXOs and industry veterans." },
              { title: "Global Opportunities", desc: "Access to international internships and network." },
            ].map((feature, i) => (
              <div key={i} className="flex items-center sm:items-start text-left gap-3 md:gap-4 p-3 md:p-4 lg:p-5 rounded-xl md:rounded-2xl bg-foreground/5 dark:bg-neutral-900/30 border border-border dark:border-neutral-700 hover:bg-foreground/10 dark:hover:bg-neutral-800/50 transition-colors group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/20 dark:bg-primary/30 flex items-center justify-center text-primary dark:text-primary/80 shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle size={20} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm md:text-base lg:text-lg font-bold text-foreground dark:text-neutral-100 mb-0.5 md:mb-1">{feature.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground dark:text-neutral-400">{feature.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </LampContainer>
    </section>
  );
}
