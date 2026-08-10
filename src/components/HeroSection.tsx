import React from 'react';
import { Terminal, Layers, LayoutGrid, ArrowRight } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface HeroSectionProps {
  personal: PortfolioData['personal'];
  onExploreCaseStudies: () => void;
  onExploreTechStack: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCaseStudies,
  onExploreTechStack
}) => {
  return (
    <section id="overview" className="scroll-mt-28 mb-16 opacity-0 animate-reveal">
      
      {/* Main Hero Display Heading */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black uppercase tracking-tight text-white font-syne leading-[0.95] mb-6 max-w-full break-words">
          BUILDING<br />
          DISTRIBUTED<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
            BACKEND
          </span><br />
          <span className="text-[#E0FF00]">SYSTEMS</span>
        </h1>

        {/* Tech Stack Line Below Headline */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 mb-6">
          <Terminal className="w-3.5 h-3.5 text-[#E0FF00]" />
          <span>JAVA · Spring Boot · AWS · Docker · GitHub</span>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl leading-relaxed font-normal mb-8">
          Java Backend Engineer who believes you don't really understand a system until you've built it, broken it, and measured it. No assumptions — just implementation and data.
        </p>
      </div>

      {/* Hero Feature Highlight Tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 opacity-0 animate-reveal delay-100">
        
        {/* Orange Accent Tile */}
        <div
          onClick={onExploreTechStack}
          className="group cursor-pointer bg-[#FF6B2B] hover:bg-[#ff5a14] rounded-3xl p-6 sm:p-8 text-white flex flex-col justify-between min-h-[180px] sm:min-h-[220px] transition-framer transform hover:-translate-y-1 shadow-lg shadow-[#FF6B2B]/10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

          <div className="relative z-10 flex items-start justify-between">
            <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <Layers className="w-6 h-6 text-white" />
            </div>
            <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#FF6B2B] transition-all">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>

          <div className="relative z-10 mt-6">
            <span className="text-xs font-mono tracking-widest text-white/80 uppercase block mb-1">
              Engineering Toolbox
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold uppercase font-syne tracking-tight leading-snug">
              REST · GRPC · KAFKA<br />DOCKER · REDIS
            </h3>
          </div>
        </div>

        {/* Lime Accent Tile */}
        <div
          onClick={onExploreCaseStudies}
          className="group cursor-pointer bg-[#E0FF00] hover:bg-[#d0ed00] rounded-3xl p-6 sm:p-8 text-black flex flex-col justify-between min-h-[180px] sm:min-h-[220px] transition-framer transform hover:-translate-y-1 shadow-lg shadow-[#E0FF00]/10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>

          <div className="relative z-10 flex items-start justify-between">
            <div className="p-3 bg-black/10 backdrop-blur-md rounded-2xl border border-black/20">
              <LayoutGrid className="w-6 h-6 text-black" />
            </div>
            <div className="w-10 h-10 rounded-full border border-black/30 flex items-center justify-center group-hover:bg-black group-hover:text-[#E0FF00] transition-all">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>

          <div className="relative z-10 mt-6">
            <span className="text-xs font-mono tracking-widest text-black/70 uppercase block mb-1">
              Engineering Case Studies
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold uppercase font-syne tracking-tight leading-snug">
              ARCHITECTURE,<br />BENCHMARKS & LESSONS
            </h3>
          </div>
        </div>

      </div>

    </section>
  );
};
