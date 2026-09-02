import React, { useState } from 'react';
import { X, Github, Copy, Check, Terminal, ExternalLink, Activity, BookOpen, Layers } from 'lucide-react';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onShowToast: (text: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onShowToast }) => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'overview' | 'code' | 'theory'>('overview');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedClone, setCopiedClone] = useState(false);

  if (!project) return null;

  const cloneCmd = `git clone ${project.githubUrl}.git`;

  const copyCode = () => {
    if (project.sampleCode) {
      navigator.clipboard.writeText(project.sampleCode.code);
      setCopiedCode(true);
      onShowToast(language === 'fr' ? 'Code copié dans le presse-papier !' : 'Code copied to clipboard!');
      setTimeout(() => setCopiedCode(false), 2500);
    }
  };

  const copyCloneCmd = () => {
    navigator.clipboard.writeText(cloneCmd);
    setCopiedClone(true);
    onShowToast(language === 'fr' ? 'Commande git clone copiée !' : 'git clone command copied!');
    setTimeout(() => setCopiedClone(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl rounded-2xl border shadow-2xl overflow-hidden transition-all my-8 bg-white dark:bg-[#0d2a4e] border-slate-200 dark:border-sky-500/30 text-slate-900 dark:text-slate-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-slate-200 dark:border-sky-950 bg-slate-100/70 dark:bg-[#071527]/70">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-500/20 text-sky-800 dark:text-sky-300 font-bold">
                {project.mathTopic}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">{project.title}</h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-400 mt-0.5 font-medium">
              {project.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-slate-200 dark:border-sky-950">
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`pb-3 px-3 text-xs sm:text-sm font-medium border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'overview'
                ? 'border-sky-600 dark:border-sky-400 text-sky-800 dark:text-sky-300 font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>{language === 'fr' ? 'Aperçu & Complexité' : 'Overview & Complexity'}</span>
          </button>

          {project.sampleCode && (
            <button
              type="button"
              onClick={() => setActiveTab('code')}
              className={`pb-3 px-3 text-xs sm:text-sm font-medium border-b-2 transition-all flex items-center gap-1.5 ${
                activeTab === 'code'
                  ? 'border-sky-600 dark:border-sky-400 text-sky-800 dark:text-sky-300 font-bold'
                  : 'border-transparent text-slate-600 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Terminal className="w-4 h-4" />
              <span>{language === 'fr' ? 'Code Source Exemple' : 'Source Code Sample'}</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => setActiveTab('theory')}
            className={`pb-3 px-3 text-xs sm:text-sm font-medium border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'theory'
                ? 'border-sky-600 dark:border-sky-400 text-sky-800 dark:text-sky-300 font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>{language === 'fr' ? 'Principe & Notes' : 'Theory & Notes'}</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[65vh] overflow-y-auto space-y-6">
          {activeTab === 'overview' && (
            <>
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-2 font-bold">
                  {language === 'fr' ? 'Description du projet' : 'Project Description'}
                </h4>
                <p className="text-sm leading-relaxed text-slate-800 dark:text-slate-200 font-sans">
                  {project.description}
                </p>
              </div>

              {/* Mathematical Formula */}
              {project.formula && (
                <div className="p-3.5 rounded-xl border bg-slate-50 dark:bg-[#071527] border-slate-300 dark:border-sky-900/60">
                  <span className="text-[10px] font-mono uppercase text-sky-800 dark:text-sky-400 block mb-1 font-bold">
                    {language === 'fr' ? 'Formule & Relation Clé' : 'Key Formula'}
                  </span>
                  <code className="text-xs sm:text-sm font-mono text-slate-950 dark:text-sky-300 break-all font-semibold">
                    {project.formula}
                  </code>
                </div>
              )}

              {/* Complexity Box */}
              {project.complexity && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl border bg-slate-50 dark:bg-[#071527]/70 border-slate-300 dark:border-sky-950">
                    <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400 block mb-1 font-medium">
                      {language === 'fr' ? 'Complexité Temporelle' : 'Time Complexity'}
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-teal-800 dark:text-teal-400">
                      {project.complexity.time}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl border bg-slate-50 dark:bg-[#071527]/70 border-slate-300 dark:border-sky-950">
                    <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400 block mb-1 font-medium">
                      {language === 'fr' ? 'Complexité Spatiale' : 'Space Complexity'}
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-amber-800 dark:text-amber-400">
                      {project.complexity.space}
                    </span>
                  </div>
                </div>
              )}

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-2 font-bold">
                  {language === 'fr' ? 'Fonctionnalités :' : 'Key Features:'}
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {project.keyFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-slate-800 dark:text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-sky-700 dark:bg-sky-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Git Clone Snippet */}
              <div className="p-3.5 rounded-xl border bg-slate-100 dark:bg-[#071527] border-slate-300 dark:border-sky-950 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 overflow-x-auto text-xs font-mono">
                  <Terminal className="w-4 h-4 text-sky-600 dark:text-sky-400 flex-shrink-0" />
                  <code className="text-slate-900 dark:text-slate-200 font-medium">{cloneCmd}</code>
                </div>
                <button
                  type="button"
                  onClick={copyCloneCmd}
                  className="px-2.5 py-1 rounded text-xs font-mono border bg-white dark:bg-[#0b2545] text-slate-800 dark:text-slate-200 border-slate-300 dark:border-sky-500/30 hover:border-sky-500 flex items-center gap-1 flex-shrink-0 font-medium"
                >
                  {copiedClone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedClone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </>
          )}

          {activeTab === 'code' && project.sampleCode && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-[#071527] border border-slate-300 dark:border-sky-900 text-sky-800 dark:text-sky-400">
                    {project.sampleCode.filename}
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400 uppercase font-mono font-medium">
                    {project.sampleCode.language}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={copyCode}
                  className="px-3 py-1 rounded-lg text-xs font-mono border bg-white dark:bg-[#071527] text-slate-800 dark:text-slate-200 border-slate-300 dark:border-sky-500/30 hover:border-sky-500 flex items-center gap-1.5 font-medium"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? (language === 'fr' ? 'Copié !' : 'Copied!') : (language === 'fr' ? 'Copier le code' : 'Copy code')}</span>
                </button>
              </div>

              <pre className="p-4 rounded-xl border bg-slate-900 text-slate-100 font-mono text-xs sm:text-sm overflow-x-auto leading-relaxed border-slate-800">
                <code>{project.sampleCode.code}</code>
              </pre>
            </div>
          )}

          {activeTab === 'theory' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl border bg-sky-50 dark:bg-[#071527] border-sky-300 dark:border-sky-900/60">
                <h4 className="text-sm font-display font-bold text-sky-950 dark:text-sky-300 mb-2 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-sky-700 dark:text-sky-400" />
                  <span>{language === 'fr' ? 'Principe Mathématique' : 'Mathematical Principle'}</span>
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-300 font-medium">
                  {project.theoreticalNotes || (language === 'fr' 
                    ? "Implémentation basée sur les méthodes numériques vues en cours de mathématiques et informatique." 
                    : "Implementation based on numerical methods and coursework.")}
                </p>
              </div>

              <div>
                <h5 className="text-xs font-mono uppercase text-slate-700 dark:text-slate-400 mb-2 font-bold">
                  {language === 'fr' ? 'Technologies & Dépendances :' : 'Technologies & Dependencies:'}
                </h5>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-[#071527] border border-slate-300 dark:border-sky-900 text-slate-900 dark:text-sky-300 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-t border-slate-200 dark:border-sky-950 bg-slate-50/70 dark:bg-[#071527]/70">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
          >
            {language === 'fr' ? 'Fermer' : 'Close'}
          </button>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-display font-semibold transition-all flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white shadow-md shadow-sky-600/20"
          >
            <Github className="w-4 h-4" />
            <span>{language === 'fr' ? 'Explorer sur GitHub' : 'Explore on GitHub'}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>
      </div>
    </div>
  );
};
