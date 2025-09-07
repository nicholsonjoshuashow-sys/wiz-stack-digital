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
  Clock
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
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="cyber" 
                    size="lg" 
                    className="text-lg px-8 py-3 shadow-glow hover:shadow-[0_0_20px_hsl(var(--cyber-cyan)/0.4)]"
                    onClick={() => window.location.href = '/services/requestquote'}
                  >
                    Request a Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-lg px-8 py-3"
                    onClick={() => window.open('https://outlook.office.com/bookwithme/user/a36dd60bc57d4471926cdb17d751f663@DarkStack7.com?anonymous&ismsaljsauthenabled&ep=plink', '_blank')}
                  >
                    Schedule Consultation
                    <Clock className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Value Proposition */}
          <section className="py-20 bg-muted/50">
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