import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar({ currentView, setCurrentView }) {
  const { lang, changeLanguage, t, languages, currentLangObj } = useLanguage();
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'about', label: t('nav_about') },
    { id: 'features', label: t('nav_features') },
    { id: 'research', label: t('nav_research') },
    { id: 'faq', label: t('nav_faq') },
    { id: 'contact', label: t('nav_contact') },
  ];

  const handleNavClick = (viewId) => {
    setCurrentView(viewId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#F5D6E3] py-4">
      <div className="max-w-[1140px] mx-auto px-6 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 font-extrabold text-[1.35rem] text-[#241629] tracking-tight cursor-pointer"
        >
          <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#F04C8A] via-[#D82490] to-[#8B3DB8] text-white flex items-center justify-center text-sm shadow-md shadow-pink-500/20">
            🌸
          </span>
          <span>
            ZAHERA<span className="text-[#F04C8A]">.TECH</span>
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-[0.92rem] font-medium text-[#66536C]">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`hover:text-[#F04C8A] transition-colors cursor-pointer ${
                currentView === link.id ? 'text-[#F04C8A] font-bold' : ''
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Action Group */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#F5D6E3] bg-white text-xs font-mono font-bold text-[#241629] shadow-sm hover:border-[#F04C8A] transition cursor-pointer"
              aria-label="Change Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#F04C8A]" />
              <span>{currentLangObj.short}</span>
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white border border-[#F5D6E3] rounded-2xl shadow-xl overflow-hidden z-50 animate-in fade-in">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      changeLanguage(l.code);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs flex items-center justify-between border-b border-[#FEEBF1] last:border-0 hover:bg-[#FEEBF1] transition cursor-pointer ${
                      lang === l.code ? 'bg-[#FEEBF1] text-[#F04C8A] font-bold' : 'text-[#241629]'
                    }`}
                  >
                    <span>{l.label}</span>
                    <span className="font-mono text-[10px] text-[#9E89A3]">{l.short}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* AI Chat Pill */}
          <button
            onClick={() => {
              if (currentView !== 'home') setCurrentView('home');
              setTimeout(() => {
                const el = document.getElementById('ai-talk');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FDE8F1] text-[#C41C65] text-xs font-bold hover:bg-[#FBD3E4] transition cursor-pointer"
          >
            <span>🌸</span>
            <span>AI Chat 24/7</span>
          </button>

          {/* Join Waitlist Pill */}
          <button
            onClick={() => handleNavClick('waitlist')}
            className="inline-flex items-center gap-1 px-5 py-2 rounded-full bg-[#F04C8A] hover:bg-[#C71F68] text-white text-xs font-bold shadow-md shadow-pink-500/25 transition cursor-pointer"
          >
            <span>{t('nav_cta')}</span>
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-[#F5D6E3] text-[#241629]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-3 pb-4 bg-white border-t border-[#F5D6E3] flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-left py-2 text-sm font-semibold border-b border-[#FEEBF1] text-[#241629]"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('waitlist')}
            className="mt-2 w-full py-2.5 rounded-full bg-[#F04C8A] text-white text-xs font-bold text-center"
          >
            {t('nav_cta')}
          </button>
        </div>
      )}
    </nav>
  );
}
