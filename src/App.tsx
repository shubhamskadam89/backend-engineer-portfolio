import React, { useState, useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react";
import { initialPortfolioData, PortfolioData } from './data/portfolioData';
import { ProfileCard } from './components/ProfileCard';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ExperienceSection } from './components/ExperienceSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { TechStackSection } from './components/TechStackSection';
import { EvidenceSection } from './components/EvidenceSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const [data] = useState<PortfolioData>(initialPortfolioData);
  const [activeSection, setActiveSection] = useState<string>('overview');

  // Scroll spy to highlight active section in Navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'philosophy', 'experience', 'case-studies', 'tech-stack', 'evidence', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] font-sans selection:bg-[#E0FF00] selection:text-black relative [overflow-x:clip]">
      
      {/* Background Ambient Glows */}
      <div className="fixed top-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#E0FF00] rounded-full blur-[180px] opacity-[0.04] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#FF6B2B] rounded-full blur-[180px] opacity-[0.03] pointer-events-none z-0"></div>
      <div className="fixed top-0 left-12 w-[1px] h-full bg-gradient-to-b from-transparent via-[#222222] to-transparent opacity-40 pointer-events-none z-0 hidden lg:block"></div>

      {/* Top Floating Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Top Status Indicator - Clean absolute placement at top right */}
      <div className="absolute top-[26px] right-4 sm:right-6 md:right-8 flex items-center gap-2 z-40 pointer-events-none">
        <div className="w-1.5 h-1.5 rounded-full bg-[#E0FF00] animate-pulse"></div>
        <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-semibold">
          Open to opportunities
        </span>
      </div>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-20 pb-20 relative z-10">

        {/* Top Hero & Profile Row (Home Section) */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16 items-center">
          
          {/* Hero Section */}
          <div className="flex-1 min-w-0">
            <HeroSection
              personal={data.personal}
              onExploreCaseStudies={() => scrollToSection('case-studies')}
              onExploreTechStack={() => scrollToSection('tech-stack')}
            />
          </div>

          {/* Profile Card (Right side on desktop, not sticky) */}
          <ProfileCard
            data={data.personal}
            onContactClick={() => scrollToSection('contact')}
          />

        </div>

        {/* Full-width stream for remaining sections */}
        <div className="space-y-16">
          
          {/* 2. My Story & Engineering Philosophy */}
          <PhilosophySection
            philosophy={data.philosophy}
            journey={data.journey}
          />

          {/* 3. Engineering Experience */}
          <ExperienceSection experience={data.experience} />

          {/* 4. Engineering Case Studies */}
          <CaseStudiesSection caseStudies={data.caseStudies} />

          {/* 5. Capabilities (Problem Solving Focus) */}
          <TechStackSection capabilities={data.capabilities} />

          {/* 6. Leadership & Ownership */}
          <EvidenceSection evidence={data.evidence} />

          {/* 7. Contact */}
          <ContactSection personal={data.personal} />

        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-900 bg-[#0a0a0a] py-6 px-4 text-center text-xs text-neutral-600 font-mono">
        <div className="max-w-7xl mx-auto">
          © {new Date().getFullYear()} {data.personal.name}. All rights reserved.
        </div>
      </footer>

      <Analytics />
    </div>
  );
}
