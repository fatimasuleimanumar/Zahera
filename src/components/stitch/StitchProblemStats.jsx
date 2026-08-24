import React from 'react';
import { Stethoscope, WifiOff, ShieldCheck } from 'lucide-react';

export default function StitchProblemStats() {
  return (
    <section className="max-w-[1140px] mx-auto px-6 sm:px-10 py-16 mb-12 text-left" id="problem">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side: Asymmetric Photo & Metric Mosaic (Matching User Reference) */}
        <div className="grid grid-cols-2 gap-4 items-stretch">
          {/* Left Sub-Column */}
          <div className="flex flex-col gap-4">
            {/* Top-Left Metric Card */}
            <div className="bg-[#FF4288] text-white p-6 sm:p-7 rounded-[2rem] shadow-lg shadow-pink-500/20 flex flex-col justify-center">
              <div className="text-3xl sm:text-4xl font-extrabold leading-none mb-1.5">
                36M+
              </div>
              <p className="text-xs sm:text-sm font-semibold text-white/90 leading-tight">
                Women of reproductive age lacking private health guidance
              </p>
            </div>

            {/* Bottom-Left Photo: Smiling Mothers and Baby */}
            <div className="h-[260px] sm:h-[300px] rounded-[2rem] overflow-hidden shadow-md border border-gray-100">
              <img
                src="/assets/problem-mothers-group.jpg"
                alt="Nigerian mothers smiling with baby"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Sub-Column: Tall Vertical Photo of Woman in Blue Hijab */}
          <div className="h-[380px] sm:h-[430px] rounded-[2rem] overflow-hidden shadow-md border border-gray-100 self-center w-full">
            <img
              src="/assets/problem-woman-hijab.jpg"
              alt="Young Nigerian woman with phone"
              className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Right Side: Narrative & Key Problem Points */}
        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF4288]/10 text-[#FF4288] text-xs font-bold uppercase tracking-wider mb-4 w-fit">
            <span>The Reality in Nigeria</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
            Closing the Healthcare Gap in <span className="text-[#FF4288]">Women's Health</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
            36 million Nigerian women of reproductive age lack trusted, private health information. The result? Unplanned pregnancies, undiagnosed complications, and late care-seeking. Global apps don't speak Hausa, Yorùbá, or Igbo, ignore cultural taboos, and fail without internet.
          </p>

          {/* Feature Problem List with Circular Pink Badges */}
          <div className="space-y-6">
            {/* Point 1 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FF4288] text-white flex items-center justify-center shrink-0 shadow-md shadow-pink-500/25">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900 mb-1">
                  Late Care-Seeking & Complications
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Without timely, private clinical advice, complications during pregnancy and cycle abnormalities go unnoticed until emergencies occur.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FF4288] text-white flex items-center justify-center shrink-0 shadow-md shadow-pink-500/25">
                <WifiOff className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900 mb-1">
                  Language & Offline Barriers
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Global health apps only support English and require constant mobile data, leaving millions of women in grassroots communities excluded.
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FF4288] text-white flex items-center justify-center shrink-0 shadow-md shadow-pink-500/25">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900 mb-1">
                  Stigma-Free Cultural Privacy
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Zahera provides discrete, physician-reviewed answers in native languages directly on-device without fear of judgment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
