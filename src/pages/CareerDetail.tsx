import { useNavigate, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Briefcase, DollarSign, GraduationCap, TrendingUp } from "lucide-react";

// Mock career data - in real app, fetch from backend
const careers = [
  {
    id: "software-engineer",
    title: "Software Engineer",
    salary: "$110,000 - $180,000",
    growth: "+22% (Much faster than average)",
    description: "Software engineers design, develop, test, and maintain software systems and applications. They work on everything from operating systems to mobile apps, using various programming languages and development tools.",
    overview: [
      "Design and develop software solutions for various platforms",
      "Write clean, efficient, and maintainable code",
      "Collaborate with cross-functional teams",
      "Debug and troubleshoot software issues",
      "Stay updated with emerging technologies"
    ],
    education: [
      "Bachelor's degree in Computer Science or related field",
      "Strong foundation in algorithms and data structures",
      "Proficiency in multiple programming languages",
      "Understanding of software development methodologies",
      "Portfolio of personal or professional projects"
    ],
    skills: ["Python", "JavaScript", "Problem Solving", "Git", "Agile"],
    outlook: "The demand for software engineers continues to grow rapidly as businesses increasingly rely on technology. Cloud computing, AI, and mobile development are particularly hot areas. Remote work opportunities are abundant, and career advancement paths include senior engineer, architect, or management roles.",
    pros: [
      "High earning potential",
      "Remote work opportunities",
      "Continuous learning",
      "Creative problem-solving"
    ],
    cons: [
      "Can be stressful with deadlines",
      "Long hours sometimes required",
      "Rapidly changing technology"
    ]
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    salary: "$95,000 - $165,000",
    growth: "+36% (Much faster than average)",
    description: "Data scientists analyze complex data to help organizations make better decisions. They use statistical analysis, machine learning, and data visualization to extract insights from large datasets.",
    overview: [
      "Collect and analyze large datasets",
      "Build predictive models using machine learning",
      "Create data visualizations and reports",
      "Communicate insights to stakeholders",
      "Develop data-driven solutions to business problems"
    ],
    education: [
      "Master's degree in Data Science, Statistics, or related field",
      "Strong mathematical and statistical background",
      "Programming skills in Python or R",
      "Knowledge of machine learning algorithms",
      "Experience with data visualization tools"
    ],
    skills: ["Python", "Statistics", "Machine Learning", "SQL", "Tableau"],
    outlook: "Data science is one of the fastest-growing fields with excellent job prospects. Organizations across all industries need data scientists to make sense of their data. The field is evolving with new tools and techniques, offering exciting opportunities for growth.",
    pros: [
      "Very high demand",
      "Excellent compensation",
      "Diverse industry applications",
      "Intellectual challenge"
    ],
    cons: [
      "Requires advanced education",
      "Can involve data cleaning tedium",
      "Business context understanding needed"
    ]
  }
];

const CareerDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { t } = useLanguage();

  const career = careers.find(c => c.id === id) || careers[0];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate('/career-advisor')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('career.back')}
          </Button>

          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{career.title}</h1>
                <p className="text-lg text-muted-foreground">{career.description}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Badge variant="outline" className="text-base px-4 py-2">
                <DollarSign className="h-4 w-4 mr-1" />
                {career.salary}
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-2">
                <TrendingUp className="h-4 w-4 mr-1" />
                {career.growth}
              </Badge>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {/* Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    {t('career.overview')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <ul className="space-y-2">
                    {career.overview.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Education Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    {t('career.education')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <ul className="space-y-2">
                    {career.education.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Career Outlook */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    {t('career.outlook')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <p className="text-muted-foreground">{career.outlook}</p>
                </CardContent>
              </Card>

              {/* Pros and Cons */}
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{t('career.pros')}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 pt-0">
                    <ul className="space-y-2">
                      {career.pros.map((pro, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span className="text-muted-foreground">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{t('career.cons')}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 pt-0">
                    <ul className="space-y-2">
                      {career.cons.map((con, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">!</span>
                          <span className="text-muted-foreground">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-4 lg:self-start space-y-4">
              {/* Required Skills */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t('career.requiredSkills')}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {career.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <Card>
                <CardContent className="p-4 space-y-3">
                  <Button className="w-full bg-gradient-accent">
                    Explore Related Programs
                  </Button>
                  <Button variant="outline" className="w-full">
                    {t('scholarship.contactCounselor')}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CareerDetail;
