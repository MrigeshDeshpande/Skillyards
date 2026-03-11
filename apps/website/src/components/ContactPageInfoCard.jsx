"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Youtube,
    Github,
} from "lucide-react";
import SocialLinks from "@/components/SocialLinks";

export default function ContactPageInfoCard() {
    return (
        <div className="space-y-6">
            <Card className="relative overflow-hidden rounded-2xl shadow-lg">
                {/* Accent bar */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600" />

                <CardContent className="p-8">
                    {/* Header */}
                    <h3 className="text-xl font-semibold tracking-tight">
                        SkillYards
                    </h3>

                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                        Empowering skills for the future.
                    </p>

                    {/* Contact details */}
                    <div className="mt-6 space-y-4 text-sm">
                        {/* Email */}
                        {process.env.NEXT_PUBLIC_EMAIL && (
                            <a
                                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                                className="group flex items-center gap-3"
                            >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition group-hover:bg-blue-100 dark:bg-blue-950/40 dark:text-blue-400">
                  <Mail className="h-4 w-4" />
                </span>
                                <span className="text-neutral-700 transition group-hover:text-blue-600 dark:text-neutral-300">
                  {process.env.NEXT_PUBLIC_EMAIL}
                </span>
                            </a>
                        )}

                        {/* Phone */}
                        {process.env.NEXT_PUBLIC_PHONE && (
                            <a
                                href={`tel:${process.env.NEXT_PUBLIC_PHONE.replace(/\s+/g, "")}`}
                                className="group flex items-center gap-3"
                            >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-600 transition group-hover:bg-green-100 dark:bg-green-950/40 dark:text-green-400">
                  <Phone className="h-4 w-4" />
                </span>
                                <span className="text-neutral-700 transition group-hover:text-green-600 dark:text-neutral-300">
                  {process.env.NEXT_PUBLIC_PHONE}
                </span>
                            </a>
                        )}

                        {/* Location */}
                        <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                <MapPin className="h-4 w-4" />
              </span>
                            <address className="not-italic">
    <span className="leading-relaxed text-neutral-700 dark:text-neutral-300">
        A3, Behind Manoj Dhaba, Bhagwan Talkies Xing
        <br />
        Agra, Uttar Pradesh – 282005, India
    </span>
                            </address>

                        </div>
                    </div>

                    {/* Divider */}
                    <Separator className="my-6" />

                    {/* Social links */}
                    <SocialLinks />
                </CardContent>
            </Card>
        </div>
    );
}
