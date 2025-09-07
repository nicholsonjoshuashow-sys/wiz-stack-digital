import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Network, 
  Shield, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Settings,
  Zap,
  ShieldCheck,
  Globe
} from "lucide-react";

const SolutionEngineering = () => {
  const capabilities = [
    {
      icon: <Network className="h-6 w-6" />,
      title: "Technology Integration",
      description: "Seamless integration of cybersecurity technologies into your existing infrastructure with minimal disruption."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "MSSP Partnership Management",
      description: "Strategic management and coordination of Managed Security Service Provider relationships for optimal coverage."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Solution Architecture",
      description: "Custom security solution design and architecture to address your unique business requirements and risk profile."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Vendor Coordination",
      description: "Expert coordination between multiple security vendors to ensure cohesive security operations and management."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Assessment & Discovery",
      description: "Comprehensive evaluation of current security infrastructure, gaps, and business requirements."
    },
    {
      step: "02", 
      title: "Solution Design",
      description: "Custom security architecture design with optimal technology selection and integration planning."
    },
    {
      step: "03",
      title: "Implementation Planning", 
      description: "Detailed project planning with timelines, resource allocation, and risk mitigation strategies."
    },
    {
      step: "04",
      title: "Ongoing Management",
      description: "Continuous optimization, vendor management, and strategic guidance for long-term success."
    }
  ];

  const managedServices = [
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "24/7 Security Monitoring",
      description: "Continuous threat monitoring and incident detection through our partner MSSP network.",
      features: ["Real-time threat detection", "24/7 SOC coverage", "Automated response", "Threat intelligence"]
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Incident Response Coordination",
      description: "Expert coordination of incident response activities across your security ecosystem.",
      features: ["Rapid response coordination", "Multi-vendor management", "Executive communication", "Forensic oversight"]
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Cloud Security Management",
      description: "Comprehensive cloud security monitoring and management across multi-cloud environments.",
      features: ["Cloud workload protection", "Configuration monitoring", "Compliance management", "Identity security"]
    }
  ];

  return (
    <>
      <SEO 
        title="Solution Engineering & Managed Services | Cybersecurity Integration | Darkstack7"
        description="Expert solution engineering and managed security services. Strategic technology integration, MSSP coordination, and custom security architecture for optimal cybersecurity operations."
        keywords="solution engineering, managed security services, MSSP, security integration, cybersecurity architecture, vendor management"
        canonical="https://darkstack7.com/services/solution-engineering"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-dark overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <Badge variant="outline" className="mb-6 border-cyber-blue/30 text-cyber-blue">
                  <Network className="h-4 w-4 mr-2" />
                  Strategic Integration
                </Badge>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                  Solution <span className="bg-gradient-primary bg-clip-text text-transparent">Engineering</span>
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                  We bridge the gap between cybersecurity strategy and implementation through expert solution engineering 
                  and managed service coordination. Our approach ensures optimal technology integration while maximizing 
                  your security investment and operational efficiency.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="cyber" 
                    className="text-lg"
                    onClick={() => window.open('https://outlook.office.com/bookwithme/user/a36dd60bc57d4471926cdb17d751f663@DarkStack7.com?anonymous&ismsaljsauthenabled&ep=plink', '_blank')}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Schedule Consultation
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/contact">
                      Learn More
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
                  Solution Engineering <span className="text-cyber-blue">Capabilities</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive technology integration and coordination to maximize your cybersecurity investment.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            </div>
          </section>

          {/* Managed Services */}
          <section className="py-20 bg-gradient-dark">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  Managed Security <span className="text-cyber-blue">Services</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Strategic MSSP partnerships and coordination to provide comprehensive security coverage.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {managedServices.map((service, index) => (
                  <Card key={index} className="p-6 border-cyber-gray/30 hover:border-cyber-blue/50 transition-all bg-card/50 backdrop-blur-sm">
                    <div className="text-cyber-blue mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-cyber-blue">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Our Process */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  Our Solution Engineering <span className="text-cyber-blue">Process</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  A systematic approach to technology integration and security optimization.
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

          {/* Benefits Section */}
          <section className="py-20 bg-gradient-dark">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-6 text-foreground">
                      Strategic Technology Integration
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Our solution engineering approach ensures that every security technology investment 
                      aligns with your business objectives and operational requirements. We eliminate 
                      technology silos and create unified security operations.
                    </p>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      Through strategic MSSP partnerships and expert vendor coordination, we provide 
                      enterprise-grade security capabilities without the overhead of building and 
                      maintaining complex security operations in-house.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center text-cyber-blue">
                        <CheckCircle className="h-5 w-5 mr-3" />
                        <span>Optimized technology stack integration</span>
                      </div>
                      <div className="flex items-center text-cyber-blue">
                        <CheckCircle className="h-5 w-5 mr-3" />
                        <span>Strategic MSSP partnership management</span>
                      </div>
                      <div className="flex items-center text-cyber-blue">
                        <CheckCircle className="h-5 w-5 mr-3" />
                        <span>Vendor coordination and oversight</span>
                      </div>
                      <div className="flex items-center text-cyber-blue">
                        <CheckCircle className="h-5 w-5 mr-3" />
                        <span>Continuous optimization and improvement</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="bg-card/50 backdrop-blur-sm border border-cyber-gray/30 rounded-lg p-8">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-cyber-blue mb-2">
                          40%
                        </div>
                        <p className="text-muted-foreground mb-6">
                          Average reduction in security operations overhead
                        </p>
                        
                        <div className="text-2xl font-bold text-cyber-cyan mb-2">
                          99.9%
                        </div>
                        <p className="text-muted-foreground">
                          Uptime for managed security services
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Ready to Optimize Your Security Architecture?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how strategic solution engineering can enhance your cybersecurity capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="cyber" 
                  className="text-lg"
                  onClick={() => window.open('https://outlook.office.com/bookwithme/user/a36dd60bc57d4471926cdb17d751f663@DarkStack7.com?anonymous&ismsaljsauthenabled&ep=plink', '_blank')}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/request-quote">
                    Request Quote
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

export default SolutionEngineering;