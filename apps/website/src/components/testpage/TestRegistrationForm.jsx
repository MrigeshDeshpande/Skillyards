"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export default function TestRegistrationForm() {
    const [form, setForm] = useState({ name: "", email: "", phone: "" });
    const [status, setStatus] = useState("idle"); // idle | loading | success | error
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
            setError("Please fill in all fields to continue.");
            return;
        }
        if (!/^\S+@\S+\.\S+$/.test(form.email)) {
            setError("Please enter a valid email address.");
            return;
        }
        if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ""))) {
            setError("Please enter a valid 10-digit phone number.");
            return;
        }

        setStatus("loading");

        // TODO: wire to backend / form submission API
        await new Promise((r) => setTimeout(r, 1200));

        // Placeholder — always succeeds for now
        setStatus("success");
    };

    if (status === "success") {
        return (
            <section id="register" className="bg-muted/40 border-y border-border py-16 px-4 sm:px-6">
                <div className="mx-auto max-w-md text-center">
                    <CheckCircle2 size={48} className="mx-auto text-emerald-500 mb-4" />
                    <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
                        You&apos;re registered!
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        We&apos;ll notify you at <strong className="text-foreground">{form.email}</strong> as soon as the test goes live. Get ready — it&apos;ll take less than 10 minutes.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section id="register" className="bg-muted/40 border-y border-border py-16 px-4 sm:px-6">
            <div className="mx-auto max-w-lg">
                {/* Header */}
                <div className="text-center mb-10">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                        Get Started
                    </p>
                    <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
                        Take the Free Test
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Fill in your details below — we&apos;ll email your certificate and result report instantly after you finish.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            Full Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Rahul Sharma"
                            value={form.name}
                            onChange={handleChange}
                            autoComplete="name"
                            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="rahul@example.com"
                            value={form.email}
                            onChange={handleChange}
                            autoComplete="email"
                            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
                        />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            Phone Number
                        </label>
                        <div className="flex rounded-xl border border-border bg-background overflow-hidden focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/10 transition-all">
                            <span className="flex items-center px-3 text-sm text-muted-foreground border-r border-border bg-muted/50 select-none">
                                +91
                            </span>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="98765 43210"
                                value={form.phone}
                                onChange={handleChange}
                                autoComplete="tel"
                                maxLength={11}
                                className="flex-1 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground bg-transparent focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Error */}
                    {error && (
                        <p className="text-xs text-red-500 font-medium">{error}</p>
                    )}

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-6 py-3.5 rounded-full hover:bg-primary/90 hover:gap-3 transition-all duration-200 group disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {status === "loading" ? (
                            <>
                                <Loader2 size={15} className="animate-spin" />
                                Registering…
                            </>
                        ) : (
                            <>
                                Start Free Test
                                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                            </>
                        )}
                    </button>

                    <p className="text-center text-xs text-muted-foreground">
                        Your details are only used to send your certificate. We don&apos;t spam.
                    </p>
                </form>
            </div>
        </section>
    );
}
