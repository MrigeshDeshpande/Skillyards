"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Plus, Minus } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Do I need any prior marketing or tech knowledge?",
    answer: "None at all. The course starts from the very beginning — what digital marketing is, why it matters, and how each channel works. If you can use Instagram and search on Google, you have everything you need to start.",
  },
  {
    question: "Do I need to know coding?",
    answer: "No. Digital marketing is creative and analytical — not technical. You'll learn to use tools, run campaigns, and read data. The most technical thing you'll do is set up a WordPress site, which requires no coding.",
  },
  {
    question: "Is a laptop mandatory? What specs do I need?",
    answer: "Yes, a laptop is required. Any laptop with 4GB+ RAM running Windows 10 or macOS works — digital marketing tools are browser-based, so even an older machine is fine. This is much more accessible than coding courses.",
  },
  {
    question: "Will I get access to paid tools like Ahrefs or SEMrush?",
    answer: "Yes. Tool access is included during the course — you don't need to subscribe yourself. This includes Ahrefs, SEMrush (or Ubersuggest), Canva Pro, and Google Workspace. These are the same tools working professionals use daily.",
  },
  {
    question: "Are the campaigns run on real client accounts with real money?",
    answer: "Yes, from Month 2. You run live Google Ads and Meta Ads campaigns on real client accounts — with real budgets and real targets. You'll have actual performance data (ROAS, CPL, impressions) for your portfolio. This is the biggest differentiator of SkillYards training.",
  },
  {
    question: "What certifications will I earn?",
    answer: "During the course we guide you through earning: Google Ads Certification (Search), Google Analytics 4 Certification, Meta Blueprint Certification, and HubSpot Content Marketing Certification. All four are free to take — we just make sure you're prepared and have time built into the schedule.",
  },
  {
    question: "Is placement guaranteed? What does that actually mean?",
    answer: "95% of eligible students are placed — meaning we actively work on your behalf: resume building, mock interviews, referrals to 180+ hiring partners, and direct introductions where possible. We don't guarantee a specific salary or force a company to hire you. But we don't stop until you have offers to evaluate.",
  },
  {
    question: "Can I freelance after this course? Will SkillYards help me find clients?",
    answer: "Many graduates do freelance — especially local business owners and homemakers. We cover freelancing setup in Month 4: pricing, proposals, contracts, and client communication. While we don't directly find freelance clients, the skills and portfolio you build make it straightforward to start approaching local businesses.",
  },
  {
    question: "Are there evening or weekend batches for working professionals?",
    answer: "Yes. We offer weekday morning, weekday evening, and weekend batches. Working professionals commonly join evening or weekend batches. Discuss options during your free demo session.",
  },
  {
    question: "What language are classes taught in?",
    answer: "Hinglish — Hindi mixed with English. Technical terms and tools are in English, but explanations are in Hindi or Hinglish to make sure everyone understands deeply. No prior English fluency required.",
  },
  {
    question: "How is this different from doing a free Google Digital Garage course?",
    answer: "Google Digital Garage teaches concepts. SkillYards OJT makes you execute them — on real accounts, with real budgets, with a mentor watching and correcting your work. The difference between watching a video about running a campaign and actually running one is a job offer.",
  },
  {
    question: "Can small business owners join to grow their own business?",
    answer: "Absolutely — and several do. If you run or help run a family business, you can apply everything you learn to your own brand in real time. Many graduates report growing their business during the course itself, not just after.",
  },
];

export function DGMFAQ() {
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
            Every Question You Have.{" "}
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
                transition={{ delay: idx * 0.03 }}
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
