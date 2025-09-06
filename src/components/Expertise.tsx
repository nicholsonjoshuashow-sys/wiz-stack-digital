import { Card } from "@/components/ui/card";
import { 
  Trophy, 
  Globe, 
  MessageCircle, 
  Clock, 
  Lightbulb,
  Building2,
  Users,
  Shield
} from "lucide-react";

const Expertise = () => {
  const expertiseAreas = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Fortune 500 Leadership",
      description: "Harness the strategic insight and operational excellence of seasoned enterprise security leaders—now tailored to meet the needs of mid-market and SMB organizations."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Security Leadership", 
      description: "Proven success delivering cybersecurity strategies across industries and continents—from the U.K. and Europe to Africa, the Middle East, Asia, and Australia."
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Board-Level Communication",
      description: "We translate complex security challenges into clear, actionable insights for executives and boards, building confidence during times of crisis."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Crisis Response",
      description: "Our team is on standby to provide immediate, expert-level support when you need it most."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Strategic Thought Leadership",
      description: "Stay ahead of the curve with forward-thinking guidance and innovative solutions that anticipate future threats."
    }
  ];

  const credentials = [
    { label: "Years Experience", value: "24+" },
    { label: "Fortune 500 Companies", value: "Multiple" },
    { label: "Security Incidents Managed", value: "Hundreds" },
    { label: "Countries", value: "Global" }
  ];

  return (
    <section id="expertise" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional & Credible - "Elite Cybersecurity for High-Stakes Moments."
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {credentials.map((credential, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyber-blue mb-2">
                {credential.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {credential.label}
              </div>
            </div>
          ))}
        </div>

        {/* Expertise Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {expertiseAreas.map((area, index) => (
            <Card key={index} className="group p-6 bg-card/50 backdrop-blur-sm border-cyber-gray/30 hover:border-cyber-blue/50 transition-all duration-300 hover:shadow-glow">
              <div className="text-cyber-blue mb-4 group-hover:text-cyber-cyan transition-colors">
                {area.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-cyber-blue transition-colors">
                {area.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Leadership Profile */}
        <Card className="p-8 bg-gradient-cyber border-cyber-blue/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-cyber-blue mr-3" />
                <h3 className="text-2xl font-bold text-foreground">Leadership Profile</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded by <strong className="text-cyber-blue">Joshua R. Nicholson</strong>—a 24-year cybersecurity veteran 
                and former U.S. Marine with leadership experience at:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Northrop Grumman", "Whitney Bank", "EY", "Wells Fargo", 
                  "Cofense", "Booz Allen Hamilton", "Deepseas"
                ].map((company, index) => (
                  <div key={index} className="flex items-center">
                    <Building2 className="h-4 w-4 text-cyber-cyan mr-2" />
                    <span className="text-sm text-foreground">{company}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-cyber-blue/10 border-2 border-cyber-blue/30 rounded-full mb-4">
                <Users className="h-12 w-12 text-cyber-blue" />
              </div>
              <p className="text-sm text-muted-foreground">
                Managing hundreds of security incidents across multiple countries
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Expertise;