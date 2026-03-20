"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import BlogCard from "@/components/blog/BlogCard";
import { Search, ChevronLeft, ChevronRight, Lightbulb, TrendingUp } from "lucide-react";
import { useRouter } from "next/navigation";

const POSTS_PER_PAGE = 6;

const BlogSearch = ({ posts }) => {
    const router = useRouter();
    const [query, setQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const inputRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedQuery(query), 300);
        return () => clearTimeout(timer);
    }, [query]);


    const dynamicSuggestions = useMemo(() => {
        const tagCounts = {};

        posts?.forEach(post => {
            const tags = post.tags || post.categories || [];
            tags.forEach(tag => {
                const tagName = typeof tag === 'string' ? tag : tag.title;
                if (tagName) {
                    tagCounts[tagName] = (tagCounts[tagName] || 0) + 1;
                }
            });
        });

        const derived = Object.entries(tagCounts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 4)
            .map(([tag]) => tag);

        return derived.length > 0
            ? derived
            : ["Next.js", "React", "Career", "Tutorials"];
    }, [posts]);

    const filtered = useMemo(() => {
        const rawQ = debouncedQuery.toLowerCase().trim();
        if (!rawQ) return posts;
        const tokens = rawQ.split(/\s+/).filter(t => t.length > 0);

        const scorePost = (post) => {
            let totalScore = 0;
            const fields = [
                { value: post.title?.toLowerCase() || "", weight: 10 },
                { value: post.excerpt?.toLowerCase() || "", weight: 5 },
                { value: (post.tags || []).join(" ").toLowerCase(), weight: 8 }
            ];

            fields.forEach(({ value, weight }) => {
                if (!value) return;
                let fieldMaxSignal = 0;
                if (value.includes(rawQ)) fieldMaxSignal = 1.0;
                else if (tokens.some(t => value.startsWith(t))) fieldMaxSignal = 0.7;
                else if (tokens.some(t => value.includes(t))) fieldMaxSignal = 0.3;
                totalScore += fieldMaxSignal * weight;
            });
            return totalScore;
        };

        return posts
            .map((post) => ({ post, score: scorePost(post) }))
            .filter((item) => item.score > 0)
            .sort((a, b) => b.score - a.score)
            .map((item) => item.post);
    }, [debouncedQuery, posts]);

    const paginated = debouncedQuery
        ? filtered
        : filtered.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

    const handleKeyDown = (e) => {
        if (paginated.length === 0) return;
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setFocusedIndex(prev => (prev < paginated.length - 1 ? prev + 1 : prev));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setFocusedIndex(prev => (prev > 0 ? prev - 1 : -1));
        } else if (e.key === "Enter" && focusedIndex >= 0) {
            e.preventDefault();
            router.push(`/blog/${paginated[focusedIndex].slug.current}`);
        }
    };

    return (
        <div className="space-y-10" onKeyDown={handleKeyDown}>
            <div className="space-y-4">
                <div className="relative max-w-md mx-auto group">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <Search className="w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    </div>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search articles..."
                        value={query}
                        onChange={(e) => { setQuery(e.target.value); setCurrentPage(1); setFocusedIndex(-1); }}
                        className="w-full pl-11 pr-12 py-3 rounded-full border border-border bg-muted/40 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:bg-background transition-all"
                    />
                </div>

                {debouncedQuery && (
                    <div className="flex items-center justify-center animate-in fade-in slide-in-from-top-1 duration-300">
                        <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground/80 bg-muted/50 px-3 py-1 rounded-full border border-border/50">
                            {filtered.length === 0
                                ? "No articles found"
                                : `${filtered.length} article${filtered.length === 1 ? "" : "s"} found`}
                        </p>
                    </div>
                )}
            </div>

            {!query && dynamicSuggestions.length > 0 && (
                <div className="flex flex-wrap justify-center items-center gap-3 -mt-4">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" /> Trending:
                    </span>
                    {dynamicSuggestions.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => { setQuery(tag); setCurrentPage(1); }}
                            className="px-3 py-1 rounded-full bg-muted/50 border border-border text-[11px] font-medium hover:border-foreground transition-all"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            )}

            {/* Results Grid */}
            {paginated.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {paginated.map((post, index) => (
                        <div
                            key={post._id}
                            className={`transition-all duration-300 rounded-3xl ${focusedIndex === index ? "ring-4 ring-primary ring-offset-4 scale-[1.03] shadow-2xl z-10" : ""
                                }`}
                        >
                            <BlogCard post={post} searchQuery={debouncedQuery} />
                        </div>
                    ))}
                </div>
            ) : debouncedQuery ? (
                <div className="flex flex-col items-center justify-center py-20 gap-8 border border-dashed border-border rounded-[2rem] bg-muted/20 text-center">
                    <div className="space-y-2">
                        <Search className="w-12 h-12 text-muted-foreground opacity-20 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold">No matches for {debouncedQuery}</h3>
                        <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                            Don&apos;t let the search end here. Try one of our most popular categories:
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {dynamicSuggestions.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => { setQuery(tag); setCurrentPage(1); }}
                                className="px-5 py-2 rounded-full bg-background border border-border text-xs font-medium hover:border-foreground shadow-sm transition-all flex items-center gap-2"
                            >
                                <Lightbulb className="w-3.5 h-3.5 text-yellow-500" />
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default BlogSearch;