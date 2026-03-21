"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function OtherTeam() {
    const [members, setMembers] = useState([]);

    // TODO: Re-enable when API is ready
    // useEffect(() => {
    //     fetch("https://admin.skillyards.in/api/team/members")
    //         .then((res) => res.json())
    //         .then((json) => {
    //             if (json?.status) {
    //                 setMembers(json.data || []);
    //             }
    //         })
    //         .catch((err) => {
    //             console.error("Failed to fetch team members:", err);
    //         });
    // }, []);

    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-extrabold text-center text-foreground"
                >
                    Our Team
                </motion.h2>

                <div className="w-32 h-1 bg-secondary mx-auto mt-4 mb-12" />

                {/* Team Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {members.map((member, idx) => {
                        const isInactive = member.active === false;

                        return (
                            <motion.div
                                key={member.id ?? idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05, duration: 0.4 }}
                                className={`
                                    group rounded-xl overflow-hidden text-center
                                    border shadow-md transition
                                    ${isInactive
                                    ? "bg-muted/30 border-border opacity-70 cursor-not-allowed"
                                    : "bg-card border-border hover:shadow-lg"
                                }
                                `}
                            >
                                {/* Avatar */}
                                <div className="relative w-full h-48">
                                    <Image
                                        src={member.avatar}
                                        alt={member.name}
                                        fill
                                        className={`
                                            object-cover transition-transform duration-500
                                            ${isInactive
                                            ? "grayscale opacity-60"
                                            : "group-hover:scale-105"
                                        }
                                        `}
                                    />

                                    {/* Inactive badge */}
                                    {isInactive && (
                                        <span className="absolute top-2 right-2 text-[10px] px-2 py-0.5 rounded-full bg-foreground/80 text-background">
                                            Inactive
                                        </span>
                                    )}
                                </div>

                                {/* Info */}
                                <div className="p-4">
                                    <h3 className={`font-semibold text-sm
                                        ${isInactive
                                        ? "text-muted-foreground"
                                        : "text-foreground"
                                    }`}
                                    >
                                        {member.name}
                                    </h3>

                                    <p className="text-xs text-muted-foreground mt-1">
                                        @{member.username}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
