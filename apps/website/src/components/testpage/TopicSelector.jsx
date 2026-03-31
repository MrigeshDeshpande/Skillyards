"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

const TOPICS = [
    { id: "html", label: "HTML" },
    { id: "css", label: "CSS" },
    { id: "javascript", label: "JavaScript" },
    { id: "react", label: "React" },
    { id: "node", label: "Node.js" },
    { id: "mongodb", label: "MongoDB" },
    { id: "aws", label: "AWS" },
    { id: "devops", label: "DevOps" },
    { id: "seo", label: "SEO" },
    { id: "ppc", label: "PPC" },
];

export default function TopicSelector({ leadId }) {
    const [selectedTopics, setSelectedTopics] = useState([]);

    const toggleTopic = (id) => {
        setSelectedTopics((prev) => 
            prev.includes(id) 
                ? prev.filter(t => t !== id)
                : [...prev, id]
        );
    };

    const isReady = selectedTopics.length >= 2;

    return (
        <div className="bg-background rounded-2xl border border-border shadow-sm p-6 mt-6">
            <h2 className="text-xl font-bold mb-2">Select Your Topics</h2>
            <p className="text-sm text-muted-foreground mb-6">
                Please select <strong>at least 2</strong> topics you want to be tested on. 
                The test will consist of 30 random questions from your chosen subjects.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {TOPICS.map((topic) => {
                    const isSelected = selectedTopics.includes(topic.id);
                    return (
                        <button
                            key={topic.id}
                            onClick={() => toggleTopic(topic.id)}
                            className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${
                                isSelected 
                                ? "border-primary bg-primary/5 shadow-sm scale-[1.02]" 
                                : "border-transparent bg-muted/40 hover:bg-muted/80 hover:border-border"
                            }`}
                        >
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center mb-2 transition-colors border-2 ${
                                isSelected ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/30 bg-background"
                            }`}>
                                {isSelected && <Check size={14} strokeWidth={3} />}
                            </div>
                            <span className={`text-sm font-semibold ${isSelected ? "text-primary" : "text-foreground"}`}>
                                {topic.label}
                            </span>
                        </button>
                    );
                })}
            </div>

            <div className="flex items-center justify-center gap-6 text-sm font-medium mb-8">
                <div className="flex flex-col items-center gap-1">
                    <span className="text-2xl">⏳</span>
                    <span>10 Minutes</span>
                </div>
                <div className="w-px h-10 bg-border"></div>
                <div className="flex flex-col items-center gap-1">
                    <span className="text-2xl">📝</span>
                    <span>30 Questions</span>
                </div>
            </div>

            {isReady ? (
                <Link 
                    href={`/test/quiz?leadId=${leadId}&topics=${selectedTopics.join(",")}`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                    Start Your Test
                </Link>
            ) : (
                <button 
                    disabled
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-muted px-8 py-3.5 text-sm font-bold text-muted-foreground opacity-70 cursor-not-allowed"
                >
                    Select {Math.max(0, 2 - selectedTopics.length)} more topic{Math.max(0, 2 - selectedTopics.length) !== 1 ? 's' : ''} to start
                </button>
            )}
        </div>
    );
}
