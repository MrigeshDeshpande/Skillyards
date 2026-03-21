"use client";

import React from 'react';
import {BBAHero}  from './Hero';
import { Benefits } from './Benefits';
import { BBA_CTA } from './CTA';
import { ComparisonSection } from './ComparisonTable';
import { CoreValues } from './CoreValue';
import { Educators } from './Educators';
import { Mentors } from './Mentors';
import JourneyTimeline from './ProgramPhases';
import { Skills } from './Skills';
import { Stats } from './Stats';
import { Syllabus } from './Syllabus';
import PartnersSlider from '../common/PartnersSlider';

export const LandingPage = () => {
  return (
    <section className="landing-page bg-background text-foreground min-h-screen w-full">
      <div className="w-full bg-background">
        <main className="w-full">
          <BBAHero />
          <Benefits />
          <BBA_CTA />
          <ComparisonSection />
          <CoreValues />
          <Educators />
          <Mentors />
          <JourneyTimeline />
          <Skills />
          <Stats />
          <Syllabus />
          <PartnersSlider />
        </main>
      </div>
    </section>
  );
};
