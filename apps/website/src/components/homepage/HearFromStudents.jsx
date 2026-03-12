"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Marquee } from "@/components/ui/marquee";
import testimonials from "@/data/student-testimonials.json";
import YouTubePlayer from "@/components/YoutubePlayer";
import JsonLd from "@/components/JsonLd";
import Image from "next/image";
import Link from "next/link";

const testimonialsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": testimonials.map((t, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "item": {
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": t.name
            },
            "datePublished": new Date().toISOString(),
            "reviewBody": t.feedback,
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": t.rating,
                "bestRating": "5",
                "worstRating": "1"
            },
            "itemReviewed": {
                "@type": "Organization",
                "name": "SkillYards"
            }
        }
    }))
};




const QuoteCard = ({ info, truncate = false }) => {
    const fallbackImg = "/images/default-avatar.jpg";
    const [imgSrc, setImgSrc] = useState(info?.avatar || fallbackImg);
    const rating = info?.rating ?? 5;

    const textValue = info?.feedback ?? "";
    const text =
        truncate && textValue.length > 120
            ? `${textValue.slice(0, 120)}...`
            : textValue;

    return (
        <div className="h-full w-[260px] sm:w-[320px] shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-transparent dark:border-border p-5 bg-card hover:bg-card/80 transition-colors shadow-sm dark:shadow-none flex flex-col justify-between">
            <div className="flex gap-4 mb-4 items-start">
                <Image
                    src={imgSrc}
                    alt={info?.name || 'Student Avatar'}
                    width={48}
                    height={48}
                    className="rounded-full object-cover shrink-0"
                    onError={() => setImgSrc(fallbackImg)}
                />

                <p className="text-sm text-card-foreground leading-snug">
                    {text}
                </p>
            </div>

            <div className="flex justify-between items-center mt-2">
                <div>
                    <h3 className="font-semibold text-foreground">
                        {info?.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                        {info?.role}
                    </p>
                </div>

                <div className="flex gap-1">
                    {Array.from({ length: rating }).map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">★</span>
                    ))}
                </div>
            </div>
        </div>
    );
};


const Marquee3D = ({ items, onSelectReview }) => {
    const r1 = items.slice(0, 4);
    const r2 = items.slice(4, 7);
    const r3 = items.slice(7, 10);
    const r4 = items.slice(10, 14);

    return (
        <div 
            className="relative flex h-[350px] sm:h-[420px] lg:h-[500px] w-full flex-row items-center justify-center overflow-hidden perspective-midrange lg:perspective-near"
            style={{ 
                WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent), linear-gradient(to right, transparent, black 15%, black 85%, transparent)', 
                WebkitMaskComposite: 'source-in', 
                maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent), linear-gradient(to right, transparent, black 15%, black 85%, transparent)', 
                maskComposite: 'intersect' 
            }}
        >
            <div
                className="flex flex-row items-center justify-center gap-4 sm:gap-6 min-w-[200vw] sm:min-w-[1200px]"
                style={{
                    transform:
                        "translateX(-5%) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
                    transformStyle: "preserve-3d"
                }}
            >
                <Marquee pauseOnHover vertical className="[--duration:30s]">
                    {r1.map((item, idx) => (
                        <button key={`${item.id}-${idx}`} type="button" onClick={() => onSelectReview(item)} className="text-left focus:outline-hidden">
                            <QuoteCard info={item} truncate />
                        </button>
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:30s]" vertical>
                    {r2.map((item, idx) => (
                        <button key={`${item.id}-${idx}`} type="button" onClick={() => onSelectReview(item)} className="text-left focus:outline-hidden">
                            <QuoteCard info={item} truncate />
                        </button>
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:30s]" vertical>
                    {r3.map((item, idx) => (
                        <button key={`${item.id}-${idx}`} type="button" onClick={() => onSelectReview(item)} className="text-left focus:outline-hidden">
                            <QuoteCard info={item} truncate />
                        </button>
                    ))}
                </Marquee>
                <Marquee pauseOnHover className="[--duration:30s]" vertical>
                    {r4.map((item, idx) => (
                        <button key={`${item.id}-${idx}`} type="button" onClick={() => onSelectReview(item)} className="text-left focus:outline-hidden">
                            <QuoteCard info={item} truncate />
                        </button>
                    ))}
                </Marquee>
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
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-extrabold text-center text-foreground"
                    >
                        Hear From Our Students
                    </motion.h2>


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
                        <div className="w-full max-w-[320px] lg:w-[30%] lg:sticky lg:top-32 relative z-30 mx-auto lg:mx-0 shrink-0 mt-8 lg:mt-0">
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

            <JsonLd schema={testimonialsSchema} id="student-testimonials-schema" />
        </>
    );
}