"use client";

import { motion } from "framer-motion";
import { CheckCircle, LayoutList } from "lucide-react";

const programs = ["BCA", "BBA", "Full-Stack Dev", "Digital Marketing"];

const rows = [
  { label: "Duration", values: ["3 Years", "3 Years", "6 Months", "3 Months"] },
  { label: "Type", values: ["University Degree", "University Degree", "Skill Course", "Skill Course"] },
  { label: "Eligibility", values: ["12th pass (50%+)", "12th pass (50%+)", "10+2 pass", "10+2 pass"] },
  { label: "Certification", values: ["UG Degree + Certs", "UG Degree + Certs", "Industry Cert", "Google + Meta Cert"] },
  { label: "Placement Support", values: ["Dedicated Cell", "Dedicated Cell", "Job Referrals", "Job Referrals"] },
  { label: "Mode", values: ["Offline", "Offline", "Hybrid", "Hybrid"] },
  { label: "Ideal For", values: ["Freshers / Students", "Freshers / Students", "Students / Grads", "Anyone"] },
  { label: "Fee Range", values: ["Contact us", "Contact us", "Starting ₹25,000", "Starting ₹15,000"] },
  { label: "EMI Available", values: ["Yes", "Yes", "Yes", "Yes"] },
];

export default function ComparisonTable() {
  return (
    <section className="bg-card/30 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary"
          >
            <LayoutList size={13} />
            Compare Programs
          </motion.div>
          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Find the Right Fit —{" "}
            <span className="italic text-primary">Side by Side.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
            Quickly compare all four programs across the details that matter most.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto rounded-3xl border border-border shadow-sm"
        >
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="rounded-tl-3xl px-6 py-4 text-left font-bold">Feature</th>
                {programs.map((p, i) => (
                  <th
                    key={p}
                    className={`px-5 py-4 text-center font-bold ${i === programs.length - 1 ? "rounded-tr-3xl" : ""}`}
                  >
                    {p}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr
                  key={ri}
                  className={`border-t border-border transition-colors hover:bg-primary/5 ${ri % 2 === 0 ? "bg-background" : "bg-card/50"}`}
                >
                  <td className="px-6 py-4 font-semibold text-foreground">{row.label}</td>
                  {row.values.map((val, vi) => (
                    <td key={vi} className="px-5 py-4 text-center text-muted-foreground">
                      {val === "Yes" ? (
                        <CheckCircle size={16} className="mx-auto text-green-500" />
                      ) : (
                        val
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
