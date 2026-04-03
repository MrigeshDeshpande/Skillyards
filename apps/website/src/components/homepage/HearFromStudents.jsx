"use client";

import { useEffect, useState } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Marquee } from "@/components/ui/marquee";
import testimonials from "@/data/student-testimonials.json";
import YouTubePlayer from "@/components/YoutubePlayer";
import JsonLd from "@/components/JsonLd";
import Image from "next/image";
import Link from "next/link";


const QuoteCard = ({ info, truncate = false }) => {
    const fallbackImg = "/images/default-avatar.jpg";
    const [imgSrc, setImgSrc] = useState(info?.avatar || fallbackImg);
    const rating = info?.rating ?? 5;

    const textValue = info?.feedback ?? "";
    const text =
        truncate && textValue.length > 100
            ? `${textValue.slice(0, 100)}...`
            : textValue;

    return (
        <div className="w-full cursor-pointer overflow-hidden rounded-xl border border-transparent p-4 bg-card hover:bg-card/80 transition-colors shadow-sm dark:shadow-none flex flex-col gap-4">
            <p className="text-xs sm:text-sm text-card-foreground leading-snug">
                {text}
            </p>
            <div className="flex items-center gap-2.5">
                <Image
                    src={imgSrc}
                    alt={info?.name || 'Student Avatar'}
                    width={32}
                    height={32}
                    className="rounded-full object-cover shrink-0 w-8 h-8"
                    onError={() => setImgSrc(fallbackImg)}
                />
                <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground text-xs sm:text-sm truncate">
                        {info?.name}
                    </h3>
                    <p className="text-xs text-muted-foreground truncate">
                        {info?.role}
                    </p>
                </div>
                <div className="flex gap-0.5 shrink-0">
                    {Array.from({ length: rating }).map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xs">★</span>
                    ))}
                </div>
            </div>
        </div>
    );
};


const MarqueeCol = ({ items, reverse, duration, onSelectReview }) => (
    <Marquee
        pauseOnHover
        vertical
        reverse={reverse}
        className="[--gap:0.625rem] flex-1 min-w-0"
        style={{ '--duration': duration }}
    >
        {items.map((item, idx) => (
            <button
                key={`${item.name}-${idx}`}
                type="button"
                onClick={() => onSelectReview(item)}
                className="text-left focus:outline-none w-full"
            >
                <QuoteCard info={item} truncate />
            </button>
        ))}
    </Marquee>
);

const Marquee3D = ({ items, onSelectReview }) => {
    const third = Math.ceil(items.length / 3);
    const col1 = items.slice(0, third);
    const col2 = items.slice(third, third * 2);
    const col3 = items.slice(third * 2);

    return (
        <div
            className="relative h-95 sm:h-115 lg:h-130 w-full overflow-hidden"
            style={{
                perspective: '900px',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
            }}
        >
            <div
                className="flex flex-row gap-2.5 sm:gap-3 lg:gap-8 w-full h-full "
               
            >
                {/* Column 1 — always visible */}
                <MarqueeCol items={col1} reverse={false} duration="28s" onSelectReview={onSelectReview} />

                {/* Column 2 — tablet and up */}
                <div className="hidden sm:flex flex-1 min-w-0">
                    <MarqueeCol items={col2} reverse duration="22s" onSelectReview={onSelectReview} />
                </div>

                {/* Column 3 — desktop only */}
                <div className="hidden lg:flex flex-1 min-w-0">
                    <MarqueeCol items={col3} reverse={false} duration="32s" onSelectReview={onSelectReview} />
                </div>
            </div>
        </div>
    );
};


export default function HearFromStudents() {
    const [selectedReview, setSelectedReview] = useState(null);

    const videoIds = [
        "e2Rutd_ZIoA",
        "oKJ8kzPf_Ds",
        "vphzE_WqcPc",
        "fpmVzeoYyJQ",
        "F5Oom9g1oAQ",
    ];

    return (
        <>
            <section className=" bg-background">
                <div className="w-full mx-auto">
                    {/* Heading */}
                    <LazyMotion features={domAnimation}>
                    <m.h2
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-extrabold text-center text-foreground"
                    >
                        Hear From Our Students
                    </m.h2>
                    </LazyMotion>


                    <div className="w-40 h-1 bg-secondary mx-auto mt-4 mb-12" />

                    <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start max-w-7xl mx-auto">
                        
                        {/* Testimonials 3D (Left) */}
                        <div className="w-full lg:w-[70%] relative z-20 flex flex-col items-center lg:items-start">
                            <Marquee3D items={testimonials} onSelectReview={setSelectedReview} />
                            
                            <div className="text-center pt-10">
                                <Link
                                    href="/testimonials"
                                    className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-semibold shadow-md hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                                >
                                    See All Reviews
                                </Link>
                            </div>
                        </div>

                        {/* Video Player (Right) */}
                        <div className="w-full max-w-[300px] lg:w-[30%] lg:sticky lg:top-32 relative z-30 mx-auto lg:mx-0 shrink-0 mt-8 lg:mt-0 ">
                            <div className="relative rounded-[2rem] p-1.5 bg-linear-to-b from-primary/40 via-primary/5 to-transparent shadow-[0_0_50px_-12px_rgba(20,36,138,0.3)] dark:shadow-[0_0_50px_-12px_rgba(212,194,252,0.15)] ring-1 ring-border/50">
                                <div className="absolute inset-x-10 -top-px h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"></div>
                                <div className="absolute inset-0 bg-primary/10 blur-[60px] rounded-full -z-10 opacity-60"></div>
                                <div className="rounded-[1.75rem] overflow-hidden bg-background">
                                    <YouTubePlayer autoPlay={false} videoIds={videoIds} height={500} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Dialog open={!!selectedReview} onOpenChange={(open) => !open && setSelectedReview(null)}>
                <DialogContent className="max-w-lg">
                    {selectedReview && <QuoteCard info={selectedReview} />}
                </DialogContent>
            </Dialog>


        </>
    );
}