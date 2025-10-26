import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const fieldTaxonomy = [
  {
    id: 'engineering-technology',
    name: { en: 'Engineering & Technology', uz: 'Muhandislik va Texnologiya', ru: 'Инженерия и Технологии' },
    subfields: [
      { id: 'civil', name: { en: 'Civil Engineering', uz: 'Qurilish Muhandisligi', ru: 'Гражданское Строительство' } },
      { id: 'mechanical', name: { en: 'Mechanical Engineering', uz: 'Mexanika Muhandisligi', ru: 'Машиностроение' } },
      { id: 'electrical', name: { en: 'Electrical Engineering', uz: 'Elektr Muhandisligi', ru: 'Электротехника' } },
      { id: 'software', name: { en: 'Software Engineering', uz: 'Dasturiy Ta\'minot Muhandisligi', ru: 'Программная Инженерия' } },
      { id: 'architecture', name: { en: 'Architecture', uz: 'Arxitektura', ru: 'Архитектура' } }
    ]
  },
  {
    id: 'science-mathematics',
    name: { en: 'Science & Mathematics', uz: 'Fan va Matematika', ru: 'Наука и Математика' },
    subfields: [
      { id: 'biotechnology', name: { en: 'Biotechnology', uz: 'Biotexnologiya', ru: 'Биотехнология' } },
      { id: 'physics', name: { en: 'Physics', uz: 'Fizika', ru: 'Физика' } },
      { id: 'chemistry', name: { en: 'Chemistry', uz: 'Kimyo', ru: 'Химия' } },
      { id: 'mathematics', name: { en: 'Mathematics', uz: 'Matematika', ru: 'Математика' } }
    ]
  },
  {
    id: 'business-management',
    name: { en: 'Business & Management', uz: 'Biznes va Boshqaruv', ru: 'Бизнес и Управление' },
    subfields: [
      { id: 'marketing', name: { en: 'Marketing', uz: 'Marketing', ru: 'Маркетинг' } },
      { id: 'finance', name: { en: 'Finance', uz: 'Moliya', ru: 'Финансы' } },
      { id: 'accounting', name: { en: 'Accounting', uz: 'Buxgalteriya', ru: 'Бухгалтерия' } },
      { id: 'mba', name: { en: 'MBA', uz: 'MBA', ru: 'МВА' } }
    ]
  },
  {
    id: 'computer-science-it',
    name: { en: 'Computer Science & IT', uz: 'Kompyuter Fanlari va IT', ru: 'Информатика и ИТ' },
    subfields: [
      { id: 'data-science', name: { en: 'Data Science', uz: 'Ma\'lumotlar Fani', ru: 'Наука о Данных' } },
      { id: 'ai-ml', name: { en: 'AI & Machine Learning', uz: 'AI va Mashina O\'rganish', ru: 'ИИ и Машинное Обучение' } },
      { id: 'cybersecurity', name: { en: 'Cybersecurity', uz: 'Kiberxavfsizlik', ru: 'Кибербезопасность' } },
      { id: 'web-development', name: { en: 'Web Development', uz: 'Veb Dasturlash', ru: 'Веб-Разработка' } }
    ]
  },
  {
    id: 'medicine-health',
    name: { en: 'Medicine & Health Sciences', uz: 'Tibbiyot va Sog\'liqni Saqlash', ru: 'Медицина и Здравоохранение' },
    subfields: [
      { id: 'medicine', name: { en: 'Medicine', uz: 'Tibbiyot', ru: 'Медицина' } },
      { id: 'nursing', name: { en: 'Nursing', uz: 'Hamshiralik', ru: 'Медсестринство' } },
      { id: 'pharmacy', name: { en: 'Pharmacy', uz: 'Farmatsevtika', ru: 'Фармация' } },
      { id: 'public-health', name: { en: 'Public Health', uz: 'Jamoat Salomatligi', ru: 'Общественное Здравоохранение' } }
    ]
  },
  {
    id: 'arts-humanities',
    name: { en: 'Arts & Humanities', uz: 'San\'at va Gumanitar Fanlar', ru: 'Искусство и Гуманитарные Науки' },
    subfields: [
      { id: 'graphic-design', name: { en: 'Graphic Design', uz: 'Grafik Dizayn', ru: 'Графический Дизайн' } },
      { id: 'ux-ui', name: { en: 'UX/UI Design', uz: 'UX/UI Dizayn', ru: 'UX/UI Дизайн' } },
      { id: 'literature', name: { en: 'Literature', uz: 'Adabiyot', ru: 'Литература' } },
      { id: 'history', name: { en: 'History', uz: 'Tarix', ru: 'История' } }
    ]
  },
  {
    id: 'social-sciences',
    name: { en: 'Social Sciences', uz: 'Ijtimoiy Fanlar', ru: 'Социальные Науки' },
    subfields: [
      { id: 'psychology', name: { en: 'Psychology', uz: 'Psixologiya', ru: 'Психология' } },
      { id: 'sociology', name: { en: 'Sociology', uz: 'Sotsiologiya', ru: 'Социология' } },
      { id: 'economics', name: { en: 'Economics', uz: 'Iqtisodiyot', ru: 'Экономика' } }
    ]
  },
  {
    id: 'law-public-policy',
    name: { en: 'Law & Public Policy', uz: 'Huquq va Davlat Siyosati', ru: 'Право и Государственная Политика' },
    subfields: [
      { id: 'law', name: { en: 'Law', uz: 'Huquq', ru: 'Право' } },
      { id: 'public-policy', name: { en: 'Public Policy', uz: 'Davlat Siyosati', ru: 'Государственная Политика' } }
    ]
  },
  {
    id: 'education',
    name: { en: 'Education', uz: 'Ta\'lim', ru: 'Образование' },
    subfields: [
      { id: 'teaching', name: { en: 'Teaching', uz: 'O\'qitish', ru: 'Преподавание' } },
      { id: 'early-childhood', name: { en: 'Early Childhood Education', uz: 'Erta Yoshdagi Ta\'lim', ru: 'Дошкольное Образование' } }
    ]
  },
  {
    id: 'agriculture-environmental',
    name: { en: 'Agriculture & Environmental Studies', uz: 'Qishloq Xo\'jaligi va Ekologiya', ru: 'Сельское Хозяйство и Экология' },
    subfields: [
      { id: 'agriculture', name: { en: 'Agriculture', uz: 'Qishloq Xo\'jaligi', ru: 'Сельское Хозяйство' } },
      { id: 'environmental-science', name: { en: 'Environmental Science', uz: 'Ekologiya', ru: 'Экология' } }
    ]
  },
  {
    id: 'hospitality-tourism',
    name: { en: 'Hospitality & Tourism', uz: 'Mehmondo\'stlik va Turizm', ru: 'Гостеприимство и Туризм' },
    subfields: [
      { id: 'hotel-management', name: { en: 'Hotel Management', uz: 'Mehmonxona Boshqaruvi', ru: 'Гостиничный Менеджмент' } },
      { id: 'tourism', name: { en: 'Tourism', uz: 'Turizm', ru: 'Туризм' } }
    ]
  },
  {
    id: 'communications-media',
    name: { en: 'Communications & Media', uz: 'Kommunikatsiya va Media', ru: 'Коммуникации и Медиа' },
    subfields: [
      { id: 'journalism', name: { en: 'Journalism', uz: 'Jurnalistika', ru: 'Журналистика' } },
      { id: 'digital-marketing', name: { en: 'Digital Marketing', uz: 'Raqamli Marketing', ru: 'Цифровой Маркетинг' } }
    ]
  }
]

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    return new Response(
      JSON.stringify({ fields: fieldTaxonomy }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400 
      }
    )
  }
})
