import React, { useState } from 'react';

export default function WaitlistSection() {
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Kaduna');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    try {
      const list = JSON.parse(localStorage.getItem('zahera_waitlist_cache') || '[]');
      list.push({ email, city, date: new Date().toISOString() });
      localStorage.setItem('zahera_waitlist_cache', JSON.stringify(list));
    } catch (err) {}

    setIsSubmitted(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('https://www.zahera.tech/?ref=VIP-PILOT').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className="py-16 px-6 text-center bg-[radial-gradient(circle_at_50%_50%,#FFF0F5_0%,#FFFFFF_80%)]" id="waitlist">
      <div className="max-w-[650px] mx-auto bg-white border border-[#F5D6E3] p-8 sm:p-10 rounded-[32px] shadow-xl">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDE8F1] text-[#C41C65] text-[11px] font-bold uppercase tracking-wider mb-3">
          1,000+ women already on the waitlist
        </span>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#241629] mb-2">
          Be first to experience Zahera.
        </h2>

        <p className="text-xs sm:text-sm text-[#66536C] mb-6">
          We are piloting first in Kaduna and Kano, with Lagos and Abuja coming next. Join today to secure early VIP access.
        </p>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-5 py-3.5 rounded-full border border-[#F5D6E3] bg-[#FDF1F5] text-xs sm:text-sm outline-none focus:border-[#F04C8A] focus:bg-white"
            />

            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-5 py-3.5 rounded-full border border-[#F5D6E3] bg-[#FDF1F5] text-xs sm:text-sm outline-none focus:border-[#F04C8A] focus:bg-white"
            >
              <option value="Kaduna">📍 Kaduna (Pilot Live)</option>
              <option value="Kano">📍 Kano (Pilot Live)</option>
              <option value="Lagos">📍 Lagos (Next Wave)</option>
              <option value="Abuja">📍 Abuja</option>
              <option value="Port Harcourt">📍 Port Harcourt</option>
              <option value="Ibadan">📍 Ibadan</option>
              <option value="Other">📍 Other Nigerian City</option>
            </select>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#F04C8A] hover:bg-[#C71F68] text-white text-xs sm:text-sm font-bold shadow-md shadow-pink-500/25 transition cursor-pointer mt-1"
            >
              Get VIP Pilot Access
            </button>
          </form>
        ) : (
          <div className="bg-[#F2FBF6] border border-[#10B981] rounded-2xl p-5 text-center">
            <h4 className="text-sm font-bold text-[#065F46] mb-1">🎉 You are officially on the VIP list!</h4>
            <p className="text-xs text-[#065F46] mb-3">Share your exclusive invite link with sisters and friends:</p>
            <div className="bg-white border border-dashed border-[#10B981] px-3.5 py-2 rounded-lg flex items-center justify-between gap-2 font-mono text-xs text-[#065F46]">
              <span className="truncate">https://www.zahera.tech/?ref=VIP-PILOT</span>
              <button
                onClick={handleCopy}
                className="px-3 py-1 rounded bg-[#10B981] text-white text-[11px] font-bold cursor-pointer shrink-0"
              >
                {copied ? 'Copied!' : 'Copy Link'}
              </button>
            </div>
          </div>
        )}

        <p className="text-[11px] text-[#9E89A3] mt-3.5">
          No spam. Strictly one email when pilot access opens for your city.
        </p>

        <div className="flex gap-2 justify-center flex-wrap mt-5">
          <span className="px-3 py-1 rounded-full bg-white border border-[#F5D6E3] text-[#241629] text-[11px] font-bold">📍 Kaduna (Active Pilot)</span>
          <span className="px-3 py-1 rounded-full bg-white border border-[#F5D6E3] text-[#241629] text-[11px] font-bold">📍 Kano (Active Pilot)</span>
          <span className="px-3 py-1 rounded-full bg-white border border-[#F5D6E3] text-[#241629] text-[11px] font-bold">📍 Lagos — Coming Soon</span>
          <span className="px-3 py-1 rounded-full bg-white border border-[#F5D6E3] text-[#241629] text-[11px] font-bold">📍 Abuja — Coming Soon</span>
        </div>
      </div>
    </section>
  );
}
