"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, CheckCircle2, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { syllabusData } from "./syllabusData";


const SemesterCard = ({ semester, isActive, onClick, hasSpecial }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ translateY: -2 }}
    className={`w-full p-5 lg:p-6 rounded-xl lg:rounded-2xl transition-all border-2 flex justify-between items-center group ${
      isActive
        ? "bg-primary/20 border-primary shadow-lg"
        : "bg-card border-border hover:border-primary/50 hover:bg-card/80 hover:shadow-md dark:bg-neutral-900/40"
    }`}
  >
    <div className="flex items-center gap-3 text-left">
      <div className={`w-2 h-2 rounded-full transition-colors ${isActive ? "bg-primary" : "bg-border group-hover:bg-primary"}`} />
      <div>
        <h3 className={`text-base lg:text-lg font-bold transition-colors ${isActive ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
          {semester}
        </h3>
        {hasSpecial && <span className="text-xs font-bold text-primary mt-1 block uppercase">✓ Industry Integrated</span>}
      </div>
    </div>
    <motion.div animate={{ rotate: isActive ? 180 : 0 }} transition={{ duration: 0.2 }}>
      <ChevronDown className={`h-4 w-4 lg:h-5 lg:w-5 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
    </motion.div>
  </motion.button>
);

const CourseList = ({ courses, color = "primary" }) => (
  <ul className="space-y-3 lg:space-y-4">
    {courses.map((course, i) => (
      <motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className="flex items-start gap-3 group">
        <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 group-hover:scale-150 transition-all ${color === "primary" ? "bg-primary" : "bg-secondary"}`} />
        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors font-medium">{course}</span>
      </motion.li>
    ))}
  </ul>
);

const ContentSection = ({ title, courses, color = "primary" }) => (
  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6 ${color === "primary" ? "bg-primary/15 text-primary" : "bg-secondary/15 text-secondary"}`}>
      <BookOpen size={14} />
      {title}
    </div>
    <CourseList courses={courses} color={color} />
  </motion.div>
);

const MobileSection = ({ item, index, isOpen, onToggle }) => (
  <motion.div key={index} className={`border rounded-xl lg:rounded-2xl overflow-hidden transition-all ${isOpen ? "border-primary shadow-lg bg-card" : "border-border dark:border-neutral-800 bg-background"}`}>
    <button onClick={onToggle} className="w-full text-left p-4 lg:p-5 flex justify-between items-center hover:bg-muted/30 dark:hover:bg-neutral-900/40 transition-colors">
      <div className="flex flex-col gap-1">
        <h3 className={`text-lg lg:text-xl font-bold ${isOpen ? "text-primary" : "text-foreground"}`}>{item.semester}</h3>
        {item.special && <span className="text-xs font-bold text-primary uppercase">✓ Industry Integrated</span>}
      </div>
      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
        <ChevronDown className={`h-5 w-5 lg:h-6 lg:w-6 ${isOpen ? "text-primary" : "text-muted-foreground"}`} />
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
          <div className="p-4 lg:p-5 border-t border-border dark:border-neutral-800 bg-card/50 dark:bg-neutral-900/30 space-y-6 lg:space-y-8">
            <ContentSection title={item.trackFocus.title} courses={item.trackFocus.courses} color="primary" />
            <div className="border-t border-border dark:border-neutral-800 pt-6 lg:pt-8">
              <ContentSection title={item.coreSubjects.title} courses={item.coreSubjects.courses} color="secondary" />
            </div>
            {item.special && (
              <div className="bg-primary/10 dark:bg-primary/15 border border-primary/30 p-4 rounded-lg flex items-start gap-3">
                <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                <p className="text-foreground dark:text-neutral-100 text-xs lg:text-sm font-bold">{item.special}</p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

// Main Component
export const Syllabus = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [leftHeight, setLeftHeight] = useState(null);
  const leftRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (leftRef.current) setLeftHeight(leftRef.current.getBoundingClientRect().height);
    }, 100);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const current = syllabusData[activeIndex];

  return (
    <section id="syllabus" className="py-20 lg:py-24 bg-background dark:bg-neutral-950 w-full relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-72 h-72 bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-72 h-72 bg-secondary/5 dark:bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-16 max-w-2xl mx-auto">
          <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-primary font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 block">
            Curriculum
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-xl sm:text-3xl md:text-2xl lg:text-4xl xl:text-5xl font-serif font-extrabold mb-4 md:mb-6 tracking-tight dark:text-neutral-50">
            Digital Marketing <span className="text-primary italic">Curriculum.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-muted-foreground dark:text-neutral-400 text-xs sm:text-sm md:text-base leading-relaxed">
            Industry-relevant BBA program designed to ensure you are job-ready from day one.
          </motion.p>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-3 lg:space-y-4">
          {syllabusData.map((item, i) => (
            <MobileSection key={i} item={item} index={i} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex flex-row gap-6 xl:gap-12 max-w-5xl mx-auto items-stretch">
          {/* Sidebar */}
          <div className="w-full max-w-xs" ref={leftRef}>
            <div className="bg-card dark:bg-neutral-900/50 p-5 lg:p-5 rounded-2xl lg:rounded-3xl shadow-xl border border-border dark:border-neutral-800 sticky top-28 backdrop-blur-sm">
              <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-8 pb-3 lg:pb-4 border-b border-border dark:border-neutral-800 flex items-center gap-3 text-foreground dark:text-neutral-50">
                <BookOpen size={20} className="text-primary" />
                Digital Marketing
              </h3>
              <div className="space-y-2 lg:space-y-3">
                {syllabusData.map((item, i) => (
                  <SemesterCard key={i} semester={item.semester} isActive={activeIndex === i} onClick={() => setActiveIndex(i)} hasSpecial={item.special} />
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div key={activeIndex} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="bg-card dark:bg-neutral-900/50 rounded-2xl lg:rounded-3xl shadow-xl border border-border dark:border-neutral-800 p-5 lg:p-5 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-8 lg:mb-10">
                  <div className="w-12 h-12 rounded-lg lg:rounded-xl bg-primary/20 dark:bg-primary/30 flex items-center justify-center text-primary">
                    <CheckCircle2 size={24} />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-serif font-bold text-foreground dark:text-neutral-50">{current.semester}</h2>
                </div>

                <div className="space-y-6 lg:space-y-6">
                  <ContentSection title={current.trackFocus.title} courses={current.trackFocus.courses} color="primary" />
                  <div className="border-t border-border dark:border-neutral-800 pt-8 lg:pt-8">
                    <ContentSection title={current.coreSubjects.title} courses={current.coreSubjects.courses} color="secondary" />
                  </div>
                  {current.special && (
                    <div className="bg-linear-to-r from-primary/15 to-primary/5 dark:from-primary/20 dark:to-primary/10 border border-primary/30 dark:border-primary/20 p-6 lg:p-8 rounded-xl lg:rounded-2xl flex items-start gap-4">
                      <CheckCircle2 size={24} className="text-primary mt-1 shrink-0" />
                      <p className="text-foreground dark:text-neutral-100 text-base lg:text-lg font-bold">{current.special}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

