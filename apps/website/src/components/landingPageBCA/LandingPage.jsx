"use client";

import React from 'react';
import { BCAHero } from './Hero';
import { BCABenefits } from './Benefits';
import { BCA_CTA } from './CTA';
import { BCAComparisonSection } from './ComparisonTable';
import { BcaCoreValues } from './CoreValue';
import { BCAEducators } from './Educators';
import BCAJourneyTimeline from './ProgramPhases';
import { BCASkills } from './Skills';
import { BCAStats } from './Stats';
import { BCASyllabus } from './Syllabus';
import PartnersSlider from '../common/PartnersSlider';

export const BCALandingPage = () => {
  return (
    <section className="landing-page bg-background text-foreground min-h-screen w-full">
      <div className="w-full bg-background">
        <main className="w-full">
          <BCAHero />
          <BCABenefits />
          <BCA_CTA />
          <BCAComparisonSection />
          <BcaCoreValues />
          <BCAEducators />
          <BCAJourneyTimeline />
          <BCASkills />
          <BCAStats />
          <BCASyllabus />
          <PartnersSlider />
        </main>
      </div>
    </section>
  );
};
