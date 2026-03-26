"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs({
    className = "",
    currentLabel,
}) {
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean);

    const breadcrumbs = [
        { name: "Home", href: "/" },
        ...segments.map((segment, index) => {
            const isLast = index === segments.length - 1;

            return {
                name:
                    isLast && currentLabel
                        ? currentLabel
                        : segment
                            .replace(/-/g, " ")
                            .replace(/\b\w/g, (l) => l.toUpperCase()),
                href: "/" + segments.slice(0, index + 1).join("/"),
            };
        }),
    ];

    return (
        <nav
            aria-label="Breadcrumb"
            className={`flex items-center text-sm text-accent-foreground ${className}`}
        >
            <ol className="flex items-center flex-wrap gap-1">
                <li>
                    <Link
                        href="/"
                        className="flex items-center gap-1 text-accent-foreground hover:text-primary"
                    >
                        <Home className="h-4 w-4" />
                        <span>Home</span>
                    </Link>
                </li>

                {breadcrumbs.slice(1).map((item, index) => {
                    const isLast = index === breadcrumbs.length - 2;

                    return (
                        <li key={item.href} className="flex items-center gap-1 text-accent-foreground">
                            <ChevronRight className="h-4 w-4 text-primary" />

                            {isLast ? (
                                <span className="font-medium text-accent-foreground">
                                    {item.name}
                                </span>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="text-accent-foreground hover:text-primary transition-colors"
                                >
                                    {item.name}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}