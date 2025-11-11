import { useNavigate, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Award, Calendar, DollarSign, GraduationCap, MapPin } from "lucide-react";

// Mock scholarship data - in real app, fetch from backend
const scholarships = [
  {
    id: "1",
    name: "Global Excellence Scholarship",
    provider: "International Education Foundation",
    amount: "$25,000",
    deadline: "March 15, 2024",
    eligibility: "International students with GPA 3.5+",
    level: "Bachelor's, Master's",
    countries: ["USA", "UK", "Canada", "Australia"],
    description: "A prestigious scholarship program designed to support outstanding international students pursuing higher education. This scholarship covers tuition fees, accommodation, and living expenses.",
    requirements: [
      "Minimum GPA of 3.5 on a 4.0 scale",
      "Proof of English proficiency (TOEFL/IELTS)",
      "Letter of recommendation from academic supervisor",
      "Personal statement (500-1000 words)",
      "Copy of academic transcripts"
    ],
    applicationProcess: [
      "Complete online application form",
      "Upload required documents",
      "Submit personal statement",
      "Attend online interview (if shortlisted)",
      "Await final decision notification"
    ],
    importantDates: [
      { event: "Application Opens", date: "December 1, 2023" },
      { event: "Application Deadline", date: "March 15, 2024" },
      { event: "Shortlist Notification", date: "April 30, 2024" },
      { event: "Final Results", date: "June 15, 2024" }
    ]
  }
];

const ScholarshipDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { t } = useLanguage();

  const scholarship = scholarships.find(s => s.id === id) || scholarships[0];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate('/scholarships')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('scholarship.back')}
          </Button>

          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{scholarship.name}</h1>
                <p className="text-lg text-muted-foreground">{scholarship.provider}</p>
              </div>
              <Badge className="text-lg px-4 py-2 bg-gradient-accent">
                {scholarship.amount}
              </Badge>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span>{scholarship.deadline}</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span>{scholarship.level}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{scholarship.countries.join(", ")}</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {/* About */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    {t('scholarship.aboutTitle')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <p className="text-muted-foreground">{scholarship.description}</p>
                </CardContent>
              </Card>

              {/* Eligibility */}
              <Card>
                <CardHeader>
                  <CardTitle>{t('scholarship.eligibilityTitle')}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <ul className="space-y-2">
                    {scholarship.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* How to Apply */}
              <Card>
                <CardHeader>
                  <CardTitle>{t('scholarship.howToApplyTitle')}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <ol className="space-y-3">
                    {scholarship.applicationProcess.map((step, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                          {idx + 1}
                        </span>
                        <span className="text-muted-foreground pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-4 lg:self-start space-y-4">
              {/* Important Dates */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t('scholarship.deadlineTitle')}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <div className="space-y-3">
                    {scholarship.importantDates.map((item, idx) => (
                      <div key={idx} className="border-l-2 border-primary pl-3">
                        <p className="font-medium text-sm">{item.event}</p>
                        <p className="text-xs text-muted-foreground">{item.date}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <Card>
                <CardContent className="p-4 space-y-3">
                  <Button className="w-full bg-gradient-accent">
                    <Award className="h-4 w-4 mr-2" />
                    {t('scholarship.apply')}
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

export default ScholarshipDetail;
