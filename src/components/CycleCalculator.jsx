import React, { useState } from 'react';

export default function CycleCalculator() {
  const [activeTab, setActiveTab] = useState('cycle');
  const [lastPeriodDate, setLastPeriodDate] = useState('2026-08-05');
  const [cycleLength, setCycleLength] = useState(28);
  const [pregWeek, setPregWeek] = useState(12);

  const startDate = new Date(lastPeriodDate || '2026-08-05');
  const nextPeriod = new Date(startDate);
  nextPeriod.setDate(startDate.getDate() + Number(cycleLength));

  const ovulationDate = new Date(startDate);
  ovulationDate.setDate(startDate.getDate() + (Number(cycleLength) - 14));

  const fertileStart = new Date(ovulationDate);
  fertileStart.setDate(ovulationDate.getDate() - 4);
  const fertileEnd = new Date(ovulationDate);
  fertileEnd.setDate(ovulationDate.getDate() + 1);

  const options = { month: 'short', day: 'numeric', year: 'numeric' };

  const weekFruits = [
    { week: 4, fruit: 'Poppy seed (Taba)', size: '1 mm', desc: 'The blastocyst is officially implanting into the uterine wall.' },
    { week: 8, fruit: 'Garden egg (Gauta / Igba)', size: '1.6 cm', desc: 'Tiny fingers, toes, and facial features are rapidly forming.' },
    { week: 12, fruit: 'Agbalumo / Udara (African star apple)', size: '5.4 cm · 14 g', desc: 'Baby reflexes develop — fingers will soon begin to open and close, toes curl, and vocal cords are beginning to form.' },
    { week: 20, fruit: 'Sweet Potato (Dankali / Cuku)', size: '25 cm · 300 g', desc: 'Halfway mark! You can now feel kicks and gentle movements.' },
    { week: 28, fruit: 'Ripe Mango (Mangwaro)', size: '37 cm · 1 kg', desc: 'Eyes can open and close, and brain waves show sleep cycles.' },
    { week: 36, fruit: 'Papaya / Pawpaw (Gwanda)', size: '47 cm · 2.6 kg', desc: 'Lungs are nearly mature and baby is practicing breathing.' },
    { week: 40, fruit: 'Watermelon (Kankana)', size: '51 cm · 3.4 kg', desc: 'Full term and ready to meet the world!' }
  ];

  let currentFruit = weekFruits[0];
  for (let i = 0; i < weekFruits.length; i++) {
    if (pregWeek >= weekFruits[i].week) currentFruit = weekFruits[i];
  }

  return (
    <section className="py-16 px-6 bg-white text-left" id="calculator">
      <div className="max-w-[1140px] mx-auto">
        <div className="text-center mb-9">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDE8F1] text-[#C41C65] text-[11px] font-bold uppercase tracking-wider mb-2">
            Health Intelligence
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#241629]">
            Interactive Cycle & Phase Tracker
          </h2>
          <p className="text-xs sm:text-sm text-[#66536C] mt-2">
            Explore how Zahera calculates your cycle phases, ovulation window, and next period offline.
          </p>
        </div>

        <div className="bg-white border border-[#F5D6E3] rounded-[30px] p-6 sm:p-9 shadow-lg">
          {/* Tab Navigation */}
          <div className="flex gap-3 mb-7 border-b border-[#F5D6E3] pb-3.5 overflow-x-auto">
            <button
              onClick={() => setActiveTab('cycle')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition cursor-pointer whitespace-nowrap ${
                activeTab === 'cycle'
                  ? 'bg-[#F04C8A] text-white shadow-md shadow-pink-500/25'
                  : 'bg-white text-[#66536C] border border-[#F5D6E3] hover:border-[#F04C8A]'
              }`}
            >
              Cycle & Period Predictor
            </button>
            <button
              onClick={() => setActiveTab('pregnancy')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition cursor-pointer whitespace-nowrap ${
                activeTab === 'pregnancy'
                  ? 'bg-[#F04C8A] text-white shadow-md shadow-pink-500/25'
                  : 'bg-white text-[#66536C] border border-[#F5D6E3] hover:border-[#F04C8A]'
              }`}
            >
              Pregnancy Week-by-Week (Local Fruits)
            </button>
          </div>

          {/* Panel 1: Cycle */}
          {activeTab === 'cycle' && (
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-8 items-center">
              <div>
                <div className="flex flex-col gap-1.5 mb-4">
                  <label className="text-xs font-bold text-[#241629]">First day of last period:</label>
                  <input
                    type="date"
                    value={lastPeriodDate}
                    onChange={(e) => setLastPeriodDate(e.target.value)}
                    className="px-4 py-3 rounded-full border border-[#F5D6E3] bg-[#FDF1F5] text-xs sm:text-sm outline-none focus:border-[#F04C8A] focus:bg-white"
                  />
                </div>

                <div className="flex flex-col gap-1.5 mb-5">
                  <label className="text-xs font-bold text-[#241629]">Average cycle length (days):</label>
                  <select
                    value={cycleLength}
                    onChange={(e) => setCycleLength(e.target.value)}
                    className="px-4 py-3 rounded-full border border-[#F5D6E3] bg-[#FDF1F5] text-xs sm:text-sm outline-none focus:border-[#F04C8A] focus:bg-white"
                  >
                    <option value="26">26 Days</option>
                    <option value="28">28 Days (Standard)</option>
                    <option value="30">30 Days</option>
                    <option value="32">32 Days</option>
                    <option value="35">35 Days</option>
                  </select>
                </div>

                <button
                  type="button"
                  className="w-full py-3 rounded-full bg-[#F04C8A] text-white text-xs font-bold shadow-md hover:bg-[#C71F68] transition"
                >
                  Calculate my cycle
                </button>
              </div>

              <div className="bg-[#FEEBF1] rounded-2xl border border-[#F5D6E3] p-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#F04C8A] text-[11px] font-bold uppercase">
                  Current Phase Status
                </span>
                <div className="text-xl sm:text-2xl font-extrabold text-[#C41C65] mt-2 mb-1">
                  Follicular & Fertile Phase
                </div>
                <p className="text-xs text-[#66536C] leading-relaxed">
                  Estrogen is rising as the body prepares for ovulation. Energy levels and focus are typically peak during this window.
                </p>

                {/* Timeline Bar */}
                <div className="h-3 rounded-full bg-[#EEDBE3] my-4 overflow-hidden flex">
                  <div className="bg-[#F04C8A] w-[20%]" title="Menstruation" />
                  <div className="bg-[#FF8CB6] w-[25%]" title="Follicular" />
                  <div className="bg-[#8B3DB8] w-[15%]" title="Ovulation Window" />
                  <div className="bg-[#C489E5] w-[40%]" title="Luteal" />
                </div>

                <div className="flex gap-6 flex-wrap pt-3 border-t border-[#F5D6E3]">
                  <div>
                    <div className="text-[10px] font-mono uppercase text-[#9E89A3]">Next Estimated Period</div>
                    <div className="font-extrabold text-sm sm:text-base text-[#C41C65]">
                      {nextPeriod.toLocaleDateString(undefined, options)}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-[#9E89A3]">Fertile Window</div>
                    <div className="font-extrabold text-sm sm:text-base text-[#8B3DB8]">
                      {fertileStart.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })} – {fertileEnd.toLocaleDateString(undefined, options)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Panel 2: Pregnancy */}
          {activeTab === 'pregnancy' && (
            <div className="max-w-[650px] mx-auto text-center">
              <h3 className="text-lg font-extrabold text-[#241629] mb-1">Baby Growth Milestone Tracker</h3>
              <p className="text-xs text-[#66536C] mb-6">Slide through weeks to compare your baby's size to African fruits!</p>

              <div className="mb-6">
                <input
                  type="range"
                  min="4"
                  max="40"
                  step="4"
                  value={pregWeek}
                  onChange={(e) => setPregWeek(Number(e.target.value))}
                  className="w-full accent-[#F04C8A] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-[#9E89A3] mt-1.5">
                  <span>W4</span>
                  <span>W12</span>
                  <span>W20</span>
                  <span>W28</span>
                  <span>W36</span>
                  <span>W40</span>
                </div>
              </div>

              <div className="bg-[#FDF1F5] border border-[#F5D6E3] rounded-2xl p-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#F04C8A] text-xs font-bold mb-2">
                  Week {pregWeek}
                </span>
                <h4 className="text-xl font-extrabold text-[#C41C65] mb-1">{currentFruit.fruit}</h4>
                <div className="text-xs font-mono font-bold text-[#8B3DB8] mb-2">Size approx: {currentFruit.size}</div>
                <p className="text-xs sm:text-sm text-[#66536C] leading-relaxed">{currentFruit.desc}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
