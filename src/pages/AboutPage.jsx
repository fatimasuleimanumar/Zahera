import React from 'react';

export default function AboutPage({ setCurrentView }) {
  const team = [
    {
      name: 'Fatima Suleiman Umar',
      role: 'Founder & Technical Director',
      img: 'assets/team-fatima.jpg',
      bio: "10+ years architecting data-intensive field operations for Nigerian utilities managing budgets over ₦120M. Leading Zahera's vision and national rollout."
    },
    {
      name: 'Dr. Surayya Zubair',
      role: 'Obstetrician & Gynaecologist',
      img: 'assets/team-surayya.jpg',
      bio: "10+ years in medical practice and 7+ years dedicated to obstetrics and gynaecology — managing women's health from puberty through antenatal care and menopause."
    },
    {
      name: 'Aminu Goni Bukar',
      role: 'Software & Database Engineer',
      img: 'assets/team-aminu.jpg',
      bio: 'Full-stack backend architect specializing in secure database infrastructure, encrypted data sync protocols, and high-availability offline SQLite engines.'
    },
    {
      name: 'Abubakar Hamza Yahya',
      role: 'Senior Developer & Data Scientist',
      img: 'assets/team-abubakar.jpg',
      bio: 'Leads AI/ML system architecture and natural language models. Specializes in multilingual fine-tuning for low-resource Nigerian languages.'
    },
    {
      name: 'Abdussalam AbdulRahman',
      role: 'Software Developer',
      img: 'assets/team-abdussalam.jpg',
      bio: 'B.Tech in Information Technology with deep experience in mobile user interfaces, Flutter architecture, and localized voice synthesis engines.'
    }
  ];

  return (
    <div className="text-left bg-white text-gray-900 overflow-hidden">
      {/* 1. Hero / Header Section */}
      <section className="max-w-4xl mx-auto px-6 text-center pt-16 pb-16">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FCE8F0] text-[#D81B60] text-xs font-bold uppercase tracking-wider mb-5">
          <span>About Us</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
          About Zahera
        </h1>

        <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Zahera is built by Teem Tech Solutions Ltd. — a 100% Nigerian-founded, multidisciplinary team bridging medical obstetrics, database engineering, and artificial intelligence to deliver healthcare answers that speak your language.
        </p>
      </section>

      {/* 2. Curved Soft-Tinted Section ("Why Choose Us" / 3 Pillar Cards) */}
      <section className="max-w-[1380px] mx-auto px-3 sm:px-6 mb-24">
        <div className="bg-[#FDF2F7] rounded-[3rem] sm:rounded-[4rem] py-16 sm:py-20 px-6 sm:px-10 lg:px-16 border border-pink-100/70 shadow-xs">
          {/* Section Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
            <div className="lg:col-span-6 space-y-3">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#FCE8F0] text-[#D81B60] text-xs font-bold uppercase tracking-wider shadow-xs">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                Your Goals, Our<br />Commitment
              </h2>
            </div>
            <div className="lg:col-span-6 flex items-center h-full">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
                Over 36 million Nigerian women lack access to private, culturally respectful reproductive health guidance. We engineered Zahera to eradicate shame, respect native dialects, and function completely offline without cellular data costs.
              </p>
            </div>
          </div>

          {/* 3 Feature / Pillar Cards in a Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Clinical Grounding */}
            <div className="bg-[#FCE8F0] rounded-3xl p-6 sm:p-7 border border-pink-200/50 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#FF4288] transition-colors">
                    Clinical Grounding
                  </h3>
                  <span className="w-8 h-8 rounded-full bg-white text-[#FF4288] flex items-center justify-center font-bold text-sm shrink-0 group-hover:bg-[#FF4288] group-hover:text-white transition-colors shadow-xs">
                    ↗
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                  Co-developed with Dr. Surayya Zubair and Nigerian medical protocols to manage health safely from puberty through pregnancy to menopause.
                </p>
              </div>
              <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-white/70 border border-white/60 mt-2">
                <img src="assets/problem-mothers-group.jpg" alt="Nigerian women receiving clinical maternal health guidance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            </div>

            {/* Card 2: Jet Black Contrast Card (100% Offline SQLite) */}
            <div className="bg-[#140C12] text-white rounded-3xl p-6 sm:p-7 border border-purple-950/60 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#FF4288] transition-colors">
                    100% Offline SQLite
                  </h3>
                  <span className="w-8 h-8 rounded-full bg-white/10 text-pink-300 flex items-center justify-center font-bold text-sm shrink-0 group-hover:bg-[#FF4288] group-hover:text-white transition-colors">
                    ↗
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                  Decentralized on-device embedded SQLite database with local AES-256 encryption. Runs with zero cellular data consumption and NDPA compliance.
                </p>
              </div>
              <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gray-900 border border-white/10 mt-2 relative flex items-center justify-center">
                <img src="assets/screen-dashboard.png" alt="Zahera Offline Dashboard Interface" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute bottom-2.5 left-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-bold text-green-400 border border-white/15">
                  ● Zero Data Needed
                </span>
              </div>
            </div>

            {/* Card 3: 5 Native Dialects & Voice AI */}
            <div className="bg-[#FCE8F0] rounded-3xl p-6 sm:p-7 border border-pink-200/50 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#FF4288] transition-colors">
                    5 Languages & Voice AI
                  </h3>
                  <span className="w-8 h-8 rounded-full bg-white text-[#FF4288] flex items-center justify-center font-bold text-sm shrink-0 group-hover:bg-[#FF4288] group-hover:text-white transition-colors shadow-xs">
                    ↗
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                  Natively authored in English, Pidgin, Hausa, Yorùbá, and Igbo with voice audio synthesis for low-literacy women across urban and rural communities.
                </p>
              </div>
              <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-white/70 border border-white/60 mt-2">
                <img src="assets/problem-woman-hijab.jpg" alt="Nigerian woman speaking with Zahera voice companion" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Impact & Bento Metrics Section ("Tax Expertise You Can Count On") */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-7 space-y-3">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#FCE8F0] text-[#D81B60] text-xs font-bold uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Health Expertise You<br />Can Count On
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              From grassroots trials in Kano and Kaduna to global recognition by UNDP and CoElevate, Zahera is pioneering culturally validated digital health.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://forms.gle/QRuTUvbqB3L2rk5e6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black hover:bg-gray-800 text-white text-xs sm:text-sm font-bold shadow-md transition-all">
                <span>Learn More</span>
                <span>↗</span>
              </a>
              <a href="https://forms.gle/QRuTUvbqB3L2rk5e6" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-pink-300 flex items-center justify-center text-xs shadow-xs text-gray-800 transition-all">
                ▶
              </a>
            </div>
          </div>
        </div>

        {/* Bento Metric Stat Row (5 Cards) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
          <div className="col-span-2 md:col-span-1 rounded-3xl overflow-hidden shadow-xs border border-pink-100 bg-pink-100 min-h-[160px]">
            <img src="assets/privacy-women-group.jpg" alt="Nigerian women in health workshop" className="w-full h-full object-cover object-center" loading="lazy" />
          </div>

          <div className="bg-[#FCE8F0] rounded-3xl p-6 border border-pink-200/50 flex flex-col justify-between hover:border-pink-300 transition-colors">
            <div className="text-3xl sm:text-4xl font-bold font-mono text-gray-900 mb-2">
              14+
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">Years Experience</h4>
              <p className="text-[11px] text-gray-600 leading-relaxed">Field execution, medical practice, and data systems.</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-xs flex flex-col justify-between hover:border-pink-300 transition-colors">
            <div className="flex items-center justify-between">
              <span className="w-7 h-7 rounded-full bg-pink-100 text-[#FF4288] flex items-center justify-center text-xs font-bold">🌸</span>
              <span className="text-xs font-bold text-gray-400">↗</span>
            </div>
            <div className="my-2">
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-500 uppercase">
                <span>Waitlist</span>
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-gray-900">
                3,345+
              </div>
            </div>
            <p className="text-[10px] text-gray-500">Kaduna, Kano & Lagos.</p>
          </div>

          <div className="bg-[#FCE8F0] rounded-3xl p-6 border border-pink-200/50 flex flex-col justify-between hover:border-pink-300 transition-colors">
            <div className="text-3xl sm:text-4xl font-bold font-mono text-gray-900 mb-2">
              25+
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">Clinical Guidelines</h4>
              <p className="text-[11px] text-gray-600 leading-relaxed">SOGON & ABU Teaching Hospital aligned protocols.</p>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 bg-gradient-to-br from-[#A044E2] via-[#E02672] to-[#FF4288] text-white rounded-3xl p-6 flex flex-col justify-between shadow-lg shadow-pink-500/25">
            <div className="flex items-center -space-x-2">
              <img src="assets/team-fatima.jpg" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="Fatima" />
              <img src="assets/team-surayya.jpg" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="Dr. Surayya" />
              <img src="assets/team-aminu.jpg" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="Aminu" />
            </div>
            <div className="pt-4">
              <h4 className="text-sm font-bold text-white mb-1">Get Start With Us</h4>
              <p className="text-[11px] text-pink-100 leading-relaxed mb-3">Join the priority onboarding queue for pilot releases.</p>
              <a href="https://forms.gle/QRuTUvbqB3L2rk5e6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-bold bg-white text-[#D81B60] px-3.5 py-1.5 rounded-full hover:bg-pink-50 transition-colors">
                <span>Register</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Dedicated Leadership Team */}
      <section className="max-w-7xl mx-auto px-6 mb-24" id="team">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#FCE8F0] text-[#D81B60] text-xs font-bold uppercase tracking-wider mb-4">
            Our Team
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Dedicated Team
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-2xl mx-auto">
            Multidisciplinary Nigerian leaders spanning medical obstetrics, database architecture, machine learning, and public health execution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {team.map((m, i) => (
            <div key={i} className="bg-[#FDF2F7] rounded-3xl p-4 sm:p-5 border border-pink-100 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-full aspect-[4/4.5] rounded-2xl overflow-hidden bg-[#FCE8F0] mb-4">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-[#FF4288] transition-colors leading-snug">
                  {m.name}
                </h3>
                <span className="block text-[11px] font-bold font-mono text-[#FF4288] uppercase tracking-wider mt-1 mb-2.5">
                  {m.role}
                </span>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {m.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Traction & Grants Showcase */}
      <section className="max-w-6xl mx-auto px-6 mb-24" id="traction">
        <div className="bg-white rounded-3xl border border-gray-200/80 p-8 sm:p-12 shadow-lg">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div>
              <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#FCE8F0] text-[#D81B60] text-xs font-bold uppercase tracking-wider mb-2">
                Traction & Grants
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                Early Validation & Global Recognition
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FDF2F7] border border-pink-100">
              <div className="w-10 h-10 rounded-xl bg-[#FF4288] text-white flex items-center justify-center text-lg mb-4 shadow-xs">
                🏆
              </div>
              <h3 className="font-bold text-gray-900 mb-1 text-base">CoElevate Grant</h3>
              <span className="text-xs font-bold text-[#D81B60] block mb-2 font-mono">Selected as Inaugural Beneficiary ($5,000)</span>
              <p className="text-xs text-gray-600 leading-relaxed">Seed funding for Kaduna and Kano clinic pilot rollout and local health trials.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FDF2F7] border border-pink-100">
              <div className="w-10 h-10 rounded-xl bg-[#FF4288] text-white flex items-center justify-center text-lg mb-4 shadow-xs">
                🌍
              </div>
              <h3 className="font-bold text-gray-900 mb-1 text-base">UNDP Lean Innovation</h3>
              <span className="text-xs font-bold text-[#D81B60] block mb-2 font-mono">Nominated Innovation Beneficiary</span>
              <p className="text-xs text-gray-600 leading-relaxed">Recognized for solving high maternal health disparities in Northern Nigeria.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FDF2F7] border border-pink-100">
              <div className="w-10 h-10 rounded-xl bg-[#FF4288] text-white flex items-center justify-center text-lg mb-4 shadow-xs">
                🚀
              </div>
              <h3 className="font-bold text-gray-900 mb-1 text-base">KOICA Youth Leaders</h3>
              <span className="text-xs font-bold text-[#D81B60] block mb-2 font-mono">Private Sector Track Participant</span>
              <p className="text-xs text-gray-600 leading-relaxed">Capacity building and global health tech acceleration support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Bottom Waitlist Callout Banner */}
      <section className="w-full bg-[#FFF5F8]/70 border-t border-pink-100/70 py-20 px-6 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-6 py-2 rounded-full bg-[#FF4288]/10 border border-[#FF4288]/20 text-gray-800 text-sm font-semibold mb-6 shadow-xs">
            <span className="font-extrabold text-[#D81B60]">1,000+</span>
            <span>women already waiting</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
            Join Us on Our Mission.
          </h2>

          <p className="text-sm sm:text-base text-gray-600 max-w-2xl leading-relaxed mb-8">
            Whether you want early pilot access or are interested in clinical partnerships, we'd love to have you with us.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <a href="https://forms.gle/QRuTUvbqB3L2rk5e6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#FF4288] hover:bg-[#E03375] text-white font-bold text-sm sm:text-base shadow-lg shadow-pink-500/25 transition-all transform hover:scale-105">
              Join the Pilot Waitlist
            </a>
            <button onClick={() => setCurrentView && setCurrentView('contact')} className="glass-panel text-gray-900 px-8 py-3.5 rounded-full font-bold text-sm sm:text-base hover:bg-white transition-all shadow-sm cursor-pointer">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
