"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-linear-to-br from-foreground to-muted-foreground py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center overflow-hidden bg-background w-full",
        className
      )}>
      <div
        className="absolute top-0 flex w-full h-[600px] scale-y-[1.1] md:scale-y-125 items-center justify-center isolate z-0 -translate-y-1/4 md:-translate-y-1/3">
        {/* Lamp Light Sources - Switch off in light mode */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-center w-full h-full opacity-0 dark:opacity-100 transition-opacity duration-1000 pt-32">
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto right-1/2 h-56 overflow-visible w-120 bg-gradient-conic from-primary via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]">
            <div
              className="absolute w-full left-0 bg-background h-40 bottom-0 z-20 mask-[linear-gradient(to_top,white,transparent)]" />
            <div
              className="absolute w-40 h-full left-0 bg-background bottom-0 z-20 mask-[linear-gradient(to_right,white,transparent)]" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto left-1/2 h-56 w-120 bg-gradient-conic from-transparent via-transparent to-primary text-white [--conic-position:from_290deg_at_center_top]">
            <div
              className="absolute w-40 h-full right-0 bg-background bottom-0 z-20 mask-[linear-gradient(to_left,white,transparent)]" />
            <div
              className="absolute w-full right-0 bg-background h-40 bottom-0 z-20 mask-[linear-gradient(to_top,white,transparent)]" />
          </motion.div>

          {/* Backdrop blockers to blend it into the background */}
          <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-background blur-2xl"></div>
          <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
          
          {/* Glowing orbs */}
          <div className="absolute inset-auto z-50 h-36 w-md -translate-y-1/2 rounded-full bg-primary/40 blur-3xl"></div>
          
          <motion.div
            initial={{ width: "8rem" }}
            whileInView={{ width: "16rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="absolute inset-auto z-30 h-36 w-64 -translate-y-24 rounded-full bg-primary/30 blur-2xl"></motion.div>
            
          <motion.div
            initial={{ width: "15rem" }}
            whileInView={{ width: "30rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="absolute inset-auto z-50 h-0.5 w-120 -translate-y-28 bg-primary "></motion.div>

          {/* Sharp cut-off blocker */}
          <div className="absolute inset-auto z-40 h-44 w-full -translate-y-50 bg-background"></div>
        </div>
      </div>
      
      {/* Content wrapper */}
      <div className="relative z-50 flex flex-col w-full px-5">
        {children}
      </div>
    </div>
  );
};
