import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Mail, MapPin, Github, Linkedin, Send, Copy, Check, Terminal, Sparkles, MessageSquare } from 'lucide-react';

interface ContactProps {
  onShowToast: (text: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const { language } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    onShowToast(language === 'fr' ? 'Email copié dans le presse-papier !' : 'Email copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate sending email / opening mail client
    const mailto = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;
    window.location.href = mailto;

    setSubmitted(true);
    onShowToast(language === 'fr' ? 'Client de messagerie ouvert !' : 'Mail client opened with your message!');
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-sky-700 dark:text-sky-400 font-bold">05.</span>
            <span className="text-xs font-mono uppercase tracking-widest text-sky-700 dark:text-sky-400 font-bold">
              {language === 'fr' ? 'Contact & Échanges' : 'Contact & Collaborations'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            {language === 'fr' ? 'Collaborer sur des Projets Scientifiques' : "Let's Connect & Compute"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans max-w-2xl">
            {language === 'fr'
              ? "Disponible pour des stages académiques, collaborations en calcul haute performance, modélisation mathématique et projets open-source."
              : "Open for academic internships, high-performance scientific software development, mathematical modeling, and open-source contributions."}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Direct Details & Clone Helper */}
          <div className="lg:col-span-5 space-y-4">
            {/* Contact Details Card */}
            <div className="p-6 rounded-2xl border bg-white dark:bg-[#071527] border-slate-300 dark:border-sky-950 space-y-4 shadow-xs">
              <h3 className="text-sm font-bold font-display uppercase tracking-wider text-slate-900 dark:text-white">
                {language === 'fr' ? 'Coordonnées Directes' : 'Direct Channels'}
              </h3>

              <div className="space-y-3 text-xs sm:text-sm font-mono">
                {/* Email Item */}
                <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-slate-50 dark:bg-[#0b2545]/50 border border-slate-300 dark:border-sky-900/40">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail className="w-4 h-4 text-sky-700 dark:text-sky-400 flex-shrink-0" />
                    <span className="truncate text-slate-900 dark:text-slate-200 font-medium">{PERSONAL_INFO.email}</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1 text-slate-500 hover:text-sky-700 dark:hover:text-sky-400 flex-shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-[#0b2545]/50 border border-slate-300 dark:border-sky-900/40">
                  <MapPin className="w-4 h-4 text-sky-700 dark:text-sky-400 flex-shrink-0" />
                  <span className="text-slate-900 dark:text-slate-200 font-medium">{PERSONAL_INFO.location}</span>
                </div>

                {/* Institution Item */}
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-[#0b2545]/50 border border-slate-300 dark:border-sky-900/40">
                  <span className="w-4 h-4 rounded-full bg-sky-500/20 text-sky-700 dark:text-sky-400 flex items-center justify-center text-[10px] font-bold">
                    U
                  </span>
                  <span className="text-slate-900 dark:text-slate-200 font-medium">{PERSONAL_INFO.institution[language]}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-2 pt-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-xl text-xs font-mono border border-slate-300 dark:border-sky-900 bg-slate-50 dark:bg-[#0b2545]/60 text-slate-900 dark:text-slate-200 hover:text-sky-700 dark:hover:text-sky-400 flex items-center justify-center gap-1.5 font-medium transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-xl text-xs font-mono border border-slate-300 dark:border-sky-900 bg-slate-50 dark:bg-[#0b2545]/60 text-slate-900 dark:text-slate-200 hover:text-sky-700 dark:hover:text-sky-400 flex items-center justify-center gap-1.5 font-medium transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Quick Clone Terminal Box */}
            <div className="p-4 rounded-2xl border bg-slate-900 text-slate-200 font-mono text-xs space-y-2 border-slate-800">
              <div className="flex items-center gap-2 text-[10px] text-slate-400 uppercase tracking-wider">
                <Terminal className="w-3.5 h-3.5 text-sky-400" />
                <span>{language === 'fr' ? 'Cloner les dépôts' : 'Clone Repositories'}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 text-sky-300 select-all overflow-x-auto">
                <code>git clone https://github.com/TifaniohMF/SolveLinearSystem.git</code>
              </div>
            </div>
          </div>

          {/* Interactive Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl border bg-white dark:bg-[#071527] border-slate-300 dark:border-sky-950 space-y-4 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-4 h-4 text-sky-700 dark:text-sky-400" />
                <h3 className="text-sm font-bold font-display uppercase tracking-wider text-slate-900 dark:text-white">
                  {language === 'fr' ? 'Envoyer un Message' : 'Send a Direct Note'}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-800 dark:text-slate-300 block font-semibold">
                    {language === 'fr' ? 'Votre Nom *' : 'Your Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Ada Lovelace"
                    className="w-full px-3.5 py-2 text-xs font-mono rounded-xl border bg-white dark:bg-[#071527] border-slate-300 dark:border-sky-900/60 text-slate-900 dark:text-white placeholder:text-slate-500 focus:border-sky-600 outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-800 dark:text-slate-300 block font-semibold">
                    {language === 'fr' ? 'Votre Email *' : 'Your Email *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@institution.edu"
                    className="w-full px-3.5 py-2 text-xs font-mono rounded-xl border bg-white dark:bg-[#071527] border-slate-300 dark:border-sky-900/60 text-slate-900 dark:text-white placeholder:text-slate-500 focus:border-sky-600 outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-800 dark:text-slate-300 block font-semibold">
                  {language === 'fr' ? 'Sujet' : 'Subject'}
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={language === 'fr' ? "Opportunité de stage / Projet de calcul scientifique" : "Internship / Research Collaboration / Scientific Computing"}
                  className="w-full px-3.5 py-2 text-xs font-mono rounded-xl border bg-white dark:bg-[#071527] border-slate-300 dark:border-sky-900/60 text-slate-900 dark:text-white placeholder:text-slate-500 focus:border-sky-600 outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-800 dark:text-slate-300 block font-semibold">
                  {language === 'fr' ? 'Message *' : 'Message *'}
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={language === 'fr' ? "Décrivez votre message ou proposition..." : "Your message, inquiry or research proposal..."}
                  className="w-full px-3.5 py-2 text-xs font-mono rounded-xl border bg-white dark:bg-[#071527] border-slate-300 dark:border-sky-900/60 text-slate-900 dark:text-white placeholder:text-slate-500 focus:border-sky-600 outline-none resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl text-xs sm:text-sm font-display font-semibold transition-all flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white shadow-md shadow-sky-600/20"
              >
                <Send className="w-4 h-4" />
                <span>{language === 'fr' ? 'Ouvrir et Envoyer par Email' : 'Send Message via Email Client'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
