import React from 'react';
import { Award, Users } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface EvidenceSectionProps {
  evidence: PortfolioData['evidence'];
}

export const EvidenceSection: React.FC<EvidenceSectionProps> = ({ evidence }) => {
  return (
    <section id="evidence" className="scroll-mt-28 mb-16 opacity-0 animate-reveal">
      
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2 text-[#E0FF00] text-xs font-mono font-bold uppercase tracking-widest">
          <Award className="w-4 h-4" />
          <span>LEADERSHIP & PROOF</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black uppercase font-syne text-white tracking-tight leading-none">
          LEADERSHIP<br />
          <span className="text-[#E0FF00]">& IMPACT</span>
        </h2>
      </div>

      {/* Achievement Cards explaining WHY it matters */}
      <div className="space-y-4">
        {evidence.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#141414] hover:bg-[#181818] border border-[#222222] hover:border-[#E0FF00]/40 rounded-3xl p-6 sm:p-8 transition-framer hover:scale-[1.01] group"
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center relative z-10">
              
              {/* Left Column: SDE Evidence Details (~65% or full if no stat) */}
              <div className={`w-full ${item.stat ? 'md:w-[65%]' : 'w-full'} flex-1 min-w-0 flex flex-col gap-3`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-syne text-white group-hover:text-[#E0FF00] transition-colors">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <span className="px-3 py-1 bg-[#1e1e1e] border border-neutral-700 text-[#E0FF00] text-xs font-mono rounded-full self-start sm:self-auto shrink-0">
                      {item.subtitle}
                    </span>
                  )}
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  {item.detail}
                </p>

                <div className="mt-2 pt-3 border-t border-neutral-800/80 flex items-start gap-2 text-xs font-mono text-neutral-400">
                  <Users className="w-4 h-4 text-[#E0FF00] shrink-0 mt-0.5" />
                  <span><strong className="text-white">Why it matters:</strong> {item.whyItMatters}</span>
                </div>
              </div>

              {/* Right Column: Stat Pull-out (~35%) */}
              {item.stat && (
                <div className="w-full md:w-[35%] flex justify-start md:justify-end shrink-0 border-t md:border-t-0 md:border-l border-neutral-850 md:border-neutral-800/80 pt-4 md:pt-0 md:pl-6 lg:pl-8">
                  <div className="flex flex-col items-start md:items-end">
                    <span className="text-4xl sm:text-5xl font-black font-syne text-[#E0FF00] leading-none tracking-tight">
                      {item.stat.value}
                    </span>
                    <span className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-400 font-mono mt-2 font-semibold text-left md:text-right max-w-[180px]">
                      {item.stat.label}
                    </span>
                  </div>
                </div>
              )}

            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
