import React from 'react';
import MobileAppMockup from '../components/MobileAppMockup';

export default function FeaturesPage({ setCurrentView }) {
  const features = [
    { icon: '💬', title: '1. Multilingual AI Assistant', desc: 'Conversational guidance for sensitive reproductive questions in English, Pidgin, Hausa, Yorùbá, and Igbo.' },
    { icon: '📊', title: '2. Health Tracking Dashboard', desc: 'Log cycles, symptoms, medications, mood swings, and antenatal doctor visits in one private encrypted record.' },
    { icon: '🌐', title: '3. 5 Local Languages', desc: 'English, Nigerian Pidgin, Hausa, Yorùbá, and Igbo — natively authored to capture respectful medical and cultural expressions.' },
    { icon: '⚡', title: '4. 100% Offline Architecture', desc: 'Symptom logging, period predictions, and reminders run on-device with zero cellular data consumption.' },
    { icon: '🎙️', title: '5. Voice Input & Speech Demo', desc: 'Speak questions aloud and hear answers read back in native speech — built for low-literacy women across Nigeria.' },
    { icon: '🛡️', title: '6. Privacy & NDPA Compliance', desc: 'On-device AES-256 encryption. We never sell your personal health data to ad brokers or third parties.' },
    { icon: '🤰', title: '7. Pregnancy Milestones', desc: "Weekly updates on your baby's growth compared to African fruits (Agbalumo, Gauta, Mango) and red-flag risk alerts." },
    { icon: '🌸', title: '8. Menopause Support', desc: 'Targeted symptom logging for hot flushes, mood changes, insomnia, and hormonal shifts, bringing dignity to midlife health.' },
    { icon: '🔮', title: '9. Cycle Forecasting', desc: 'Personalized predictive models that forecast fertile windows, ovulation days, and PMS symptoms with high precision.' }
  ];

  return (
    <div className="text-left">
      <section className="pt-12 pb-8 px-6 text-center bg-[radial-gradient(circle_at_50%_15%,rgba(254,235,241,0.95)_0%,#FFFFFF_70%)]">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDE8F1] text-[#C41C65] text-[11px] font-bold uppercase tracking-wider mb-3">
          Comprehensive Platform
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#241629] mb-3">
          Built for Every Life Stage | <span className="text-[#F04C8A]">9 Core Features</span>
        </h1>
        <p className="text-sm sm:text-base text-[#66536C] max-w-[580px] mx-auto">
          Engineered around the real infrastructural, linguistic, and cultural conditions Nigerian women live in.
        </p>
      </section>

      <MobileAppMockup />

      <section className="py-12 px-6 bg-white">
        <div className="max-w-[1040px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white border border-[#F5D6E3] rounded-[24px] p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#FEEBF1] flex items-center justify-center text-xl mb-4 text-[#F04C8A]">
                  {f.icon}
                </div>
                <h3 className="text-base font-extrabold text-[#241629] mb-2">{f.title}</h3>
                <p className="text-xs text-[#66536C] leading-relaxed">{f.desc}</p>
              </div>
              <span className="mt-4 px-3 py-1 rounded-full bg-[#FDE8F1] text-[#C41C65] text-[10px] font-bold uppercase self-start">
                Feature {i + 1}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-6 bg-[#FDF1F5] border-t border-[#F5D6E3]">
        <div className="max-w-[1040px] mx-auto bg-white border border-[#F5D6E3] rounded-[28px] p-8 sm:p-10 shadow-md">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDE8F1] text-[#C41C65] text-[11px] font-bold uppercase mb-3">
            Infrastructure Innovation
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#241629] mb-3">
            Designed for the Real Nigeria
          </h2>
          <p className="text-xs sm:text-sm text-[#66536C] leading-relaxed mb-6 max-w-[750px]">
            Most global FemTech apps fail in Nigeria because they require continuous 4G/5G mobile data and expensive cloud connections. Zahera is built with an offline-first decentralized SQLite database engine that runs locally on your Android or iOS device. When you regain connection, encrypted hashes sync silently in the background.
          </p>
          <button
            onClick={() => {
              setCurrentView('waitlist');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-7 py-3 rounded-full bg-[#F04C8A] hover:bg-[#C71F68] text-white text-xs font-bold shadow-md transition cursor-pointer"
          >
            Join the Pilot to Experience It →
          </button>
        </div>
      </section>
    </div>
  );
}
