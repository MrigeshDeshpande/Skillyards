"use client";

import { Card, CardContent } from "@/components/ui/card";
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

const colors = {
  primary: "#f9bf1e",       // Golden Yellow (Primary)
  secondary: "#9DE4E1",     // Aqua Blue
  accent: "#FFD166",        // Lemon Yellow
  shadow: "#313451",        // Deep Navy
  background: "#FFFFFF",    // White
  lightBg: "#D0D0D0",       // Light Gray
  gradientStart: "#F0F2F5", // Light Gray
  gradientEnd: "#FFFFFF",   // White
  textDark: "#1F2937",      // Dark Gray
  textMedium: "#4B5563",    // Medium Gray
  border: "#E5E7EB",        // Light Border
};

const coreValues = [
  {
    title: "1:1 Mentorship with Industry Veterans",
    description:
      "Received tailored advice from experienced instructors who have walked your desired path. They guide you to refine your mistakes, abilities, and accelerate your progress. ",
    icon: UserCheck,
  },
  {
    title: "Real-World Projects & Case Studies",
    description:
      "Tackle real-world challenges and industry scenarios to create a portfolio that showcases your industry-ready skills from day one of your BBA course.",
    icon: Briefcase,
  },
  {
    title: "Personalized Career Support",
    description:
      "Get personalized guidance at every phase, from crafting your resume and practicing mock interviews to strategic career planning.",
    icon: Target,
  },
  {
    title: "100% Placement Guarantee",
    description:
      "Secure your dream career with confidence! Leverage our robust hiring network and gain expert support for interviews, job applications, and salary negotiations—your ideal career is our responsibility!",
    icon: ShieldCheck,
  },
  {
    title: "Live Interactive Classes",
    description:
      "Participate in interactive, live sessions with expert instructors, where you can ask questions, gain experience, and receive personalized feedback.",
    icon: Video,
  },
  {
    title: "Customized Content",
    description:
      "Study what aligns with your career goals through courses customized to your objectives, speed, and unique learning preferences.",
    icon: Sliders,
  },
  {
    title: "500+ Hiring Partners",
    description:
      "Link up with leading MNCs eager to hire skilled professionals, paving a direct route to your dream career.",
    icon: Building2,
  },
  {
    title: "Top Instructors",
    description:
      "Gain insights from industry experts who bring value, practical knowledge to every session.",
    icon: GraduationCap,
  },
  {
    title: "Industry Immersion",
    description:
      "Discover how your skills transform to real-world scenarios through hands-on workshops, guest lectures, and company-driven projects that equip you for the workplace.",
    icon: Activity,
  },
];

const CoreValues = () => {
  return (
    <section className="py-10 sm:py-16 md:py-20" style={{ backgroundColor: colors.lightBg }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-yellow-600"
          >
            Learning Today, Earning Tomorrow.
          </h2>
          <p
            className="text-sm sm:text-base max-w-2xl sm:max-w-3xl mx-auto font-semibold"
            style={{ color: colors.textMedium }}
          >
            Our core values prioritize practical skills and industry readiness
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 items-stretch">
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="transition-all duration-300 rounded-2xl overflow-hidden group min-h-[140px] sm:min-h-[160px] lg:min-h-[180px] hover:scale-[1.03]"
                style={{
                  backgroundColor: colors.background,
                  borderColor: colors.border,
                  borderWidth: 1,
                  borderStyle: "solid",
                  boxShadow: `0 4px 12px ${colors.shadow}10`,
                }}
              >
                <CardContent className="p-4 sm:p-5 h-full flex flex-col justify-start">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className="p-2 sm:p-3 rounded-full transition-colors duration-300"
                      style={{
                        backgroundColor: `${colors.primary}20`,
                        color: colors.primary,
                      }}
                    >
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div>
                      <h3
                        className="text-base sm:text-lg font-semibold leading-snug mb-1 sm:mb-2"
                        style={{ color: colors.textDark }}
                      >
                        {value.title}
                      </h3>
                      <p
                        className="text-sm sm:text-base leading-normal"
                        style={{ color: colors.textMedium }}
                      >
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
