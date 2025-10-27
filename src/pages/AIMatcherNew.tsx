import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useFieldTaxonomy } from "@/hooks/useFieldTaxonomy";
import { Loader2, GraduationCap, MapPin, DollarSign, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface MatchResult {
  id: string;
  name: string;
  university: string;
  country: string;
  degreeLevel: string;
  tuitionPerYear: number;
  scholarshipAvailable: boolean;
  deadline: string;
  matchScore: number;
  rationale: string;
  tags: string[];
}

const AIMatcherNew = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { getFieldOptions, getSubfieldOptions, loading: fieldsLoading } = useFieldTaxonomy();
  
  const [country, setCountry] = useState("");
  const [degreeLevel, setDegreeLevel] = useState("");
  const [field, setField] = useState("");
  const [subfield, setSubfield] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<MatchResult[] | null>(null);
  const [message, setMessage] = useState("");

  const isFormValid = country && degreeLevel && field;

  const handleSubmit = async () => {
    if (!isFormValid) return;

    setLoading(true);
    setResults(null);
    setMessage("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/match-programs`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            country,
            degreeLevel,
            field,
            subfield: subfield || undefined,
          }),
        }
      );

      const data = await response.json();
      
      if (data.error) {
        toast({
          title: "Error",
          description: data.error,
          variant: "destructive",
        });
      } else {
        setResults(data.matches);
        if (data.message) {
          setMessage(data.message);
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch matches. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fieldOptions = getFieldOptions();
  const subfieldOptions = field ? getSubfieldOptions(field) : [];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              {t('hero.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('hero.subtitle')}
            </p>
          </div>

          {/* Form Card */}
          <Card>
            <CardHeader>
              <CardTitle>Find Your Program</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    {t('hero.country.placeholder')}
                  </label>
                  <Select value={country} onValueChange={setCountry}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder={t('hero.country.placeholder')} />
                    </SelectTrigger>
                    <SelectContent className="bg-background border shadow-lg z-[100]">
                      <SelectItem value="germany">🇩🇪 Germany</SelectItem>
                      <SelectItem value="uae">🇦🇪 UAE</SelectItem>
                      <SelectItem value="malaysia">🇲🇾 Malaysia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    {t('hero.degree.placeholder')}
                  </label>
                  <Select value={degreeLevel} onValueChange={setDegreeLevel}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder={t('hero.degree.placeholder')} />
                    </SelectTrigger>
                    <SelectContent className="bg-background border shadow-lg z-[100]">
                      <SelectItem value="diploma">{t('degree.diploma')}</SelectItem>
                      <SelectItem value="bachelor">{t('degree.bachelor')}</SelectItem>
                      <SelectItem value="master">{t('degree.master')}</SelectItem>
                      <SelectItem value="phd">{t('degree.phd')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    {t('hero.field.placeholder')}
                  </label>
                  <Select 
                    value={field} 
                    onValueChange={(value) => {
                      setField(value);
                      setSubfield("");
                    }}
                    disabled={fieldsLoading}
                  >
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder={t('hero.field.placeholder')} />
                    </SelectTrigger>
                    <SelectContent className="bg-background border shadow-lg z-[100] max-h-[300px]">
                      {fieldOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {field && subfieldOptions.length > 0 && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Specialization (Optional)
                    </label>
                    <Select value={subfield} onValueChange={setSubfield}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select specialization" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border shadow-lg z-[100] max-h-[300px]">
                      {subfieldOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                    </Select>
                  </div>
                )}
              </div>

              <Button
                onClick={handleSubmit}
                disabled={!isFormValid || loading}
                className="w-full h-14 bg-gradient-accent text-lg font-semibold"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    {t('hero.loading')}
                  </>
                ) : (
                  t('hero.cta')
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          {results && (
            <div className="space-y-6">
              {message && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-yellow-800">
                  {message}
                </div>
              )}

              <h2 className="text-2xl font-bold">
                {results.length} {results.length === 1 ? 'Match' : 'Matches'} Found
              </h2>

              <div className="grid gap-6">
                {results.map((program) => (
                  <Card 
                    key={program.id} 
                    className="hover:shadow-lg transition-all cursor-pointer hover:border-primary/50"
                    onClick={() => navigate(`/program/${program.id}`)}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        navigate(`/program/${program.id}`);
                      }
                    }}
                  >
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="space-y-3 flex-1">
                          <div>
                            <h3 className="text-xl font-bold">{program.name}</h3>
                            <p className="text-muted-foreground">{program.university}</p>
                          </div>

                          <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4 text-primary" />
                              <span className="capitalize">{program.country}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <GraduationCap className="h-4 w-4 text-primary" />
                              <span className="capitalize">{program.degreeLevel}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <DollarSign className="h-4 w-4 text-primary" />
                              <span>
                                {program.tuitionPerYear === 0 
                                  ? 'No Tuition' 
                                  : `$${program.tuitionPerYear.toLocaleString()}/year`
                                }
                              </span>
                            </div>
                            {program.scholarshipAvailable && (
                              <div className="flex items-center gap-1">
                                <Award className="h-4 w-4 text-primary" />
                                <span>Scholarship Available</span>
                              </div>
                            )}
                          </div>

                          <p className="text-sm text-muted-foreground">
                            {program.rationale}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {program.tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col items-center justify-center bg-primary/5 rounded-lg p-4 min-w-[120px]">
                          <div className="text-3xl font-bold text-primary">
                            {program.matchScore}%
                          </div>
                          <div className="text-xs text-muted-foreground text-center">
                            Match Score
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AIMatcherNew;
