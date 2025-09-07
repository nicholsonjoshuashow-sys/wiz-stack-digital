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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-cyber-blue mr-3" />
                <h3 className="text-2xl font-bold text-foreground">Leadership Profile</h3>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-bold text-cyber-blue mb-2">Joshua R. Nicholson (Founder & CEO)</h4>
                <p className="text-sm text-cyber-cyan mb-2">CISSP, CISM, GIAC-GCIH, GCIA, GCWN, GWEB, CCNP, MCSE</p>
                <p className="text-muted-foreground leading-relaxed">
                  A multi-faceted, strategic, and accomplished former <strong className="text-cyber-blue">U.S. Marine Corps Sergeant</strong> with 
                  24 years of "hands-on keyboard" technology experience coupled with direct CXO and Board transformation enablement skills.
                </p>
              </div>
              
              <div className="mb-6">
                <h5 className="text-sm font-semibold text-cyber-blue mb-3">Global Experience & Leadership</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Executive management of global teams across 6 countries</li>
                  <li>• Business travels to over 34 countries</li>
                  <li>• International experience (U.K., EU, Middle East, Asia, Australia)</li>
                  <li>• Managing Director at Booz Allen Hamilton</li>
                  <li>• Board Member at OnDefend and NC Vets Business</li>
                </ul>
              </div>

              <div className="mb-6">
                <h5 className="text-sm font-semibold text-cyber-blue mb-3">Key Leadership Positions</h5>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    { company: "Surefire Cyber", role: "Leadership Role" },
                    { company: "DeepSeas", role: "Leadership Role" },
                    { company: "Booz Allen Hamilton", role: "Managing Director" },
                    { company: "Cofense", role: "Senior Vice President" },
                    { company: "Wells Fargo", role: "Group Information Security Officer" },
                    { company: "EY", role: "Cyber Security Consulting Manager" },
                    { company: "Whitney Bank", role: "VP Information Security Manager" },
                    { company: "Northrop Grumman", role: "Security Engineering" },
                    { company: "Marine Corps", role: "Sergeant" }
                  ].map((position, index) => (
                    <div key={index} className="flex items-start">
                      <Building2 className="h-3 w-3 text-cyber-cyan mr-2 mt-1 flex-shrink-0" />
                      <div className="text-xs">
                        <span className="text-foreground font-medium">{position.company}</span>
                        <span className="text-muted-foreground"> - {position.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="text-sm font-semibold text-cyber-blue mb-2">Education & Credentials</h5>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>• Tulane University - B.S. Computer Information Systems</p>
                  <p>• Wharton School of Business - Executive Education</p>
                  <p>• U.S. Marine Corps Communications/Electronics School</p>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-right">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-cyber-blue/10 border-2 border-cyber-blue/30 rounded-full mb-4 overflow-hidden">
                <img 
                  src="/lovable-uploads/039106a2-b7d9-4be2-af77-cbbbe660d577.png" 
                  alt="Joshua R. Nicholson - Founder & CEO of Darkstack7"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyber-blue">24+</div>
                  <div className="text-xs text-muted-foreground">Years Experience</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyber-blue">34+</div>
                  <div className="text-xs text-muted-foreground">Countries Traveled</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyber-blue">6</div>
                  <div className="text-xs text-muted-foreground">Countries Managed</div>
                </div>
                
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Expert in translating complex security challenges into clear, actionable insights for executives and boards
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Expertise;