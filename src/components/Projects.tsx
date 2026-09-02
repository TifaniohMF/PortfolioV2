import React, { useState } from 'react';
import { getProjects } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Github, ExternalLink, Activity, Grid, BookOpen, Layers, Terminal, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const { language } = useLanguage();
  const projects = getProjects(language);

  const getProjectIcon = (name: string) => {
    switch (name) {
      case 'Grid':
        return Grid;
      case 'Activity':
        return Activity;
      case 'BookOpen':
        return BookOpen;
      default:
        return Layers;
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-sky-700 dark:text-sky-400 font-bold">03.</span>
            <span className="text-xs font-mono uppercase tracking-widest text-sky-700 dark:text-sky-400 font-bold">
              {language === 'fr' ? 'Projets GitHub' : 'GitHub Projects'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            {language === 'fr' ? 'Mes Projets & Dépôts' : 'My Projects & Repositories'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans max-w-2xl">
            {language === 'fr'
              ? "Sélection de programmes et dépôts réalisés lors de mes études et disponibles sur mon profil GitHub."
              : "A selection of programs and repositories created during my studies and hosted on my GitHub profile."}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const Icon = getProjectIcon(project.iconName);
            return (
              <div
                key={project.id}
                className="p-6 rounded-2xl border bg-white dark:bg-[#071527] border-slate-300 dark:border-sky-950/80 hover:border-sky-500/60 dark:hover:border-sky-500/60 transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-md"
              >
                <div className="space-y-4">
                  {/* Top Bar */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-sky-100 dark:bg-sky-500/10 text-sky-800 dark:text-sky-400 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-sky-700 dark:text-sky-400 block font-bold">
                          {project.mathTopic}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-sky-950/40 transition-colors"
                      title="GitHub Repository"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Subtitle & Description */}
                  <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-200">
                    {project.subtitle}
                  </p>

                  <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300 line-clamp-3 font-sans">
                    {project.description}
                  </p>

                  {/* Formula Preview snippet */}
                  {project.formula && (
                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#0b2545]/50 border border-slate-300 dark:border-sky-950 font-mono text-xs text-sky-800 dark:text-sky-300 overflow-x-auto">
                      <code>{project.formula}</code>
                    </div>
                  )}

                  {/* Complexity pill */}
                  {project.complexity && (
                    <div className="text-[11px] font-mono text-slate-600 dark:text-slate-400">
                      <span className="font-semibold text-teal-700 dark:text-teal-400">{project.complexity.time}</span>
                    </div>
                  )}
                </div>

                {/* Bottom Actions & Tags */}
                <div className="pt-5 mt-5 border-t border-slate-200 dark:border-sky-950 space-y-4">
                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-[#0b2545]/60 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-sky-900/40 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Inspect & GitHub Buttons */}
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold border border-sky-300 dark:border-sky-800 bg-sky-50 dark:bg-sky-950/40 text-sky-900 dark:text-sky-300 hover:bg-sky-100 dark:hover:bg-sky-900/60 flex items-center gap-1.5 transition-colors"
                    >
                      <Terminal className="w-3.5 h-3.5" />
                      <span>{language === 'fr' ? 'Inspecter les Détails & Code' : 'Inspect Details & Code'}</span>
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white flex items-center gap-1 font-medium transition-colors"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
