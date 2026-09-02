import React from 'react';
import { getEducationData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, MapPin, Calendar, BookOpen, CheckCircle, Award } from 'lucide-react';

interface EducationProps {
  onOpenCV: () => void;
}

export const Education: React.FC<EducationProps> = ({ onOpenCV }) => {
  const { language } = useLanguage();
  const education = getEducationData(language);

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-sky-700 dark:text-sky-400 font-bold">04.</span>
              <span className="text-xs font-mono uppercase tracking-widest text-sky-700 dark:text-sky-400 font-bold">
                {language === 'fr' ? 'Formation Universitaire' : 'Academic Education'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
              {language === 'fr' ? 'Parcours & Cursus Scientifique' : 'Academic Foundation & Coursework'}
            </h2>
          </div>

          <button
            type="button"
            onClick={onOpenCV}
            className="self-start md:self-auto px-4 py-2 rounded-xl text-xs font-mono font-semibold border border-sky-300 dark:border-sky-800 bg-sky-50 dark:bg-sky-950/40 text-sky-900 dark:text-sky-300 hover:bg-sky-100 dark:hover:bg-sky-900/60 flex items-center gap-2 transition-colors shadow-xs"
          >
            <GraduationCap className="w-4 h-4" />
            <span>{language === 'fr' ? 'Consulter la Fiche CV Complète' : 'View Full Academic CV'}</span>
          </button>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-6">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl border bg-white dark:bg-[#071527] border-slate-300 dark:border-sky-950/80 shadow-xs relative overflow-hidden"
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-sky-950 pb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 font-bold">
                        {item.isCurrent ? (language === 'fr' ? 'En Cursus Actif' : 'Active Degree') : 'Completed'}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
                      {item.degree}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-sky-800 dark:text-sky-400 mt-0.5">
                      {item.institution}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-slate-600 dark:text-slate-400 space-y-1">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                      <span>{item.period}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-200 font-sans">
                  {item.description}
                </p>

                {/* Coursework Matrix */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-700 dark:text-slate-400 font-bold flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                    <span>{language === 'fr' ? 'Disciplines & Modules Clés :' : 'Core Academic Modules:'}</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {item.coursework.map((course, cIdx) => (
                      <div
                        key={cIdx}
                        className="p-3 rounded-xl border bg-slate-50 dark:bg-[#0b2545]/40 border-slate-200 dark:border-sky-950 flex items-start gap-2.5"
                      >
                        <CheckCircle className="w-4 h-4 text-sky-700 dark:text-sky-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs font-medium text-slate-900 dark:text-slate-200">
                          {course}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
