"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, ArrowUpRight } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import batches from "@/data/upcoming-batches.json";

/* ── Accent colours cycling ── */
const accents = ["bg-primary", "bg-secondary", "bg-primary/70"];

function BatchCard({ batch, index }) {
    const date = new Date(batch.startDate).toLocaleDateString("en-IN", {
        day: "numeric", month: "short", year: "numeric",
    });

    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
            <CardContainer containerClassName="py-0" className="w-full">
                <CardBody className="w-full h-auto rounded-2xl border border-border/40 bg-card shadow-sm hover:shadow-lg hover:shadow-primary/8 transition-shadow duration-400 overflow-hidden">

                    {/* Thin top accent bar — the only color element */}
                    <div className={`w-full h-1 ${accents[index % accents.length]}`} />

                    <div className="px-6 py-6 space-y-5">

                        {/* Program title */}
                        <CardItem translateZ={60} className="w-full">
                            <h3 className="font-sans text-base font-bold tracking-tight text-foreground leading-snug">
                                {batch.program}
                            </h3>
                        </CardItem>

                        {/* Detail rows */}
                        <CardItem translateZ={40} className="w-full space-y-2.5">
                            <div className="flex items-center gap-2 text-xs text-muted-foreground font-sans">
                                <Calendar className="w-3.5 h-3.5 text-primary/60 shrink-0" />
                                Starts <span className="font-semibold text-foreground ml-1">{date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground font-sans">
                                <Clock className="w-3.5 h-3.5 text-primary/60 shrink-0" />
                                Duration: <span className="font-semibold text-foreground ml-1">{batch.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground font-sans">
                                <Users className="w-3.5 h-3.5 text-primary/60 shrink-0" />
                                <span className="font-semibold text-foreground">{batch.seats}</span>
                                <span className="ml-0.5">seats remaining</span>
                            </div>
                        </CardItem>

                        {/* Divider */}
                        <div className="h-px bg-border/50 w-full" />

                        {/* CTA */}
                        <CardItem translateZ={90} className="w-full">
                            <Link
                                href="/contact"
                                className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-primary-foreground text-sm font-bold rounded-xl shadow hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/20 transition-all duration-300"
                            >
                                Enroll Now <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </CardItem>
                    </div>

                </CardBody>
            </CardContainer>
        </motion.div>
    );
}

export default function BatchesSection() {
    return (
        <section className="relative py-20 bg-muted/40 overflow-hidden">
            <div className="pointer-events-none absolute -top-24 left-1/3 w-80 h-80 rounded-full bg-secondary/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-24 right-1/4 w-72 h-72 rounded-full bg-primary/6 blur-[90px]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-14"
                >
                    <div className="space-y-3">
                        <span className="inline-flex items-center gap-2 border border-secondary bg-secondary/30 text-primary rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase">
                            📅 Upcoming Batches
                        </span>
                        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                            Secure Your Seat<br />
                            <span className="text-primary italic">Before It&apos;s Gone</span>
                        </h2>
                        <p className="font-sans text-sm text-muted-foreground max-w-md leading-relaxed">
                            Tilt to explore — secure your spot in a career-defining program before seats fill up.
                        </p>
                    </div>
                    <Link
                        href="/programs"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-full font-semibold text-sm hover:bg-secondary/30 hover:-translate-y-0.5 transition-all duration-300 shrink-0 self-start sm:self-auto"
                    >
                        All Programs <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                    {batches.map((batch, i) => (
                        <BatchCard key={i} batch={batch} index={i} />
                    ))}
                </div>

            </div>
        </section>
    );
}
