"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  UserCheck,
  Briefcase,
  Target,
  ShieldCheck,
  Video,
  Sliders,
  Building2,
  GraduationCap,
  Activity,
} from "lucide-react";

const coreValues = [
  {
    title: "1:1 Mentorship",
    description: "Receive tailored advice from experienced instructors who have walked your desired path.",
    icon: <UserCheck />,
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Real-World Projects",
    description: "Tackle real challenges and industry scenarios to create a portfolio that showcases your skills.",
    icon: <Briefcase />,
    color: "bg-secondary/10 text-secondary",
  },
  {
    title: "Career Support",
    description: "Get personalized guidance from crafting your resume to strategic career planning.",
    icon: <Target />,
    color: "bg-accent/10 text-accent",
  },
  {
    title: "Placement Guarantee",
    description: "Secure your dream career with confidence through our robust hiring network.",
    icon: <ShieldCheck />,
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Live Interactive Classes",
    description: "Participate in live sessions with experts where you can ask questions and gain insights.",
    icon: <Video />,
    color: "bg-secondary/10 text-secondary",
  },
  {
    title: "Customized Content",
    description: "Study what aligns with your goals through courses customized to your preferences.",
    icon: <Sliders />,
    color: "bg-accent/10 text-accent",
  },
  {
    title: "Elite Hiring Partners",
    description: "Connect with leading MNCs eager to hire skilled professionals from SkillYards.",
    icon: <Building2 />,
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Top-Tier Instructors",
    description: "Gain insights from industry experts who bring value and practical knowledge.",
    icon: <GraduationCap />,
    color: "bg-secondary/10 text-secondary",
  },
  {
    title: "Industry Immersion",
    description: "Hands-on workshops and guest lectures that equip you for the real-world workplace.",
    icon: <Activity />,
    color: "bg-accent/10 text-accent",
  },
];

export const CoreValues = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            The SkillYards Pillars
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold mb-6 tracking-tight"
          >
            Learning Today, <span className="text-primary italic">Earning Tomorrow.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg md:text-xl leading-relaxed"
          >
            Our core values prioritize practical skills and industry readiness, ensuring every student is prepared for the high-demand digital economy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group bg-card hover:bg-accent hover:text-accent-foreground rounded-[2rem] p-8 border border-border/50 hover:border-primary/20 shadow-xs hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${value.color}`}>
                  {React.cloneElement(value.icon, { size: 28 })}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed group-hover:text-foreground/80 transition-colors">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


