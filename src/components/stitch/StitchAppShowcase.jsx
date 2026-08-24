import React, { useState } from 'react';
import { Heart, Check, Calendar, Sparkles, User, ArrowRight } from 'lucide-react';

export default function StitchAppShowcase({ onJoinWaitlist }) {
  const [selectedStage, setSelectedStage] = useState('adult');

  const stages = [
    {
      id: 'adolescent',
      name: 'Adolescent',
      age: 'Ages 10–19',
      desc: 'First period & puberty support',
      iconEmoji: '🌸',
      badgeBg: 'bg-pink-400/20 text-pink-200'
    },
    {
      id: 'adult',
      name: 'Adult',
      age: 'Reproductive Years',
      desc: 'Cycle & fertility tracking',
      iconEmoji: '💜',
      badgeBg: 'bg-purple-400/20 text-purple-200'
    },
    {
      id: 'pregnancy',
      name: 'Pregnancy',
      age: 'Expecting',
      desc: 'Week-by-week baby growth',
      iconEmoji: '👶',
      badgeBg: 'bg-emerald-400/20 text-emerald-200'
    },
    {
      id: 'menopause',
      name: 'Menopause',
      age: 'Ages 45+',
      desc: 'Symptom tracking & relief',
      iconEmoji: '✨',
      badgeBg: 'bg-amber-400/20 text-amber-200'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 text-left" id="mobile-app">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.1fr] gap-12 lg:gap-16 items-center">
        {/* Left Side: Mobile App Mockup with Floating UI Cards (Matching Uploaded Design) */}
        <div className="relative flex justify-center items-center py-8">
          {/* Floating Card 1: Top-Left ("Made for Her") */}
          <div className="absolute -top-4 -left-4 sm:left-4 z-20 bg-white/95 backdrop-blur-xl border border-gray-100 shadow-xl rounded-2xl p-3.5 sm:p-4 text-left animate-float-slow">
            <h4 className="font-extrabold text-xs sm:text-sm text-gray-900 mb-2">
              Made for Her
            </h4>
            <div className="flex items-center -space-x-2 mb-2.5">
              <img
                src="/assets/team-surayya.jpg"
                alt="Nigerian woman"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
              />
              <img
                src="/assets/team-fatima.jpg"
                alt="Nigerian woman"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
              />
              <img
                src="/assets/problem-woman-hijab.jpg"
                alt="Nigerian woman"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
              />
              <img
                src="/assets/team-aminu.jpg"
                alt="Nigerian woman"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
              />
            </div>
            <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#FF4288] w-3/4 rounded-full"></div>
            </div>
          </div>

          {/* Floating Card 2: Top-Right ("Track your cycle") */}
          <div className="absolute -top-6 -right-2 sm:right-4 z-20 bg-white/95 backdrop-blur-xl border border-gray-100 shadow-xl rounded-2xl p-3 sm:p-4 flex items-center gap-3 animate-float-delayed">
            <div className="w-10 h-10 rounded-xl bg-pink-50 text-[#FF4288] flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-xs sm:text-sm text-gray-900 leading-tight">
                Track your cycle
              </h4>
              <p className="text-[11px] text-gray-500 font-medium">
                know your body better
              </p>
            </div>
          </div>

          {/* Floating Card 3: Bottom-Right ("Next period In 5 days") */}
          <div className="absolute -bottom-4 right-0 sm:right-6 z-20 bg-white/95 backdrop-blur-xl border border-gray-100 shadow-xl rounded-2xl p-3.5 sm:p-4 flex items-center gap-4 animate-float-slow">
            <div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 block mb-0.5">
                Next period
              </span>
              <h4 className="text-base sm:text-lg font-extrabold text-gray-900 mb-1.5">
                In 5 days
              </h4>
              {/* Dot Trackers */}
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-pink-200"></span>
                <span className="w-2 h-2 rounded-full bg-pink-200"></span>
                <span className="w-2 h-2 rounded-full bg-[#FF4288] scale-125"></span>
                <span className="w-2 h-2 rounded-full bg-pink-200"></span>
                <span className="w-2 h-2 rounded-full bg-pink-200"></span>
                <span className="w-2 h-2 rounded-full bg-pink-200"></span>
                <span className="w-2 h-2 rounded-full bg-pink-200"></span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-pink-50 text-[#FF4288] flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
          </div>

          {/* Center Smartphone Mockup Frame */}
          <div className="relative w-[320px] sm:w-[340px] h-[660px] sm:h-[690px] rounded-[3.2rem] border-[9px] border-gray-900 shadow-2xl overflow-hidden bg-gradient-to-b from-[#E8457C] via-[#913BE2] to-[#4338CA] p-5 flex flex-col justify-between text-white select-none">
            {/* Dynamic Island Notch */}
            <div className="w-28 h-5 bg-black rounded-full mx-auto mb-2 flex items-center justify-end px-3">
              <span className="w-2.5 h-2.5 rounded-full bg-gray-900"></span>
            </div>

            {/* App Content */}
            <div className="flex-grow flex flex-col justify-between pt-1">
              {/* Heart Icon Badge */}
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md mx-auto flex items-center justify-center mb-3 shadow-inner">
                  <Heart className="w-7 h-7 text-white fill-white" />
                </div>
                <h3 className="text-2xl font-extrabold text-white tracking-tight leading-tight">
                  Welcome to Zahera
                </h3>
                <p className="text-xs text-white/80 mt-1 font-medium">
                  Select your life stage to begin
                </p>
              </div>

              {/* 4 Life Stage Cards */}
              <div className="grid grid-cols-2 gap-2.5 my-4">
                {stages.map((stage) => {
                  const isSelected = selectedStage === stage.id;
                  return (
                    <div
                      key={stage.id}
                      onClick={() => setSelectedStage(stage.id)}
                      className={`relative p-3.5 rounded-2xl cursor-pointer transition-all duration-300 text-left ${
                        isSelected
                          ? 'bg-white/25 border-2 border-white shadow-lg backdrop-blur-md'
                          : 'bg-white/10 border border-white/20 hover:bg-white/15 backdrop-blur-sm'
                      }`}
                    >
                      {/* Top Checkmark if selected */}
                      {isSelected && (
                        <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-white text-[#913BE2] flex items-center justify-center shadow-xs">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      )}

                      <div className="text-2xl mb-1.5">{stage.iconEmoji}</div>
                      <h4 className="text-sm font-extrabold text-white leading-tight">
                        {stage.name}
                      </h4>
                      <span className="text-[10px] text-white/75 font-semibold block mb-1">
                        {stage.age}
                      </span>
                      <p className="text-[9px] text-white/70 leading-tight">
                        {stage.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Actions */}
              <div className="text-center">
                <button
                  onClick={onJoinWaitlist}
                  className="w-full py-3.5 rounded-full bg-white hover:bg-gray-100 text-gray-900 text-sm font-extrabold shadow-lg shadow-black/20 transition-all cursor-pointer transform active:scale-98"
                >
                  Continue
                </button>
                <p className="text-[10px] text-white/70 mt-2 font-medium">
                  You can change your profile anytime in Settings
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Narrative & Value Propositions */}
        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF4288]/10 text-[#FF4288] text-xs font-bold uppercase tracking-wider mb-4 w-fit">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Lifelong Health Companion</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
            Personalized Care for Every Stage of a <span className="text-[#FF4288]">Woman's Life</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
            Zahera adapts dynamically across a woman's reproductive journey. From puberty and your first period to fertility tracking, pregnancy development, and menopause relief — all tailored with cultural sensitivity and 100% offline privacy.
          </p>

          {/* 4 Life-Stage Explanatory Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-[#F8F9FB] border border-gray-100 p-4 rounded-2xl">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-lg">🌸</span>
                <h4 className="font-bold text-sm text-gray-900">Adolescence (10–19)</h4>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Stigma-free puberty guidance, hygiene basics, and first period trackers.
              </p>
            </div>

            <div className="bg-[#F8F9FB] border border-gray-100 p-4 rounded-2xl">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-lg">💜</span>
                <h4 className="font-bold text-sm text-gray-900">Adult Reproductive</h4>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Predictive cycle forecasting, fertile window logs, and symptom patterns.
              </p>
            </div>

            <div className="bg-[#F8F9FB] border border-gray-100 p-4 rounded-2xl">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-lg">👶</span>
                <h4 className="font-bold text-sm text-gray-900">Pregnancy Care</h4>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Week-by-week African fruit milestones, antenatal checklists, and tips.
              </p>
            </div>

            <div className="bg-[#F8F9FB] border border-gray-100 p-4 rounded-2xl">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-lg">✨</span>
                <h4 className="font-bold text-sm text-gray-900">Menopause (45+)</h4>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Hot flush relief strategies, hormonal transition logs, and wellness advice.
              </p>
            </div>
          </div>

          <div>
            <button
              onClick={onJoinWaitlist}
              className="px-7 py-3.5 rounded-full bg-[#FF4288] hover:bg-[#e62e6b] text-white text-xs sm:text-sm font-bold shadow-lg shadow-pink-500/25 transition-all flex items-center gap-2 cursor-pointer w-fit"
            >
              <span>Get early app access</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
