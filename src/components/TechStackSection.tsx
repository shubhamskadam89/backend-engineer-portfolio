import React from 'react';
import { Server, GitBranch, Cloud, Database, Wrench } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface TechStackSectionProps {
  capabilities: PortfolioData['capabilities'];
}

const categoryIcons: Record<string, React.FC<{ className?: string }>> = {
  Server,
  GitBranch,
  Cloud,
  Database,
};

const categoryColors: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  "Foundations": {
    bg: "bg-[#FF6B2B]/10",
    border: "border-[#FF6B2B]/30",
    text: "text-[#FF6B2B]",
    dot: "bg-[#FF6B2B]"
  },
  "Communication": {
    bg: "bg-[#E0FF00]/10",
    border: "border-[#E0FF00]/30",
    text: "text-[#E0FF00]",
    dot: "bg-[#E0FF00]"
  },
  "Infrastructure": {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-400",
    dot: "bg-blue-400"
  },
  "Data & Storage": {
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    text: "text-purple-400",
    dot: "bg-purple-400"
  },
};

export const TechStackSection: React.FC<TechStackSectionProps> = ({ capabilities }) => {
  return (
    <section id="tech-stack" className="scroll-mt-28 mb-16 opacity-0 animate-reveal">
      
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2 text-[#E0FF00] text-xs font-mono font-bold uppercase tracking-widest">
          <Wrench className="w-4 h-4" />
          <span>ENGINEERING CAPABILITIES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black uppercase font-syne text-white tracking-tight leading-none">
          ENGINEERING<br />
          <span className="text-[#E0FF00]">CAPABILITIES</span>
        </h2>
        <p className="mt-3 text-sm text-neutral-400 max-w-2xl leading-relaxed">
          Tools aren't résumé keywords — they're evidence. Each capability represents how these tools are applied to solve backend problems.
        </p>
      </div>

      {/* Capability Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {capabilities.map((group, idx) => {
          const IconComponent = categoryIcons[group.icon] || Wrench;
          const colors = categoryColors[group.title] || {
            bg: "bg-neutral-800",
            border: "border-neutral-700",
            text: "text-neutral-400",
            dot: "bg-neutral-400"
          };

          return (
            <div
              key={idx}
              className="bg-[#141414] border border-[#222222] hover:border-[#E0FF00]/40 rounded-3xl p-6 transition-framer hover:scale-[1.02] hover:bg-[#1a1a1a] group flex flex-col justify-between"
            >
              <div>
                {/* Category sublabel */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg ${colors.bg} border ${colors.border} mb-3`}>
                  <IconComponent className={`w-3.5 h-3.5 ${colors.text}`} />
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${colors.text}`}>
                    {group.sublabel}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-syne text-white mb-2">
                  {group.title}
                </h3>

                {/* Problem Statement */}
                <p className="text-xs text-neutral-300 leading-relaxed mb-4 font-normal">
                  {group.statement}
                </p>
              </div>

              {/* Tool Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-800/60">
                {group.tools.map((tool, tIdx) => {
                  const isLearning = tool.toLowerCase().includes('(learning)') || tool.toLowerCase().includes('learning');
                  const cleanTool = tool.replace(/\(learning\)/i, '').trim();

                  return (
                    <span
                      key={tIdx}
                      className={`px-2.5 py-1 text-[11px] font-mono rounded-md inline-flex items-center gap-1.5 ${
                        isLearning 
                          ? 'bg-neutral-900/40 border border-dashed border-neutral-700/60 text-neutral-500' 
                          : 'bg-neutral-900 border border-neutral-800 text-neutral-400'
                      }`}
                    >
                      <span>{cleanTool}</span>
                      {isLearning && (
                        <span className="text-[8px] bg-neutral-950 text-neutral-500 px-1 py-0.5 rounded uppercase font-bold tracking-wider border border-neutral-800 leading-none shrink-0 scale-90 origin-right">
                          Learning
                        </span>
                      )}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
