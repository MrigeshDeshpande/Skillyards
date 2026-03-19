"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Timeline({ items, title, subtitle }) {
  return (
    <section className="relative py-32 bg-background overflow-hidden">

      {/* Ambient Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-150 h-150 bg-primary/10 blur-[140px] rounded-full" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Heading */}
        {(title || subtitle) && (
          <div className="text-center mb-24">
            {title && (
              <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Timeline Wrapper */}
        <div className="relative">

          {/* Items */}
          <div className="space-y-32">
            {items.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative flex items-stretch justify-between gap-4"
                >

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
                    {/* Breathing Glow */}
                    <motion.div
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute w-12 h-12 bg-primary/30 rounded-full blur-xl"
                    />

                    {/* Dot */}
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
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
          <Icon size={20} />
        </div>
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
          {item.duration}
        </span>
      </div>

      <h3 className="text-xl font-bold text-foreground mb-2">
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
