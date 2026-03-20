"use client";

import React from "react";
import { motion } from "framer-motion";

/* Wavy SVG path connecting dots — desktop only */
function DesktopCurvyPath({ itemCount }) {
  if (itemCount < 2) return null;

  // Evenly space dot positions along y-axis (0–100)
  const dotYs = Array.from({ length: itemCount }, (_, i) =>
    (i / (itemCount - 1)) * 100
  );

  let d = `M 50 ${dotYs[0]}`;
  for (let i = 0; i < itemCount - 1; i++) {
    const y1 = dotYs[i];
    const y2 = dotYs[i + 1];
    const cp1y = y1 + (y2 - y1) * 0.4;
    const cp2y = y1 + (y2 - y1) * 0.6;
    // Alternate left/right curve to match card alternation
    const xOff = i % 2 === 0 ? 13 : -13;
    d += ` C ${50 + xOff} ${cp1y}, ${50 + xOff} ${cp2y}, 50 ${y2}`;
  }

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="curvyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
          <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      {/* Soft glow behind the path */}
      <path
        d={d}
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.12"
        vectorEffect="non-scaling-stroke"
      />
      {/* Main dashed curvy line */}
      <path
        d={d}
        fill="none"
        stroke="url(#curvyGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="6 4"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default function Timeline({ items, title, subtitle }) {
  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden">

      {/* Ambient Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-150 h-150 bg-primary/10 blur-[140px] rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Heading */}
        {(title || subtitle) && (
          <div className="text-center mb-16 md:mb-24">
            {title && (
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Timeline Wrapper */}
        <div className="relative">

          {/* Desktop curvy SVG path */}
          <DesktopCurvyPath itemCount={items.length} />

          {/* Mobile / tablet vertical gradient line
              Line center = left(15px) + w-0.5(1px) = 16px
              Dot column = w-8(32px), justify-center → dot center = 16px  ✓ */}
          <div
            className="md:hidden absolute top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/80 via-primary/40 to-primary/10"
            style={{ left: "15px" }}
          />

          {/* Items */}
          <div className="space-y-4 md:space-y-32">
            {items.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={index}>

                  {/* ── Mobile / Tablet layout (< md) ── */}
                  <div className="md:hidden flex items-start">

                    {/* Dot column — 32px wide, dot centered at 16px = line center */}
                    <div className="w-8 shrink-0 flex justify-center pt-4.5 z-10">
                      <div className="relative flex items-center justify-center">
                        <motion.div
                          animate={{ scale: [1, 2, 1], opacity: [0.15, 0.45, 0.15] }}
                          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.25 }}
                          className="absolute w-4 h-4 bg-primary/50 rounded-full"
                        />
                        <div className="relative z-10 w-2.5 h-2.5 rounded-full bg-primary" />
                      </div>
                    </div>

                    {/* Card */}
                    <motion.div
                      initial={{ opacity: 0, x: 18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.06 }}
                      viewport={{ once: true }}
                      className="flex-1 py-1 pr-0.5"
                    >
                      <div className="group relative p-4 rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors duration-200">
                        <TimelineCard item={item} />
                      </div>
                    </motion.div>
                  </div>

                  {/* ── Desktop layout (≥ md) ── */}
                  <div className="hidden md:flex items-stretch justify-between gap-4">

                    {/* LEFT CARD */}
                    {isLeft ? (
                      <div className="w-[calc(50%-1rem)]">
                        <motion.div
                          initial={{ opacity: 0, x: -40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                          viewport={{ once: true }}
                          className="group relative p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-xl shadow-lg hover:-translate-y-2 transition-all h-full"
                        >
                          <TimelineCard item={item} />
                        </motion.div>
                      </div>
                    ) : (
                      <div className="w-[calc(50%-1rem)]" />
                    )}

                    {/* CENTER DOT */}
                    <div className="flex flex-col items-center justify-start">
                      <motion.div
                        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute w-12 h-12 bg-primary/30 rounded-full blur-xl"
                      />
                      <div className="relative z-20 w-6 h-6 rounded-full bg-primary border-4 border-background shadow-lg shrink-0" />
                    </div>

                    {/* RIGHT CARD */}
                    {!isLeft ? (
                      <div className="w-[calc(50%-1rem)]">
                        <motion.div
                          initial={{ opacity: 0, x: 40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                          viewport={{ once: true }}
                          className="group relative p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-xl shadow-lg hover:-translate-y-2 transition-all h-full"
                        >
                          <TimelineCard item={item} />
                        </motion.div>
                      </div>
                    ) : (
                      <div className="w-[calc(50%-1rem)]" />
                    )}

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Timeline Card Content */
function TimelineCard({ item }) {
  const Icon = item.icon;

  return (
    <>
      <div className="mb-4 flex items-center gap-3">
        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0">
          <Icon size={20} />
        </div>
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
          {item.duration}
        </span>
      </div>

      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
        {item.title}
      </h3>

      <p className="text-muted-foreground text-sm leading-relaxed">
        {item.description}
      </p>

      {/* Hover Glow */}
      <div className="absolute inset-0 rounded-2xl bg-primary/10 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
    </>
  );
}
