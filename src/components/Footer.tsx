import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
              Uniworld
            </h3>
            <p className="text-muted-foreground mb-4">
              Find your perfect university abroad — Simple, Fast, Trusted.
            </p>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@uniworld.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (234) 567-890</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Uzbekistan</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/universities" className="hover:text-primary transition-colors">
                  University Finder
                </Link>
              </li>
              <li>
                <Link to="/ai-matcher" className="hover:text-primary transition-colors">
                  AI Matcher
                </Link>
              </li>
              <li>
                <Link to="/career-advisor" className="hover:text-primary transition-colors">
                  Career Advisor
                </Link>
              </li>
              <li>
                <Link to="/scholarships" className="hover:text-primary transition-colors">
                  Scholarships
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/partner-agencies" className="hover:text-primary transition-colors">
                  Partner Agencies
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="hover:text-primary transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="hover:text-primary transition-colors">
                  Legal Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} EduBridge LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
