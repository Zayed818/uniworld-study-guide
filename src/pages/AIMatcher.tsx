import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sparkles, GraduationCap, TrendingUp, Award, Share2, Bookmark } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const AIMatcher = () => {
  const [step, setStep] = useState(1);
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const matchResults = [
    {
      university: "Stanford University",
      country: "United States",
      program: "MS in Computer Science",
      matchScore: 95,
      reasons: ["Top CS program", "Strong research focus", "Good scholarship opportunities"],
      tuition: "$27,100/year"
    },
    {
      university: "ETH Zurich",
      country: "Switzerland",
      program: "MSc Computer Science",
      matchScore: 92,
      reasons: ["Affordable tuition", "Excellent research", "High ROI"],
      tuition: "CHF 1,460/year"
    },
    {
      university: "University of Toronto",
      country: "Canada",
      program: "MASc in Computer Engineering",
      matchScore: 89,
      reasons: ["Great location", "Strong industry connections", "Post-study work visa"],
      tuition: "CAD $58,160/year"
    },
    {
      university: "National University of Singapore",
      country: "Singapore",
      program: "MSc in Computer Science",
      matchScore: 87,
      reasons: ["Low living costs", "Safe environment", "Growing tech hub"],
      tuition: "SGD $29,950/year"
    },
    {
      university: "Technical University of Munich",
      country: "Germany",
      program: "MSc in Informatics",
      matchScore: 85,
      reasons: ["No tuition fees", "Strong industry ties", "Central Europe location"],
      tuition: "€0/year"
    },
    {
      university: "University of Melbourne",
      country: "Australia",
      program: "Master of Information Technology",
      matchScore: 83,
      reasons: ["High quality of life", "Good job market", "Diverse community"],
      tuition: "AUD $45,824/year"
    }
  ];

  if (showResults) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-full mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold mb-2">Your Perfect Matches</h1>
              <p className="text-xl text-muted-foreground">
                Based on your profile, here are the top 6 universities for you
              </p>
            </div>

            <div className="space-y-6">
              {matchResults.map((result, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-[1fr,auto] gap-6">
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <h3 className="text-2xl font-bold mb-1">{result.university}</h3>
                            <p className="text-muted-foreground">{result.country}</p>
                          </div>
                          <Badge className="text-lg px-4 py-1 bg-gradient-accent">
                            {result.matchScore}% Match
                          </Badge>
                        </div>

                        <p className="text-lg font-semibold mb-3 text-primary">{result.program}</p>

                        <div className="mb-4">
                          <p className="text-sm font-medium mb-2 text-muted-foreground">Why this match?</p>
                          <div className="flex flex-wrap gap-2">
                            {result.reasons.map((reason, i) => (
                              <Badge key={i} variant="outline">
                                {reason}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <p className="text-lg font-semibold text-accent">{result.tuition}</p>
                      </div>

                      <div className="flex md:flex-col gap-2">
                        <Button className="bg-gradient-accent w-full">
                          Apply Now
                        </Button>
                        <Button variant="outline" size="icon">
                          <Bookmark className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center space-y-4">
              <Button onClick={() => setShowResults(false)} variant="outline" size="lg">
                Start New Search
              </Button>
              <p className="text-sm text-muted-foreground">
                Want to connect with an agency to help with your application?
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-full mb-4">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-2">AI University Matcher</h1>
            <p className="text-xl text-muted-foreground">
              Answer a few questions and let AI find your perfect university matches
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Step {step} of 3</CardTitle>
              <div className="w-full bg-secondary h-2 rounded-full mt-2">
                <div 
                  className="bg-gradient-accent h-2 rounded-full transition-all"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="degree">What degree level are you interested in?</Label>
                      <Select>
                        <SelectTrigger id="degree">
                          <SelectValue placeholder="Select degree level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bachelors">Bachelor's</SelectItem>
                          <SelectItem value="masters">Master's</SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="field">What field do you want to study?</Label>
                      <Select>
                        <SelectTrigger id="field">
                          <SelectValue placeholder="Select field" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cs">Computer Science</SelectItem>
                          <SelectItem value="engineering">Engineering</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                          <SelectItem value="medicine">Medicine</SelectItem>
                          <SelectItem value="arts">Arts & Humanities</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="gpa">What is your GPA? (0-4 scale)</Label>
                      <Input 
                        id="gpa" 
                        type="number" 
                        step="0.1" 
                        min="0" 
                        max="4" 
                        placeholder="3.5"
                      />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="budget">What is your annual budget (USD)?</Label>
                      <Select>
                        <SelectTrigger id="budget">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-10k">$0 - $10,000</SelectItem>
                          <SelectItem value="10k-30k">$10,000 - $30,000</SelectItem>
                          <SelectItem value="30k-50k">$30,000 - $50,000</SelectItem>
                          <SelectItem value="50k+">$50,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Are you interested in scholarships?</Label>
                      <RadioGroup defaultValue="yes">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="scholarship-yes" />
                          <Label htmlFor="scholarship-yes">Yes, definitely</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="maybe" id="scholarship-maybe" />
                          <Label htmlFor="scholarship-maybe">Maybe</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="scholarship-no" />
                          <Label htmlFor="scholarship-no">No</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label htmlFor="countries">Preferred countries (select all that apply)</Label>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {["USA", "UK", "Canada", "Australia", "Germany", "Netherlands"].map((country) => (
                          <div key={country} className="flex items-center space-x-2">
                            <input type="checkbox" id={country} className="rounded" />
                            <Label htmlFor={country}>{country}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <Label>What's most important to you?</Label>
                      <RadioGroup defaultValue="ranking">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="ranking" id="priority-ranking" />
                          <Label htmlFor="priority-ranking">University ranking</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="cost" id="priority-cost" />
                          <Label htmlFor="priority-cost">Affordable cost</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="research" id="priority-research" />
                          <Label htmlFor="priority-research">Research opportunities</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="location" id="priority-location" />
                          <Label htmlFor="priority-location">Location & lifestyle</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label htmlFor="english">English proficiency test score (if any)</Label>
                      <Input 
                        id="english" 
                        placeholder="e.g., IELTS 7.5, TOEFL 100"
                      />
                    </div>

                    <div>
                      <Label htmlFor="experience">Work or research experience (years)</Label>
                      <Input 
                        id="experience" 
                        type="number" 
                        min="0" 
                        placeholder="0"
                      />
                    </div>
                  </div>
                )}

                <div className="flex gap-4">
                  {step > 1 && (
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setStep(step - 1)}
                      className="flex-1"
                    >
                      Previous
                    </Button>
                  )}
                  {step < 3 ? (
                    <Button 
                      type="button" 
                      onClick={() => setStep(step + 1)}
                      className="flex-1 bg-gradient-accent"
                    >
                      Next
                    </Button>
                  ) : (
                    <Button 
                      type="submit" 
                      className="flex-1 bg-gradient-accent"
                    >
                      <Sparkles className="mr-2 h-5 w-5" />
                      Get My Matches
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AIMatcher;
