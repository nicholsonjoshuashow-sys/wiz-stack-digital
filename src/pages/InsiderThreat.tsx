import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Users, 
  Search, 
  Eye, 
  Shield, 
  FileText,
  Lock,
  ArrowRight,
  CheckCircle,
  AlertTriangle
} from "lucide-react";

const InsiderThreat = () => {
  const investigationTypes = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Employee Investigations",
      description: "Comprehensive investigation of suspicious employee activities, data access patterns, and policy violations."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Contractor Monitoring",
      description: "Third-party and contractor risk assessment including access reviews and activity analysis."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Data Theft Cases",
      description: "Investigation of intellectual property theft, data exfiltration, and unauthorized information sharing."
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Behavioral Analysis",
      description: "Advanced behavioral analytics to identify patterns indicative of malicious or compromised insiders."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Assessment",
      description: "Discreet evaluation of the suspected insider threat and scoping of investigation requirements."
    },
    {
      step: "02", 
      title: "Digital Forensics",
      description: "Comprehensive digital investigation including system logs, communications, and data access patterns."
    },
    {
      step: "03",
      title: "Behavioral Analysis", 
      description: "Deep analysis of user behavior patterns, access anomalies, and risk indicators."
    },
    {
      step: "04",
      title: "Evidence & Remediation",
      description: "Evidence preservation for legal processes and guidance on containment and prevention measures."
    }
  ];

  const riskIndicators = [
    "Unusual data access patterns",
    "After-hours system activity", 
    "Large data downloads or transfers",
    "Access to unauthorized systems",
    "Policy violations and circumvention",
    "Suspicious communication patterns"
  ];

  return (
    <>
      <SEO 
        title="Insider Threat Investigation Services | Employee Security Investigations | Darkstack7"
        description="Professional insider threat investigations using behavioral analysis, digital forensics, and activity reviews to identify malicious, negligent, or compromised insiders."
        keywords="insider threat, employee investigation, data theft investigation, behavioral analysis, digital forensics, contractor security, insider risk"
        canonical="https://darkstack7.com/services/insiderthreat"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-dark overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <Badge variant="outline" className="mb-6 border-cyber-blue/30 text-cyber-blue">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Confidential Investigations
                </Badge>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                  Insider Threat <span className="bg-gradient-primary bg-clip-text text-transparent">Investigation</span>
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                  Our Insider Threat Investigation service uncovers risks from trusted employees, contractors, or third parties. 
                  We conduct comprehensive investigations using behavioral analysis, digital forensics, and deep activity reviews 
                  to identify malicious, negligent, or compromised insiders.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="cyber" className="text-lg" asChild>
                    <Link to="/#contact">
                      Start Investigation
                      <Search className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="#capabilities">
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Investigation Types */}
          <section id="capabilities" className="py-20 bg-background">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  Investigation <span className="text-cyber-blue">Capabilities</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Whether it's data theft, policy violations, or suspicious access patterns, we get to the truth quickly and discreetly.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {investigationTypes.map((type, index) => (
                  <Card key={index} className="p-6 border-cyber-gray/30 hover:border-cyber-blue/50 transition-all">
                    <div className="text-cyber-blue mb-4">
                      {type.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {type.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {type.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Service Description */}
          <section className="py-20 bg-gradient-dark">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-6 text-foreground">
                      Uncovering Truth with Discretion
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Our team ensures evidence is preserved for legal, HR, or regulatory processes. We don't just 
                      stop at identification—we guide your team through containment, remediation, and future prevention.
                    </p>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      When trust breaks down internally, we bring clarity and control. Our investigations are conducted 
                      with the highest level of confidentiality while maintaining the integrity needed for legal proceedings.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center text-cyber-blue">
                        <CheckCircle className="h-5 w-5 mr-3" />
                        <span>Confidential and discreet investigations</span>
                      </div>
                      <div className="flex items-center text-cyber-blue">
                        <CheckCircle className="h-5 w-5 mr-3" />
                        <span>Digital forensics and evidence preservation</span>
                      </div>
                      <div className="flex items-center text-cyber-blue">
                        <CheckCircle className="h-5 w-5 mr-3" />
                        <span>Behavioral analysis and pattern recognition</span>
                      </div>
                      <div className="flex items-center text-cyber-blue">
                        <CheckCircle className="h-5 w-5 mr-3" />
                        <span>Legal and regulatory compliance support</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <Card className="p-6 border-cyber-gray/30">
                      <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-2 text-cyber-blue" />
                        Common Risk Indicators
                      </h3>
                      <div className="space-y-2">
                        {riskIndicators.map((indicator, index) => (
                          <div key={index} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-cyber-cyan rounded-full mr-3"></div>
                            {indicator}
                          </div>
                        ))}
                      </div>
                    </Card>
                    
                    <div className="bg-card/50 backdrop-blur-sm border border-cyber-gray/30 rounded-lg p-6 text-center">
                      <div className="text-2xl font-bold text-cyber-blue mb-2">
                        Confidential
                      </div>
                      <p className="text-muted-foreground mb-4">
                        All investigations conducted with strict confidentiality
                      </p>
                      
                      <div className="text-lg font-bold text-cyber-cyan mb-2">
                        Legal Ready
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Evidence preservation for legal proceedings
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Investigation Process */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  Investigation <span className="text-cyber-blue">Process</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  A systematic approach to uncovering insider threats while maintaining confidentiality and legal compliance.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-xl font-bold text-white">{step.step}</span>
                      </div>
                      {index < processSteps.length - 1 && (
                        <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-cyber-blue/30 -z-10"></div>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Key Benefits */}
          <section className="py-20 bg-gradient-dark">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8 text-foreground">
                  Why Choose Our Insider Threat Investigations?
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyber-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lock className="h-8 w-8 text-cyber-blue" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Confidential</h3>
                    <p className="text-muted-foreground text-sm">
                      Discreet investigations that protect your organization's reputation
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyber-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="h-8 w-8 text-cyber-blue" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Legal Ready</h3>
                    <p className="text-muted-foreground text-sm">
                      Evidence collection and preservation for legal proceedings
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyber-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-cyber-blue" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Comprehensive</h3>
                    <p className="text-muted-foreground text-sm">
                      Full investigation from detection through remediation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Suspect an Insider Threat?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Early detection and investigation are critical. Contact us for a confidential consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="cyber" className="text-lg" asChild>
                  <Link to="/#contact">
                    Start Confidential Investigation
                    <Search className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/#contact">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default InsiderThreat;