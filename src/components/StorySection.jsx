import React from 'react';

export default function StorySection({ onLearnMore }) {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-[1040px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-left">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDE8F1] text-[#C41C65] text-[11px] font-bold uppercase tracking-wider mb-3">
            Every Ribbon Tells a Story
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#241629] mb-4">
            Every woman tells a story
          </h2>
          <p className="text-sm sm:text-base text-[#66536C] leading-relaxed mb-4">
            Behind every menstrual cycle, pregnancy milestone, and menopause transition is a story — of love, dignity, and resilience. A mother, a daughter, a sister, a friend. This is why we act, and why we build Zahera.
          </p>
          <p className="text-sm sm:text-base text-[#66536C] leading-relaxed mb-6">
            Founded in Nigeria by Teem Tech Solutions Ltd., Zahera combines clinical obstetric expertise with offline-first multilingual AI to ensure no woman is left behind.
          </p>
          <button
            onClick={onLearnMore}
            className="px-7 py-3 rounded-full bg-[#F04C8A] hover:bg-[#C71F68] text-white text-xs font-bold shadow-md shadow-pink-500/20 transition cursor-pointer"
          >
            Learn more
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-[22px] overflow-hidden aspect-[4/5] shadow-md">
            <img
              src="/assets/landing-hero-woman.jpg"
              alt="Nigerian Woman in Light Blue Hijab"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="rounded-[22px] overflow-hidden aspect-[4/5] shadow-md">
            <img
              src="/assets/team-surayya.jpg"
              alt="Dr. Surayya Zubair - Obstetrician"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
