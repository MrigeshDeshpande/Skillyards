"use client";

import { useEffect, useRef, useState } from "react";

function Counter({ value, suffix = "+" }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;

                let start = 0;
                const duration = 1200;
                const step = Math.ceil(value / (duration / 16));

                const timer = setInterval(() => {
                    start += step;
                    if (start >= value) {
                        setCount(value);
                        clearInterval(timer);
                    } else {
                        setCount(start);
                    }
                }, 16);

                observer.disconnect();
            },
            { threshold: 0.3 }
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [value]);

    return (
        <span ref={ref} className="text-4xl font-extrabold">
      {count}
            {suffix}
    </span>
    );
}

export default function PlacementStats() {
    return (
        <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <div>
                        <Counter value={1200} />
                        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                            Students Trained
                        </p>
                    </div>
                    <div>
                        <Counter value={300} />
                        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                            Internships Offered
                        </p>
                    </div>
                    <div>
                        <Counter value={180} />
                        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                            Hiring Partners
                        </p>
                    </div>
                    <div>
                        <Counter value={95} suffix="%" />
                        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                            Placement Success
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
