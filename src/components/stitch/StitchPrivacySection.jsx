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
    <section className="max-w-[1440px] w-full mx-auto px-3 sm:px-6 mb-24" id="privacy">
      <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#1c0827] via-[#2f0e3b] to-[#12041a] text-white p-8 sm:p-12 lg:p-16 shadow-2xl border border-white/10">
        {/* Ambient Glowing Background Blooms */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#FF4288]/25 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-purple-600/25 blur-[120px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* Left Side: Privacy Content & Pillars */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-pink-300 border border-white/15 text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FF4288]" />
              <span>Privacy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              What you tell Zahera <span className="text-[#FF4288]">stays with you.</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-8">
              Reproductive health is personal. We built the whole system around that, not as an afterthought.{' '}
              <a href="/privacy" className="text-[#FF4288] hover:text-pink-300 font-semibold underline underline-offset-4 transition-colors">
                Read our full privacy policy →
              </a>
            </p>

            {/* 3 Numbered Privacy Items */}
            <div className="space-y-4">
              {privacyPillars.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors"
                >
                  <div className="text-xl sm:text-2xl font-mono font-extrabold text-[#FF4288] shrink-0 pt-0.5">
                    {item.num}
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Uploaded Image Frame with Floating Privacy Badge */}
          <div className="relative">
            <div className="rounded-[2.2rem] overflow-hidden shadow-2xl border-2 border-white/20 h-[440px] sm:h-[500px] lg:h-[540px] w-full bg-gray-900">
              <img
                src="/assets/privacy-women-group.jpg"
                alt="Nigerian women smiling and feeling empowered with Zahera"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Privacy Shield Badge */}
            <div className="absolute -bottom-4 -left-4 sm:bottom-6 sm:-left-6 z-20 bg-black/65 backdrop-blur-xl border border-white/20 p-4 rounded-2xl text-white shadow-2xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF4288]/20 border border-[#FF4288]/40 flex items-center justify-center text-[#FF4288]">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-xs text-white leading-tight">100% Private & Protected</h4>
                <p className="text-[10px] text-gray-300 font-medium">On-Device Zero Data Brokering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
