"use client";

import { FSDHero } from "./Hero";
import { FSDProgramAtGlance } from "./ProgramAtGlance";
import { FSDOJTExplained } from "./OJTExplained";
import { FSDCurriculum } from "./Curriculum";
import { FSDTechStack } from "./TechStack";
import { FSDPortfolioProjects } from "./PortfolioProjects";
import { FSDWhoIsThisFor } from "./WhoIsThisFor";
import { FSDComparisonTable } from "./ComparisonTable";
import { FSDDayInTheLife } from "./DayInTheLife";
import { FSDPlacementOutcomes } from "./PlacementOutcomes";
import { FSDAdmissionProcess } from "./AdmissionProcess";
import { FSDFeeDetails } from "./FeeDetails";
import { FSDFAQ } from "./FAQ";
import { FSDFinalCTA } from "./FinalCTA";
import PartnersSlider from "@/components/common/PartnersSlider";

export function FSDLandingPage() {
  return (
    <main className="w-full bg-background text-foreground">
      <FSDHero />
      <FSDProgramAtGlance />
      <FSDOJTExplained />
      <FSDCurriculum />
      <FSDTechStack />
      <FSDPortfolioProjects />
      <FSDWhoIsThisFor />
      <FSDComparisonTable />
      <FSDDayInTheLife />
      <FSDPlacementOutcomes />
      <PartnersSlider />
      <FSDAdmissionProcess />
      <FSDFeeDetails />
      <FSDFAQ />
      <FSDFinalCTA />
    </main>
  );
}
