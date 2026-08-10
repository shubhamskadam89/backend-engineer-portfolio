import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Github, Activity, Zap, CheckCircle2, BookOpen, ChevronRight, Target, Lightbulb, Shield } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 cursor-pointer"
    >
      {/* Modal Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[#121212] border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl text-neutral-100 flex flex-col max-h-[90vh] cursor-default"
      >
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-[#161616] shrink-0">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-[#E0FF00] text-black text-xs font-extrabold uppercase rounded-full">
              {project.category}
            </span>
            <span className="text-xs font-mono text-neutral-400 hidden sm:inline">
              Engineering Case Study
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-8">
          
          {/* Main Title & Hero Metrics */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-syne text-white tracking-tight mb-1">
                {project.title}
              </h2>
              <p className="text-base text-[#E0FF00] font-medium">
                {project.subtitle}
              </p>
            </div>

            {/* Hero Metrics Row */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="flex flex-row flex-wrap justify-start items-center gap-12 sm:gap-20 py-2 border-b border-neutral-800 pb-6">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-3xl sm:text-4xl font-black font-syne text-[#E0FF00] leading-none">
                      {m.value}
                    </span>
                    <span className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-500 font-mono mt-2 font-medium">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Engineering Narrative: Problem → Decision → Outcome */}
          <div className="space-y-4">
            {[
              { label: "Problem", icon: Target, content: project.problem, accent: "text-[#FF6B2B]", border: "border-[#FF6B2B]/20", bg: "bg-[#FF6B2B]/5" },
              project.challenge ? { label: "Challenge", icon: ChevronRight, content: project.challenge, accent: "text-neutral-400", border: "border-neutral-800", bg: "bg-[#1a1a1a]" } : null,
              { label: "Decision", icon: Zap, content: project.decision, accent: "text-[#E0FF00]", border: "border-[#E0FF00]/20", bg: "bg-[#E0FF00]/5" },
              project.rateLimiting ? { label: "Rate Limiting Strategy", icon: Shield, content: project.rateLimiting, accent: "text-blue-400", border: "border-blue-500/20", bg: "bg-blue-500/5" } : null,
              { label: "Outcome", icon: CheckCircle2, content: project.outcome, accent: "text-emerald-400", border: "border-emerald-500/20", bg: "bg-emerald-500/5" },
            ]
              .filter((step): step is { label: string; icon: typeof Target; content: string; accent: string; border: string; bg: string } => step !== null)
              .map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className={`p-5 rounded-2xl border ${step.border} ${step.bg}`}>
                    <div className={`flex items-center gap-2 mb-2 text-xs font-mono font-bold uppercase tracking-widest ${step.accent}`}>
                      <Icon className="w-3.5 h-3.5" />
                      <span>{step.label}</span>
                    </div>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      {step.content}
                    </p>
                  </div>
                );
              })}
          </div>

          {/* Benchmark Latency Visualizer */}
          {project.benchmarkData && (
            <div className="bg-[#161616] p-6 rounded-2xl border border-neutral-800">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-[#FF6B2B]" />
                  <h3 className="text-base font-bold text-white uppercase tracking-wider font-syne">
                    Latency Comparison (REST vs gRPC)
                  </h3>
                </div>
                <span className="text-xs font-mono text-neutral-400">Lower is better (ms)</span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                {project.benchmarkData.map((b, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-neutral-300 font-semibold">
                      <span>Workload: {b.name}</span>
                      <span className="text-[#E0FF00]">gRPC: {b.gRPC}{b.unit} vs REST: {b.REST}{b.unit}</span>
                    </div>
                    <div className="w-full bg-neutral-800 h-3 rounded-full overflow-hidden">
                      <div
                        className="bg-neutral-500 h-full transition-all duration-500"
                        style={{ width: `${Math.min(100, (b.REST / 300) * 100)}%` }}
                        title={`REST: ${b.REST}ms`}
                      />
                    </div>
                    <div className="w-full bg-neutral-800 h-3 rounded-full overflow-hidden">
                      <div
                        className="bg-[#E0FF00] h-full transition-all duration-500"
                        style={{ width: `${Math.min(100, (b.gRPC / 300) * 100)}%` }}
                        title={`gRPC: ${b.gRPC}ms`}
                      />
                    </div>
                    <div className="flex gap-4 text-[10px] text-neutral-500">
                      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-neutral-500 inline-block" />REST</span>
                      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#E0FF00] inline-block" />gRPC</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Lessons Learned — the #1 differentiator */}
          {project.lessonsLearned && (
            <div className="pl-4 border-l-2 border-[#E0FF00] py-1">
              <div className="flex items-center gap-2 mb-1.5 text-neutral-400 text-xs font-mono font-bold uppercase tracking-widest">
                <Lightbulb className="w-3.5 h-3.5 text-[#E0FF00]" />
                <span>Lessons Learned</span>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed italic">
                "{project.lessonsLearned}"
              </p>
            </div>
          )}

          {/* Key Engineering Insights */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest font-mono flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#E0FF00]" />
              <span>Implementation Notes</span>
            </h3>
            <ul className="space-y-3">
              {project.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#E0FF00] shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-neutral-800 bg-[#161616] shrink-0">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>View Repository</span>
            </a>
          ) : (
            <div></div>
          )}

          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#E0FF00] hover:bg-[#cbe600] text-black font-extrabold rounded-xl text-xs transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>,
    document.body
  );
};
