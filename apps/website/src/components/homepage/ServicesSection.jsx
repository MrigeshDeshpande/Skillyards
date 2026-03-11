"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { IconCloud } from "@/components/ui/icon-cloud";
import services from "@/data/corporate-services.json";
import MagicBento from "@/components/MagicBento";

const cloudImages = [
    "https://cdn.simpleicons.org/react/61DAFB",
    "https://cdn.simpleicons.org/nextdotjs/ffffff",
    "https://cdn.simpleicons.org/nodedotjs/339933",
    "https://cdn.simpleicons.org/typescript/3178C6",
    "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    "https://cdn.simpleicons.org/mongodb/47A248",
    "https://cdn.simpleicons.org/postgresql/4169E1",
    "https://cdn.simpleicons.org/docker/2496ED",
    "https://cdn.simpleicons.org/github/ffffff",
    "https://cdn.simpleicons.org/vercel/ffffff",
    "https://cdn.simpleicons.org/figma/F24E1E",
    "https://cdn.simpleicons.org/googleads/4285F4",
    "https://cdn.simpleicons.org/meta/0082FB",
    "https://cdn.simpleicons.org/instagram/E4405F",
    "https://cdn.simpleicons.org/linkedin/0A66C2",
    "https://cdn.simpleicons.org/youtube/FF0000",
    "https://cdn.simpleicons.org/googlesearchconsole/458CF5",
    "https://cdn.simpleicons.org/semrush/FF642D"
];

export default function ServicesSection() {
    return (
        <section className="min-h-[85vh] flex flex-col justify-center bg-background relative overflow-hidden transition-colors duration-500 py-16 lg:py-20">
            {/* Soft background glow similar to ProgramsSection */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col space-y-16">

                {/* Top: Typography Header & Icon Cloud Side-by-Side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    
                    {/* Left Side: Typography */}
                    <div className="flex flex-col items-start text-left space-y-6 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit">
                            <span className="text-sm font-semibold text-primary tracking-wide">What We Do</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                            Our <span className="text-primary italic pr-2">Services</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We provide end-to-end technology and digital marketing solutions designed to scale your business. From shipping high-performance custom software and architectures, to building comprehensive digital brands that drive growth and maximize your competitive advantage.
                        </p>
                    </div>

                    {/* Right Side: Integrated Minimal Icon Cloud */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[300px] lg:max-w-[400px] aspect-square flex items-center justify-center pointer-events-none">
                            <IconCloud images={cloudImages} />
                        </div>
                    </div>

                </div>

                {/* Bottom: Magic Bento Layout Full Width */}
                <div className="w-full h-full flex justify-center">
                    <div className="w-full max-w-[850px]">
                        <MagicBento
                            cardData={services.map((service, i) => ({
                                title: service.title,
                                description: service.teaser || service.description,
                                label: service.category === 'development' ? 'Engineering' : 'Marketing',
                                color: '#060010'
                            }))}
                            textAutoHide={false}
                            enableStars={false}
                            enableSpotlight={true}
                            enableBorderGlow={true}
                            enableTilt={true}
                            enableMagnetism={true}
                        />
                    </div>
                </div>

                {/* Optional 3D Action Button */}
                <div className="flex justify-center w-full pt-4">
                    <Link
                        href="/services"
                        className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 font-bold text-lg text-primary-foreground bg-primary rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_0_rgba(132,0,255,0.6)] active:translate-y-[6px] active:shadow-none shadow-[0_6px_0_rgba(132,0,255,0.6)]"
                    >
                        <span>Explore All Services</span>
                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                </div>

            </div>
        </section>
    );
}