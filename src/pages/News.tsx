import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink, Linkedin } from "lucide-react";

// Mock LinkedIn posts data - In production, this would come from LinkedIn API
const linkedInPosts = [
  {
    id: 1,
    title: "Cybersecurity Leadership in the Digital Age",
    content: "As organizations face increasingly sophisticated cyber threats, the role of cybersecurity leadership has never been more critical. Our latest insights on building resilient security frameworks...",
    date: "2024-01-15",
    category: "Leadership",
    readTime: "3 min read",
    linkedinUrl: "https://linkedin.com/company/darkstack7"
  },
  {
    id: 2,
    title: "24/7 Incident Response: Best Practices",
    content: "When a cyber incident strikes, every second counts. Our incident response team shares proven strategies for rapid threat containment and recovery...",
    date: "2024-01-10",
    category: "Incident Response",
    readTime: "5 min read",
    linkedinUrl: "https://linkedin.com/company/darkstack7"
  },
  {
    id: 3,
    title: "Virtual CISO Services: Transforming Security Strategy",
    content: "Organizations of all sizes need strategic cybersecurity leadership. Discover how virtual CISO services provide enterprise-level security expertise...",
    date: "2024-01-08",
    category: "Virtual CISO",
    readTime: "4 min read",
    linkedinUrl: "https://linkedin.com/company/darkstack7"
  },
  {
    id: 4,
    title: "Penetration Testing: Beyond Compliance",
    content: "Modern penetration testing goes far beyond checking compliance boxes. Learn how comprehensive security assessments identify real-world vulnerabilities...",
    date: "2024-01-05",
    category: "Penetration Testing",
    readTime: "6 min read",
    linkedinUrl: "https://linkedin.com/company/darkstack7"
  },
  {
    id: 5,
    title: "Insider Threat Detection and Mitigation",
    content: "Insider threats represent one of the most challenging security risks facing organizations today. Our comprehensive approach to detection and prevention...",
    date: "2024-01-02",
    category: "Insider Threat",
    readTime: "4 min read",
    linkedinUrl: "https://linkedin.com/company/darkstack7"
  },
  {
    id: 6,
    title: "Tabletop Exercises: Preparing for the Unknown",
    content: "Regular tabletop exercises are essential for maintaining incident response readiness. Explore our methodology for creating realistic security scenarios...",
    date: "2023-12-28",
    category: "Training",
    readTime: "5 min read",
    linkedinUrl: "https://linkedin.com/company/darkstack7"
  }
];

const News = () => {
  return (
    <>
      <SEO 
        title="Cybersecurity News & Insights | Darkstack7"
        description="Stay updated with the latest cybersecurity insights, industry news, and expert commentary from Darkstack7's leadership team. Professional security analysis and strategic guidance."
        keywords="cybersecurity news, security insights, cyber threats, incident response updates, CISO guidance, penetration testing news, darkstack7 updates"
        canonical="https://darkstack7.com/media/news"
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-6 py-12">
            <BreadcrumbNavigation />
            
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyber-blue via-fire-red to-cyber-blue bg-clip-text text-transparent">
                Cybersecurity News & Insights
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Stay informed with the latest cybersecurity insights, industry analysis, and strategic guidance from our leadership team.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Linkedin className="h-4 w-4" />
                <span>Content sourced from</span>
                <a 
                  href="https://linkedin.com/company/darkstack7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyber-blue hover:underline font-medium"
                >
                  Darkstack7 | Cybersecurity Leadership | Charlotte
                </a>
              </div>
            </div>

            {/* News Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {linkedInPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-cyber-blue/50">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-cyber-blue transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.content}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {post.readTime}
                      </span>
                      <a
                        href={post.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-cyber-blue hover:text-fire-red transition-colors"
                      >
                        Read on LinkedIn
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* LinkedIn Follow Section */}
            <div className="text-center bg-gradient-to-r from-background/50 to-background/80 rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Follow Darkstack7 on LinkedIn for real-time cybersecurity insights, industry updates, and strategic guidance from our leadership team.
              </p>
              <a
                href="https://linkedin.com/company/darkstack7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#0077B5] text-white px-6 py-3 rounded-lg hover:bg-[#005582] transition-colors font-medium"
              >
                <Linkedin className="h-5 w-5" />
                Follow on LinkedIn
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default News;