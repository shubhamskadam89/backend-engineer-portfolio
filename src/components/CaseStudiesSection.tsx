import React, { useState } from 'react';
import { ArrowUpRight, FlaskConical, HelpCircle, Thermometer } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { CaseStudyModal } from './CaseStudyModal';

interface CaseStudiesSectionProps {
  caseStudies: Project[];
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ caseStudies }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="case-studies" className="scroll-mt-28 mb-16 opacity-0 animate-reveal">
      
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2 text-[#E0FF00] text-xs font-mono font-bold uppercase tracking-widest">
          <FlaskConical className="w-4 h-4" />
          <span>EXPLORATIONS & PROOF</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black uppercase font-syne text-white tracking-tight leading-none">
          ENGINEERING<br />
          <span className="text-neutral-400">CASE STUDIES</span>
        </h2>
      </div>

      {/* Case Studies List */}
      <div className="space-y-6">
        {caseStudies.map((project, index) => (
          <div key={project.id} className="space-y-3">
            <div
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-[#141414] hover:bg-[#1a1a1a] border border-[#222222] hover:border-[#E0FF00]/50 rounded-3xl p-6 sm:p-8 transition-framer relative overflow-hidden shadow-xl"
            >
              {/* Index number */}
              <div className="absolute top-4 right-6 text-[80px] font-black text-neutral-900 font-syne leading-none pointer-events-none select-none group-hover:text-neutral-800 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="relative z-10 space-y-5">
                
                {/* Header & Question Hook */}
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <span className="px-2.5 py-0.5 bg-neutral-900 border border-neutral-800 text-[10px] font-mono uppercase font-bold text-[#E0FF00] rounded-full inline-block mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold font-syne text-white group-hover:text-[#E0FF00] transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <div className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 group-hover:bg-[#E0FF00] group-hover:text-black group-hover:border-lime-400 transition-all duration-300 shrink-0">
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Engineering Question Hook */}
                  <div className="flex items-start gap-2 p-3 bg-neutral-900/80 border border-neutral-800 rounded-xl">
                    <HelpCircle className="w-4 h-4 text-[#E0FF00] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm font-semibold text-white font-mono leading-relaxed">
                      Question: {project.question}
                    </p>
                  </div>
                </div>

                {/* 4-Step Lifecycle Flow: Problem -> Architecture -> Decision -> Outcome */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  
                  <div className="p-3 bg-neutral-900/40 rounded-xl border border-neutral-800/80">
                    <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-neutral-400 block mb-1">
                      Problem
                    </span>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="p-3 bg-neutral-900/40 rounded-xl border border-neutral-800/80">
                    <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-neutral-400 block mb-1">
                      Architecture
                    </span>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {project.architecture}
                    </p>
                  </div>

                  <div className="p-3 bg-neutral-900/40 rounded-xl border border-neutral-800/80">
                    <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-neutral-400 block mb-1">
                      Decision
                    </span>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {project.decision}
                    </p>
                  </div>

                  <div className="p-3 bg-[#E0FF00]/5 rounded-xl border border-[#E0FF00]/20">
                    <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-[#E0FF00] block mb-1">
                      Outcome
                    </span>
                    <p className="text-xs text-neutral-200 font-medium leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>

                  {project.rateLimiting && (
                    <div className="p-3 bg-neutral-900/40 rounded-xl border border-neutral-800/80 sm:col-span-2">
                      <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-neutral-400 block mb-1">
                        Rate Limiting Strategy
                      </span>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        {project.rateLimiting}
                      </p>
                    </div>
                  )}

                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-neutral-800/60">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-neutral-900 text-neutral-400 text-[11px] font-mono rounded-md border border-neutral-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>

            {project.id === 'api-comm-lab' && (
              <div className="bg-[#101010] border border-[#222222]/80 rounded-2xl p-5 mt-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all duration-300">
                {/* Left column (65%) */}
                <div className="w-full md:w-[65%] space-y-2">
                  <div className="flex items-center gap-2 text-neutral-400 font-mono text-[10px] tracking-widest uppercase font-bold">
                    <Thermometer className="w-4 h-4 text-[#E0FF00]" />
                    <span>Cold Start vs Warm JVM</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed max-w-xl">
                    A cold JVM responded ~60% slower than a warmed one — a good reminder of why production systems get warm-up traffic before going live.
                  </p>
                </div>

                {/* Right column (35%) */}
                <div className="w-full md:w-[35%] flex flex-col items-start md:items-end justify-center shrink-0 border-t md:border-t-0 border-[#222222]/60 pt-4 md:pt-0">
                  <span className="text-2xl font-black font-syne text-[#E0FF00] tracking-tight leading-none">
                    30ms → 12ms
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono mt-2 font-semibold">
                    ~60% faster once JIT kicks in
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
};
