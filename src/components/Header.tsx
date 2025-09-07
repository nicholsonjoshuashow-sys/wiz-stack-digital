import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-cyber-gray/30">
      <div className="container mx-auto px-6 py-4 bg-gradient-to-r from-blue-800 to-red-800">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="https://www.darkstack7.com" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <h1 className="text-xl font-bold text-pearl-white">
                DARKSTACK<span className="text-fire-red text-2xl ml-0.5">7</span>
              </h1>
              <p className="text-sm font-bold text-pearl-white">Cyber Defense</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-6">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className="text-pearl-white hover:text-cyber-blue transition-colors px-3 py-2 text-sm font-medium"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-pearl-white hover:text-cyber-blue bg-transparent border-0 p-0 h-auto">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-background border border-border">
                    <li>
                      <NavigationMenuLink
                        href="/services/IR"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">Incident Response</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          24/7 emergency cyber incident response services
                        </p>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/services/CISO"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">Virtual CISO</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Strategic cybersecurity leadership services
                        </p>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/services/penetration-testing"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">Penetration Testing</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Comprehensive security vulnerability assessments
                        </p>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/services/security-assessments-consulting"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">Security Consulting</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Strategic security assessments and consulting
                        </p>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/services/insiderthreat"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">Insider Threat</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Insider threat detection and mitigation
                        </p>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/services/tabletop_exercises"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">Tabletop Exercises</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Incident response training and simulations
                        </p>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/media"
                  className="text-pearl-white hover:text-cyber-blue transition-colors px-3 py-2 text-sm font-medium"
                >
                  Media
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/podcast"
                  className="text-pearl-white hover:text-cyber-blue transition-colors px-3 py-2 text-sm font-medium"
                >
                  Podcast
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/contact"
                  className="text-pearl-white hover:text-cyber-blue transition-colors px-3 py-2 text-sm font-medium"
                >
                  Contact Us
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button 
            variant="incident" 
            size="sm" 
            className="hidden md:block z-50 ml-6"
            onClick={() => window.location.href = '/contact'}
          >
            Report Incident
          </Button>

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
              <a href="/" className="text-pearl-white hover:text-cyber-blue transition-colors">
                Home
              </a>
              <div className="space-y-2">
                <div className="text-pearl-white font-medium">Services</div>
                <div className="pl-4 space-y-2">
                  <a href="/services/IR" className="block text-pearl-white/80 hover:text-cyber-blue transition-colors text-sm">
                    Incident Response
                  </a>
                  <a href="/services/CISO" className="block text-pearl-white/80 hover:text-cyber-blue transition-colors text-sm">
                    Virtual CISO
                  </a>
                  <a href="/services/penetration-testing" className="block text-pearl-white/80 hover:text-cyber-blue transition-colors text-sm">
                    Penetration Testing
                  </a>
                  <a href="/services/security-assessments-consulting" className="block text-pearl-white/80 hover:text-cyber-blue transition-colors text-sm">
                    Security Consulting
                  </a>
                  <a href="/services/insiderthreat" className="block text-pearl-white/80 hover:text-cyber-blue transition-colors text-sm">
                    Insider Threat
                  </a>
                  <a href="/services/tabletop_exercises" className="block text-pearl-white/80 hover:text-cyber-blue transition-colors text-sm">
                    Tabletop Exercises
                  </a>
                </div>
              </div>
              <a href="/podcast" className="text-pearl-white hover:text-cyber-blue transition-colors">
                Podcast
              </a>
              <a href="/contact" className="text-pearl-white hover:text-cyber-blue transition-colors">
                Contact Us
              </a>
              <Button 
                variant="incident" 
                size="sm" 
                className="w-full"
                onClick={() => window.location.href = '/contact'}
              >
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