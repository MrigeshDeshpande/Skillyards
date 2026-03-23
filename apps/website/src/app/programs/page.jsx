import { withPageSEO } from "@/lib/seo";
import ProgramsHero from "@/components/programspage/ProgramsHero";
import TrustBar from "@/components/programspage/TrustBar";
import ProgramCards from "@/components/programspage/ProgramCards";
import ComparisonTable from "@/components/programspage/ComparisonTable";
import CurriculumHighlights from "@/components/programspage/CurriculumHighlights";
import PlacementOutcomes from "@/components/programspage/PlacementOutcomes";
import AdmissionProcess from "@/components/programspage/AdmissionProcess";
import BatchFeeInfo from "@/components/programspage/BatchFeeInfo";
import ProgramsFAQ from "@/components/programspage/ProgramsFAQ";
import FinalCTA from "@/components/programspage/FinalCTA";

export const metadata = withPageSEO({
  title: "SkillYards Programs – BCA, BBA, Full-Stack & Digital Marketing in Agra",
  description:
    "Explore SkillYards programs: BCA with on-job training, BBA with digital marketing, Full-Stack Web Development, and Digital Marketing courses in Agra. 95% placement rate.",
  canonical: "https://www.skillyards.in/programs",
  keywords: [
    "BCA with on-job training Agra",
    "BCA admission 2026 Agra",
    "BBA digital marketing degree Agra",
    "full stack development course Agra",
    "digital marketing training institute Agra",
    "IT training institute Agra",
    "SkillYards programs",
  ],
  ogImage: "/images/opengraph/programs-og.jpg",
  twitterImage: "/images/opengraph/programs-twitter.jpg",
});

export default function ProgramsPage() {
  return (
    <main>
      <ProgramsHero />
      <TrustBar />
      <ProgramCards />
      <ComparisonTable />
      <CurriculumHighlights />
      <PlacementOutcomes />
      <AdmissionProcess />
      <BatchFeeInfo />
      <ProgramsFAQ />
      <FinalCTA />
    </main>
  );
}
