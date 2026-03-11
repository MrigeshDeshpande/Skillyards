"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sun, Moon, Laptop } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { usePathname } from "next/navigation";

export default function MobileNav({ onClose, theme, toggleTheme }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 lg:hidden w-[calc(100%-2rem)] mx-auto max-w-[1100px]"
        >
            <Card className="rounded-2xl p-4 shadow-lg border border-gray-200/60 dark:border-neutral-800/60 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md">
                <div className="flex flex-col gap-1">
                    <MobileLink href="/" onClick={onClose}>Home</MobileLink>

                    <Accordion type="single" collapsible>
                        <AccordionItem value="programs" className="border-none">
                            <AccordionTrigger className="py-2.5 px-4 rounded-xl hover:no-underline text-sm font-medium text-gray-800 hover:text-gray-900 hover:bg-gray-50/80 dark:text-gray-200 dark:hover:text-white dark:hover:bg-neutral-800/50 transition">
                                Programs
                            </AccordionTrigger>
                            <AccordionContent className="pl-4 pb-0 pt-1 border-l border-gray-200/60 dark:border-neutral-800 ml-2">
                                <div className="grid grid-cols-1 gap-1">
                                    <MobileLink href="/programs/bca" onClick={onClose}>
                                        BCA Programs
                                    </MobileLink>

                                    <MobileLink href="/programs/bba" onClick={onClose}>
                                        BBA Programs
                                    </MobileLink>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <MobileLink href="/blog" onClick={onClose}>Blog</MobileLink>
                    <MobileLink href="/about" onClick={onClose}>About</MobileLink>
                    <MobileLink href="/contact" onClick={onClose}>Contact</MobileLink>

                    <div className="border-t border-gray-200/60 dark:border-neutral-800 mt-2 pt-3">
                        <button
                            onClick={toggleTheme}
                            className="flex items-center justify-between w-full text-sm font-medium text-gray-800 hover:text-gray-900 hover:bg-gray-50/80 dark:text-gray-200 dark:hover:text-white dark:hover:bg-neutral-800/50 transition py-2.5 px-4 rounded-xl"
                        >
                            <span>Toggle Theme</span>
                            <div className="rounded-full p-1.5 bg-gray-50 dark:bg-transparent border border-gray-200/60 dark:border-neutral-700/60 transition group-hover:bg-gray-100 dark:group-hover:bg-neutral-800 shadow-sm text-gray-500 dark:text-gray-400">
                                {theme === "light" ? <Moon className="w-4 h-4" /> : theme === "dark" ? <Sun className="w-4 h-4 text-yellow-500" /> : <Laptop className="w-4 h-4 text-blue-500" />}
                            </div>
                        </button>
                    </div>
                </div>
            </Card>
        </motion.div>
    );
}

function MobileLink({ href, children, onClick }) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            onClick={onClick}
            className={`text-sm font-medium transition py-2.5 px-4 rounded-xl block
                ${isActive
                    ? "text-gray-900 bg-gray-100/80 dark:bg-neutral-800/80 dark:text-white"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50/80 dark:text-gray-400 dark:hover:text-white dark:hover:bg-neutral-800/50"
                }
            `}
        >
            {children}
        </Link>
    );
}
