import { buildSEO } from "@/lib/seo/buildSEO";
import { DGMLandingPage } from "@/components/landingPageDGM/LandingPage";

export const metadata = buildSEO({
  title: "Digital Marketing Course in Agra with Placement | SkillYards OJT",
  description:
    "4-month Digital Marketing On-Job Training in Agra. Run real Google Ads & Meta campaigns. Earn Google, Meta & HubSpot certifications. 95% placement rate. Starting ₹15,000.",
  path: "/programs/digitalmarketing",
  keywords: [
    "digital marketing course Agra",
    "digital marketing training institute Agra",
    "digital marketing course with placement Agra",
    "digital marketing classes in Agra",
    "SEO course Agra",
    "Google Ads training Agra",
    "social media marketing course Agra",
    "digital marketing certification Agra",
  ],
  ogImage: "/images/opengraph/digitalmarketing-og.jpg",
});

export default function DigitalMarketingPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <DGMLandingPage />
    </div>
  );
}