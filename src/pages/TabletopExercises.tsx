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
  Zap
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
      description: "Escalating crisis scenarios based on actual ransomware attack patterns. From initial detection to recovery complications."
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
    "Identify broken security controls and processes beforehand"
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

          {/* Progressive Inject Scenarios */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                    Three Progressive <span className="text-cyber-blue">Inject Scenarios</span>
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
                            Inject #{index + 1}: {scenario.title}
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
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-cyber-cyan rounded-full flex-shrink-0"></div>
                          <span className="text-muted-foreground">{area}</span>
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