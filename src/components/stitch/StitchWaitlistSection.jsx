import React from 'react';

export default function StitchWaitlistSection({ onJoinWaitlist }) {
  return (
    <section className="w-full bg-[#FFF5F8]/70 border-t border-pink-100/70 py-24 sm:py-32 px-4 sm:px-6 text-center relative overflow-hidden" id="waitlist-callout">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-6 py-2 rounded-full bg-[#FF4288]/10 border border-[#FF4288]/20 text-gray-800 text-sm font-semibold mb-8 shadow-xs">
          <span className="font-extrabold text-[#D81B60]">1,000+</span>
          <span>women already waiting</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-gray-900 tracking-tight leading-tight mb-5">
          Be first to try Zahera.
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed mb-10">
          We're piloting in Kaduna and Kano, with Lagos coming soon. Leave your email and we'll let you know the moment it's ready.
        </p>

        {/* CTA Action Button */}
        <div className="mb-4">
          <a
            href="https://forms.gle/QRuTUvbqB3L2rk5e6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-gradient-to-r from-[#FF387D] via-[#FF5E93] to-[#FF4288] hover:opacity-95 text-white font-extrabold text-base sm:text-lg shadow-lg shadow-pink-500/25 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            Join waitlist
          </a>
        </div>

        {/* Micro-copy */}
        <p className="text-xs sm:text-sm text-gray-500 font-medium mb-12">
          No spam. Just one email when the pilot opens.
        </p>

        {/* 3 Location Badges */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200/80 text-gray-800 text-xs sm:text-sm font-semibold shadow-xs hover:border-pink-300 transition-colors">
            <span>📍</span>
            <span>Kaduna</span>
          </div>

          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200/80 text-gray-800 text-xs sm:text-sm font-semibold shadow-xs hover:border-pink-300 transition-colors">
            <span>📍</span>
            <span>Kano</span>
          </div>

          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200/80 text-gray-800 text-xs sm:text-sm font-semibold shadow-xs hover:border-pink-300 transition-colors">
            <span>📍</span>
            <span>Lagos — coming soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}
