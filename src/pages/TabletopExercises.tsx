import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ShieldCheck, 
  Users, 
  Clock, 
  Target, 
  CheckCircle,
  AlertTriangle,
  Calendar,
  ArrowRight,
  Presentation,
  FileText,
  Zap,
  Mail,
  Factory,
  ShieldX,
  UserX,
  Lock
} from "lucide-react";

const TabletopExercises = () => {
  const packageFeatures = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Master Exercise Plan",
      description: "Detailed 3-hour exercise structure with phases, timing, and logistics. Pre-exercise planning requirements and participant roles. Evaluation criteria and success metrics."
    },
    {
      icon: <Presentation className="h-6 w-6" />,
      title: "PowerPoint Presentation", 
      description: "Interactive HTML presentation with professional design. Exercise objectives, structure, and ground rules. Ready to present to executive team."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Three Progressive Inject Scenarios",
      description: "Escalating crisis scenarios based on actual various attack patterns. From initial detection to recovery complications."
    }
  ];

  const injectScenarios = [
    {
      time: "8:45 AM",
      title: "Initial Detection",
      description: "Ransomware discovery with 47 affected workstations. Database compromise and backup failures. Immediate containment decisions required."
    },
    {
      time: "10:15 AM", 
      title: "Escalation & Threats",
      description: "$2.3M ransom demand with 48-hour deadline. 847K customer records exfiltrated. Media attention and regulatory pressure mounting."
    },
    {
      time: "2:30 PM",
      title: "Recovery Complications", 
      description: "Backup system failures discovered. Vendor/partner impacts cascading. Three recovery options requiring strategic decisions."
    }
  ];

  const keyFeatures = [
    "Realistic Scenarios - Based on actual ransomware attack patterns",
    "Executive Focus - Strategic decisions, not technical details",
    "Time Pressure - Escalating urgency throughout exercise",
    "Multi-faceted Challenges - Technical, legal, financial, and reputational",
    "Measurable Outcomes - Clear evaluation criteria and action items"
  ];

  const challengeAreas = [
    "Crisis decision-making under pressure",
    "Cross-functional coordination during emergencies", 
    "Communication strategy for multiple stakeholders",
    "Business continuity vs. investigation priorities",
    "Legal and regulatory compliance requirements",
    "Find out what security controls or process are broken beforehand"
  ];

  return (
    <>
      <SEO 
        title="Tabletop Exercises (TTX) - Incident Response Readiness | Darkstack7"
        description="Custom incident response tabletop exercises designed to test your team's readiness. Professional scenarios, gap analysis, and IR playbook development by seasoned responders."
        keywords="tabletop exercises, incident response training, IR readiness, cybersecurity drills, breach simulation, crisis management training, TTX"
        canonical="https://darkstack7.com/services/tabletop_exercises"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-dark overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <Badge variant="default" className="mb-6 bg-cyber-blue/20 text-cyber-blue border-cyber-blue/30">
                  <Presentation className="h-4 w-4 mr-2" />
                  Tabletop Exercises (TTX)
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                  Test Your <span className="bg-gradient-primary bg-clip-text text-transparent">IR Readiness</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Custom incident response readiness scenarios designed to reflect real threats your organization may face. 
                  Professional-led exercises with detailed gap analysis and actionable insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="cyber" size="lg" className="text-lg px-8">
                    Schedule TTX Today
                    <Calendar className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8">
                    View Sample Scenarios
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Service Overview */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                    Why Professional-Led <span className="text-cyber-blue">Tabletop Exercises</span> Matter
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                  <div>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      We deliver custom incident response (IR) readiness scenarios designed to reflect the real threats your organization may face. Our approach includes detailed gap analysis, helping identify weaknesses in your current response processes and communication flows.
                    </p>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      We develop tailored IR playbooks aligned to your environment, regulatory requirements, and team structure. Through guided team training and tabletop exercises, we strengthen coordination between technical, legal, and executive stakeholders.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      This service is ideal for regulated enterprises preparing for audits or building operational resilience. The goal: confident, coordinated, and compliant response when incidents strike.
                    </p>
                  </div>
                  <div className="mb-8 flex justify-center">
                    <img 
                      src="/lovable-uploads/8bf2296e-f656-4029-b3bc-00884b3769dc.png" 
                      alt="Tabletop exercise team collaboration with DARKSTACK7 security professionals analyzing incident response scenarios" 
                      className="w-1/2 rounded-lg shadow-lg"
                    />
                  </div>
                  <Card className="p-8 bg-card/50 backdrop-blur-sm border-cyber-gray/30">
                    <div className="text-center">
                      <ShieldCheck className="h-16 w-16 text-cyber-blue mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-foreground mb-4">Real-World Realism</h3>
                      <p className="text-muted-foreground">
                        Tabletop exercises should always reflect real-world conditions and be led by seasoned incident responders. 
                        Realism is critical to identifying true gaps and stress-testing response capabilities.
                      </p>
                    </div>
                  </Card>
                </div>

                <Card className="p-8 bg-gradient-cyber/5 border-cyber-blue/20 mb-16">
                  <div className="text-center">
                    <AlertTriangle className="h-12 w-12 text-cyber-cyan mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-4">Experience-Driven Excellence</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      When run by professionals with hands-on breach experience, tabletop scenarios provide meaningful insights, not just check-the-box compliance. 
                      This ensures participants gain practical value, sharpen decision-making under pressure, and build muscle memory that matters during real incidents. 
                      <span className="text-cyber-blue font-semibold"> Anything less risks false confidence.</span>
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Complete Package Overview */}
          <section className="py-20 bg-gradient-dark">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                    Complete Package <span className="text-cyber-blue">Overview</span>
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Everything you need for a professional tabletop exercise
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                  {packageFeatures.map((feature, index) => (
                    <Card key={index} className="p-8 bg-card/50 backdrop-blur-sm border-cyber-gray/30 hover:border-cyber-blue/50 transition-all duration-300">
                      <div className="text-cyber-blue mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Cybersecurity Scenarios Framework */}
          <section className="py-20 bg-gradient-dark">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                    Cybersecurity & Operational <span className="text-cyber-blue">Scenario Framework</span>
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Comprehensive scenarios covering multiple threat vectors and operational challenges
                  </p>
                </div>

                {/* Cybersecurity Scenarios */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Cybersecurity Scenarios</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="p-6 bg-card/50 backdrop-blur-sm border-cyber-gray/30">
                      <div className="flex items-start space-x-4">
                        <Lock className="h-8 w-8 text-cyber-blue flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-xl font-bold text-foreground mb-3">Ransomware Attack</h4>
                          <p className="text-muted-foreground mb-3"><strong>Initial Trigger:</strong> Finance team unable to access critical files.</p>
                          <p className="text-muted-foreground mb-3"><strong>Escalation:</strong> Widespread ransomware demand impacting enterprise systems.</p>
                          <p className="text-muted-foreground"><strong>Possible Injects:</strong> Discovery of encrypted data being transmitted to an external server; news report detailing a compromised software tool leveraged by attackers.</p>
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="p-6 bg-card/50 backdrop-blur-sm border-cyber-gray/30">
                      <div className="flex items-start space-x-4">
                        <UserX className="h-8 w-8 text-cyber-cyan flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-xl font-bold text-foreground mb-3">Data Breach</h4>
                          <p className="text-muted-foreground mb-3"><strong>Initial Trigger:</strong> Unauthorized access to sensitive data or unusual exfiltration activity.</p>
                          <p className="text-muted-foreground mb-3"><strong>Escalation:</strong> Data appears publicly or is sold on the dark web.</p>
                          <p className="text-muted-foreground"><strong>Possible Injects:</strong> Security alerts indicating suspicious network traffic; news alerts linking the organization to a large-scale data leak.</p>
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="p-6 bg-card/50 backdrop-blur-sm border-cyber-gray/30">
                      <div className="flex items-start space-x-4">
                        <Factory className="h-8 w-8 text-cyber-blue flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-xl font-bold text-foreground mb-3">Supply Chain Attack</h4>
                          <p className="text-muted-foreground mb-3"><strong>Initial Trigger:</strong> Compromise via a trusted vendor or third-party software.</p>
                          <p className="text-muted-foreground mb-3"><strong>Escalation:</strong> Backdoor access into company systems.</p>
                          <p className="text-muted-foreground"><strong>Possible Injects:</strong> Notification that a commonly used vendor tool was infiltrated by foreign state actors; discovery of unusual traffic from newly integrated software.</p>
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="p-6 bg-card/50 backdrop-blur-sm border-cyber-gray/30">
                      <div className="flex items-start space-x-4">
                        <Mail className="h-8 w-8 text-cyber-cyan flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-xl font-bold text-foreground mb-3">Phishing Attack</h4>
                          <p className="text-muted-foreground mb-3"><strong>Initial Trigger:</strong> An employee clicks on a malicious email link.</p>
                          <p className="text-muted-foreground mb-3"><strong>Escalation:</strong> Internal systems are compromised, lateral movement detected.</p>
                          <p className="text-muted-foreground"><strong>Possible Injects:</strong> Malware discovered on an internal server; connections established with suspicious IP addresses.</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

                {/* Physical & Operational Scenarios */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Physical & Operational Scenarios</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-4 p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-cyber-gray/20">
                      <div className="w-3 h-3 bg-cyber-blue rounded-full flex-shrink-0"></div>
                      <div>
                        <span className="text-foreground font-semibold">Structure Fire:</span>
                        <span className="text-muted-foreground ml-2">Fire outbreak in or near corporate facilities. Unsafe or blocked evacuation routes; possible data center impact.</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-cyber-gray/20">
                      <div className="w-3 h-3 bg-cyber-cyan rounded-full flex-shrink-0"></div>
                      <div>
                        <span className="text-foreground font-semibold">Inclement Weather:</span>
                        <span className="text-muted-foreground ml-2">Severe storm or natural disaster causing downed power lines, widespread power outages, or road closures delaying staff access.</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-cyber-gray/20">
                      <div className="w-3 h-3 bg-cyber-blue rounded-full flex-shrink-0"></div>
                      <div>
                        <span className="text-foreground font-semibold">IT Outage:</span>
                        <span className="text-muted-foreground ml-2">Widespread server or communications failure causing extended downtime impacting business operations and customer services.</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-cyber-gray/20">
                      <div className="w-3 h-3 bg-cyber-cyan rounded-full flex-shrink-0"></div>
                      <div>
                        <span className="text-foreground font-semibold">Supply Chain Disruption:</span>
                        <span className="text-muted-foreground ml-2">External event (e.g., natural disaster, geopolitical tension) creating prolonged delays in critical supply chain components affecting revenue and service delivery.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Injects to Increase Realism */}
                <Card className="p-8 bg-gradient-cyber/10 border-cyber-blue/30">
                  <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                    Injects to Increase Realism & Complexity
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-cyber-cyan flex-shrink-0 mt-1" />
                        <div>
                          <span className="text-foreground font-semibold">Communication Reveals:</span>
                          <span className="text-muted-foreground ml-2">Simulated media interview requests, or emails from frustrated partners or regulators.</span>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-cyber-cyan flex-shrink-0 mt-1" />
                        <div>
                          <span className="text-foreground font-semibold">Conflicting Information:</span>
                          <span className="text-muted-foreground ml-2">Contradictory or unreliable intelligence to test verification and decision-making under uncertainty.</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-cyber-cyan flex-shrink-0 mt-1" />
                        <div>
                          <span className="text-foreground font-semibold">Resource Stressors:</span>
                          <span className="text-muted-foreground ml-2">Sudden expansion of affected systems, reduced response timelines, or loss of key personnel.</span>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-cyber-cyan flex-shrink-0 mt-1" />
                        <div>
                          <span className="text-foreground font-semibold">Escalation of Impact:</span>
                          <span className="text-muted-foreground ml-2">Small incidents evolve into significant threats requiring cross-functional coordination and executive-level escalation.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Progressive Inject Scenarios */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                    Three Progressive <span className="text-cyber-blue">Demonstrative Inject Scenarios</span>
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Escalating crisis scenarios that test decision-making under pressure
                  </p>
                </div>

                <div className="space-y-8 mb-16">
                  {injectScenarios.map((scenario, index) => (
                    <Card key={index} className="p-8 bg-card/50 backdrop-blur-sm border-cyber-gray/30 hover:border-cyber-blue/50 transition-all duration-300">
                      <div className="flex flex-col md:flex-row items-start gap-6">
                        <div className="flex-shrink-0">
                          <Badge variant="default" className="text-lg px-4 py-2 bg-cyber-blue/20 text-cyber-blue border-cyber-blue/30">
                            <Clock className="h-4 w-4 mr-2" />
                            {scenario.time}
                          </Badge>
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-2xl font-bold text-foreground mb-4">
                            Demonstrative Inject #{index + 1}: {scenario.title}
                          </h3>
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            {scenario.description}
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <Target className="h-12 w-12 text-cyber-cyan" />
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="py-20 bg-gradient-dark">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                    Key <span className="text-cyber-blue">Features</span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                  {keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-4 p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-cyber-gray/20">
                      <CheckCircle className="h-6 w-6 text-cyber-cyan flex-shrink-0" />
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Card className="p-8 bg-gradient-cyber/10 border-cyber-blue/30">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-6">
                      The Exercise Challenges Senior Leadership On:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {challengeAreas.map((area, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-cyber-cyan rounded-full flex-shrink-0"></div>
                          <span className="text-muted-foreground text-left">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Schedule Your <span className="text-cyber-blue">Tabletop Exercise</span> Today
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Make sure to contact us to schedule a scoping call for your tabletop exercise today. We'll tailor the scenario to your environment, 
                  align it with your compliance goals, and ensure it's led by a seasoned responder who's been in the trenches. 
                  Don't wait for a real crisis to test your team—train like it's real, because one day it will be.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="cyber" size="lg" className="text-lg px-8">
                    Schedule TTX Scoping Call
                    <Calendar className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8">
                    Request Custom Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
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

export default TabletopExercises;