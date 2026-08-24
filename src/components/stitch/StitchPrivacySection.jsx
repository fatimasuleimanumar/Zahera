import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

export default function StitchPrivacySection() {
  const privacyPillars = [
    {
      num: '01',
      title: 'Encrypted on your device',
      desc: 'Your logs and symptoms are encrypted locally before they ever leave your phone.'
    },
    {
      num: '02',
      title: 'Encrypted in transit',
      desc: 'Any sync to your account happens over a secured connection, end to end.'
    },
    {
      num: '03',
      title: 'Never sold',
      desc: 'Your health data funds nothing but your own experience — no ad networks, no data brokers.'
    }
  ];

  return (
    <section className="w-full bg-gradient-to-r from-[#FF387D] via-[#FF5E93] to-[#FF94BA] py-20 sm:py-28 my-16 relative overflow-hidden shadow-inner" id="privacy">
      {/* Ambient Frosted Lighting Blooms */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/40 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#FFE4EE]/50 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-pink-300/25 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        {/* Left Side: Privacy Content & Pillars */}
        <div className="text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/40 text-[#4A0A26] border border-white/60 text-xs font-black uppercase tracking-wider mb-4 backdrop-blur-md shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#83003A]" />
            <span>Privacy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2A0617] tracking-tight leading-tight mb-4">
            What you tell Zahera <span className="text-white drop-shadow-sm">stays with you.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#3D0A23] font-semibold leading-relaxed mb-8">
            Reproductive health is personal. We built the whole system around that, not as an afterthought.
          </p>

          {/* 3 Numbered Glassmorphic Privacy Items with Crisp Dark Contrast */}
          <div className="space-y-4">
            {privacyPillars.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white/85 hover:bg-white/95 border border-white/80 shadow-xl shadow-pink-950/5 backdrop-blur-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-100/90 text-[#D81B60] font-black text-base flex items-center justify-center shrink-0 border border-pink-200/60 shadow-xs">
                  {item.num}
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-black text-gray-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Uploaded Image Frame with Floating Privacy Badge */}
        <div className="relative">
          <div className="rounded-[2.2rem] overflow-hidden shadow-2xl border-4 border-white/60 h-[440px] sm:h-[500px] lg:h-[540px] w-full bg-pink-950/10">
            <img
              src="/assets/privacy-women-group.jpg"
              alt="Nigerian women smiling and feeling empowered with Zahera"
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Floating Privacy Shield Badge */}
          <div className="absolute -bottom-4 -left-4 sm:bottom-6 sm:-left-6 z-20 bg-white/95 backdrop-blur-xl border border-white p-4 rounded-2xl text-gray-900 shadow-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF4288] text-white flex items-center justify-center shadow-sm">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-black text-xs text-gray-900 leading-tight">100% Private & Protected</h4>
              <p className="text-[10px] text-gray-600 font-bold">On-Device Zero Data Brokering</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
