import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function StitchCycleTracker() {
  // Period Tracker State
  const [lastPeriodDate, setLastPeriodDate] = useState('2024-05-18');
  
  // Pregnancy Tracker State
  const [currentWeek, setCurrentWeek] = useState(20);

  const fruitMilestones = [
    {
      week: 4,
      fruit: 'Poppy Seed (Taba)',
      weight: '0.1g',
      length: '1mm',
      desc: 'The blastocyst is officially implanting into the uterine wall.',
      icon: '🌱'
    },
    {
      week: 8,
      fruit: 'Garden Egg (Gauta / Igba)',
      weight: '1g',
      length: '1.6cm',
      desc: 'Tiny fingers, toes, and facial features are rapidly forming.',
      icon: '🍆'
    },
    {
      week: 12,
      fruit: 'African Star Apple (Agbalumo / Udara)',
      weight: '14g',
      length: '5.4cm',
      desc: 'Reflexes develop — vocal cords and tiny fingernails are forming.',
      icon: '🍎'
    },
    {
      week: 20,
      fruit: 'Sweet Potato (Dankali / Cuku)',
      weight: '300g',
      length: '16.5cm',
      desc: 'Your baby can now hear your voice. Keep eating well and rest.',
      icon: '🍠'
    },
    {
      week: 28,
      fruit: 'Ripe Mango (Mangwaro)',
      weight: '1kg',
      length: '37cm',
      desc: 'Eyes can open and close, and brain waves show sleep cycles.',
      icon: '🥭'
    },
    {
      week: 36,
      fruit: 'Papaya / Pawpaw (Gwanda)',
      weight: '2.6kg',
      length: '47cm',
      desc: 'Lungs are nearly mature and baby is practicing breathing.',
      icon: '🍈'
    },
    {
      week: 40,
      fruit: 'Watermelon (Kankana)',
      weight: '3.4kg',
      length: '51cm',
      desc: 'Full term! Your baby is ready to meet the world.',
      icon: '🍉'
    }
  ];

  const currentMilestoneIndex = fruitMilestones.findIndex(m => m.week >= currentWeek) !== -1
    ? fruitMilestones.findIndex(m => m.week >= currentWeek)
    : fruitMilestones.length - 1;

  const milestone = fruitMilestones[currentMilestoneIndex] || fruitMilestones[3];

  const handlePrev = () => {
    const idx = fruitMilestones.findIndex(m => m.week === currentWeek);
    if (idx > 0) {
      setCurrentWeek(fruitMilestones[idx - 1].week);
    } else if (currentWeek > 4) {
      setCurrentWeek(Math.max(4, currentWeek - 4));
    }
  };

  const handleNext = () => {
    const idx = fruitMilestones.findIndex(m => m.week === currentWeek);
    if (idx < fruitMilestones.length - 1 && idx !== -1) {
      setCurrentWeek(fruitMilestones[idx + 1].week);
    } else if (currentWeek < 40) {
      setCurrentWeek(Math.min(40, currentWeek + 4));
    }
  };

  return (
    <section className="max-w-[1140px] mx-auto px-6 sm:px-10 py-16 mb-12 text-left" id="tracker">
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mb-2 tracking-tight">
          Interactive Cycle & Pregnancy Tracker
        </h2>
        <p className="text-sm sm:text-base text-[#4B5563]">
          Explore how Zahera calculates your cycle and pregnancy milestones using culturally contextual African foods.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 1. Period Tracker Card */}
        <div className="bg-white border border-gray-100 shadow-md rounded-[2.5rem] p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-[#FF4288] font-bold text-lg mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>Period Tracker</span>
            </h3>

            <div className="mb-6">
              <label className="block text-xs font-semibold text-gray-600 mb-2">
                Enter your last period date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={lastPeriodDate}
                  onChange={(e) => setLastPeriodDate(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-900 font-semibold text-xs sm:text-sm focus:ring-[#FF4288] focus:border-[#FF4288]"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-center justify-between">
              {/* Stats Summary */}
              <div className="w-full sm:w-1/3 space-y-4">
                <div className="bg-[#FF4288]/5 p-3 rounded-xl border border-[#FF4288]/10">
                  <div className="text-[#FF4288] text-[11px] font-bold mb-0.5">Next Period</div>
                  <p className="font-extrabold text-xs text-gray-900">June 15, 2024</p>
                </div>

                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <div className="text-gray-600 text-[11px] font-bold mb-0.5">Fertile Window</div>
                  <p className="font-extrabold text-xs text-gray-900">May 28 - June 3</p>
                </div>
              </div>

              {/* Month Calendar Simulator */}
              <div className="w-full sm:w-2/3 bg-gray-50/50 p-4 rounded-2xl border border-gray-100">
                <div className="flex justify-between items-center mb-3 text-xs font-bold">
                  <span className="text-gray-400">May</span>
                  <span className="text-gray-900">June 2024</span>
                </div>

                <div className="grid grid-cols-7 gap-1.5 text-center text-[10px] mb-2 text-gray-400 font-bold">
                  <div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div><div>S</div>
                </div>

                <div className="grid grid-cols-7 gap-1.5 text-center text-xs font-semibold">
                  <div className="py-1 text-gray-400">27</div>
                  <div className="py-1 text-gray-400">28</div>
                  <div className="py-1 bg-[#FF4288]/20 text-[#FF4288] rounded-full font-bold">29</div>
                  <div className="py-1 bg-[#FF4288]/20 text-[#FF4288] rounded-full font-bold">30</div>
                  <div className="py-1 bg-[#FF4288]/20 text-[#FF4288] rounded-full font-bold">31</div>
                  <div className="py-1 text-[#FF4288] font-bold">1</div>
                  <div className="py-1 text-[#FF4288] font-bold">2</div>
                  <div className="col-start-7 py-1 bg-[#FF4288] text-white rounded-full font-bold shadow-sm">15</div>
                </div>

                <div className="flex gap-4 mt-4 text-[10px] text-gray-500 font-medium">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#FF4288]/30"></span> Fertile Window
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#FF4288]"></span> Next Period
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Pregnancy Tracker (African Fruits) */}
        <div className="bg-white border border-gray-100 shadow-md rounded-[2.5rem] p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-900 font-bold text-lg">
                <span className="text-[#FF4288]">Pregnancy Tracker</span> (African Fruits)
              </h3>
              <span className="bg-[#FF4288]/10 text-[#FF4288] text-xs font-extrabold px-3 py-1 rounded-full">
                Week {currentWeek} of 40
              </span>
            </div>

            {/* Interactive Progress Slider */}
            <div className="mb-8">
              <div className="relative w-full h-2 bg-gray-100 rounded-full mb-3">
                <div
                  className="absolute top-0 left-0 h-full bg-[#FF4288] rounded-full transition-all duration-300"
                  style={{ width: `${(currentWeek / 40) * 100}%` }}
                />
              </div>
              <input
                type="range"
                min="4"
                max="40"
                step="4"
                value={currentWeek}
                onChange={(e) => setCurrentWeek(Number(e.target.value))}
                className="w-full accent-[#FF4288] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-bold mt-1">
                <span>Week 4</span>
                <span>Week 20</span>
                <span>Week 40</span>
              </div>
            </div>

            {/* Stepper Card */}
            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <button
                onClick={handlePrev}
                disabled={currentWeek <= 4}
                className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#FF4288] hover:bg-gray-100 disabled:opacity-30 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-4 text-left">
                <div className="text-4xl p-2 bg-white rounded-2xl shadow-xs shrink-0">
                  {milestone.icon}
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">
                    Your baby is as big as a
                  </p>
                  <h4 className="text-lg sm:text-xl font-extrabold text-gray-900">
                    {milestone.fruit}
                  </h4>
                  <div className="flex gap-3 text-xs font-semibold text-gray-700 my-1">
                    <span>Weight: {milestone.weight}</span>
                    <span className="text-gray-300">•</span>
                    <span>Length: {milestone.length}</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-snug">
                    {milestone.desc}
                  </p>
                </div>
              </div>

              <button
                onClick={handleNext}
                disabled={currentWeek >= 40}
                className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#FF4288] hover:bg-gray-100 disabled:opacity-30 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
