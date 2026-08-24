import React from 'react';

export default function CampaignsGrid({ onSelectPilot }) {
  const pilots = [
    {
      img: '/assets/team-aminu.jpg',
      title: 'Kaduna PHC Pilot',
      desc: 'Antenatal & cycle tracking trials'
    },
    {
      img: '/assets/team-fatima.jpg',
      title: "Kano Women's NGO",
      desc: 'Hausa voice AI for low-literacy'
    },
    {
      img: '/assets/team-abubakar.jpg',
      title: 'Lagos & Abuja Next',
      desc: 'Expanding maternal health access'
    }
  ];

  return (
    <section className="py-16 px-6 bg-white text-left">
      <div className="max-w-[1040px] mx-auto">
        <div className="mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDE8F1] text-[#C41C65] text-[11px] font-bold uppercase tracking-wider mb-2">
            Featured Deployments
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#241629]">
            Active Pilot Deployments in Nigeria
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pilots.map((p, idx) => (
            <div
              key={idx}
              className="rounded-[24px] overflow-hidden relative h-[350px] shadow-md hover:-translate-y-1.5 transition duration-300 group"
            >
              <img src={p.img} alt={p.title} className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F04C8A]/90 via-[#F04C8A]/30 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-extrabold text-white mb-0.5">{p.title}</h4>
                    <p className="text-xs text-white/95">{p.desc}</p>
                  </div>
                  <button
                    onClick={onSelectPilot}
                    className="w-8 h-8 rounded-full bg-white text-[#F04C8A] flex items-center justify-center font-bold group-hover:rotate-45 transition duration-200 cursor-pointer shadow-md"
                    aria-label={`Open ${p.title}`}
                  >
                    ↘
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
