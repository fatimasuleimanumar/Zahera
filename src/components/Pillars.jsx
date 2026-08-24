import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Pillars() {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: '🎓',
      title: 'Awareness & Education',
      desc: 'Workshops, digital guides, puberty education, and maternal stories in 5 Nigerian languages.'
    },
    {
      icon: '👥',
      title: 'Support & Community',
      desc: '24/7 AI companion, physician-reviewed counselling, mentorship, and accredited primary clinic referrals.'
    },
    {
      icon: '🔬',
      title: 'Research & Advocacy',
      desc: 'Funding innovation and generating locally representative clinical data for African maternal health.'
    }
  ];

  return (
    <section className="py-16 px-6 text-center bg-white">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#241629] mb-12 tracking-tight">
        {t('rely_title')}
      </h2>

      <div className="max-w-[1040px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center p-4 group">
            <div className="w-16 h-16 rounded-full bg-[#FEEBF1] flex items-center justify-center mb-5 text-2xl text-[#F04C8A] shadow-sm group-hover:scale-110 group-hover:bg-[#F04C8A] group-hover:text-white transition duration-300">
              {item.icon}
            </div>
            <h3 className="text-lg font-extrabold text-[#241629] mb-2">{item.title}</h3>
            <p className="text-xs sm:text-sm text-[#66536C] leading-relaxed max-w-[280px]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
