"use client";

import { motion } from "framer-motion";
import { IndianRupee, CheckCircle, X, CreditCard, AlertCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const included = [
  "All live classes + recorded session access",
  "Paid tools access Ahrefs, SEMrush, Canva Pro",
  "Real ad account access for practice campaigns",
  "Google, Meta & HubSpot certification guidance",
  "Placement support resume, mock interviews, referrals",
  "SkillYards Industry Certificate",
  "Alumni network & 3-month post-course mentor support",
];

const notIncluded = [
  "Laptop (required even a basic one works for this course)",
  "Internet connection",
  "External certification exam fees (most are free we guide you)",
];

export function DGMFeeDetails() {
  return (
    <section className="bg-card/20 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary"
          >
            <IndianRupee size={13} />
            Fee & Financial Details
          </motion.div>
          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            No Hidden Costs.{" "}
            <span className="italic text-primary">No Surprises.</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border-2 border-primary/30 bg-card p-6 shadow-md"
          >
            <p className="mb-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">Total Course Fee</p>
            <p className="mb-1 font-serif text-4xl font-extrabold text-primary">₹15,000</p>
            <p className="mb-5 text-xs text-muted-foreground">One-time payment. EMI available.</p>

            <div className="mb-4 rounded-2xl border border-primary/10 bg-primary/5 p-4">
              <p className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                <CreditCard size={13} /> EMI Options
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• 3 instalments : ₹5,500 / month</li>
                <li>• 4 instalments : ₹4,000 / month</li>
                <li>• Custom plan contact us</li>
              </ul>
            </div>

            <Button asChild className="w-full rounded-full bg-primary font-bold text-primary-foreground">
              <Link href="/contact">Check Early Bird Discount</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="rounded-2xl border border-green-300/40 bg-green-50/50 p-5 dark:border-green-800/30 dark:bg-green-950/10">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-green-700 dark:text-green-400">What&apos;s Included</p>
              <ul className="space-y-2">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle size={14} className="mt-0.5 shrink-0 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-red-300/30 bg-red-50/40 p-4 dark:border-red-800/20 dark:bg-red-950/10">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">Not Included</p>
              <ul className="space-y-1.5">
                {notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <X size={13} className="mt-0.5 shrink-0 text-red-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-5 flex gap-3 rounded-2xl border border-border bg-card p-4"
        >
          <AlertCircle size={18} className="mt-0.5 shrink-0 text-primary" />
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Minimum laptop specs:</strong> Any laptop with 4GB+ RAM running Windows 10 or macOS. Unlike coding, digital marketing tools are browser-based even a basic laptop works fine.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
