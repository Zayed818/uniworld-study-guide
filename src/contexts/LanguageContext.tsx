import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'uz' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navbar
    'nav.universities': 'Universities',
    'nav.programs': 'Programs',
    'nav.about': 'About',
    'nav.support': 'Support',
    'nav.login': 'Log In',
    'nav.register': 'Register',
    
    // Homepage Hero
    'hero.title': 'Find Your Dream University and Scholarship',
    'hero.subtitle': 'From Tashkent to Toronto — join thousands of students who turned their study abroad dream into reality.',
    'hero.search.placeholder': 'Search by university, program, or country',
    'hero.filter.destination': 'Country',
    'hero.filter.degree': 'Degree Level',
    'hero.filter.field': 'Field of Study',
    'hero.filter.intake': 'Intake Date',
    'hero.cta': 'See My Best Matches',
    
    // Trust Stats
    'stats.students': '50,000+ Students Guided',
    'stats.success': '95% Success Rate',
    'stats.scholarships': '5,000+ Scholarships',
    
    // How It Works
    'how.title': 'How It Works',
    'how.step1.title': 'Choose Your Path',
    'how.step1.desc': 'Select your desired country and degree level',
    'how.step2.title': 'See Your Matches',
    'how.step2.desc': 'Get personalized university and scholarship recommendations',
    'how.step3.title': 'Apply or Get Help',
    'how.step3.desc': 'Apply yourself or connect with expert consultants',
    
    // Dual Pathway
    'pathway.diy.title': 'Apply Yourself',
    'pathway.diy.desc': 'Search, compare, and apply directly to universities',
    'pathway.diy.cta': 'Start Searching',
    'pathway.consulting.title': 'Get Expert Help',
    'pathway.consulting.desc': 'Free consultation with trusted education agencies',
    'pathway.consulting.cta': 'Book Consultation',
    
    // Scholarships & Careers
    'scholarships.title': 'Unlock 5,000+ Scholarships',
    'scholarships.desc': 'Discover funding opportunities tailored to your profile',
    'scholarships.cta': 'Browse Scholarships',
    'careers.title': 'See What Your Degree is Worth',
    'careers.desc': 'Explore real salaries and career pathways for your field',
    'careers.cta': 'Explore Careers',
    
    // Highlights
    'highlight.verified.title': 'Verified Universities',
    'highlight.verified.desc': 'All partner universities are thoroughly vetted and accredited',
    'highlight.scholarships.title': 'Scholarships Available',
    'highlight.scholarships.desc': 'Access thousands of funding opportunities worldwide',
    'highlight.trusted.title': 'Trusted by Students',
    'highlight.trusted.desc': 'Join 10,000+ students who found their perfect match',
    'highlight.easy.title': 'Apply in 3 Steps',
    'highlight.easy.desc': 'Simple application process with expert guidance',
    
    // CTA
    'cta.sticky': 'Find My Dream University',
    
    // Countries
    'country.usa': 'United States',
    'country.uk': 'United Kingdom',
    'country.canada': 'Canada',
    'country.australia': 'Australia',
    'country.germany': 'Germany',
    
    // Degree Types
    'degree.certificate': 'Certificate',
    'degree.diploma': 'Diploma',
    'degree.bachelor': "Bachelor's",
    'degree.master': "Master's",
    'degree.phd': 'PhD',
  },
  uz: {
    // Navbar
    'nav.universities': 'Universitetlar',
    'nav.programs': 'Dasturlar',
    'nav.about': 'Biz haqimizda',
    'nav.support': 'Yordam',
    'nav.login': 'Kirish',
    'nav.register': "Ro'yxatdan o'tish",
    
    // Homepage Hero
    'hero.title': 'Orzuingizdagi Universitet va Grantni Toping',
    'hero.subtitle': "Toshkentdan Torontogacha — o'z xorijda ta'lim olish orzusini haqiqatga aylantirgan minglab talabalarga qo'shiling.",
    'hero.search.placeholder': 'Universitet, dastur yoki davlat bo\'yicha qidirish',
    'hero.filter.destination': 'Davlat',
    'hero.filter.degree': 'Daraja',
    'hero.filter.field': "Ta'lim yo'nalishi",
    'hero.filter.intake': 'Qabul sanasi',
    'hero.cta': 'Eng Yaxshi Mosliklarni Ko\'ring',
    
    // Trust Stats
    'stats.students': "50,000+ Talabaga Yo'l Ko'rsatildi",
    'stats.success': "95% Muvaffaqiyat Ko'rsatkichi",
    'stats.scholarships': '5,000+ Grant',
    
    // How It Works
    'how.title': 'Qanday Ishlaydi',
    'how.step1.title': "Yo'lingizni Tanlang",
    'how.step1.desc': 'Istagan davlat va ta\'lim darajasini tanlang',
    'how.step2.title': 'Mosliklaringizni Ko\'ring',
    'how.step2.desc': 'Shaxsiy universitet va grant tavsiyalarini oling',
    'how.step3.title': 'Ariza Yuboring yoki Yordam Oling',
    'how.step3.desc': "O'zingiz ariza yuboring yoki mutaxassis maslahatchilar bilan bog'laning",
    
    // Dual Pathway
    'pathway.diy.title': "O'zingiz Ariza Yuboring",
    'pathway.diy.desc': "Qidiring, solishtiring va universitetlarga to'g'ridan-to'g'ri ariza yuboring",
    'pathway.diy.cta': 'Qidirishni Boshlang',
    'pathway.consulting.title': 'Mutaxassis Yordamini Oling',
    'pathway.consulting.desc': "Ishonchli ta'lim agentliklari bilan bepul maslahat",
    'pathway.consulting.cta': "Maslahat Buyurtma Qiling",
    
    // Scholarships & Careers
    'scholarships.title': '5,000+ Grantni Oching',
    'scholarships.desc': "Profilingizga moslashtirilgan moliyaviy imkoniyatlarni kashf eting",
    'scholarships.cta': 'Grantlarni Ko\'ring',
    'careers.title': "Diplomingiz Qancha Turadi",
    'careers.desc': "Yo'nalishingizdagi haqiqiy ish haqi va martaba yo'llarini o'rganing",
    'careers.cta': "Martabalarni O'rganing",
    
    // Highlights
    'highlight.verified.title': 'Tasdiqlangan Universitetlar',
    'highlight.verified.desc': "Barcha hamkor universitetlar to'liq tekshirilgan va akkreditatsiyalangan",
    'highlight.scholarships.title': 'Grantlar Mavjud',
    'highlight.scholarships.desc': "Butun dunyo bo'ylab minglab moliyaviy imkoniyatlarga kirish",
    'highlight.trusted.title': 'Talabalar Ishonadi',
    'highlight.trusted.desc': "10,000+ talaba o'z mukammal mosligini topdi",
    'highlight.easy.title': '3 Bosqichda Ariza',
    'highlight.easy.desc': "Mutaxassis yo'l-yo'riq bilan oddiy ariza jarayoni",
    
    // CTA
    'cta.sticky': 'Orzuimdagi Universitetni Topish',
    
    // Countries
    'country.usa': 'Amerika Qo\'shma Shtatlari',
    'country.uk': 'Buyuk Britaniya',
    'country.canada': 'Kanada',
    'country.australia': 'Avstraliya',
    'country.germany': 'Germaniya',
    
    // Degree Types
    'degree.certificate': 'Sertifikat',
    'degree.diploma': 'Diplom',
    'degree.bachelor': 'Bakalavr',
    'degree.master': 'Magistr',
    'degree.phd': 'PhD',
  },
  ru: {
    // Navbar
    'nav.universities': 'Университеты',
    'nav.programs': 'Программы',
    'nav.about': 'О нас',
    'nav.support': 'Поддержка',
    'nav.login': 'Войти',
    'nav.register': 'Регистрация',
    
    // Homepage Hero
    'hero.title': 'Найдите Университет и Стипендию Вашей Мечты',
    'hero.subtitle': 'От Ташкента до Торонто — присоединяйтесь к тысячам студентов, воплотивших свою мечту об учебе за рубежом.',
    'hero.search.placeholder': 'Поиск по университету, программе или стране',
    'hero.filter.destination': 'Страна',
    'hero.filter.degree': 'Степень',
    'hero.filter.field': 'Область обучения',
    'hero.filter.intake': 'Дата поступления',
    'hero.cta': 'Показать Лучшие Совпадения',
    
    // Trust Stats
    'stats.students': '50,000+ Студентов',
    'stats.success': '95% Успешности',
    'stats.scholarships': '5,000+ Стипендий',
    
    // How It Works
    'how.title': 'Как Это Работает',
    'how.step1.title': 'Выберите Путь',
    'how.step1.desc': 'Выберите желаемую страну и степень образования',
    'how.step2.title': 'Смотрите Совпадения',
    'how.step2.desc': 'Получите персональные рекомендации университетов и стипендий',
    'how.step3.title': 'Подайте Заявку или Получите Помощь',
    'how.step3.desc': 'Подайте заявку самостоятельно или свяжитесь с экспертами-консультантами',
    
    // Dual Pathway
    'pathway.diy.title': 'Подайте Сами',
    'pathway.diy.desc': 'Ищите, сравнивайте и подавайте заявки напрямую в университеты',
    'pathway.diy.cta': 'Начать Поиск',
    'pathway.consulting.title': 'Получите Помощь Эксперта',
    'pathway.consulting.desc': 'Бесплатная консультация с проверенными образовательными агентствами',
    'pathway.consulting.cta': 'Записаться на Консультацию',
    
    // Scholarships & Careers
    'scholarships.title': 'Откройте 5,000+ Стипендий',
    'scholarships.desc': 'Находите возможности финансирования, адаптированные под ваш профиль',
    'scholarships.cta': 'Просмотреть Стипендии',
    'careers.title': 'Узнайте Стоимость Вашей Степени',
    'careers.desc': 'Изучите реальные зарплаты и карьерные пути в вашей области',
    'careers.cta': 'Изучить Карьеры',
    
    // Highlights
    'highlight.verified.title': 'Проверенные Университеты',
    'highlight.verified.desc': 'Все университеты-партнеры тщательно проверены и аккредитованы',
    'highlight.scholarships.title': 'Доступные Стипендии',
    'highlight.scholarships.desc': 'Доступ к тысячам возможностей финансирования по всему миру',
    'highlight.trusted.title': 'Доверие Студентов',
    'highlight.trusted.desc': '10,000+ студентов нашли идеальный вариант',
    'highlight.easy.title': 'Подайте За 3 Шага',
    'highlight.easy.desc': 'Простой процесс подачи заявки с экспертным руководством',
    
    // CTA
    'cta.sticky': 'Найти Университет Мечты',
    
    // Countries
    'country.usa': 'Соединенные Штаты',
    'country.uk': 'Великобритания',
    'country.canada': 'Канада',
    'country.australia': 'Австралия',
    'country.germany': 'Германия',
    
    // Degree Types
    'degree.certificate': 'Сертификат',
    'degree.diploma': 'Диплом',
    'degree.bachelor': 'Бакалавр',
    'degree.master': 'Магистр',
    'degree.phd': 'PhD',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem('language');
    return (stored as Language) || 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
