import React from 'react';
import { Compass, Milestone } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface PhilosophySectionProps {
  philosophy: string;
  journey: PortfolioData['journey'];
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({ philosophy, journey }) => {
  return (
    <section id="philosophy" className="scroll-mt-28 mb-16 opacity-0 animate-reveal space-y-8">
      
      {/* 1. Philosophy Box */}
      <div>
        <div className="flex items-center gap-2 mb-2 text-[#E0FF00] text-xs font-mono font-bold uppercase tracking-widest">
          <Compass className="w-4 h-4" />
          <span>ENGINEERING MINDSET</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black uppercase font-syne text-white tracking-tight leading-none mb-6">
          ENGINEERING<br />
          <span className="text-[#E0FF00]">PHILOSOPHY</span>
        </h2>

        <div className="bg-[#141414] border border-[#222222] rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#E0FF00]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center relative z-10">
            
            {/* Left Column: Quote Text (~65%) */}
            <div className="w-full lg:w-[65%]">
              <p className="text-base sm:text-lg text-neutral-200 leading-relaxed font-normal italic">
                "{philosophy}"
              </p>
            </div>

            {/* Right Column: Visual Panel (~35%) */}
            <div className="w-full lg:w-[35%] shrink-0">
              <div className="bg-[#0A0A0A] border border-neutral-800/80 rounded-2xl p-4 font-mono text-[11px] text-neutral-400 space-y-3 shadow-inner">
                <div className="flex items-center justify-between pb-2 border-b border-neutral-900">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-neutral-800"></div>
                    <div className="w-2 h-2 rounded-full bg-[#E0FF00]/50 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-[#E0FF00]"></div>
                  </div>
                  <span className="text-[9px] text-neutral-500 uppercase tracking-widest font-semibold">benchmarks.sh</span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-[9px] text-neutral-500">
                    <span>METRIC</span>
                    <span>REST</span>
                    <span>gRPC</span>
                  </div>
                  <div className="h-[1px] bg-neutral-900"></div>
                  <div className="flex justify-between">
                    <span>Latency (p99)</span>
                    <span className="text-neutral-500">12.4ms</span>
                    <span className="text-[#E0FF00] font-bold">4.2ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Throughput</span>
                    <span className="text-neutral-500">4.2k rps</span>
                    <span className="text-[#E0FF00] font-bold">12.4k rps</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payload Size</span>
                    <span className="text-neutral-500">1.2kb</span>
                    <span className="text-[#E0FF00] font-bold">0.5kb</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-neutral-900 flex items-center justify-between text-[9px]">
                  <span className="text-[#E0FF00]/80 uppercase tracking-wider font-semibold">Test Successful</span>
                  <span className="text-neutral-600">v1.2.0</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. Short 5-Line Journey Evolution (Contextual Story) */}
      <div>
        <div className="flex items-center gap-2 mb-3 text-[#E0FF00] text-xs font-mono font-bold uppercase tracking-widest">
          <Milestone className="w-4 h-4" />
          <span>HOW MY INTERESTS EVOLVED</span>
        </div>

        <div className="bg-[#141414] border border-[#222222] rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="relative border-l border-neutral-800 pl-4 space-y-4 ml-2">
            {journey.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-700 group-hover:bg-[#E0FF00] transition-colors" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="text-xs font-mono font-bold text-[#E0FF00] bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800 shrink-0 self-start">
                    {item.year}
                  </span>
                  <span className="text-sm text-neutral-300 font-sans leading-relaxed">
                    {item.title && <span className="font-bold text-white font-syne mr-2">{item.title} —</span>}
                    <span className="text-sm font-normal text-neutral-300 font-sans">{item.description}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};
