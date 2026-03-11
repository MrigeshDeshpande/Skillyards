"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Linkedin,
    Twitter,
    Github,
    Facebook,
    Instagram,
    Globe,
    Youtube,
} from "lucide-react";
import SuryanshHero from "@/components/suryanshupadhyay/SuryanshHero";
import RahulHero from "@/components/rahulsingh/RahulHero";

const iconMap = {
    linkedin: Linkedin,
    twitter: Twitter,
    github: Github,
    facebook: Facebook,
    instagram: Instagram,
    youtube: Youtube,
};

export default function LeadersSection() {
    /* 
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        fetch("https://admin.skillyards.in/api/team/leaders")
            .then((res) => res.json())
            .then((json) => {
                if (json?.status) {
                    // Filter specifically for Suryansh Upadhyay and Rahul Singh
                    const validNames = ["Suryansh Upadhyay", "Rahul Singh"];
                    const filtered = (json.data || []).filter(member => validNames.includes(member.name));
                    
                    // Sort them so Suryansh is first, if desired, or as they appear
                    filtered.sort((a, b) => validNames.indexOf(a.name) - validNames.indexOf(b.name));
                    
                    setTeamMembers(filtered);
                }
            })
            .catch((err) => {
                console.error("Failed to fetch leaders:", err);
            });
    }, []); 
    */

    return (
        <section className="bg-background py-0 relative overflow-hidden flex flex-col">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />
            
            <div className="w-full relative z-10 pt-24 pb-8">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
                        Visionary Leadership
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
                        Meet the driving forces behind SkillYards.
                    </p>
                    <div className="w-24 h-1.5 bg-primary/80 rounded-full mx-auto mt-6" />
                </motion.div>
            </div>

            {/* Render Full Hero Components Directly */}
            <div className="flex flex-col w-full">
                <SuryanshHero />
                <RahulHero />
            </div>
        </section>
    );
}
