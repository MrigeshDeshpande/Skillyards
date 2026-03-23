"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Plus, Minus } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Do I need prior coding experience to join?",
    answer: "No. The course starts from absolute scratch — HTML, CSS, and basic JavaScript in Month 1. The only requirement is basic computer comfort (using a browser, typing). If you can use WhatsApp and Google, you can start this course.",
  },
  {
    question: "Is a laptop mandatory? What are the minimum specs?",
    answer: "Yes, a laptop is required — this is a hands-on practical course. Minimum: Intel Core i5 / Ryzen 5, 8GB RAM, 256GB SSD, Windows 10 or macOS. A smartphone alone won't work. If you don't have a laptop that meets these specs, talk to us before enrolling.",
  },
  {
    question: "What if I miss a class?",
    answer: "Every session is recorded and shared with enrolled students within 24 hours. We also hold weekly doubt-clearing sessions. That said — missing classes regularly will hurt you. The projects have deadlines. The code reviews expect your code.",
  },
  {
    question: "How is this different from just learning on YouTube or Udemy?",
    answer: "YouTube gives you videos. We give you a mentor who reviews your code, peers who challenge you, real projects with real deadlines, and placement support that includes actual referrals to companies. 95% of people who start a programming tutorial online don't finish it. Our completion rate is the opposite.",
  },
  {
    question: "Is placement really 100%? What does that actually mean?",
    answer: "It means 100% active effort — resume building, mock interviews, referrals to our 180+ hiring partners, and direct introductions where possible. It does not mean we guarantee a specific salary or that a company must hire you. Our actual placement rate is 95%. We will work hard to get you placed — but you have to show up hireable.",
  },
  {
    question: "Can I join if I'm currently working a day job?",
    answer: "Yes. We offer weekend batches and evening batches for working professionals. Check current availability during your free demo session. Be honest with yourself though — this course requires 4–6 hours of daily work. A full-time job + this course is doable but demanding.",
  },
  {
    question: "What language is the course taught in?",
    answer: "Primarily Hinglish (Hindi + English) — which is the most effective way to explain complex technical concepts to students in Agra. Technical terms, documentation, and code are in English. No prior English fluency required.",
  },
  {
    question: "How many students are in each batch?",
    answer: "Maximum 20 students per batch. This is intentional — smaller batches mean more mentor attention, better code review quality, and a tighter peer learning environment. We don't scale beyond 20 per batch.",
  },
  {
    question: "What happens after I complete the course?",
    answer: "You stay in the SkillYards alumni network — which means access to future job referrals, continued doubt support for 3 months post-completion, and invites to alumni events. Many graduates come back as mentors once they're 2–3 years into their careers.",
  },
  {
    question: "What's the refund and cancellation policy?",
    answer: "Full refund if you cancel before attending the first class. 50% refund within the first 2 weeks. No refund after 2 weeks. The free demo class exists precisely so you can make this decision before paying — we strongly recommend attending before enrolling.",
  },
];

export function FSDFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-background py-20">
      <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <div className="mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary"
          >
            <HelpCircle size={13} />
            FAQ
          </motion.div>
          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Questions You&apos;re Already Thinking.{" "}
            <span className="italic text-primary">Answered Honestly.</span>
          </h2>
        </div>

        <div className="space-y-2.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                className={`rounded-2xl border transition-all duration-300 ${isOpen ? "border-primary/30 bg-card shadow-lg shadow-primary/5" : "border-border/50 bg-card/20 hover:border-border"}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <span className={`text-sm font-bold transition-colors sm:text-base ${isOpen ? "text-primary" : "text-foreground"}`}>
                    {faq.question}
                  </span>
                  <div className={`ml-4 shrink-0 rounded-full p-1.5 transition-all ${isOpen ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Still have questions?{" "}
          <Link href="/contact" className="font-bold text-primary underline underline-offset-4 hover:opacity-80">
            Talk to our team
          </Link>
        </p>
      </div>
    </section>
  );
}
