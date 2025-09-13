import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cybersecurity.jpg";
const heroProfessionalImage = "/lovable-uploads/67b11867-0e34-4757-b1c0-a136f9e5deaf.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" role="banner">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroProfessionalImage} 
          alt="DARKSTACK7 cybersecurity professional in tactical gear monitoring cyber threats with advanced technology" 
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-cyber-dark/90 bg-gradient-dark"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-cyber-blue/10 border border-cyber-blue/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
            <Shield className="h-4 w-4 text-cyber-blue" />
            <span className="text-sm text-cyber-blue font-medium">Elite Cybersecurity Leadership</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Defending Your Business Against{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Digital Threats
            </span>
          </h1>

          {/* Quote */}
          <blockquote className="text-xl md:text-2xl text-muted-foreground mb-8 italic">
            "When cyber threats escalate, we respond with experience, precision, and speed."
          </blockquote>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Darkstack7 delivers elite advisory, incident response, and AI-era cybersecurity leadership 
            trusted by global enterprises and regulated industries.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center mb-16">
            <Button 
              variant="cyber" 
              size="lg" 
              className="text-lg px-8 py-3"
              onClick={() => window.open('https://outlook.office.com/bookwithme/user/a36dd60bc57d4471926cdb17d751f663@DarkStack7.com?anonymous&ismsaljsauthenabled&ep=plink', '_blank')}
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 text-cyber-cyan mb-2" />
              <div className="text-2xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground">Crisis Response</div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 text-cyber-cyan mb-2" />
              <div className="text-2xl font-bold text-foreground">Fortune 500</div>
              <div className="text-sm text-muted-foreground">Leadership Experience</div>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 text-cyber-cyan mb-2" />
              <div className="text-2xl font-bold text-foreground">24 Years</div>
              <div className="text-sm text-muted-foreground">Cybersecurity Expertise</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyber-blue/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyber-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;