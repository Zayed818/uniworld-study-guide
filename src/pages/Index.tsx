import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Search, 
  Shield, 
  Award, 
  Users, 
  CheckCircle2
} from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [destination, setDestination] = useState("");
  const [degreeType, setDegreeType] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [intakeDate, setIntakeDate] = useState("");

  const highlights = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Verified Universities",
      description: "All partner universities are thoroughly vetted and accredited"
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Scholarships Available",
      description: "Access thousands of funding opportunities worldwide"
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Trusted by Students",
      description: "Join 10,000+ students who found their perfect match"
    },
    {
      icon: <CheckCircle2 className="h-10 w-10 text-primary" />,
      title: "Apply in 3 Steps",
      description: "Simple application process with expert guidance"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero text-white py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Find Your Perfect University Abroad
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Discover universities, apply with confidence, and start your journey
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Search by university, program, or country"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-14 pl-12 text-base border-0 bg-secondary/50 focus-visible:ring-2"
                  />
                </div>
                
                {/* Quick Filters */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <Select value={destination} onValueChange={setDestination}>
                    <SelectTrigger className="h-12 bg-background">
                      <SelectValue placeholder="Destination" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover z-50">
                      <SelectItem value="usa">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="canada">Canada</SelectItem>
                      <SelectItem value="australia">Australia</SelectItem>
                      <SelectItem value="germany">Germany</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={degreeType} onValueChange={setDegreeType}>
                    <SelectTrigger className="h-12 bg-background">
                      <SelectValue placeholder="Degree Type" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover z-50">
                      <SelectItem value="bachelor">Bachelor's</SelectItem>
                      <SelectItem value="master">Master's</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                      <SelectItem value="diploma">Diploma</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={fieldOfStudy} onValueChange={setFieldOfStudy}>
                    <SelectTrigger className="h-12 bg-background">
                      <SelectValue placeholder="Field of Study" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover z-50">
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="cs">Computer Science</SelectItem>
                      <SelectItem value="medicine">Medicine</SelectItem>
                      <SelectItem value="arts">Arts & Humanities</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={intakeDate} onValueChange={setIntakeDate}>
                    <SelectTrigger className="h-12 bg-background">
                      <SelectValue placeholder="Intake Date" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover z-50">
                      <SelectItem value="fall2025">Fall 2025</SelectItem>
                      <SelectItem value="spring2026">Spring 2026</SelectItem>
                      <SelectItem value="fall2026">Fall 2026</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  size="lg" 
                  className="w-full h-12 bg-gradient-accent hover:opacity-90 text-base font-semibold"
                >
                  Find Programs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center border-2 hover:border-primary transition-colors hover:shadow-md">
                <CardContent className="pt-8 pb-6">
                  <div className="flex justify-center mb-4">{highlight.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
