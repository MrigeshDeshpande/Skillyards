"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Anjali Sharma",
        role: "Software Developer",
        company: "TCS",
        initials: "AS",
        color: "primary",
        text: "SkillYards' On Job Training helped me land my dream job in software development. The mentorship was priceless — I went from zero to production-ready in just 6 months!",
        rating: 5,
    },
    {
        name: "Rohit Verma",
        role: "Web Developer",
        company: "Infosys",
        initials: "RV",
        color: "primary",
        text: "The On Job Degree program was thorough and practical. I gained real-world experience while studying. The projects in my portfolio got me hired immediately after graduating.",
        rating: 5,
    },
    {
        name: "Priya Singh",
        role: "UI/UX Designer",
        company: "Wipro",
        initials: "PS",
        color: "primary",
        text: "Amazing trainers, hands-on projects, and supportive peers. SkillYards truly empowers career growth. The design curriculum is industry-aligned and very practical.",
        rating: 5,
    },
    {
        name: "Arjun Mehta",
        role: "Data Analyst",
        company: "Accenture",
        initials: "AM",
        color: "primary",
        text: "The data analytics track at SkillYards is exceptional. I learned Python, SQL, and Power BI with real datasets. My internship converted to a full-time role within 3 months.",
        rating: 5,
    },
    {
        name: "Sneha Patel",
        role: "Full Stack Developer",
        company: "Capgemini",
        initials: "SP",
        color: "primary",
        text: "I joined SkillYards with no coding background. Today I'm a full-stack developer at a top MNC. The structured learning path and live projects made all the difference.",
        rating: 4,
    },
    {
        name: "Karan Joshi",
        role: "DevOps Engineer",
        company: "HCL Technologies",
        initials: "KJ",
        color: "primary",
        text: "The DevOps curriculum is fantastic — AWS, Docker, Kubernetes covered with hands-on labs. SkillYards connected me with the right opportunities at the right time.",
        rating: 5,
    },
];

function StarRating({ rating }) {
    return (
        <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    className={`w-4 h-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`}
                />
            ))}
        </div>
    );
}

export default function TestimonialsByInterns() {
    const carouselRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateScrollState = () => {
        if (!carouselRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        setCanScrollLeft(scrollLeft > 10);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    };

    const scroll = (direction) => {
        if (!carouselRef.current) return;
        carouselRef.current.scrollBy({
            left: direction === "left" ? -380 : 380,
            behavior: "smooth",
        });
        setTimeout(updateScrollState, 400);
    };

    return (
        <section className="relative bg-background py-24 overflow-hidden transition-colors duration-500">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
            </div>

            {/* Header */}
            <div className="relative max-w-7xl mx-auto px-6 text-center mb-14">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 tracking-wide uppercase">
                    Student Stories
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                    Hear From Our{" "}
                    <span className="text-primary">Interns</span>
                </h2>
                <p className="mt-4 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                    Real experiences from our interns who transformed their careers through SkillYards&apos; On Job Training.
                </p>
            </div>

            {/* Carousel container */}
            <div className="relative max-w-7xl mx-auto px-10">
                <div
                    ref={carouselRef}
                    onScroll={updateScrollState}
                    className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-1"
                >
                    {testimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className="group shrink-0 w-[340px] bg-card border border-border/60 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >

                            {/* Stars */}
                            <StarRating rating={t.rating} />

                            {/* Text */}
                            <p className="mt-4 text-muted-foreground text-sm leading-relaxed flex-1">
                                &ldquo;{t.text}&rdquo;
                            </p>

                            {/* Divider */}
                            <div className="my-5 h-px bg-border/60" />

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div
                                    className={`w-12 h-12 rounded-2xl bg-${t.color} flex items-center justify-center text-accent font-bold text-base shadow-md shrink-0`}
                                >
                                    {t.initials}
                                </div>
                                <div className="min-w-0">
                                    <h4 className="text-sm font-bold text-foreground truncate">
                                        {t.name}
                                    </h4>
                                    <p className="text-xs text-primary font-medium truncate">
                                        {t.role}
                                    </p>
                                    <p className="text-xs text-muted-foreground truncate">
                                        @ {t.company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation buttons */}
                <button
                    onClick={() => scroll("left")}
                    disabled={!canScrollLeft}
                    className="absolute top-1/2 -translate-y-1/2 -left-1 w-10 h-10 bg-background border border-border rounded-full shadow-md flex items-center justify-center hover:bg-muted transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed z-10"
                >
                    <ChevronLeft className="w-5 h-5 text-foreground" />
                </button>
                <button
                    onClick={() => scroll("right")}
                    disabled={!canScrollRight}
                    className="absolute top-1/2 -translate-y-1/2 -right-1 w-10 h-10 bg-background border border-border rounded-full shadow-md flex items-center justify-center hover:bg-muted transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed z-10"
                >
                    <ChevronRight className="w-5 h-5 text-foreground" />
                </button>
            </div>

            {/* Scroll hint dots */}
            <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, i) => (
                    <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-primary/30"
                    />
                ))}
            </div>
        </section>
    );
}
