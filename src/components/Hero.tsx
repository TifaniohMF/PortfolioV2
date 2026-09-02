import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Github, Linkedin, Mail, ArrowRight, GraduationCap, Copy, Check, Terminal, Sparkles, BookOpen, Layers } from 'lucide-react';

interface HeroProps {
  onOpenCV: () => void;
  onShowToast: (text: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV, onShowToast }) => {
  const { language } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    onShowToast(language === 'fr' ? 'Email copié dans le presse-papier !' : 'Email copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="top" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full space-y-8 text-center relative z-10">
        {/* Academic Affiliation Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border shadow-sm bg-white dark:bg-[#0b2545]/80 border-slate-300 dark:border-sky-500/30">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono font-semibold text-slate-800 dark:text-sky-300">
            {PERSONAL_INFO.faculty[language]} — {PERSONAL_INFO.institution[language]}
          </span>
        </div>

        {/* Full Name & Title */}
        <div className="space-y-4">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-sky-700 dark:text-sky-400 font-bold">
            {PERSONAL_INFO.role[language]}
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-[1.15]">
            {PERSONAL_INFO.fullName}
          </h1>

          <p className="text-base sm:text-xl font-mono text-sky-700 dark:text-sky-300 font-semibold tracking-wide">
            {PERSONAL_INFO.tagline}
          </p>

          <p className="max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-200 font-sans">
            {PERSONAL_INFO.bio[language]}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl text-xs sm:text-sm font-display font-semibold transition-all flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white shadow-lg shadow-sky-600/25 hover:shadow-sky-600/40 hover:-translate-y-0.5"
          >
            <span>{language === 'fr' ? 'Explorer mes Projets' : 'Explore Projects'}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={onOpenCV}
            className="px-5 py-3 rounded-xl text-xs sm:text-sm font-display font-semibold transition-all flex items-center gap-2 border border-slate-300 dark:border-sky-500/40 bg-white dark:bg-[#071527] text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-[#0b2545] shadow-sm hover:-translate-y-0.5"
          >
            <GraduationCap className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            <span>{language === 'fr' ? 'Fiche Académique / CV' : 'Academic CV'}</span>
          </button>

          <a
            href="#contact"
            className="px-5 py-3 rounded-xl text-xs sm:text-sm font-display font-semibold transition-all flex items-center gap-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-transparent text-slate-800 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm"
          >
            <Mail className="w-4 h-4" />
            <span>{language === 'fr' ? 'Me Contacter' : 'Contact Me'}</span>
          </a>
        </div>

        {/* Social & Contact Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono border border-slate-300 dark:border-sky-950 bg-white dark:bg-[#071527]/60 text-slate-800 dark:text-slate-300 hover:text-sky-700 dark:hover:text-sky-400 shadow-xs transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>github.com/{PERSONAL_INFO.githubUsername}</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono border border-slate-300 dark:border-sky-950 bg-white dark:bg-[#071527]/60 text-slate-800 dark:text-slate-300 hover:text-sky-700 dark:hover:text-sky-400 shadow-xs transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono border border-slate-300 dark:border-sky-950 bg-white dark:bg-[#071527]/60 text-slate-800 dark:text-slate-300 hover:text-sky-700 dark:hover:text-sky-400 shadow-xs transition-colors"
            title="Click to copy email address"
          >
            {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedEmail ? (language === 'fr' ? 'Copié !' : 'Copied!') : PERSONAL_INFO.email}</span>
          </button>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 max-w-4xl mx-auto">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl border bg-white dark:bg-[#071527]/80 border-slate-300 dark:border-sky-950 text-center shadow-xs"
            >
              <div className="text-xs sm:text-sm font-bold font-mono text-sky-800 dark:text-sky-300">
                {stat.value}
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-400 font-mono mt-0.5 font-medium">
                {stat.label[language]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
