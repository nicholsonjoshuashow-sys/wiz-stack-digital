import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Shield, Search, Target, FileText, CheckCircle, Download, Crosshair, FileSearch, Bug, ClipboardList, Lock, Globe, Server, Database, Cpu, Users } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import { penetrationTestingServiceData } from "@/data/structuredData";
import auditrolLogo from "@/assets/auditrol-logo.jpg";
import auditrolCeo from "@/assets/auditrol-ceo.jpg";
import pentestHeroImage from "@/assets/pentest-hero-image.png";

const PenetrationTesting = () => {
  const testingTypes = [
    {
      title: "Network Penetration Testing",
      description: "Comprehensive assessment of network infrastructure, firewalls, and perimeter defenses.",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Web Application Testing", 
      description: "OWASP-based security testing for web applications and APIs.",
      icon: <Search className="h-6 w-6" />
    },
    {
      title: "Cloud Infrastructure Testing",
      description: "Security assessment of AWS, Azure, and GCP environments.",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Mobile Application Testing",
      description: "Security testing for iOS and Android applications.",
      icon: <FileText className="h-6 w-6" />
    }
  ];

  const methodologyPhases = [
    {
      phase: "Phase 1",
      title: "Reconnaissance & Information Gathering",
      icon: <Crosshair className="h-5 w-5" />,
      description: "Comprehensive reconnaissance focusing on application components, attack surface enumeration, endpoint discovery, and workflow documentation including authentication flows and feature access paths."
    },
    {
      phase: "Phase 2", 
      title: "Vulnerability Assessment & Analysis",
      icon: <FileSearch className="h-5 w-5" />,
      description: "Automated vulnerability scanning supplemented by targeted manual validation. Focus on high-confidence findings with manual testing of critical security controls including authentication and authorization boundaries."
    },
    {
      phase: "Phase 3",
      title: "Exploitation & Validation",
      icon: <Bug className="h-5 w-5" />,
      description: "Exploitation validation targeting high-impact vulnerabilities with proof-of-concept development demonstrating exploitability and comprehensive impact analysis including privilege escalation testing."
    },
    {
      phase: "Phase 4",
      title: "Documentation & Reporting",
      icon: <ClipboardList className="h-5 w-5" />,
      description: "Detailed technical report with executive summary, vulnerability descriptions, CVSS risk ratings, affected components, proof-of-concept reproduction steps, and actionable remediation guidance."
    }
  ];

  const scopeAreas = [
    {
      title: "Web Application Frontend",
      icon: <Globe className="h-5 w-5" />,
      items: ["UI functionality testing across workflows", "Client-side security controls assessment", "Pages and application component scanning"]
    },
    {
      title: "Authentication & Sessions",
      icon: <Lock className="h-5 w-5" />,
      items: ["OIDC/OAuth flow testing", "JWT token validation (expiration, signatures)", "Session timeout & authorization controls"]
    },
    {
      title: "API Security",
      icon: <Server className="h-5 w-5" />,
      items: ["REST API endpoint discovery", "Authentication & input validation testing", "Rate limiting & access control verification"]
    },
    {
      title: "Data & Infrastructure",
      icon: <Database className="h-5 w-5" />,
      items: ["SQL injection & injection technique testing", "Data access control validation", "Sensitive data exposure assessment"]
    },
    {
      title: "Application Logic",
      icon: <Cpu className="h-5 w-5" />,
      items: ["Business logic security assessment", "Feature enumeration & workflow testing", "Configuration security analysis"]
    },
    {
      title: "AI/ML Integration Security",
      icon: <Users className="h-5 w-5" />,
      items: ["ML-exposed endpoint scanning", "Prompt injection testing", "ML input/output validation & access controls"]
    }
  ];

  return (
    <>
      <SEO 
        title="Penetration Testing Services | Comprehensive Security Assessments - Darkstack7"
        description="Professional penetration testing services including network security, web application testing, cloud infrastructure assessment, and mobile app security testing by cybersecurity experts."
        keywords="penetration testing, security assessment, network security testing, web application security, cloud security, mobile app testing, vulnerability assessment, OWASP testing"
        canonical="https://darkstack7.com/services/penetration-testing"
        structuredData={penetrationTestingServiceData}
      />
      <div 
        className="min-h-screen bg-background"
        style={{
          backgroundImage: `url(${pentestHeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for readability */}
        <div className="min-h-screen bg-background/85">
        <Header />
        <BreadcrumbNavigation className="pt-20" />

        <main>
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <Link to="/" className="inline-flex items-center text-cyber-blue hover:text-cyber-cyan transition-colors mb-8">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Services
            </Link>
            
            <div className="max-w-4xl text-center mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Penetration <span className="bg-gradient-primary bg-clip-text text-transparent">Testing</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
                Comprehensive security assessments that uncover real risks, validate controls, and build practical, 
                scalable, and resilient security strategies for your organization.
              </p>
              <p className="text-lg text-cyber-cyan font-medium">
                Our penetration testers work alongside Incident Response experts for a comprehensive, end-to-end security approach.
              </p>
            </div>
          </div>
        </section>

        {/* Testing Types */}
        <section className="py-20 bg-gradient-dark">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
              Testing <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testingTypes.map((type, index) => (
                <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-cyber-gray/30 hover:border-cyber-blue/50 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="text-cyber-blue">
                      {type.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{type.title}</h3>
                      <p className="text-muted-foreground">{type.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-20 bg-gradient-dark">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Our <span className="bg-gradient-primary bg-clip-text text-transparent">Methodology</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                DarkStack7 follows a structured penetration testing methodology aligned with the 
                <strong className="text-foreground"> OWASP Testing Guide</strong>, 
                <strong className="text-foreground"> PTES (Penetration Testing Execution Standard)</strong>, and 
                <strong className="text-foreground"> NIST SP 800-115</strong> — combining automated scanning with expert manual validation.
              </p>
            </div>

            {/* Phases */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {methodologyPhases.map((phase, index) => (
                <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-cyber-gray/30 hover:border-cyber-blue/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-cyber-blue/10 flex items-center justify-center text-cyber-blue">
                      {phase.icon}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-cyber-cyan uppercase tracking-wider">{phase.phase}</span>
                      <h3 className="text-lg font-bold text-foreground">{phase.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{phase.description}</p>
                </Card>
              ))}
            </div>

            {/* Scope Areas */}
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Testing <span className="bg-gradient-primary bg-clip-text text-transparent">Scope Areas</span>
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our assessments cover the full application stack — from frontend interfaces to backend logic, APIs, data storage, and AI/ML integrations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {scopeAreas.map((area, index) => (
                <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-cyber-gray/30 hover:border-cyber-blue/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-cyber-blue/10 flex items-center justify-center text-cyber-blue">
                      {area.icon}
                    </div>
                    <h4 className="text-base font-bold text-foreground">{area.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {area.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-cyber-cyan flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>

            {/* Deliverables */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Engagement <span className="bg-gradient-primary bg-clip-text text-transparent">Deliverables</span>
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-cyber-gray/30 text-center">
                  <div className="w-12 h-12 rounded-full bg-cyber-blue/10 flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-6 w-6 text-cyber-blue" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Technical Report</h4>
                  <p className="text-sm text-muted-foreground">Detailed findings with CVSS ratings, proof-of-concept steps, affected components, and actionable remediation guidance.</p>
                </Card>
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-cyber-gray/30 text-center">
                  <div className="w-12 h-12 rounded-full bg-cyber-blue/10 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-cyber-blue" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Retest Validation</h4>
                  <p className="text-sm text-muted-foreground">Follow-up retesting to verify remediated vulnerabilities are fully resolved with status classification for each finding.</p>
                </Card>
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-cyber-gray/30 text-center">
                  <div className="w-12 h-12 rounded-full bg-cyber-blue/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-cyber-blue" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Findings Review Session</h4>
                  <p className="text-sm text-muted-foreground">Presentation for your technical team and management covering findings, remediation results, and strategic recommendations.</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonial */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-cyber-blue/30 relative overflow-hidden">
                {/* Decorative quote marks */}
                <div className="absolute top-4 left-6 text-8xl text-cyber-blue/10 font-serif leading-none">"</div>
                <div className="absolute bottom-4 right-6 text-8xl text-cyber-blue/10 font-serif leading-none rotate-180">"</div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
                    Customer <span className="bg-gradient-primary bg-clip-text text-transparent">Success Story</span>
                  </h2>
                  
                  <blockquote className="text-xl md:text-2xl text-muted-foreground text-center italic leading-relaxed mb-8">
                    "Darkstack7 conducted a penetration test and broader cybersecurity assessment that validated our existing controls and identified targeted areas for improvement. The engagement was successful, well-managed, and provided practical guidance that strengthened our overall security posture."
                  </blockquote>
                  
                  <div className="flex flex-col items-center gap-4">
                    <img 
                      src={auditrolLogo} 
                      alt="Auditrol Logo" 
                      className="h-36 object-contain"
                    />
                    <img 
                      src={auditrolCeo} 
                      alt="Ashwin Nayak - CEO of Auditrol" 
                      className="w-48 h-48 object-cover border-2 border-cyber-blue/30 rounded-lg"
                    />
                    <div className="text-center">
                      <p className="text-lg font-semibold text-foreground">Ashwin Nayak</p>
                      <p className="text-cyber-cyan">CEO, Auditrol</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-cyber-gray/30">
                    <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Results Delivered</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "Identified high-severity API authorization weaknesses",
                        "Provided detailed remediation guidance",
                        "Conducted formal retest validation",
                        "Confirmed full resolution of material findings"
                      ].map((result, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-cyber-cyan flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Ready to Test Your <span className="bg-gradient-primary bg-clip-text text-transparent">Defenses</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Don't wait for a breach to discover vulnerabilities. Schedule your penetration test today 
              and strengthen your security posture with actionable insights.
            </p>
            <div className="flex justify-center">
              <Button 
                variant="cyber" 
                size="lg" 
                className="text-lg px-8 py-3"
                asChild
              >
                <a href="/2026-Darkstack7_Penetration-Testing-service_1.2.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Services Deck
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
        </div>
      </div>
    </>
  );
};

export default PenetrationTesting;