import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveMathVisualizer } from './components/InteractiveMathVisualizer';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { AcademicCVModal } from './components/AcademicCVModal';
import { CommandPalette } from './components/CommandPalette';
import { ToastContainer } from './components/Toast';
import { Project, ToastMessage } from './types';
import { getProjects } from './data/portfolioData';

function PortfolioMain() {
  const { language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCVModalOpen, setIsCVModalOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (text: string, type: 'success' | 'info' | 'copied' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, text, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 3200);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleSelectProjectById = (projectId: string) => {
    const projects = getProjects(language);
    const found = projects.find((p) => p.id === projectId);
    if (found) {
      setSelectedProject(found);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-grid-pattern theme-transition text-slate-900 dark:text-slate-100 relative selection:bg-sky-500 selection:text-white">
      {/* Interactive Canvas Background in top area */}
      <InteractiveMathVisualizer />

      {/* Global Navbar */}
      <Navbar
        onOpenCV={() => setIsCVModalOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-grow relative z-10 space-y-4">
        <Hero
          onOpenCV={() => setIsCVModalOpen(true)}
          onShowToast={(text) => showToast(text, 'copied')}
        />
        <About />
        <Skills />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Education onOpenCV={() => setIsCVModalOpen(true)} />
        <Contact onShowToast={(text) => showToast(text, 'copied')} />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onShowToast={(text) => showToast(text, 'copied')}
      />

      <AcademicCVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />

      <CommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onOpenCV={() => setIsCVModalOpen(true)}
        onSelectProject={(id) => handleSelectProjectById(id)}
      />

      {/* Notification Toast Container */}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PortfolioMain />
      </LanguageProvider>
    </ThemeProvider>
  );
}
