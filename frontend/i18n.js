const translations = {
  en: {
    skip: 'Skip to content',
    nav: {
      mission: 'Mission', programs: 'Programs', impact: 'Impact',
      volunteer: 'Volunteer', contact: 'Contact', cta: 'Become a volunteer'
    },
    hero: {
      eyebrow: 'Taipei · English storytelling · Hands-on STEM',
      title: 'Every story starts a spark.',
      sub: 'Arise is an AI-enhanced STEM Story Lab. Our volunteers read English picture books to elementary school kids in libraries and classrooms across Taipei, then turn the page into a hands-on science experiment — the story doesn\u2019t end at "the end."',
      cta1: 'Volunteer with us', cta2: 'See how it works'
    },
    mission: {
      eyebrow: 'Our mission',
      title: 'Story is the hook. Science is the follow-through.',
      lead: 'Kids in under-resourced schools and neighborhood libraries often meet English only as a subject to be tested on. Arise gives them a reason to lean in: a story worth hearing, read aloud by a volunteer who\u2019s excited to be there, followed by an activity that lets them build, test, and ask "why."'
    },
    pillar: {
      story: { title: 'Story', body: 'Volunteers read English picture books aloud, using voice and pacing to make new vocabulary land without a single worksheet.' },
      science: { title: 'Science', body: 'Every book pairs with a simple experiment or build tied to what happened in the story — gravity, buoyancy, circuits, weather, and more.' },
      community: { title: 'Community', body: 'Sessions run in partnership with local libraries and schools, so the same kids see the same volunteers, week after week.' }
    },
    programs: {
      eyebrow: 'What we do',
      title: 'A session, page by page',
      step1: { title: 'Read', body: 'A volunteer reads a picture book aloud in English, chosen for the school\u2019s grade level and the science idea it sets up — a book about the ocean before a lesson on buoyancy, a book about seeds before one on plant growth.' },
      step2: { title: 'Ask', body: 'Kids predict what happens next, in English where they can and in Mandarin where they can\u2019t yet — we meet them where they are.' },
      step3: { title: 'Build', body: 'A short hands-on activity turns the book\u2019s idea into something they can touch: a paper boat that has to hold coins, a circuit that has to light a tiny bulb.' },
      step4: { title: 'Extend', body: 'AI-generated story prompts let kids continue the book in their own words, turning new vocabulary into something they authored themselves, not just heard.' }
    },
    impact: {
      eyebrow: 'Since we started',
      title: 'The numbers so far',
      stat1: 'Partner schools & libraries', stat2: 'Kids reached',
      stat3: 'Active volunteers', stat4: 'Story-and-science sessions run',
      note: 'Placeholder figures — swap in your real numbers before launch.'
    },
    volunteer: {
      eyebrow: 'Get involved',
      title: 'Read a page. Spark a scientist.',
      lead: 'No teaching degree required — just a willingness to read out loud with a bit of drama and help a table of eight-year-olds build something messy. We\u2019ll train you on the format and pair you with a session near you.',
      li1: { label: 'Time:', body: 'most sessions run 60\u201390 minutes, once or twice a month.' },
      li2: { label: 'Where:', body: 'partner elementary schools and public libraries across Taipei.' },
      li3: { label: 'Language:', body: 'comfortable spoken English; Mandarin is a bonus, not a requirement.' }
    },
    form: {
      title: 'Sign up to volunteer',
      name: 'Full name', email: 'Email', phone: 'Phone',
      area: 'Where in Taipei are you based?', areaPlaceholder: "e.g. Da'an, Xinyi, Banqiao",
      interestsLegend: 'What would you like to help with?',
      interest1: 'Storytelling', interest2: 'STEM activities',
      interest3: 'Event & logistics support', interest4: 'Translation (EN/ZH)',
      availability: 'Availability', selectOne: 'Select one',
      avail1: 'Weekday mornings', avail2: 'Weekday afternoons', avail3: 'Weekday evenings',
      avail4: 'Weekends', avail5: 'Flexible',
      message: 'Anything else we should know?',
      messagePlaceholder: 'Past experience with kids, teaching, or STEM — totally optional.',
      submit: 'Submit application',
      statusMissing: 'Please fill in your name and email.',
      statusSuccess: 'Thanks! We\u2019ll be in touch soon.',
      statusError: 'Couldn\u2019t reach the server. Is the backend running? See README for setup.',
      submitting: 'Submitting…'
    },
    footer: {
      tagline: 'AI-Enhanced STEM Story Lab', contact: 'Contact', location: 'Taipei, Taiwan',
      explore: 'Explore', copyright1: '\u00A9', copyright2: 'Arise Story Lab. Made with volunteers, for kids.'
    }
  },
  zh: {
    skip: '跳到主要內容',
    nav: {
      mission: '關於我們', programs: '活動內容', impact: '成果',
      volunteer: '志工招募', contact: '聯絡我們', cta: '成為志工'
    },
    hero: {
      eyebrow: '台北 · 英語說故事 · 動手做科學',
      title: '一個故事,一顆火花。',
      sub: 'Arise 是結合 AI 的 STEM 說故事實驗室。我們的志工在台北各地的圖書館與教室,用英語為國小學童朗讀繪本,再把故事翻到下一頁——變成一場動手實驗,故事並沒有在「結局」結束。',
      cta1: '成為志工', cta2: '看看怎麼運作'
    },
    mission: {
      eyebrow: '我們的使命',
      title: '故事是引子,科學是延續。',
      lead: '資源較少的學校與社區圖書館裡,孩子接觸英語常常只是為了考試。Arise 讓他們有理由主動投入:一個值得聆聽的故事,由充滿熱情的志工朗讀,接著透過活動讓他們動手做、動手試、勇於問「為什麼」。'
    },
    pillar: {
      story: { title: '故事', body: '志工用英語朗讀繪本,透過聲音與節奏,讓新單字自然而然地被記住,不需要任何學習單。' },
      science: { title: '科學', body: '每本繪本都搭配一個簡單的實驗或動手活動,呼應故事情節——重力、浮力、電路、天氣等等。' },
      community: { title: '社群', body: '活動與在地圖書館及學校合作舉辦,讓同一群孩子每週都能見到同樣的志工。' }
    },
    programs: {
      eyebrow: '活動內容',
      title: '一場活動,一頁一頁展開',
      step1: { title: '朗讀', body: '志工用英語朗讀繪本,依學校年級與故事帶出的科學概念挑選書目——例如講海洋的書之後接浮力課,講種子的書之後接植物生長課。' },
      step2: { title: '提問', body: '孩子預測接下來會發生什麼,能用英語就用英語,還不行就用中文——我們配合他們目前的程度。' },
      step3: { title: '動手做', body: '簡短的動手活動,把書中的概念變成孩子能親手操作的東西:要撐住硬幣的紙船、要點亮小燈泡的電路。' },
      step4: { title: '延伸', body: 'AI 產生的故事提示,讓孩子用自己的話延續故事,把新學到的單字變成自己創作的內容,而不只是聽過而已。' }
    },
    impact: {
      eyebrow: '成立至今',
      title: '目前的成果',
      stat1: '合作學校與圖書館', stat2: '服務學童人數',
      stat3: '活躍志工人數', stat4: '舉辦場次',
      note: '以上為示意數字——上線前請換成實際數據。'
    },
    volunteer: {
      eyebrow: '加入我們',
      title: '朗讀一頁書,點燃一位小小科學家。',
      lead: '不需要教學背景——只要願意帶點戲劇效果朗讀,並協助一桌八歲小朋友動手做東西(可能會有點亂)。我們會提供培訓,並為你配對鄰近的場次。',
      li1: { label: '時間:', body: '大多數場次為 60–90 分鐘,每月一到兩次。' },
      li2: { label: '地點:', body: '台北各合作國小與公共圖書館。' },
      li3: { label: '語言:', body: '能以英語流暢溝通即可;會中文是加分,非必要條件。' }
    },
    form: {
      title: '志工報名表',
      name: '姓名', email: '電子郵件', phone: '電話',
      area: '你在台北的哪個區域?', areaPlaceholder: '例如:大安、信義、板橋',
      interestsLegend: '你想協助哪個部分?',
      interest1: '說故事', interest2: 'STEM 活動',
      interest3: '活動與後勤支援', interest4: '翻譯(中英)',
      availability: '方便的時段', selectOne: '請選擇',
      avail1: '平日上午', avail2: '平日下午', avail3: '平日晚上',
      avail4: '週末', avail5: '時間彈性',
      message: '還有什麼想讓我們知道的嗎?',
      messagePlaceholder: '過去與孩童相處、教學或 STEM 相關的經驗——非必填。',
      submit: '送出報名',
      statusMissing: '請填寫姓名與電子郵件。',
      statusSuccess: '謝謝報名!我們會盡快與你聯繫。',
      statusError: '無法連上伺服器,後端是否已啟動?請參考 README。',
      submitting: '送出中…'
    },
    footer: {
      tagline: 'AI 賦能 STEM 說故事實驗室', contact: '聯絡我們', location: '台灣台北',
      explore: '快速連結', copyright1: '\u00A9', copyright2: 'Arise Story Lab,由志工打造,為孩子而生。'
    }
  }
};

function getPath(obj, path) {
  return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), obj);
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;
  document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = getPath(dict, el.getAttribute('data-i18n'));
    if (value !== null) el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const value = getPath(dict, el.getAttribute('data-i18n-placeholder'));
    if (value !== null) el.setAttribute('placeholder', value);
  });

  window.__ariseLang = lang;
  window.__ariseDict = dict;
  try { localStorage.setItem('arise-lang', lang); } catch (err) {}
}

document.addEventListener('DOMContentLoaded', () => {
  let saved = 'en';
  try { saved = localStorage.getItem('arise-lang') || 'en'; } catch (err) {}
  applyLanguage(saved);

  const toggle = document.getElementById('langToggle');
  toggle.addEventListener('click', () => {
    const next = window.__ariseLang === 'en' ? 'zh' : 'en';
    applyLanguage(next);
  });
});
