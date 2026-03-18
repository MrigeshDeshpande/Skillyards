"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

const colors = {
  primary: "#f9bf1e",       // Golden Yellow (Primary)
  secondary: "#9DE4E1",     // Aqua Blue
  accent: "#FFD166",        // Lemon Yellow
  shadow: "#313451",        // Deep Navy
  background: "#FFFFFF",    // White
  lightBg: "#F8F8F8",       // Light Gray
  gradientStart: "#F0F2F5", // Light Gray
  gradientEnd: "#FFFFFF",   // White
  textDark: "#1F2937",      // Dark Gray
  textMedium: "#4B5563",    // Medium Gray
  border: "#E5E7EB",        // Light Border
};

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

// -----------------Components ------------------
const TrackToggle = ({ activeTrack, setActiveTrack }) => {
  return (
    <div className="flex justify-center mb-6 lg:mb-12">
      <div className="bg-gray-100 p-0.5 lg:p-1 rounded-full shadow-inner border border-gray-200">
        <div className="flex relative">
          <button
            onClick={() => setActiveTrack("fullstack")}
            className={`px-4 lg:px-8 py-2 lg:py-3 rounded-full text-sm lg:text-lg font-medium transition-all z-10 ${activeTrack === "fullstack"
              ? `bg-[${colors.primary}] text-white shadow-md`
              : `text-[${colors.textDark}] hover:text-[${colors.primary}]`
              }`}
          >
            Digital Marketing
          </button>
          <button
            onClick={() => setActiveTrack("android")}
            className={`px-4 lg:px-8 py-2 lg:py-3 rounded-full text-sm lg:text-lg font-medium transition-all z-10 ${activeTrack === "android"
              ? `bg-[${colors.primary}] text-white shadow-md`
              : `text-[${colors.textDark}] hover:text-[${colors.primary}]`
              }`}
          >
            Business Analytics
          </button>
          <div
            className={`absolute top-0 bottom-0 rounded-full transition-all duration-300 ${activeTrack === "fullstack"
              ? "left-0 right-1/2 bg-yellow-400"
              : "left-1/2 right-0 bg-yellow-400"
              }`}
          />
        </div>
      </div>
    </div>
  );
};
const SemesterButton = ({
  semester,
  isActive,
  onClick,
  hasSpecial
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 md:p-6 rounded-xl transition-all mb-4 border-2 ${isActive
        ? `bg-white text-[${colors.primary}] shadow-lg border-yellow-200 font-bold`
        : `bg-[${colors.lightBg}] hover:bg-white hover:shadow-md border-transparent`
        } ${hasSpecial ? "relative overflow-hidden" : ""}`}
    >
      {hasSpecial && (
        <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-bl-lg selection:text-black hover: text-black">
          Industry Integrated
        </div>
      )}
      <div className="flex justify-between items-center">
        <h3 className="text-lg md:text-xl font-medium">{semester}</h3>
        {isActive ? (
          <ChevronDown className="h-5 w-5 text-yellow-500" />
        ) : (
          <ChevronRight className="h-5 w-5 text-gray-500" />
        )}
      </div>
    </button>
  );
};


const SemesterContent = ({
  semester,
  trackFocus,
  coreSubjects,
  special,
  isMobile = false,
  maxHeight
}) => {
  if (isMobile) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-md mb-4 border border-gray-200">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">{semester}</h3>
        <div className="mb-6">
          <h4 className={`text-lg font-medium text-[${colors.primary}] mb-2`}>{trackFocus.title}</h4>
          <ul className="pl-5 space-y-2">
            {trackFocus.courses.map((course, index) => (
              <li key={index} className="flex items-start"> {/* Line 9: Added flex for custom bullet */}
                <span className={`h-2 w-2 rounded-full mt-2 mr-2 bg-[${colors.primary}]`}></span> {/* Line 10: Custom bullet */}
                <span className={`text-base text-[${colors.textDark}]`}>{course}</span> {/* Line 11: Course text */}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className={`text-lg font-medium text-[${colors.primary}] mb-2`}>{coreSubjects.title}</h4>
          <ul className="list-disc pl-5 space-y-2">
            {coreSubjects.courses.map((course, index) => (
              <li key={index} className={`text-base text-[${colors.textDark}]`}>{course}</li>
            ))}
          </ul>
        </div>
        {special && (
          <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
            <p className={`text-[${colors.textDark}] text-base font-medium`}>{special}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className="h-full bg-gray-50 rounded-xl shadow-lg p-8 border border-gray-200 overflow-y-auto"
      style={maxHeight ? { maxHeight, height: '100%' } : {}}
    >
      <h2 className={`text-3xl font-bold mb-8 text-[${colors.textDark}] border-b border-gray-200 pb-4`}>
        {semester}
      </h2>
      <div className="mb-8">
        <h3 className={`text-xl font-semibold mb-4 text-[${colors.primary}]`}>{trackFocus.title}</h3>
        <ul className="list-disc pl-5 space-y-4">
          {trackFocus.courses.map((course, index) => (
            <li key={index} className={`text-lg text-[${colors.textDark}]`}>{course}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className={`text-xl font-semibold mb-4 text-[${colors.primary}]`}>{coreSubjects.title}</h3>
        <ul className="list-disc pl-5 space-y-4">
          {coreSubjects.courses.map((course, index) => (
            <li key={index} className={`text-lg text-[${colors.textDark}]`}>{course}</li>
          ))}
        </ul>
      </div>
      {special && (
        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className={`text-[${colors.textDark}] text-lg font-medium`}>{special}</p>
        </div>
      )}
    </div>
  );
};

// -----------------Main Component ------------------
const Syllabus = () => {
  const [activeTrack, setActiveTrack] = useState("fullstack");
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);
  const [leftSideHeight, setLeftSideHeight] = useState(undefined);
  const leftSideRef = useRef(null);

  const currentSyllabus = syllabusData[activeTrack];

  useEffect(() => {
    if (leftSideRef.current) {
      const height = leftSideRef.current.getBoundingClientRect().height;
      setLeftSideHeight(`${height}px`);
    }
  }, [activeTrack]);

  return (
    <section id="syllabus" className="py-16 bg-gray-50">
      <div className="container mx-auto px-0 lg:px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#f9bf1e]">
            Comprehensive Syllabus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-relevant BBA Course designed for career success
          </p>
        </div>

        <TrackToggle activeTrack={activeTrack} setActiveTrack={setActiveTrack} />

        {/* Mobile View Accordion */}
        <div className="lg:hidden">
          <div className="bg-white p-4 rounded-lg shadow-md mb-0 border border-gray-200 mx-0 ">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-3">
              {activeTrack === "fullstack" ? "Digital Marketing" : "Business Analytics"} Curriculum
            </h3>
            <div className="space-y-2">
              {currentSyllabus.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="border-2 border-gray-200 rounded-lg overflow-hidden mx-0">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full text-left p-3 flex justify-between items-center"
                    >
                      <div className="flex items-center gap-2">
                        <h3 className={`text-lg font-medium ${isOpen ? `text-[${colors.primary}] font-bold` : 'text-gray-800'}`}>
                          {item.semester}
                        </h3>
                        {item.special && (
                          <span className="bg-yellow-400 text-xs font-bold px-2 py-1 rounded-lg selection:text-black hover: text-black">
                            Industry Integrated
                          </span>
                        )}
                      </div>
                      <div className="flex-shrink-0">
                        {isOpen ? (
                          <ChevronDown className="h-5 w-5 text-yellow-500" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-gray-500" />
                        )}
                      </div>
                    </button>
                    {isOpen && (
                      <div className="p-3 bg-gray-50">
                        <div className="mb-3">
                          <h4 className={`text-base font-medium text-[${colors.primary}] mb-2`}>{item.trackFocus.title}</h4>
                          <ul className="list-disc pl-5 space-y-2"> {/* Line 3: Keep list-disc */}
                            {item.trackFocus.courses.map((course, i) => (
                              <li key={i} className={`text-base text-[${colors.textDark}]`}> {/* Line 5: Removed custom bullet */}
                                {course}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className={`text-base font-medium text-[${colors.primary}] mb-2`}>{item.coreSubjects.title}</h4>
                          <ul className="list-disc pl-5 space-y-2">
                            {item.coreSubjects.courses.map((course, i) => (
                              <li key={i} className={`text-base text-[${colors.textDark}]`}>
                                {/* <span className={`h-2 w-2 rounded-full mt-2 mr-3 bg-[${colors.primary}] flex-shrink-0`}></span> */}
                                <span className={`text-base text-[${colors.textDark}]`}> {course}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {item.special && (
                          <div className="mt-3 bg-yellow-50 border-l-4 border-yellow-400 p-2 rounded">
                            <p className={`text-[${colors.textDark}] text-base font-medium`}>{item.special}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex flex-row gap-8 max-w-6xl mx-auto items-start">
          <div className="lg:w-2/5" ref={leftSideRef}>
            <div className="bg-white p-6 rounded-xl shadow-md sticky top-8 h-fit border border-gray-200">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
                {activeTrack === "fullstack" ? "Digital Marketing" : "Business Analytics"} Curriculum
              </h3>
              <div className="space-y-3">
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
          <div className="lg:w-3/5">
            <SemesterContent
              semester={currentSyllabus[activeIndex].semester}
              trackFocus={currentSyllabus[activeIndex].trackFocus}
              coreSubjects={currentSyllabus[activeIndex].coreSubjects}
              special={currentSyllabus[activeIndex].special}
              maxHeight={leftSideHeight}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Syllabus;