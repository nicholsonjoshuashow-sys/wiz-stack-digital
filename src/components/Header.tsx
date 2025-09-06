import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-cyber-gray/30">
      <div className="container mx-auto px-6 py-4 bg-gradient-to-r from-blue-800 to-red-800">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div>
              <h1 className="text-xl font-bold text-pearl-white">
                DARKSTACK<span className="text-fire-red text-2xl ml-0.5">7</span>
              </h1>
              <p className="text-sm font-bold text-pearl-white">Cyber Defense</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-pearl-white hover:text-cyber-blue transition-colors">
              Services
            </a>
            <a href="#expertise" className="text-pearl-white hover:text-cyber-blue transition-colors">
              Expertise
            </a>
            <a href="#about" className="text-pearl-white hover:text-cyber-blue transition-colors">
              About
            </a>
            <Button variant="incident" size="sm" className="z-50">
              Report Incident
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-pearl-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-cyber-gray/30">
            <nav className="flex flex-col space-y-4 pt-4">
              <a href="#services" className="text-pearl-white hover:text-cyber-blue transition-colors">
                Services
              </a>
              <a href="#expertise" className="text-pearl-white hover:text-cyber-blue transition-colors">
                Expertise
              </a>
              <a href="#about" className="text-pearl-white hover:text-cyber-blue transition-colors">
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