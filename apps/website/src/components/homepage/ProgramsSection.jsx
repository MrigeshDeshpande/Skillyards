import programs from "@/data/programmes.json";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { CometCard } from "@/components/ui/comet-card";

export default function ProgramsSection() {
    return (
        <section className="py-24 sm:py-32 bg-background transition-colors duration-500 relative overflow-hidden">
            {/* Soft background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-12 relative z-10">
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit mx-auto">
                        <span className="text-sm font-semibold text-primary tracking-wide">Career Paths</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
                        Our <span className="text-primary italic pr-2">Programs</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive training designed to transform beginners into industry-ready professionals.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {programs.map((program) => (
                        <CometCard key={program.title} className="w-full h-full" rotateDepth={4} translateDepth={10}>
                            {/* Base Card Layer */}
                            <Card className="flex flex-col pt-0 w-full h-full bg-card/50 backdrop-blur-sm border-0 shadow-xl overflow-hidden rounded-[24px] group">
                                <div className="relative h-56 w-full overflow-hidden shrink-0">
                                    <Image
                                        src={program.image}
                                        alt={program.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                                </div>

                                <CardContent className="flex flex-1 flex-col p-6 sm:p-8 text-left relative z-10 bg-linear-to-b from-transparent to-background/80">
                                    {/* Title + description */}
                                    <div className="mb-6 grow">
                                        <CardTitle className="text-2xl font-bold mb-3">{program.title}</CardTitle>
                                        <CardDescription className="text-base leading-relaxed">
                                            {program.description}
                                        </CardDescription>
                                    </div>

                                    {/* Full-width button */}
                                    <Button asChild size="lg" className="w-full rounded-full shadow-lg transition-transform hover:-translate-y-1 mt-auto">
                                        <Link href={program.href}>
                                            {program.cta || "View details"}
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </CometCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
