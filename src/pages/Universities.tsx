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
import { Search, GraduationCap, MapPin, DollarSign, Heart } from "lucide-react";

const Universities = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const universities = [
    {
      id: 1,
      name: "Stanford University",
      country: "United States",
      location: "California",
      field: "Computer Science",
      tuition: "$27,100/year",
      visaFee: "$160",
      applicationFee: "$90",
      focusedProgram: true,
      ranking: 1
    },
    {
      id: 2,
      name: "University of Oxford",
      country: "United Kingdom",
      location: "Oxford",
      field: "Business Administration",
      tuition: "£26,770/year",
      visaFee: "£363",
      applicationFee: "£75",
      focusedProgram: false,
      ranking: 2
    },
    {
      id: 3,
      name: "University of Toronto",
      country: "Canada",
      location: "Toronto",
      field: "Engineering",
      tuition: "CAD $58,160/year",
      visaFee: "CAD $150",
      applicationFee: "CAD $156",
      focusedProgram: true,
      ranking: 3
    },
    {
      id: 4,
      name: "ETH Zurich",
      country: "Switzerland",
      location: "Zurich",
      field: "Computer Science",
      tuition: "CHF 1,460/year",
      visaFee: "CHF 100",
      applicationFee: "CHF 150",
      focusedProgram: true,
      ranking: 7
    },
    {
      id: 5,
      name: "University of Melbourne",
      country: "Australia",
      location: "Melbourne",
      field: "Medicine",
      tuition: "AUD $45,824/year",
      visaFee: "AUD $620",
      applicationFee: "AUD $100",
      focusedProgram: true,
      ranking: 14
    },
    {
      id: 6,
      name: "National University of Singapore",
      country: "Singapore",
      location: "Singapore",
      field: "Business",
      tuition: "SGD $29,950/year",
      visaFee: "SGD $30",
      applicationFee: "SGD $20",
      focusedProgram: false,
      ranking: 8
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">University Finder</h1>
          <p className="text-xl text-muted-foreground">
            Discover and compare universities worldwide
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="grid gap-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search by university name, program, or location..."
                  className="pl-10 h-12"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Filters */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Degree Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bachelors">Bachelor's</SelectItem>
                    <SelectItem value="masters">Master's</SelectItem>
                    <SelectItem value="phd">PhD</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Study Field" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cs">Computer Science</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="medicine">Medicine</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usa">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="australia">Australia</SelectItem>
                    <SelectItem value="germany">Germany</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Tuition Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-10k">$0 - $10,000</SelectItem>
                    <SelectItem value="10k-30k">$10,000 - $30,000</SelectItem>
                    <SelectItem value="30k+">$30,000+</SelectItem>
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
            Showing <span className="font-semibold text-foreground">{universities.length}</span> universities
          </p>
        </div>

        {/* University Cards */}
        <div className="grid gap-6">
          {universities.map((uni) => (
            <Card key={uni.id} className="hover:shadow-lg transition-all border-2 hover:border-primary">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-[auto,1fr,auto] gap-6">
                  {/* University Logo/Image */}
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center shrink-0">
                    <GraduationCap className="h-12 w-12 text-white" />
                  </div>

                  {/* University Info */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-2xl font-bold">{uni.name}</h3>
                        {uni.focusedProgram && (
                          <Badge className="bg-accent text-accent-foreground">
                            Focused Program
                          </Badge>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{uni.location}, {uni.country}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Badge variant="outline">Ranking: #{uni.ranking}</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Tuition Fee</p>
                        <p className="font-semibold text-lg">{uni.tuition}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Visa Fee</p>
                        <p className="font-semibold">{uni.visaFee}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Application Fee</p>
                        <p className="font-semibold">{uni.applicationFee}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Field</p>
                        <p className="font-semibold">{uni.field}</p>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex md:flex-col gap-2 shrink-0">
                    <Button className="w-full bg-gradient-accent">
                      Apply Now
                    </Button>
                    <Button variant="outline" size="icon">
                      <Heart className="h-4 w-4" />
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
            Load More Universities
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Universities;
