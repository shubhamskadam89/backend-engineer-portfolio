import React from 'react';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface ExperienceSectionProps {
  experience: PortfolioData['experience'];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
  return (
    <section id="experience" className="scroll-mt-28 mb-16 opacity-0 animate-reveal">
      
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2 text-[#E0FF00] text-xs font-mono font-bold uppercase tracking-widest">
          <Briefcase className="w-4 h-4" />
          <span>PRODUCTION & COLLABORATION</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black uppercase font-syne text-white tracking-tight leading-none">
          ENGINEERING<br />
          <span className="text-[#E0FF00]">EXPERIENCE</span>
        </h2>
      </div>

      {/* Experience Item Cards */}
      <div className="space-y-4">
        {experience.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#141414] hover:bg-[#181818] border border-[#222222] hover:border-[#E0FF00]/40 rounded-3xl p-6 sm:p-8 transition-framer relative overflow-hidden shadow-xl"
          >
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center relative z-10">
              
              {/* Left Column: SDE Experience Details (~65%) */}
              <div className="w-full lg:w-[65%] flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-syne text-white">
                      {item.role}
                    </h3>
                    <p className="text-xs font-mono text-[#E0FF00] font-semibold">
                      {item.company}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs font-mono rounded-full self-start sm:self-auto">
                    {item.period}
                  </span>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                <ul className="space-y-2 pt-3 border-t border-neutral-800/80">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-xs text-neutral-400 leading-relaxed font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E0FF00] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Verified Metrics Panel (~35%) */}
              <div className="w-full lg:w-[35%] shrink-0">
                <div className="bg-[#0A0A0A] border border-neutral-800/80 rounded-2xl p-4 font-mono text-[11px] text-neutral-400 space-y-4 shadow-inner">
                  <div className="flex items-center justify-between pb-2 border-b border-neutral-900">
                    <span className="text-[9px] text-neutral-500 uppercase tracking-widest font-semibold">VERIFIED PERFORMANCE METRICS</span>
                    <span className="text-[9px] text-[#E0FF00] font-bold">Agile Delivery</span>
                  </div>
                  
                  <div className="space-y-3.5">
                    {/* CI/CD Release Time Metric */}
                    <div>
                      <div className="flex justify-between text-[10px] text-neutral-300 mb-1">
                        <span>CI/CD Release Time</span>
                        <span className="text-[#E0FF00] font-bold">&lt; 2 mins</span>
                      </div>
                      <div className="flex justify-between text-[9px] text-neutral-500">
                        <span>Baseline: ~15 mins</span>
                        <span className="text-[#E0FF00]/80">~86% reduction</span>
                      </div>
                      <div className="w-full h-1 bg-neutral-905 rounded-full mt-1.5 overflow-hidden">
                        <div className="h-full bg-[#E0FF00] w-[86%] rounded-full"></div>
                      </div>
                    </div>

                    <div className="h-[1px] bg-neutral-900"></div>

                    {/* Query Latency Metric */}
                    <div>
                      <div className="flex justify-between text-[10px] text-neutral-300 mb-1">
                        <span>MySQL Query Execution</span>
                        <span className="text-[#E0FF00] font-bold">-40% Time</span>
                      </div>
                      <div className="flex justify-between text-[9px] text-neutral-500">
                        <span>N+1 Queries Eliminated</span>
                        <span className="text-[#E0FF00]/80">Optimized</span>
                      </div>
                      <div className="w-full h-1 bg-neutral-905 rounded-full mt-1.5 overflow-hidden">
                        <div className="h-full bg-[#E0FF00] w-[40%] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
