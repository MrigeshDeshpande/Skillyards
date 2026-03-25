"use client";

import Image from "next/image";
import { Linkedin, Twitter, Globe } from "lucide-react";

export default function TeamMemberCard({ name, role, bio, image, badge, socials = {} }) {
    return (
        <div className="group relative flex flex-col bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            {/* Photo */}
            <div className="relative w-full aspect-square overflow-hidden bg-muted">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Badge */}
                {badge && (
                    <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide">
                        {badge}
                    </span>
                )}

                {/* Social hover overlay */}
                {(socials.linkedin || socials.twitter || socials.website) && (
                    <div className="absolute inset-0 bg-foreground/70 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {socials.linkedin && (
                            <a
                                href={socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${name} on LinkedIn`}
                                className="w-10 h-10 rounded-full bg-background/20 border border-background/30 flex items-center justify-center text-background hover:bg-background hover:text-foreground transition-colors duration-200"
                            >
                                <Linkedin size={16} />
                            </a>
                        )}
                        {socials.twitter && (
                            <a
                                href={socials.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${name} on Twitter`}
                                className="w-10 h-10 rounded-full bg-background/20 border border-background/30 flex items-center justify-center text-background hover:bg-background hover:text-foreground transition-colors duration-200"
                            >
                                <Twitter size={16} />
                            </a>
                        )}
                        {socials.website && (
                            <a
                                href={socials.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${name}'s website`}
                                className="w-10 h-10 rounded-full bg-background/20 border border-background/30 flex items-center justify-center text-background hover:bg-background hover:text-foreground transition-colors duration-200"
                            >
                                <Globe size={16} />
                            </a>
                        )}
                    </div>
                )}
            </div>

            {/* Info */}
            <div className="p-5 flex flex-col gap-1.5 border-t border-border">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                    {role}
                </p>
                <h3 className="text-base font-bold text-foreground leading-snug">
                    {name}
                </h3>
                {bio && (
                    <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                        {bio}
                    </p>
                )}
            </div>
        </div>
    );
}
