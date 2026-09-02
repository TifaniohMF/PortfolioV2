import React from 'react';
import { X, Printer, Download, Mail, Github, Linkedin, MapPin, GraduationCap, Code2, Binary, Check } from 'lucide-react';
import { PERSONAL_INFO, getSkillCategories, getProjects, getEducationData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

interface AcademicCVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AcademicCVModal: React.FC<AcademicCVModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const skills = getSkillCategories(language);
  const projects = getProjects(language);
  const education = getEducationData(language);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl rounded-2xl border shadow-2xl overflow-hidden transition-all my-6 bg-white dark:bg-[#071527] border-slate-300 dark:border-sky-500/30 text-slate-900 dark:text-slate-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Action Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-200 dark:border-sky-950 bg-slate-50 dark:bg-[#0b2545]/60 print:hidden">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            <span className="font-display font-bold text-sm sm:text-base">
              {language === 'fr' ? 'Fiche Académique & CV Scientifique' : 'Academic Curriculum Vitae'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium border border-slate-300 dark:border-sky-500/30 bg-white dark:bg-[#0d2a4e] text-slate-700 dark:text-slate-200 hover:border-sky-400 flex items-center gap-1.5 shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{language === 'fr' ? 'Imprimer / Exporter PDF' : 'Print / Export PDF'}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Container */}
        <div className="p-6 sm:p-10 max-h-[75vh] overflow-y-auto space-y-8 print:max-h-none print:overflow-visible">
          {/* CV Header */}
          <div className="border-b border-slate-200 dark:border-sky-900/60 pb-6 flex flex-col sm:flex-row justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                {PERSONAL_INFO.fullName}
              </h1>
              <p className="text-sm font-medium text-sky-700 dark:text-sky-400 mt-1">
                {PERSONAL_INFO.role[language]}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {PERSONAL_INFO.faculty[language]} — {PERSONAL_INFO.institution[language]}
              </p>
            </div>

            <div className="text-xs space-y-1 font-mono text-slate-600 dark:text-slate-300 sm:text-right">
              <p className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-500" />
                <span>{PERSONAL_INFO.location}</span>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-sky-500" />
                <span>{PERSONAL_INFO.email}</span>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <Github className="w-3.5 h-3.5 text-sky-500" />
                <span>github.com/{PERSONAL_INFO.githubUsername}</span>
              </p>
            </div>
          </div>

          {/* Academic Statement */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-700 dark:text-sky-400 font-bold mb-2">
              {language === 'fr' ? 'Profil Académique' : 'Academic Profile'}
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-200">
              {PERSONAL_INFO.bio[language]}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-700 dark:text-sky-400 font-bold mb-3">
              {language === 'fr' ? 'Formation Universitaire' : 'Education'}
            </h2>
            {education.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">{item.degree}</h3>
                  <span className="text-xs font-mono text-slate-600 dark:text-slate-400 font-medium">{item.period}</span>
                </div>
                <p className="text-xs text-sky-800 dark:text-sky-400 font-semibold">
                  {item.institution} — {item.location}
                </p>
                <p className="text-xs text-slate-800 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-2">
                  <span className="text-[11px] font-mono text-slate-700 dark:text-slate-400 font-semibold block mb-1.5">
                    {language === 'fr' ? 'Modules Majeurs :' : 'Core Coursework:'}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
                    {item.coursework.map((course, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                        <span className="w-1 h-1 rounded-full bg-sky-600" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Key Projects / Repositories */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-700 dark:text-sky-400 font-bold mb-3">
              {language === 'fr' ? 'Projets & Dépôts GitHub' : 'GitHub Projects & Repositories'}
            </h2>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-xl border border-slate-300 dark:border-sky-950 bg-slate-50 dark:bg-[#0d2a4e]/40 space-y-1.5">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      {proj.title} <span className="text-xs font-normal text-slate-600 dark:text-slate-400">— {proj.mathTopic}</span>
                    </h3>
                    <span className="text-[11px] font-mono text-sky-800 dark:text-sky-400 font-medium">{proj.technologies.slice(0, 3).join(', ')}</span>
                  </div>
                  <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
                    {proj.description}
                  </p>
                  {proj.formula && (
                    <code className="text-[11px] font-mono text-slate-700 dark:text-slate-400 block pt-1">
                      {proj.formula}
                    </code>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technical and Mathematical Competencies */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-700 dark:text-sky-400 font-bold mb-3">
              {language === 'fr' ? 'Compétences Techniques & Mathématiques' : 'Technical & Mathematical Competencies'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {skills.map((cat) => (
                <div key={cat.id} className="space-y-1.5">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white border-b border-slate-300 dark:border-sky-900 pb-1">
                    {cat.title}
                  </h4>
                  <ul className="space-y-1 text-xs text-slate-800 dark:text-slate-200">
                    {cat.items.map((it, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="text-[10px] text-sky-600 font-bold">•</span>
                        <span>{it.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* BibTeX Academic Citation Reference (print:hidden) */}
          <div className="p-4 rounded-xl border border-slate-300 dark:border-sky-950 bg-slate-50 dark:bg-[#0b2545]/40 space-y-2 print:hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-slate-900 dark:text-slate-300">
                {language === 'fr' ? 'Référence Bibliographique (BibTeX)' : 'Academic Citation Entry (BibTeX)'}
              </span>
              <button
                type="button"
                onClick={() => {
                  const bibtex = `@misc{randrianoelina2026portfolio,
  author = {RANDRIANOELINA, Tifanioh Mahefa Fandresentsoa},
  title = {Mathematics & Computer Science Projects},
  year = {2026},
  howpublished = {\\url{https://github.com/TifaniohMF}},
  institution = {University of Antananarivo}
}`;
                  navigator.clipboard.writeText(bibtex);
                  alert(language === 'fr' ? 'Entrée BibTeX copiée !' : 'BibTeX entry copied!');
                }}
                className="px-2.5 py-1 text-[11px] font-mono rounded bg-white dark:bg-[#071527] border border-slate-300 dark:border-sky-900 hover:border-sky-600 text-sky-800 dark:text-sky-300 font-medium transition-colors"
              >
                Copy BibTeX
              </button>
            </div>
            <pre className="text-[11px] font-mono text-slate-800 dark:text-slate-300 overflow-x-auto p-2.5 rounded-lg bg-white dark:bg-[#071527] border border-slate-300 dark:border-sky-950">
{`@misc{randrianoelina2026portfolio,
  author = {RANDRIANOELINA, Tifanioh Mahefa Fandresentsoa},
  title = {Mathematics & Computer Science Projects},
  year = {2026},
  howpublished = {\\url{https://github.com/TifaniohMF}},
  institution = {University of Antananarivo}
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
