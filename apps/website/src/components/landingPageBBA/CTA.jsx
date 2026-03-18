"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3.5rem] p-12 lg:p-24 text-center overflow-hidden bg-primary shadow-2xl shadow-primary/20"
        >
          {/* Animated Background Gradients */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 45, 0],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/2 -left-1/4 w-full h-full bg-white rounded-full blur-[120px]"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -45, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-secondary rounded-full blur-[150px]"
            />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 text-primary-foreground text-sm font-bold mb-10 backdrop-blur-md border border-white/20"
            >
              <Sparkles size={16} className="text-secondary" />
              <span>Limited Seats Available for 2026 Batch</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl lg:text-8xl font-serif text-white mb-8 leading-[1.05] tracking-tighter font-extrabold px-4">
              Ready to Transform <br /> Your <span className="italic text-secondary">Future?</span>
            </h2>

            <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-14 max-w-2xl mx-auto leading-relaxed">
              Skip the ordinary. Join the only BBA program designed to build <span className="font-bold text-white">industry-ready leadership</span> and digital mastery.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full bg-white text-primary px-12 py-8 text-xl font-extrabold hover:bg-secondary hover:text-secondary-foreground transition-all hover:scale-105 shadow-xl shadow-black/20"
              >
                Enroll Now <ArrowRight size={22} className="ml-2" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto rounded-full border-2 border-white/30 bg-transparent text-white px-12 py-8 text-xl font-bold hover:bg-white/10 transition-all hover:scale-105"
              >
                <Calendar size={22} className="mr-2" /> Talk to Advisor
              </Button>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10 w-full flex flex-col sm:flex-row items-center justify-center gap-8 opacity-60">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-secondary" />
                <span className="text-white text-sm font-bold tracking-wider uppercase">Placement Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-secondary" />
                <span className="text-white text-sm font-bold tracking-wider uppercase">Direct Mentorship</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-secondary" />
                <span className="text-white text-sm font-bold tracking-wider uppercase">Global Exposure</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Help helper for the checkmark icon since I missed it in the imports earlier
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
