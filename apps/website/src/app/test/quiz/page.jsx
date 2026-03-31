"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2, Clock, CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";

function QuizContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const leadId = searchParams.get("leadId");
    const topics = searchParams.get("topics");

    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [submitting, setSubmitting] = useState(false);

    // Quiz State
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState({}); // { [questionId]: optionId }
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes (600 seconds)

    // Refs
    const timerRef = useRef(null);
    const isSubmitted = useRef(false);

    // Initial Fetch
    useEffect(() => {
        if (!leadId) {
            router.push("/10-minutes-test");
            return;
        }

        async function fetchQuestions() {
            try {
                const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
                const topicsQuery = topics ? `?topics=${topics}` : '';
                const res = await fetch(`${BASE_URL}/api/test/questions${topicsQuery}`);
                if (!res.ok) throw new Error("Failed to fetch questions");
                const data = await res.json();
                
                if (data.questions && data.questions.length > 0) {
                    setQuestions(data.questions);
                    setLoading(false);
                } else {
                    throw new Error("No questions found");
                }
            } catch (err) {
                console.error(err);
                setError("Failed to load test. Please try refreshing.");
                setLoading(false);
            }
        }

        fetchQuestions();
    }, [leadId, router]);

    // Timer Logic
    useEffect(() => {
        if (loading || error || isSubmitted.current) return;

        timerRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timerRef.current);
                    if (!isSubmitted.current) {
                        submitTest(answers);
                    }
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timerRef.current);
    }, [loading, error, answers]);

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    };

    const handleOptionSelect = (qId, oId) => {
        setAnswers((prev) => ({ ...prev, [qId]: oId }));
    };

    const submitTest = async (finalAnswers = answers) => {
        if (isSubmitted.current) return;
        isSubmitted.current = true;
        setSubmitting(true);
        clearInterval(timerRef.current);

        // Build payload
        const payload = Object.entries(finalAnswers).map(([questionId, selectedOptionId]) => ({
            questionId,
            selectedOptionId,
        }));

        try {
            const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
            const res = await fetch(`${BASE_URL}/api/test/submit`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ leadId, answers: payload }),
            });

            const data = await res.json();

            if (res.ok) {
                // Save wrong answers to sessionStorage for the result page
                if (data.wrongAnswers) {
                    sessionStorage.setItem("wrongAnswers", JSON.stringify(data.wrongAnswers));
                }
                // Navigate to results
                router.push(`/test/result?leadId=${leadId}&score=${data.score}&total=${data.total}`);
            } else {
                setError(data.error || "Failed to submit test. Please contact support.");
                setSubmitting(false);
            }
        } catch (err) {
            console.error(err);
            setError("Network error while submitting.");
            setSubmitting(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-muted/20">
                <Loader2 className="animate-spin text-primary mb-4 w-8 h-8" />
                <p className="text-muted-foreground font-medium animate-pulse">Loading Your Test...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-muted/20 p-6">
                <div className="bg-destructive/10 text-destructive px-6 py-4 rounded-xl border border-destructive/20 max-w-md text-center">
                    <p className="font-semibold mb-2">Error</p>
                    <p className="text-sm opacity-90">{error}</p>
                </div>
            </div>
        );
    }

    if (submitting) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-muted/20">
                <Loader2 className="animate-spin text-primary mb-4 w-10 h-10" />
                <h2 className="text-xl font-bold mb-2">Submitting Your Answers...</h2>
                <p className="text-muted-foreground">Please wait while we evaluate your score.</p>
            </div>
        );
    }

    const currentQuestion = questions[currentIndex];
    const totalQuestions = questions.length;
    const progress = ((currentIndex + 1) / totalQuestions) * 100;

    return (
        <div className="min-h-screen bg-background relative overflow-hidden pt-36 pb-16 px-4 sm:px-6 flex flex-col items-center">
            
            {/* Decorative Background Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="w-full max-w-3xl relative z-10 flex flex-col min-h-[85vh]">
                
                {/* Header & Timer Component */}
                <div className="flex items-center justify-between mb-8 bg-muted/30 border border-border/50 backdrop-blur-md p-4 sm:px-6 sm:py-4 rounded-2xl shadow-sm">
                    <div>
                        <h1 className="text-xl sm:text-2xl font-black tracking-tight text-foreground">
                            Skill Assessment
                        </h1>
                        <p className="text-xs sm:text-sm text-muted-foreground font-medium mt-0.5 tracking-wide uppercase">
                            {topics ? topics.split(',').join(', ') : 'All Topics'}
                        </p>
                    </div>
                    <div className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-bold transition-all duration-300 ${
                        timeLeft < 60 
                        ? 'bg-destructive/10 text-destructive border border-destructive/20 shadow-[0_0_15px_rgba(239,68,68,0.2)] animate-pulse' 
                        : 'bg-background border border-border shadow-sm text-foreground'
                    }`}>
                        <Clock size={18} className={timeLeft < 60 ? "animate-bounce" : ""} />
                        <span className="tabular-nums tracking-wider">{formatTime(timeLeft)}</span>
                    </div>
                </div>

                {/* Progress Bar Container */}
                <div className="flex items-center gap-4 mb-8">
                    <span className="text-xs font-bold text-muted-foreground whitespace-nowrap">
                        {Math.round(progress)}% COMPLETED
                    </span>
                    <div className="flex-1 bg-muted h-2.5 rounded-full overflow-hidden border border-border/50">
                        <div 
                            className="bg-primary h-full transition-all duration-500 ease-out rounded-full shadow-[0_0_10px_rgba(var(--primary),0.5)]"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <span className="text-xs font-bold text-muted-foreground whitespace-nowrap">
                        {currentIndex + 1} / {totalQuestions}
                    </span>
                </div>

                {/* Main Question Card */}
                <div className="flex-1 bg-background rounded-[2rem] border border-border p-6 sm:p-10 shadow-xl shadow-black/5 flex flex-col relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 via-blue-500/40 to-primary/40 opacity-50" />
                    
                    <div className="mb-8">
                        <span className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest border border-primary/20">
                            Question {currentIndex + 1}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-semibold leading-snug tracking-tight text-foreground">
                            {currentQuestion.question}
                        </h2>
                    </div>

                    {/* Options Grid */}
                    <div className="flex flex-col gap-3 mt-auto">
                        {currentQuestion.options.map((option, idx) => {
                            const isSelected = answers[currentQuestion.id] === option;
                            return (
                                <button
                                    key={idx}
                                    onClick={() => handleOptionSelect(currentQuestion.id, option)}
                                    className={`relative flex items-center w-full px-6 py-4 border-2 rounded-2xl text-left transition-all duration-200 group-hover:border-border ${
                                        isSelected 
                                        ? "border-primary bg-primary/5 shadow-md transform scale-[1.01]" 
                                        : "border-transparent bg-muted/40 hover:bg-muted/80 hover:scale-[1.005] hover:border-border"
                                    }`}
                                >
                                    <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 transition-colors ${
                                        isSelected ? "border-primary bg-primary" : "border-muted-foreground/30 bg-background"
                                    }`}>
                                        {isSelected && <div className="w-2 h-2 bg-white rounded-full scale-in-center" />}
                                    </div>
                                    <span className={`text-sm sm:text-lg font-medium transition-colors ${
                                        isSelected ? "text-primary" : "text-foreground/80"
                                    }`}>
                                        {option}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Navigation Footer */}
                <div className="flex items-center justify-between mt-8">
                    <button
                        onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                        disabled={currentIndex === 0}
                        className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold border-2 border-border bg-transparent text-foreground hover:bg-muted/50 transition-all disabled:opacity-30 disabled:hover:bg-transparent"
                    >
                        <ChevronLeft size={18} />
                        Previous
                    </button>

                    {currentIndex === totalQuestions - 1 ? (
                        <button
                            onClick={() => submitTest(answers)}
                            className="flex items-center gap-2 px-8 py-3 rounded-full text-sm font-black bg-primary text-primary-foreground hover:scale-105 hover:shadow-lg transition-all"
                        >
                            Submit Assessment
                            <CheckCircle2 size={18} />
                        </button>
                    ) : (
                        <button
                            onClick={() => setCurrentIndex(prev => Math.min(totalQuestions - 1, prev + 1))}
                            className="flex items-center gap-2 px-8 py-3 rounded-full text-sm font-black bg-foreground text-background hover:scale-105 hover:shadow-lg transition-all"
                        >
                            Next Question
                            <ChevronRight size={18} />
                        </button>
                    )}
                </div>

            </div>
        </div>
    );
}

export default function TestPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin w-8 h-8 text-primary" /></div>}>
            <QuizContent />
        </Suspense>
    );
}
