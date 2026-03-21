"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Youtube,
    Github,
} from "lucide-react";
import Logo from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import SocialLinks from "@/components/SocialLinks";


export default function Footer() {
    const year = useMemo(() => new Date().getFullYear(), []);

    const footerSections = [
        {
            title: "Programs",
            links: [
                { label: "BCA Programs", href: "/programs/bca" },
                { label: "BBA Programs", href: "/programs/bba" },
                { label: "MCA Programs", href: "/programs/mca" },
            ],
        },
        {
            title: "Legal Stuff",
            links: [
                { label: "Privacy Policy", href: "/legal/privacy-policy" },
                { label: "Refund Policy", href: "/legal/refund-policy" },
                { label: "Terms of Service", href: "/legal/terms-of-service" },
                { label: "Sitemap", href: "/sitemap" },
            ],
        },
        {
            title: "Resources",
            links: [
                { label: "Blog", href: "/blog" },
                { label: "FAQs", href: "/faqs" },
                { label: "Support", href: "/support" },
                { label: "Careers", href: "/careers" },
                { label: "Administration", href: "https://admin.skillyards.in" },
            ],
        },
    ];

    const socialLinks = [
        { name: "Facebook", Icon: Facebook, url: process.env.NEXT_PUBLIC_FACEBOOK_URL },
        { name: "Twitter", Icon: Twitter, url: process.env.NEXT_PUBLIC_TWITTER_URL },
        { name: "LinkedIn", Icon: Linkedin, url: process.env.NEXT_PUBLIC_LINKEDIN_URL },
        { name: "Instagram", Icon: Instagram, url: process.env.NEXT_PUBLIC_INSTAGRAM_URL },
        { name: "YouTube", Icon: Youtube, url: process.env.NEXT_PUBLIC_YOUTUBE_URL },
        { name: "GitHub", Icon: Github, url: process.env.NEXT_PUBLIC_GITHUB_URL },
    ].filter(link => Boolean(link.url));

    return (
        <footer className="border-t border-border bg-background/90 backdrop-blur-md">
            {/* Top */}
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-12 sm:grid-cols-2 md:grid-cols-4">
                {/* Brand */}
                <div>
                    <Link href="/" className="mb-4 flex items-center gap-2">
                        <Logo />
                    </Link>

                    <address className="not-italic text-sm text-muted-foreground">
                        📍 A3, Behind Manoj Dhaba, Bhagwan Talkies Xing
                        <br />
                        Agra, Uttar Pradesh – 282005, India
                    </address>
                    {/* Social */}
                    <SocialLinks showLabel={false} className="mt-4" />
                </div>

                {/* Desktop columns */}
                {footerSections.map(section => (
                    <div key={section.title} className="hidden md:block">
                        <h3 className="mb-4 text-lg font-semibold text-foreground">
                            {section.title}
                        </h3>

                        <ul className="space-y-2 text-sm">
                            {section.links.map(link => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground transition-colors  hover:text-primary "
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {/* Mobile accordion */}
                <div className="md:hidden">
                    <Accordion type="single" collapsible>
                        {footerSections.map(section => (
                            <AccordionItem key={section.title} value={section.title}>
                                <AccordionTrigger className="text-base font-semibold">
                                    {section.title}
                                </AccordionTrigger>
                                <AccordionContent>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        {section.links.map(link => (
                                            <li key={link.href}>
                                                <Link
                                                    href={link.href}
                                                    className="transition-colors hover:text-primary"
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>

            <div className="border-t border-border py-4">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row">
                    {/* Left Content */}
                    <div className="text-center sm:text-left">
                        © {year} SkillYards Versatilitty

                    </div>
                </div>
            </div>
        </footer>
    );
}
