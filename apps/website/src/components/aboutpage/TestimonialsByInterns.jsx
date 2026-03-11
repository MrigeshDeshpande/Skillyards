"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        name: "Anjali Sharma",
        role: "Software Developer",
        image: "/images/students/anjali.jpg",
        text: "SkillYards' On Job Training helped me land my dream job in software development. The guidance from mentors is priceless!",
        rating: 5,
    },
    {
        name: "Rohit Verma",
        role: "Web Developer",
        image: "/images/students/rohit.jpg",
        text: "The On Job Degree program was thorough and practical. I gained real-world experience while studying.",
        rating: 4,
    },
    {
        name: "Priya Singh",
        role: "UI/UX Designer",
        image: "/images/students/priya.jpg",
        text: "Amazing trainers, hands-on projects, and supportive peers. SkillYards truly empowers your career growth.",
        rating: 5,
    },
];

export default function TestimonialsByInterns() {
    const carouselRef = useRef(null);

    const scroll = (direction) => {
        if (!carouselRef.current) return;
        const scrollAmount = 350;
        carouselRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <section className="bg-white dark:bg-neutral-900 py-20 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100">
                    Testimonials by Our Interns
                </h2>
                <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                    Hear directly from our interns about their real-world experience at SkillYards.
                </p>
            </div>

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Carousel */}
                <div
                    ref={carouselRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4"
                >
                    {testimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className="shrink-0 w-80 bg-gray-50 dark:bg-neutral-800 p-6 rounded-2xl shadow hover:shadow-xl transition flex flex-col items-center text-center"
                        >
                            <Image
                                src={t.image}
                                alt={t.name}
                                height={500}
                                width={500}
                                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-indigo-500"
                            />
                            <p className="text-gray-700 dark:text-gray-300 mb-4">{t.text}</p>
                            <div className="flex items-center gap-1 mb-2">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${
                                            i < t.rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
                                        }`}
                                    />
                                ))}
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                {t.name}
                            </h4>
                            <p className="text-indigo-600 dark:text-indigo-400">{t.role}</p>
                        </div>
                    ))}
                </div>

                {/* Navigation buttons */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute top-1/2 -translate-y-1/2 left-0 p-2 bg-white/80 dark:bg-neutral-800/80 rounded-full shadow hover:bg-white dark:hover:bg-neutral-700 transition"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={() => scroll("right")}
                    className="absolute top-1/2 -translate-y-1/2 right-0 p-2 bg-white/80 dark:bg-neutral-800/80 rounded-full shadow hover:bg-white dark:hover:bg-neutral-700 transition"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </section>
    );
}
