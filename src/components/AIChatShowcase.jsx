import React, { useState } from 'react';
import { Send, Volume2, Stethoscope } from 'lucide-react';

export default function AIChatShowcase() {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! I am Zahera, your private health companion. You can ask me anything about your cycle, symptoms, pregnancy, or menopause in English, Pidgin, Hausa, Yorùbá, or Igbo. How are you feeling today?"
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isVoiceActive, setIsVoiceActive] = useState(false);

  const prompts = [
    { query: 'Why are my menstrual cramps so severe?', lang: 'EN' },
    { query: 'Wetin fit cause period pain and wetin go help?', lang: 'PIDGIN' },
    { query: "Ciwon mara lokacin al'ada da yadda ake magance shi", lang: 'HAUSA' },
    { query: 'Àárẹ̀ àti àìsùn dáadáa nígbà oyún', lang: 'YORÙBÁ' },
    { query: 'Ihe na-akpata mgbu nsọ nwanyị', lang: 'IGBO' }
  ];

  const handleSend = (textToSend) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const newMsgs = [...messages, { sender: 'user', text: text.trim() }];
    setMessages(newMsgs);
    setInputText('');

    setTimeout(() => {
      const lower = text.toLowerCase();
      let reply = "Menstrual cramps (dysmenorrhea) happen when uterine muscles contract to shed the lining. To ease the pain: try a warm compress on your lower abdomen, stay well-hydrated, and drink warm ginger or peppermint tea.";

      if (lower.includes('wetin') || lower.includes('belle') || lower.includes('period pain')) {
        reply = "Period cramp dey happen when your womb dey squeeze to push out di blood. Put warm water bottle for your lower belle, drink plenty water, and rest well.";
      } else if (lower.includes('mara') || lower.includes('al\'ada')) {
        reply = "Ciwon mara lokacin al'ada yana faruwa ne saboda matsewar mahaifa don fitar da jini. Gasa mara da ruwan dumi, sha ruwa mai tsafta, ki samu hutu.";
      } else if (lower.includes('oyun') || lower.includes('aare') || lower.includes('oyún') || lower.includes('àárẹ̀')) {
        reply = "Àárẹ̀ àti àìsùn dáadáa nígbà oyún máa ń wọ́pọ̀ nítorí àwọn ìyípadà homonu (hormones). Rí i dájú pé o ń mu omi dáadáa, jẹ oúnjẹ aṣaralóore, kí o sì sinmi déédéé.";
      } else if (lower.includes('nso') || lower.includes('mgbu') || lower.includes('nsọ')) {
        reply = "Mgbu nsọ nwanyị na-eme mgbe akpa nwa na-agbaji iji wepụta ọbara. Tinye akwa nwere mmiri ọkụ na afọ gị, ṅụọ mmiri zuru ezu, ma zuru ike.";
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: reply, isVoice: isVoiceActive }]);
    }, 400);
  };

  return (
    <section className="py-16 px-6 bg-[#FDF1F5] border-y border-[#F5D6E3]" id="ai-talk">
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
        {/* Left Column */}
        <div className="text-left">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDE8F1] text-[#C41C65] text-[11px] font-bold uppercase tracking-wider mb-3">
            Interactive Simulator
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#241629] mb-3 leading-tight">
            Test Zahera’s AI Live
          </h2>

          <p className="text-base font-bold text-[#241629] mb-2 leading-relaxed">
            Try asking our clinical-backed assistant a real reproductive health question in your preferred language.
          </p>

          <p className="text-sm text-[#66536C] leading-relaxed mb-6">
            <strong>Culturally sensitive, clinical advice in your mother tongue.</strong><br />
            Zahera gives immediate, stigma-free guidance on puberty, menstrual pain, fertility, contraception, pregnancy, and menopause. Every guidance framework is physician-reviewed.
          </p>

          <div className="text-xs font-bold text-[#241629] mb-3">
            Quick sample questions (Click to ask):
          </div>

          <div className="flex flex-col gap-2">
            {prompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(p.query)}
                className="w-full text-left px-4 py-2.5 rounded-full bg-white border border-[#F5D6E3] hover:border-[#F04C8A] hover:bg-[#FDE8F1] text-[#241629] text-xs font-semibold transition flex items-center justify-between gap-3 cursor-pointer shadow-2xs"
              >
                <span>{p.query}</span>
                <span className="font-mono text-[10px] font-bold text-[#F04C8A] shrink-0">{p.lang}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Chatbox */}
        <div className="bg-white rounded-[26px] border border-[#F5D6E3] p-6 shadow-xl relative text-left">
          <div className="flex items-center justify-between border-b border-[#F5D6E3] pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-xl">🩺</span>
              <div>
                <span className="font-extrabold text-sm text-[#241629] block">Zahera Assistant</span>
                <span className="text-[10px] text-[#10B981] font-bold">Online & Offline Ready</span>
              </div>
            </div>
            <button
              onClick={() => setIsVoiceActive(!isVoiceActive)}
              className={`px-3 py-1 rounded-full text-xs font-bold border border-[#F5D6E3] flex items-center gap-1.5 transition cursor-pointer ${
                isVoiceActive ? 'bg-[#F04C8A] text-white' : 'bg-[#FEEBF1] text-[#C41C65]'
              }`}
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>{isVoiceActive ? 'Voice ON' : 'Voice Demo'}</span>
            </button>
          </div>

          {/* Messages */}
          <div className="max-h-[260px] overflow-y-auto pr-1 flex flex-col gap-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[88%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-[#FDE8F1] text-[#241629] ml-auto rounded-br-xs'
                    : 'bg-[#FDF1F5] border border-[#F5D6E3] text-[#241629] mr-auto rounded-bl-xs'
                }`}
              >
                <div>{m.text}</div>
                {m.isVoice && (
                  <div className="mt-1.5 text-[11px] text-[#C41C65] font-bold flex items-center gap-1">
                    <span>🔊 Audio synthesis demo active</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2 mt-3.5"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask health questions in any language..."
              className="flex-1 px-4 py-2.5 rounded-full border border-[#F5D6E3] bg-[#FDF1F5] text-xs sm:text-sm outline-none focus:border-[#F04C8A] focus:bg-white"
            />
            <button
              type="submit"
              className="w-9 h-9 rounded-full bg-[#F04C8A] hover:bg-[#C71F68] text-white flex items-center justify-center cursor-pointer transition shadow-sm"
              aria-label="Send"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="bg-[#FEEBF1] rounded-2xl border border-[#F5D6E3] p-3 mt-4 flex items-center justify-between">
            <div>
              <div className="font-extrabold text-xs text-[#241629]">Support 24/7</div>
              <div className="text-[11px] text-[#66536C]">Start using our chat right now</div>
            </div>
            <button
              onClick={() => handleSend("Tell me about Zahera's clinical safety")}
              className="px-3.5 py-1.5 rounded-full bg-[#F04C8A] text-white text-xs font-bold hover:bg-[#C71F68] transition cursor-pointer"
            >
              AI Chat ↘
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
