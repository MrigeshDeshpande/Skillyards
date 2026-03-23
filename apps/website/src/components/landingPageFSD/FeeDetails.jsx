"use client";

import { motion } from "framer-motion";
import { IndianRupee, CheckCircle, X, CreditCard, AlertCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const included = [
  "All live classes + recorded session access",
  "Mentor-led code reviews",
  "Project resources and templates",
  "Placement support — resume, mock interviews, referrals",
  "SkillYards Industry Certificate",
  "GitHub portfolio guidance",
  "Alumni community access",
];

const notIncluded = [
  "Laptop (required — see minimum specs below)",
  "Internet connection",
  "Any external certification exam fees (e.g. AWS)",
];

export function FSDFeeDetails() {
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
          {/* Fee card */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border-2 border-primary/30 bg-card p-6 shadow-md"
          >
            <p className="mb-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">Total Course Fee</p>
            <p className="mb-1 font-serif text-4xl font-extrabold text-primary">₹25,000</p>
            <p className="mb-5 text-xs text-muted-foreground">One-time payment. EMI available.</p>

            <div className="mb-4 rounded-2xl bg-primary/5 border border-primary/10 p-4">
              <p className="mb-2 text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
                <CreditCard size={13} /> EMI Options
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• 3 instalments — ₹9,000 / month</li>
                <li>• 6 instalments — ₹4,500 / month</li>
                <li>• Custom plan — contact us</li>
              </ul>
            </div>

            <Button asChild className="w-full rounded-full bg-primary font-bold text-primary-foreground">
              <Link href="/contact">Check Early Bird Discount</Link>
            </Button>
          </motion.div>

          {/* What's included / not */}
          <motion.div
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="rounded-2xl border border-green-300/40 bg-green-50/50 p-5 dark:border-green-800/30 dark:bg-green-950/10">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-green-700 dark:text-green-400">
                What&apos;s Included
              </p>
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
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                Not Included
              </p>
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

        {/* Laptop specs notice */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-5 flex gap-3 rounded-2xl border border-border bg-card p-4"
        >
          <AlertCircle size={18} className="mt-0.5 shrink-0 text-primary" />
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Minimum laptop specs required:</strong> Intel Core i5 / Ryzen 5 or above, 8GB RAM, 256GB SSD, Windows 10 / macOS. A laptop is mandatory — this is a practical course.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
