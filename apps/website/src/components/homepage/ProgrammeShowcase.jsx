"use client";

import {
    CodeIcon,
    DatabaseIcon,
    PaletteIcon,
    ShieldIcon,
    BarChart2Icon,
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const ProgramsShowcase = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [hovered, setHovered] = useState(-1);

    // Detect mobile
    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);

        return () => window.removeEventListener("resize", checkIsMobile);
    }, []);

    const trainingPrograms = [
        {
            title: "Full-Stack Foundation",
            description: "Kickstart your Full-Stack career",
            link: "/foundation-training-program-in-agra",
            icon: <CodeIcon color="#2c3e50" className="w-6 h-6 md:w-8 md:h-8" />,
            bg: "url('/images/programmes/full-stack-foundation.jpg')",
        },
        {
            title: "Full-Stack Development",
            description: "Master web development end-to-end",
            link: "/full-stack-web-development-training-in-agra",
            icon: <DatabaseIcon color="#1abc9c" className="w-6 h-6 md:w-8 md:h-8" />,
            bg: "url('/images/programmes/full-stack.jpg')",
        },
        {
            title: "UI/UX Design",
            description: "Create stunning user experiences",
            link: "/graphic-designing-training-program-in-agra",
            icon: <PaletteIcon color="#f1c40f" className="w-6 h-6 md:w-8 md:h-8" />,
            bg: "url('/images/programmes/uiux.jpg')",
        },
        {
            title: "BCA Program",
            description: "Comprehensive computer applications",
            link: "/bca-training-program-in-agra",
            icon: <ShieldIcon color="#e67e22" className="w-6 h-6 md:w-8 md:h-8" />,
            bg: "url('/images/programmes/bca.jpg')",
        },
        {
            title: "MCA Program",
            description: "Advanced computing and development",
            link: "/mca-training-program-in-agra",
            icon: <BarChart2Icon color="#c0392b" className="w-6 h-6 md:w-8 md:h-8" />,
            bg: "url('/images/programmes/mca.jpg')",
        },
    ];

    return (
        <section className="relative">
            <div className="mx-auto py-16 px-8 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-10 justify-around items-center">
                    {/* Header */}
                    <div className="w-full lg:w-[20%] xl:w-[10%] text-center lg:text-left mb-8 md:mb-0">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Watch.
                            <br className="hidden lg:block" />
                            Learn.
                            <br className="hidden lg:block" />
                            Grow.
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300">
                            Find your passion
                        </p>
                    </div>

                    {/* Programs */}
                    <div className="w-full md:overflow-x-auto">
                        <div
                            className={`
                flex 
                ${isMobile ? "flex-col" : "flex-row"} 
                gap-4 
                w-full 
                p-4
              `}
                        >
                            {trainingPrograms.map((program, index) => (
                                <div
                                    key={program.title}
                                    onMouseEnter={() => !isMobile && setHovered(index)}
                                    onMouseLeave={() => !isMobile && setHovered(-1)}
                                    onClick={() =>
                                        isMobile && setHovered(hovered === index ? -1 : index)
                                    }
                                    style={{
                                        backgroundImage: program.bg,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                    className={`
                    rounded-3xl
                    transition-all
                    duration-500
                    ease-in-out
                    cursor-pointer
                    relative
                    overflow-hidden
                    ${isMobile
                                            ? "w-full h-[220px] md:h-[350px]"
                                            : `h-[350px] ${hovered === index ? "w-[400px]" : "w-[250px]"
                                            }`
                                        }
                    ${isMobile && hovered === index ? "scale-105" : "scale-100"}
                  `}
                                >
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/40" />

                                    {/* Default state */}
                                    <div
                                        className={`
                      flex items-center justify-center w-full h-full
                      transition-all duration-500 relative
                      ${hovered === index
                                                ? "opacity-0 scale-0"
                                                : "opacity-100 scale-100"
                                            }
                    `}
                                    >
                                        <span
                                            className={`
                        text-gray-400 font-semibold text-lg whitespace-nowrap
                        ${!isMobile && "-rotate-90"}
                      `}
                                        >
                                            {program.title}
                                        </span>
                                    </div>

                                    {/* Hover / Active */}
                                    <div
                                        className={`
                      absolute inset-0
                      flex flex-col justify-between
                      p-4 md:p-6
                      transition-all duration-500
                      ${hovered === index
                                                ? "opacity-100 scale-100 translate-y-0"
                                                : "opacity-0 scale-95 translate-y-full"
                                            }
                    `}
                                    >
                                        <div className="flex flex-col gap-4">
                                            <div className="flex items-center gap-3">
                                                {program.icon}
                                                <h3 className="text-xl md:text-2xl font-bold text-white">
                                                    {program.title}
                                                </h3>
                                            </div>
                                            <p className="text-gray-200 text-sm md:text-base">
                                                {program.description}
                                            </p>
                                        </div>

                                        <div className="flex justify-between items-center mt-4">
                                            <Link
                                                href={program.link}
                                                aria-label={`Learn more about ${program.title}`}
                                                title={`Learn more about ${program.title}`}
                                                className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-background text-foreground font-semibold hover:bg-muted text-sm md:text-base border border-border"
                                            >
                                                Learn More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramsShowcase;
