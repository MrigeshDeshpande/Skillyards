import Link from "next/link";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background flex items-center justify-center">
            <div className="text-center space-y-4 px-6">
                <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground">Our Services</h1>
                <p className="font-sans text-muted-foreground text-lg max-w-xl mx-auto">
                    Full-service technology and digital marketing solutions built for businesses that want to grow.
                </p>
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-semibold shadow-md hover:bg-primary/90 transition-all duration-300"
                >
                    Start a Project →
                </Link>
            </div>
        </main>
    );
}
