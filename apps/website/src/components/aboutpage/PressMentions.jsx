import Image from "next/image";
export default function PressMentions() {
    return (
        <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold">
                        Press & Media Mentions
                    </h2>
                    <p className="mt-3 text-neutral-600 dark:text-neutral-400">
                        SkillYards featured across education and tech platforms.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div
                            key={i}
                            className="flex items-center justify-center rounded-xl border
                         border-neutral-200 dark:border-neutral-800
                         bg-white dark:bg-neutral-950 p-6
                         grayscale hover:grayscale-0 transition"
                        >
                            <Image
                                height={630}
                                width={1200}
                                src={`https://picsum.photos/200/80?random=${i}`}
                                alt="Media logo"
                                className="max-h-10 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
