"use client";

import React from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Help helper for the checkmark icon
const CheckCircle2 = ({ size, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const BBA_CTA = () => {
  return (
    <section className="py-[8vh] md:py-[12vh] min-h-[60vh] md:min-h-screen w-full bg-background dark:bg-neutral-950 relative overflow-hidden flex items-center">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative p-6 sm:p-8 md:p-12 lg:p-20 text-center overflow-hidden bg-primary dark:bg-primary/90 rounded-3xl shadow-2xl shadow-primary/30"
        >
          {/* Animated Background Gradients */}
          <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10 pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 45, 0],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/2 -left-1/4 w-full h-full bg-primary-foreground rounded-full blur-[100px] md:blur-[120px]"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -45, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-secondary rounded-full blur-[120px] md:blur-[150px]"
            />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-xs sm:text-sm font-bold mb-6 md:mb-10 backdrop-blur-md border border-primary-foreground/20"
            >
              <Sparkles size={14} className="text-secondary" />
              <span>Limited Seats Available for 2026 Batch</span>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-primary-foreground mb-6 md:mb-8 leading-[1.1] tracking-tighter font-extrabold px-3">
              Ready to Transform <br /> Your <span className="italic text-secondary">Future?</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-3">
              Skip the ordinary. Join the only BBA program designed to build <span className="font-bold text-primary-foreground">industry-ready leadership</span> and digital mastery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto items-center mb-8 md:mb-12">
              <Button
                size="xl"
                className="w-full sm:w-auto rounded-full bg-primary-foreground dark:bg-neutral-100 text-primary dark:text-primary px-8 md:px-16 py-5 md:py-6 text-[0.9375rem] md:text-lg font-extrabold hover:bg-secondary dark:hover:bg-secondary hover:text-secondary-foreground transition-all hover:scale-105 shadow-xl shadow-black/20"
              >
                Enroll Now <ArrowRight size={20} className="ml-2" />
              </Button>

              <Button
                size="xl"
                variant="outline"
                className="w-full sm:w-auto rounded-full border-2 border-primary-foreground/40 dark:border-neutral-300/40 bg-transparent text-primary-foreground dark:text-neutral-100 px-6 md:px-12 py-5 md:py-6 text-[0.9375rem] md:text-lg font-bold hover:bg-primary-foreground/10 dark:hover:bg-neutral-100/10 transition-all hover:scale-105"
              >
              Talk to Advisor
              </Button>
            </div>

            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-primary-foreground/10 w-full flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 opacity-60 flex-wrap">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-secondary shrink-0" />
                <span className="text-primary-foreground text-xs md:text-sm font-bold tracking-wider uppercase">Placement Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-secondary shrink-0" />
                <span className="text-primary-foreground text-xs md:text-sm font-bold tracking-wider uppercase">Direct Mentorship</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-secondary" />
                <span className="text-primary-foreground text-sm font-bold tracking-wider uppercase">Global Exposure</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

