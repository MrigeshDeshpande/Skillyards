'use client';

import React from 'react';
import { CometCard } from "@/components/ui/comet-card";

export const Benefits = () => {
  const benefits = [
    {
      gradient: "from-blue-500 to-cyan-500",
      title: "Career Growth",
      description: "Our graduates see an average salary increase of 40% within the first year of completion."
    },
    {
      gradient: "from-purple-500 to-pink-500",
      title: "Industry Certified",
      description: "Curriculum designed and certified by top industry leaders and global business schools."
    },
    {
      gradient: "from-orange-500 to-red-500",
      title: "Fast-Track Learning",
      description: "Intensive modules designed to get you job-ready in record time without compromising quality."
    }
  ];

  return (
    <section id="benefits" className="py-[10vh] md:py-[15vh] px-4 sm:px-6 bg-linear-to-b from-background/50 to-background dark:from-neutral-900 dark:to-neutral-950 w-full">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-foreground dark:text-neutral-50"
          >
            Why Choose SkillYards?
          </h2>
          <p
            className="text-muted-foreground dark:text-neutral-400 text-sm sm:text-base md:text-lg max-w-4xl mx-auto mt-4"
          >
            We provide more than just education. We provide a launchpad for your professional success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <CometCard key={index} className="w-full h-full" rotateDepth={3} translateDepth={8}>
              <div
                className="group bg-card dark:bg-neutral-800 text-card-foreground dark:text-neutral-100 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-border/50 dark:border-neutral-700 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 dark:hover:shadow-primary/10 transition-all duration-500 w-full h-full flex flex-col overflow-hidden"
              >
                <div className={`w-full h-40 md:h-48 relative mb-6 md:mb-8 rounded-xl overflow-hidden group-hover:shadow-lg transition-shadow duration-500 flex-shrink-0 bg-gradient-to-br ${benefit.gradient} group-hover:scale-105 transition-transform duration-500`} />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 text-foreground dark:text-neutral-50">{benefit.title}</h3>
                <p className="text-muted-foreground dark:text-neutral-400 text-sm md:text-base leading-relaxed">{benefit.description}</p>
              </div>
            </CometCard>
          ))}
        </div>
      </div>
    </section>
  );
};
