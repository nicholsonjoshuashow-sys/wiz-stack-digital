import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Presentation, 
  Users, 
  Trophy, 
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Globe,
  BookOpen,
  Target,
  Star
} from "lucide-react";

const TrainingKeynotes = () => {
  const services = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Executive Training",
      description: "C-suite and board-level cybersecurity education tailored to business leaders who need to understand cyber risk without getting lost in technical details."
    },
    {
      icon: <Presentation className="h-6 w-6" />,
      title: "Conference Speaking",
      description: "Keynote presentations and panel discussions at industry conferences, sharing real-world insights from 24 years of cybersecurity leadership."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Interactive Workshops",
      description: "Hands-on learning experiences that blend technical knowledge with practical business applications for maximum retention and impact."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Leadership Growth",
      description: "Professional development programs focused on building confident cybersecurity leaders who can bridge technical and business domains."
    }
  ];

  const achievements = [
    {
      title: "Global Speaker",
      description: "Presented at conferences across 34+ countries",
      icon: <Globe className="h-8 w-8" />
    },
    {
      title: "Industry Recognition",
      description: "Featured speaker at FS-ISAC, BlackHat, RSA Conference",
      icon: <Trophy className="h-8 w-8" />
    },
    {
      title: "Executive Education",
      description: "Wharton School Executive Education Graduate",
      icon: <BookOpen className="h-8 w-8" />
    },
    {
      title: "Military Leadership",
      description: "Former U.S. Marine Corps Sergeant",
      icon: <Star className="h-8 w-8" />
    }
  ];

  const credentials = [
    "CISSP - Certified Information Systems Security Professional",
    "CISM - Certified Information Security Manager", 
    "GIAC-GCIH - GIAC Certified Incident Handler",
    "GCIA - GIAC Certified Intrusion Analyst",
    "GCWN - GIAC Certified Windows Security Administrator",
    "GWEB - GIAC Web Application Penetration Tester",
    "CCNP - Cisco Certified Network Professional",
    "MCSE - Microsoft Certified Systems Engineer"
  ];

  return (
    <>
      <SEO 
        title="Training & Keynotes | Executive Cybersecurity Education | Darkstack7"
        description="Elite cybersecurity training and keynote speaking by Joshua R. Nicholson. Executive education, conference speaking, interactive workshops, and leadership development from a 24-year veteran."
        keywords="cybersecurity training, keynote speaker, executive education, conference speaking, leadership development, cybersecurity workshops"
        canonical="https://darkstack7.com/services/training-keynotes"
      />
      <div className="min-h-screen bg-background">
        <Header />
        <BreadcrumbNavigation className="pt-20" />
        
        <main>
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-dark overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <Badge variant="outline" className="mb-6 border-cyber-blue/30 text-cyber-blue">
                  <Presentation className="h-4 w-4 mr-2" />
                  From Boardroom to Big Stage
                </Badge>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                  Training & <span className="bg-gradient-primary bg-clip-text text-transparent">Keynotes</span>
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                  From the boardroom to the big stage, we deliver powerful stories and actionable lessons that inspire 
                  leaders and teams to embrace cybersecurity as a driver of growth and resilience.
                </p>
                
                <div className="flex justify-center">
                  <Button 
                    size="lg" 
                    variant="cyber" 
                    className="text-lg"
                    onClick={() => window.open('https://outlook.office.com/bookwithme/user/a36dd60bc57d4471926cdb17d751f663@DarkStack7.com?anonymous&ismsaljsauthenabled&ep=plink', '_blank')}
                  >
                    <Presentation className="mr-2 h-5 w-5" />
                    Book Speaking Engagement
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* About Joshua Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-6 text-foreground">
                      Meet Joshua R. Nicholson
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Josh is a multi-faceted, strategic, and accomplished former U.S. Marine Corps Sergeant, 
                      global leader, and respected member of the international cybersecurity & IT communities. 
                      He has 24 years of "hands-on keyboard" technology experience coupled with direct CXO and 
                      Board transformation enablement skills.
                    </p>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      His strong technology and cyber engineering skills, coupled with a smooth and confident 
                      style of explaining highly technical terms in easy-to-understand business language, 
                      is a key attribute of his leadership style.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center text-cyber-blue">
                        <CheckCircle className="h-5 w-5 mr-3" />
                        <span>24 years cybersecurity experience</span>
                      </div>
                      <div className="flex items-center text-cyber-blue">
                        <CheckCircle className="h-5 w-5 mr-3" />
                        <span>Former U.S. Marine Corps Sergeant</span>
                      </div>
                      <div className="flex items-center text-cyber-blue">
                        <CheckCircle className="h-5 w-5 mr-3" />
                        <span>Wharton Executive Education Graduate</span>
                      </div>
                      <div className="flex items-center text-cyber-blue">
                        <CheckCircle className="h-5 w-5 mr-3" />
                        <span>Business travels to 34+ countries</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="flex justify-center">
                      <img 
                        src="/lovable-uploads/professional-headshot.jpg" 
                        alt="Joshua R. Nicholson - Cybersecurity Expert and Keynote Speaker" 
                        className="w-80 h-80 rounded-lg object-cover border-4 border-cyber-blue/30 shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 bg-gradient-dark">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  Training & Speaking <span className="text-cyber-blue">Services</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive cybersecurity education and leadership development tailored to your organization's needs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="p-6 border-cyber-gray/30 hover:border-cyber-blue/50 transition-all">
                    <div className="text-cyber-blue mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  Leadership & <span className="text-cyber-blue">Recognition</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Proven track record of delivering impactful cybersecurity education and thought leadership globally.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-cyber-blue mb-4 flex justify-center">
                      {achievement.icon}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Credentials Section */}
          <section className="py-20 bg-gradient-dark">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  Professional <span className="text-cyber-blue">Credentials</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Industry-leading certifications and qualifications that validate deep expertise across multiple cybersecurity domains.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {credentials.map((credential, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-card/30 p-4 rounded-lg border border-cyber-gray/20">
                      <CheckCircle className="h-5 w-5 text-cyber-blue flex-shrink-0" />
                      <span className="text-foreground">{credential}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-6 text-foreground">
                    Global <span className="text-cyber-blue">Experience</span>
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Extensive international experience building relationships with global executives and CISOs.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-6">Business Skills</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• Executive management of global consultant teams across 6 countries</li>
                      <li>• Superior client presentation and critical thinking skills in difficult environments</li>
                      <li>• Capital and expense budgeting coordination with Sales & Finance</li>
                      <li>• Team building and leadership development</li>
                      <li>• Business case development for CEO & CFO decision-making</li>
                      <li>• CISO, CTO, C-suite & Board level presentation development</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-6">Technical Skills</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• Security Risk Assessments & Remediation</li>
                      <li>• Current State, Future State, and Roadmap strategic analysis</li>
                      <li>• Cyber Threat Management consulting</li>
                      <li>• Security Operations Center (SOC) operations & Incident Response</li>
                      <li>• Security Tools & Solutions Engineering (SIEM)</li>
                      <li>• Network Security Architecture development</li>
                      <li>• Cloud Security within SaaS environments (AWS)</li>
                      <li>• Industry conference presentations and roundtable hosting</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conference Gallery Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  Conference <span className="text-cyber-blue">Gallery</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Highlights from speaking engagements and conference presentations around the world.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="group overflow-hidden rounded-lg border border-cyber-gray/30 hover:border-cyber-blue/50 transition-all">
                  <img 
                    src="/conference-gallery/agenda-presentation.png"
                    alt="Conference agenda presentation showing cybersecurity topics"
                    className="w-full h-64 object-contain bg-card group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="group overflow-hidden rounded-lg border border-cyber-gray/30 hover:border-cyber-blue/50 transition-all">
                  <img 
                    src="/conference-gallery/isaca-training-1.jpg"
                    alt="ISACA cybersecurity training conference with attendees"
                    className="w-full h-64 object-contain bg-card group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="group overflow-hidden rounded-lg border border-cyber-gray/30 hover:border-cyber-blue/50 transition-all">
                  <img 
                    src="/conference-gallery/isaca-training-2.jpg"
                    alt="Joshua Nicholson presenting at ISACA training conference"
                    className="w-full h-64 object-contain bg-card group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="group overflow-hidden rounded-lg border border-cyber-gray/30 hover:border-cyber-blue/50 transition-all">
                  <img 
                    src="/conference-gallery/submerge-conference.jpg"
                    alt="Cofense Submerge 2018 conference with large audience"
                    className="w-full h-64 object-contain bg-card group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="group overflow-hidden rounded-lg border border-cyber-gray/30 hover:border-cyber-blue/50 transition-all">
                  <img 
                    src="/conference-gallery/josh-presenting.jpg"
                    alt="Joshua Nicholson on cybersecurity panel discussion"
                    className="w-full h-64 object-contain bg-card group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="group overflow-hidden rounded-lg border border-cyber-gray/30 hover:border-cyber-blue/50 transition-all">
                  <img 
                    src="/conference-gallery/valulabs-presentations.jpg"
                    alt="Multi-panel view of Inspire 2022 conference presentations"
                    className="w-full h-64 object-contain bg-card group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="group overflow-hidden rounded-lg border border-cyber-gray/30 hover:border-cyber-blue/50 transition-all">
                  <img 
                    src="/conference-gallery/board-holiday-party.jpg"
                    alt="Joshua Nicholson at North Carolina Veterans Business Association Board Holiday Party"
                    className="w-full h-64 object-contain bg-card group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="group overflow-hidden rounded-lg border border-cyber-gray/30 hover:border-cyber-blue/50 transition-all">
                  <img 
                    src="/conference-gallery/blackhat-singapore.png"
                    alt="Joshua Nicholson at BlackHat Asia 2019 conference in Singapore"
                    className="w-full h-64 object-contain bg-card group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-dark">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Ready to Elevate Your Team?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how our training and speaking services can strengthen your organization's cybersecurity posture and leadership capabilities.
              </p>
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  variant="cyber" 
                  className="text-lg"
                  onClick={() => window.open('https://outlook.office.com/bookwithme/user/a36dd60bc57d4471926cdb17d751f663@DarkStack7.com?anonymous&ismsaljsauthenabled&ep=plink', '_blank')}
                >
                  <Presentation className="mr-2 h-5 w-5" />
                  Schedule Consultation
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

export default TrainingKeynotes;