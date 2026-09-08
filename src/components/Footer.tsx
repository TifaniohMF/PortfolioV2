import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUp, Github, Linkedin, Mail, Heart, Binary } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-300 dark:border-sky-950 bg-slate-100 dark:bg-[#051120] text-slate-700 dark:text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left branding */}
        <div className="space-y-1 text-center md:text-left flex flex-col md:flex-row items-center gap-3">
          <div className="w-8 h-8 rounded-lg overflow-hidden border border-slate-300 dark:border-sky-500/40 bg-slate-950 flex-shrink-0">
            <img
              src="icon.jpg"
              alt="Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-display font-bold text-sm text-slate-900 dark:text-white">
                {PERSONAL_INFO.fullName}
              </span>
              <span className="text-xs font-mono text-sky-700 dark:text-sky-400 font-bold">•</span>
              <span className="text-xs font-mono text-slate-700 dark:text-slate-400 font-medium">
                {PERSONAL_INFO.institution[language]}
              </span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-400 font-mono">
              {PERSONAL_INFO.role[language]} — {PERSONAL_INFO.tagline}
            </p>
          </div>
        </div>

        {/* Center / Status */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-300 dark:border-sky-950 bg-white dark:bg-[#071527] text-xs font-mono shadow-xs">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-500" />
          <span className="text-[11px] text-slate-800 dark:text-slate-300 font-medium">
            {language === 'fr' ? 'Conforme IEEE 754 & Open Source' : 'IEEE 754 Compliant & Open Source'}
          </span>
        </div>

        {/* Right Action buttons */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl border border-slate-300 dark:border-sky-950 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-white dark:bg-[#071527] transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl border border-slate-300 dark:border-sky-950 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-white dark:bg-[#071527] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-xl border border-slate-300 dark:border-sky-950 bg-white dark:bg-[#071527] text-slate-700 dark:text-slate-300 hover:text-sky-700 dark:hover:text-sky-400 flex items-center gap-1 text-xs font-mono transition-colors shadow-xs"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="hidden sm:inline">Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
