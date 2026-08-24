import React, { useState } from 'react';
import HeroCluster from '../components/HeroCluster';
import StitchProblemStats from '../components/stitch/StitchProblemStats';
import StitchAppShowcase from '../components/stitch/StitchAppShowcase';
import StitchLiveAIDemo from '../components/stitch/StitchLiveAIDemo';
import StitchPrivacySection from '../components/stitch/StitchPrivacySection';
import StitchWaitlistSection from '../components/stitch/StitchWaitlistSection';

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

  const handleJoinWaitlist = () => {
    window.open('https://forms.gle/QRuTUvbqB3L2rk5e6', '_blank');
  };

  return (
    <div className="w-full bg-white text-[#111827]">
      {/* 1. Hero Section */}
      <HeroCluster
        onJoinWaitlist={handleJoinWaitlist}
        onExploreFeatures={() => {
          setCurrentView('features');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 2. Stitch: Problem Stats Section (36M Gap) */}
      <StitchProblemStats />

      {/* 3. Mobile App Life Stage Mockup Showcase */}
      <StitchAppShowcase
        onJoinWaitlist={handleJoinWaitlist}
      />

      {/* 4. What's Inside Feature Suite (6 Pillars with Bespoke Icons) */}
      <StitchLiveAIDemo />

      {/* 5. Stitch: Full-Width Gradient Privacy Section with Uploaded Photo */}
      <StitchPrivacySection />

      {/* 6. Stitch: Dedicated Waitlist CTA Section Matching User Design */}
      <StitchWaitlistSection
        onJoinWaitlist={handleJoinWaitlist}
      />

      {/* 6. Clinical Partnerships & Pilots */}
      <section className="w-full py-20 px-4 sm:px-6 bg-[#F8F9FB] border-y border-[#E5E7EB]" id="partners">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 items-center">
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

      {/* 7. Trust Banner */}
      <section className="w-full py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto bg-[#F8F9FB] border border-[#E5E7EB] rounded-[40px] p-10 sm:p-16 text-center">
          <div className="inline-flex items-center -space-x-2 mb-4">
            <img src="/assets/team-surayya.jpg" alt="Doctor" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
            <img src="/assets/team-fatima.jpg" alt="Doctor" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
            <img src="/assets/team-aminu.jpg" alt="Doctor" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mb-3 tracking-tight">
            Built for Nigeria's reality. Tested with Nigerian women.
          </h2>

          <p className="text-base text-[#4B5563] max-w-xl mx-auto mb-8 leading-relaxed">
            From rural PHCs in Kaduna to universities in Lagos, Zahera is co-created with grassroots feedback and local clinicians.
          </p>

          <button
            onClick={() => {
              setCurrentView('waitlist');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#111111] text-white font-bold text-sm hover:bg-black transition shadow-lg cursor-pointer"
          >
            Get early access to Zahera →
          </button>
        </div>
      </section>
    </div>
  );
}
