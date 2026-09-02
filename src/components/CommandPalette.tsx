import React, { useEffect, useState } from 'react';
import { Search, Moon, Sun, Globe, FileText, Code2, GraduationCap, Mail, X, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { getProjects, getSkillCategories } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCV: () => void;
  onSelectProject: (projectId: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenCV,
  onSelectProject,
}) => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const projects = getProjects(language);
  const skillCategories = getSkillCategories(language);

  // Filter items
  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const allSkills = skillCategories.flatMap((c) => c.items);
  const filteredSkills = allSkills.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const navigateTo = (anchor: string) => {
    onClose();
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="w-full max-w-xl rounded-2xl border shadow-2xl overflow-hidden bg-white dark:bg-[#071527] border-slate-300 dark:border-sky-500/30 text-slate-900 dark:text-slate-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 p-4 border-b border-slate-200 dark:border-sky-950 bg-slate-50 dark:bg-[#0b2545]/50">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              language === 'fr'
                ? "Rechercher un algorithme, projet, compétence ou commande..."
                : "Search algorithm, project, skill or command (e.g. Cholesky, C++, CV)..."
            }
            className="w-full bg-transparent text-sm sm:text-base outline-none text-slate-900 dark:text-white placeholder:text-slate-400"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-3 space-y-4">
          {/* Quick Actions */}
          {!query && (
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 px-3 py-1 font-bold">
                {language === 'fr' ? 'Actions Rapides' : 'Quick Actions'}
              </div>
              <div className="space-y-1">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenCV();
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm hover:bg-slate-100 dark:hover:bg-[#0d2a4e] text-left transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <GraduationCap className="w-4 h-4 text-sky-500" />
                    <span>{language === 'fr' ? 'Consulter le CV Académique & Publications' : 'View Academic CV & Coursework'}</span>
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">PDF / Print</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    toggleTheme();
                    onClose();
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm hover:bg-slate-100 dark:hover:bg-[#0d2a4e] text-left transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-sky-600" />}
                    <span>{language === 'fr' ? 'Changer de Thème (Sombre / Clair)' : 'Toggle Theme (Dark / Light)'}</span>
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">Theme</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    toggleLanguage();
                    onClose();
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm hover:bg-slate-100 dark:hover:bg-[#0d2a4e] text-left transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <Globe className="w-4 h-4 text-teal-500" />
                    <span>{language === 'fr' ? 'Passer en Anglais (Switch to English)' : 'Passer en Français (Switch to French)'}</span>
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">EN / FR</span>
                </button>
              </div>
            </div>
          )}

          {/* Projects results */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 px-3 py-1 font-bold">
                {language === 'fr' ? 'Projets Scientifiques' : 'Scientific Projects'}
              </div>
              <div className="space-y-1">
                {filteredProjects.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => {
                      onClose();
                      onSelectProject(p.id);
                    }}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm hover:bg-slate-100 dark:hover:bg-[#0d2a4e] text-left transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <Code2 className="w-4 h-4 text-sky-500" />
                      <div>
                        <div className="font-bold text-slate-900 dark:text-white">{p.title}</div>
                        <div className="text-[11px] text-slate-500">{p.mathTopic}</div>
                      </div>
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Skills results */}
          {filteredSkills.length > 0 && (
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 px-3 py-1 font-bold">
                {language === 'fr' ? 'Compétences & Sujets' : 'Skills & Topics'}
              </div>
              <div className="space-y-1">
                {filteredSkills.slice(0, 5).map((s, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => navigateTo('skills')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm hover:bg-slate-100 dark:hover:bg-[#0d2a4e] text-left transition-colors"
                  >
                    <div>
                      <div className="font-medium text-slate-900 dark:text-white">{s.name}</div>
                      <div className="text-[11px] text-slate-500">{s.tags.join(' · ')}</div>
                    </div>
                    <span className="text-[10px] font-mono text-sky-500">Skills Section</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Anchors */}
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 px-3 py-1 font-bold">
              {language === 'fr' ? 'Navigation dans la Page' : 'Page Navigation'}
            </div>
            <div className="grid grid-cols-2 gap-1">
              {[
                { label: language === 'fr' ? 'À Propos' : 'About', id: 'about' },
                { label: language === 'fr' ? 'Compétences' : 'Skills', id: 'skills' },
                { label: language === 'fr' ? 'Projets' : 'Projects', id: 'projects' },
                { label: language === 'fr' ? 'Formation' : 'Education', id: 'education' },
                { label: language === 'fr' ? 'Contact' : 'Contact', id: 'contact' },
              ].map((sec) => (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => navigateTo(sec.id)}
                  className="px-3 py-2 rounded-lg text-xs hover:bg-slate-100 dark:hover:bg-[#0d2a4e] text-left text-slate-700 dark:text-slate-300 font-mono"
                >
                  → #{sec.id} ({sec.label})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer shortcuts helper */}
        <div className="p-3 border-t border-slate-200 dark:border-sky-950 bg-slate-50 dark:bg-[#0b2545]/50 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>Esc {language === 'fr' ? 'pour fermer' : 'to close'}</span>
          <span>Cmd+K / Ctrl+K {language === 'fr' ? 'raccourci' : 'shortcut'}</span>
        </div>
      </div>
    </div>
  );
};
