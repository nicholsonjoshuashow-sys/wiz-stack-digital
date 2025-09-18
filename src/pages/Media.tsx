import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play, Users, Calendar, Award, Globe, Shield, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const Media = () => {
  const featuredVideos = [
    {
      id: "1",
      title: "Episode 30: Leadership Insight - Cyber Challenges in Government with Former Governor Pat McCrory",
      description: "In-depth discussion on cybersecurity challenges in government with former North Carolina Governor Pat McCrory, exploring leadership insights and policy implications.",
      thumbnail: "https://img.youtube.com/vi/zVwHUSKs_uI/maxresdefault.jpg",
      videoUrl: "https://youtu.be/zVwHUSKs_uI?si=GgM9RQEWnJp-0ql8",
      duration: "45:30",
      views: "2.1K",
      publishedAt: "2024-01-15"
    },
    {
      id: "2", 
      title: "Episode 8: Thought Leadership - Bruce Schneier on 'A Hacker's Mind'",
      description: "Renowned security expert Bruce Schneier discusses his book 'A Hacker's Mind' and how the powerful bend the rules in cybersecurity and beyond.",
      thumbnail: "https://img.youtube.com/vi/_TeDSXXJL8c/maxresdefault.jpg",
      videoUrl: "https://youtu.be/_TeDSXXJL8c",
      duration: "52:15",
      views: "3.8K",
      publishedAt: "2023-12-20"
    },
    {
      id: "3",
      title: "Cybersecurity America Show - Special Episode",
      description: "Special cybersecurity insights and industry analysis from the Cybersecurity America podcast series.",
      thumbnail: "https://img.youtube.com/vi/3FzNgLO0K38/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=3FzNgLO0K38",
      duration: "38:20",
      views: "1.5K",
      publishedAt: "2024-02-01"
    },
    {
      id: "4",
      title: "Cybersecurity Leadership Insights",
      description: "Expert insights on cybersecurity leadership, strategic defense planning, and emerging threat landscapes.",
      thumbnail: "https://img.youtube.com/vi/xURkBMhmKqc/maxresdefault.jpg",
      videoUrl: "https://youtu.be/xURkBMhmKqc?si=R2Ezy6l-aQifnMFd",
      duration: "42:15",
      views: "1.8K",
      publishedAt: "2024-02-15"
    },
    {
      id: "5",
      title: "New Cybersecurity Insights",
      description: "Latest cybersecurity insights and industry developments from security experts.",
      thumbnail: "https://img.youtube.com/vi/Dr6VDjubd3k/maxresdefault.jpg",
      videoUrl: "https://youtu.be/Dr6VDjubd3k?si=Nahzlr9xBVywf2RS",
      duration: "35:20",
      views: "950",
      publishedAt: "2024-03-01"
    },
    {
      id: "6",
      title: "Advanced Security Strategies",
      description: "Deep dive into advanced cybersecurity strategies and defense mechanisms.",
      thumbnail: "https://img.youtube.com/vi/4hLmKHvEcVg/maxresdefault.jpg",
      videoUrl: "https://youtu.be/4hLmKHvEcVg?si=8tuaDpoeFKiW0KVv",
      duration: "48:10",
      views: "1.2K",
      publishedAt: "2024-03-10"
    }
  ];

  const mediaHighlights = [
    {
      title: "Cybersecurity America Show",
      description: "Weekly deep-dives into cybersecurity leadership, incident response, and strategic defense",
      link: "https://www.youtube.com/@cybersecurityamerica_show",
      type: "YouTube Channel"
    },
    {
      title: "Security Leadership Podcast",
      description: "Interviews with top cybersecurity executives and thought leaders",
      link: "https://youtu.be/iZnxXZ7qux4?si=ywb3DLL3ng3LuHgE",
      type: "Podcast Series"
    },
    {
      title: "CISO Roundtable",
      description: "Monthly discussions on emerging threats and strategic security initiatives",
      link: "#",
      type: "Video Series"
    }
  ];

  const expertise = [
    {
      icon: Shield,
      title: "24-Year Security Veteran",
      description: "Comprehensive experience across military, government, and private sector cybersecurity"
    },
    {
      icon: Globe,
      title: "Global Operations",
      description: "Led security operations across 60+ countries with international incident response"
    },
    {
      icon: AlertTriangle,
      title: "Crisis Leadership",
      description: "Specialized in high-stakes cybersecurity incidents and emergency response coordination"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Multiple certifications including CISSP, CISM, and advanced security credentials"
    }
  ];

  const credentials = [
    "Former U.S. Marine & Government Security Specialist",
    "24+ Years Cybersecurity Experience",
    "60+ Countries Global Security Operations",
    "CISSP, CISM, Security+ Certified",
    "Emergency Response & Crisis Management Expert",
    "Virtual CISO & Strategic Security Consultant"
  ];

  return (
    <>
      <SEO 
        title="Media & Content - Joshua R. Nicholson | Cybersecurity Leadership"
        description="Watch cybersecurity expert Joshua R. Nicholson share insights on incident response, virtual CISO services, and security leadership through videos, podcasts, and educational content."
        keywords="cybersecurity media, security leadership content, Joshua Nicholson videos, incident response training, CISO insights, cybersecurity education"
        canonical="https://darkstack7.com/media"
      />
      <div className="min-h-screen bg-background">
        <Header />
        <BreadcrumbNavigation className="pt-20" />
        
        <main>
          {/* Hero Section */}
          <section className="py-16 px-4 bg-gradient-to-br from-background via-background/95 to-primary/5">
            <div className="max-w-6xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">Media & Content</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Cybersecurity Insights & Education
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Expert cybersecurity content from Joshua R. Nicholson - 24-year veteran, crisis leadership specialist, and trusted security advisor.
              </p>
              <Button asChild size="lg" className="mr-4">
                <a 
                  href="https://www.youtube.com/@cybersecurityamerica_show" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Latest Videos
                </a>
              </Button>
            </div>
          </section>

          {/* Featured Videos */}
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Content</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Watch our latest cybersecurity insights, leadership strategies, and incident response best practices.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredVideos.map((video) => (
                  <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Button asChild size="lg" variant="secondary" className="bg-white/90 text-black hover:bg-white">
                          <a 
                            href={video.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center"
                          >
                            <Play className="mr-2 h-5 w-5 fill-current" />
                            Watch
                          </a>
                        </Button>
                      </div>
                      <Badge className="absolute top-2 right-2 bg-black/70 text-white">
                        {video.duration}
                      </Badge>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-2">{video.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{video.description}</p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Users className="mr-1 h-4 w-4" />
                          {video.views} views
                        </span>
                        <span className="flex items-center">
                          <Calendar className="mr-1 h-4 w-4" />
                          {new Date(video.publishedAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Media Highlights */}
          <section className="py-16 px-4 bg-muted/30">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Media Presence</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Regular content across multiple platforms covering cybersecurity leadership and strategic defense.
                </p>
              </div>
              
              {/* News Section Card */}
              <div className="mb-8">
                <Card className="p-6 bg-gradient-to-r from-cyber-blue/10 to-fire-red/10 border-cyber-blue/20">
                  <div className="text-center">
                    <Badge variant="secondary" className="mb-4">Latest Updates</Badge>
                    <h3 className="font-bold text-2xl mb-3">Cybersecurity News & Insights</h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                      Stay informed with the latest cybersecurity insights, industry analysis, and strategic guidance from our LinkedIn content and expert commentary.
                    </p>
                    <Button asChild size="lg">
                      <Link to="/media/news" className="inline-flex items-center">
                        View News & Insights
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {mediaHighlights.map((item, index) => (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                    <Badge variant="secondary" className="mb-4">{item.type}</Badge>
                    <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                    <p className="text-muted-foreground mb-6">{item.description}</p>
                    <Button asChild variant="outline">
                      <a 
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Watch Now
                      </a>
                    </Button>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Button asChild size="lg">
                  <a 
                    href="https://gamma.app/docs/Building-Trust-in-AI-2uqr2rxhqmzksaf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    ISC2 / ISACA Conference
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* About Joshua Section */}
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">About Joshua R. Nicholson</h2>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                  Founder & CEO of DARKSTACK7, bringing 24 years of elite cybersecurity experience from military service to Fortune 500 consulting.
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    {expertise.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className="text-center">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                          <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                          <p className="text-muted-foreground text-sm">{item.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <Card className="p-8">
                  <h3 className="font-bold text-2xl mb-6">Professional Credentials</h3>
                  <div className="space-y-4">
                    {credentials.map((credential, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-muted-foreground">{credential}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t">
                    <h4 className="font-bold mb-4">Global Experience</h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      Led cybersecurity operations across 60+ countries, specializing in crisis management, 
                      incident response, and strategic security consulting for government and private sector clients.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Crisis Leadership</Badge>
                      <Badge variant="outline">Global Operations</Badge>
                      <Badge variant="outline">Incident Response</Badge>
                      <Badge variant="outline">Virtual CISO</Badge>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Subscribe to our channel for the latest cybersecurity insights, leadership strategies, and industry updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a 
                    href="https://www.youtube.com/@cybersecurityamerica_show" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Subscribe to Channel
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact" className="inline-flex items-center">
                    Get in Touch
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

export default Media;