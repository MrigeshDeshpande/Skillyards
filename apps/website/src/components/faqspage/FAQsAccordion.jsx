"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";
import { faqCategories } from "@/data/faqs";

const categoryKeys = Object.keys(faqCategories);

export default function FAQsAccordion() {
    const [activeTab, setActiveTab] = useState(categoryKeys[0]);
    const [openIndex, setOpenIndex] = useState(0);

    const current = faqCategories[activeTab];

    return (
        <section className="bg-background py-16 px-4 sm:px-6">
            <div className="mx-auto max-w-4xl">

                {/* Tabs — scrollable on mobile */}
                <div className="flex gap-2 mb-10 overflow-x-auto pb-1 scrollbar-none">
                    {categoryKeys.map((key) => (
                        <button
                            key={key}
                            onClick={() => { setActiveTab(key); setOpenIndex(0); }}
                            className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                                activeTab === key
                                    ? "bg-primary text-primary-foreground border-primary"
                                    : "bg-background text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                            }`}
                        >
                            {faqCategories[key].label}
                            <span className="ml-1.5 text-[11px] opacity-60">
                                ({faqCategories[key].faqs.length})
                            </span>
                        </button>
                    ))}
                </div>

                {/* Category description */}
                <p className="text-sm text-muted-foreground mb-8 border-l-2 border-primary/30 pl-4">
                    {current.description}
                </p>

                {/* Accordion */}
                <div className="space-y-3">
                    {current.faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div
                                key={idx}
                                className={`rounded-2xl border transition-all duration-300 ${
                                    isOpen
                                        ? "border-primary/30 bg-card shadow-sm"
                                        : "border-border bg-card"
                                }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                                >
                                    <span className={`text-sm font-bold leading-snug transition-colors ${isOpen ? "text-primary" : "text-foreground"}`}>
                                        {faq.q}
                                    </span>
                                    <div className={`shrink-0 rounded-full p-1.5 transition-all ${isOpen ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                                        {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                                    </div>
                                </button>
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                        >
                                            <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                                                {faq.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

                <p className="mt-10 text-center text-sm text-muted-foreground">
                    Still have questions?{" "}
                    <Link href="/contact" className="font-bold text-primary underline underline-offset-4 hover:opacity-80">
                        Talk to our team
                    </Link>
                </p>
            </div>
        </section>
    );
}
