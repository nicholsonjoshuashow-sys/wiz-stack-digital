import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Trophy, 
  Globe, 
  Presentation, 
  Clock, 
  Lightbulb,
  Building2,
  Users,
  Shield,
  ArrowRight,
  Cloud,
  KeyRound,
  Settings,
  BookOpen,
  FileText
} from "lucide-react";
import ctaProfessional from "@/assets/cta-professional.png";

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
      icon: <Presentation className="h-8 w-8" />,
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
    <>
      {/* Our Expertise Section */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Azure Cloud & Office 365 Security Assessment */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Cloud className="h-8 w-8 text-cyber-blue" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Azure Cloud & Office 365 <span className="text-cyber-blue">Security Assessment</span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A structured advisory engagement designed to give organizations a clear, prioritized view of their Microsoft cloud security posture — covering Azure infrastructure, Entra ID, and Office 365.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <img 
              src="/lovable-uploads/azure-cloud-security-assessment.png" 
              alt="DarkStack7 Azure Cloud and Office 365 Security Assessment workflow showing the process of finding and closing security weaknesses"
              className="max-w-full md:max-w-3xl rounded-lg shadow-glow border border-cyber-gray/30"
            />
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="group p-6 bg-card/50 backdrop-blur-sm border-cyber-gray/30 hover:border-cyber-blue/50 transition-all duration-300 hover:shadow-glow">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-cyber-blue" />
                  <h3 className="text-xl font-bold text-foreground group-hover:text-cyber-blue transition-colors">Security Architecture</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Evaluate your overall security control framework and how it aligns with industry standards like NIST CSF and CIS Controls.
                </p>
                <ul className="space-y-2">
                  {["Control framework alignment", "Logging & monitoring visibility", "Network segmentation review", "Secure Score assessment"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-cyber-cyan rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="group p-6 bg-card/50 backdrop-blur-sm border-cyber-gray/30 hover:border-cyber-blue/50 transition-all duration-300 hover:shadow-glow">
                <div className="flex items-center gap-3 mb-4">
                  <KeyRound className="h-6 w-6 text-cyber-blue" />
                  <h3 className="text-xl font-bold text-foreground group-hover:text-cyber-blue transition-colors">Identity & Access Management</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Review identity practices across Entra ID and M365 — from Conditional Access policies to privileged account hygiene.
                </p>
                <ul className="space-y-2">
                  {["MFA enforcement & gaps", "Global Admin overuse", "Legacy authentication blocking", "Privileged Identity Management (PIM)"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-cyber-cyan rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="group p-6 bg-card/50 backdrop-blur-sm border-cyber-gray/30 hover:border-cyber-blue/50 transition-all duration-300 hover:shadow-glow">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="h-6 w-6 text-cyber-blue" />
                  <h3 className="text-xl font-bold text-foreground group-hover:text-cyber-blue transition-colors">Critical System Configuration</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Hands-on review of Exchange, SharePoint, Teams, and Azure workload configurations for security misconfigurations.
                </p>
                <ul className="space-y-2">
                  {["SharePoint external sharing settings", "Exchange mail forwarding rules", "Teams guest access policies", "Azure PaaS security controls"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-cyber-cyan rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="group p-6 bg-card/50 backdrop-blur-sm border-cyber-gray/30 hover:border-cyber-blue/50 transition-all duration-300 hover:shadow-glow">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="h-6 w-6 text-cyber-blue" />
                  <h3 className="text-xl font-bold text-foreground group-hover:text-cyber-blue transition-colors">Documentation & Reporting</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  A written findings report structured for both your technical team and executive leadership, with prioritized remediation guidance.
                </p>
                <ul className="space-y-2">
                  {["Executive-ready risk summary", "Technical remediation steps", "NIST CSF & CIS Controls mapping", "Compliance-aligned framing"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-cyber-cyan rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <div className="bg-card/80 backdrop-blur-sm border border-cyber-gray/30 rounded-lg p-8 shadow-glow">
              <h3 className="text-2xl font-bold mb-6 text-foreground text-center">Engagement Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Clock className="h-8 w-8 text-cyber-blue mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Timeline</h4>
                  <p className="text-muted-foreground text-sm">2–4 weeks from kickoff to report delivery, depending on environment size and complexity.</p>
                </div>
                <div className="text-center">
                  <KeyRound className="h-8 w-8 text-cyber-blue mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Access Required</h4>
                  <p className="text-muted-foreground text-sm">Read-only access — Global Reader in Entra ID and Reader-level in Azure. No more than necessary.</p>
                </div>
                <div className="text-center">
                  <FileText className="h-8 w-8 text-cyber-blue mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Deliverable</h4>
                  <p className="text-muted-foreground text-sm">Written findings report with specific findings, remediation guidance, and executive risk summary.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Profile Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
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

      {/* Neon CTA Section */}
      <section className="relative py-20 overflow-hidden bg-cyber-dark">
        {/* Animated neon background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/10 via-cyber-cyan/5 to-cyber-blue/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyber-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyber-cyan/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            {/* Professional Image with neon glow */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyber-blue via-cyber-cyan to-cyber-blue rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="relative w-40 h-40 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-cyber-blue shadow-[0_0_30px_rgba(0,212,255,0.5),0_0_60px_rgba(0,212,255,0.3),0_0_90px_rgba(0,212,255,0.1)]">
                <img 
                  src={ctaProfessional} 
                  alt="Cybersecurity Expert" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* CTA Content */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Ready to <span className="text-cyber-blue drop-shadow-[0_0_10px_rgba(0,212,255,0.8)]">Secure</span> Your Business?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Let's discuss your cybersecurity needs with a no-obligation consultation.
              </p>
              <Link to="/contact">
                <Button 
                  variant="cyber" 
                  size="lg" 
                  className="text-lg px-10 py-6 relative overflow-hidden group shadow-[0_0_20px_rgba(0,212,255,0.4),0_0_40px_rgba(0,212,255,0.2)] hover:shadow-[0_0_30px_rgba(0,212,255,0.6),0_0_60px_rgba(0,212,255,0.4)] transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center">
                    Get Started with your free consultation Today!
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 to-cyber-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Neon line accents */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent"></div>
      </section>
    </>
  );
};

export default Expertise;