/* ===========================================================
   ZAHERA — Comprehensive 5-Language Translation Engine
   Supports: English (EN), Nigerian Pidgin (PCM), Hausa (HA),
   Yorùbá (YO), Igbo (IG)
   Carries language preference via URL ?lang= parameter and localStorage
   =========================================================== */

const ZAHERA_LANGS = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'pcm', label: 'Pidgin', native: 'Naija Pidgin' },
  { code: 'ha', label: 'Hausa', native: 'Harshen Hausa' },
  { code: 'yo', label: 'Yorùbá', native: 'Èdè Yorùbá' },
  { code: 'ig', label: 'Igbo', native: 'Asụsụ Igbo' },
];

const ZAHERA_I18N = {
  en: {
    nav_home: 'Home',
    nav_features: 'Features',
    nav_about: 'About',
    nav_waitlist: 'Waitlist',
    nav_faq: 'FAQ',
    nav_contact: 'Contact',
    nav_cta: 'Join the waitlist',

    hero_eyebrow: 'AI health companion · Nigeria',
    hero_title_pre: 'Health answers that speak ',
    hero_title_em: 'your',
    hero_title_post: ' language.',
    hero_sub: 'Zahera is your AI health companion through puberty, pregnancy, and menopause — built for Nigerian women, in 5 local languages, working fully offline.',
    hero_cta_primary: 'Join the pilot waitlist',
    hero_cta_secondary: 'Explore features',

    stat_satisfaction: 'Satisfaction rate',
    stat_tested: 'Women tested',
    stat_langs: 'Local languages',
    stat_cities: 'Pilot cities',
    stat_waitlist: 'On the waitlist',

    problem_eyebrow: 'The problem',
    problem_text: '36 million Nigerian women of reproductive age lack trusted, private health information. The result? Unplanned pregnancies, undiagnosed complications, and late care-seeking. Global apps don’t speak Hausa, Yorùbá, or Igbo, ignore local cultural stigma, and fail without internet.',

    ai_sim_title: 'Test Zahera’s AI Live',
    ai_sim_sub: 'Try asking our clinical-backed assistant a real reproductive health question in your preferred language.',
    ai_sim_sample_label: 'Quick sample questions (Click to ask):',
    ai_sim_input_placeholder: 'Type your health question here...',
    ai_sim_voice_demo: 'Voice audio read-aloud enabled for low-literacy users.',

    calc_title: 'Interactive Cycle & Phase Tracker',
    calc_sub: 'Explore how Zahera calculates your cycle phases, ovulation window, and next period offline.',
    calc_label_date: 'First day of last period:',
    calc_label_length: 'Average cycle length (days):',
    calc_btn: 'Calculate my cycle',

    waitlist_counter_text: 'women already on the waitlist',
    waitlist_title: 'Be first to experience Zahera.',
    waitlist_sub: 'We are piloting first in Kaduna and Kano, with Lagos and Abuja coming next. Join today to secure early VIP access.',
    waitlist_email_placeholder: 'Enter your email address',
    waitlist_city_default: 'Select your city in Nigeria',
    waitlist_stage_default: 'Select your primary interest',
    waitlist_form_button: 'Get VIP Pilot Access',
    waitlist_success: '🎉 You are officially on the VIP list! Welcome to Zahera.',
    waitlist_note: 'No spam. Strictly one email when pilot access opens for your city.',

    footer_tagline: 'Your AI health companion. In your language. Even offline.',
    footer_disclaimer: 'Zahera provides general health and reproductive guidance developed with Nigerian clinicians and is not a replacement for emergency medical diagnosis or hospital care. Always consult qualified health professionals for urgent symptoms.',
  },

  pcm: {
    nav_home: 'Home',
    nav_features: 'Wetin Dey',
    nav_about: 'About Us',
    nav_waitlist: 'Waitlist',
    nav_faq: 'FAQ',
    nav_contact: 'Contact',
    nav_cta: 'Join di Waitlist',

    hero_eyebrow: 'AI health padi · Naija',
    hero_title_pre: 'Health answers wey dey talk ',
    hero_title_em: 'your own',
    hero_title_post: ' language.',
    hero_sub: 'Zahera na your AI health padi from puberty to belle (pregnancy) to menopause — e design for Naija women, for 5 local languages, e dey work sharp even without network.',
    hero_cta_primary: 'Join di pilot waitlist',
    hero_cta_secondary: 'See how e dey work',

    stat_satisfaction: 'Satisfaction score',
    stat_tested: 'Women wey test am',
    stat_langs: 'Local languages',
    stat_cities: 'Pilot cities',
    stat_waitlist: 'People wey dey wait',

    problem_eyebrow: 'Di Wahala',
    problem_text: 'Over 36 million Naija women no dey get proper, secret health advice wey dem trust. Dis dey cause unplanned belle, sickness wey dem no quickly notice, and shame to talk to doctor. Outside apps no sabi Pidgin, Hausa, Yorùbá, or Igbo, and dem dey off once network die.',

    ai_sim_title: 'Try Zahera AI Chat Now',
    ai_sim_sub: 'Ask any question about period, belle, or body changes make you see how e dey answer sharp sharp.',
    ai_sim_sample_label: 'Sample questions wey you fit click:',
    ai_sim_input_placeholder: 'Type your question for here...',
    ai_sim_voice_demo: 'Voice feature dey talk di answer loud for people wey no sabi read well.',

    calc_title: 'Interactive Cycle & Period Calculator',
    calc_sub: 'Check how Zahera dey calculate your ovulation and next period date offline.',
    calc_label_date: 'First day wey your last period start:',
    calc_label_length: 'How many days your cycle dey last:',
    calc_btn: 'Calculate my period date',

    waitlist_counter_text: 'women already dey wait for pilot',
    waitlist_title: 'Be di first person to use Zahera.',
    waitlist_sub: 'We dey start pilot for Kaduna and Kano first, then Lagos and Abuja next. Put your name make you enter early.',
    waitlist_email_placeholder: 'Put your email address',
    waitlist_city_default: 'Select your city for Naija',
    waitlist_stage_default: 'Wetin you wan use am do mostly?',
    waitlist_form_button: 'Join di VIP Waitlist',
    waitlist_success: '🎉 You don enter di VIP list — big thank you!',
    waitlist_note: 'No spam at all. Only one email wey we go send when your city open.',

    footer_tagline: 'Your AI health padi. For your language. Even without network.',
    footer_disclaimer: 'Zahera dey give health guidance wey our Naija doctor dem review, but e no be substitute for hospital emergency. If body seriously dey pain you, see doctor.',
  },

  ha: {
    nav_home: 'Gida',
    nav_features: 'Fasaloli',
    nav_about: 'Game da Mu',
    nav_waitlist: 'Jerin Jira',
    nav_faq: 'Tambayoyi',
    nav_contact: 'Tuntuɓe Mu',
    nav_cta: 'Shiga Jerin Jira',

    hero_eyebrow: 'Abokiyar lafiya ta AI · Najeriya',
    hero_title_pre: 'Amsoshin lafiya da ke magana da ',
    hero_title_em: 'harshenki',
    hero_title_post: '.',
    hero_sub: 'Zahera abokiyar lafiyarki ta AI ce daga balaga, lokacin ciki, har zuwa al\u2019adar tsayawa — an gina ta don matan Najeriya, cikin harsuna 5, tana aiki ko da babu intanet.',
    hero_cta_primary: 'Shiga jerin jiran gwaji',
    hero_cta_secondary: 'Duba yadda take aiki',

    stat_satisfaction: 'Matsayin gamsuwa',
    stat_tested: 'Matan da suka gwada',
    stat_langs: 'Harsunan gida',
    stat_cities: 'Garuruwan gwaji',
    stat_waitlist: 'Masu jiran fara amfani',

    problem_eyebrow: 'Babbar Matsala',
    problem_text: 'Fiye da mata miliyan 36 a Najeriya ba su da damar samun sahihan bayanan lafiyar haihuwa a asirce. Wannan yana haifar da samun ciki ba tare da shiri ba da jinkirin neman magani. Manhajojin waje ba sa jin Hausa ko fahimtar al\u2019adunmu, kuma suna dainawa in babu intanet.',

    ai_sim_title: 'Gwada Zahera AI Kai Tsaye',
    ai_sim_sub: 'Yi mata kowace tambaya game da jinin haila, ciki ko lafiyar mata cikin harshen Hausa.',
    ai_sim_sample_label: 'Misalan tambayoyi (Danna daya):',
    ai_sim_input_placeholder: 'Rubuta tambayarki a nan...',
    ai_sim_voice_demo: 'Tana iya karanta amsar da murya don wadanda ba su iya karatu sosai ba.',

    calc_title: 'Kalkuletan Lissafta Lokacin Haila',
    calc_sub: 'Duba yadda Zahera ke lissafin kwanakin haihuwa da ranar al\u2019ada ta gaba ba tare da intanet ba.',
    calc_label_date: 'Ranar farko ta hailar da ta gabata:',
    calc_label_length: 'Tsawon kwanakin zagayowar haila:',
    calc_btn: 'Lissafta min kwanaki',

    waitlist_counter_text: 'mata ke cikin jerin jira',
    waitlist_title: 'Kasance na farko da zai gwada Zahera.',
    waitlist_sub: 'Muna fara gwaji a Kaduna da Kano, sannan Lagos da Abuja. Yi rajista yanzu.',
    waitlist_email_placeholder: 'Shigar da adireshin imel dinki',
    waitlist_city_default: 'Zabi garinki a Najeriya',
    waitlist_stage_default: 'Babban abin da kike bukata',
    waitlist_form_button: 'Shiga Jerin VIP',
    waitlist_success: '🎉 An saka ki a jerin VIP cikin nasara — mun gode!',
    waitlist_note: 'Babu sakonnin banza. Sakon imel daya kawai idan gwaji ya bude.',

    footer_tagline: 'Abokiyar lafiyarki ta AI. Cikin harshenki. Ko da babu intanet.',
    footer_disclaimer: 'Zahera tana ba da ingantaccen bayani da likitocin Najeriya suka duba, amma ba madadin likita a asibiti ba ne idan matsalar gaggawa ta taso.',
  },

  yo: {
    nav_home: 'Ile',
    nav_features: 'Awọn Ẹya',
    nav_about: 'Nipa Wa',
    nav_waitlist: 'Àkọsílẹ̀ Ìdúró',
    nav_faq: 'Ìbéèrè',
    nav_contact: 'Kan Si Wa',
    nav_cta: 'Darapọ̀ mọ́ Àkọsílẹ̀',

    hero_eyebrow: 'Alábàáṣiṣẹ́pọ̀ ilera AI · Nàìjíríà',
    hero_title_pre: 'Ìdáhùn ilera tí ó ń sọ èdè ',
    hero_title_em: 'rẹ',
    hero_title_post: '.',
    hero_sub: 'Zahera ni alábàáṣiṣẹ́pọ̀ ilera AI rẹ láti ìgbà èwe títí dé oyun àti menopause — tí a kọ́ fún àwọn obìnrin Nàìjíríà, ní èdè márùn-ún, tí ó ń ṣiṣẹ́ láìsí ayélujára pàápàá.',
    hero_cta_primary: 'Darapọ̀ mọ́ àkọsílẹ̀ ìdúró',
    hero_cta_secondary: 'Wo bí ó ṣe ń ṣiṣẹ́',

    stat_satisfaction: 'Ìwọ̀n ìtẹ́lọ́rùn',
    stat_tested: 'Àwọn obìnrin tó dán an wò',
    stat_langs: 'Àwọn èdè agbègbè',
    stat_cities: 'Àwọn ìlú ìdánwò',
    stat_waitlist: 'Àwọn tó wà lórí àkọsílẹ̀',

    problem_eyebrow: 'Ìṣòro Náà',
    problem_text: 'Àwọn obìnrin Nàìjíríà tó lé ní mílíọ̀nù 36 kò ní àǹfààní sí ìsọfúnni ilera tó ṣeé gbẹ́kẹ̀lé ní ìkọ̀kọ̀. Èyí ń fa oyún àìròtẹ́lẹ̀ àti àìtètè mọ àwọn àìsàn. Àwọn ohun èlò àjèjì kò gbọ́ Yorùbá, wọn kò sì ṣiṣẹ́ láìsí ayélujára.',

    ai_sim_title: 'Dán AI Zahera Wò Lójúkojú',
    ai_sim_sub: 'Béèrè ìbéèrè ilera ní èdè Yorùbá kí o sì rí bí yóò ṣe fún ọ ní ìdáhùn tó péye.',
    ai_sim_sample_label: 'Àpẹẹrẹ àwọn ìbéèrè (Tẹ ọ̀kan):',
    ai_sim_input_placeholder: 'Kọ ìbéèrè rẹ síbí...',
    ai_sim_voice_demo: 'Ó lè ka ìdáhùn jáde ní ohùn fún àwọn tí kò mọ̀wé kà dáadáa.',

    calc_title: 'Kálíkúlétọ̀ Ìṣirò Nǹkan Oṣù',
    calc_sub: 'Wo bí Zahera ṣe ń ṣírò ọjọ́ oyún àti nǹkan oṣù tó ń bọ̀ láìsí ayélujára.',
    calc_label_date: 'Ọjọ́ àkọ́kọ́ ti nǹkan oṣù tó kọjá:',
    calc_label_length: 'Iye ọjọ́ tí nǹkan oṣù rẹ máa ń gbà:',
    calc_btn: 'Ṣírò ọjọ́ mi fún mi',

    waitlist_counter_text: 'obìnrin ti wà lórí àkọsílẹ̀',
    waitlist_title: 'Jẹ́ ẹni àkọ́kọ́ láti dán Zahera wò.',
    waitlist_sub: 'A ń bẹ̀rẹ̀ ní Kaduna àti Kano, lẹ́yìn náà Lagos àti Abuja. Forúkọsílẹ̀ báyìí.',
    waitlist_email_placeholder: 'Tẹ ímeèlì rẹ síbí',
    waitlist_city_default: 'Yan ìlú rẹ ní Nàìjíríà',
    waitlist_stage_default: 'Kí ni ohun pàtàkì tí o fẹ́ lò ó fún?',
    waitlist_form_button: 'Darapọ̀ mọ́ VIP',
    waitlist_success: '🎉 A ti fi ọ́ sí àkọsílẹ̀ VIP — a dúpẹ́ púpọ̀!',
    waitlist_note: 'Kò sí spam rárá. Ímeèlì kan ṣoṣo nígbà tí ìlú rẹ bá ṣí.',

    footer_tagline: 'Alábàáṣiṣẹ́pọ̀ ilera AI rẹ. Ní èdè rẹ. Láìsí ayélujára pàápàá.',
    footer_disclaimer: 'Zahera ń pèsè ìmọ̀ràn ilera tí àwọn dọ́kítà Nàìjíríà yẹ̀ wò, ṣùgbọ́n kì í ṣe rípò dọ́kítà ilé ìwòsàn nígbà pàjáwìrì.',
  },

  ig: {
    nav_home: 'Ụlọ',
    nav_features: 'Àtụmàtụ',
    nav_about: 'Gbasara Anyị',
    nav_waitlist: 'Ndepụta Ndị Chere',
    nav_faq: 'Ajụjụ',
    nav_contact: 'Kpọtụrụ Anyị',
    nav_cta: 'Sonye na Ndepụta',

    hero_eyebrow: 'Enyi ahụike AI · Naịjịrịa',
    hero_title_pre: 'Àzịza ahụike na-asụ ',
    hero_title_em: 'asụsụ gị',
    hero_title_post: '.',
    hero_sub: 'Zahera bụ enyi ahụike AI gị site na ntorobịa ruo ime na nkwụsị nsọ — e wuru ya maka ụmụ nwanyị Naịjịrịa, n’asụsụ ise, na-arụ ọrụ ọbụna na-enweghị ịntanetị.',
    hero_cta_primary: 'Sonye na ndepụta pilot',
    hero_cta_secondary: 'Lee ka ọ si arụ ọrụ',

    stat_satisfaction: 'Ọnụ ọgụgụ afọ ojuju',
    stat_tested: 'Ụmụ nwanyị nwalere ya',
    stat_langs: 'Asụsụ obodo',
    stat_cities: 'Obodo ndị mbụ',
    stat_waitlist: 'Ndị nọ na ndepụta',

    problem_eyebrow: 'Nsogbu Dị Ukwuu',
    problem_text: 'Ihe karịrị ụmụ nwanyị Naịjịrịa nde 36 enweghị ozi ahụike ziri ezi na nzuzo. Nke a na-ebute ime na-achọghị na nchọpụta ngwa ngwa nke ọrịa. Ngwa ndị si mba ofesi anaghị asụ Igbo, ha anaghịkwa arụ ọrụ na-enweghị netwọk.',

    ai_sim_title: 'Nwalee Zahera AI Ugbu A',
    ai_sim_sub: 'Jụọ ajụjụ gbasara nsọ nwanyị, ime ma ọ bụ ahụike n’asụsụ Igbo.',
    ai_sim_sample_label: 'Ọmụmaatụ ajụjụ (Pịa otu):',
    ai_sim_input_placeholder: 'Pịa ajụjụ gị ebe a...',
    ai_sim_voice_demo: 'O nwere ike ịgụrụ gị azịza ya n’olu maka ndị na-anaghị agụ nke ọma.',

    calc_title: 'Ngwa Ịgụta Oge Nsọ Nwanyị',
    calc_sub: 'Lee ka Zahera si agbakọ oge ọmụmụ na nsọ nwanyị na-esote na-enweghị ịntanetị.',
    calc_label_date: 'Ụbọchị mbụ nsọ ikpeazụ gị bidoro:',
    calc_label_length: 'Ọnụ ọgụgụ ụbọchị ọ na-ewe gị:',
    calc_btn: 'Gbakọọ ụbọchị m',

    waitlist_counter_text: 'ụmụ nwanyị na-eche ugbu a',
    waitlist_title: 'Bụrụ onye mbụ ga-anwale Zahera.',
    waitlist_sub: 'Anyị na-amalite na Kaduna na Kano, Lagos na Abuja na-esote. Debanye aha ugbu a.',
    waitlist_email_placeholder: 'Tinye email gị',
    waitlist_city_default: 'Họrọ obodo gị na Naịjịrịa',
    waitlist_stage_default: 'Gịnị bụ isi ihe ị chọrọ?',
    waitlist_form_button: 'Sonye na Ndepụta VIP',
    waitlist_success: '🎉 Anyị etinyela gị na ndepụta VIP — daalụ nke ukwuu!',
    waitlist_note: 'Enweghị ozi na-abaghị uru. Otu email naanị mgbe obodo gị meghere.',

    footer_tagline: 'Enyi ahụike AI gị. N’asụsụ gị. Ọbụna na-enweghị ịntanetị.',
    footer_disclaimer: 'Zahera na-enye ndụmọdụ ahụike nke ndị dọkịta Naịjịrịa nyochara, mana ọ bụghị nnọchi maka dọkịta n’ụlọ ọgwụ na mberede.',
  },
};

// Language Helpers
function zaheraGetLang() {
  const params = new URLSearchParams(window.location.search);
  const fromUrl = params.get('lang');
  if (fromUrl && ZAHERA_I18N[fromUrl]) return fromUrl;
  const stored = localStorage.getItem('zahera_lang');
  if (stored && ZAHERA_I18N[stored]) return stored;
  return 'en';
}

function zaheraSetLang(lang) {
  if (!ZAHERA_I18N[lang]) lang = 'en';
  localStorage.setItem('zahera_lang', lang);

  // Update current URL without reload
  const url = new URL(window.location.href);
  url.searchParams.set('lang', lang);
  window.history.replaceState({}, '', url.toString());

  // Update internal links
  document.querySelectorAll('a[data-internal]').forEach((link) => {
    try {
      const u = new URL(link.getAttribute('href'), window.location.href);
      u.searchParams.set('lang', lang);
      link.setAttribute('href', u.pathname.split('/').pop() + u.search + u.hash);
    } catch (e) {}
  });

  zaheraApplyLang(lang);
}

function zaheraApplyLang(lang) {
  const dict = ZAHERA_I18N[lang] || ZAHERA_I18N.en;

  // Text content replacements
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // Placeholder replacements
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Update language button label
  const btnLabel = document.getElementById('langBtnLabel');
  if (btnLabel) {
    btnLabel.textContent = lang.toUpperCase();
  }

  // Update language menu active states
  document.querySelectorAll('.lang-menu button').forEach((btn) => {
    const code = btn.getAttribute('data-lang');
    if (code === lang) {
      btn.classList.add('active-lang');
    } else {
      btn.classList.remove('active-lang');
    }
  });

  document.documentElement.setAttribute('lang', lang);
}

// Build Language Menu
document.addEventListener('DOMContentLoaded', () => {
  const langMenu = document.getElementById('langMenu');
  if (langMenu) {
    langMenu.innerHTML = '';
    ZAHERA_LANGS.forEach((item) => {
      const b = document.createElement('button');
      b.setAttribute('data-lang', item.code);
      b.innerHTML = `<span>${item.native}</span><strong>${item.code.toUpperCase()}</strong>`;
      b.addEventListener('click', () => {
        zaheraSetLang(item.code);
        langMenu.classList.remove('open');
      });
      langMenu.appendChild(b);
    });
  }

  const initialLang = zaheraGetLang();
  zaheraSetLang(initialLang);
});
