import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-cyber-gray/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-cyber-blue" />
            <div>
              <h1 className="text-xl font-bold text-foreground">
                DARKSTACK<span className="text-fire-red text-2xl ml-0.5">7</span>
              </h1>
              <p className="text-xs text-muted-foreground">Cyber Defense</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-cyber-blue transition-colors">
              Services
            </a>
            <a href="#expertise" className="text-foreground hover:text-cyber-blue transition-colors">
              Expertise
            </a>
            <a href="#about" className="text-foreground hover:text-cyber-blue transition-colors">
              About
            </a>
            <Button variant="incident" size="sm">
              Report Incident
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-cyber-gray/30">
            <nav className="flex flex-col space-y-4 pt-4">
              <a href="#services" className="text-foreground hover:text-cyber-blue transition-colors">
                Services
              </a>
              <a href="#expertise" className="text-foreground hover:text-cyber-blue transition-colors">
                Expertise
              </a>
              <a href="#about" className="text-foreground hover:text-cyber-blue transition-colors">
                About
              </a>
              <Button variant="incident" size="sm" className="w-full">
                Report Incident
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;