"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Star, Users, TrendingUp, Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FSDHero() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-16 md:py-24 lg:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-secondary/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary"
        >
          <Star size={12} className="fill-current text-secondary" />
          6-Month On-Job Training · Full-Stack Web Development
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Go from{" "}
          <span className="italic text-primary">Zero to Hired</span>
          <br className="hidden sm:block" /> Full-Stack Developer
          <br className="hidden sm:block" />
          <span className="text-3xl font-bold text-muted-foreground sm:text-4xl md:text-5xl">
            in 6 Months.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Built for graduates who learned theory but can&apos;t build anything — and for anyone stuck in a dead-end job who wants into tech.
          You leave with <strong className="text-foreground">4 deployed projects</strong>, a GitHub profile employers trust, and a job offer.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="w-full rounded-full bg-primary px-8 py-6 text-sm font-extrabold text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:scale-105 hover:bg-primary/90 sm:w-auto"
          >
            <Link href="/contact">
              Apply for Free Demo Class <ArrowRight size={17} className="ml-2" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full rounded-full border-2 border-border bg-foreground/5 px-8 py-6 text-sm font-bold text-foreground transition-all hover:scale-105 hover:bg-foreground/10 sm:w-auto"
          >
            <Link href="/contact">
              <Download size={16} className="mr-2" /> Download Curriculum
            </Link>
          </Button>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <TrendingUp size={15} className="text-primary" />
            <span><strong className="text-foreground">95%</strong> Placement Rate</span>
          </div>
          <div className="h-4 w-px bg-border hidden sm:block" />
          <div className="flex items-center gap-2 text-muted-foreground">
            <TrendingUp size={15} className="text-primary" />
            <span>Avg. Package <strong className="text-foreground">₹4.5 LPA</strong></span>
          </div>
          <div className="h-4 w-px bg-border hidden sm:block" />
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users size={15} className="text-primary" />
            <span><strong className="text-foreground">1200+</strong> Students Placed</span>
          </div>
          <div className="h-4 w-px bg-border hidden sm:block" />
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar size={15} className="text-primary" />
            <span>Next Batch: <strong className="text-foreground">April 2026</strong> · <span className="text-red-500 font-bold">8 seats left</span></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
