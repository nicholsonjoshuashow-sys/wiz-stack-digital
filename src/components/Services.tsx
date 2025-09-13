import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Siren, 
  User, 
  Target, 
  Zap, 
  Users, 
  Presentation,
  Network,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "00",
      icon: <Network className="h-8 w-8" />,
      title: "Service Overview & Legend",
      description: "Understanding our comprehensive cybersecurity approach: Red indicates reactive incident response services for active threats, while Blue represents proactive consulting and strategic services. All services are unified through our Solution Engineering approach.",
      features: [
        "🔴 Reactive: Incident Response, Penetration Testing, Insider Threat, Tabletop Exercises", 
        "🔵 Proactive: Virtual CISO, Security Assessments, Solution Engineering, Training", 
        "Unified approach through Solution Engineering coordination",
        "24/7 availability for critical incidents"
      ],
      variant: "outline" as const
    },
    {
      id: "01",
      icon: <Siren className="h-8 w-8" />,
      title: "Incident Response (IR)",
      description: "On-demand IR Commander for active breaches. Board-level briefings, forensic leadership, IR Architecture / Runbooks, threat validation, and executive crisis communication.",
      features: ["24/7 Emergency Response", "Threat Validation & Forensics", "IR Architecture & Runbooks", "Board-Level Communication"],
      variant: "incident" as const
    },
    {
      id: "02", 
      icon: <User className="h-8 w-8" />,
      title: "Virtual CISO (vCISO)",
      description: "Technical leadership with real-world experience on a fractional cost basis. Executive-level cybersecurity expertise focused on strategy, architecture, threat defense, and security engineering.",
      features: ["Current State / Future State / Roadmap", "Solutions Architecture & Risk", "Team Leadership", "Audit & Compliance"],
      variant: "cyber" as const
    },
    {
      id: "03",
      icon: <User className="h-8 w-8" />,
      title: "Security Assessments & Consulting",
      description: "Clear, actionable roadmaps to strengthen defenses and reduce risk. Deep technical expertise with business-focused insight for comprehensive security posture assessments.",
      features: ["Comprehensive Security Assessments", "Gap Analysis & Compliance", "Remediation Planning", "Ongoing Advisory Services"],
      variant: "cyber" as const,
      cta: "Request a Quote"
    },
    {
      id: "04",
      icon: <Target className="h-8 w-8" />,
      title: "Penetration Testing",
      description: "Comprehensive security assessments that uncover real risks, validate controls, and build practical, scalable security strategies.",
      features: ["Network Security Testing", "Application Security", "Cloud Infrastructure", "Vulnerability Assessment"],
      variant: "incident" as const
    },
    {
      id: "05",
      icon: <Users className="h-8 w-8" />,
      title: "Insider Threat Investigations", 
      description: "Comprehensive insider threat investigations, behavioral analysis, digital forensics, and remediation for trusted insider or 3rd party contractor incidents.",
      features: ["Digital Forensics", "Behavioral Analysis", "Discreet Investigation", "Remediation Planning"],
      variant: "incident" as const
    },
    {
      id: "06",
      icon: <Zap className="h-8 w-8" />,
      title: "Tabletop Exercises (TTX)",
      description: "Custom incident response readiness scenarios designed to reflect real threats your organization may face, with detailed gap analysis.",
      features: ["Custom Scenarios", "Gap Analysis", "Team Training", "Compliance Requirements"],
      variant: "incident" as const
    },
    {
      id: "07",
      icon: <Network className="h-8 w-8" />,
      title: "Solution Engineering",
      description: "Strategic technology partnerships and managed security service provider integration to enhance your cybersecurity capabilities and operational effectiveness.",
      features: ["Trusted Partnerships", "Tailored Security Solutions", "Coordinated Operations", "Strategic Cyber Planning"],
      variant: "cyber" as const
    },
    {
      id: "08",
      icon: <Presentation className="h-8 w-8" />,
      title: "Training & Keynotes",
      description: "From the boardroom to the big stage, we deliver powerful stories and actionable lessons that inspire leaders and teams to embrace cybersecurity as a driver of growth and resilience.",
      features: ["Executive Training", "Conference Speaking", "Interactive Workshops", "Leadership Growth"],
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
            Darkstack7 delivers comprehensive cybersecurity services spanning reactive incident response and proactive strategic consulting. 
            Our elite team provides 24/7 emergency response, virtual CISO leadership, penetration testing, insider threat investigations, 
            tabletop exercises, security assessments, solution engineering, and executive training. Founded by Joshua R. Nicholson—a 24-year 
            cybersecurity veteran and former U.S. Marine with leadership experience across Fortune 500 companies and government agencies.
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {services.map((service) => (
            <article key={service.id} role="listitem" className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-cyber-gray/30 hover:border-cyber-blue/50 transition-all duration-300 hover:shadow-glow rounded-lg h-full">
              <div className="p-6 h-full flex flex-col">
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
                <ul className="space-y-2 mb-6 flex-grow">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-sm text-muted-foreground">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-cyber opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
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
  );
};

export default Services;