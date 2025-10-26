import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  Target, 
  Shield, 
  Clock, 
  TrendingUp,
  GraduationCap,
  Award,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Loader2,
  AlertCircle
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useNavigate } from "react-router-dom";
import { useFieldTaxonomy } from "@/hooks/useFieldTaxonomy";

const Index = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { getFieldOptions, loading: fieldsLoading } = useFieldTaxonomy();
  
  const [country, setCountry] = useState("");
  const [degreeLevel, setDegreeLevel] = useState("");
  const [field, setField] = useState("");
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isFormValid = country && degreeLevel && field;
  const fieldOptions = getFieldOptions();

  const handleSubmit = () => {
    if (!isFormValid) {
      setShowError(true);
      return;
    }
    
    setIsLoading(true);
    setShowError(false);
    
    // Navigate to AI Matcher with params
    setTimeout(() => {
      navigate('/ai-matcher', { 
        state: { country, degreeLevel, field }
      });
    }, 800);
  };

  const advantages = [
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: t('advantages.personalized.title'),
      description: t('advantages.personalized.desc')
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: t('advantages.trusted.title'),
      description: t('advantages.trusted.desc')
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: t('advantages.save.title'),
      description: t('advantages.save.desc')
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: t('advantages.smart.title'),
      description: t('advantages.smart.desc')
    }
  ];

  const howItWorksSteps = [
    {
      number: "01",
      title: t('how.step1.title'),
      description: t('how.step1.desc')
    },
    {
      number: "02",
      title: t('how.step2.title'),
      description: t('how.step2.desc')
    },
    {
      number: "03",
      title: t('how.step3.title'),
      description: t('how.step3.desc')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero text-white py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Headline and Subtext */}
            <div className="text-center md:text-left space-y-4">
              <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-[80%] mx-auto md:mx-0 md:max-w-2xl">
                {t('hero.subtitle')}
              </p>
            </div>
            
            {/* Hero Form */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
              <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Country Select */}
                  <div className="space-y-2">
                    <label htmlFor="country" className="text-sm font-medium text-foreground sr-only">
                      Country
                    </label>
                    <Select 
                      value={country} 
                      onValueChange={(value) => {
                        setCountry(value);
                        setShowError(false);
                      }}
                    >
                      <SelectTrigger 
                        id="country"
                        className="h-12 md:h-14 bg-background text-foreground touch-manipulation"
                        aria-label="Select country"
                      >
                        <SelectValue placeholder={t('hero.country.placeholder')} />
                      </SelectTrigger>
                      <SelectContent className="bg-popover z-50">
                        <SelectItem value="germany">🇩🇪 {t('country.germany')}</SelectItem>
                        <SelectItem value="uae">🇦🇪 {t('country.uae')}</SelectItem>
                        <SelectItem value="malaysia">🇲🇾 {t('country.malaysia')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Degree Level Select */}
                  <div className="space-y-2">
                    <label htmlFor="degree" className="text-sm font-medium text-foreground sr-only">
                      Degree Level
                    </label>
                    <Select 
                      value={degreeLevel} 
                      onValueChange={(value) => {
                        setDegreeLevel(value);
                        setShowError(false);
                      }}
                    >
                      <SelectTrigger 
                        id="degree"
                        className="h-12 md:h-14 bg-background text-foreground touch-manipulation"
                        aria-label="Select degree level"
                      >
                        <SelectValue placeholder={t('hero.degree.placeholder')} />
                      </SelectTrigger>
                      <SelectContent className="bg-popover z-50">
                        <SelectItem value="diploma">{t('degree.diploma')}</SelectItem>
                        <SelectItem value="bachelor">{t('degree.bachelor')}</SelectItem>
                        <SelectItem value="master">{t('degree.master')}</SelectItem>
                        <SelectItem value="phd">{t('degree.phd')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Field of Study Select */}
                  <div className="space-y-2">
                    <label htmlFor="field" className="text-sm font-medium text-foreground sr-only">
                      Field of Study
                    </label>
                    <Select 
                      value={field} 
                      onValueChange={(value) => {
                        setField(value);
                        setShowError(false);
                      }}
                      disabled={fieldsLoading}
                    >
                      <SelectTrigger 
                        id="field"
                        className="h-12 md:h-14 bg-background text-foreground touch-manipulation"
                        aria-label="Select field of study"
                      >
                        <SelectValue placeholder={t('hero.field.placeholder')} />
                      </SelectTrigger>
                      <SelectContent className="bg-popover z-50 max-h-[300px]">
                        {fieldOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Error Message */}
                {showError && !isFormValid && (
                  <div className="flex items-center gap-2 text-destructive text-sm bg-destructive/10 p-3 rounded-lg" role="alert">
                    <AlertCircle className="h-4 w-4 flex-shrink-0" />
                    <span>Please complete all fields.</span>
                  </div>
                )}

                {/* CTA Button */}
                <Button 
                  type="submit"
                  size="lg" 
                  disabled={!isFormValid || isLoading}
                  className="w-full h-12 md:h-14 bg-gradient-accent hover:opacity-90 text-base font-semibold touch-manipulation disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="See my best matches"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Finding programs for you…
                    </>
                  ) : (
                    t('hero.cta')
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('advantages.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center border-2 hover:border-primary transition-colors hover:shadow-lg">
                <CardContent className="pt-8 pb-6">
                  <div className="flex justify-center mb-4">{advantage.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('how.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full">
                  <CardContent className="pt-8 pb-6">
                    <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                {index < howItWorksSteps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universities Preview Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('universities.home.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('universities.home.subtitle')}
            </p>
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-gradient-accent" asChild>
              <Link to="/universities">
                {t('universities.home.viewAll')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Scholarships Preview Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('scholarships.home.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('scholarships.home.subtitle')}
            </p>
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-gradient-accent" asChild>
              <Link to="/scholarships">
                {t('scholarships.home.viewAll')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Careers Preview Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('careers.home.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('careers.home.subtitle')}
            </p>
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-gradient-accent" asChild>
              <Link to="/careers">
                {t('careers.home.viewAll')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="pt-8 pb-8">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg mb-4 italic">"{t('testimonial.quote')}"</p>
                  <div>
                    <p className="font-semibold">{t('testimonial.name')}</p>
                    <p className="text-sm text-muted-foreground">{t('testimonial.location')}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('partners.title')}
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 hover:opacity-100 transition-opacity">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-32 h-16 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground font-semibold">Partner {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="py-16 md:py-24 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t('midCta.title')}
          </h2>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
            <Link to="/universities">{t('midCta.button')}</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
