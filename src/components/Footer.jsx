import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer({ setCurrentView }) {
  const { t } = useLanguage();

  const handleNav = (viewId) => {
    setCurrentView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#F5D6E3] pt-12 pb-7 px-6 bg-white text-left">
      <div className="max-w-[1140px] mx-auto bg-[#FEEBF1] border border-[#F5D6E3] rounded-2xl p-4 text-xs text-[#66536C] mb-9">
        {t('footer_disclaimer')}
      </div>

      <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row justify-between items-start gap-9">
        <div>
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2 font-extrabold text-xl text-[#241629] tracking-tight cursor-pointer mb-2"
          >
            <span className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#F04C8A] via-[#D82490] to-[#8B3DB8] text-white flex items-center justify-center text-xs shadow-sm">
              🌸
            </span>
            <span>
              ZAHERA<span className="text-[#F04C8A]">.TECH</span>
            </span>
          </button>
          <p className="text-xs text-[#66536C] max-w-[300px] leading-relaxed mb-1">
            {t('footer_tagline')}
          </p>
          <p className="text-[11px] text-[#9E89A3]">
            A product built by Teem Tech Solutions Ltd. · Nigeria
          </p>
        </div>

        <div className="flex gap-12 flex-wrap">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F04C8A] mb-3">Platform</h4>
            <div className="flex flex-col gap-2 text-xs text-[#66536C]">
              <button onClick={() => handleNav('features')} className="text-left hover:text-[#F04C8A] cursor-pointer">Features Deep Dive</button>
              <button onClick={() => handleNav('about')} className="text-left hover:text-[#F04C8A] cursor-pointer">About us & Team</button>
              <button onClick={() => handleNav('waitlist')} className="text-left hover:text-[#F04C8A] cursor-pointer">VIP Waitlist</button>
              <button onClick={() => handleNav('faq')} className="text-left hover:text-[#F04C8A] cursor-pointer">FAQ & Help</button>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F04C8A] mb-3">Company & Legal</h4>
            <div className="flex flex-col gap-2 text-xs text-[#66536C]">
              <button onClick={() => handleNav('contact')} className="text-left hover:text-[#F04C8A] cursor-pointer">Contact & Support</button>
              <button onClick={() => handleNav('privacy')} className="text-left hover:text-[#F04C8A] cursor-pointer">Privacy Policy</button>
              <button onClick={() => handleNav('about')} className="text-left hover:text-[#F04C8A] cursor-pointer">Research & Grants</button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto mt-9 pt-5 border-t border-[#F5D6E3] flex flex-col sm:flex-row justify-between items-center text-xs text-[#9E89A3] gap-2">
        <div>© 2026 Teem Tech Solutions Ltd. All rights reserved.</div>
        <div>Built with pride for Nigerian & African women.</div>
      </div>
    </footer>
  );
}
