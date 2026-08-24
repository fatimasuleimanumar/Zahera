import React, { useState } from 'react';
import { Sparkles, Volume2, Mic, Bell, Calendar as CalendarIcon, Check } from 'lucide-react';

export default function StitchLiveAIDemo() {
  const [activeLang, setActiveLang] = useState('English');
  const [activeQuestion, setActiveQuestion] = useState('cramps');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const languages = ['English', 'Pidgin', 'Hausa', 'Yorùbá', 'Igbo'];

  const questionsByLang = {
    English: [
      { id: 'cramps', q: 'Why are my period cramps painful?' },
      { id: 'tired', q: "I'm feeling very tired, could I be pregnant?" },
      { id: 'foods', q: 'What foods help during pregnancy?' },
      { id: 'flushes', q: 'How do I manage hot flushes?' }
    ],
    Pidgin: [
      { id: 'cramps', q: 'Why my period pain dey heavy like this?' },
      { id: 'tired', q: 'Body dey weak me, I fit don get belle?' },
      { id: 'foods', q: 'Wetin I suppose dey chop well for belle?' },
      { id: 'flushes', q: 'How I go take stop this hot body for menopause?' }
    ],
    Hausa: [
      { id: 'cramps', q: "Ciwon mara lokacin al'ada da yadda ake magance shi" },
      { id: 'tired', q: 'Ina jin kasala da gajiya, ko ciki ne?' },
      { id: 'foods', q: 'Abincin da ke da amfani lokacin ciki' },
      { id: 'flushes', q: "Yadda za a magance zafin jiki na dainar haihuwa" }
    ],
    'Yorùbá': [
      { id: 'cramps', q: 'Àárẹ̀ àti ìrora nígbà nǹkan oṣù' },
      { id: 'tired', q: 'Àárẹ̀ mú mi púpọ̀, ṣé mo ti lóyún?' },
      { id: 'foods', q: 'Oúnjẹ wo ló dára fún obìnrin tó lóyún?' },
      { id: 'flushes', q: 'Báwo ni mo ṣe lè dín gbígbóná ara kù nígbà àbọ̀-ọjọ́?' }
    ],
    Igbo: [
      { id: 'cramps', q: 'Ihe na-akpata mgbu nsọ nwanyị' },
      { id: 'tired', q: 'Ahụ na-adị m ike ọgwụgwụ, m̀ nwere ike ịdị ime?' },
      { id: 'foods', q: 'Nri ndị na-enyere aka n’oge ime' },
      { id: 'flushes', q: 'Otu e si ejikwa okpomọkụ ahụ n’oge nkwụsị nsọ' }
    ]
  };

  const answers = {
    cramps: {
      English: "Painful period cramps are common and usually caused by your womb tightening to shed its lining. You can try resting, drinking warm water, and eating foods rich in magnesium like bananas and groundnuts. If the pain is severe, talk to a doctor.",
      Pidgin: "Period cramp dey happen when your womb dey squeeze to push out di blood. Put warm water bottle for your lower belle, drink plenty water, and rest well. If e too pain you, go see doctor.",
      Hausa: "Ciwon mara lokacin al'ada yana faruwa ne saboda matsewar mahaifa don fitar da jini. Gasa mara da ruwan dumi, sha ruwa mai tsafta, ki samu hutu. Idan ciwon ya yi tsanani, a tuntubi likita.",
      'Yorùbá': "Ìrora nǹkan oṣù máa ń ṣẹlẹ̀ nígbà tí ilé-ọmọ bá ń rún láti lé ẹ̀jẹ̀ jáde. Fi omi gbígbóná fọ̀ ọ́, mu omi dáadáa, kí o sì sinmi. Tí ìrora náà bá pọ̀ ju, rí dọ́kítà.",
      Igbo: "Mgbu nsọ nwanyị na-eme mgbe akpa nwa na-agbaji iji wepụta ọbara. Tinye akwa nwere mmiri ọkụ na afọ gị, ṅụọ mmiri zuru ezu, ma zuru ike. Ọ bụrụ na mgbu ahụ siri ike, hụ dọkịta."
    },
    tired: {
      English: "Fatigue is very common in early pregnancy due to progesterone surges. Take plenty of rest, stay hydrated, and take a simple urine pregnancy test after your missed period.",
      Pidgin: "Body weakness dey happen quick-quick when pregnancy start. Rest well, drink clean water, and do pregnancy test if your period never come.",
      Hausa: "Gajiya da kasala abu ne da ke yawan faruwa a farkon ciki. Ki samu isasshen hutu, ki sha ruwa mai tsafta, kuma ki yi gwajin ciki.",
      'Yorùbá': "Àárẹ̀ wọ́pọ̀ ní ìbẹ̀rẹ̀ oyún nítorí àwọn ìyípadà homonu. Sinmi dáadáa, mu omi, kí o sì ṣe àyẹ̀wò oyún.",
      Igbo: "Ike ọgwụgwụ na-adịkarị n’oge mbụ nke ime. Zuru ike nke ọma, ṅụọ mmiri, ma mee ule ime."
    },
    foods: {
      English: "Focus on iron and folate-rich local foods: spinach (efo tete / ugu), beans, eggs, fortified grains, and fresh fruits like oranges and mangoes.",
      Pidgin: "Chop food wey get iron and vitamins well: ugu leaf, beans, egg, fish, and sweet fruits like orange and pawpaw.",
      Hausa: "Ku ci abinci mai gina jiki mai ɗauke da sinadarin iron: ganyen alayyaho, wake, ƙwai, kifi, da 'ya'yan itace kamar lemu da mangwaro.",
      'Yorùbá': "Jẹ oúnjẹ tó ní èròjà iron àti folate: ẹ̀fọ́ tẹ̀tẹ̀, ẹ̀wà, ẹyin, àti èso bíi ọsàn àti máńgòrò.",
      Igbo: "Rie nri ndị nwere iron na folate: akwụkwọ nri ugu, agwa, akwa, na mkpụrụ osisi dịka oroma na mangoro."
    },
    flushes: {
      English: "Hot flushes during perimenopause can be managed by wearing breathable cotton, staying hydrated, avoiding spicy triggers, and cooling down in shaded areas.",
      Pidgin: "Hot body for menopause: wear light clothes wey breeze fit enter, drink cold water, reduce pepper, and stay for cool place.",
      Hausa: "Za a iya magance zafin jiki na dainar haihuwa ta hanyar sanya tufafi masu sauƙi, shan ruwa, da guje wa abinci mai yaji sosai.",
      'Yorùbá': "Wọ aṣọ fẹ́lẹ́fẹ́lẹ́ tó fàyè gba afẹ́fẹ́, mu omi tútù, dín ata kù, kí o sì wà ní àyè tútù.",
      Igbo: "Yiri uwe dị mfe, ṅụọ mmiri oyi, belata nri nwere ose, ma nọrọ n’ebe nwere ikuku dị jụụ."
    }
  };

  const currentQuestions = questionsByLang[activeLang] || questionsByLang['English'];
  const currentAnswer = answers[activeQuestion]?.[activeLang] || answers[activeQuestion]?.['English'];

  const toggleAudio = () => {
    setIsPlayingAudio(!isPlayingAudio);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-left" id="live-demo">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Side: Interactive Demo Controls */}
        <div className="w-full lg:w-1/2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4288]/10 text-[#FF4288] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Live Interactive Demo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mb-2 tracking-tight">
            Live AI Health Assistant Demo
          </h2>
          <p className="text-sm sm:text-base text-[#4B5563] mb-6">
            Test Zahera's AI Live — Culturally sensitive, clinical advice in your mother tongue.
          </p>

          {/* Language Selector Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveLang(lang)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
                  activeLang === lang
                    ? 'bg-[#FF4288] text-white shadow-md shadow-pink-500/25'
                    : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Questions List */}
            <div className="bg-[#F8F9FB] p-5 rounded-[2rem] border border-gray-100">
              <h4 className="font-bold text-[#111827] mb-3 text-xs uppercase tracking-wider">
                Try sample questions
              </h4>
              <div className="space-y-2.5">
                {currentQuestions.map((qItem) => (
                  <button
                    key={qItem.id}
                    onClick={() => setActiveQuestion(qItem.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium transition flex justify-between items-center cursor-pointer ${
                      activeQuestion === qItem.id
                        ? 'bg-white border border-[#FF4288] text-[#FF4288] shadow-sm font-bold'
                        : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <span>{qItem.q}</span>
                    <span className="text-[10px] ml-1 shrink-0">→</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Answer Box */}
            <div className="bg-white border border-gray-100 shadow-md p-5 rounded-[2rem] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 mb-3 text-[#FF4288] font-bold text-xs">
                  <Sparkles className="w-4 h-4" />
                  <span>Zahera AI ({activeLang})</span>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed mb-4">
                  {currentAnswer}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <button
                  onClick={toggleAudio}
                  className="bg-[#FF4288]/10 text-[#FF4288] px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 hover:bg-[#FF4288]/20 transition cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>{isPlayingAudio ? 'Playing...' : 'Listen to answer'}</span>
                </button>

                {/* Animated Soundwave */}
                <div className="flex items-center gap-1">
                  <div className={`w-1 rounded-full bg-[#FF4288] transition-all duration-300 ${isPlayingAudio ? 'h-4 animate-pulse' : 'h-2 opacity-40'}`} />
                  <div className={`w-1 rounded-full bg-[#FF4288] transition-all duration-300 ${isPlayingAudio ? 'h-6 animate-pulse' : 'h-3 opacity-60'}`} />
                  <div className={`w-1 rounded-full bg-[#FF4288] transition-all duration-300 ${isPlayingAudio ? 'h-5 animate-pulse' : 'h-4'}`} />
                  <div className={`w-1 rounded-full bg-[#FF4288] transition-all duration-300 ${isPlayingAudio ? 'h-3 animate-pulse' : 'h-2 opacity-40'}`} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Phone Mockup Simulator */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-[300px] h-[600px] bg-white rounded-[2.8rem] border-[7px] border-gray-900 shadow-2xl overflow-hidden flex flex-col">
            {/* Status Bar */}
            <div className="h-10 w-full flex justify-between items-center px-6 text-[11px] font-semibold text-gray-800">
              <span>9:41</span>
              <div className="flex gap-1 items-center">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span className="text-[10px]">100% Offline</span>
              </div>
            </div>

            {/* Inner App Container */}
            <div className="flex-grow bg-[#FF4288]/5 p-4 flex flex-col justify-between">
              {/* Header */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="/assets/team-fatima.jpg"
                      alt="Avatar"
                      className="w-9 h-9 rounded-full border border-[#FF4288] object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-xs text-gray-900 leading-tight">Good morning,</h3>
                      <p className="text-xs font-bold text-[#FF4288]">Aisha</p>
                    </div>
                  </div>
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-xs text-gray-500">
                    <Bell className="w-4 h-4" />
                  </button>
                </div>

                {/* Cycle Card */}
                <div className="bg-white rounded-2xl p-4 shadow-xs">
                  <div className="flex items-center gap-1.5 text-[#FF4288] font-bold text-xs mb-1">
                    <CalendarIcon className="w-3.5 h-3.5" />
                    <span>Cycle Day 5</span>
                  </div>
                  <p className="text-xs text-gray-600 mb-3">Low chance of pregnancy</p>
                  <span className="bg-[#FF4288] text-white px-3 py-1 rounded-full text-[10px] font-bold inline-block">
                    View Calendar
                  </span>
                </div>
              </div>

              {/* Voice Input Area */}
              <div className="text-center pb-4">
                <h3 className="text-[#FF4288] font-extrabold text-base mb-0.5">Ask Zahera anything</h3>
                <p className="text-gray-500 text-[11px] mb-4">Tap the mic to speak</p>
                <button
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className="w-16 h-16 bg-[#FF4288] hover:bg-[#e62e6b] rounded-full mx-auto flex items-center justify-center shadow-lg shadow-pink-500/30 text-white mb-4 transition transform active:scale-95 cursor-pointer"
                >
                  <Mic className="w-7 h-7" />
                </button>
                <p className="text-[10px] text-gray-500 max-w-[210px] mx-auto leading-tight">
                  Zahera listens in Hausa, Yorùbá, Igbo, Pidgin & English.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
