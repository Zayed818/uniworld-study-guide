import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Search, 
  GraduationCap, 
  TrendingUp, 
  Award, 
  Globe2, 
  Shield, 
  Users, 
  CheckCircle2,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: <Search className="h-8 w-8 text-accent" />,
      title: "Smart Search",
      description: "Find universities that match your goals, budget, and preferences"
    },
    {
      icon: <Sparkles className="h-8 w-8 text-accent" />,
      title: "AI Matcher",
      description: "Get personalized university recommendations powered by AI"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: "Career Advisor",
      description: "Discover careers and the best universities to reach your goals"
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Scholarship Hub",
      description: "Access thousands of scholarships and funding opportunities"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Verified Agencies",
      description: "All partner agencies are thoroughly vetted and trusted"
    },
    {
      icon: <Globe2 className="h-6 w-6" />,
      title: "Global Reach",
      description: "Access universities from 30+ countries worldwide"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Multilingual Support",
      description: "Platform available in English, Russian, and Uzbek"
    },
    {
      icon: <CheckCircle2 className="h-6 w-6" />,
      title: "Transparent Process",
      description: "Clear pricing, honest guidance, no hidden fees"
    }
  ];

  const featuredUniversities = [
    {
      name: "Stanford University",
      country: "United States",
      field: "Computer Science",
      tuition: "$27,100/year"
    },
    {
      name: "University of Oxford",
      country: "United Kingdom",
      field: "Business",
      tuition: "£26,770/year"
    },
    {
      name: "University of Toronto",
      country: "Canada",
      field: "Engineering",
      tuition: "CAD $58,160/year"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Find Your Perfect University Abroad
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Simple, Fast, Trusted — Connect with verified agencies and discover your dream university
            </p>
            
            <div className="bg-white rounded-2xl p-2 shadow-2xl max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input 
                  placeholder="Search universities, programs, or countries..." 
                  className="flex-1 h-12 border-0 text-foreground"
                />
                <Button size="lg" className="bg-gradient-accent hover:opacity-90 h-12 px-8">
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link to="/ai-matcher">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20">
                  <Sparkles className="h-5 w-5 mr-2" />
                  Try AI Matcher
                </Button>
              </Link>
              <Link to="/universities">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20">
                  <GraduationCap className="h-5 w-5 mr-2" />
                  Browse Universities
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">Three simple steps to your dream university</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Tell Us Your Goals</h3>
                <p className="text-muted-foreground">
                  Share your academic interests, budget, and preferences
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Personalized Matches</h3>
                <p className="text-muted-foreground">
                  Our AI finds the best universities and programs for you
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Apply Through Trusted Agencies</h3>
                <p className="text-muted-foreground">
                  Connect with verified agencies who guide you every step
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Tools for Your Journey</h2>
            <p className="text-xl text-muted-foreground">Everything you need to find and apply to universities abroad</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-accent hover:shadow-glow transition-all">
                <CardContent className="pt-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-accent-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Uniworld?</h2>
            <p className="text-xl text-muted-foreground">Your trusted partner in studying abroad</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Universities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Featured Universities</h2>
              <p className="text-xl text-muted-foreground">Explore top institutions worldwide</p>
            </div>
            <Link to="/universities">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredUniversities.map((uni, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="aspect-video bg-gradient-to-br from-primary to-primary-glow rounded-lg mb-4 flex items-center justify-center">
                    <GraduationCap className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{uni.name}</h3>
                  <p className="text-muted-foreground mb-1">{uni.country}</p>
                  <p className="text-sm text-muted-foreground mb-3">Focus: {uni.field}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-accent">{uni.tuition}</span>
                    <Button size="sm">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your Journey Today</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of students who found their perfect university through Uniworld
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/ai-matcher">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg">
                <Sparkles className="mr-2 h-5 w-5" />
                Get AI Recommendations
              </Button>
            </Link>
            <Link to="/universities">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20">
                Explore Universities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
