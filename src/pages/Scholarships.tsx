import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Award, Calendar, MapPin, DollarSign } from "lucide-react";

const Scholarships = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const scholarships = [
    {
      id: 1,
      name: "Fulbright Foreign Student Program",
      country: "United States",
      field: "All Fields",
      degree: "Master's & PhD",
      coverage: "Full Coverage",
      deadline: "October 15, 2025",
      amount: "Full tuition + living expenses",
      description: "Prestigious scholarship for international students to pursue graduate studies in the US"
    },
    {
      id: 2,
      name: "Chevening Scholarships",
      country: "United Kingdom",
      field: "All Fields",
      degree: "Master's",
      coverage: "Full Coverage",
      deadline: "November 7, 2025",
      amount: "Full tuition + monthly stipend",
      description: "UK government scholarship for future leaders and influencers"
    },
    {
      id: 3,
      name: "DAAD Scholarships",
      country: "Germany",
      field: "All Fields",
      degree: "Master's & PhD",
      coverage: "Full Coverage",
      deadline: "Various deadlines",
      amount: "€934-1,200/month + tuition",
      description: "German government scholarships for international students"
    },
    {
      id: 4,
      name: "Australia Awards Scholarships",
      country: "Australia",
      field: "All Fields",
      degree: "Bachelor's, Master's & PhD",
      coverage: "Full Coverage",
      deadline: "April 30, 2025",
      amount: "Full tuition + living allowance",
      description: "Australian government scholarships for students from developing countries"
    },
    {
      id: 5,
      name: "Erasmus Mundus Joint Masters",
      country: "Europe (Multiple)",
      field: "Various",
      degree: "Master's",
      coverage: "Partial to Full",
      deadline: "Various deadlines",
      amount: "€1,400/month + tuition",
      description: "EU scholarship for international students to study in multiple European countries"
    },
    {
      id: 6,
      name: "Swiss Government Excellence Scholarships",
      country: "Switzerland",
      field: "All Fields",
      degree: "PhD & Postdoc",
      coverage: "Full Coverage",
      deadline: "December 15, 2025",
      amount: "CHF 1,920/month + fees",
      description: "Swiss government scholarships for international researchers"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-full mb-4">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Scholarship Hub</h1>
            <p className="text-xl text-muted-foreground">
              Discover funding opportunities to make your education abroad affordable
            </p>
          </div>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="grid gap-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search scholarships by name, country, or field..."
                  className="pl-10 h-12"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Filters */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usa">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="germany">Germany</SelectItem>
                    <SelectItem value="australia">Australia</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Field" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Fields</SelectItem>
                    <SelectItem value="cs">Computer Science</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="medicine">Medicine</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Degree" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bachelors">Bachelor's</SelectItem>
                    <SelectItem value="masters">Master's</SelectItem>
                    <SelectItem value="phd">PhD</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Deadline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="soon">Next 3 months</SelectItem>
                    <SelectItem value="mid">3-6 months</SelectItem>
                    <SelectItem value="later">6+ months</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Coverage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full">Full Coverage</SelectItem>
                    <SelectItem value="partial">Partial Coverage</SelectItem>
                    <SelectItem value="tuition">Tuition Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full md:w-auto bg-gradient-accent">
                Apply Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{scholarships.length}</span> scholarships
          </p>
        </div>

        {/* Scholarship Cards */}
        <div className="grid gap-6">
          {scholarships.map((scholarship) => (
            <Card key={scholarship.id} className="hover:shadow-lg transition-all border-2 hover:border-accent">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{scholarship.name}</h3>
                      <p className="text-muted-foreground">{scholarship.description}</p>
                    </div>
                    <Badge className="bg-gradient-accent text-lg px-4 py-1 shrink-0">
                      {scholarship.coverage}
                    </Badge>
                  </div>

                  {/* Details Grid */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <div>
                        <p className="text-muted-foreground">Country</p>
                        <p className="font-semibold">{scholarship.country}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Award className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <div>
                        <p className="text-muted-foreground">Degree Level</p>
                        <p className="font-semibold">{scholarship.degree}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <DollarSign className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <div>
                        <p className="text-muted-foreground">Amount</p>
                        <p className="font-semibold">{scholarship.amount}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Calendar className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <div>
                        <p className="text-muted-foreground">Deadline</p>
                        <p className="font-semibold">{scholarship.deadline}</p>
                      </div>
                    </div>
                  </div>

                  {/* Field Badge */}
                  <div>
                    <Badge variant="outline">
                      Field: {scholarship.field}
                    </Badge>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button className="bg-gradient-accent flex-1">
                      View Details
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Get Help Applying
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <Button variant="outline" size="lg">
            Load More Scholarships
          </Button>
        </div>

        {/* Help Section */}
        <Card className="mt-12 bg-accent-light border-accent">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <Award className="h-12 w-12 text-accent mx-auto" />
              <h3 className="text-2xl font-bold">Need Help Preparing Your Application?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Connect with our verified agencies who specialize in scholarship applications. 
                They can help you craft winning applications and increase your chances of success.
              </p>
              <Button size="lg" className="bg-gradient-accent">
                Connect with an Agency
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Scholarships;
