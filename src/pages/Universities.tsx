import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { Search, GraduationCap, MapPin, X, Clock, Award, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Universities = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [degreeLevel, setDegreeLevel] = useState("");
  const [studyField, setStudyField] = useState("");
  const [country, setCountry] = useState("");
  const [tuitionRange, setTuitionRange] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const activeFilters = [
    { key: "degreeLevel", value: degreeLevel, label: t('universities.filter.degreeLevel') },
    { key: "studyField", value: studyField, label: t('universities.filter.studyField') },
    { key: "country", value: country, label: t('universities.filter.country') },
    { key: "tuitionRange", value: tuitionRange, label: t('universities.filter.tuition') },
  ].filter(f => f.value);

  const clearFilter = (key: string) => {
    switch(key) {
      case "degreeLevel": setDegreeLevel(""); break;
      case "studyField": setStudyField(""); break;
      case "country": setCountry(""); break;
      case "tuitionRange": setTuitionRange(""); break;
    }
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setDegreeLevel("");
    setStudyField("");
    setCountry("");
    setTuitionRange("");
  };

  const programs = [
    {
      id: 1,
      universityName: "Stanford University",
      country: "United States",
      location: "California",
      programTitle: "Master of Science in Computer Science",
      degreeType: "Master's",
      field: "Computer Science",
      tuition: "$27,100/year",
      applicationFee: "$90",
      duration: "2 years",
      intakeDates: ["Fall 2025", "Spring 2026"],
      badges: ["Scholarship Available", "High Job Demand"],
      ranking: 1
    },
    {
      id: 2,
      universityName: "University of Oxford",
      country: "United Kingdom",
      location: "Oxford",
      programTitle: "MBA - Business Administration",
      degreeType: "Master's",
      field: "Business",
      tuition: "£26,770/year",
      applicationFee: "£75",
      duration: "1 year",
      intakeDates: ["Fall 2025"],
      badges: ["High Job Demand"],
      ranking: 2
    },
    {
      id: 3,
      universityName: "University of Toronto",
      country: "Canada",
      location: "Toronto",
      programTitle: "Bachelor of Engineering",
      degreeType: "Bachelor's",
      field: "Engineering",
      tuition: "CAD $58,160/year",
      applicationFee: "CAD $156",
      duration: "4 years",
      intakeDates: ["Fall 2025", "Spring 2026"],
      badges: ["Scholarship Available"],
      ranking: 3
    },
    {
      id: 4,
      universityName: "ETH Zurich",
      country: "Switzerland",
      location: "Zurich",
      programTitle: "Master in Computer Science",
      degreeType: "Master's",
      field: "Computer Science",
      tuition: "CHF 1,460/year",
      applicationFee: "CHF 150",
      duration: "2 years",
      intakeDates: ["Fall 2025"],
      badges: ["Scholarship Available", "High Job Demand"],
      ranking: 7
    },
    {
      id: 5,
      universityName: "University of Melbourne",
      country: "Australia",
      location: "Melbourne",
      programTitle: "Doctor of Medicine (MD)",
      degreeType: "Doctorate",
      field: "Medicine",
      tuition: "AUD $45,824/year",
      applicationFee: "AUD $100",
      duration: "4 years",
      intakeDates: ["Fall 2025"],
      badges: ["High Job Demand"],
      ranking: 14
    },
    {
      id: 6,
      universityName: "National University of Singapore",
      country: "Singapore",
      location: "Singapore",
      programTitle: "Bachelor of Business Administration",
      degreeType: "Bachelor's",
      field: "Business",
      tuition: "SGD $29,950/year",
      applicationFee: "SGD $20",
      duration: "3 years",
      intakeDates: ["Fall 2025", "Spring 2026"],
      badges: ["Scholarship Available"],
      ranking: 8
    },
    {
      id: 7,
      universityName: "MIT",
      country: "United States",
      location: "Massachusetts",
      programTitle: "Master of Engineering in AI",
      degreeType: "Master's",
      field: "Computer Science",
      tuition: "$29,750/year",
      applicationFee: "$95",
      duration: "2 years",
      intakeDates: ["Fall 2025"],
      badges: ["Scholarship Available", "High Job Demand"],
      ranking: 1
    },
    {
      id: 8,
      universityName: "University of Cambridge",
      country: "United Kingdom",
      location: "Cambridge",
      programTitle: "BA Economics",
      degreeType: "Bachelor's",
      field: "Economics",
      tuition: "£22,227/year",
      applicationFee: "£75",
      duration: "3 years",
      intakeDates: ["Fall 2025"],
      badges: ["High Job Demand"],
      ranking: 3
    },
    {
      id: 9,
      universityName: "University of British Columbia",
      country: "Canada",
      location: "Vancouver",
      programTitle: "Master of Data Science",
      degreeType: "Master's",
      field: "Data Science",
      tuition: "CAD $42,000/year",
      applicationFee: "CAD $125",
      duration: "10 months",
      intakeDates: ["Fall 2025", "Spring 2026"],
      badges: ["Scholarship Available", "High Job Demand"],
      ranking: 35
    }
  ];

  const itemsPerPage = 9;
  const totalPages = Math.ceil(programs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedPrograms = programs.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{t('universities.title')}</h1>
          <p className="text-xl text-muted-foreground">
            {t('universities.subtitle')}
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-4 md:p-6">
            <div className="grid gap-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder={t('universities.search.placeholder')}
                  className="pl-10 h-12"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Filters */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Select value={degreeLevel} onValueChange={setDegreeLevel}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('universities.filter.degreeLevel')} />
                  </SelectTrigger>
                  <SelectContent className="bg-popover z-50">
                    <SelectItem value="bachelors">{t('degree.bachelor')}</SelectItem>
                    <SelectItem value="masters">{t('degree.master')}</SelectItem>
                    <SelectItem value="doctorate">{t('degree.phd')}</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={studyField} onValueChange={setStudyField}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('universities.filter.studyField')} />
                  </SelectTrigger>
                  <SelectContent className="bg-popover z-50">
                    <SelectItem value="cs">Computer Science</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="medicine">Medicine</SelectItem>
                    <SelectItem value="data-science">Data Science</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={country} onValueChange={setCountry}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('universities.filter.country')} />
                  </SelectTrigger>
                  <SelectContent className="bg-popover z-50">
                    <SelectItem value="usa">{t('country.usa')}</SelectItem>
                    <SelectItem value="uk">{t('country.uk')}</SelectItem>
                    <SelectItem value="canada">{t('country.canada')}</SelectItem>
                    <SelectItem value="australia">{t('country.australia')}</SelectItem>
                    <SelectItem value="singapore">Singapore</SelectItem>
                    <SelectItem value="switzerland">Switzerland</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={tuitionRange} onValueChange={setTuitionRange}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('universities.filter.tuition')} />
                  </SelectTrigger>
                  <SelectContent className="bg-popover z-50">
                    <SelectItem value="0-10k">$0 - $10,000</SelectItem>
                    <SelectItem value="10k-30k">$10,000 - $30,000</SelectItem>
                    <SelectItem value="30k+">$30,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Active Filters */}
              {activeFilters.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-muted-foreground">Active filters:</span>
                  {activeFilters.map((filter) => (
                    <Badge 
                      key={filter.key} 
                      variant="secondary" 
                      className="gap-1 pr-1"
                    >
                      {filter.value}
                      <button
                        onClick={() => clearFilter(filter.key)}
                        className="ml-1 rounded-full hover:bg-muted"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearAllFilters}
                    className="text-xs h-7"
                  >
                    Clear All
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-6 flex justify-between items-center">
          <p className="text-muted-foreground">
            {t('universities.showing')} <span className="font-semibold text-foreground">{displayedPrograms.length}</span> {t('universities.of')} <span className="font-semibold text-foreground">{programs.length}</span> {t('universities.programs')}
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedPrograms.map((program) => (
            <Card key={program.id} className="hover:shadow-lg transition-all border-2 hover:border-primary flex flex-col">
              <CardContent className="p-4 md:p-6 flex-1 flex flex-col">
                {/* University Info */}
                <div className="mb-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center shrink-0">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg mb-1 line-clamp-1">{program.universityName}</h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3 shrink-0" />
                        <span className="truncate">{program.location}, {program.country}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Program Title */}
                  <h4 className="font-semibold text-base mb-2 line-clamp-2 min-h-[2.5rem]">{program.programTitle}</h4>
                  
                  {/* Degree Type */}
                  <p className="text-sm text-muted-foreground mb-3">{program.degreeType} • {program.field}</p>
                  
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-3">
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
                </div>

                {/* Program Details */}
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('universities.tuition')}</span>
                    <span className="font-semibold">{program.tuition}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('universities.applicationFee')}</span>
                    <span className="font-semibold">{program.applicationFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('universities.duration')}</span>
                    <span className="font-semibold">{program.duration}</span>
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-muted-foreground shrink-0">{t('universities.intakeDates')}</span>
                    <div className="flex flex-wrap gap-1 justify-end">
                      {program.intakeDates.map((date, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          {date}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-auto pt-4 border-t">
                  <Button 
                    className="flex-1 bg-gradient-accent hover:opacity-90" 
                    size="sm"
                    onClick={() => navigate(`/program/${program.id}`)}
                  >
                    {t('universities.viewDetails')}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90" 
                    size="sm"
                    onClick={() => navigate(`/program/${program.id}`)}
                  >
                    {t('universities.applyNow')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center items-center gap-2">
          <Button
            variant="outline"
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            &lt; Prev
          </Button>
          
          {[...Array(totalPages)].map((_, idx) => {
            const pageNum = idx + 1;
            if (
              pageNum === 1 ||
              pageNum === totalPages ||
              (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
            ) {
              return (
                <Button
                  key={pageNum}
                  variant={currentPage === pageNum ? "default" : "outline"}
                  onClick={() => setCurrentPage(pageNum)}
                  className={currentPage === pageNum ? "bg-primary" : ""}
                >
                  {pageNum}
                </Button>
              );
            } else if (pageNum === currentPage - 2 || pageNum === currentPage + 2) {
              return <span key={pageNum} className="px-2">...</span>;
            }
            return null;
          })}
          
          <Button
            variant="outline"
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
          >
            Next &gt;
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Universities;