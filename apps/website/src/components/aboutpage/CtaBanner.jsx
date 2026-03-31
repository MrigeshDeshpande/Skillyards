import { Button } from "@/components/ui/button";

export default function CtaBanner() {
    return (
        <section className="relative overflow-hidden py-20 bg-linear-to-r from-primary to-secondary text-primary-foreground">
            <div/>

            <div className="relative max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold">
                    Ready to Build Your Career with SkillYards?
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-primary-foreground">
                    Join On Job Degree & Training programs designed to make you job-ready
                    from day one.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center ">
                    <Button size="lg" variant="secondary" className="shadow-lg shadow-primary">
                        Explore Programs
                    </Button>
                    <Button size="lg" variant="outline" className="border-foreground text-foreground bg-primary-foreground shadow-lg shadow-primary">
                        Talk to Counselor
                    </Button>
                </div>
            </div>
        </section>
    );
}
