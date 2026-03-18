import React from 'react';
import { Hero } from './Hero';
import { Benefits } from './Benefits';
import { CTA } from './CTA';
import ComparisonSection from './ComparisonTable';
import  CoreValues from './CoreValue';
import { Educators } from './Educators';
import { Mentors } from './Mentors';
import { ProgramPhases } from './ProgramPhases';
import { QuoteSection } from './QuoteSection';
import { Skills } from './Skills';
import { Stats } from './Stats';
import Syllabus from './Syllabus';
import PartnersSlider from '../common/PartnersSlider';

export const LandingPage = () => {
  return (
    <section className="landing-page bg-background text-foreground min-h-screen w-full">
      <div className="w-full bg-background">
        <main className="w-full">
          <Hero />
          <Benefits />
          <CTA />
          <ComparisonSection />
          <CoreValues />
          <Educators />
          <Mentors />
          <ProgramPhases />
          <QuoteSection />
          <Skills />
          <Stats />
          <Syllabus />
          <PartnersSlider />
        </main>
        <footer className="py-12 px-4 border-t border-border text-center text-muted-foreground w-full bg-background">
          <div className="w-full">
            <p className="mb-4">© 2026 SkillYards. All rights reserved.</p>
            <div className="flex justify-center gap-6 text-sm">
              <a href="#" className="hover:text-primary">Privacy Policy</a>
              <a href="#" className="hover:text-primary">Terms of Service</a>
              <a href="#" className="hover:text-primary">Contact Us</a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};
