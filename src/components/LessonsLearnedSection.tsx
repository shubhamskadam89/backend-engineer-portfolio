import React from 'react';
import { Lightbulb } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface LessonsLearnedSectionProps {
  lessons: PortfolioData['lessonsLearned'];
}

export const LessonsLearnedSection: React.FC<LessonsLearnedSectionProps> = ({ lessons }) => {
  return (
    <section id="lessons" className="scroll-mt-28 mb-16 opacity-0 animate-reveal">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2 text-[#E0FF00] text-xs font-mono font-bold uppercase tracking-widest">
          <Lightbulb className="w-4 h-4" />
          <span>ENGINEERING REFLECTION</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black uppercase font-syne text-white tracking-tight leading-none">
          LESSONS<br />
          <span className="text-[#E0FF00]">LEARNED</span>
        </h2>
        <p className="mt-3 text-sm text-neutral-400 max-w-2xl leading-relaxed">
          Reflecting on engineering decisions transforms building into genuine technical growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {lessons.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#141414] border border-[#222222] hover:border-[#E0FF00]/40 rounded-3xl p-6 transition-framer hover:scale-[1.02] flex flex-col justify-between group"
          >
            <div>
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-[10px] font-mono uppercase font-bold text-[#E0FF00] rounded-full inline-block mb-3">
                {item.topic}
              </span>
              <h3 className="text-lg font-bold font-syne text-white mb-3 group-hover:text-[#E0FF00] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed font-mono italic">
                "{item.takeaway}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
