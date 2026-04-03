"use client";

import Image from "next/image";
import { Linkedin, Twitter, Globe, ArrowUpRight } from "lucide-react";

export default function TeamMemberCard({ name, role, bio, image, badge, socials = {}, priority = false }) {
    return (
        <div className="group relative w-full aspect-[4/5] sm:aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden bg-muted cursor-pointer isolate">
            {/* Base Image */}
            <Image
                src={image}
                alt={name}
                fill
                priority={priority}
                className="object-cover object-top transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] grayscale group-hover:grayscale-0 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            {/* Subtle Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent mix-blend-multiply opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

            {/* Top Badge */}
            {badge && (
                <div className="absolute top-4 left-4 z-20">
                    <span className="inline-block bg-primary/90 backdrop-blur-sm shadow-xl text-primary-foreground text-[10px] font-black uppercase px-3 py-1.5 rounded-full tracking-widest border border-primary/20">
                        {badge}
                    </span>
                </div>
            )}

            {/* Bottom Info Glass Container */}
            <div className="absolute bottom-0 left-0 w-full p-2 z-20">
                <div className="relative w-full rounded-3xl overflow-hidden bg-background/20 dark:bg-black/30 backdrop-blur-xl border border-white/10 dark:border-white/5 p-5 transition-transform duration-500 translate-y-2 group-hover:translate-y-0 shadow-2xl">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-1 shadow-black drop-shadow-md">
                                {role}
                            </p>
                            <h3 className="text-xl sm:text-2xl font-black text-white leading-tight drop-shadow-lg">
                                {name}
                            </h3>
                        </div>
                        {/* Hover Icon Indicator */}
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:rotate-45">
                            <ArrowUpRight size={16} />
                        </div>
                    </div>
                    
                    {/* Expandable Bio - Only visible on hover via height reveal */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                        <div className="overflow-hidden">
                            <p className="text-white/80 text-sm mt-3 leading-relaxed font-medium">
                                {bio}
                            </p>
                            
                            {/* Socials */}
                            {(socials.linkedin || socials.twitter || socials.website) && (
                                <div className="flex gap-2 mt-4 pt-4 border-t border-white/10">
                                    {socials.linkedin && (
                                        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors p-2 rounded-full hover:bg-white/10">
                                            <Linkedin size={16} />
                                        </a>
                                    )}
                                    {socials.twitter && (
                                        <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors p-2 rounded-full hover:bg-white/10">
                                            <Twitter size={16} />
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
