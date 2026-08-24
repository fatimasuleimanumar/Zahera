import React, { useState } from 'react';
import HeroCluster from '../components/HeroCluster';
import StitchProblemStats from '../components/stitch/StitchProblemStats';
import StitchAppShowcase from '../components/stitch/StitchAppShowcase';
import StitchLiveAIDemo from '../components/stitch/StitchLiveAIDemo';
import StitchCycleTracker from '../components/stitch/StitchCycleTracker';
import { 
  MessageSquare, 
  WifiOff, 
  Mic, 
  Stethoscope, 
  ShieldCheck, 
  Calendar, 
  ArrowUpRight, 
  ArrowRight 
} from 'lucide-react';

export default function HomePage({ setCurrentView }) {
  const [activePartnerIndex, setActivePartnerIndex] = useState(0);

  const partners = [
    {
      title: 'Kaduna State PHC Centre',
      desc: 'Primary Health Care integration for antenatal tracking and offline reproductive health education.',
      active: true
    },
    {
      title: "Kano Women's Empowerment NGO",
      desc: 'Voice AI field testing for Hausa-speaking women with limited formal literacy.',
      active: false
    },
    {
      title: 'Lagos Urban Health Network',
      desc: 'Community clinic consortium testing youth wellness and perimenopause tracking.',
      active: false
    }
  ];

  return (
    <div className="w-full bg-white text-[#111827]">
      {/* 1. Hero Section */}
      <HeroCluster
        onJoinWaitlist={() => {
          setCurrentView('waitlist');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onExploreFeatures={() => {
          setCurrentView('features');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 2. Stitch: Problem Stats Section (36M Gap) */}
      <StitchProblemStats />

      {/* 3. Mobile App Life Stage Mockup Showcase (Matching User Upload) */}
      <StitchAppShowcase
        onJoinWaitlist={() => {
          setCurrentView('waitlist');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 4. Bento Grid: Explore our key modules and capabilities */}
      <section className="w-full py-16 bg-white" id="capabilities">
        <div className="max-w-[1140px] mx-auto px-6 sm:px-10">
          <div className="text-center max-w-[680px] mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mb-3 tracking-tight">
              Explore our key modules and capabilities
            </h2>
            <p className="text-base text-[#4B5563] leading-relaxed">
              Engineered for Nigerian healthcare reality — working without cellular data, with voice playback in five native languages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1 */}
            <div className="bg-[#F8F9FB] border border-[#E5E7EB] rounded-[28px] p-8 flex flex-col justify-between hover:bg-white hover:border-[#111111] hover:shadow-lg transition duration-300">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#E5E7EB] text-[#111111] flex items-center justify-center mb-6">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-[#111827] mb-2">
                  Multilingual AI Assistant
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  Conversational, real-time guidance on menstrual cycles, pregnancy milestones, and menopause in your preferred dialect.
                </p>
              </div>
              <span className="text-xs font-bold text-[#111827] mt-6 inline-block">
                24/7 Physician Reviewed →
              </span>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F8F9FB] border border-[#E5E7EB] rounded-[28px] p-8 flex flex-col justify-between hover:bg-white hover:border-[#111111] hover:shadow-lg transition duration-300">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#E5E7EB] text-[#111111] flex items-center justify-center mb-6">
                  <WifiOff className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-[#111827] mb-2">
                  100% Offline Architecture
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  Zero internet required. Cycle forecasting, symptom logs, and medical guidelines execute locally on the phone.
                </p>
              </div>
              <span className="text-xs font-bold text-[#9CA3AF] mt-6 inline-block">
                On-Device SQLite Engine
              </span>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F8F9FB] border border-[#E5E7EB] rounded-[28px] p-8 flex flex-col justify-between hover:bg-white hover:border-[#111111] hover:shadow-lg transition duration-300">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#E5E7EB] text-[#111111] flex items-center justify-center mb-6">
                  <Mic className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-[#111827] mb-2">
                  Voice Input & Audio Playback
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  Speak your symptoms aloud and listen to the answers read back, designed for non-reading women across Nigeria.
                </p>
              </div>
              <span className="text-xs font-bold text-[#9CA3AF] mt-6 inline-block">
                Speech Synthesis
              </span>
            </div>

            {/* Card 4 */}
            <div className="bg-[#F8F9FB] border border-[#E5E7EB] rounded-[28px] p-8 flex flex-col justify-between hover:bg-white hover:border-[#111111] hover:shadow-lg transition duration-300">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#E5E7EB] text-[#111111] flex items-center justify-center mb-6">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-[#111827] mb-2">
                  Physician Reviewed Protocols
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  Co-developed with SOGON-affiliated obstetricians and gynaecologists following Nigerian clinical care protocols.
                </p>
              </div>
              <span className="text-xs font-bold text-[#9CA3AF] mt-6 inline-block">
                Dr. Surayya Zubair
              </span>
            </div>

            {/* Card 5 */}
            <div className="bg-[#F8F9FB] border border-[#E5E7EB] rounded-[28px] p-8 flex flex-col justify-between hover:bg-white hover:border-[#111111] hover:shadow-lg transition duration-300">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#E5E7EB] text-[#111111] flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-[#111827] mb-2">
                  Bank-Grade Encryption
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  Your intimate health data is locked on your device. We never sell or share records with third-party advertisers.
                </p>
              </div>
              <span className="text-xs font-bold text-[#9CA3AF] mt-6 inline-block">
                Zero Data Brokering
              </span>
            </div>

            {/* Card 6 */}
            <div className="bg-[#F8F9FB] border border-[#E5E7EB] rounded-[28px] p-8 flex flex-col justify-between hover:bg-white hover:border-[#111111] hover:shadow-lg transition duration-300">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#E5E7EB] text-[#111111] flex items-center justify-center mb-6">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-[#111827] mb-2">
                  Cycle & Pregnancy Milestones
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  From puberty and cycle tracking to weekly baby milestones using local African fruit comparisons.
                </p>
              </div>
              <span className="text-xs font-bold text-[#9CA3AF] mt-6 inline-block">
                Weeks 4 to 40
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Stitch: Live Interactive AI Demo with Language Switcher & Phone Simulator */}
      <StitchLiveAIDemo />

      {/* 6. Stitch: Interactive Cycle Tracker & Pregnancy Milestones */}
      <StitchCycleTracker />

      {/* 7. Clinical Partnerships & Pilots */}
      <section className="w-full py-20 px-4 sm:px-6 bg-[#F8F9FB] border-y border-[#E5E7EB]" id="partners">
        <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 items-center">
          {/* Photo Frame */}
          <div className="h-[400px] rounded-[36px] overflow-hidden shadow-lg border border-[#E5E7EB]">
            <img
              src="/assets/landing-hero-woman.jpg"
              alt="Community Clinic Testing"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Accordion Cards */}
          <div>
            <span className="text-xs font-extrabold uppercase text-[#111111] tracking-wider">
              On The Ground
            </span>
            <h2 className="text-3xl font-extrabold text-[#111827] mt-1 mb-6">
              Piloting with real clinics, in real communities
            </h2>

            <div className="flex flex-col gap-3.5">
              {partners.map((p, idx) => (
                <div
                  key={idx}
                  onClick={() => setActivePartnerIndex(idx)}
                  className={`p-5 rounded-2xl cursor-pointer transition flex justify-between items-center ${
                    activePartnerIndex === idx
                      ? 'bg-[#111111] text-white shadow-lg'
                      : 'bg-white border border-[#E5E7EB] text-[#111827] hover:border-[#111111]'
                  }`}
                >
                  <div>
                    <h4 className="text-base font-extrabold mb-1">{p.title}</h4>
                    <p className={`text-xs ${activePartnerIndex === idx ? 'text-white/90' : 'text-[#4B5563]'}`}>
                      {p.desc}
                    </p>
                  </div>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ml-3 ${
                      activePartnerIndex === idx ? 'bg-white text-[#111111]' : 'bg-[#F3F4F6] text-[#111111]'
                    }`}
                  >
                    ↗
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Trust Banner */}
      <section className="w-full py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-[1140px] mx-auto bg-[#F8F9FB] border border-[#E5E7EB] rounded-[40px] p-10 sm:p-16 text-center">
          <div className="inline-flex items-center -space-x-2 mb-4">
            <img src="/assets/team-surayya.jpg" alt="Doctor" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
            <img src="/assets/team-fatima.jpg" alt="Doctor" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
            <img src="/assets/team-aminu.jpg" alt="Engineer" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] max-w-[720px] mx-auto mb-4 tracking-tight">
            The trusted choice for Nigerian women's health
          </h2>

          <p className="text-base text-[#4B5563] max-w-[580px] mx-auto mb-8 leading-relaxed">
            Built with pride by Teem Tech Solutions Ltd., backed by medical doctors, and co-designed with grassroots Nigerian communities.
          </p>

          <div className="flex justify-center gap-3.5 flex-wrap">
            <button
              onClick={() => {
                setCurrentView('waitlist');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 rounded-full bg-[#111111] hover:bg-black text-white text-xs sm:text-sm font-bold shadow-lg shadow-black/30 transition flex items-center gap-2 cursor-pointer"
            >
              <span>Join the VIP Pilot Waitlist</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setCurrentView('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#111827] border border-[#E5E7EB] text-xs sm:text-sm font-bold shadow-sm transition flex items-center gap-2 cursor-pointer"
            >
              <span>Meet our clinical team</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
