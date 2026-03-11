"use client";

import Link from "next/link";
import { Moon, Sun, Laptop, ChevronDown, Phone, Twitter, Github, Linkedin, X as XIcon } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";

export default function DesktopNav({ theme, toggleTheme }) {
    return (
        <div className="w-full flex items-center justify-between">
            {/* Nav Links */}
            <div className="flex items-center gap-5 sm:gap-6">
                <NavLink href="/">Home</NavLink>

                {/* Programs */}
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 text-[13px] font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 hover:bg-gray-50/80 dark:hover:text-white dark:hover:bg-neutral-800/50 transition px-3 py-1.5 rounded-full outline-none data-[state=open]:bg-gray-100/80 dark:data-[state=open]:bg-neutral-800/80 data-[state=open]:text-gray-900 dark:data-[state=open]:text-white">
                        Programs <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="start" className="w-48">
                        <DropdownMenuItem asChild>
                            <Link href="/programs/bca">BCA Programs</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href="/programs/bba">BBA Programs</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <NavLink href="/blog">Blog</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/contact">Contact</NavLink>
            </div>

            {/* Separator, Search, Icons */}
            <div className="flex items-center gap-3">
                <span className="text-gray-300 dark:text-gray-700 select-none hidden lg:block">·</span>

                <Link href="/contact" className="hidden lg:flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-semibold px-5 py-2 rounded-full shadow-[0_4px_0_0_rgba(30,58,138,1)] hover:shadow-[0_6px_0_0_rgba(30,58,138,1)] hover:-translate-y-0.5 active:shadow-[0_0px_0_0_rgba(30,58,138,1)] active:translate-y-1 transition-all duration-150">
                    <Phone className="w-4 h-4" />
                    Request a Call
                </Link>

                {/* Icons */}
                <div className="flex items-center gap-1.5 ml-1">

                    {/* Theme Toggle inside DesktopNav layout */}
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="flex items-center justify-center rounded-full p-[8px] text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-50 dark:bg-transparent dark:text-gray-400 dark:hover:bg-neutral-800 dark:hover:text-white transition border border-gray-200/60 dark:border-neutral-700/60 shadow-sm"
                    >
                        {theme === "light" ? (
                            <Moon className="h-4 w-4" />
                        ) : theme === "dark" ? (
                            <Sun className="h-4 w-4 text-yellow-500" />
                        ) : (
                            <Laptop className="h-4 w-4 text-blue-500" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

function NavLink({ href, children }) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`text-[13px] font-medium transition px-3 py-1.5 rounded-full block
                ${isActive
                    ? "text-gray-900 bg-gray-100/80 dark:bg-neutral-800/80 dark:text-white"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50/80 dark:text-gray-300 dark:hover:text-white dark:hover:bg-neutral-800/50"
                }
            `}
        >
            {children}
        </Link>
    );
}

function SocialButton({ href, children }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-full p-[8px] text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-50 dark:bg-transparent dark:text-gray-400 dark:hover:bg-neutral-800 dark:hover:text-white transition border border-gray-200/60 dark:border-neutral-700/60 shadow-sm"
        >
            {children}
        </a>
    );
}
