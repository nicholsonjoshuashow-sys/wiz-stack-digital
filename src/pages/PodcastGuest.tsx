import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Mic, Users, Clock, CalendarIcon, Headphones, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const PodcastGuest = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    topicSuggestion: '',
    expertiseAreas: [] as string[],
    bio: '',
    linkedinUrl: '',
    twitterUrl: '',
    websiteUrl: '',
    recordingFormat: '',
    previousExperience: '',
    availability: null as Date | null,
    newsletter: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const expertiseOptions = [
    'Incident Response',
    'Digital Forensics',
    'Threat Intelligence',
    'Cloud Security',
    'Network Security',
    'Application Security',
    'Risk Management',
    'Compliance & Governance',
    'Security Architecture',
    'Identity & Access Management',
    'Cryptography',
    'Malware Analysis',
    'Penetration Testing',
    'Security Awareness',
    'CISO Leadership',
    'Artificial Intelligence & ML Security',
    'IoT Security',
    'Industrial Control Systems',
    'Supply Chain Security',
    'Privacy & Data Protection'
  ];

  const handleExpertiseChange = (expertise: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({ ...prev, expertiseAreas: [...prev.expertiseAreas, expertise] }));
    } else {
      setFormData(prev => ({ ...prev, expertiseAreas: prev.expertiseAreas.filter(e => e !== expertise) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const guestData = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        services: ['Podcast Guest Application'],
        priority: 'low',
        message: `PODCAST GUEST APPLICATION

Topic Suggestion: ${formData.topicSuggestion}

Position: ${formData.position}
Expertise Areas: ${formData.expertiseAreas.join(', ')}

Bio/Background:
${formData.bio}

Social Media & Links:
LinkedIn: ${formData.linkedinUrl}
Twitter: ${formData.twitterUrl}
Website: ${formData.websiteUrl}

Recording Preferences: ${formData.recordingFormat}
Previous Podcast Experience: ${formData.previousExperience}
Availability: ${formData.availability ? format(formData.availability, "PPP") : 'Not specified'}

Newsletter Signup: ${formData.newsletter ? 'Yes' : 'No'}`
      };

      const response = await fetch('https://jfreigfygqxnwaafgwvr.supabase.co/functions/v1/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmcmVpZ2Z5Z3F4bndhYWZnd3ZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1Njc1OTQsImV4cCI6MjA3MzE0MzU5NH0.YwrYcYFEh903zhF6G-rhf5E37uq9ZSKPsnV75_igJp0`
        },
        body: JSON.stringify(guestData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast({
          title: "Application Submitted Successfully",
          description: "Thank you for your interest! We'll review your application and get back to you soon.",
        });

        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          position: '',
          topicSuggestion: '',
          expertiseAreas: [],
          bio: '',
          linkedinUrl: '',
          twitterUrl: '',
          websiteUrl: '',
          recordingFormat: '',
          previousExperience: '',
          availability: null,
          newsletter: false
        });
      } else {
        throw new Error(result.error || 'Failed to send application');
      }

    } catch (error) {
      console.error('Error sending application:', error);
      toast({
        title: "Error Submitting Application",
        description: "Please try again or contact us directly at sales@darkstack7.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const podcastStats = [
    {
      icon: Headphones,
      label: "Episode Reach",
      value: "5K+",
      description: "Industry professionals listening"
    },
    {
      icon: Users,
      label: "Expert Network",
      value: "50+",
      description: "Previous guests and growing"
    },
    {
      icon: Clock,
      label: "Episode Length",
      value: "45-60 min",
      description: "Deep-dive conversations"
    },
    {
      icon: CalendarIcon,
      label: "Recording",
      value: "Remote",
      description: "Flexible scheduling"
    }
  ];

  return (
    <>
      <SEO 
        title="Be a Guest on Cybersecurity America Podcast - DARKSTACK7"
        description="Join Joshua Nicholson on the Cybersecurity America podcast. Share your expertise with cybersecurity professionals worldwide. Apply to be a guest today."
        keywords="cybersecurity podcast guest, security expert interview, CISO podcast, cyber defense expert, Joshua Nicholson podcast"
        canonical="/podcast/guest"
      />

      <div className="min-h-screen bg-background">
        <Header />
        <BreadcrumbNavigation className="pt-20" />
        
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-background via-background/95 to-primary/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                <Mic className="mr-2 h-4 w-4" />
                Guest Application
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Share Your Expertise
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Join Joshua Nicholson on Cybersecurity America and share your insights with thousands of cybersecurity professionals. 
                Help advance the industry through meaningful conversations about the challenges we face on the front lines of cyber defense.
              </p>
            </div>

            {/* Podcast Stats */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {podcastStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="font-semibold mb-1 text-sm">{stat.label}</div>
                    <p className="text-xs text-muted-foreground">{stat.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Guest Application Form */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Guest Application Form</h2>
              <p className="text-muted-foreground text-lg">
                Tell us about yourself and the valuable insights you'd like to share with our audience.
              </p>
            </div>

            <Card className="p-8 border-2 border-red-500">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="position">Position/Title</Label>
                      <Input
                        id="position"
                        value={formData.position}
                        onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
                      />
                    </div>
                  </div>
                </div>

                {/* Topic & Expertise */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Expertise & Topic</h3>
                  <div className="mb-6">
                    <Label htmlFor="topicSuggestion">Suggested Topic/Discussion Area *</Label>
                    <Textarea
                      id="topicSuggestion"
                      rows={3}
                      value={formData.topicSuggestion}
                      onChange={(e) => setFormData(prev => ({ ...prev, topicSuggestion: e.target.value }))}
                      placeholder="What cybersecurity topic would you like to discuss? What unique insights or experiences can you share?"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label>Areas of Expertise (select all that apply)</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3 max-h-48 overflow-y-auto">
                      {expertiseOptions.map((expertise) => (
                        <div key={expertise} className="flex items-center space-x-2">
                          <Checkbox
                            id={expertise}
                            checked={formData.expertiseAreas.includes(expertise)}
                            onCheckedChange={(checked) => handleExpertiseChange(expertise, checked as boolean)}
                          />
                          <Label htmlFor={expertise} className="text-sm">{expertise}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Background & Bio */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Professional Background</h3>
                  <div className="mb-4">
                    <Label htmlFor="bio">Professional Bio/Background *</Label>
                    <Textarea
                      id="bio"
                      rows={4}
                      value={formData.bio}
                      onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                      placeholder="Tell us about your professional background, experience, and what makes you an expert in your field..."
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="previousExperience">Previous Podcast/Speaking Experience</Label>
                    <Textarea
                      id="previousExperience"
                      rows={2}
                      value={formData.previousExperience}
                      onChange={(e) => setFormData(prev => ({ ...prev, previousExperience: e.target.value }))}
                      placeholder="Any previous podcast appearances, speaking engagements, or media experience? (Optional)"
                    />
                  </div>
                </div>

                {/* Social Media & Links */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Online Presence</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="linkedinUrl">LinkedIn Profile</Label>
                      <Input
                        id="linkedinUrl"
                        type="url"
                        value={formData.linkedinUrl}
                        onChange={(e) => setFormData(prev => ({ ...prev, linkedinUrl: e.target.value }))}
                        placeholder="https://linkedin.com/in/..."
                      />
                    </div>
                    <div>
                      <Label htmlFor="twitterUrl">Twitter/X Profile</Label>
                      <Input
                        id="twitterUrl"
                        type="url"
                        value={formData.twitterUrl}
                        onChange={(e) => setFormData(prev => ({ ...prev, twitterUrl: e.target.value }))}
                        placeholder="https://twitter.com/..."
                      />
                    </div>
                    <div>
                      <Label htmlFor="websiteUrl">Personal/Company Website</Label>
                      <Input
                        id="websiteUrl"
                        type="url"
                        value={formData.websiteUrl}
                        onChange={(e) => setFormData(prev => ({ ...prev, websiteUrl: e.target.value }))}
                        placeholder="https://..."
                      />
                    </div>
                  </div>
                </div>

                {/* Recording Preferences */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Availability</h3>
                  <div>
                    <Label htmlFor="availability">Preferred Date for Recording</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !formData.availability && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.availability ? format(formData.availability, "PPP") : <span>Select a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={formData.availability || undefined}
                          onSelect={(date) => setFormData(prev => ({ ...prev, availability: date || null }))}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                    <p className="text-sm text-muted-foreground mt-2">
                      Select your preferred date. We'll coordinate the specific time via email.
                    </p>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, newsletter: checked as boolean }))}
                  />
                  <Label htmlFor="newsletter" className="text-sm">
                    Yes, subscribe me to the DARKSTACK7 newsletter for cybersecurity insights and updates.
                  </Label>
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting Application..." : "Submit Guest Application"}
                </Button>
              </form>
            </Card>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What to Expect</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6">
                <CalendarIcon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Flexible Scheduling</h3>
                <p className="text-sm text-muted-foreground">
                  We work around your schedule. Most recordings happen remotely and can be scheduled at your convenience.
                </p>
              </Card>
              <Card className="p-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Professional Setting</h3>
                <p className="text-sm text-muted-foreground">
                  Join engaging conversations with Joshua Nicholson in a professional, supportive environment focused on sharing knowledge.
                </p>
              </Card>
              <Card className="p-6">
                <ExternalLink className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Broad Distribution</h3>
                <p className="text-sm text-muted-foreground">
                  Your episode will be published across all major podcast platforms, reaching cybersecurity professionals worldwide.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PodcastGuest;