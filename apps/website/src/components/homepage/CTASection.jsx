"use client";

import { Button } from "@/components/ui/button";

export default function CTASection() {
    return (
        <section className="relative py-24 bg-primary overflow-hidden">
            {/* Slanted Background */}
            <div className="absolute top-0 left-0 w-full h-full -skew-y-3 origin-top-left bg-primary/80 opacity-20 pointer-events-none"></div>

            <div className="relative max-w-4xl mx-auto px-6 text-center space-y-6">
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary-foreground drop-shadow-lg">
                    Ready to Kickstart Your IT Career?
                </h2>
                <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto drop-shadow-sm">
                    Join SkillYards today for <span className="font-bold underline decoration-secondary">On Job Training</span>, <span className="font-bold underline decoration-secondary">On Job Degree</span> programs, and hands-on learning in emerging IT technologies. Empower your skills and secure your future!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Button
                        asChild
                        size="lg"
                        className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold shadow-lg transition-all"
                    >
                        <a href="/contact">Enroll Now</a>
                    </Button>

                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-bold shadow-md transition-all"
                    >
                        <a href="/programs">Explore Programs</a>
                    </Button>
                </div>

                {/* Optional tiny tagline */}
                <p className="mt-4 text-primary-foreground/80 text-sm sm:text-base">
                    🎁 Enroll now and get exclusive access to free e-books and tutorials!
                </p>
            </div>
        </section>
    );
}
