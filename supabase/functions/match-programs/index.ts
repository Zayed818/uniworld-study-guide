import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const programs = [
  {
    id: '1',
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
    tags: ['Top University', 'No Tuition', 'Scholarship Available']
  },
  {
    id: '2',
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
    tags: ['Top University', 'No Tuition', 'Research Focused']
  },
  {
    id: '3',
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
    tags: ['Business Hub', 'Internship Opportunities']
  },
  {
    id: '4',
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
    tags: ['Fully Funded', 'Research Excellence']
  },
  {
    id: '5',
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
    tags: ['Affordable', 'Top Ranked in Asia']
  },
  {
    id: '6',
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
    tags: ['Affordable', 'Strong Science Faculty']
  }
]

function calculateMatch(program: any, criteria: any) {
  let score = 0
  const rationale: string[] = []

  // Field/Subfield match (40 points)
  if (criteria.subfield && program.subfield === criteria.subfield) {
    score += 40
    rationale.push(`Exact match for ${criteria.subfield}`)
  } else if (criteria.field && program.field === criteria.field) {
    score += 30
    rationale.push(`Matches your field of study`)
  }

  // Country match (25 points)
  if (criteria.country === program.country) {
    score += 25
    rationale.push(`Available in ${program.country}`)
  }

  // Degree level match (25 points)
  if (criteria.degreeLevel === program.degreeLevel) {
    score += 25
    rationale.push(`${program.degreeLevel} level program`)
  }

  // Budget match (15 points)
  if (criteria.budget) {
    const budget = parseInt(criteria.budget)
    if (program.tuitionPerYear <= budget) {
      score += 15
      if (program.tuitionPerYear === 0) {
        rationale.push(`No tuition fees`)
      } else {
        rationale.push(`Within your budget`)
      }
    }
  }

  // Language match (10 points)
  if (criteria.language && program.language === criteria.language) {
    score += 10
    rationale.push(`Taught in ${program.language}`)
  }

  // Scholarship availability (8 points)
  if (criteria.scholarshipInterest && program.scholarshipAvailable) {
    score += 8
    rationale.push(`Scholarship available`)
  }

  // Delivery mode (6 points)
  if (criteria.delivery && program.delivery === criteria.delivery) {
    score += 6
    rationale.push(`${program.delivery} delivery`)
  }

  // Acceptance difficulty bonus (0-6 points) - easier = more points
  if (program.acceptanceDifficulty) {
    score += Math.max(0, 6 - Math.floor(program.acceptanceDifficulty / 2))
  }

  // Deadline open (5 points)
  const deadline = new Date(program.deadline)
  const now = new Date()
  if (deadline > now) {
    score += 5
    rationale.push(`Applications open`)
  }

  return {
    ...program,
    matchScore: Math.round(score),
    rationale: rationale.join(' • ')
  }
}

// Input validation schema
const validateCriteria = (data: any) => {
  const errors: string[] = []
  
  if (!data.country || typeof data.country !== 'string' || data.country.length > 50) {
    errors.push('Valid country is required')
  }
  
  if (!data.degreeLevel || typeof data.degreeLevel !== 'string' || data.degreeLevel.length > 20) {
    errors.push('Valid degree level is required')
  }
  
  if (!data.field || typeof data.field !== 'string' || data.field.length > 50) {
    errors.push('Valid field is required')
  }
  
  if (data.subfield && (typeof data.subfield !== 'string' || data.subfield.length > 50)) {
    errors.push('Invalid subfield format')
  }
  
  if (data.budget && (typeof data.budget !== 'string' || !/^\d+$/.test(data.budget))) {
    errors.push('Budget must be a numeric string')
  }
  
  if (data.language && (typeof data.language !== 'string' || data.language.length > 20)) {
    errors.push('Invalid language format')
  }
  
  if (data.delivery && (typeof data.delivery !== 'string' || data.delivery.length > 20)) {
    errors.push('Invalid delivery format')
  }
  
  return errors
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const criteria = await req.json()

    // Validate input
    const validationErrors = validateCriteria(criteria)
    if (validationErrors.length > 0) {
      return new Response(
        JSON.stringify({ error: 'Invalid request parameters' }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400 
        }
      )
    }

    // Calculate matches
    const matches = programs
      .map(program => calculateMatch(program, criteria))
      .filter(match => match.matchScore >= 50)
      .sort((a, b) => b.matchScore - a.matchScore)

    // If no strong matches, return top 3 with message
    if (matches.length === 0) {
      const nearestMatches = programs
        .map(program => calculateMatch(program, criteria))
        .sort((a, b) => b.matchScore - a.matchScore)
        .slice(0, 3)

      return new Response(
        JSON.stringify({ 
          matches: nearestMatches,
          message: 'No strong matches found. Here are the closest programs available.'
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200 
        }
      )
    }

    return new Response(
      JSON.stringify({ matches }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )
  } catch (error) {
    console.error('Match programs error:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to process request' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
})
