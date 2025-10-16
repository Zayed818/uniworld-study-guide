import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  GraduationCap, 
  MapPin, 
  Award, 
  TrendingUp, 
  Clock, 
  DollarSign,
  Calendar,
  BookOpen,
  CheckCircle2,
  Star,
  ChevronLeft
} from "lucide-react";

const ProgramDetail = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  // Mock program data - in real app, this would come from route params/API
  const program = {
    id: 1,
    universityName: "Stanford University",
    universityLogo: null,
    country: "United States",
    location: "California",
    ranking: 1,
    programTitle: "Master of Science in Computer Science",
    degreeType: "Master's",
    field: "Computer Science",
    duration: "2 years",
    tuition: "$27,100/year",
    applicationFee: "$90",
    intakeDates: ["Fall 2025", "Spring 2026"],
    badges: ["Scholarship Available", "High Job Demand"],
    overview: {
      description: "Stanford's Master of Science in Computer Science program is one of the world's leading graduate programs. The program offers advanced coursework and research opportunities in areas including artificial intelligence, systems, theory, and human-computer interaction.",
      outcomes: [
        "Average starting salary: $150,000",
        "95% employment rate within 3 months",
        "Top employers: Google, Microsoft, Apple, Meta",
        "Strong alumni network in Silicon Valley"
      ]
    },
    admissionRequirements: {
      academic: [
        "Bachelor's degree in Computer Science or related field",
        "Minimum GPA of 3.5/4.0",
        "Strong mathematical background"
      ],
      tests: [
        "GRE: Minimum 320 (Verbal + Quantitative)",
        "TOEFL: Minimum 100 (Internet-based) or IELTS: 7.0",
      ],
      documents: [
        "Official transcripts",
        "Three letters of recommendation",
        "Statement of Purpose",
        "Resume/CV",
        "Writing sample (optional)"
      ]
    },
    fees: {
      tuition: "$27,100 per year",
      applicationFee: "$90",
      livingExpenses: "$20,000 - $30,000 per year",
      healthInsurance: "$6,000 per year",
      scholarships: [
        {
          name: "Stanford Graduate Fellowship",
          amount: "Full tuition + $40,000 stipend",
          eligibility: "Outstanding academic merit"
        },
        {
          name: "Diversity Scholarship",
          amount: "$15,000",
          eligibility: "Underrepresented minorities"
        },
        {
          name: "International Student Scholarship",
          amount: "$10,000",
          eligibility: "International students with financial need"
        }
      ]
    },
    reviews: [
      {
        name: "Alisher K.",
        country: "Uzbekistan",
        rating: 5,
        date: "March 2024",
        comment: "Amazing program with world-class professors. The research opportunities are unparalleled."
      },
      {
        name: "Maria S.",
        country: "Russia",
        rating: 5,
        date: "February 2024",
        comment: "Great career prospects and excellent support for international students."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          className="mb-4"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Search
        </Button>

        <div className="grid lg:grid-cols-[1fr,350px] gap-8">
          {/* Main Content */}
          <div className="space-y-6">
            {/* Header Section */}
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex gap-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center shrink-0">
                    <GraduationCap className="h-10 w-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold mb-2">{program.universityName}</h1>
                    <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{program.location}, {program.country}</span>
                      </div>
                      <Badge variant="outline">World Ranking: #{program.ranking}</Badge>
                    </div>
                  </div>
                </div>

                {/* Program Overview */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">{program.programTitle}</h2>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="text-sm">{program.degreeType}</Badge>
                    <Badge variant="outline" className="text-sm">{program.field}</Badge>
                    {program.badges.map((badge, idx) => (
                      <Badge 
                        key={idx}
                        variant="secondary"
                        className={badge === "Scholarship Available" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"}
                      >
                        {badge === "Scholarship Available" && <Award className="h-3 w-3 mr-1" />}
                        {badge === "High Job Demand" && <TrendingUp className="h-3 w-3 mr-1" />}
                        {badge}
                      </Badge>
                    ))}
                  </div>

                  {/* Key Info Grid */}
                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                    <div>
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">Duration</span>
                      </div>
                      <p className="font-semibold">{program.duration}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <DollarSign className="h-4 w-4" />
                        <span className="text-sm">Tuition</span>
                      </div>
                      <p className="font-semibold">{program.tuition}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <DollarSign className="h-4 w-4" />
                        <span className="text-sm">Application Fee</span>
                      </div>
                      <p className="font-semibold">{program.applicationFee}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">Intake Dates</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {program.intakeDates.map((date, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {date}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs Section */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
                <TabsTrigger value="fees">Fees & Scholarships</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Program Description
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {program.overview.description}
                    </p>
                    <div>
                      <h4 className="font-semibold mb-3">Career Outcomes</h4>
                      <ul className="space-y-2">
                        {program.overview.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="requirements" className="space-y-4 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Admission Requirements</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Academic Requirements</h4>
                      <ul className="space-y-2">
                        {program.admissionRequirements.academic.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Test Requirements</h4>
                      <ul className="space-y-2">
                        {program.admissionRequirements.tests.map((test, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>{test}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Required Documents</h4>
                      <ul className="space-y-2">
                        {program.admissionRequirements.documents.map((doc, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="fees" className="space-y-4 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Cost Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">Tuition</p>
                        <p className="font-semibold text-lg">{program.fees.tuition}</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">Application Fee</p>
                        <p className="font-semibold text-lg">{program.fees.applicationFee}</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">Living Expenses</p>
                        <p className="font-semibold text-lg">{program.fees.livingExpenses}</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">Health Insurance</p>
                        <p className="font-semibold text-lg">{program.fees.healthInsurance}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5" />
                      Available Scholarships
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {program.fees.scholarships.map((scholarship, idx) => (
                      <div key={idx} className="p-4 border rounded-lg space-y-2">
                        <div className="flex justify-between items-start">
                          <h4 className="font-semibold">{scholarship.name}</h4>
                          <Badge className="bg-accent text-accent-foreground">
                            {scholarship.amount}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Eligibility: {scholarship.eligibility}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-4 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Student Reviews</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {program.reviews.map((review, idx) => (
                      <div key={idx} className="p-4 border rounded-lg space-y-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-semibold">{review.name}</p>
                            <p className="text-sm text-muted-foreground">{review.country}</p>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{review.date}</p>
                        <p className="leading-relaxed">{review.comment}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Degree Type</span>
                    <span className="font-semibold">{program.degreeType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-semibold">{program.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-semibold">{program.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Ranking</span>
                    <span className="font-semibold">#{program.ranking}</span>
                  </div>
                </div>

                <div className="pt-4 border-t space-y-2">
                  <Button className="w-full bg-gradient-accent hover:opacity-90">
                    Apply Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    Save Program
                  </Button>
                  <Button variant="ghost" className="w-full">
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProgramDetail;
