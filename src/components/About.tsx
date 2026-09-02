import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Binary, Cpu, ShieldCheck, Quote, BookOpen, GraduationCap } from 'lucide-react';

export const About: React.FC = () => {
  const { language } = useLanguage();

  const pillars = [
    {
      icon: Binary,
      title: language === 'fr' ? "Rigueur Mathématique" : "Mathematical Foundations",
      desc: language === 'fr'
        ? "Compréhension théorique des méthodes et étude des propriétés de convergence et de stabilité."
        : "Strong theoretical grasp of mathematical methods, convergence, and numerical stability."
    },
    {
      icon: Cpu,
      title: language === 'fr' ? "Programmation Efficace" : "Efficient Programming",
      desc: language === 'fr'
        ? "Implémentation soignée en C, C++ et Python (NumPy) pour traduire les formules mathématiques en code fonctionnel."
        : "Careful implementation in C, C++, and Python (NumPy) to translate mathematical formulas into working code."
    },
    {
      icon: ShieldCheck,
      title: language === 'fr' ? "Documentation & Rigueur" : "Documentation & Practice",
      desc: language === 'fr'
        ? "Rédaction claire de documents en LaTeX, organisation des dépôts sur GitHub et validation par des tests."
        : "Clear typesetting in LaTeX, clean GitHub repository management, and testing."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-sky-700 dark:text-sky-400 font-bold">01.</span>
            <span className="text-xs font-mono uppercase tracking-widest text-sky-700 dark:text-sky-400 font-bold">
              {language === 'fr' ? 'À Propos & Démarche' : 'About & Scientific Approach'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            {language === 'fr' ? 'À la Croisée des Mathématiques et du Code' : 'Bridging Pure Mathematics & Computational Power'}
          </h2>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-4 text-slate-800 dark:text-slate-200 leading-relaxed text-sm sm:text-base">
            {PERSONAL_INFO.aboutParagraphs[language].map((paragraph, idx) => (
              <p key={idx} className="font-sans">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Core Pillars Cards */}
          <div className="lg:col-span-5 space-y-3">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl border bg-white dark:bg-[#071527]/70 border-slate-300 dark:border-sky-950 flex items-start gap-3.5 shadow-xs"
                >
                  <div className="p-2 rounded-lg bg-sky-100 dark:bg-sky-500/10 text-sky-800 dark:text-sky-400 flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-display">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-700 dark:text-slate-300 mt-1 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quote Banner */}
        <div className="p-6 sm:p-8 rounded-2xl border bg-white dark:bg-[#0b2545]/40 border-slate-300 dark:border-sky-900/40 relative overflow-hidden shadow-xs">
          <Quote className="absolute -bottom-4 -right-4 w-28 h-28 text-sky-500/10 pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <p className="text-sm sm:text-base font-serif italic text-slate-900 dark:text-slate-200 leading-relaxed">
              "{PERSONAL_INFO.quote.text[language]}"
            </p>
            <div className="mt-3 flex items-center gap-2">
              <span className="font-bold text-xs sm:text-sm text-sky-800 dark:text-sky-300 font-display">
                — {PERSONAL_INFO.quote.author}
              </span>
              <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                ({PERSONAL_INFO.quote.role[language]})
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
