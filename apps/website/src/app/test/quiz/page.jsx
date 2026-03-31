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
    const [sessionId, setSessionId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(600);

    const timerRef = useRef(null);
    const isSubmitted = useRef(false);

    // 🚀 START TEST (NEW FLOW)
    useEffect(() => {
        if (!leadId) {
            router.push("/10-minutes-test");
            return;
        }

        async function startTest() {
            try {
                const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
                const topicsArr = topics ? topics.split(",") : [];

                const res = await fetch(`${BASE_URL}/api/test/start`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        leadId,
                        topics: topicsArr,
                    }),
                });

                if (!res.ok) throw new Error("Failed to start test");

                const data = await res.json();

                setSessionId(data.sessionId);
                setQuestions(data.questions);
                setLoading(false);

            } catch (err) {
                console.error(err);
                setError("Failed to load test. Please try again.");
                setLoading(false);
            }
        }

        startTest();
    }, [leadId, topics, router]);

    // ⏱ TIMER
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

    const handleOptionSelect = (qId, option) => {
        setAnswers((prev) => ({ ...prev, [qId]: option }));
    };

    // 🚀 SUBMIT (SESSION-BASED)
    const submitTest = async (finalAnswers = answers) => {
        if (isSubmitted.current || !sessionId) return;

        isSubmitted.current = true;
        setSubmitting(true);
        clearInterval(timerRef.current);

        const payload = Object.entries(finalAnswers).map(([questionId, selectedOptionId]) => ({
            questionId,
            selectedOptionId,
        }));

        try {
            const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

            const res = await fetch(`${BASE_URL}/api/test/submit`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    sessionId,
                    answers: payload,
                }),
            });

            const data = await res.json();

            if (res.ok) {
                if (data.wrongAnswers) {
                    sessionStorage.setItem("wrongAnswers", JSON.stringify(data.wrongAnswers));
                }

                router.push(
                    `/test/result?sessionId=${sessionId}&score=${data.score}&total=${data.total}`
                );
            } else {
                setError(data.error || "Failed to submit test.");
                setSubmitting(false);
            }
        } catch (err) {
            console.error(err);
            setError("Network error while submitting.");
            setSubmitting(false);
        }
    };

    // UI STATES
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

    return (
        <div className="min-h-screen p-6 flex flex-col items-center">
            <div className="w-full max-w-2xl">

                {/* HEADER */}
                <div className="flex justify-between mb-6">
                    <h1 className="text-xl font-bold">Skill Assessment</h1>
                    <div>{formatTime(timeLeft)}</div>
                </div>

                {/* QUESTION */}
                <h2 className="text-lg font-semibold mb-4">
                    {currentIndex + 1}. {currentQuestion.question}
                </h2>

                {/* OPTIONS */}
                <div className="flex flex-col gap-3 mb-6">
                    {currentQuestion.options.map((opt, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleOptionSelect(currentQuestion.id, opt)}
                            className={`p-3 border rounded ${
                                answers[currentQuestion.id] === opt
                                    ? "border-blue-500"
                                    : "border-gray-300"
                            }`}
                        >
                            {opt}
                        </button>
                    ))}
                </div>

                {/* NAV */}
                <div className="flex justify-between">
                    <button
                        onClick={() => setCurrentIndex((p) => Math.max(0, p - 1))}
                        disabled={currentIndex === 0}
                    >
                        Previous
                    </button>

                    {currentIndex === totalQuestions - 1 ? (
                        <button onClick={() => submitTest()}>
                            Submit
                        </button>
                    ) : (
                        <button
                            onClick={() =>
                                setCurrentIndex((p) =>
                                    Math.min(totalQuestions - 1, p + 1)
                                )
                            }
                        >
                            Next
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