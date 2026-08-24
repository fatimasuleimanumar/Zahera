import React from 'react';

export default function AboutPage() {
  const team = [
    {
      name: 'Fatima Suleiman Umar',
      role: 'Founder & Technical Director',
      img: '/assets/team-fatima.jpg',
      bio: '10+ years architecting and executing large-scale, data-intensive field operations for Nigerian utilities — managing budgets over ₦120M and coordinating complex multi-vendor operations. Leading Zahera’s overall vision and national rollout.'
    },
    {
      name: 'Dr. Surayya Zubair',
      role: 'Obstetrician & Gynaecologist',
      img: '/assets/team-surayya.jpg',
      bio: "Obstetrician and gynaecologist with 10+ years in medical practice and 7+ years dedicated to obstetrics and gynaecology — managing women's health from puberty through antenatal care, delivery, and menopause."
    },
    {
      name: 'Aminu Goni Bukar',
      role: 'Software & Database Engineer',
      img: '/assets/team-aminu.jpg',
      bio: 'Full-stack backend architect specializing in secure database infrastructure, encrypted data sync protocols, and high-availability offline-first storage engines. Guarantees NDPA security compliance.'
    },
    {
      name: 'Abubakar Hamza Yahya',
      role: 'Senior Developer & Data Scientist',
      img: '/assets/team-abubakar.jpg',
      bio: 'Leads AI/ML system architecture and natural language understanding models for Zahera. Specializes in multilingual fine-tuning for low-resource Nigerian languages and offline inference.'
    },
    {
      name: 'Abdussalam AbdulRahman',
      role: 'Software Developer',
      img: '/assets/team-abdussalam.jpg',
      bio: 'B.Tech in Information Technology with deep experience building mobile and web apps across Flutter, Laravel, and MySQL. Specializes in intuitive mobile user interfaces and voice synthesis.'
    }
  ];

  return (
    <div className="text-left">
      <section className="pt-12 pb-8 px-6 text-center bg-[radial-gradient(circle_at_50%_15%,rgba(254,235,241,0.95)_0%,#FFFFFF_70%)]">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDE8F1] text-[#C41C65] text-[11px] font-bold uppercase tracking-wider mb-3">
          Who We Are
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#241629] mb-3">
          A Nigerian Team | <span className="text-[#F04C8A]">Building for Nigerian Women</span>
        </h1>
        <p className="text-sm sm:text-base text-[#66536C] max-w-[580px] mx-auto">
          Zahera is built by Teem Tech Solutions Ltd. — a 100% Nigerian-founded, gender-balanced team bridging technology, obstetrics, and public health.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-[1040px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#FEEBF1] border border-[#F5D6E3] rounded-[26px] p-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#F04C8A] text-[11px] font-bold uppercase mb-3">
              Our Mission
            </span>
            <h3 className="text-xl font-extrabold text-[#241629] mb-2">Empowering Millions with Dignity</h3>
            <p className="text-xs sm:text-sm text-[#66536C] leading-relaxed">
              To empower millions of underserved Nigerian girls and women from puberty through pregnancy to menopause, by providing trusted, private reproductive health guidance while generating locally representative clinical data that strengthens Africa's healthcare innovation ecosystem.
            </p>
          </div>

          <div className="bg-[#FEEBF1] border border-[#F5D6E3] rounded-[26px] p-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#F04C8A] text-[11px] font-bold uppercase mb-3">
              Our Vision 2030
            </span>
            <h3 className="text-xl font-extrabold text-[#241629] mb-2">10 Million African Women by 2030</h3>
            <p className="text-xs sm:text-sm text-[#66536C] leading-relaxed">
              To establish Zahera as Africa's premier, culturally resonant AI-powered women's health platform, reaching over 10 million active users across the continent and dramatically reducing preventable reproductive complications.
            </p>
          </div>
        </div>
      </section>

      {/* Team Portraits Grid */}
      <section className="py-12 px-6 bg-white" id="team">
        <div className="max-w-[1040px] mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDE8F1] text-[#C41C65] text-[11px] font-bold uppercase mb-2">
              Core Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#241629]">
              Tech, Medicine & Data Science
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m, i) => (
              <div key={i} className="bg-white border border-[#F5D6E3] rounded-[24px] overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 flex flex-col">
                <div className="w-full aspect-square overflow-hidden bg-[#FEEBF1]">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover object-top hover:scale-105 transition duration-400" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-extrabold text-[#241629]">{m.name}</h3>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#F04C8A] my-1">
                    {m.role}
                  </span>
                  <p className="text-xs text-[#66536C] leading-relaxed mb-4">{m.bio}</p>
                  <div className="mt-auto pt-2.5 border-t border-[#F5D6E3]">
                    <span className="text-xs font-bold text-[#C71F68] hover:text-[#F04C8A] cursor-pointer">
                      Profile Details →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traction & Grants */}
      <section className="py-12 px-6 bg-[#FDF1F5] border-t border-[#F5D6E3]" id="traction">
        <div className="max-w-[1040px] mx-auto bg-white border border-[#F5D6E3] rounded-[28px] p-8 shadow-md">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDE8F1] text-[#C41C65] text-[11px] font-bold uppercase mb-2">
            Traction & Grants
          </span>
          <h2 className="text-2xl font-extrabold text-[#241629] mb-5">
            Early Validation & Global Recognition
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#FEEBF1] font-mono text-[11px] text-[#C41C65]">
                  <th className="p-3 border-b border-[#F5D6E3]">Organization</th>
                  <th className="p-3 border-b border-[#F5D6E3]">Recognition</th>
                  <th className="p-3 border-b border-[#F5D6E3]">Impact Milestone</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#F5D6E3]">
                  <td className="p-3 font-bold text-[#C71F68]">CoElevate Grant</td>
                  <td className="p-3 font-bold">Selected Beneficiary ($5,000)</td>
                  <td className="p-3 text-[#66536C]">Seed funding for Kaduna and Kano clinic pilot rollout</td>
                </tr>
                <tr className="border-b border-[#F5D6E3]">
                  <td className="p-3 font-bold text-[#C71F68]">UNDP Lean Innovation</td>
                  <td className="p-3">Nominated Beneficiary</td>
                  <td className="p-3 text-[#66536C]">Recognized for addressing high maternal health disparities</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#C71F68]">KOICA Youth Leaders</td>
                  <td className="p-3">Selected Participant</td>
                  <td className="p-3 text-[#66536C]">Capacity building and global health tech acceleration</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
