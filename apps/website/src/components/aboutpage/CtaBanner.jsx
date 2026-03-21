import { Button } from "@/components/ui/button";

export default function CtaBanner() {
    return (
        <section className="relative overflow-hidden py-20 bg-linear-to-r from-primary to-secondary text-primary-foreground">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent_60%)]" />

            <div className="relative max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold">
                    Ready to Build Your Career with SkillYards?
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/80">
                    Join On Job Degree & Training programs designed to make you job-ready
                    from day one.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary">
                        Explore Programs
                    </Button>
                    <Button size="lg" variant="outline" className="border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary">
                        Talk to Counselor
                    </Button>
                </div>
            </div>
        </section>
    );
}
