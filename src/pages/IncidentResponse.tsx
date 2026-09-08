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
  Download,
  Network,
  Eye,
  Monitor,
  UserCheck,
  Crosshair,
  Search,
  Building2,
  ShieldCheck,
  Target
} from "lucide-react";
import irHeroBackground from "@/assets/ir-hero-background.png";

const IncidentResponse = () => {
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
                  Digital Forensics & Incident Response <span className="bg-gradient-primary bg-clip-text text-transparent">(DFIR)</span>
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                  Our On-Demand IR Commander service is built for high-impact cyber incidents that demand immediate leadership. 
                  We step in during active breaches to coordinate response efforts, validate threats, and lead technical teams 
                  with clarity and control.
                </p>
                
              </div>
            </div>
          </section>

          {/* 5 Questions Every Organization Should Ask Themselves */}
          <section className="py-20 bg-secondary">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-foreground">
                  5 Questions Every Organization Should Ask Themselves
                </h2>
                <div className="space-y-6 mb-10">
                  {[
                    "Do we truly know our current security posture?",
                    "Could we detect and respond to an incident today?",
                    "Are we compliant — or just hoping we are?",
                    "Do we have visibility into our vulnerabilities?",
                    "Are we prepared for the legal, financial, and operational impact of a breach?"
                  ].map((question, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-lg text-foreground">{question}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    These questions expose blind spots most businesses don't realize they have.
                    If you want clarity, confidence, and a real cybersecurity strategy — let's talk.
                  </p>
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

          {/* Compromise Assessment */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                  <Badge variant="outline" className="mb-6 border-cyber-blue/30 text-cyber-blue">
                    <Search className="h-4 w-4 mr-2" />
                    IR Service
                  </Badge>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                    Compromise <span className="text-cyber-blue">Assessment</span>
                  </h2>
                  <p className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    You Can’t Monitor Your Way to Certainty
                  </p>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Your SIEM is green. Your EDR hasn’t fired. Your last pen test came back clean. And none of that answers the only question that actually matters — is someone already inside, quietly, right now?
                  </p>
                </div>

                <div className="space-y-6 mb-16">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Routine monitoring is built to catch the loud, the known, and the obvious. The adversaries worth worrying about are none of those things. They live off the land, blend into normal admin activity, sit dormant for months, and detonate at 3 a.m. on a Saturday when no one is watching.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    In the Marine Corps, we didn’t wait for the enemy to announce themselves. We ran reconnaissance and active patrols to find them before they found us. A compromise assessment is that patrol for your network — a deliberate, intelligence-led hunt for the attacker your dashboards can’t see.
                  </p>
                </div>

                {/* What it is */}
                <div className="mb-16">
                  <h3 className="text-3xl font-bold text-foreground mb-6">
                    What a Compromise Assessment Actually Is
                  </h3>
                  <Card className="p-8 bg-secondary border-cyber-gray/30 hover:border-cyber-blue/50 transition-all">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      A compromise assessment is an exploratory, intelligence-led investigation that combines digital forensics, enterprise endpoint telemetry, and proactive threat hunting to surface both active and historical attacker activity that routine monitoring may have missed.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-start gap-3">
                        <Target className="h-5 w-5 text-cyber-blue shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-foreground mb-1">Not a Penetration Test</h4>
                          <p className="text-sm text-muted-foreground">
                            A pen test asks, “could an attacker get in?” A compromise assessment asks the far more urgent question: “is an attacker already in — or were they in, and did they leave something behind?”
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <ShieldCheck className="h-5 w-5 text-cyber-blue shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-foreground mb-1">Not a Compliance Audit</h4>
                          <p className="text-sm text-muted-foreground">
                            Vulnerability scans and audits measure posture against a checklist. A compromise assessment applies DFIR discipline to a single objective: find the evidence of intrusion that everything else missed.
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="mt-6 text-foreground font-medium leading-relaxed">
                      The defining trait is hypothesis-driven hunting for attacker tactics, techniques, and procedures — the behaviors a skilled adversary can’t avoid leaving, even when they’ve scrubbed the obvious artifacts.
                    </p>
                  </Card>
                </div>

                {/* Two moments */}
                <div className="mb-16">
                  <h3 className="text-3xl font-bold text-foreground mb-6 text-center">
                    Two Moments You Need One
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="p-8 bg-secondary border-cyber-gray/30 hover:border-cyber-blue/50 transition-all">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                          <Search className="h-5 w-5 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-foreground">When You Suspect a Resident Attacker</h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        The dangerous intrusions aren’t the ones that trip an alert on day one. They dwell — median attacker dwell time is still measured in weeks. Dormant footholds, backdoored service accounts, scheduled tasks on a forgotten backup domain controller, and remote-access tooling that looks just enough like legitimate IT survive reboots, password resets, and the “we think we cleaned it up” declaration. A compromise assessment replaces “we think we’re clean” with “here is the evidence, one way or the other.”
                      </p>
                    </Card>
                    <Card className="p-8 bg-secondary border-cyber-gray/30 hover:border-cyber-blue/50 transition-all">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                          <Building2 className="h-5 w-5 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-foreground">When You’re Acquiring a Company</h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Acquiring an organization means acquiring its history — including any unresolved intrusions, dormant attacker access, and control weaknesses that predate the deal. The moment you merge networks, trust relationships, and identity systems, you can extend an attacker’s foothold from the acquired company straight into the parent enterprise. A compromise assessment gives the acquirer evidence-based answers instead of the seller’s reassurance.
                      </p>
                    </Card>
                  </div>
                </div>

                {/* Five phases */}
                <div className="mb-16">
                  <div className="text-center mb-12">
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      How We Run It: The Five Phases
                    </h3>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                      A compromise assessment is not an open-ended fishing expedition. Because the true scope is unknown at the start, the engagement is built to discover and refine its own scope as evidence comes in.
                    </p>
                  </div>
                  <div className="space-y-6">
                    {[
                      {
                        phase: "Phase 1",
                        title: "Discovery and Scoping",
                        icon: <Crosshair className="h-5 w-5 text-white" />,
                        description: "We establish an understanding of the environment, the known or suspected incident, the timeline and indicators, what remediation was already performed, and — critically — what telemetry and forensic evidence actually exist. Where authorized, we deploy endpoint and forensic sensors across in-scope systems to establish an enterprise-wide baseline.",
                        outcome: "Outcome: a confirmed and refined technical scope, grounded in what the evidence can actually support."
                      },
                      {
                        phase: "Phase 2",
                        title: "Compromise Assessment",
                        icon: <Search className="h-5 w-5 text-white" />,
                        description: "The core hunt. We analyze endpoint and server telemetry, authentication and privileged-account activity, persistence mechanisms, remote-access and egress traffic, and cloud/SaaS security signals. We correlate everything against current threat intelligence and run proactive, hypothesis-driven hunts for attacker TTPs, including analysis of egress traffic for exfiltration or command-and-control.",
                        outcome: "Outcome: findings on active, residual, or historical compromise."
                      },
                      {
                        phase: "Phase 3",
                        title: "Remediation Validation",
                        icon: <ShieldCheck className="h-5 w-5 text-white" />,
                        description: "If an incident already happened and was “fixed,” we test whether the fix actually closed the attack paths. We assess account and credential remediation, privileged-access changes, MFA, persistence removal, monitoring improvements, and system decommissioning — and we’re explicit about where remediation is complete, incomplete, ineffective, or simply unable to be validated because the evidence no longer exists.",
                        outcome: "Outcome: an honest judgment on remediation completeness and gaps."
                      },
                      {
                        phase: "Phase 4",
                        title: "Security Posture Assessment",
                        icon: <Network className="h-5 w-5 text-white" />,
                        description: "We surface the control weaknesses that create ongoing risk independent of any single incident — identity and privileged access, endpoint and network security, detection coverage, patch management, and system hygiene like end-of-life systems, unmanaged assets, and shadow IT. These are the conditions attackers exploit to get in the first time, and to come back.",
                        outcome: "Outcome: the material security gaps relevant to integration or ongoing operations."
                      },
                      {
                        phase: "Phase 5",
                        title: "Risk Analysis and Reporting",
                        icon: <FileText className="h-5 w-5 text-white" />,
                        description: "Every finding is rated by impact, likelihood, exploitability, and — in a deal — exposure to the parent organization. We separate active or residual compromise from historical compromise, remediation gaps, control weaknesses, and visibility limitations, so you can sequence what to fix by actual exposure.",
                        outcome: "Outcome: a decision-ready report and a management readout."
                      }
                    ].map((item, index) => (
                      <Card key={index} className="p-8 bg-secondary border-cyber-gray/30 hover:border-cyber-blue/50 transition-all">
                        <div className="flex items-start gap-5">
                          <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shrink-0">
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="text-xs font-mono text-cyber-cyan uppercase tracking-wider">{item.phase}</span>
                              <h4 className="text-xl font-bold text-foreground">{item.title}</h4>
                            </div>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                              {item.description}
                            </p>
                            <p className="text-foreground font-medium text-sm">
                              {item.outcome}
                            </p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                  <p className="mt-8 text-center text-muted-foreground">
                    One thing that doesn’t wait for Phase 5: in-flight escalation. If we find an active, critical threat mid-assessment, you hear about it immediately — not in the final report — and we can escalate straight to containment or a full incident-response engagement.
                  </p>
                </div>

                {/* Outcome */}
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-6 text-center">
                    The Outcome It Achieves
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                    The point of a compromise assessment isn’t a document. It’s a decision you can defend. At the end, you’re positioned to do four things you couldn’t do before:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    {[
                      "Make an informed decision on evidence, not assurances — whether that’s “we’re clean” for your own environment, or a go/no-go on connecting an acquired network.",
                      "Prioritize and sequence remediation of any residual compromise or control weakness — before an attacker acts, or before environments are connected.",
                      "Quantify and document inherited or existing cyber risk for transaction, insurance, and governance purposes.",
                      "Demonstrate a defensible standard of care to your board, your insurers, and — where relevant — your regulators."
                    ].map((outcome, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-cyber-cyan shrink-0 mt-1" />
                        <p className="text-muted-foreground leading-relaxed">{outcome}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
                    Being able to show you actively hunted for the threat, with an independent third party, using primary evidence, is increasingly the difference between a manageable event and a negligence conversation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Darkstack7 Difference + LinkedIn Newsletter */}
          <section className="py-20 bg-gradient-dark">
            <div className="container mx-auto px-6">
              <div className="max-w-5xl mx-auto">
                <Card className="p-8 md:p-10 border-cyber-blue/50 bg-gradient-to-br from-cyber-blue/10 to-background overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                        <Crosshair className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">The Darkstack7 Difference</h3>
                    </div>
                    <h4 className="text-xl font-bold text-cyber-blue mb-4">Pre-Staged IR Hunting Agents on Critical Assets</h4>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Most IR firms show up to a destructive ransomware event with empty hands. They land on the bridge call, ask for VPN credentials, request RDP access, beg for a jump box, and spend the first 8 to 12 hours just getting positioned to start the investigation — while encryption is still spreading, evidence is being destroyed, and the executive team is asking why nothing is happening.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-10">
                      A serious IR partner has solved all of this before the incident. Pre-positioned Velociraptor hunting agents, staged credentials, tested break-glass access, and a named IR Commander who has already walked your environment mean the first hour is spent investigating — not provisioning.
                    </p>

                    {/* LinkedIn Newsletter */}
                    <div className="border-t border-cyber-blue/20 pt-8 mb-8">
                      <h4 className="text-2xl font-bold mb-3 text-center text-foreground">
                        Stay Ahead of Cyber Threats
                      </h4>
                      <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-center">
                        Subscribe to the Darkstack7 newsletter for cybersecurity insights, incident response guidance, and industry updates.
                      </p>
                      <div className="flex justify-center">
                        <a
                          className="inline-flex flex-col justify-center text-center outline-none no-underline text-white w-[200px] h-[32px] rounded-[16px] bg-[#0A66C2] font-sans text-sm"
                          href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7458615032311062528"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Subscribe on LinkedIn
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button size="lg" variant="outline" asChild>
                        <a href="/Darkstack7-Incident-Response-Retainer-Program.pptx" download>
                          <Download className="mr-2 h-5 w-5" />
                          Download IR One-Pager
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        </div>
      </div>
    </>
  );
};

export default IncidentResponse;
