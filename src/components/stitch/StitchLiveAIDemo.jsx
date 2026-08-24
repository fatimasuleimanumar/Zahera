import React from 'react';
import { 
  Sparkles, 
  MessageSquare, 
  LayoutDashboard, 
  WifiOff, 
  Mic, 
  Baby, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';

export default function StitchLiveAIDemo() {
  const features = [
    {
      title: 'AI health assistant',
      desc: "Conversational, real-time answers to reproductive health questions — in the language you're most comfortable in.",
      icon: MessageSquare,
      iconColor: 'text-[#FF4288]',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-100',
      hoverBorder: 'hover:border-pink-200'
    },
    {
      title: 'Health tracking dashboard',
      desc: 'Log cycles, pregnancies, symptoms, medications, and appointments in one private, personal record.',
      icon: LayoutDashboard,
      iconColor: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-100',
      hoverBorder: 'hover:border-purple-200'
    },
    {
      title: 'Offline-first',
      desc: 'Engineered for unreliable connectivity, with minimal data use — no signal, no problem.',
      icon: WifiOff,
      iconColor: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-100',
      hoverBorder: 'hover:border-emerald-200'
    },
    {
      title: 'Voice input',
      desc: 'Speak your question, hear the answer — built for users with limited literacy.',
      icon: Mic,
      iconColor: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-100',
      hoverBorder: 'hover:border-indigo-200'
    },
    {
      title: 'Pregnancy & menopause modules',
      desc: 'Weekly development updates during pregnancy; symptom management guidance through menopause.',
      icon: Baby,
      iconColor: 'text-rose-600',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-100',
      hoverBorder: 'hover:border-rose-200'
    },
    {
      title: 'Privacy-first',
      desc: 'End-to-end encryption and strict data protection. Your data is never sold.',
      icon: ShieldCheck,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-100',
      hoverBorder: 'hover:border-blue-200'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 mb-20 text-center" id="whats-inside">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF4288]/10 text-[#FF4288] text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>What's inside</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          One companion, <span className="text-[#FF4288]">every life stage.</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
          From first period to menopause, Zahera adapts its tracking, its questions, and its voice to where you are.
        </p>

        {/* Clinical Endorsement Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/70 text-xs sm:text-sm font-semibold shadow-xs">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Content developed with our on-team gynaecologist</span>
        </div>
      </div>

      {/* 6 Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <div
              key={i}
              className={`bg-white border border-gray-100 rounded-[2rem] p-7 sm:p-8 shadow-sm hover:shadow-xl ${f.hoverBorder} transition-all duration-300 card-hover flex flex-col justify-between`}
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl ${f.bgColor} ${f.iconColor} border ${f.borderColor} flex items-center justify-center mb-6 shadow-xs`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2.5">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
