import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { Sun, Moon, Globe, Menu, X, Search, GraduationCap, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenCV: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCV, onOpenSearch }) => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: language === 'fr' ? 'À propos' : 'About', href: '#about' },
    { name: language === 'fr' ? 'Compétences' : 'Skills', href: '#skills' },
    { name: language === 'fr' ? 'Projets' : 'Projects', href: '#projects' },
    { name: language === 'fr' ? 'Formation' : 'Education', href: '#education' },
    { name: language === 'fr' ? 'Contact' : 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-[#071527]/90 backdrop-blur-md border-b border-slate-200 dark:border-sky-950/80 shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Subtle Top Reading Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-sky-500 via-teal-400 to-sky-600 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group text-slate-900 dark:text-white"
          aria-label="Home"
        >
          <div className="w-9 h-9 rounded-xl overflow-hidden border shadow-sm transition-transform duration-300 group-hover:scale-105 border-slate-300 dark:border-sky-500/40 bg-slate-950 flex-shrink-0">
            <img
              src="/icon.jpg"
              alt="Logo RANDRIANOELINA"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <span className="font-display font-bold text-sm tracking-tight block group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
              {PERSONAL_INFO.shortName}
            </span>
            <span className="text-[10px] font-mono text-sky-700 dark:text-sky-400 block -mt-0.5">
              Math & Scientific Computing
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 font-mono text-xs">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-sky-950/40 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Controls (Search, CV, Theme, Lang, GitHub) */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Quick Search trigger */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs font-mono border border-slate-200 dark:border-sky-950 bg-slate-100/80 dark:bg-[#0b2545]/70 text-slate-500 dark:text-slate-300 hover:border-sky-400 dark:hover:border-sky-500 transition-colors"
            title="Search (Cmd+K)"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{language === 'fr' ? 'Chercher' : 'Search'}</span>
            <kbd className="text-[10px] px-1.5 py-0.5 rounded bg-white dark:bg-[#071527] border border-slate-300 dark:border-sky-900 text-slate-400">
              ⌘K
            </kbd>
          </button>

          {/* Academic CV trigger */}
          <button
            type="button"
            onClick={onOpenCV}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border border-sky-200 dark:border-sky-800 bg-sky-50/80 dark:bg-sky-950/40 text-sky-800 dark:text-sky-300 hover:bg-sky-100 dark:hover:bg-sky-900/60 transition-colors"
            title={language === 'fr' ? 'Afficher le CV Académique' : 'View Academic CV'}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>CV</span>
          </button>

          {/* Language Toggle */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-mono border border-slate-200 dark:border-sky-950 bg-slate-100/80 dark:bg-[#0b2545]/70 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            title={language === 'fr' ? 'Passer en anglais' : 'Switch to French'}
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="font-bold">{language.toUpperCase()}</span>
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-slate-200 dark:border-sky-950 bg-slate-100/80 dark:bg-[#0b2545]/70 text-slate-700 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
            title={theme === 'dark' ? 'Passer en mode clair' : 'Switch to dark theme'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* GitHub External */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl border border-slate-200 dark:border-sky-950 bg-slate-100/80 dark:bg-[#0b2545]/70 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-slate-200 dark:border-sky-950 text-slate-700 dark:text-slate-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Open mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-200 dark:border-sky-950 bg-white/95 dark:bg-[#071527]/98 backdrop-blur-xl px-4 py-5 space-y-4 animate-in slide-in-from-top-3">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg font-mono text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-sky-950/50"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-sky-950 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="flex-1 px-3 py-2 rounded-lg text-xs font-mono border border-slate-300 dark:border-sky-900 flex items-center justify-center gap-1.5"
            >
              <Search className="w-3.5 h-3.5" />
              <span>{language === 'fr' ? 'Rechercher' : 'Search'}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCV();
              }}
              className="flex-1 px-3 py-2 rounded-lg text-xs font-mono border border-sky-500/40 bg-sky-50 dark:bg-sky-950 text-sky-800 dark:text-sky-300 flex items-center justify-center gap-1.5"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>CV Académique</span>
            </button>

            <button
              type="button"
              onClick={toggleLanguage}
              className="px-3 py-2 rounded-lg text-xs font-mono border border-slate-300 dark:border-sky-900 flex items-center justify-center gap-1"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'fr' ? 'English' : 'Français'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
