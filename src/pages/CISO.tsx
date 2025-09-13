import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Shield, Target, Users, Briefcase, TrendingUp, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";

const CISO = () => {
  const benefits = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Strategic Security Leadership",
      description: "Executive-level guidance aligned to your business goals and growth objectives"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Proven Global Experience",
      description: "Real-world experience leading security teams and major incident response efforts"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Hands-on Guidance",
      description: "Direct support for both technical teams and executive stakeholders"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Scalable Program Design",
      description: "Security programs built for growth, resilience, and long-term success"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Comprehensive Expertise",
      description: "Strategy, architecture, threat defense, and security engineering excellence"
    }
  ];

  const deliverables = [
    "Security strategy development and roadmap creation",
    "Risk assessment and threat modeling",
    "Security architecture design and review", 
    "Incident response planning and leadership",
    "Board-level reporting and executive communication",
    "Team leadership and capability development",
    "Vendor management and technology selection",
    "Compliance program oversight and gap remediation"
  ];

  return (
    <>
      <SEO
        title="Virtual CISO Services - Executive Cybersecurity Leadership | Darkstack7"
        description="Get executive-level cybersecurity leadership with our Virtual CISO services. Strategic planning, incident response, and hands-on security program development."
        keywords="virtual CISO, cybersecurity leadership, security strategy, incident response, executive security"
        canonical="https://darkstack7.com/services/CISO"
      />
      
      <div className="min-h-screen bg-gradient-dark">
        <Header />
        <BreadcrumbNavigation className="pt-20" />
        
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-20">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                  Virtual <span className="bg-gradient-primary bg-clip-text text-transparent">CISO</span> Services
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Executive-level cybersecurity leadership backed by real-world, hands-on experience. 
                  We go beyond compliance checklists to deliver strategy, architecture, and security 
                  engineering that work in practice—not just on paper.
                </p>
                <Button 
                  variant="cyber" 
                  size="lg" 
                  className="text-lg px-8 py-3"
                  onClick={() => window.open('https://outlook.office.com/bookwithme/user/a36dd60bc57d4471926cdb17d751f663@DarkStack7.com?anonymous&ismsaljsauthenabled&ep=plink', '_blank')}
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </section>

          {/* Fractional CISO Image Section */}
          <section className="py-12">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <img 
                  src="/lovable-uploads/f2cc240c-de6a-43b9-bd0d-252786857db3.png" 
                  alt="Fractional CISO - Professional cybersecurity executive leadership"
                  className="w-full max-w-md mx-auto rounded-lg shadow-glow"
                />
              </div>
            </div>
          </section>

          {/* Value Proposition */}
          <section className="py-20 bg-card/20">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-center text-foreground">
                    Leadership That Gets Results
                  </h2>
                  <p className="text-lg text-muted-foreground text-center leading-relaxed">
                    Whether you're building a security program from the ground up or fortifying against 
                    advanced threats, our vCISOs bring the credibility, expertise, and action your business needs. 
                    If you need a CISO who gets things done—not just one who fills out forms—you're in the right place.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-cyber-blue/50 transition-all duration-300">
                      <div className="text-cyber-blue mb-4">
                        {benefit.icon}
                      </div>
                      <h3 className="text-lg font-semibold mb-3 text-foreground">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* What You Get */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
                  What You <span className="bg-gradient-primary bg-clip-text text-transparent">Get</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    {deliverables.slice(0, 4).map((deliverable, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-cyber-cyan mt-0.5 flex-shrink-0" />
                        <p className="text-muted-foreground">{deliverable}</p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {deliverables.slice(4).map((deliverable, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-cyber-cyan mt-0.5 flex-shrink-0" />
                        <p className="text-muted-foreground">{deliverable}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="py-20 bg-card/20">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 text-foreground">
                  Proven <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
                </h2>
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Founded by Joshua R. Nicholson—a 24-year cybersecurity veteran and former U.S. Marine 
                    with leadership experience across Fortune 500 companies and government agencies. Our vCISO 
                    services are built on real-world experience managing complex security challenges at scale.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyber-blue mb-2">24+</div>
                      <div className="text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyber-blue mb-2">Fortune 500</div>
                      <div className="text-muted-foreground">Leadership Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyber-blue mb-2">Global</div>
                      <div className="text-muted-foreground">Security Teams</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  Ready to Strengthen Your Security Leadership?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Get the strategic cybersecurity leadership your organization needs to stay ahead of threats.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="cyber" 
                    size="lg" 
                    className="text-lg px-8 py-3"
                    onClick={() => window.open('https://outlook.office.com/bookwithme/user/a36dd60bc57d4471926cdb17d751f663@DarkStack7.com?anonymous&ismsaljsauthenabled&ep=plink', '_blank')}
                  >
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-lg px-8 py-3"
                    asChild
                  >
                    <a 
                      href="/Darkstack7_Services_Deck.pdf" 
                      download="Darkstack7_Services_Deck.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download Service Overview
                    </a>
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

export default CISO;