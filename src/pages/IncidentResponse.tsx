import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ShieldAlert, 
  Clock, 
  Users, 
  FileText, 
  AlertTriangle,
  Phone,
  ArrowRight,
  CheckCircle,
  Download
} from "lucide-react";
import irHeroBackground from "@/assets/ir-hero-background.png";
import deckSlide1 from "@/assets/ir-deck/slide-1.png";
import deckSlide2 from "@/assets/ir-deck/slide-2.png";
import deckSlide3 from "@/assets/ir-deck/slide-3.png";
import deckSlide4 from "@/assets/ir-deck/slide-4.png";
import deckSlide5 from "@/assets/ir-deck/slide-5.png";
import deckSlide6 from "@/assets/ir-deck/slide-6.png";

const IncidentResponse = () => {
  useEffect(() => {
    // LinkedIn Insight Tag for campaign tracking
    const partnerId = "9970732";
    (window as any)._linkedin_partner_id = partnerId;
    (window as any)._linkedin_data_partner_ids = (window as any)._linkedin_data_partner_ids || [];
    (window as any)._linkedin_data_partner_ids.push(partnerId);

    const lintrk = (window as any).lintrk;
    if (!lintrk) {
      (window as any).lintrk = function(a: unknown, b: unknown) {
        ((window as any).lintrk.q = (window as any).lintrk.q || []).push([a, b]);
      };
      (window as any).lintrk.q = [];
    }

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.body.appendChild(script);
    }
  }, []);
  const capabilities = [
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Threat Validation",
      description: "Rapid assessment and validation of security alerts to distinguish real threats from false positives."
    },
    {
      icon: <ShieldAlert className="h-6 w-6" />,
      title: "Active Breach Response",
      description: "Immediate response to ongoing cyber incidents with expert leadership and technical coordination."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Digital Forensics",
      description: "Deep forensic analysis to understand attack vectors, scope, and evidence preservation."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "IR Commander Leadership",
      description: "Experienced incident commander to lead your technical teams through complex breach scenarios."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Immediate Assessment",
      description: "Rapid threat validation and initial containment assessment within the first hour."
    },
    {
      step: "02", 
      title: "Team Coordination",
      description: "Establish command structure and coordinate internal teams and external vendors."
    },
    {
      step: "03",
      title: "Investigation & Forensics", 
      description: "Deep technical investigation to understand scope, impact, and attack methodology."
    },
    {
      step: "04",
      title: "Executive Communication",
      description: "Board-level briefings and regulatory guidance throughout the incident lifecycle."
    }
  ];

  return (
    <>
      <SEO 
        title="Incident Response & 24/7 Cyber Emergency | Darkstack7"
        description="On-demand IR Commander leadership for active breaches. 24/7 emergency response, digital forensics, and board-level communication."
        keywords="incident response, cyber incident, emergency response, digital forensics, breach response, IR commander, cybersecurity incident"
        canonical="https://darkstack7.net/services/IR"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Incident Response",
          "serviceType": "Cybersecurity Incident Response",
          "description": "On-demand IR Commander leadership for active breaches with 24/7 emergency response, digital forensics, and executive crisis communication.",
          "provider": {
            "@type": "Organization",
            "name": "Darkstack7",
            "url": "https://darkstack7.net"
          },
          "areaServed": "Global",
          "url": "https://darkstack7.net/services/IR"
        }}
      />
      <div 
        className="min-h-screen bg-background"
        style={{
          backgroundImage: `url(${irHeroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for readability */}
        <div className="min-h-screen bg-background/70">
        <Header />
        <BreadcrumbNavigation className="pt-20" />
        
        <main>
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-dark overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <Badge variant="outline" className="mb-6 border-cyber-blue/30 text-cyber-blue">
                  <ShieldAlert className="h-4 w-4 mr-2" />
                  24/7 Emergency Response
                </Badge>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                  Incident <span className="bg-gradient-primary bg-clip-text text-transparent">Response</span>
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                  Our On-Demand IR Commander service is built for high-impact cyber incidents that demand immediate leadership. 
                  We step in during active breaches to coordinate response efforts, validate threats, and lead technical teams 
                  with clarity and control.
                </p>
                
                <div className="flex justify-center">
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/contact">
                      Contact Incident Response Team
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Core Capabilities */}
          <section id="capabilities" className="py-20 bg-background">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  Emergency Response <span className="text-cyber-blue">Capabilities</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  When every move counts, we bring calm, confidence, and command to your incident response.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {capabilities.map((capability, index) => (
                  <Card key={index} className="p-6 border-cyber-gray/30 hover:border-cyber-blue/50 transition-all">
                    <div className="text-cyber-blue mb-4">
                      {capability.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {capability.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {capability.description}
                    </p>
                  </Card>
                ))}
              </div>

              <div className="max-w-6xl mx-auto mt-16 mb-12 space-y-8">
                {[deckSlide1, deckSlide2, deckSlide3, deckSlide4, deckSlide5, deckSlide6].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Darkstack7 Incident Response services deck slide ${i + 1}`}
                    className="w-full h-auto rounded-lg border border-cyber-blue/30 shadow-lg"
                  />
                ))}
                <Card className="p-6 border-cyber-blue/40 bg-card/50 backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
                    <div className="flex items-start gap-4">
                      <div className="text-cyber-blue mt-1">
                        <FileText className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-1">
                          Incident Response One-Pager
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Download our GTM overview detailing IR Commander capabilities, response process, and engagement model.
                        </p>
                      </div>
                    </div>
                    <Button variant="cyber" asChild className="shrink-0">
                      <a
                        href="/Darkstack7-Incident-Response-Retainer-Program.pptx"
                        download
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </a>
                    </Button>
                  </div>
                </Card>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/12d91e59-5e83-4dd7-9feb-4f2fe1c2ae53.png" 
                    alt="Darkstack7 Incident Response Expert" 
                    className="w-48 h-48 rounded-full object-cover border-4 border-cyber-blue/30 shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Service Description */}
          <section className="py-20 bg-gradient-dark">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-6 text-foreground">
                      Expert Leadership When You Need It Most
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      With deep experience in digital forensics and breach containment, we ensure your response 
                      is both swift and defensible. We provide board-level briefings, clear regulatory guidance, 
                      and direct support through executive crisis communication.
                    </p>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      Our approach bridges the gap between technical responders and business decision-makers 
                      when every move counts. Whether you're under attack or suspect compromise, we bring 
                      calm, confidence, and command.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center text-cyber-blue">
                        <CheckCircle className="h-5 w-5 mr-3" />
                        <span>24/7 emergency response availability</span>
                      </div>
                      <div className="flex items-center text-cyber-blue">
                        <CheckCircle className="h-5 w-5 mr-3" />
                        <span>Board-level incident communication</span>
                      </div>
                      <div className="flex items-center text-cyber-blue">
                        <CheckCircle className="h-5 w-5 mr-3" />
                        <span>Digital forensics and evidence preservation</span>
                      </div>
                      <div className="flex items-center text-cyber-blue">
                        <CheckCircle className="h-5 w-5 mr-3" />
                        <span>Regulatory compliance guidance</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="bg-card/50 backdrop-blur-sm border border-cyber-gray/30 rounded-lg p-8">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-cyber-blue mb-2">
                          &lt; 1 Hour
                        </div>
                        <p className="text-muted-foreground mb-6">
                          Average response time for emergency incidents
                        </p>
                        
                        <div className="text-2xl font-bold text-cyber-cyan mb-2">
                          24/7/365
                        </div>
                        <p className="text-muted-foreground">
                          Availability for critical incidents
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Response Process */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  Our Incident Response <span className="text-cyber-blue">Process</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  A proven methodology that brings order to chaos during critical security incidents.
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

          {/* CTA Section */}
          <section className="py-20 bg-gradient-dark">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Need Emergency Response?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Don't wait during a security incident. Contact our emergency response team immediately.
              </p>
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  variant="cyber"
                  className="text-lg"
                  onClick={() => window.open('https://outlook.office.com/bookwithme/user/a36dd60bc57d4471926cdb17d751f663@DarkStack7.com?anonymous&ismsaljsauthenabled&ep=plink', '_blank')}
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />

        {/* LinkedIn Insight Tag noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=9970732&fmt=gif"
          />
        </noscript>
        </div>
      </div>
    </>
  );
};

export default IncidentResponse;