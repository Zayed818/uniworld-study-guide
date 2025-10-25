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
    
    // Universities Section (Homepage)
    'universities.home.title': 'Explore Top Universities',
    'universities.home.subtitle': 'Browse programs from verified institutions worldwide',
    'universities.home.viewAll': 'View All Programs',
    
    // Scholarships Section (Homepage)
    'scholarships.home.title': 'Unlock 5,000+ Scholarships',
    'scholarships.home.subtitle': 'Discover funding opportunities tailored to your profile',
    'scholarships.home.viewAll': 'Browse All Scholarships',
    
    // Careers Section (Homepage)
    'careers.home.title': 'Explore Career Pathways',
    'careers.home.subtitle': 'See what your degree is worth in real salaries',
    'careers.home.viewAll': 'Explore All Careers',
    
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
    
    // Universities Page
    'universities.title': 'Program Search',
    'universities.subtitle': 'Find your perfect program from top universities worldwide',
    'universities.search.placeholder': 'Search by university name, program, or location...',
    'universities.filter.degreeLevel': 'Degree Level',
    'universities.filter.studyField': 'Study Field',
    'universities.filter.country': 'Country',
    'universities.filter.tuition': 'Tuition Range',
    'universities.filter.language': 'Language of Instruction',
    'universities.filter.intake': 'Intake Period',
    'universities.filter.scholarships': 'Show Only Programs with Scholarships',
    'universities.filter.requirements': 'Filter by Requirements',
    'universities.showing': 'Showing',
    'universities.of': 'of',
    'universities.programs': 'programs',
    'universities.viewDetails': 'View Details',
    'universities.applyNow': 'Apply Now',
    'universities.duration': 'Duration',
    'universities.tuition': 'Tuition',
    'universities.applicationFee': 'Application Fee',
    'universities.intakeDates': 'Intake Dates',
    
    // Scholarships Page
    'scholarships.hub.title': 'Scholarship Hub',
    'scholarships.hub.subtitle': 'Discover funding opportunities to make your education abroad affordable',
    'scholarships.search.placeholder': 'Search scholarships by name, country, or field...',
    'scholarships.filter.country': 'Country',
    'scholarships.filter.field': 'Field',
    'scholarships.filter.degree': 'Degree',
    'scholarships.filter.deadline': 'Deadline',
    'scholarships.filter.coverage': 'Coverage',
    'scholarships.showing': 'Showing',
    'scholarships.scholarships': 'scholarships',
    'scholarships.amount': 'Amount',
    'scholarships.deadline': 'Deadline',
    'scholarships.degreeLevel': 'Degree Level',
    'scholarships.field': 'Field',
    'scholarships.fullCoverage': 'Full Coverage',
    'scholarships.partialCoverage': 'Partial Coverage',
    'scholarships.viewDetails': 'View Details',
    'scholarships.getHelp': 'Get Help Applying',
    'scholarships.loadMore': 'Load More Scholarships',
    'scholarships.needHelp': 'Need Help Preparing Your Application?',
    'scholarships.helpText': 'Connect with our verified agencies who specialize in scholarship applications.',
    'scholarships.connectAgency': 'Connect with an Agency',
    
    // Careers Page
    'careers.title': 'Career Advisor',
    'careers.subtitle': 'Explore careers and discover the education path to reach your goals',
    'careers.search.placeholder': 'Search for any career (e.g., Software Engineer, Doctor, Teacher)...',
    'careers.searchTab': 'Search Careers',
    'careers.quizTab': 'Career Quiz',
    'careers.learnMore': 'Learn More',
    'careers.pros': 'PROS',
    'careers.cons': 'CONS',
    'careers.requiredSkills': 'REQUIRED SKILLS',
    'careers.relatedFields': 'RELATED STUDY FIELDS',
    'careers.topUniversities': 'TOP UNIVERSITIES FOR THIS CAREER',
    'careers.quiz.title': 'Career Personality Quiz',
    'careers.quiz.subtitle': 'Answer these questions to discover careers that match your interests and personality',
    'careers.quiz.getRecommendations': 'Get My Career Recommendations',
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
    
    // Universities Section (Homepage)
    'universities.home.title': 'Eng Yaxshi Universitetlarni Kashf Eting',
    'universities.home.subtitle': "Butun dunyo bo'ylab tasdiqlangan muassasalarning dasturlarini ko'ring",
    'universities.home.viewAll': "Barcha Dasturlarni Ko'rish",
    
    // Scholarships Section (Homepage)
    'scholarships.home.title': '5,000+ Grantni Oching',
    'scholarships.home.subtitle': "Profilingizga moslashtirilgan moliyaviy imkoniyatlarni kashf eting",
    'scholarships.home.viewAll': "Barcha Grantlarni Ko'rish",
    
    // Careers Section (Homepage)
    'careers.home.title': "Martaba Yo'llarini O'rganing",
    'careers.home.subtitle': "Diplomingiz haqiqiy ish haqida qancha turadi",
    'careers.home.viewAll': "Barcha Martabalarni O'rganing",
    
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
    
    // Universities Page
    'universities.title': 'Dasturlarni Qidirish',
    'universities.subtitle': "Butun dunyo bo'ylab eng yaxshi universitetlardan o'zingiz uchun mukammal dasturni toping",
    'universities.search.placeholder': "Universitet nomi, dastur yoki joylashuv bo'yicha qidiring...",
    'universities.filter.degreeLevel': "Ta'lim Darajasi",
    'universities.filter.studyField': "O'qish Yo'nalishi",
    'universities.filter.country': 'Davlat',
    'universities.filter.tuition': "O'qish Narxi Oralig'i",
    'universities.filter.language': "O'qitish Tili",
    'universities.filter.intake': 'Qabul Davri',
    'universities.filter.scholarships': "Faqat Grantli Dasturlarni Ko'rsatish",
    'universities.filter.requirements': "Talablar Bo'yicha Filtrlash",
    'universities.showing': "Ko'rsatilmoqda",
    'universities.of': 'dan',
    'universities.programs': 'dastur',
    'universities.viewDetails': "Batafsil Ko'rish",
    'universities.applyNow': 'Hozir Ariza Yuboring',
    'universities.duration': 'Davomiyligi',
    'universities.tuition': "O'qish Narxi",
    'universities.applicationFee': 'Ariza To\'lovi',
    'universities.intakeDates': 'Qabul Sanalari',
    
    // Scholarships Page
    'scholarships.hub.title': 'Grant Markazi',
    'scholarships.hub.subtitle': "Xorijdagi ta'limni arzonroq qilish uchun moliyaviy imkoniyatlarni kashf eting",
    'scholarships.search.placeholder': "Nom, davlat yoki yo'nalish bo'yicha grantlarni qidiring...",
    'scholarships.filter.country': 'Davlat',
    'scholarships.filter.field': "Yo'nalish",
    'scholarships.filter.degree': 'Daraja',
    'scholarships.filter.deadline': 'Muddat',
    'scholarships.filter.coverage': 'Qamrov',
    'scholarships.showing': "Ko'rsatilmoqda",
    'scholarships.scholarships': 'grant',
    'scholarships.amount': 'Miqdor',
    'scholarships.deadline': 'Muddat',
    'scholarships.degreeLevel': "Ta'lim Darajasi",
    'scholarships.field': "Yo'nalish",
    'scholarships.fullCoverage': "To'liq Qamrov",
    'scholarships.partialCoverage': 'Qisman Qamrov',
    'scholarships.viewDetails': "Batafsil Ko'rish",
    'scholarships.getHelp': 'Ariza Berishda Yordam Oling',
    'scholarships.loadMore': "Ko'proq Grantlarni Yuklash",
    'scholarships.needHelp': 'Arizangizni Tayyorlashda Yordam Kerakmi?',
    'scholarships.helpText': "Grant arizalariga ixtisoslashgan tasdiqlangan agentliklarimiz bilan bog'laning.",
    'scholarships.connectAgency': "Agentlik bilan Bog'lanish",
    
    // Careers Page
    'careers.title': 'Martaba Maslahatchisi',
    'careers.subtitle': "Martabalarni o'rganing va maqsadlaringizga erishish uchun ta'lim yo'lini kashf eting",
    'careers.search.placeholder': "Istalgan martabani qidiring (masalan, Dasturchi, Shifokor, O'qituvchi)...",
    'careers.searchTab': 'Martabalarni Qidirish',
    'careers.quizTab': 'Martaba Testi',
    'careers.learnMore': "Ko'proq Bilish",
    'careers.pros': 'AFZALLIKLARI',
    'careers.cons': 'KAMCHILIKLARI',
    'careers.requiredSkills': "TALAB QILINADIGAN KO'NIKMALAR",
    'careers.relatedFields': "BOG'LIQ O'QUV YO'NALISHLARI",
    'careers.topUniversities': "BU MARTABA UCHUN ENG YAXSHI UNIVERSITETLAR",
    'careers.quiz.title': 'Martaba Shaxsiyati Testi',
    'careers.quiz.subtitle': "Qiziqishlaringiz va shaxsingizga mos keladigan martabalarni kashf qilish uchun savollarga javob bering",
    'careers.quiz.getRecommendations': 'Martaba Tavsiyalarini Olish',
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
    
    // Universities Section (Homepage)
    'universities.home.title': 'Исследуйте Лучшие Университеты',
    'universities.home.subtitle': 'Просматривайте программы проверенных учреждений по всему миру',
    'universities.home.viewAll': 'Посмотреть Все Программы',
    
    // Scholarships Section (Homepage)
    'scholarships.home.title': 'Откройте 5,000+ Стипендий',
    'scholarships.home.subtitle': 'Находите возможности финансирования, адаптированные под ваш профиль',
    'scholarships.home.viewAll': 'Просмотреть Все Стипендии',
    
    // Careers Section (Homepage)
    'careers.home.title': 'Исследуйте Карьерные Пути',
    'careers.home.subtitle': 'Узнайте реальную стоимость вашей степени',
    'careers.home.viewAll': 'Исследовать Все Карьеры',
    
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
    
    // Universities Page
    'universities.title': 'Поиск Программ',
    'universities.subtitle': 'Найдите идеальную программу из лучших университетов мира',
    'universities.search.placeholder': 'Поиск по названию университета, программе или местоположению...',
    'universities.filter.degreeLevel': 'Уровень Степени',
    'universities.filter.studyField': 'Направление Обучения',
    'universities.filter.country': 'Страна',
    'universities.filter.tuition': 'Диапазон Стоимости',
    'universities.filter.language': 'Язык Обучения',
    'universities.filter.intake': 'Период Приема',
    'universities.filter.scholarships': 'Показать Только Программы со Стипендиями',
    'universities.filter.requirements': 'Фильтровать по Требованиям',
    'universities.showing': 'Показано',
    'universities.of': 'из',
    'universities.programs': 'программ',
    'universities.viewDetails': 'Посмотреть Детали',
    'universities.applyNow': 'Подать Заявку',
    'universities.duration': 'Длительность',
    'universities.tuition': 'Стоимость',
    'universities.applicationFee': 'Стоимость Подачи',
    'universities.intakeDates': 'Даты Приема',
    
    // Scholarships Page
    'scholarships.hub.title': 'Центр Стипендий',
    'scholarships.hub.subtitle': 'Откройте возможности финансирования для доступного образования за рубежом',
    'scholarships.search.placeholder': 'Поиск стипендий по названию, стране или направлению...',
    'scholarships.filter.country': 'Страна',
    'scholarships.filter.field': 'Направление',
    'scholarships.filter.degree': 'Степень',
    'scholarships.filter.deadline': 'Дедлайн',
    'scholarships.filter.coverage': 'Покрытие',
    'scholarships.showing': 'Показано',
    'scholarships.scholarships': 'стипендий',
    'scholarships.amount': 'Сумма',
    'scholarships.deadline': 'Дедлайн',
    'scholarships.degreeLevel': 'Уровень Степени',
    'scholarships.field': 'Направление',
    'scholarships.fullCoverage': 'Полное Покрытие',
    'scholarships.partialCoverage': 'Частичное Покрытие',
    'scholarships.viewDetails': 'Посмотреть Детали',
    'scholarships.getHelp': 'Получить Помощь в Подаче',
    'scholarships.loadMore': 'Загрузить Больше Стипендий',
    'scholarships.needHelp': 'Нужна Помощь в Подготовке Заявки?',
    'scholarships.helpText': 'Свяжитесь с нашими проверенными агентствами, специализирующимися на заявках на стипендии.',
    'scholarships.connectAgency': 'Связаться с Агентством',
    
    // Careers Page
    'careers.title': 'Карьерный Консультант',
    'careers.subtitle': 'Изучайте карьеры и откройте путь к образованию для достижения целей',
    'careers.search.placeholder': 'Поиск карьеры (например, Инженер-программист, Врач, Учитель)...',
    'careers.searchTab': 'Поиск Карьер',
    'careers.quizTab': 'Карьерный Тест',
    'careers.learnMore': 'Узнать Больше',
    'careers.pros': 'ПРЕИМУЩЕСТВА',
    'careers.cons': 'НЕДОСТАТКИ',
    'careers.requiredSkills': 'НЕОБХОДИМЫЕ НАВЫКИ',
    'careers.relatedFields': 'СВЯЗАННЫЕ НАПРАВЛЕНИЯ ОБУЧЕНИЯ',
    'careers.topUniversities': 'ЛУЧШИЕ УНИВЕРСИТЕТЫ ДЛЯ ЭТОЙ КАРЬЕРЫ',
    'careers.quiz.title': 'Тест Карьерной Личности',
    'careers.quiz.subtitle': 'Ответьте на вопросы, чтобы найти карьеры, соответствующие вашим интересам и личности',
    'careers.quiz.getRecommendations': 'Получить Карьерные Рекомендации',
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
