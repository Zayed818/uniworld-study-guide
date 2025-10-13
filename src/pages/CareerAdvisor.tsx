import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, TrendingUp, DollarSign, Briefcase, GraduationCap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CareerAdvisor = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const careers = [
    {
      title: "Software Engineer",
      averageSalary: "$110,000 - $160,000",
      demand: "Very High",
      pros: ["High salary", "Remote work options", "Creative problem solving"],
      cons: ["Long hours sometimes", "Continuous learning required"],
      skills: ["Programming", "Problem solving", "Teamwork", "Communication"],
      relatedFields: ["Computer Science", "Software Engineering", "Information Technology"],
      universities: ["Stanford", "MIT", "Carnegie Mellon"]
    },
    {
      title: "Data Scientist",
      averageSalary: "$95,000 - $150,000",
      demand: "Very High",
      pros: ["High demand", "Diverse industries", "Impact on business decisions"],
      cons: ["Requires strong math skills", "Data cleaning can be tedious"],
      skills: ["Statistics", "Python/R", "Machine Learning", "Data Visualization"],
      relatedFields: ["Data Science", "Statistics", "Computer Science"],
      universities: ["UC Berkeley", "Stanford", "Harvard"]
    },
    {
      title: "Product Manager",
      averageSalary: "$100,000 - $180,000",
      demand: "High",
      pros: ["Strategic role", "Good compensation", "Cross-functional work"],
      cons: ["High pressure", "Balancing stakeholders"],
      skills: ["Leadership", "Communication", "Strategy", "Technical understanding"],
      relatedFields: ["Business Administration", "Computer Science", "Engineering"],
      universities: ["Harvard Business School", "Stanford GSB", "Wharton"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-full mb-4">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Career Advisor</h1>
            <p className="text-xl text-muted-foreground">
              Explore careers and discover the education path to reach your goals
            </p>
          </div>

          <Tabs defaultValue="search" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="search">Search Careers</TabsTrigger>
              <TabsTrigger value="questionnaire">Career Quiz</TabsTrigger>
            </TabsList>

            <TabsContent value="search" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Search for any career (e.g., Software Engineer, Doctor, Teacher)..."
                      className="pl-10 h-12"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                {careers.map((career, index) => (
                  <Card key={index} className="border-2 hover:border-primary transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-2xl mb-2">{career.title}</CardTitle>
                          <div className="flex flex-wrap gap-2">
                            <Badge className="bg-gradient-accent">
                              <DollarSign className="h-3 w-3 mr-1" />
                              {career.averageSalary}
                            </Badge>
                            <Badge variant="outline">
                              <TrendingUp className="h-3 w-3 mr-1" />
                              Demand: {career.demand}
                            </Badge>
                          </div>
                        </div>
                        <Button className="bg-gradient-accent">
                          Learn More
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-sm text-muted-foreground">
                            PROS
                          </h4>
                          <ul className="space-y-1">
                            {career.pros.map((pro, i) => (
                              <li key={i} className="text-sm flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-sm text-muted-foreground">
                            CONS
                          </h4>
                          <ul className="space-y-1">
                            {career.cons.map((con, i) => (
                              <li key={i} className="text-sm flex items-start">
                                <span className="text-red-500 mr-2">✗</span>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-sm text-muted-foreground flex items-center">
                          <Briefcase className="h-4 w-4 mr-2" />
                          REQUIRED SKILLS
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {career.skills.map((skill, i) => (
                            <Badge key={i} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-sm text-muted-foreground flex items-center">
                          <GraduationCap className="h-4 w-4 mr-2" />
                          RELATED STUDY FIELDS
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {career.relatedFields.map((field, i) => (
                            <Badge key={i} variant="outline" className="border-accent text-accent">
                              {field}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-sm text-muted-foreground">
                          TOP UNIVERSITIES FOR THIS CAREER
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {career.universities.map((uni, i) => (
                            <Button key={i} variant="outline" size="sm">
                              {uni}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="questionnaire" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Career Personality Quiz</CardTitle>
                  <p className="text-muted-foreground">
                    Answer these questions to discover careers that match your interests and personality
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">1. What type of work environment do you prefer?</h4>
                    <div className="space-y-2">
                      {[
                        "Office setting with team collaboration",
                        "Remote/flexible work from anywhere",
                        "Hands-on work in labs or field",
                        "Client-facing and people-oriented"
                      ].map((option, i) => (
                        <label key={i} className="flex items-center space-x-3 p-3 rounded-lg border hover:border-primary cursor-pointer transition-colors">
                          <input type="radio" name="q1" value={i} className="text-primary" />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">2. Which skills do you enjoy using most?</h4>
                    <div className="space-y-2">
                      {[
                        "Analytical thinking and problem solving",
                        "Creative design and innovation",
                        "Communication and persuasion",
                        "Helping and teaching others"
                      ].map((option, i) => (
                        <label key={i} className="flex items-center space-x-3 p-3 rounded-lg border hover:border-primary cursor-pointer transition-colors">
                          <input type="radio" name="q2" value={i} className="text-primary" />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">3. What motivates you most in a career?</h4>
                    <div className="space-y-2">
                      {[
                        "High salary and financial security",
                        "Making a positive impact on society",
                        "Continuous learning and growth",
                        "Work-life balance and flexibility"
                      ].map((option, i) => (
                        <label key={i} className="flex items-center space-x-3 p-3 rounded-lg border hover:border-primary cursor-pointer transition-colors">
                          <input type="radio" name="q3" value={i} className="text-primary" />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-accent" size="lg">
                    Get My Career Recommendations
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CareerAdvisor;
