import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Copy, Check, Rocket } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface ContactSectionProps {
  personal: PortfolioData['personal'];
}

export const ContactSection: React.FC<ContactSectionProps> = ({ personal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('submitted');
    }, 1000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="scroll-mt-28 mb-0 opacity-0 animate-reveal">
      
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2 text-[#E0FF00] text-xs font-mono font-bold uppercase tracking-widest">
          <Rocket className="w-4 h-4" />
          <span>WHAT'S NEXT</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black uppercase font-syne text-white tracking-tight leading-tight">
          LET'S BUILD<br />
          <span className="text-[#E0FF00]">SOMETHING INTERESTING</span>
        </h2>
      </div>

      {/* Subtitle paragraph */}
      <div className="mb-8 p-6 bg-[#141414] border border-[#222222] rounded-3xl">
        <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl font-normal">
          I'm always up for talking through backend architecture, distributed systems trade-offs, or internship opportunities — especially if there's a real problem to dig into.
        </p>
      </div>

      {/* Contact Form Container */}
      <div className="bg-[#141414] border border-[#222222] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden transition-framer">
        
        {status === 'submitted' ? (
          <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
            <div className="w-16 h-16 bg-[#E0FF00] text-black rounded-full flex items-center justify-center mx-auto shadow-lg shadow-[#E0FF00]/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-syne text-white">
              Message received.
            </h3>
            <p className="text-neutral-300 max-w-md mx-auto text-sm">
              Thanks, {formData.name}. Shubham will get back to you directly — usually within 24 hours.
            </p>
            <button
              onClick={() => {
                setStatus('idle');
                setFormData({ name: '', email: '', message: '' });
              }}
              className="mt-4 px-6 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-mono transition-colors"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#222224] border border-neutral-700 rounded-2xl px-4 py-3.5 text-white placeholder-neutral-500 focus:outline-none focus:border-[#E0FF00] transition-colors text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#222224] border border-neutral-700 rounded-2xl px-4 py-3.5 text-white placeholder-neutral-500 focus:outline-none focus:border-[#E0FF00] transition-colors text-sm"
                />
              </div>
            </div>

            {/* Row 2: Message */}
            <div className="space-y-2">
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400">
                Message
              </label>
              <textarea
                required
                rows={4}
                placeholder="Tell me about the team, the stack, or what you're building..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#222224] border border-neutral-700 rounded-2xl px-4 py-3.5 text-white placeholder-neutral-500 focus:outline-none focus:border-[#E0FF00] transition-colors text-sm resize-none"
              />
            </div>

            {/* Row 3: Submit + Direct email */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full sm:w-auto px-8 py-4 bg-[#FF6B2B] hover:bg-[#ff5712] text-white font-extrabold text-sm uppercase font-syne tracking-wider rounded-2xl transition-all shadow-lg shadow-[#FF6B2B]/20 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleCopy}
                className="w-full sm:w-auto px-6 py-4 bg-[#1e1e1e] hover:bg-[#2a2a2a] border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white rounded-2xl text-xs font-mono transition-all flex items-center justify-center gap-2"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied to clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Direct: {personal.email}</span>
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>

    </section>
  );
};
