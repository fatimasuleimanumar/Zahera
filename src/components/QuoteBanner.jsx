import React from 'react';

export default function QuoteBanner() {
  return (
    <section className="py-16 px-6 bg-[#FDF1F5] border-y border-[#F5D6E3] text-center">
      <div className="max-w-[820px] mx-auto">
        <p className="text-xl sm:text-2xl md:text-[1.7rem] font-bold text-[#241629] leading-snug mb-5">
          "Together, we can make the invisible visible. Together, we can turn health access into a promise. Together, we're not just raising awareness —{' '}
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#F5D6E3] text-[#F04C8A] text-sm sm:text-base font-extrabold shadow-xs">
            🌸 we're changing lives.
          </span>"
        </p>
        <div className="text-xs sm:text-sm text-[#66536C] font-semibold">
          <strong className="text-[#241629]">Fatima Suleiman Umar</strong>, Founder & Technical Director · Teem Tech Solutions Ltd.
        </div>
      </div>
    </section>
  );
}
