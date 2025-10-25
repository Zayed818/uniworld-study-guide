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
    'nav.findPrograms': 'Find Programs',
    'nav.universities': 'Universities',
    'nav.scholarships': 'Scholarships',
    'nav.careers': 'Careers',
    'nav.getSupport': 'Get Support',
    'nav.faq': 'FAQ',
    'nav.login': 'Log In',
    'nav.register': 'Sign Up',
    'nav.stickyCta': 'Find My Dream University',
    
    // Hero Section
    'hero.title': 'Find Your Dream University and Scholarship',
    'hero.subtitle': 'From Tashkent to Toronto — join thousands of students who turned their study abroad dream into reality.',
    'hero.country.placeholder': 'Select Country',
    'hero.degree.placeholder': 'Choose Degree Level',
    'hero.cta': 'See My Best Matches',
    
    // Trust Stats
    'stats.students': '50K+ students guided',
    'stats.success': '95% success rate',
    'stats.scholarships': '5,000+ scholarships',
    
    // Advantages Section
    'advantages.title': 'Why Students Choose StudyPath',
    'advantages.personalized.title': 'Personalized Matches',
    'advantages.personalized.desc': 'Get universities and scholarships tailored to your profile.',
    'advantages.trusted.title': 'Trusted Support',
    'advantages.trusted.desc': 'Verified partners and programs you can rely on.',
    'advantages.save.title': 'Save Time & Effort',
    'advantages.save.desc': 'One platform for programs, scholarships, and career guidance.',
    'advantages.smart.title': 'Smart Decisions',
    'advantages.smart.desc': 'Compare options, track deadlines, and plan your future with confidence.',
    
    // How It Works
    'how.title': 'How It Works',
    'how.step1.title': 'Choose Your Path',
    'how.step1.desc': 'Select your country & degree level',
    'how.step2.title': 'See Your Matches',
    'how.step2.desc': 'Get personalized recommendations',
    'how.step3.title': 'Apply or Get Help',
    'how.step3.desc': 'Apply yourself or connect with support',
    
    // Universities Section
    'universities.title': 'Explore Top Universities',
    'universities.subtitle': 'Browse programs from verified institutions worldwide',
    'universities.viewAll': 'View All Programs',
    
    // Scholarships Section
    'scholarships.title': 'Unlock 5,000+ Scholarships',
    'scholarships.subtitle': 'Discover funding opportunities tailored to your profile',
    'scholarships.viewAll': 'Browse All Scholarships',
    
    // Careers Section
    'careers.title': 'Explore Career Pathways',
    'careers.subtitle': 'See what your degree is worth in real salaries',
    'careers.viewAll': 'Explore All Careers',
    
    // Trust & Social Proof
    'testimonial.quote': 'StudyPath helped me find the perfect university with a full scholarship. The process was smooth and the support was amazing!',
    'testimonial.name': 'Aziza Karimova',
    'testimonial.location': 'Tashkent → Toronto',
    
    // Trusted Partners
    'partners.title': 'Our Trusted Partners',
    'partners.verified': 'Verified Partner',
    
    // Mid-Page CTA
    'midCta.title': 'Ready to Start Your Journey?',
    'midCta.button': 'Find My Dream University',
    
    // Footer
    'footer.about': 'About',
    'footer.contact': 'Contact',
    'footer.blog': 'Blog',
    'footer.faq': 'FAQ',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms',
    'footer.copyright': '© 2025 StudyPath. All rights reserved.',
    'footer.tagline': 'Find your perfect university abroad — Simple, Fast, Trusted.',
    
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
    'nav.findPrograms': 'Dasturlarni Toping',
    'nav.universities': 'Universitetlar',
    'nav.scholarships': 'Grantlar',
    'nav.careers': 'Martabalar',
    'nav.getSupport': 'Yordam Oling',
    'nav.faq': 'Savollar',
    'nav.login': 'Kirish',
    'nav.register': "Ro'yxatdan O'tish",
    'nav.stickyCta': 'Orzuimdagi Universitetni Topish',
    
    // Hero Section
    'hero.title': 'Orzuingizdagi Universitet va Grantni Toping',
    'hero.subtitle': "Toshkentdan Torontogacha — minglab talabalar kabi siz ham orzuingizdagi ta'limni amalga oshiring.",
    'hero.country.placeholder': 'Davlatni Tanlang',
    'hero.degree.placeholder': 'Daraja Darajasini Tanlang',
    'hero.cta': "Eng Yaxshi Mos Keladigan Variantlarni Ko'rish",
    
    // Trust Stats
    'stats.students': "50K+ talabaga yo'l ko'rsatildi",
    'stats.success': "95% muvaffaqiyat ko'rsatkichi",
    'stats.scholarships': '5,000+ grant',
    
    // Advantages Section
    'advantages.title': "Nega Talabalar StudyPath'ni Tanlaydi",
    'advantages.personalized.title': 'Shaxsiy Mosliklar',
    'advantages.personalized.desc': "Profilingizga moslashtirilgan universitetlar va grantlarni oling.",
    'advantages.trusted.title': 'Ishonchli Yordam',
    'advantages.trusted.desc': "Tasdiqlangan hamkorlar va dasturlarga ishonishingiz mumkin.",
    'advantages.save.title': 'Vaqt va Kuchni Tejang',
    'advantages.save.desc': "Dasturlar, grantlar va martaba bo'yicha yo'l-yo'riq uchun bitta platforma.",
    'advantages.smart.title': 'Aqlli Qarorlar',
    'advantages.smart.desc': "Variantlarni solishtiring, muddatlarni kuzating va kelajagingizni ishonch bilan rejalang.",
    
    // How It Works
    'how.title': 'Qanday Ishlaydi',
    'how.step1.title': "Yo'lingizni Tanlang",
    'how.step1.desc': 'Davlat va daraja darajasini tanlang',
    'how.step2.title': "Mosliklaringizni Ko'ring",
    'how.step2.desc': 'Shaxsiy tavsiyalarni oling',
    'how.step3.title': 'Ariza Yuboring yoki Yordam Oling',
    'how.step3.desc': "O'zingiz ariza yuboring yoki yordam bilan bog'laning",
    
    // Universities Section
    'universities.title': 'Eng Yaxshi Universitetlarni Kashf Eting',
    'universities.subtitle': "Butun dunyo bo'ylab tasdiqlangan muassasalarning dasturlarini ko'ring",
    'universities.viewAll': "Barcha Dasturlarni Ko'rish",
    
    // Scholarships Section
    'scholarships.title': '5,000+ Grantni Oching',
    'scholarships.subtitle': "Profilingizga moslashtirilgan moliyaviy imkoniyatlarni kashf eting",
    'scholarships.viewAll': "Barcha Grantlarni Ko'rish",
    
    // Careers Section
    'careers.title': "Martaba Yo'llarini O'rganing",
    'careers.subtitle': "Diplomingiz haqiqiy ish haqida qancha turadi",
    'careers.viewAll': "Barcha Martabalarni O'rganing",
    
    // Trust & Social Proof
    'testimonial.quote': "StudyPath menga to'liq grant bilan mukammal universitetni topishga yordam berdi. Jarayon silliq va yordam ajoyib edi!",
    'testimonial.name': 'Aziza Karimova',
    'testimonial.location': 'Toshkent → Toronto',
    
    // Trusted Partners
    'partners.title': 'Bizning Ishonchli Hamkorlarimiz',
    'partners.verified': 'Tasdiqlangan Hamkor',
    
    // Mid-Page CTA
    'midCta.title': 'Safaringizni Boshlashga Tayyor Misiz?',
    'midCta.button': 'Orzuimdagi Universitetni Topish',
    
    // Footer
    'footer.about': 'Biz haqimizda',
    'footer.contact': 'Aloqa',
    'footer.blog': 'Blog',
    'footer.faq': 'Savollar',
    'footer.privacy': 'Maxfiylik Siyosati',
    'footer.terms': 'Shartlar',
    'footer.copyright': '© 2025 StudyPath. Barcha huquqlar himoyalangan.',
    'footer.tagline': "Xorijdagi mukammal universitetingizni toping — Oddiy, Tez, Ishonchli.",
    
    // Countries
    'country.usa': "Amerika Qo'shma Shtatlari",
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
    'nav.findPrograms': 'Найти Программы',
    'nav.universities': 'Университеты',
    'nav.scholarships': 'Стипендии',
    'nav.careers': 'Карьера',
    'nav.getSupport': 'Получить Поддержку',
    'nav.faq': 'Вопросы',
    'nav.login': 'Войти',
    'nav.register': 'Регистрация',
    'nav.stickyCta': 'Найти Университет Мечты',
    
    // Hero Section
    'hero.title': 'Найдите Университет и Стипендию Своей Мечты',
    'hero.subtitle': 'От Ташкента до Торонто — присоединяйтесь к тысячам студентов, которые осуществили мечту об учебе за рубежом.',
    'hero.country.placeholder': 'Выберите Страну',
    'hero.degree.placeholder': 'Выберите Уровень Образования',
    'hero.cta': 'Посмотреть Лучшие Совпадения',
    
    // Trust Stats
    'stats.students': '50K+ студентов',
    'stats.success': '95% успешности',
    'stats.scholarships': '5,000+ стипендий',
    
    // Advantages Section
    'advantages.title': 'Почему Студенты Выбирают StudyPath',
    'advantages.personalized.title': 'Персональный Подбор',
    'advantages.personalized.desc': 'Получите университеты и стипендии, адаптированные под ваш профиль.',
    'advantages.trusted.title': 'Надежная Поддержка',
    'advantages.trusted.desc': 'Проверенные партнеры и программы, на которые можно положиться.',
    'advantages.save.title': 'Экономия Времени и Усилий',
    'advantages.save.desc': 'Одна платформа для программ, стипендий и карьерного консультирования.',
    'advantages.smart.title': 'Умные Решения',
    'advantages.smart.desc': 'Сравнивайте варианты, отслеживайте сроки и планируйте будущее с уверенностью.',
    
    // How It Works
    'how.title': 'Как Это Работает',
    'how.step1.title': 'Выберите Путь',
    'how.step1.desc': 'Выберите страну и уровень образования',
    'how.step2.title': 'Смотрите Совпадения',
    'how.step2.desc': 'Получите персональные рекомендации',
    'how.step3.title': 'Подайте Заявку или Получите Помощь',
    'how.step3.desc': 'Подайте сами или свяжитесь с поддержкой',
    
    // Universities Section
    'universities.title': 'Исследуйте Лучшие Университеты',
    'universities.subtitle': 'Просматривайте программы проверенных учреждений по всему миру',
    'universities.viewAll': 'Посмотреть Все Программы',
    
    // Scholarships Section
    'scholarships.title': 'Откройте 5,000+ Стипендий',
    'scholarships.subtitle': 'Находите возможности финансирования, адаптированные под ваш профиль',
    'scholarships.viewAll': 'Просмотреть Все Стипендии',
    
    // Careers Section
    'careers.title': 'Исследуйте Карьерные Пути',
    'careers.subtitle': 'Узнайте реальную стоимость вашей степени',
    'careers.viewAll': 'Исследовать Все Карьеры',
    
    // Trust & Social Proof
    'testimonial.quote': 'StudyPath помог мне найти идеальный университет с полной стипендией. Процесс был плавным, а поддержка — потрясающей!',
    'testimonial.name': 'Азиза Каримова',
    'testimonial.location': 'Ташкент → Торонто',
    
    // Trusted Partners
    'partners.title': 'Наши Надежные Партнеры',
    'partners.verified': 'Проверенный Партнер',
    
    // Mid-Page CTA
    'midCta.title': 'Готовы Начать Свое Путешествие?',
    'midCta.button': 'Найти Университет Мечты',
    
    // Footer
    'footer.about': 'О нас',
    'footer.contact': 'Контакты',
    'footer.blog': 'Блог',
    'footer.faq': 'Вопросы',
    'footer.privacy': 'Политика Конфиденциальности',
    'footer.terms': 'Условия',
    'footer.copyright': '© 2025 StudyPath. Все права защищены.',
    'footer.tagline': 'Найдите свой идеальный университет за рубежом — Просто, Быстро, Надежно.',
    
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
