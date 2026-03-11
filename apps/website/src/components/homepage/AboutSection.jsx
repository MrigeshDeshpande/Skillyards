"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
    return (
        <section className="relative py-24 sm:py-32 overflow-hidden bg-background transition-colors duration-500">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Column: Image with Floating Elements */}
                    <div className="relative w-full aspect-4/3 lg:aspect-square max-h-[600px] rounded-[2.5rem] overflow-hidden group">
                        <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent mix-blend-overlay z-10 rounded-[2.5rem] transition-opacity duration-500 group-hover:opacity-0" />
                        <Image
                            src="/images/home-about.png"
                            alt="SkillYards Training Environment"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority
                        />
                        {/* Decorative Border */}
                        <div className="absolute inset-0 border border-white/10 dark:border-white/5 rounded-[2.5rem] z-20 pointer-events-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]" />
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="flex flex-col justify-center space-y-8 lg:pl-8">
                        
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                            </span>
                            <span className="text-sm font-semibold text-primary tracking-wide">About SkillYards</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-[1.1]">
                            Empowering <span className="text-primary italic pr-2">Skills</span> <br className="hidden sm:block"/>for the Future
                        </h2>

                        <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-2xl">
                            At <span className="font-bold text-foreground">SkillYards Versatilitty</span>, we bridge the gap between academic learning and industry demands. Through cutting-edge 
                            <span className="text-foreground font-semibold"> On Job Training</span> and 
                            <span className="text-foreground font-semibold"> On Job Degree</span> programs in emerging IT technologies, you learn directly from experienced mentors while building real-world software.
                        </p>

                        {/* Feature Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            {[
                                "Real-world Project Experience",
                                "Expert Industry Mentors",
                                "100% Placement Assistance",
                                "State-of-the-Art Labs"
                            ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                                    </div>
                                    <span className="text-foreground font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-muted/50 border border-border/50 rounded-2xl p-5 mt-4 backdrop-blur-xs">
                            <p className="text-muted-foreground text-base flex items-start gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 shrink-0 text-primary mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                                <span>
                                    <strong className="text-foreground block mb-1">Our Agra Campus</strong>
                                    A3, Behind Manoj Dhaba, Bhagwan Talkies Xing<br/>
                                    Agra, Uttar Pradesh – 282005, India
                                </span>
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-6">
                            <Button
                                asChild
                                size="lg"
                                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-lg font-semibold shadow-lg shadow-primary/25 transition-transform hover:-translate-y-1"
                            >
                                <Link href="/programs">
                                    Explore Programs
                                </Link>
                            </Button>

                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="border-border/50 bg-background/50 backdrop-blur text-foreground hover:bg-muted rounded-full px-8 py-6 text-lg font-semibold transition-transform hover:-translate-y-1"
                            >
                                <Link href="/contact">
                                    Contact Us
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
