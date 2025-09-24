import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Calendar, Download, ExternalLink, Headphones, Mic, Users, RefreshCw, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { usePodcastEpisodes } from "@/hooks/usePodcastEpisodes";

const Podcast = () => {
  const { data: podcastEpisodes = [], isLoading, error, refetch } = usePodcastEpisodes();

  const podcastStats = [
    {
      icon: Headphones,
      label: "Total Episodes",
      value: `${podcastEpisodes.length}+`,
      description: "In-depth cybersecurity conversations"
    },
    {
      icon: Users,
      label: "Expert Guests",
      value: "50+",
      description: "Industry leaders and practitioners"
    },
    {
      icon: Clock,
      label: "Total Content",
      value: "30+ Hours",
      description: "Professional cybersecurity insights"
    },
    {
      icon: Mic,
      label: "Active Since",
      value: "2024",
      description: "Consistent weekly releases"
    }
  ];

  const podcastPlatforms = [
    {
      name: "Apple Podcasts",
      url: "https://podcasts.apple.com/us/podcast/cyber-security-america/id1668216285",
      icon: "🎵"
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/show/3wmyUbe1TY5hNl96Q8UFFI?si=b8f35d6981414ccb",
      icon: "🎧"
    },
    {
      name: "Google Podcasts",
      url: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5saWJzeW4uY29tLzUwNjM3My9yc3M",
      icon: "📱"
    },
    {
      name: "RSS Feed",
      url: "https://feeds.libsyn.com/506373/rss",
      icon: "📡"
    }
  ];

  return (
    <>
      <SEO 
        title="Cybersecurity America Podcast - Expert Insights & Industry Analysis"
        description="Listen to the Cybersecurity America podcast hosted by Joshua R. Nicholson. Expert interviews, incident response insights, and strategic cybersecurity discussions with industry leaders."
        keywords="cybersecurity podcast, security leadership, incident response, CISO insights, cyber defense, Joshua Nicholson podcast"
        canonical="https://darkstack7.com/podcast"
      />
      <div className="min-h-screen bg-background">
        <Header />
        <BreadcrumbNavigation className="pt-20" />
        
        <main>
          {/* Hero Section */}
          <section className="py-12 px-4 bg-gradient-to-br from-background via-background/95 to-primary/5">
            <div className="max-w-6xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <Headphones className="mr-2 h-4 w-4" />
                Podcast
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Cybersecurity America
              </h1>
              <div className="max-w-2xl mx-auto mb-8">
                <img 
                  src="/lovable-uploads/2181617d-b439-4735-840a-4c19fb47879a.png"
                  alt="Cybersecurity America Podcast Cover - Joshua Nicholson"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                On the front lines of technology and business, there's a battle for survival. Join host Joshua R. Nicholson for real-world advice and insights from cybersecurity leaders, CISOs, and security professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a 
                    href="https://feeds.libsyn.com/506373/rss" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Listen Now
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a 
                    href="#episodes" 
                    className="inline-flex items-center"
                  >
                    Browse Episodes
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Podcast Stats */}
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {podcastStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <Card key={index} className="p-6 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="text-3xl font-bold mb-2">{stat.value}</div>
                      <div className="font-semibold mb-1">{stat.label}</div>
                      <p className="text-sm text-muted-foreground">{stat.description}</p>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Latest Episodes */}
          <section id="episodes" className="py-12 px-4 bg-muted/30">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <h2 className="text-3xl md:text-4xl font-bold">Latest Episodes</h2>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => refetch()}
                    disabled={isLoading}
                  >
                    <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
                  </Button>
                </div>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Discover the latest cybersecurity insights, expert interviews, and strategic discussions from industry leaders.
                </p>
              </div>
              
              {error && (
                <Card className="p-6 mb-8 border-destructive/50 bg-destructive/5">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-destructive" />
                    <div>
                      <h3 className="font-semibold text-destructive">Error loading episodes</h3>
                      <p className="text-sm text-muted-foreground">
                        Unable to fetch the latest episodes. Please try refreshing the page.
                      </p>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => refetch()}>
                      Retry
                    </Button>
                  </div>
                </Card>
              )}

              {isLoading && (
                <div className="space-y-8">
                  {[...Array(4)].map((_, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="p-6">
                        <div className="animate-pulse space-y-4">
                          <div className="flex gap-2">
                            <div className="h-6 bg-muted rounded w-32"></div>
                            <div className="h-6 bg-muted rounded w-20 ml-auto"></div>
                          </div>
                          <div className="h-8 bg-muted rounded"></div>
                          <div className="space-y-2">
                            <div className="h-4 bg-muted rounded"></div>
                            <div className="h-4 bg-muted rounded w-3/4"></div>
                          </div>
                          <div className="flex gap-2">
                            <div className="h-6 bg-muted rounded w-16"></div>
                            <div className="h-6 bg-muted rounded w-20"></div>
                            <div className="h-6 bg-muted rounded w-24"></div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
              
              <div className="space-y-8">
                {podcastEpisodes.map((episode) => (
                <Card key={episode.id} className="overflow-hidden hover:shadow-lg transition-shadow border-2 border-red-500">
                  <div className="p-6">
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="secondary">
                              Season {episode.season} • Episode {episode.episode_number}
                            </Badge>
                            <Badge variant="outline" className="ml-auto">
                              <Clock className="mr-1 h-3 w-3" />
                              {episode.duration}
                            </Badge>
                          </div>
                          
                          <h3 className="text-xl font-bold mb-3">{episode.title}</h3>
                          <p className="text-muted-foreground mb-4">{episode.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {episode.keywords.map((keyword) => (
                              <Badge key={keyword} variant="outline" className="text-xs">
                                {keyword}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center text-sm text-muted-foreground mb-4">
                            <Calendar className="mr-2 h-4 w-4" />
                            {new Date(episode.published_at).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </div>
                        </div>
                        
                        <div className="lg:w-64 flex flex-col gap-3">
                          <Button asChild className="w-full">
                            <a 
                              href={episode.audio_url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Play className="mr-2 h-4 w-4" />
                              Play Audio
                            </a>
                          </Button>
                          
                          <Button asChild variant="outline" className="w-full">
                            <a 
                              href={episode.audio_url}
                              download
                            >
                              <Download className="mr-2 h-4 w-4" />
                              Download
                            </a>
                          </Button>
                          
                          {episode.youtube_link && (
                            <Button asChild variant="outline" className="w-full">
                              <a 
                                href={episode.youtube_link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Watch Video
                              </a>
                            </Button>
                          )}
                          
                          {episode.libsyn_link && (
                            <Button asChild variant="outline" className="w-full">
                              <a 
                                href={episode.libsyn_link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Episode Page
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Audio Version Embeds */}
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Audio Version of the Show</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Listen to the latest episodes directly from your favorite platforms.
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Spotify Embed */}
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-center">Spotify</h3>
                  <iframe 
                    data-testid="embed-iframe" 
                    style={{borderRadius: '12px'}} 
                    src="https://open.spotify.com/embed/show/3wmyUbe1TY5hNl96Q8UFFI?utm_source=generator&si=b8f35d6981414ccb" 
                    width="100%" 
                    height="352" 
                    frameBorder="0" 
                    allowFullScreen 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                  />
                </Card>

                {/* Apple Podcast Embed */}
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-center">Apple Podcasts</h3>
                  <iframe 
                    allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" 
                    frameBorder="0" 
                    height="450" 
                    style={{width: '100%', maxWidth: '660px', overflow: 'hidden', borderRadius: '10px'}} 
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
                    src="https://embed.podcasts.apple.com/us/podcast/cyber-security-america/id1668216285"
                  />
                </Card>
              </div>
            </div>
          </section>

          {/* Listen On Platforms */}
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Listen Everywhere</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Subscribe and listen to Cybersecurity America on your favorite podcast platform.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {podcastPlatforms.map((platform, index) => (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-4">{platform.icon}</div>
                    <h3 className="font-bold text-lg mb-3">{platform.name}</h3>
                    <Button asChild variant="outline" className="w-full">
                      <a 
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Listen
                      </a>
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* About the Show */}
          <section className="py-12 px-4 bg-muted/30">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About the Show</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
                Behind the scenes, businesses are on a mission to keep a vigilant watch for threats in an ongoing Cyber War. 
                But it's not just about malware, ransomware, and breaches anymore. The obstacles and barriers companies face 
                today are bigger and badder than ever — and these cyber threats are forcing them to prove they're secure for the future.
              </p>
              <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
                When you need answers to win the battle, tune into Cyber Security America with your host Joshua Nicholson. 
                As a cybersecurity professional with over a decade of experience, Joshua brings you real insights from the 
                front lines and conversations with the industry's top security leaders.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">
                  Get In Touch
                </Link>
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Podcast;