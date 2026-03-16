"use client";

import { useEffect, useRef, useState } from "react";

export default function TableOfContents({ headings }) {
    const [activeId, setActiveId] = useState(null);
    const observerRef = useRef(null);

    useEffect(() => {
        if (!headings?.length) return;

        const ids = headings.map((h) => h.id);

        observerRef.current = new IntersectionObserver(
            (entries) => {
                // Find the topmost visible heading
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

                if (visible.length > 0) {
                    setActiveId(visible[0].target.id);
                }
            },
            {
                rootMargin: "-80px 0px -60% 0px",
                threshold: 0,
            }
        );

        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observerRef.current.observe(el);
        });

        return () => observerRef.current?.disconnect();
    }, [headings]);

    if (!headings?.length) return null;

    return (
        <ul className="space-y-1 text-sm">
            {headings.map((heading) => {
                const isActive = activeId === heading.id;
                const isH3 = heading.level === "h3";

                return (
                    <li key={heading.id}>
                        <a
                            href={`#${heading.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                const el = document.getElementById(heading.id);
                                if (el) {
                                    // Offset for sticky navbar (~96px)
                                    const top = el.getBoundingClientRect().top + window.scrollY - 96;
                                    window.scrollTo({ top, behavior: "smooth" });
                                    setActiveId(heading.id);
                                }
                            }}
                            className={[
                                "flex items-center gap-2 py-1 transition-all duration-200 rounded-lg",
                                isH3 ? "pl-4" : "pl-0",
                                isActive
                                    ? "text-blue-500 dark:text-blue-400 font-medium"
                                    : "text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400",
                            ].join(" ")}
                        >
                            {/* Indicator dot / bar */}
                            <span
                                className={[
                                    "flex-shrink-0 rounded-full transition-all duration-200",
                                    isH3 ? "w-1 h-1" : "w-1.5 h-1.5",
                                    isActive
                                        ? "bg-blue-500 dark:bg-blue-400 scale-125"
                                        : "bg-gray-300 dark:bg-gray-600",
                                ].join(" ")}
                            />
                            <span className="leading-snug">{heading.text}</span>
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}