"use client";

import Image from "next/image";
import { Linkedin, Twitter, Globe } from "lucide-react";

/**
 * TeamMemberCard
 *
 * Props:
 * @param {string}  name       — Full name
 * @param {string}  role       — Job title / role
 * @param {string}  bio        — Short 1-2 sentence bio
 * @param {string}  image      — Photo URL (absolute or /public path)
 * @param {string}  [badge]    — Optional label badge e.g. "Founder", "Lead Instructor"
 * @param {object}  [socials]  — { linkedin, twitter, website } — all optional
 */
export default function TeamMemberCard({ name, role, bio, image, badge, socials = {} }) {
    return (
        <div className="group relative flex flex-col bg-white dark:bg-white/5 border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">

            {/* Photo */}
            <div className="relative w-full aspect-[4/4] overflow-hidden bg-muted">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Badge */}
                {badge && (
                    <span className="absolute top-3 left-3 bg-primary text-white text-[11px] font-bold px-3 py-1 rounded-full tracking-wide">
                        {badge}
                    </span>
                )}

                {/* Social overlay */}
                {(socials.linkedin || socials.twitter || socials.website) && (
                    <div className="absolute inset-0 bg-primary/70 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {socials.linkedin && (
                            <a
                                href={socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${name} on LinkedIn`}
                                className="w-10 h-10 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors duration-200"
                            >
                                <Linkedin size={18} />
                            </a>
                        )}
                        {socials.twitter && (
                            <a
                                href={socials.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${name} on Twitter`}
                                className="w-10 h-10 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors duration-200"
                            >
                                <Twitter size={18} />
                            </a>
                        )}
                        {socials.website && (
                            <a
                                href={socials.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${name}'s website`}
                                className="w-10 h-10 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors duration-200"
                            >
                                <Globe size={18} />
                            </a>
                        )}
                    </div>
                )}
            </div>

            {/* Info */}
            <div className="p-5 flex flex-col gap-1.5">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {role}
                </p>
                <h3 className="text-lg font-bold text-foreground leading-snug">
                    {name}
                </h3>
                {bio && (
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                        {bio}
                    </p>
                )}
            </div>
        </div>
    );
}
