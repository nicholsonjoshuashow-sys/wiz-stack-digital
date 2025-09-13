import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Shield, Search, Target, FileText, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import { penetrationTestingServiceData } from "@/data/structuredData";

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

  const methodology = [
    "Reconnaissance & Information Gathering",
    "Vulnerability Assessment & Analysis", 
    "Exploitation & Privilege Escalation",
    "Post-Exploitation & Persistence Testing",
    "Documentation & Reporting",
    "Remediation Support & Validation"
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
      <div className="min-h-screen bg-background">
        <Header />
        <BreadcrumbNavigation className="pt-20" />

        <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-dark">
          <div className="container mx-auto px-6">
            <Link to="/" className="inline-flex items-center text-cyber-blue hover:text-cyber-cyan transition-colors mb-8">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Services
            </Link>
            
            <div className="max-w-4xl text-center mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Penetration <span className="bg-gradient-primary bg-clip-text text-transparent">Testing</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Comprehensive security assessments that uncover real risks, validate controls, and build practical, 
                scalable, and resilient security strategies for your organization.
              </p>
              <Button variant="cyber" size="lg" className="text-lg px-8 py-3">
                Get Started Today
              </Button>
            </div>
          </div>
        </section>

        {/* Testing Types */}
        <section className="py-20">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8 text-foreground">
                  Our <span className="bg-gradient-primary bg-clip-text text-transparent">Methodology</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  We follow industry-standard penetration testing methodologies including PTES, OWASP, and NIST guidelines 
                  to ensure comprehensive and reliable security assessments.
                </p>
              </div>
              
              <div>
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-cyber-gray/30">
                  <h3 className="text-xl font-bold text-foreground mb-6">Testing Process</h3>
                  <div className="space-y-4">
                    {methodology.map((step, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-cyber-cyan flex-shrink-0" />
                        <span className="text-muted-foreground">{step}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
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
                onClick={() => window.location.href = '/services/requestquote'}
              >
                Request Quote
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

export default PenetrationTesting;