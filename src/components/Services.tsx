import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  ShieldAlert, 
  UserCheck, 
  Target, 
  Zap, 
  Users, 
  Presentation,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "01",
      icon: <ShieldAlert className="h-8 w-8" />,
      title: "Incident Response (IR)",
      description: "On-demand IR Commander for active breaches. Board-level briefings, forensic leadership, regulatory guidance, threat validation, and executive crisis communication.",
      features: ["24/7 Emergency Response", "Board-Level Communication", "Forensic Investigation", "Regulatory Compliance"],
      variant: "incident" as const
    },
    {
      id: "02", 
      icon: <UserCheck className="h-8 w-8" />,
      title: "Virtual CISO (vCISO)",
      description: "Technical leadership with real-world experience. Executive-level cybersecurity expertise focused on strategy, architecture, threat defense, and security engineering.",
      features: ["Strategic Planning", "Security Architecture", "Team Leadership", "Risk Assessment"],
      variant: "cyber" as const
    },
    {
      id: "03",
      icon: <UserCheck className="h-8 w-8" />,
      title: "Security Assessments & Consulting",
      description: "Our security consulting services give you a clear, actionable roadmap to strengthen your defenses and reduce risk. We combine deep technical expertise with business-focused insight to assess your current security posture.",
      features: ["Comprehensive Security Assessments", "Gap Analysis & Compliance", "Remediation Planning", "Ongoing Advisory Services"],
      variant: "outline" as const,
      cta: "Request a Quote"
    },
    {
      id: "04",
      icon: <Target className="h-8 w-8" />,
      title: "Penetration Testing",
      description: "Comprehensive security assessments that uncover real risks, validate controls, and build practical, scalable, and resilient security strategies.",
      features: ["Network Security Testing", "Application Security", "Cloud Infrastructure", "Vulnerability Assessment"],
      variant: "outline" as const
    },
    {
      id: "05",
      icon: <Users className="h-8 w-8" />,
      title: "Insider Threat Investigations", 
      description: "Comprehensive insider threat investigations, behavioral analysis, digital forensics, and remediation for trusted insider or 3rd party contractor incidents.",
      features: ["Digital Forensics", "Behavioral Analysis", "Discreet Investigation", "Remediation Planning"],
      variant: "outline" as const
    },
    {
      id: "06",
      icon: <Zap className="h-8 w-8" />,
      title: "Tabletop Exercises (TTX)",
      description: "Custom incident response readiness scenarios designed to reflect real threats your organization may face, with detailed gap analysis.",
      features: ["Custom Scenarios", "Gap Analysis", "Team Training", "Compliance Requirements"],
      variant: "outline" as const
    },
    {
      id: "07",
      icon: <Presentation className="h-8 w-8" />,
      title: "Training & Speaking",
      description: "Executive-level training, public speaking, and leadership development focused on real-world cybersecurity challenges and building resilient security cultures.",
      features: ["Executive Training", "Conference Speaking", "Team Workshops", "Leadership Development"],
      variant: "outline" as const
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-dark" aria-labelledby="services-heading">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded by Joshua R. Nicholson—a 24-year cybersecurity veteran and former U.S. Marine with 
            leadership experience across Fortune 500 companies and government agencies.
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {services.map((service) => (
            <article key={service.id} role="listitem" className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-cyber-gray/30 hover:border-cyber-blue/50 transition-all duration-300 hover:shadow-glow rounded-lg">
              <div className="p-6">
                {/* Service Number */}
                <div className="text-6xl font-bold text-cyber-blue/20 mb-4 group-hover:text-cyber-blue/30 transition-colors">
                  {service.id}
                </div>

                {/* Icon */}
                <div className="text-cyber-blue mb-4 group-hover:text-cyber-cyan transition-colors">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-cyber-blue transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-cyber-cyan rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                {service.id === "01" ? (
                  <Link to="/services/IR" className="block">
                    <Button variant={service.variant} size="sm" className="w-full group-hover:shadow-glow transition-all">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                ) : service.id === "02" ? (
                  <Link to="/services/CISO" className="block">
                    <Button variant={service.variant} size="sm" className="w-full group-hover:shadow-glow transition-all">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                ) : service.id === "03" ? (
                  <Link to="/services/security-assessments-consulting" className="block">
                    <Button variant={service.variant} size="sm" className="w-full group-hover:shadow-glow transition-all">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                ) : service.id === "04" ? (
                  <Link to="/services/penetration-testing" className="block">
                    <Button variant={service.variant} size="sm" className="w-full group-hover:shadow-glow transition-all">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                ) : service.id === "05" ? (
                  <Link to="/services/insiderthreat" className="block">
                    <Button variant={service.variant} size="sm" className="w-full group-hover:shadow-glow transition-all">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                ) : service.id === "06" ? (
                  <Link to="/services/tabletop_exercises" className="block">
                    <Button variant={service.variant} size="sm" className="w-full group-hover:shadow-glow transition-all">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                ) : (
                  <Button variant={service.variant} size="sm" className="w-full group-hover:shadow-glow transition-all">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                )}
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-cyber opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button variant="cyber" size="lg" className="text-lg px-8 py-3">
            Schedule Emergency Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;