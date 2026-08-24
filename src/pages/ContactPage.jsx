import React, { useState } from 'react';
import { Mail, Phone, Briefcase, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="text-left">
      <section className="pt-12 pb-8 px-6 text-center bg-[radial-gradient(circle_at_50%_15%,rgba(254,235,241,0.95)_0%,#FFFFFF_70%)]">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDE8F1] text-[#C41C65] text-[11px] font-bold uppercase tracking-wider mb-3">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#241629] mb-3">
          Find Support | <span className="text-[#F04C8A]">Contact Our Team</span>
        </h1>
        <p className="text-sm sm:text-base text-[#66536C] max-w-[580px] mx-auto">
          Whether you represent a Primary Health Care Centre, an NGO, maternal health research, or media — reach out to our team directly.
        </p>
      </section>

      <section className="py-10 px-6 bg-white">
        <div className="max-w-[1040px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-8">
          {/* Direct Channels */}
          <div className="bg-white border border-[#F5D6E3] rounded-[28px] p-8 shadow-sm">
            <h3 className="text-lg font-extrabold text-[#241629] mb-4">Direct Channels</h3>

            <div className="flex items-center gap-3.5 py-3.5 border-b border-[#F5D6E3]">
              <div className="w-10 h-10 rounded-full bg-[#FEEBF1] flex items-center justify-center text-[#F04C8A]">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase text-[#9E89A3]">Official Email</div>
                <div className="text-xs sm:text-sm font-bold text-[#241629]">
                  <a href="mailto:teemtechsolutionsltd@gmail.com" className="hover:text-[#F04C8A]">
                    teemtechsolutionsltd@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 py-3.5 border-b border-[#F5D6E3]">
              <div className="w-10 h-10 rounded-full bg-[#FEEBF1] flex items-center justify-center text-[#F04C8A]">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase text-[#9E89A3]">Phone / WhatsApp</div>
                <div className="text-xs sm:text-sm font-bold text-[#241629]">
                  <a href="tel:+2349035328748" className="hover:text-[#F04C8A]">+234 903 532 8748</a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 py-3.5 border-b border-[#F5D6E3]">
              <div className="w-10 h-10 rounded-full bg-[#FEEBF1] flex items-center justify-center text-[#F04C8A]">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase text-[#9E89A3]">Executive Leadership</div>
                <div className="text-xs sm:text-sm font-bold text-[#241629]">Fatima Suleiman Umar (Founder)</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 py-3.5">
              <div className="w-10 h-10 rounded-full bg-[#FEEBF1] flex items-center justify-center text-[#F04C8A]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase text-[#9E89A3]">Headquarters</div>
                <div className="text-xs sm:text-sm font-bold text-[#241629]">Teem Tech Solutions Ltd. · Nigeria</div>
              </div>
            </div>
          </div>

          {/* Interactive Inquiry Form */}
          <div className="bg-white border border-[#F5D6E3] rounded-[28px] p-8 shadow-sm">
            <h3 className="text-lg font-extrabold text-[#241629] mb-4">Send a Message</h3>

            {!formSent ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-[#241629]">Full Name:</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Amina Bello"
                    className="px-4 py-2.5 rounded-full border border-[#F5D6E3] bg-[#FDF1F5] text-xs outline-none focus:border-[#F04C8A] focus:bg-white"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-[#241629]">Email Address:</label>
                  <input
                    type="email"
                    required
                    placeholder="name@organization.org"
                    className="px-4 py-2.5 rounded-full border border-[#F5D6E3] bg-[#FDF1F5] text-xs outline-none focus:border-[#F04C8A] focus:bg-white"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-[#241629]">Inquiry Type:</label>
                  <select className="px-4 py-2.5 rounded-full border border-[#F5D6E3] bg-[#FDF1F5] text-xs outline-none focus:border-[#F04C8A] focus:bg-white">
                    <option value="clinic">Clinic / PHC Partnership</option>
                    <option value="ngo">NGO / Maternal Health Collaboration</option>
                    <option value="press">Press & Media Interview</option>
                    <option value="investor">Grant & Impact Investment</option>
                    <option value="general">General Support</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-[#241629]">Your Message:</label>
                  <textarea
                    required
                    placeholder="Tell us how we can collaborate..."
                    rows={3}
                    className="px-4 py-2.5 rounded-2xl border border-[#F5D6E3] bg-[#FDF1F5] text-xs outline-none focus:border-[#F04C8A] focus:bg-white resize-vertical"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#F04C8A] hover:bg-[#C71F68] text-white text-xs font-bold shadow-md transition cursor-pointer mt-1"
                >
                  Send Message to Team →
                </button>
              </form>
            ) : (
              <div className="bg-[#F2FBF6] border border-[#10B981] rounded-2xl p-6 text-center">
                <h4 className="text-sm font-bold text-[#065F46] mb-1">Message Sent Successfully!</h4>
                <p className="text-xs text-[#065F46]">Thank you. Our leadership team will reply within 24 hours.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
