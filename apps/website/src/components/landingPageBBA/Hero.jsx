"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Star, Play, CheckCircle } from "lucide-react";
import Image from "next/image";
import { LampContainer } from "../ui/lamp";
import { Button } from "@/components/ui/button";

export const BBAHero = () => {
  return (
    <section id="hero" className="w-full relative bg-background overflow-hidden h-screen min-h-[700px]">
      <LampContainer className="h-full">
        <div className="w-full max-w-7xl mx-auto px-6 flex flex-col justify-center h-full z-10 relative mt-10 md:mt-24 lg:mt-32">
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 w-full items-center">
            {/* Left Column: Content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Top Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 text-primary border border-primary/20 text-xs sm:text-sm font-bold mb-6 backdrop-blur-sm"
              >
                <Star size={16} className="fill-current text-secondary" />
                <span>India's #1 Skill-Based BBA Program</span>
              </motion.div>

              {/* Heading Section */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] leading-[1.05] tracking-tighter text-foreground font-extrabold"
              >
                The <span className="text-primary italic">Future</span> of <br/> Business Education.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
              >
                Skip the ordinary. Gain <span className="text-foreground font-bold">On-Job Training</span> and industry certifications while pursuing your degree.
              </motion.p>

              {/* CTA Group */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="rounded-full bg-primary text-primary-foreground px-8 py-6 text-lg font-extrabold hover:bg-primary/90 hover:scale-105 shadow-xl shadow-primary/20 transition-all w-full sm:w-auto"
                >
                  Apply Now <ArrowRight size={20} className="ml-2" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-2 border-border bg-foreground/5 text-foreground px-8 py-6 text-lg font-bold hover:bg-foreground/10 hover:scale-105 transition-all w-full sm:w-auto"
                >
                  <Play size={20} className="mr-2 fill-current" /> Watch Demo
                </Button>
              </motion.div>
            </div>

            {/* Right Column: DGM Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative w-full aspect-video lg:aspect-4/3 rounded-3xl overflow-hidden border-4 md:border-8 border-foreground/5 shadow-2xl group"
            >
              <Image
                src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1200"
                alt="Digital Marketing Presentation"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/10 to-transparent" />
            </motion.div>
          </div>

          {/* Feature Grid below Hero */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 w-full mt-10 md:mt-16 pb-8"
          >
            {[
              { title: "Placement Guaranteed", desc: "Up to 20 LPA packages with 45+ hiring partners." },
              { title: "Elite Mentorship", desc: "Learn directly from CXOs and industry veterans." },
              { title: "Global Opportunities", desc: "Access to international internships and network." },
            ].map((feature, i) => (
              <div key={i} className="flex items-center sm:items-start text-left gap-4 p-4 lg:p-5 rounded-2xl bg-foreground/5 border border-border hover:bg-foreground/10 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle size={22} />
                </div>
                <div>
                  <h3 className="text-base lg:text-lg font-bold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </LampContainer>
    </section>
  );
}