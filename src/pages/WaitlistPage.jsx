import React, { useState } from 'react';

export default function WaitlistPage() {
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Kaduna');
  const [stage, setStage] = useState('Cycle');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    try {
      const list = JSON.parse(localStorage.getItem('zahera_waitlist_cache') || '[]');
      list.push({ email, city, stage, date: new Date().toISOString() });
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
    <div className="text-left">
      <section className="pt-12 pb-8 px-6 text-center bg-[radial-gradient(circle_at_50%_15%,rgba(254,235,241,0.95)_0%,#FFFFFF_70%)]">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDE8F1] text-[#C41C65] text-[11px] font-bold uppercase tracking-wider mb-3">
          Early VIP Access
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#241629] mb-3">
          Be First to Experience | <span className="text-[#F04C8A]">Zahera</span>
        </h1>
        <p className="text-sm sm:text-base text-[#66536C] max-w-[580px] mx-auto">
          We are piloting first across Kaduna and Kano, with Lagos and Abuja opening soon. Register below to receive your VIP invite.
        </p>
      </section>

      <section className="py-10 px-6 bg-white">
        <div className="max-w-[620px] mx-auto bg-white border border-[#F5D6E3] p-8 sm:p-10 rounded-[32px] shadow-lg">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#241629]">Email Address:</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="px-5 py-3 rounded-full border border-[#F5D6E3] bg-[#FDF1F5] text-xs sm:text-sm outline-none focus:border-[#F04C8A] focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#241629]">City in Nigeria:</label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="px-4 py-3 rounded-full border border-[#F5D6E3] bg-[#FDF1F5] text-xs sm:text-sm outline-none focus:border-[#F04C8A] focus:bg-white"
                  >
                    <option value="Kaduna">📍 Kaduna (Pilot Live)</option>
                    <option value="Kano">📍 Kano (Pilot Live)</option>
                    <option value="Lagos">📍 Lagos (Expanding Next)</option>
                    <option value="Abuja">📍 Abuja</option>
                    <option value="Port Harcourt">📍 Port Harcourt</option>
                    <option value="Ibadan">📍 Ibadan</option>
                    <option value="Other">📍 Other Nigerian City</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#241629]">Primary Life Stage:</label>
                  <select
                    value={stage}
                    onChange={(e) => setStage(e.target.value)}
                    className="px-4 py-3 rounded-full border border-[#F5D6E3] bg-[#FDF1F5] text-xs sm:text-sm outline-none focus:border-[#F04C8A] focus:bg-white"
                  >
                    <option value="Cycle">Cycle & Period Tracking</option>
                    <option value="Pregnancy">Pregnancy & Antenatal</option>
                    <option value="Menopause">Menopause Support</option>
                    <option value="HealthWorker">Doctor / Midwife / Clinic</option>
                    <option value="General">General Wellness</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#F04C8A] hover:bg-[#C71F68] text-white text-xs sm:text-sm font-bold shadow-md transition cursor-pointer mt-2"
              >
                Get VIP Pilot Access <span>🎉</span>
              </button>
            </form>
          ) : (
            <div className="bg-[#F2FBF6] border border-[#10B981] rounded-2xl p-5 text-center">
              <h4 className="text-sm font-bold text-[#065F46] mb-1">🎉 You are on the VIP List! Welcome to Zahera.</h4>
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

          <p className="text-[11px] text-[#9E89A3] text-center mt-4">
            No spam. Strictly one email when pilot access opens for your city.
          </p>
        </div>
      </section>
    </div>
  );
}
