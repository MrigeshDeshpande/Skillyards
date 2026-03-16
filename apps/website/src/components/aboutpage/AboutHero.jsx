"use client";

import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroData from "@/data/aboutpage/hero.json";

export default function AboutHero() {
  const data = heroData[0];

  if (!data) return null;

  return (
    <section className="relative overflow-hidden bg-background text-foreground py-20 sm:py-32 lg:py-28">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 blur-[100px] rounded-full translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col space-y-8 text-center lg:text-left z-10"
          >
            <div className="inline-block mx-auto lg:mx-0">
              <Breadcrumbs />
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.05] text-foreground">
                {data.title}{" "}
                <span className="relative inline-block text-primary italic">
                  {data.highlight}
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary/30 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0 10 Q 25 20 50 10 T 100 10" stroke="currentColor" strokeWidth="4" fill="transparent" />
                  </svg>
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-primary/80 tracking-tight">
                {data.tagline}
              </p>
            </div>

            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              <p>{data.description1}</p>
              <p>{data.description2}</p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
              <a
                href={data.primaryCTA.link}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl
                bg-primary text-primary-foreground font-bold text-lg
                hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10">{data.primaryCTA.text}</span>
                <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </a>

              <a
                href={data.secondaryCTA.link}
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl
                border-2 border-primary/10 bg-background/50 backdrop-blur-md
                font-bold text-lg text-foreground hover:bg-muted hover:border-primary/20 transition-all hover:-translate-y-1"
              >
                {data.secondaryCTA.text}
              </a>
            </div>
          </motion.div>

          {/* Right Side: Slanted Image Design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 1.5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative lg:h-[600px] flex items-center justify-center pt-8 lg:pt-0"
          >
            {/* Decorative Frames - Slightly slanted */}
            <div className="absolute inset-0 border-2 border-primary/10 rounded-[3rem] -rotate-3 scale-95 pointer-events-none" />
            <div className="absolute inset-0 bg-secondary/10 rounded-[3rem] rotate-2 scale-105 -z-10 pointer-events-none" />

            {/* Main Slanted Container - Subtle 2deg rotation */}
            <div className="relative w-full aspect-4/5 sm:aspect-video lg:h-full lg:w-full rotate-2 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/50 dark:border-neutral-800/50">
              <div className="absolute inset-0 -rotate-2 scale-110">
                <Image
                  src={data.image}
                  alt="SkillYards Career Training"
                  fill
                  priority
                  className="object-cover"
                />
                {/* Visual Overlays */}
                <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent mix-blend-overlay" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}