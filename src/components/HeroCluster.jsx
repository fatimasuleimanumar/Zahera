import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

export default function HeroCluster({ onJoinWaitlist, onExploreFeatures }) {
  const [progress, setProgress] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Trigger smooth progress bar fill
    const progressTimer = setTimeout(() => {
      setProgress(94);
    }, 200);

    // Trigger smooth number count from 0 to 94%
    const target = 94;
    const duration = 1600;
    const intervalTime = 25;
    const step = target / (duration / intervalTime);

    const countTimer = setInterval(() => {
      setCount((prev) => {
        if (prev + step >= target) {
          clearInterval(countTimer);
          return target;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => {
      clearTimeout(progressTimer);
      clearInterval(countTimer);
    };
  }, []);

  return (
    <section className="max-w-[1440px] w-full mx-auto px-3 sm:px-6 mb-20">
      <div className="relative rounded-[2.5rem] overflow-hidden min-h-[580px] lg:min-h-[620px] flex items-center bg-gray-900 shadow-2xl">
        {/* Background Image with Gradient */}
        <div className="absolute inset-0">
          <img
            alt="Woman smiling at phone"
            className="w-full h-full object-cover object-center"
            src="/assets/hero-woman-sofa.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent"></div>
        </div>

        {/* Content overlay */}
        <div className="relative z-10 p-8 sm:p-12 lg:p-16 w-full md:w-[56%] lg:w-[48%] max-w-[560px] text-white text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 tracking-tight">
            Health answers<br />
            that speak your<br />
            <span className="text-[#FF4288]">language.</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-200 mb-8 max-w-md leading-relaxed">
            Zahera is your AI health companion through puberty, pregnancy, and menopause — built for Nigerian women, in 5 local languages, working fully offline.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <button
              onClick={onJoinWaitlist}
              className="bg-[#FF4288] hover:bg-[#E03375] text-white px-6 py-3.5 rounded-full font-medium transition-all shadow-lg shadow-pink-500/30 flex items-center gap-2 cursor-pointer hover:shadow-pink-500/50 hover:-translate-y-0.5"
            >
              <span>Join the pilot waitlist</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreFeatures}
              className="bg-white/80 backdrop-blur-md text-gray-900 border border-white/80 px-6 py-3.5 rounded-full font-semibold hover:bg-white transition-all flex items-center gap-2 cursor-pointer shadow-md hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Explore features</span>
            </button>
          </div>
        </div>

        {/* Floating UI Elements (Right Side) */}
        <div className="absolute right-6 sm:right-10 lg:right-14 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 w-72">
          {/* Live User Card with Animated Loading Bar & Counter */}
          <div className="bg-black/45 backdrop-blur-xl border border-white/20 p-4 rounded-3xl text-white shadow-2xl text-left animate-float-slow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img
                  alt="Amara K."
                  className="w-10 h-10 rounded-full border-2 border-[#FF4288] object-cover"
                  src="/assets/team-fatima.jpg"
                />
                <div>
                  <h4 className="font-bold text-sm">Amara K.</h4>
                  <p className="text-xs text-gray-300">Lagos, Nigeria</p>
                </div>
              </div>
              <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                <span>LIVE</span>
              </span>
            </div>

            {/* Animated Loading Progress Bar */}
            <div className="mb-2">
              <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-pink-400 via-[#FF4288] to-[#E600AC] rounded-full transition-all duration-1000 ease-out shadow-sm"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Animated Counter from 0 to 94% */}
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold leading-none font-mono">
                {Math.round(count)}%
              </span>
              <span className="text-xs text-gray-300 leading-tight">
                Satisfaction<br />rate
              </span>
            </div>
          </div>

          {/* Connection visual with pulse */}
          <div className="relative h-20 flex justify-center py-2">
            <div className="w-1 bg-white/30 h-full rounded-full"></div>
            <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-[#FF4288] animate-pulse-glow"></div>
          </div>

          {/* Connected users */}
          <div className="flex items-center justify-end gap-2 animate-float-delayed">
            <div className="flex items-center">
              <img alt="User" className="w-8 h-8 rounded-full border-2 border-white/50 -mr-2 z-10 object-cover" src="/assets/team-surayya.jpg" />
              <img alt="User" className="w-8 h-8 rounded-full border-2 border-white/50 -mr-2 z-20 object-cover" src="/assets/team-fatima.jpg" />
              <img alt="User" className="w-8 h-8 rounded-full border-2 border-white/50 z-30 object-cover" src="/assets/team-aminu.jpg" />
            </div>
            <div className="bg-white text-gray-900 text-xs font-bold px-2 py-1 rounded-full shadow-sm">+1,000</div>
            <div className="bg-white/80 backdrop-blur-md text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white shadow-sm">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span>Women connected</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
