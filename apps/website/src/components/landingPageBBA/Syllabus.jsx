"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronRight, ChevronDown, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// -----------------Data ------------------
const syllabusData = {
  fullstack: [
    {
      semester: "1st Semester",
      trackFocus: {
        title: "Digital Marketing Focus (Months 1–4)",
        courses: [
          "Digital Marketing Fundamentals",
          "WordPress Website Development",
          "Search Engine Optimization (SEO)",
          "Google Search Console, Analytics & SEO Reporting",
          "Google Ads (Search Engine Marketing)",
          "Social Media (Paid Ads)",
          "Social Media Marketing (Organic)"
        ]
      },
      coreSubjects: {
        title: "BBA Academic Focus (Months 5–6)",
        courses: [
          "Business Organization",
          "Business Mathematics",
          "Business Communication 1",
          "Fundamentals of Computers & IT",
          "Fundamentals of Accounting",
          "Business Environment"
        ]
      }
    },
    {
      semester: "2nd Semester",
      trackFocus: {
        title: "Digital Marketing Focus (Months 1–4)",
        courses: [
          "Content Writing & Copywriting",
          "Email Marketing",
          "Marketing Automation",
          "Video Editing",
          "Interview Preparation",
          "Graphic Designing Using Canva",
          "E-Commerce Landscape & Strategies (Affiliate Marketing)"
        ]
      },
      coreSubjects: {
        title: "BBA Academic Focus (Months 5–6)",
        courses: [
          "Management Thoughts & Philosophy",
          "Micro-Economics for Business",
          "Cost Accounting",
          "Legal & Regulatory Framework of Business",
          "Business Communication 2",
          "Business Statistics"
        ]
      }
    },
    {
      semester: "3rd Semester",
      trackFocus: {
        title: "Digital Marketing Focus (Months 1–4)",
        courses: [
          "Drop Shipping / Shopify / Amazon / Flipkart Store",
          "Lead Funnel (AIDA Model & Others)",
          "AI-Driven Growth Hacking",
          "International Freelancing",
          "Ads on OTT Platforms",
          "Online Reputation Management (ORM)",
          "Inbound Marketing Strategies"
        ]
      },
      coreSubjects: {
        title: "BBA Academic Focus (Months 5–6)",
        courses: [
          "Company Law",
          "Marketing Management",
          "Macro-Economics for Business",
          "Principles of Management",
          "Organizational Behaviour",
          "Management Accounting"
        ]
      }
    },
    {
      semester: "4th Semester",
      trackFocus: {
        title: "Digital Marketing Focus (Months 1–4)",
        courses: [
          "Integrated Digital Marketing Strategy",
          "Media Buying",
          "Influencer Marketing Strategies",
          "Native Advertising (Taboola, Outbrain)",
          "Data-Driven Decisions (Power BI)",
          "Digital Marketing Agency Creation",
          "Management & Strategy Models"
        ]
      },
      coreSubjects: {
        title: "BBA Academic Focus (Months 5–6)",
        courses: [
          "Financial Management",
          "Project Management & Planning",
          "Research Methodology",
          "Human Resource Management",
          "Taxation Laws",
          "Production & Operations Management"
        ]
      }
    },
    {
      semester: "5th Semester",
      trackFocus: {
        title: "Internship & Portfolio Development (Months 1–4)",
        courses: [
          "Capstone Projects",
          "Real-Client Freelancing Work",
          "Internship with Performance Reporting",
          "LinkedIn & Portfolio Finalization",
          "Resume Showcasing Digital + Core Skills"
        ]
      },
      coreSubjects: {
        title: "BBA Academic Focus (Months 5–6)",
        courses: [
          "Operations Research",
          "Sales & Distribution Management",
          "Business Policy",
          "Entrepreneurship Development"
        ]
      },
      special: "Industry-Integrated BBA Final Year with Guaranteed Placement"
    },
    {
      semester: "6th Semester",
      trackFocus: {
        title: "Career Acceleration (Months 1–4)",
        courses: [
          "Personal Branding & Job Hunt Strategy",
          "Mock Interviews with Industry Experts",
          "Final Freelancing Projects",
          "Networking & Client Outreach Campaigns",
          "Certification Finalization"
        ]
      },
      coreSubjects: {
        title: "BBA Academic Focus (Months 5–6)",
        courses: [
          "E-Commerce",
          "Advertising Management",
          "Management of Financial Institutions & Services",
          "International Business Management",
          "Major Project"
        ]
      },
      special: "Industry-Integrated BBA Final Year with Guaranteed Placement"
    }
  ],
  android: [
    {
      semester: "1st Semester",
      trackFocus: {
        title: "Foundations in Data Analytics (Months 1–4)",
        courses: [
          "Foundations of Data Analytics",
          "Data types, OLAP, MIS, Warehousing, Statistics",
          "Mastering SQL for Data Analytics",
          "CRUD operations, Joins, Subqueries, Optimization",
          "Advanced Excel Techniques for Analytics",
          "Pivot tables, Dashboards, Lookup functions"
        ]
      },
      coreSubjects: {
        title: "BBA Core Subjects (Months 5–6)",
        courses: [
          "Business Organization",
          "Business Mathematics",
          "Business Communication 2",
          "Fundamentals of Computers & Information Technology",
          "Fundamentals of Accounting",
          "Business Environment"
        ]
      }
    },
    {
      semester: "2nd Semester",
      trackFocus: {
        title: "Visualization and Programming Foundations (Months 1–4)",
        courses: [
          "Data Visualization with Power BI",
          "DAX, Data Models, KPI Metrics",
          "Python for Data Analysis",
          "Pandas, NumPy, EDA, Text Analysis"
        ]
      },
      coreSubjects: {
        title: "BCA Core Subjects (Months 5–6)",
        courses: [
          "Management Thoughts & Philosophy",
          "Micro-Economics for Business",
          "Cost Accounting",
          "Legal & Regulatory Framework of Business",
          "Business Communication 2",
          "Business Statistics"
        ]
      }
    },
    {
      semester: "3rd Semester",
      trackFocus: {
        title: "R Programming & BI Tools (Months 1–4)",
        courses: [
          "R Programming for Data Science",
          "ggplot, ANOVA, Correlation, Regression",
          "Business Intelligence with Tableau",
          "Geo-mapping, Dashboards, LOD, Visual Analytics"
        ]
      },
      coreSubjects: {
        title: "BCA Core Subjects (Months 5–6)",
        courses: [
          "Company Law",
          "Marketing Management",
          "Macro-Economics for Business",
          "Principles of Management",
          "Organizational Behaviour",
          "Management Accounting"
        ]
      }
    },
    {
      semester: "4th Semester",
      trackFocus: {
        title: "Automation & Workflow Optimization (Months 1–4)",
        courses: [
          "Automating Tasks with VBA",
          "Macros, Event Handling, Forms",
          "Data Blending & Workflow Automation with Alteryx",
          "Joins, Filters, Data Sampling, Transformation"
        ]
      },
      coreSubjects: {
        title: "BCA Core Subjects (Months 5–6)",
        courses: [
          "Financial Management",
          "Project Management & Planning",
          "Research Methodology",
          "Human Resource Management",
          "Taxation Laws",
          "Production & Operations Management"
        ]
      }
    },
    {
      semester: "5th Semester",
      trackFocus: {
        title: "Applied Data Analytics & Strategy (Months 1–4)",
        courses: [
          "Capstone Projects & Hackathons",
          "Excel Dashboards, SQL + Power BI",
          "Python EDA Projects",
          "Case-Based Simulations, Industry Challenges"
        ]
      },
      coreSubjects: {
        title: "BCA Core Subjects (Months 5–6)",
        courses: [
          "Operations Research",
          "Sales & Distribution Management",
          "Business Policy",
          "Entrepreneurship Development"
        ]
      },
      special: "Industry-Integrated BBA Final Year with Guaranteed Placement"
    },
    {
      semester: "6th Semester",
      trackFocus: {
        title: "Career Launchpad & Analytics Specialization (Months 1–4)",
        courses: [
          "Personal Branding: Resume, LinkedIn, Interview Prep",
          "Industry Certification Preparation (e.g., Microsoft, Google Analytics)",
          "Final Data Analytics Portfolio Submission",
          "Optional Freelancing / Client-based Project Execution"
        ]
      },
      coreSubjects: {
        title: "BCA Core Subjects (Months 5–6)",
        courses: [
          "E-Commerce",
          "Advertising Management",
          "Management of Financial Institutions & Services",
          "International Business Management",
          "Major Project"
        ]
      },
      special: "Industry-Integrated BBA Final Year with Guaranteed Placement"
    }
  ]
};


const TrackToggle = ({ activeTrack, setActiveTrack }) => {
  return (
    <div className="flex justify-center mb-12">
      <div className="bg-muted p-1 rounded-full shadow-inner border border-border flex relative overflow-hidden">
        <button
          onClick={() => setActiveTrack("fullstack")}
          className={`relative px-2 py-3 rounded-full text-base md:text-sm font-medium transition-colors z-10 w-40 text-center ${
            activeTrack === "fullstack"
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Digital Marketing
        </button>
        <button
          onClick={() => setActiveTrack("android")}
          className={`relative px-2 py-3 rounded-full text-base md:text-sm font-medium transition-colors z-10 w-48 text-center ${
            activeTrack === "android"
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Business Analytics
        </button>
        <motion.div
          className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-primary rounded-full z-0 shadow-md"
          layout
          initial={false}
          animate={{
            x: activeTrack === "fullstack" ? 4 : "100%",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>
    </div>
  );
};

const SemesterButton = ({ semester, isActive, onClick, hasSpecial }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-5 rounded-xl transition-all mb-4 border-2 flex flex-col relative overflow-hidden group ${
        isActive
          ? "bg-card border-primary shadow-lg"
          : "bg-background border-border hover:border-primary/50 hover:bg-card hover:shadow-md"
      }`}
    >
      {hasSpecial && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
          Industry Integrated
        </div>
      )}
      <div className="flex justify-between items-center w-full mt-2">
        <h3 className={`text-lg font-bold transition-colors ${isActive ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
          {semester}
        </h3>
        <motion.div
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className={`h-5 w-5 ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"}`} />
        </motion.div>
      </div>
    </button>
  );
};

const SemesterContent = ({ semester, trackFocus, coreSubjects, special, maxHeight }) => {
  return (
    <div
      className="h-full bg-card rounded-2xl shadow-2xl p-8 lg:p-10 border border-border overflow-y-auto custom-scrollbar relative"
      style={maxHeight ? { maxHeight, height: '100%' } : {}}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] pointer-events-none" />
      
      <h2 className="text-3xl font-serif font-bold mb-8 text-foreground border-b border-border pb-6 flex items-center gap-3">
        <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
          <CheckCircle size={18} />
        </span>
        {semester}
      </h2>

      <div className="mb-10">
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider mb-6">
          {trackFocus.title}
        </div>
        <ul className="space-y-4">
          {trackFocus.courses.map((course, index) => (
            <li key={index} className="flex items-start gap-3 group">
              <div className="min-w-[6px] h-[6px] rounded-full bg-primary mt-2.5 opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all" />
              <span className="text-lg text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                {course}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-bold uppercase tracking-wider mb-6">
          {coreSubjects.title}
        </div>
        <ul className="space-y-4">
          {coreSubjects.courses.map((course, index) => (
            <li key={index} className="flex items-start gap-3 group">
              <div className="min-w-[6px] h-[6px] rounded-full bg-secondary mt-2.5 opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all" />
              <span className="text-lg text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                {course}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {special && (
        <div className="mt-10 bg-primary/5 border border-primary/20 p-5 rounded-xl flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
            <CheckCircle size={20} />
          </div>
          <p className="text-foreground font-bold">{special}</p>
        </div>
      )}
    </div>
  );
};

// -----------------Main Component ------------------
export const Syllabus = () => {
  const [activeTrack, setActiveTrack] = useState("fullstack");
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);
  const [leftSideHeight, setLeftSideHeight] = useState(undefined);
  const leftSideRef = useRef(null);

  const currentSyllabus = syllabusData[activeTrack];

  useEffect(() => {
    if (leftSideRef.current) {
      setTimeout(() => {
        if (leftSideRef.current) {
          const height = leftSideRef.current.getBoundingClientRect().height;
          setLeftSideHeight(`${height}px`);
        }
      }, 100);
    }
  }, [activeTrack, activeIndex]);

  return (
    <section id="syllabus" className="py-24 bg-background w-full">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Curriculum
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold mb-6 tracking-tight"
          >
            Comprehensive <span className="text-primary italic">Syllabus.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg md:text-xl leading-relaxed"
          >
            Industry-relevant BBA program designed to ensure you are job-ready from day one.
          </motion.p>
        </div>

        <TrackToggle activeTrack={activeTrack} setActiveTrack={setActiveTrack} />

        {/* Mobile View Accordion */}
        <div className="lg:hidden space-y-4">
          {currentSyllabus.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                initial={false}
                animate={{ backgroundColor: isOpen ? "var(--card)" : "var(--background)" }}
                key={index} 
                className={`border rounded-2xl overflow-hidden transition-colors ${isOpen ? 'border-primary shadow-lg' : 'border-border'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 flex justify-between items-center bg-transparent relative overflow-hidden group"
                >
                  <div className="flex flex-col gap-1">
                    <h3 className={`text-xl font-bold transition-colors ${isOpen ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
                      {item.semester}
                    </h3>
                    {item.special && (
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">
                        Industry Integrated
                      </span>
                    )}
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className={`h-6 w-6 ${isOpen ? "text-primary" : "text-muted-foreground group-hover:text-primary"}`} />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 border-t border-border bg-card">
                        <div className="mb-8">
                          <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-4 px-3 py-1 bg-primary/10 inline-block rounded-full">
                            {item.trackFocus.title}
                          </h4>
                          <ul className="space-y-3">
                            {item.trackFocus.courses.map((course, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <div className="min-w-[6px] h-[6px] rounded-full bg-primary mt-2" />
                                <span className="text-muted-foreground text-sm font-medium">{course}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-secondary uppercase tracking-wider mb-4 px-3 py-1 bg-secondary/10 inline-block rounded-full">
                            {item.coreSubjects.title}
                          </h4>
                          <ul className="space-y-3">
                            {item.coreSubjects.courses.map((course, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <div className="min-w-[6px] h-[6px] rounded-full bg-secondary mt-2" />
                                <span className="text-muted-foreground text-sm font-medium">{course}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {item.special && (
                          <div className="mt-8 bg-primary/5 border border-primary/20 p-4 rounded-xl flex items-start gap-3">
                            <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                            <p className="text-foreground text-sm font-bold">{item.special}</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex flex-row gap-8 max-w-6xl mx-auto items-start">
          <div className="w-2/5" ref={leftSideRef}>
            <div className="bg-card p-6 rounded-3xl shadow-2xl sticky top-24 border border-border">
              <h3 className="text-xl font-bold mb-6 text-foreground pb-4 border-b border-border">
                {activeTrack === "fullstack" ? "Digital Marketing" : "Business Analytics"} Curriculum
              </h3>
              <div className="space-y-0">
                {currentSyllabus.map((item, index) => (
                  <SemesterButton
                    key={index}
                    semester={item.semester}
                    isActive={activeIndex === index}
                    onClick={() => setActiveIndex(index)}
                    hasSpecial={item.special}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="w-3/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex + activeTrack}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <SemesterContent
                  semester={currentSyllabus[activeIndex].semester}
                  trackFocus={currentSyllabus[activeIndex].trackFocus}
                  coreSubjects={currentSyllabus[activeIndex].coreSubjects}
                  special={currentSyllabus[activeIndex].special}
                  maxHeight={leftSideHeight}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
