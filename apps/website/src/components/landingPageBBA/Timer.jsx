'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Zap } from 'lucide-react';

export const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds }
  ];

  return (
    <section className="py-24 px-6 bg-background w-full">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="w-full bg-secondary text-secondary-foreground rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative z-10">
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8"
          >
            <Zap size={16} />
            <span>Admissions Closing Soon!</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-serif mb-12">Don&apos;t Miss Your Chance</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {timeUnits.map((unit, index) => (
              <div key={index} className="bg-white/50 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-lg">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={unit.value}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className="text-4xl md:text-6xl font-serif font-bold text-primary mb-2"
                  >
                    {unit.value.toString().padStart(2, '0')}
                  </motion.div>
                </AnimatePresence>
                <div className="text-sm font-bold uppercase tracking-widest opacity-60">{unit.label}</div>
              </div>
            ))}
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-primary-foreground rounded-2xl px-12 py-5 font-bold text-xl shadow-xl transition-all"
          >
            Apply Now
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};
