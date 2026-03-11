"use client";

import { useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import faqs from "@/data/faqs.json";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <section className="relative py-24 bg-background text-foreground overflow-hidden">
            {/* Background Blob */}
            <div className="absolute -left-32 bottom-0 w-[500px] h-[400px] bg-secondary/30 rounded-t-[300px] rounded-br-[300px] -rotate-12 blur-2xl -z-10"></div>

            <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
                {/* Left Column */}
                <div className="space-y-8 z-10 relative">
                    <div className="flex">
                        <div className="inline-block px-3 py-1 bg-secondary/30 text-primary font-bold text-xs rounded-full uppercase tracking-wider">
                            FAQ
                        </div>
                    </div>
                    
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground pr-4">
                        What would you like to know about SkillYards?
                    </h2>
                    
                    <div className="flex">
                        <button className="flex items-center gap-3 px-6 py-3 border border-border/80 hover:border-border rounded-full text-foreground hover:bg-secondary/10 transition-colors font-medium text-sm">
                            <MessageCircleQuestion className="w-5 h-5 text-muted-foreground" />
                            <span>Talk to us</span>
                        </button>
                    </div>
                    
                    {/* Decorative specific sphere from design */}
                    <div className="hidden lg:block relative mt-16 ml-10 w-full h-80">
                         {/* Blob continuation */}
                         <div className="absolute top-10 left-0 w-64 h-32 bg-secondary/30 rounded-full blur-xl"></div>
                         
                         {/* Sphere 1 */}
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-linear-to-br from-secondary via-primary/50 to-primary shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.2)]"></div>
                         
                         {/* Small orange sphere */}
                         <div className="absolute bottom-8 left-16 w-10 h-10 rounded-full bg-linear-to-br from-orange-300 to-orange-500 shadow-[inset_-3px_-3px_6px_rgba(0,0,0,0.2)]"></div>
                    </div>
                </div>

                {/* Right Column (Accordion) */}
                <div className="space-y-3 z-10 lg:mt-4 mt-8">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className={`rounded-[1.5rem] transition-colors duration-300 ${
                                openIndex === idx 
                                ? "bg-secondary/30" 
                                : "bg-secondary/10 hover:bg-secondary/20"
                            }`}
                        >
                            <button
                                onClick={() => toggle(idx)}
                                className="w-full flex justify-between items-center px-6 py-5 text-left font-medium text-foreground transition"
                            >
                                <span className="text-[1.05rem] pr-8">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`}
                                />
                            </button>

                            <div
                                className={`grid transition-all duration-300 ease-in-out ${
                                    openIndex === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                }`}
                            >
                                <div className="overflow-hidden">
                                    <div className="px-6 pb-6 pt-0 text-muted-foreground text-sm sm:text-base pr-12">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
