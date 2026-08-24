/* ===========================================================
   ZAHERA TECH — INTERACTIVE SCRIPT & ANIMATION CONTROLS
   =========================================================== */

function initApp() {
  // 1. Hero Card Loading Progress Bar & Counter Animation
  const heroProgressBar = document.getElementById('heroProgressBar');
  const heroStatNumber = document.getElementById('heroStatNumber');

  if (heroProgressBar) {
    heroProgressBar.classList.remove('hero-progress-animated');
    // Trigger reflow to restart animation on fresh page load
    void heroProgressBar.offsetWidth;
    heroProgressBar.classList.add('hero-progress-animated');
  }

  if (heroStatNumber) {
    let count = 0;
    const target = 94;
    const duration = 1600;
    const intervalTime = 25;
    const step = target / (duration / intervalTime);

    const timer = setInterval(() => {
      count += step;
      if (count >= target) {
        count = target;
        clearInterval(timer);
      }
      heroStatNumber.innerText = Math.round(count) + '%';
    }, intervalTime);
  }

  // 2. Language Dropdown Toggle
  const langBtn = document.getElementById('langBtn');
  const langMenu = document.getElementById('langMenu');
  const langBtnLabel = document.getElementById('langBtnLabel');

  if (langBtn && langMenu) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', () => {
      langMenu.classList.add('hidden');
    });

    const langOptions = langMenu.querySelectorAll('button');
    langOptions.forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        const langName = btn.innerText;
        if (langBtnLabel) langBtnLabel.innerText = langName;
        langMenu.classList.add('hidden');
        if (window.setLanguage) window.setLanguage(lang);
      });
    });
  }

  // 3. Life Stage Card Click Selector (In Smartphone Mockup)
  const lifeStageCards = document.querySelectorAll('.life-stage-card');
  lifeStageCards.forEach((card) => {
    card.addEventListener('click', () => {
      lifeStageCards.forEach((c) => {
        c.className = 'life-stage-card relative p-3.5 rounded-2xl cursor-pointer transition-all duration-300 text-left bg-white/10 border border-white/20 hover:bg-white/15 backdrop-blur-sm';
        const check = c.querySelector('.check-badge');
        if (check) check.remove();
      });

      card.className = 'life-stage-card relative p-3.5 rounded-2xl cursor-pointer transition-all duration-300 text-left bg-white/25 border-2 border-white shadow-lg backdrop-blur-md';
      const checkBadge = document.createElement('div');
      checkBadge.className = 'check-badge absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-white text-[#913BE2] flex items-center justify-center shadow-xs';
      checkBadge.innerHTML = '<svg fill="none" height="12" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" width="12"><polyline points="20 6 9 17 4 12"></polyline></svg>';
      card.appendChild(checkBadge);
    });
  });

  // 4. Stitch AI Demo: Language & Questions Switcher
  const demoLangRow = document.getElementById('demoLangRow');
  const demoQuestionsList = document.getElementById('demoQuestionsList');
  const aiAnswerText = document.getElementById('aiAnswerText');

  const answersByLang = {
    cramps: {
      en: "Painful period cramps are common and usually caused by your womb tightening to shed its lining. You can try resting, drinking warm water, and eating foods rich in magnesium like bananas and groundnuts. If the pain is severe, talk to a doctor.",
      pcm: "Period cramp dey happen when your womb dey squeeze to push out di blood. Put warm water bottle for your lower belle, drink plenty water, and rest well. If e too pain you, go see doctor.",
      ha: "Ciwon mara lokacin al'ada yana faruwa ne saboda matsewar mahaifa don fitar da jini. Gasa mara da ruwan dumi, sha ruwa mai tsafta, ki samu hutu. Idan ciwon ya yi tsanani, a tuntubi likita.",
      yo: "Ìrora nǹkan oṣù máa ń ṣẹlẹ̀ nígbà tí ilé-ọmọ bá ń rún láti lé ẹ̀jẹ̀ jáde. Fi omi gbígbóná fọ̀ ọ́, mu omi dáadáa, kí o sì sinmi. Tí ìrora náà bá pọ̀ ju, rí dọ́kítà.",
      ig: "Mgbu nsọ nwanyị na-eme mgbe akpa nwa na-agbaji iji wepụta ọbara. Tinye akwa nwere mmiri ọkụ na afọ gị, ṅụọ mmiri zuru ezu, ma zuru ike. Ọ bụrụ na mgbu ahụ siri ike, hụ dọkịta."
    },
    tired: {
      en: "Fatigue is very common in early pregnancy due to progesterone surges. Take plenty of rest, stay hydrated, and take a simple urine pregnancy test after your missed period.",
      pcm: "Body weakness dey happen quick-quick when pregnancy start. Rest well, drink clean water, and do pregnancy test if your period never come.",
      ha: "Gajiya da kasala abu ne da ke yawan faruwa a farkon ciki. Ki samu isasshen hutu, ki sha ruwa mai tsafta, kuma ki yi gwajin ciki.",
      yo: "Àárẹ̀ wọ́pọ̀ ní ìbẹ̀rẹ̀ oyún nítorí àwọn ìyípadà homonu. Sinmi dáadáa, mu omi, kí o sì ṣe àyẹ̀wò oyún.",
      ig: "Ike ọgwụgwụ na-adịkarị n’oge mbụ nke ime. Zuru ike nke ọma, ṅụọ mmiri, ma mee ule ime."
    },
    foods: {
      en: "Focus on iron and folate-rich local foods: spinach (efo tete / ugu), beans, eggs, fortified grains, and fresh fruits like oranges and mangoes.",
      pcm: "Chop food wey get iron and vitamins well: ugu leaf, beans, egg, fish, and sweet fruits like orange and pawpaw.",
      ha: "Ku ci abinci mai gina jiki mai ɗauke da sinadarin iron: ganyen alayyaho, wake, ƙwai, kifi, da 'ya'yan itace kamar lemu da mangwaro.",
      yo: "Jẹ oúnjẹ tó ní èròjà iron àti folate: ẹ̀fọ́ tẹ̀tẹ̀, ẹ̀wà, ẹyin, àti èso bíi ọsàn àti máńgòrò.",
      ig: "Rie nri ndị nwere iron na folate: akwụkwọ nri ugu, agwa, akwa, na mkpụrụ osisi dịka oroma na mangoro."
    },
    flushes: {
      en: "Hot flushes during perimenopause can be managed by wearing breathable cotton, staying hydrated, avoiding spicy triggers, and cooling down in shaded areas.",
      pcm: "Hot body for menopause: wear light clothes wey breeze fit enter, drink cold water, reduce pepper, and stay for cool place.",
      ha: "Za a iya magance zafin jiki na dainar haihuwa ta hanyar sanya tufafi masu sauƙi, shan ruwa, da guje wa abinci mai yaji sosai.",
      yo: "Wọ aṣọ fẹ́lẹ́fẹ́lẹ́ tó fàyè gba afẹ́fẹ́, mu omi tútù, dín ata kù, kí o sì wà ní àyè tútù.",
      ig: "Yiri uwe dị mfe, ṅụọ mmiri oyi, belata nri nwere ose, ma nọrọ n’ebe nwere ikuku dị jụụ."
    }
  };

  let currentDemoLang = 'en';
  let currentDemoQ = 'cramps';

  if (demoLangRow) {
    const langBtns = demoLangRow.querySelectorAll('button');
    langBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        langBtns.forEach((b) => {
          b.className = 'bg-white border border-gray-200 text-gray-700 px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer';
        });
        btn.className = 'bg-[#FF4288] text-white px-5 py-2 rounded-full text-sm font-semibold cursor-pointer shadow-sm transition-all';
        currentDemoLang = btn.getAttribute('data-lang') || 'en';
        updateDemoAnswer();
      });
    });
  }

  if (demoQuestionsList) {
    const qBtns = demoQuestionsList.querySelectorAll('button');
    qBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        qBtns.forEach((b) => {
          b.className = 'w-full text-left bg-white border border-gray-200 text-gray-600 px-4 py-3 rounded-2xl text-sm flex justify-between items-center hover:border-gray-300 hover:text-gray-900 transition-all cursor-pointer';
        });
        btn.className = 'w-full text-left bg-white border border-[#FF4288]/40 text-[#FF4288] px-4 py-3 rounded-2xl text-sm font-semibold flex justify-between items-center shadow-xs cursor-pointer';
        currentDemoQ = btn.getAttribute('data-q') || 'cramps';
        updateDemoAnswer();
      });
    });
  }

  function updateDemoAnswer() {
    if (!aiAnswerText) return;
    aiAnswerText.style.opacity = '0';
    setTimeout(() => {
      const text = answersByLang[currentDemoQ]?.[currentDemoLang] || answersByLang[currentDemoQ]?.['en'];
      aiAnswerText.innerText = text;
      aiAnswerText.style.opacity = '1';
    }, 150);
  }

  // 5. Audio Listen Button Animation
  const listenAudioBtn = document.getElementById('listenAudioBtn');
  let isPlaying = false;
  if (listenAudioBtn) {
    listenAudioBtn.addEventListener('click', () => {
      isPlaying = !isPlaying;
      if (isPlaying) {
        listenAudioBtn.innerHTML = '<span>Playing audio...</span> <span>⏸</span>';
        listenAudioBtn.classList.add('bg-[#FF4288]', 'text-white');
        setTimeout(() => {
          listenAudioBtn.innerHTML = '<span>Listen to answer</span> <svg fill="currentColor" height="12" viewBox="0 0 24 24" width="12"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>';
          listenAudioBtn.classList.remove('bg-[#FF4288]', 'text-white');
          isPlaying = false;
        }, 4000);
      } else {
        listenAudioBtn.innerHTML = '<span>Listen to answer</span> <svg fill="currentColor" height="12" viewBox="0 0 24 24" width="12"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>';
        listenAudioBtn.classList.remove('bg-[#FF4288]', 'text-white');
      }
    });
  }

  // 6. African Fruits Pregnancy Stepper Animation
  const fruitMilestones = [
    { week: 4, fruit: 'Poppy Seed (Taba)', weight: '0.1g', length: '1mm', tip: 'The blastocyst is implanting into the uterine wall.', icon: '🌱' },
    { week: 8, fruit: 'Garden Egg (Gauta / Igba)', weight: '1g', length: '1.6cm', tip: 'Tiny fingers, toes, and facial features are rapidly forming.', icon: '🍆' },
    { week: 12, fruit: 'African Star Apple (Agbalumo)', weight: '14g', length: '5.4cm', tip: 'Baby reflexes develop — fingers and toes can curl.', icon: '🍎' },
    { week: 20, fruit: 'Sweet Potato (Dankali)', weight: '300g', length: '16.5cm', tip: 'Your baby can now hear your voice. Keep eating well and rest.', icon: '🍠' },
    { week: 28, fruit: 'Ripe Mango (Mangwaro)', weight: '1kg', length: '37cm', tip: 'Eyes can open and close, and brain waves show sleep cycles.', icon: '🥭' },
    { week: 36, fruit: 'Papaya / Pawpaw (Gwanda)', weight: '2.6kg', length: '47cm', tip: 'Lungs are nearly mature and baby is practicing breathing.', icon: '🍈' },
    { week: 40, fruit: 'Watermelon (Kankana)', weight: '3.4kg', length: '51cm', tip: 'Full term! Your baby is ready to meet the world.', icon: '🍉' }
  ];

  let currentFruitIndex = 3; // Week 20
  const prevFruitBtn = document.getElementById('prevFruitBtn');
  const nextFruitBtn = document.getElementById('nextFruitBtn');
  const fruitIcon = document.getElementById('fruitIcon');
  const fruitName = document.getElementById('fruitName');
  const fruitWeight = document.getElementById('fruitWeight');
  const fruitLength = document.getElementById('fruitLength');
  const fruitTip = document.getElementById('fruitTip');
  const pregWeekTitle = document.getElementById('pregWeekTitle');
  const pregProgressBar = document.getElementById('pregProgressBar');
  const pregProgressThumb = document.getElementById('pregProgressThumb');

  function updateFruitView() {
    const item = fruitMilestones[currentFruitIndex];
    if (!item) return;

    if (fruitIcon) fruitIcon.innerText = item.icon;
    if (fruitName) fruitName.innerText = item.fruit;
    if (fruitWeight) fruitWeight.innerText = `Weight: ${item.weight}`;
    if (fruitLength) fruitLength.innerText = `Length: ${item.length}`;
    if (fruitTip) fruitTip.innerText = item.tip;
    if (pregWeekTitle) pregWeekTitle.innerText = `Week ${item.week}`;

    const percent = (item.week / 40) * 100;
    if (pregProgressBar) pregProgressBar.style.width = `${percent}%`;
    if (pregProgressThumb) pregProgressThumb.style.left = `${percent}%`;
  }

  if (prevFruitBtn) {
    prevFruitBtn.addEventListener('click', () => {
      if (currentFruitIndex > 0) {
        currentFruitIndex--;
        updateFruitView();
      }
    });
  }

  if (nextFruitBtn) {
    nextFruitBtn.addEventListener('click', () => {
      if (currentFruitIndex < fruitMilestones.length - 1) {
        currentFruitIndex++;
        updateFruitView();
      }
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
