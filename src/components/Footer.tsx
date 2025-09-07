import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import darkstackOfficialLogo from "@/assets/darkstack7-shield-logo.png";
import { useState } from "react";

const Footer = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  return (
    <footer className="bg-cyber-dark border-t border-cyber-gray/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={darkstackOfficialLogo} alt="DARKSTACK7 Shield Logo" className="h-8 w-8" />
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  DARKSTACK<span className="text-fire-red text-2xl ml-0.5">7</span>
                </h3>
                <p className="text-xs text-muted-foreground">Cyber Defense</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Elite cybersecurity leadership and incident response services for organizations 
              facing complex digital threats. Professional, credible, and ready for high-stakes moments.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-cyber-blue" />
                <span className="text-muted-foreground">contact@darkstack7.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-cyber-blue" />
                <span className="text-muted-foreground">24/7 Emergency Hotline</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-cyber-blue" />
                <span className="text-muted-foreground">Global Remote Services</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="/services/IR" className="text-muted-foreground hover:text-cyber-blue transition-colors">Incident Response</a></li>
              <li><a href="/services/CISO" className="text-muted-foreground hover:text-cyber-blue transition-colors">Virtual CISO</a></li>
              <li><a href="/services/penetration-testing" className="text-muted-foreground hover:text-cyber-blue transition-colors">Penetration Testing</a></li>
              <li><a href="/services/security-assessments-consulting" className="text-muted-foreground hover:text-cyber-blue transition-colors">Security Consulting</a></li>
              <li><a href="/services/insiderthreat" className="text-muted-foreground hover:text-cyber-blue transition-colors">Insider Threat</a></li>
              <li><a href="/services/tabletop_exercises" className="text-muted-foreground hover:text-cyber-blue transition-colors">Tabletop Exercises</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-cyber-blue transition-colors">About Us</a></li>
              <li><a href="#expertise" className="text-muted-foreground hover:text-cyber-blue transition-colors">Our Expertise</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-cyber-blue transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-cyber-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-cyber-blue transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyber-gray/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Darkstack7. All rights reserved. Elite cybersecurity for high-stakes moments.
            </p>
            <div className="mt-4 md:mt-0">
              <span className="text-xs text-muted-foreground">
                Founded by U.S. Marine veteran • 24 years cybersecurity experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;