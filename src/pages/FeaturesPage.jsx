import React, { useState } from 'react';

export default function FeaturesPage({ setCurrentView }) {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      title: '1. Menstrual Health & Puberty',
      icon: '🌸',
      screen: 'assets/screen-cycle.png',
      desc: 'Track menstrual flow, predict fertile windows, and log PMS symptoms completely offline.'
    },
    {
      title: '2. Pregnancy & Antenatal Milestones',
      icon: '🤰',
      screen: 'assets/screen-pregnancy-tracker.png',
      desc: 'Week-by-week fetal growth compared to African fruits (Agbalumo, Gauta, Mango) with antenatal clinical alerts.'
    },
    {
      title: '3. Menopause & Hormonal Balance',
      icon: '🌺',
      screen: 'assets/screen-menopause.png',
      desc: 'Manage perimenopause hot flushes, mood shifts, and sleep changes with respectful clinical guidance.'
    },
    {
      title: '4. 24/7 Multilingual AI Assistant',
      icon: '💬',
      screen: 'assets/screen-chat.png',
      desc: '24/7 conversational guidance in English, Pidgin, Hausa, Yoruba, and Igbo with voice input and audio readback.'
    }
  ];

  const features = [
    {
      num: '01 / AI ASSISTANT',
      icon: '💬',
      title: '1. Multilingual AI Assistant',
      desc: 'Conversational guidance for sensitive reproductive questions in English, Pidgin, Hausa, Yorùbá, and Igbo — eliminating medical jargon and cultural taboo.',
      tag: '24/7 Available'
    },
    {
      num: '02 / DASHBOARD',
      icon: '📊',
      title: '2. Health Tracking Dashboard',
      desc: 'Log cycles, symptoms, medications, mood swings, and antenatal doctor visits in one private encrypted record that gives you full ownership of your bodily trends.',
      tag: 'Tamper-Proof'
    },
    {
      num: '03 / LANGUAGES',
      icon: '🌐',
      title: '3. 5 Local Languages',
      desc: 'English, Nigerian Pidgin, Hausa, Yorùbá, and Igbo — natively authored from the ground up to respect cultural nuances and avoid clinical alienation.',
      tag: '5 Dialects'
    },
    {
      num: '04 / OFFLINE FIRST',
      icon: '⚡',
      title: '4. 100% Offline Architecture',
      desc: 'Symptom logging, period predictions, and pill reminders run entirely on-device with zero cellular data consumption. Perfect for intermittent connectivity.',
      tag: '0 Data Needed'
    },
    {
      num: '05 / VOICE SPEECH',
      icon: '🎙️',
      title: '5. Voice Input & Audio Readback',
      desc: 'Speak health questions aloud and hear answers read back in clear native speech — built specifically for low-literacy women across urban and rural communities.',
      tag: 'Natural Speech'
    },
    {
      num: '06 / PRIVACY CHARTER',
      icon: '🛡️',
      title: '6. Privacy & NDPA Compliance',
      desc: 'On-device AES-256 encryption. We never sell your personal health records to ad networks, insurance underwriters, or data brokers under any circumstances.',
      tag: '100% Confidential'
    },
    {
      num: '07 / PREGNANCY',
      icon: '🤰',
      title: '7. African Fruit Pregnancy Milestones',
      desc: "Weekly updates on your baby's growth compared to familiar African fruits (Agbalumo, Gauta, Mango, Gwanda, Kankana) and SOGON-aligned danger sign alerts.",
      tag: 'Antenatal Safe'
    },
    {
      num: '08 / MENOPAUSE',
      icon: '🌸',
      title: '8. Menopause & Hormonal Support',
      desc: 'Targeted symptom logging for hot flushes, mood shifts, insomnia, and hormonal changes — providing dignity, understanding, and clinical clarity for midlife health.',
      tag: 'Midlife Dignity'
    },
    {
      num: '09 / FORECASTING',
      icon: '🔮',
      title: '9. Precision Cycle Forecasting',
      desc: 'Personalized predictive models that forecast fertile windows, ovulation days, and PMS symptoms with high precision, tailored to each user\'s biological rhythms.',
      tag: 'Smart Timing'
    }
  ];

  return (
    <div className="text-left bg-[#FAFAFA] text-gray-900 overflow-hidden">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 text-center pt-16 pb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF4288]/10 border border-[#FF4288]/20 text-[#D81B60] text-xs font-bold uppercase tracking-wider mb-5">
          <span>✨</span>
          <span>Comprehensive Women's Health Platform</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
          Built for Every Life Stage | <span className="text-[#FF4288]">9 Core Features</span>
        </h1>

        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
          Engineered specifically around the real infrastructural, linguistic, and cultural conditions Nigerian women live in — working 100% offline, in 5 local languages, with complete NDPA-grade privacy.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-800 shadow-xs">
            🔒 100% Offline SQLite Engine
          </span>
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-800 shadow-xs">
            🎙️ Voice AI in 5 Nigerian Languages
          </span>
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-800 shadow-xs">
            🛡️ On-Device AES-256 Encryption
          </span>
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-800 shadow-xs">
            👩‍⚕️ Doctor-Reviewed Protocols
          </span>
        </div>
      </section>

      {/* Interactive App Showcase */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="relative bg-gradient-to-br from-pink-900 via-[#3B1530] to-gray-900 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl text-white">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Stage Tabs */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/15 border border-white/25 text-pink-200 text-xs font-bold tracking-wide uppercase">
                📱 Native Mobile Experience
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                An intelligent companion that grows with you.
              </h2>

              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                Zahera seamlessly adapts to each stage of your reproductive life — from your first period in secondary school, through pregnancy milestones with Nigerian fruit sizing, to dignified menopause guidance.
              </p>

              <div className="space-y-3 pt-2">
                {stages.map((st, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStage(i)}
                    className={`w-full text-left p-4 rounded-2xl flex items-center justify-between transition-all cursor-pointer ${
                      activeStage === i
                        ? 'bg-white/20 border-2 border-white text-white font-bold'
                        : 'bg-white/10 border border-white/15 text-gray-200 hover:bg-white/15 font-semibold'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{st.icon}</span>
                      <span>{st.title}</span>
                    </div>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${
                      activeStage === i ? 'bg-[#FF4288] text-white' : 'text-gray-300'
                    }`}>
                      {activeStage === i ? 'Active' : 'Tap to view'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Phone Frame */}
            <div className="lg:col-span-6 flex justify-center items-center relative">
              <div className="relative w-[290px] sm:w-[320px] bg-black p-3.5 rounded-[44px] shadow-2xl border-4 border-gray-700/60 ring-1 ring-white/20">
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-800 mr-2" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF4288]" />
                </div>

                <div className="relative bg-white rounded-[36px] overflow-hidden aspect-[9/18.5] shadow-inner flex flex-col justify-between">
                  <img
                    src={stages[activeStage].screen}
                    alt="Zahera App Screen UI"
                    className="w-full h-full object-cover object-top transition-opacity duration-300"
                  />
                </div>

                <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md text-gray-900 border border-white p-3 rounded-2xl shadow-xl hidden sm:flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold">100% Offline SQLite</span>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md text-gray-900 border border-white p-3 rounded-2xl shadow-xl hidden sm:flex items-center gap-2">
                  <span className="text-[#FF4288]">🎙️</span>
                  <span className="text-xs font-bold">5 Nigerian Languages</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9 Core Features Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF4288]/10 text-[#D81B60] text-xs font-bold uppercase tracking-wider mb-4">
            Detailed Feature Breakdown
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Everything packed into <span className="text-[#FF4288]">Zahera</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 border border-gray-200/80 hover:border-pink-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-pink-50 border border-pink-100 flex items-center justify-center text-2xl text-[#FF4288] group-hover:scale-110 transition-transform">
                    {f.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-pink-100/80 text-[#D81B60] text-xs font-bold font-mono">
                    {f.num}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FF4288] transition-colors">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {f.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-medium">
                <span>Core Module</span>
                <span className="text-[#FF4288] font-bold">{f.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Infrastructure Comparison */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="bg-white border border-gray-200/90 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF4288]/10 text-[#D81B60] text-xs font-bold uppercase tracking-wider mb-4">
              Infrastructure Innovation
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Why Global FemTech Apps Fail in Nigeria
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
              Most foreign FemTech applications assume constant high-speed WiFi, expensive mobile data subscriptions, and English-only medical terminology. Zahera was built from the ground up for Nigerian realities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-6 sm:p-8 rounded-3xl bg-red-50/60 border border-red-100">
              <div className="flex items-center gap-3 mb-4 text-red-700 font-bold">
                <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">✕</span>
                <h3 className="text-lg">Foreign & Cloud-Only Apps</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Fails immediately when mobile data runs out or network signal drops.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>English-only interfaces using cold clinical terms that induce shame.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Data stored on US/EU servers often shared with third-party ad brokers.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-pink-50/70 border-2 border-[#FF4288]/30 shadow-md">
              <div className="flex items-center gap-3 mb-4 text-[#D81B60] font-bold">
                <span className="w-8 h-8 rounded-full bg-[#FF4288] text-white flex items-center justify-center font-bold">✓</span>
                <h3 className="text-lg">Zahera Tech Architecture</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-800">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF4288] font-bold">•</span>
                  <span><strong>100% Offline-First:</strong> Runs entirely on-device with zero cellular data burden.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF4288] font-bold">•</span>
                  <span><strong>5 Native Dialects:</strong> Pidgin, Hausa, Yorùbá, Igbo, and English with voice readback.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF4288] font-bold">•</span>
                  <span><strong>Local NDPA AES-256 Encryption:</strong> Your intimate records are never sold.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section className="w-full bg-[#FFF5F8]/70 border-t border-pink-100/70 py-20 px-6 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-6 py-2 rounded-full bg-[#FF4288]/10 border border-[#FF4288]/20 text-gray-800 text-sm font-semibold mb-6 shadow-xs">
            <span className="font-extrabold text-[#D81B60]">1,000+</span>
            <span>women already waiting</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
            Experience the 9 Features in Our Pilot.
          </h2>

          <div className="mb-4">
            <a href="https://forms.gle/QRuTUvbqB3L2rk5e6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-gradient-to-r from-[#FF387D] via-[#FF5E93] to-[#FF4288] hover:opacity-95 text-white font-extrabold text-base sm:text-lg shadow-lg shadow-pink-500/25 transition-all transform hover:scale-105 active:scale-95 cursor-pointer">
              Join the VIP Pilot Waitlist
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
