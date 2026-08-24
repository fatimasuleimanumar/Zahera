import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function MissionSplit({ onLearnMore }) {
  const { t } = useLanguage();

  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-[1040px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.15fr] gap-6 items-stretch">
        {/* Left Photo Frame */}
        <div className="rounded-[26px] overflow-hidden shadow-md min-h-[340px] relative">
          <img
            src="/assets/landing-hero-woman.jpg"
            alt="Zahera Sisterhood — Nigerian Woman"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Right Pink Content Box */}
        <div className="bg-[#FEEBF1] rounded-[26px] border border-[#F5D6E3] p-9 sm:p-10 flex flex-col justify-center text-left">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#F04C8A] text-[11px] font-bold uppercase tracking-wider self-start mb-3">
            About our mission
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#241629] mb-3">
            Our Mission
          </h2>

          <div className="font-bold text-[1.02rem] text-[#241629] mb-3 leading-snug">
            We Don't Just Talk About Reproductive Health. We Walk With You Through It.
          </div>

          <p className="text-sm text-[#66536C] leading-relaxed mb-6">
            No Nigerian woman should face reproductive health concerns alone. We are building a national sisterhood that offers real support, clinical safety, and private AI guidance in her mother tongue — with care, clarity, and hope.
          </p>

          <div>
            <button
              onClick={onLearnMore}
              className="px-7 py-3 rounded-full bg-[#F04C8A] hover:bg-[#C71F68] text-white text-xs font-bold shadow-md shadow-pink-500/20 transition cursor-pointer"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
