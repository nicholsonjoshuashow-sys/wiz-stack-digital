import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import { 
  Shield, 
  CheckCircle, 
  FileText, 
  Users, 
  TrendingUp, 
  ArrowRight,
  Star,
  Clock,
  Cloud,
  KeyRound,
  Settings,
  BookOpen
} from "lucide-react";

const SecurityAssessmentsConsulting = () => {
  const benefits = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Comprehensive Security Assessments",
      description: "Thorough evaluation of security programs, policies, and technical controls across your entire organization."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Gap Analysis & Compliance",
      description: "Detailed analysis against industry standards and regulatory requirements with clear compliance roadmaps."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Prioritized Remediation Plans",
      description: "Clear, actionable recommendations prioritized by risk level and business impact for rapid improvement."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Ongoing Advisory Services",
      description: "Continuous guidance on strategy, architecture, and security investments from experienced professionals."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Emerging Threat Intelligence",
      description: "Stay ahead with insights into evolving threats, attack vectors, and industry best practices."
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Trusted Partnership",
      description: "More than just reports—get a committed advisor focused on building your stronger, smarter security program."
    }
  ];

  const assessmentTypes = [
    {
      title: "Security Program Assessment",
      description: "Comprehensive review of your entire security program, governance, and organizational maturity.",
      features: ["Policy & Procedure Review", "Organizational Structure Analysis", "Security Metrics Evaluation", "Program Maturity Assessment"]
    },
    {
      title: "Technical Security Assessment",
      description: "Deep-dive technical evaluation of your security controls, architecture, and implementation.",
      features: ["Infrastructure Security Review", "Access Control Analysis", "Network Segmentation Assessment", "Security Tool Effectiveness"]
    },
    {
      title: "Compliance & Risk Assessment",
      description: "Thorough evaluation against regulatory requirements and industry standards.",
      features: ["Regulatory Compliance Gap Analysis", "Risk Register Development", "Control Effectiveness Testing", "Audit Readiness Preparation"]
    },
    {
      title: "Strategic Security Planning",
      description: "Forward-looking assessment to align security strategy with business objectives.",
      features: ["Security Roadmap Development", "Investment Prioritization", "Threat Modeling", "Business Risk Alignment"]
    }
  ];

  return (
    <>
      <SEO 
        title="Security Assessments & Consulting | Expert Cybersecurity Advisory - Darkstack7"
        description="Get clear, actionable security guidance with Darkstack7's expert consulting services. Comprehensive assessments, gap analysis, and strategic planning to strengthen your cybersecurity posture."
        keywords="security assessment, cybersecurity consulting, security gap analysis, compliance assessment, security advisory, risk assessment, security strategy"
        canonical="https://darkstack7.com/services/security-assessments-consulting"
      />
      <div className="min-h-screen bg-background">
        <Header />
        <BreadcrumbNavigation className="pt-20" />
        
        <main>
          {/* Hero Section */}
          <section className="pt-24 pb-16 bg-gradient-dark">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                  Security Assessments &{' '}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Consulting
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Get a clear, actionable roadmap to strengthen your defenses and reduce risk with expert cybersecurity consulting services.
                </p>
                <div className="flex justify-center mt-8">
                  <img 
                    src="/lovable-uploads/cyber-defense-hero.jpg" 
                    alt="Cybersecurity professional monitoring security dashboards and threat detection systems"
                    className="w-80 h-60 object-cover rounded-lg shadow-glow border border-cyber-gray/30"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Value Proposition */}
          <section className="pt-8 pb-20 bg-muted/50">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                    From Uncertainty to <span className="text-cyber-blue">Confidence</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We combine deep technical expertise with business-focused insight to assess your current security posture, 
                    identify vulnerabilities, and deliver practical, prioritized recommendations. From point-in-time assessments 
                    to ongoing advisory, we help you move from uncertainty to confidence.
                  </p>
                </div>

                <div className="bg-card/80 backdrop-blur-sm border border-cyber-gray/30 rounded-lg p-8 shadow-glow">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">What You Get:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="text-cyber-blue mt-1">
                          {benefit.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                          <p className="text-muted-foreground text-sm">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Assessment Types */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Comprehensive <span className="text-cyber-blue">Assessment Services</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our security assessments are tailored to your specific needs, providing actionable insights 
                  across all aspects of your cybersecurity program.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {assessmentTypes.map((assessment, index) => (
                  <Card key={index} className="group p-6 bg-card/50 backdrop-blur-sm border-cyber-gray/30 hover:border-cyber-blue/50 transition-all duration-300 hover:shadow-glow">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-cyber-blue transition-colors">
                      {assessment.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {assessment.description}
                    </p>
                    <ul className="space-y-2">
                      {assessment.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-cyber-cyan rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Cloud Security Assessment */}
          <section className="py-20 bg-muted/50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Azure Cloud & Office 365{' '}
                  <span className="text-cyber-blue">Security Assessment</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  A structured advisory engagement designed to give your organization a clear, honest picture 
                  of your Microsoft cloud security posture — with prioritized recommendations you can act on.
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
                  <div className="flex justify-center mt-8">
                    <Button 
                      variant="cyber" 
                      size="lg" 
                      className="text-lg px-8 py-3"
                      onClick={() => window.location.href = '/services/requestquote'}
                    >
                      Schedule a Scoping Call
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Darkstack7 */}
          <section className="py-20 bg-muted/50">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Why Choose <span className="text-cyber-blue">Darkstack7?</span>
                </h2>
                <div className="bg-card/80 backdrop-blur-sm border border-cyber-gray/30 rounded-lg p-8 shadow-glow">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    With Darkstack7, you don't just get a report—you get a trusted advisor committed to helping you 
                    build a stronger, smarter security program. Our assessments go beyond checkbox compliance to deliver 
                    real-world, actionable guidance that moves your organization forward.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      variant="cyber" 
                      size="lg" 
                      className="text-lg px-8 py-3"
                      onClick={() => window.location.href = '/services/requestquote'}
                    >
                      Get Your Quote Today
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SecurityAssessmentsConsulting;