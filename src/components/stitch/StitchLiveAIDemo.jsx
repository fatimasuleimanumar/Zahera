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
      iconHoverBg: 'group-hover:bg-[#FF4288]',
      iconHoverText: 'group-hover:text-white',
      iconHoverShadow: 'group-hover:shadow-pink-500/25',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-100',
      cardHoverBg: 'hover:bg-gradient-to-br hover:from-pink-500/[0.08] hover:via-white hover:to-pink-500/[0.03]',
      hoverBorder: 'hover:border-[#FF4288]/50',
      hoverShadow: 'hover:shadow-pink-500/10',
      titleHoverColor: 'group-hover:text-[#FF4288]'
    },
    {
      title: 'Health tracking dashboard',
      desc: 'Log cycles, pregnancies, symptoms, medications, and appointments in one private, personal record.',
      icon: LayoutDashboard,
      iconColor: 'text-purple-600',
      iconHoverBg: 'group-hover:bg-purple-600',
      iconHoverText: 'group-hover:text-white',
      iconHoverShadow: 'group-hover:shadow-purple-500/25',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-100',
      cardHoverBg: 'hover:bg-gradient-to-br hover:from-purple-500/[0.08] hover:via-white hover:to-purple-500/[0.03]',
      hoverBorder: 'hover:border-purple-400/60',
      hoverShadow: 'hover:shadow-purple-500/10',
      titleHoverColor: 'group-hover:text-purple-600'
    },
    {
      title: 'Offline-first',
      desc: 'Engineered for unreliable connectivity, with minimal data use — no signal, no problem.',
      icon: WifiOff,
      iconColor: 'text-emerald-600',
      iconHoverBg: 'group-hover:bg-emerald-600',
      iconHoverText: 'group-hover:text-white',
      iconHoverShadow: 'group-hover:shadow-emerald-500/25',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-100',
      cardHoverBg: 'hover:bg-gradient-to-br hover:from-emerald-500/[0.08] hover:via-white hover:to-emerald-500/[0.03]',
      hoverBorder: 'hover:border-emerald-400/60',
      hoverShadow: 'hover:shadow-emerald-500/10',
      titleHoverColor: 'group-hover:text-emerald-600'
    },
    {
      title: 'Voice input',
      desc: 'Speak your question, hear the answer — built for users with limited literacy.',
      icon: Mic,
      iconColor: 'text-indigo-600',
      iconHoverBg: 'group-hover:bg-indigo-600',
      iconHoverText: 'group-hover:text-white',
      iconHoverShadow: 'group-hover:shadow-indigo-500/25',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-100',
      cardHoverBg: 'hover:bg-gradient-to-br hover:from-indigo-500/[0.08] hover:via-white hover:to-indigo-500/[0.03]',
      hoverBorder: 'hover:border-indigo-400/60',
      hoverShadow: 'hover:shadow-indigo-500/10',
      titleHoverColor: 'group-hover:text-indigo-600'
    },
    {
      title: 'Pregnancy & menopause modules',
      desc: 'Weekly development updates during pregnancy; symptom management guidance through menopause.',
      icon: Baby,
      iconColor: 'text-rose-600',
      iconHoverBg: 'group-hover:bg-rose-600',
      iconHoverText: 'group-hover:text-white',
      iconHoverShadow: 'group-hover:shadow-rose-500/25',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-100',
      cardHoverBg: 'hover:bg-gradient-to-br hover:from-rose-500/[0.08] hover:via-white hover:to-rose-500/[0.03]',
      hoverBorder: 'hover:border-rose-400/60',
      hoverShadow: 'hover:shadow-rose-500/10',
      titleHoverColor: 'group-hover:text-rose-600'
    },
    {
      title: 'Privacy-first',
      desc: 'End-to-end encryption and strict data protection. Your data is never sold.',
      icon: ShieldCheck,
      iconColor: 'text-blue-600',
      iconHoverBg: 'group-hover:bg-blue-600',
      iconHoverText: 'group-hover:text-white',
      iconHoverShadow: 'group-hover:shadow-blue-500/25',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-100',
      cardHoverBg: 'hover:bg-gradient-to-br hover:from-blue-500/[0.08] hover:via-white hover:to-blue-500/[0.03]',
      hoverBorder: 'hover:border-blue-400/60',
      hoverShadow: 'hover:shadow-blue-500/10',
      titleHoverColor: 'group-hover:text-blue-600'
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

      {/* 6 Feature Cards Grid with Custom Color Hover Gradients */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <div
              key={i}
              className={`group bg-white ${f.cardHoverBg} border border-gray-100 ${f.hoverBorder} rounded-[2rem] p-7 sm:p-8 shadow-sm hover:shadow-xl ${f.hoverShadow} transition-all duration-300 card-hover flex flex-col justify-between cursor-pointer`}
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl ${f.bgColor} ${f.iconColor} border ${f.borderColor} ${f.iconHoverBg} ${f.iconHoverText} group-hover:scale-110 group-hover:shadow-md ${f.iconHoverShadow} flex items-center justify-center mb-6 shadow-xs transition-all duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className={`text-xl font-bold text-gray-900 ${f.titleHoverColor} transition-colors mb-2.5`}>
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
