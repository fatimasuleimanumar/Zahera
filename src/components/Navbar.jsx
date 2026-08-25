import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ currentView, setCurrentView }) {
  const { lang, changeLanguage, t, languages, currentLangObj } = useLanguage();
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'about', label: 'About Us' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (viewId) => {
    setCurrentView(viewId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 group cursor-pointer text-left"
        >
          <div className="transform group-hover:rotate-12 transition-transform duration-300">
            <svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2L19.5 12.5L30 16L19.5 19.5L16 30L12.5 19.5L2 16L12.5 12.5L16 2Z" fill="#FF4288"></path>
              <circle cx="16" cy="16" fill="white" r="4"></circle>
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-900 group-hover:text-[#FF4288] transition-colors">
            Zahera Tech
          </span>
        </button>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`hover:text-[#FF4288] transition-colors cursor-pointer ${
                currentView === link.id
                  ? 'border-b-2 pb-1 text-[#FF4288] border-[#FF4288] font-bold'
                  : ''
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Group */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors text-sm font-medium cursor-pointer"
              aria-label="Change Language"
            >
              <Globe className="w-4 h-4 text-gray-600" />
              <span>{currentLangObj?.label || 'English'}</span>
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 overflow-hidden">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      changeLanguage(l.code);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs font-semibold hover:bg-pink-50 cursor-pointer flex justify-between items-center ${
                      lang === l.code ? 'bg-pink-50 text-[#FF4288] font-bold' : 'text-gray-800'
                    }`}
                  >
                    <span>{l.label}</span>
                    <span className="font-mono text-[10px] text-gray-400 font-bold">{l.short}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Join Waitlist Pill */}
          <a
            href="https://forms.gle/QRuTUvbqB3L2rk5e6"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF4288] hover:bg-[#E03375] text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
          >
            <span>Join Waitlist</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#FF4288] focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 px-6 py-4 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left py-2 border-b border-gray-100 ${
                currentView === link.id
                  ? 'text-[#FF4288] font-bold'
                  : 'text-gray-700 hover:text-[#FF4288] font-medium'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <a
              href="https://forms.gle/QRuTUvbqB3L2rk5e6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-2.5 rounded-full bg-[#FF4288] hover:bg-[#E03375] text-white font-medium shadow-md transition-colors"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
