import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';

export default function FAQPage({ setCurrentView }) {
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('all');
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      cat: 'pricing',
      q: 'Is Zahera free to use for Nigerian women?',
      a: 'Yes! Essential features — including menstrual cycle logging, symptom tracking, pregnancy week-by-week updates, menopause logs, and our conversational AI health assistant — are completely free. We will introduce an optional premium tier (around $2–3 / ₦3,000–₦4,500 per month) for users who want direct 1-on-1 tele-consultations with certified Nigerian gynaecologists.'
    },
    {
      cat: 'privacy',
      q: 'Is my personal health data really private and safe?',
      a: 'Absolutely. Reproductive health is deeply private. Your logs, symptoms, and chat conversations are encrypted locally on your phone using AES-256 encryption. We never sell your data to third-party ad brokers or data aggregators. We strictly comply with the Nigeria Data Protection Act (NDPA 2023).'
    },
    {
      cat: 'offline',
      q: 'How does Zahera work without internet connection?',
      a: "Zahera is engineered with a decentralized, on-device architecture. Cycle prediction algorithms, pregnancy calculators, reminders, and historical logs execute directly on your phone's processor using an embedded SQLite engine."
    },
    {
      cat: 'offline',
      q: 'Which Nigerian languages does Zahera support?',
      a: 'Zahera natively supports five languages: English, Nigerian Pidgin, Hausa, Yorùbá, and Igbo. The entire interface, clinical symptom guides, and conversational AI speak and understand all five languages fluently.'
    },
    {
      cat: 'ai',
      q: 'Can someone who cannot read or write use Zahera?',
      a: 'Yes — voice accessibility was a core requirement. Users can tap the microphone button to ask their health questions by voice in Hausa, Yorùbá, Igbo, Pidgin, or English, and Zahera will read the guidance aloud in natural speech.'
    },
    {
      cat: 'clinical',
      q: 'Is Zahera’s AI guidance medically accurate and reviewed by doctors?',
      a: 'Yes. Our content and AI decision boundaries are co-developed and reviewed by Nigerian medical professionals, including our on-team gynaecologist, Dr. Surayya Zubair, in consultation with protocols from the Society of Gynaecology and Obstetrics of Nigeria (SOGON) and Ahmadu Bello University Teaching Hospital.'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Topics' },
    { id: 'ai', label: 'AI & Tech' },
    { id: 'privacy', label: 'Privacy & Security' },
    { id: 'clinical', label: 'Clinical & Health' },
    { id: 'offline', label: 'Offline & Languages' },
    { id: 'pricing', label: 'Pricing & Pilot' }
  ];

  const filtered = faqs.filter((f) => {
    const matchesQuery = !search || f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCat === 'all' || f.cat === selectedCat;
    return matchesQuery && matchesCat;
  });

  return (
    <div className="text-left">
      <section className="pt-12 pb-8 px-6 text-center bg-[radial-gradient(circle_at_50%_15%,rgba(254,235,241,0.95)_0%,#FFFFFF_70%)]">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDE8F1] text-[#C41C65] text-[11px] font-bold uppercase tracking-wider mb-3">
          Knowledge Base
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#241629] mb-3">
          Frequently Asked | <span className="text-[#F04C8A]">Questions</span>
        </h1>
        <p className="text-sm sm:text-base text-[#66536C] max-w-[580px] mx-auto">
          Search answers to common questions about Zahera's AI accuracy, offline use, privacy, languages, and pricing.
        </p>
      </section>

      <section className="py-10 px-6 bg-white">
        <div className="max-w-[760px] mx-auto">
          {/* Search Input */}
          <div className="relative mb-6">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#F04C8A]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions (e.g. offline, privacy, pricing, doctor)..."
              className="w-full pl-12 pr-6 py-3.5 rounded-full border border-[#F5D6E3] bg-white text-xs sm:text-sm outline-none focus:border-[#F04C8A] shadow-sm"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 justify-center flex-wrap mb-8">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCat(c.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition cursor-pointer ${
                  selectedCat === c.id
                    ? 'bg-[#F04C8A] text-white shadow-xs'
                    : 'bg-white text-[#66536C] border border-[#F5D6E3] hover:border-[#F04C8A]'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* FAQ Accordion List */}
          <div className="flex flex-col gap-3">
            {filtered.map((item, idx) => (
              <div key={idx} className="bg-white border border-[#F5D6E3] rounded-2xl overflow-hidden shadow-xs">
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#241629] cursor-pointer"
                >
                  <span>{item.q}</span>
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0 transition-transform ${
                      openIndex === idx ? 'bg-[#F04C8A] text-white rotate-45' : 'bg-[#FEEBF1] text-[#F04C8A]'
                    }`}
                  >
                    +
                  </span>
                </button>

                {openIndex === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#66536C] leading-relaxed border-t border-[#FEEBF1] pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="text-center p-8 bg-[#FEEBF1] rounded-2xl">
                <h3 className="text-sm font-bold text-[#241629] mb-1">No matching questions found</h3>
                <p className="text-xs text-[#66536C] mb-3">Try searching for a different keyword or contact our support team.</p>
                <button
                  onClick={() => {
                    setCurrentView('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-5 py-2 rounded-full bg-white border border-[#F5D6E3] text-xs font-bold text-[#241629] hover:text-[#F04C8A]"
                >
                  Contact Support →
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
