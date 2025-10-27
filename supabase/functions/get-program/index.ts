import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const programs = [
  {
    id: 'tum-mech',
    name: 'BSc Mechanical Engineering',
    university: 'Technical University of Munich',
    country: 'germany',
    degreeLevel: 'bachelor',
    field: 'engineering-technology',
    subfield: 'mechanical',
    tuitionPerYear: 0,
    language: 'english',
    delivery: 'on-campus',
    scholarshipAvailable: true,
    acceptanceDifficulty: 8,
    deadline: '2025-07-15',
    tags: ['Top University', 'No Tuition', 'Scholarship Available'],
    description: 'World-class mechanical engineering program with strong industry connections.',
    duration: '4 years',
    requirements: ['High school diploma', 'IELTS 6.5 or equivalent', 'Strong math and physics background']
  },
  {
    id: 'lmu-data',
    name: 'MSc Data Science',
    university: 'Ludwig Maximilian University of Munich',
    country: 'germany',
    degreeLevel: 'master',
    field: 'computer-science-it',
    subfield: 'data-science',
    tuitionPerYear: 0,
    language: 'english',
    delivery: 'on-campus',
    scholarshipAvailable: true,
    acceptanceDifficulty: 9,
    deadline: '2025-05-31',
    tags: ['Top University', 'No Tuition', 'Research Focused'],
    description: 'Advanced data science program focusing on machine learning and statistical analysis.',
    duration: '2 years',
    requirements: ['Bachelor in Computer Science or related field', 'IELTS 7.0 or equivalent', 'GPA 3.5+']
  },
  {
    id: 'aud-marketing',
    name: 'BBA Marketing',
    university: 'American University in Dubai',
    country: 'uae',
    degreeLevel: 'bachelor',
    field: 'business-management',
    subfield: 'marketing',
    tuitionPerYear: 18000,
    language: 'english',
    delivery: 'on-campus',
    scholarshipAvailable: true,
    acceptanceDifficulty: 5,
    deadline: '2025-08-20',
    tags: ['Business Hub', 'Internship Opportunities'],
    description: 'Dynamic marketing program in the heart of Dubai\'s business district.',
    duration: '4 years',
    requirements: ['High school diploma', 'IELTS 6.0 or equivalent', 'GPA 3.0+']
  },
  {
    id: 'ku-civil',
    name: 'MSc Civil Engineering',
    university: 'Khalifa University',
    country: 'uae',
    degreeLevel: 'master',
    field: 'engineering-technology',
    subfield: 'civil',
    tuitionPerYear: 0,
    language: 'english',
    delivery: 'on-campus',
    scholarshipAvailable: true,
    acceptanceDifficulty: 7,
    deadline: '2025-06-30',
    tags: ['Fully Funded', 'Research Excellence'],
    description: 'Cutting-edge civil engineering program with focus on sustainable infrastructure.',
    duration: '2 years',
    requirements: ['Bachelor in Civil Engineering', 'IELTS 6.5 or equivalent', 'GPA 3.3+']
  },
  {
    id: 'um-data',
    name: 'MSc Data Science',
    university: 'University of Malaya',
    country: 'malaysia',
    degreeLevel: 'master',
    field: 'computer-science-it',
    subfield: 'data-science',
    tuitionPerYear: 4500,
    language: 'english',
    delivery: 'on-campus',
    scholarshipAvailable: true,
    acceptanceDifficulty: 6,
    deadline: '2025-09-15',
    tags: ['Affordable', 'Top Ranked in Asia'],
    description: 'Comprehensive data science program at Malaysia\'s premier university.',
    duration: '2 years',
    requirements: ['Bachelor in Computer Science or related field', 'IELTS 6.0 or equivalent', 'GPA 3.0+']
  },
  {
    id: 'upm-biotech',
    name: 'BSc Biotechnology',
    university: 'Universiti Putra Malaysia',
    country: 'malaysia',
    degreeLevel: 'bachelor',
    field: 'science-mathematics',
    subfield: 'biotechnology',
    tuitionPerYear: 3800,
    language: 'english',
    delivery: 'on-campus',
    scholarshipAvailable: false,
    acceptanceDifficulty: 4,
    deadline: '2025-07-30',
    tags: ['Affordable', 'Strong Science Faculty'],
    description: 'Comprehensive biotechnology program with modern lab facilities.',
    duration: '4 years',
    requirements: ['High school diploma', 'IELTS 6.0 or equivalent', 'Strong biology and chemistry background']
  }
]

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const url = new URL(req.url)
    const id = url.searchParams.get('id')

    const program = programs.find(p => p.id === id)

    if (!program) {
      return new Response(
        JSON.stringify({ error: 'Program not found' }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 404 
        }
      )
    }

    return new Response(
      JSON.stringify({ program }),
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
