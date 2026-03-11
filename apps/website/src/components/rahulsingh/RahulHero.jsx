"use client"
import {useEffect, useState} from "react";
import Image from "next/image";
import {Facebook, Github, Globe, Instagram, Linkedin, Twitter, Youtube} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";


const iconMap = {
    linkedin: Linkedin,
    twitter: Twitter,
    github: Github,
    facebook: Facebook,
    instagram: Instagram,
    youtube: Youtube,
    threads: Globe, // replace with proper Threads icon if available
};

export default function RahulHero() {
    const [leader, setLeader] = useState(null);

    useEffect(() => {
        fetch("https://admin.skillyards.in/api/team/leaders/rahulsingh")
            .then((res) => res.json())
            .then((json) => {
                if (json?.status && json.data) {
                    setLeader(json.data);
                }
            })
            .catch((err) => console.error("Failed to fetch leader:", err));
    }, []);

    if (!leader) return null;

    const socials = [
        { platform: "linkedin", url: leader.linkedin },
        { platform: "twitter", url: leader.twitter },
        { platform: "facebook", url: leader.facebook },
        { platform: "instagram", url: leader.instagram },
        { platform: "youtube", url: leader.youtube },
        { platform: "threads", url: leader.threads },
        { platform: "github", url: leader.github },
    ].filter((s) => s.url);

    return (
        <section className="relative bg-linear-to-b from-white via-zinc-50 to-zinc-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-black py-24 transition-colors duration-500">
            <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
                {/* Avatar */}
                <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl bg-white/30 dark:bg-gray-900/30 backdrop-blur-md border border-white/20 dark:border-gray-700/20 shrink-0">
                    <Image
                        src={leader.avatar.startsWith("http") ? leader.avatar : `https://admin.skillyards.in/${leader.avatar}`}
                        alt={leader.name}
                        fill
                        priority
                        className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-3">{leader.name}</h1>
                    {/* Breadcrumbs */}
                    <div className="mb-8">
                        <Breadcrumbs className="text-sm" currentLabel="Rahul Singh" />
                    </div>
                    <p className="text-yellow-400 text-lg font-semibold mb-1">
                        {leader.role} @ SkillYards Versatilitty Pvt. Ltd.
                    </p>

                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-5">
                        {/* Optional tagline */}
                        Expertise in marketing, operations, and business strategy. Drives organizational efficiency and growth.
                    </p>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 max-w-2xl">
                        {/* Optional bio */}
                        Rahul Singh is the dynamic COO of SkillYards, ensuring impactful learning experiences through operational excellence.
                    </p>

                    {/* Socials */}
                    <div className="flex justify-center md:justify-start gap-4">
                        {socials.map((s, i) => {
                            const Icon = iconMap[s.platform];
                            if (!Icon) return null;
                            return (
                                <a
                                    key={i}
                                    href={s.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-white/90 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 hover:text-blue-600 p-2 rounded-full shadow-md transition"
                                    aria-label={s.platform}
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}