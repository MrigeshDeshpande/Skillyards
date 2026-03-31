"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, Medal, Mail, Home, XCircle, ChevronDown, ChevronUp, Loader2 } from "lucide-react";

function ResultContent() {
    const searchParams = useSearchParams();

    const score = Number(searchParams.get("score") || 0);
    const total = Number(searchParams.get("total") || 30);
    const percentage = Math.round((score / total) * 100) || 0;

    const [wrongAnswers, setWrongAnswers] = useState([]);
    const [showWrong, setShowWrong] = useState(false);

    useEffect(() => {
        try {
            const stored = sessionStorage.getItem("wrongAnswers");
            if (stored) {
                setWrongAnswers(JSON.parse(stored));
                sessionStorage.removeItem("wrongAnswers");
            }
        } catch (e) {
            console.error("Failed to parse wrong answers:", e);
        }
    }, []);

    let message = "Good Effort!";
    if (percentage >= 80) message = "Outstanding Performance! 🏆";
    else if (percentage >= 60) message = "Great Job! 👏";
    else if (percentage >= 40) message = "Solid Baseline! 👍";

    return (
        <div className="min-h-screen bg-muted/10 py-16 px-4 flex flex-col items-center justify-center">
            <div className="max-w-2xl w-full bg-background border border-border rounded-3xl p-8 text-center shadow-lg relative overflow-hidden">
                
                {/* Decorative background circle */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl" />

                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle size={32} />
                    </div>

                    <h1 className="text-3xl font-bold font-serif mb-2">Test Completed</h1>
                    <p className="text-muted-foreground text-sm mb-8">
                        Your assessment has been recorded and evaluated successfully!
                    </p>

                    {/* Score Card */}
                    <div className="w-full bg-muted/30 border border-border rounded-2xl p-6 mb-8 flex flex-col items-center">
                        <Medal size={40} className="text-yellow-500 mb-3" />
                        <h2 className="text-4xl font-black tabular-nums tracking-tighter text-foreground mb-1">
                            {score} <span className="text-xl text-muted-foreground font-semibold">/ {total}</span>
                        </h2>
                        <p className="font-bold text-lg text-primary">{message}</p>
                        <p className="text-sm text-muted-foreground mt-1">You scored {percentage}%</p>
                    </div>

                    {/* Wrong Answers Section */}
                    {wrongAnswers.length > 0 && (
                        <div className="w-full mb-8">
                            <button 
                                onClick={() => setShowWrong(!showWrong)}
                                className="w-full flex items-center justify-between gap-2 px-5 py-3.5 rounded-xl bg-red-500/5 border border-red-500/15 text-sm font-bold text-red-600 dark:text-red-400 hover:bg-red-500/10 transition-colors"
                            >
                                <span className="flex items-center gap-2">
                                    <XCircle size={18} />
                                    {wrongAnswers.length} Wrong Answer{wrongAnswers.length !== 1 ? "s" : ""} — Review & Learn
                                </span>
                                {showWrong ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                            </button>

                            {showWrong && (
                                <div className="mt-4 flex flex-col gap-3 text-left">
                                    {wrongAnswers.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-muted/30 border border-border rounded-xl p-5 transition-all"
                                        >
                                            <div className="flex items-start gap-3 mb-3">
                                                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center text-xs font-black mt-0.5">
                                                    {idx + 1}
                                                </span>
                                                <div className="flex-1">
                                                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                                                        {item.topic}
                                                    </p>
                                                    <p className="text-sm font-semibold text-foreground leading-snug">
                                                        {item.question}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="ml-10 flex flex-col gap-2">
                                                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-500/5 border border-red-500/10">
                                                    <XCircle size={14} className="text-red-500 flex-shrink-0" />
                                                    <span className="text-sm text-red-600 dark:text-red-400">
                                                        Your answer: <strong>{item.yourAnswer}</strong>
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/5 border border-green-500/10">
                                                    <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                                                    <span className="text-sm text-green-600 dark:text-green-400">
                                                        Correct answer: <strong>{item.correctAnswer}</strong>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Next Steps */}
                    <div className="w-full flex items-start gap-4 text-left bg-primary/5 border border-primary/10 rounded-xl p-4 mb-8">
                        <Mail className="text-primary shrink-0 mt-0.5" size={20} />
                        <div>
                            <p className="text-sm font-semibold text-foreground">Certificate on its way!</p>
                            <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                                We are generating your free detailed report and official SkillYards certificate. Check your email inbox shortly.
                            </p>
                        </div>
                    </div>

                    <Link 
                        href="/"
                        className="flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-sm font-bold text-background shadow transition-colors hover:bg-foreground/90"
                    >
                        <Home size={16} />
                        Return to Homepage
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function TestResultPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin w-8 h-8 text-primary" /></div>}>
            <ResultContent />
        </Suspense>
    );
}
