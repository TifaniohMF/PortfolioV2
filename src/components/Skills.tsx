import React, { useState } from 'react';
import { getSkillCategories } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Binary, Code2, Terminal, Search, CheckCircle2, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = getSkillCategories(language);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Binary':
        return Binary;
      case 'Code2':
        return Code2;
      case 'Terminal':
        return Terminal;
      default:
        return Code2;
    }
  };

  const filteredCategories = categories
    .map((cat) => {
      if (activeCategory !== 'all' && cat.id !== activeCategory) {
        return null;
      }
      const filteredItems = cat.items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.subtext.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      if (filteredItems.length === 0) return null;
      return {
        ...cat,
        items: filteredItems,
      };
    })
    .filter(Boolean);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-sky-700 dark:text-sky-400 font-bold">02.</span>
              <span className="text-xs font-mono uppercase tracking-widest text-sky-700 dark:text-sky-400 font-bold">
                {language === 'fr' ? 'Compétences & Maîtrise' : 'Skills & Technical Depth'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
              {language === 'fr' ? 'Arsenal Mathématique & Logiciel' : 'Mathematical & Software Stack'}
            </h2>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={language === 'fr' ? "Filtrer (ex: Jordan, C++, RK4...)" : "Filter (e.g. Jordan, C++, RK4)..."}
                className="pl-8 pr-3 py-1.5 text-xs font-mono rounded-xl border bg-white dark:bg-[#071527] border-slate-300 dark:border-sky-950 text-slate-900 dark:text-white placeholder:text-slate-500 focus:border-sky-600 outline-none w-full sm:w-56 shadow-xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-200/80 dark:bg-[#071527] border border-slate-300 dark:border-sky-950 overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveCategory('all')}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                  activeCategory === 'all'
                    ? 'bg-white dark:bg-sky-500 text-slate-950 dark:text-slate-950 font-bold shadow-sm'
                    : 'text-slate-700 dark:text-slate-300 font-medium hover:text-slate-900'
                }`}
              >
                {language === 'fr' ? 'Tout' : 'All'}
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? 'bg-white dark:bg-sky-500 text-slate-950 dark:text-slate-950 font-bold shadow-sm'
                      : 'text-slate-700 dark:text-slate-300 font-medium hover:text-slate-900'
                  }`}
                >
                  {cat.title.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Category Blocks */}
        <div className="space-y-10">
          {filteredCategories.length === 0 ? (
            <div className="p-8 text-center rounded-2xl border border-dashed border-slate-300 dark:border-sky-900/60 font-mono text-xs text-slate-600 dark:text-slate-400">
              {language === 'fr'
                ? "Aucune compétence ne correspond à votre recherche."
                : "No skill items matching your search query."}
            </div>
          ) : (
            filteredCategories.map((cat) => {
              if (!cat) return null;
              const Icon = getIcon(cat.iconName);
              return (
                <div key={cat.id} className="space-y-4">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-300 dark:border-sky-950">
                    <div className="p-1.5 rounded-lg bg-sky-100 dark:bg-sky-500/10 text-sky-800 dark:text-sky-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold font-display text-slate-900 dark:text-white">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-mono">
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cat.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl border bg-white dark:bg-[#071527] border-slate-300 dark:border-sky-950/80 hover:border-sky-500 dark:hover:border-sky-600/60 transition-all duration-200 flex flex-col justify-between group shadow-xs"
                      >
                        <div className="space-y-2">
                          <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white font-display group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors">
                            {item.name}
                          </h4>
                          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                            {item.subtext}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-1.5 pt-3 mt-3 border-t border-slate-200 dark:border-sky-950">
                          {item.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-[#0b2545]/60 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-sky-900/40 font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
