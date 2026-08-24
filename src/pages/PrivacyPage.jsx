import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="text-left">
      <section className="pt-12 pb-8 px-6 text-center bg-[radial-gradient(circle_at_50%_15%,rgba(254,235,241,0.95)_0%,#FFFFFF_70%)]">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDE8F1] text-[#C41C65] text-[11px] font-bold uppercase tracking-wider mb-3">
          Data Governance
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#241629] mb-3">
          Privacy Policy | <span className="text-[#F04C8A]">Security Charter</span>
        </h1>
        <p className="text-sm sm:text-base text-[#66536C] max-w-[580px] mx-auto">
          How Zahera collects, encrypts, and protects your reproductive health data under NDPA 2023.
        </p>
      </section>

      <section className="py-10 px-6 bg-white">
        <div className="max-w-[800px] mx-auto bg-white border border-[#F5D6E3] p-8 sm:p-10 rounded-[32px] shadow-sm text-xs sm:text-sm text-[#66536C] leading-relaxed">
          <span className="font-mono text-xs text-[#F04C8A] font-bold block mb-4">
            Draft Policy · Last Updated August 2026 · Compliant with NDPA 2023
          </span>

          <div className="bg-[#FEEBF1] border-l-4 border-[#F04C8A] p-4 rounded-lg mb-6 text-xs text-[#241629]">
            <strong>Our Uncompromising Guarantee:</strong> We treat reproductive health as inviolable, confidential personal data. Your logs and symptoms are encrypted locally before transmission and are never sold to data brokers, ad networks, or third-party marketers.
          </div>

          <h2 className="text-base font-extrabold text-[#241629] mt-6 mb-2">1. Who This Policy Covers</h2>
          <p className="mb-4">This Privacy Policy applies to all services provided by Teem Tech Solutions Ltd. ("Zahera," "we," "us," or "our") through the Zahera mobile application, our official website (zahera.tech), pilot programs, and our waitlist community.</p>

          <h2 className="text-base font-extrabold text-[#241629] mt-6 mb-2">2. Categories of Information We Collect</h2>
          <ul className="list-disc pl-5 mb-4 flex flex-col gap-1.5">
            <li><strong>Account Identifiers:</strong> Phone number (for secure SMS verification), optional name, approximate age, and preferred language dialect.</li>
            <li><strong>Reproductive Health Logs:</strong> Menstrual cycle start/end dates, flow intensity, basal body symptoms, pregnancy tracking milestones, perimenopause logs, and medication entries.</li>
            <li><strong>AI Companion Conversations:</strong> Questions asked to Zahera's AI chatbot in order to synthesize contextually accurate medical guidance.</li>
            <li><strong>Waitlist Data:</strong> Email address and city of residence provided voluntarily when signing up for pilot access.</li>
          </ul>

          <h2 className="text-base font-extrabold text-[#241629] mt-6 mb-2">3. Storage, Encryption & Decentralization</h2>
          <p className="mb-4">Zahera employs a decentralized storage philosophy. Your symptom logs and cycle histories reside in an AES-256 encrypted SQLite database directly on your smartphone. When cloud synchronization is requested, data is encrypted in transit via Transport Layer Security (TLS 1.3).</p>

          <h2 className="text-base font-extrabold text-[#241629] mt-6 mb-2">4. Strict Prohibition on Third-Party Data Sales</h2>
          <p className="mb-4">We do not monetize user data. We do not sell, rent, license, or trade your reproductive health data, conversation logs, or personal identity to advertisers, insurance underwriters, or data brokers under any circumstances.</p>

          <h2 className="text-base font-extrabold text-[#241629] mt-6 mb-2">5. Nigeria Data Protection Act (NDPA 2023) Compliance</h2>
          <p>Under the Nigeria Data Protection Act 2023, you retain full rights to access, rectify, erase, and export your personal health data at any time.</p>
        </div>
      </section>
    </div>
  );
}
