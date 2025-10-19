import { Button } from "@/components/ui/button";
import { Globe, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { name: t('nav.universities'), path: "/universities" },
    { name: t('nav.programs'), path: "/universities" },
    { name: t('nav.about'), path: "#about" },
    { name: t('nav.support'), path: "#support" },
  ];

  const languages = [
    { name: "O'zbekcha", code: "uz" as const },
    { name: "Русский", code: "ru" as const },
    { name: "English", code: "en" as const },
  ];
  
  const currentLanguageName = languages.find(lang => lang.code === language)?.name || "English";

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Uniworld
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-1">
                  <Globe className="h-4 w-4" />
                  {currentLanguageName}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-popover z-50">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className="cursor-pointer"
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline">{t('nav.login')}</Button>
            <Button className="bg-gradient-accent">{t('nav.register')}</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full gap-1">
                    <Globe className="h-4 w-4" />
                    {currentLanguageName}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-popover z-50">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className="cursor-pointer"
                    >
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="outline" className="w-full">
                {t('nav.login')}
              </Button>
              <Button className="w-full bg-gradient-accent">
                {t('nav.register')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
