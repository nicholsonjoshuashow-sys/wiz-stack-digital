import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ArrowRight, Shield, Users, Building, MessageSquare } from "lucide-react";

const RequestQuote = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    environmentSize: "",
    services: [] as string[],
    timeline: "",
    budget: "",
    requirements: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.company || !formData.environmentSize) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create email body
      const emailBody = `
New Quote Request from Darkstack7 Website

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Company: ${formData.company}
- Phone: ${formData.phone || 'Not provided'}

Environment Details:
- Environment Size: ${formData.environmentSize}
- Services Interested In: ${formData.services.join(', ') || 'Not specified'}
- Timeline: ${formData.timeline || 'Not specified'}
- Budget Range: ${formData.budget || 'Not specified'}

Requirements:
${formData.requirements || 'No additional requirements specified'}

Submitted: ${new Date().toLocaleString()}
      `.trim();

      // Create a mailto link
      const mailtoLink = `mailto:sales@darkstack7.com?subject=Quote Request from ${formData.name} - ${formData.company}&body=${encodeURIComponent(emailBody)}`;
      
      // Open email client
      window.location.href = mailtoLink;

      toast({
        title: "Quote Request Prepared",
        description: "Your email client should open with your quote request. Please send the email to complete your request.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        environmentSize: "",
        services: [],
        timeline: "",
        budget: "",
        requirements: ""
      });

    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue preparing your quote request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title="Request a Quote - Darkstack7 Cybersecurity Services"
        description="Get a customized quote for elite cybersecurity services including incident response, virtual CISO, penetration testing, and security consulting."
        keywords="cybersecurity quote, security services pricing, incident response quote, virtual CISO pricing, penetration testing cost"
        canonical="https://darkstack7.com/services/requestquote"
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-background via-cyber-dark/20 to-background relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
            <div className="container mx-auto px-4 relative">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-cyber-dark/20 border border-cyber-gray/30 rounded-full px-4 py-2 mb-6">
                  <Shield className="h-4 w-4 text-cyber-cyan" />
                  <span className="text-sm text-muted-foreground">Custom Security Solutions</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                  Request Your Custom Quote
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Get a tailored quote for elite cybersecurity services designed for your specific needs and environment.
                </p>
              </div>
            </div>
          </section>

          {/* Quote Form Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Card className="p-8 bg-card/80 backdrop-blur-sm border-cyber-gray/30">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Contact Information */}
                    <div>
                      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Users className="h-6 w-6 text-cyber-cyan" />
                        Contact Information
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="john@company.com"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="company">Company Name *</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            placeholder="Your Company Inc."
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Environment Information */}
                    <div>
                      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Building className="h-6 w-6 text-cyber-cyan" />
                        Environment Details
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <Label className="text-base font-semibold mb-4 block">How big is your environment? *</Label>
                          <RadioGroup 
                            value={formData.environmentSize} 
                            onValueChange={(value) => handleInputChange('environmentSize', value)}
                            className="grid md:grid-cols-2 gap-4"
                          >
                            <div className="flex items-center space-x-2 p-4 border border-cyber-gray/30 rounded-lg hover:bg-cyber-dark/10">
                              <RadioGroupItem value="1-150" id="env1" />
                              <Label htmlFor="env1" className="cursor-pointer">1-150 endpoints</Label>
                            </div>
                            <div className="flex items-center space-x-2 p-4 border border-cyber-gray/30 rounded-lg hover:bg-cyber-dark/10">
                              <RadioGroupItem value="150-500" id="env2" />
                              <Label htmlFor="env2" className="cursor-pointer">150-500 endpoints</Label>
                            </div>
                            <div className="flex items-center space-x-2 p-4 border border-cyber-gray/30 rounded-lg hover:bg-cyber-dark/10">
                              <RadioGroupItem value="500-1000" id="env3" />
                              <Label htmlFor="env3" className="cursor-pointer">500-1,000 endpoints</Label>
                            </div>
                            <div className="flex items-center space-x-2 p-4 border border-cyber-gray/30 rounded-lg hover:bg-cyber-dark/10">
                              <RadioGroupItem value="1000+" id="env4" />
                              <Label htmlFor="env4" className="cursor-pointer">1,000+ endpoints</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div>
                          <Label className="text-base font-semibold mb-4 block">Services Interested In</Label>
                          <div className="grid md:grid-cols-2 gap-4">
                            {[
                              "24/7 Incident Response",
                              "Virtual CISO Services",
                              "Penetration Testing",
                              "Security Assessments & Consulting",
                              "Insider Threat Management",
                              "Tabletop Exercises"
                            ].map((service) => (
                              <div 
                                key={service}
                                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                                  formData.services.includes(service)
                                    ? 'border-cyber-cyan bg-cyber-dark/20'
                                    : 'border-cyber-gray/30 hover:bg-cyber-dark/10'
                                }`}
                                onClick={() => handleServiceToggle(service)}
                              >
                                <Label className="cursor-pointer">{service}</Label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="timeline">Project Timeline</Label>
                            <Input
                              id="timeline"
                              value={formData.timeline}
                              onChange={(e) => handleInputChange('timeline', e.target.value)}
                              placeholder="e.g., 3-6 months, Immediate, Q2 2024"
                            />
                          </div>
                          <div>
                            <Label htmlFor="budget">Budget Range</Label>
                            <Input
                              id="budget"
                              value={formData.budget}
                              onChange={(e) => handleInputChange('budget', e.target.value)}
                              placeholder="e.g., $50K-100K, Flexible"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Requirements */}
                    <div>
                      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <MessageSquare className="h-6 w-6 text-cyber-cyan" />
                        Additional Requirements
                      </h2>
                      <div>
                        <Label htmlFor="requirements">Tell us more about your specific needs, compliance requirements, or any other details</Label>
                        <Textarea
                          id="requirements"
                          value={formData.requirements}
                          onChange={(e) => handleInputChange('requirements', e.target.value)}
                          placeholder="Please describe your current security challenges, compliance requirements (SOC 2, HIPAA, PCI DSS, etc.), specific concerns, or any other details that would help us provide an accurate quote..."
                          className="min-h-[120px] mt-2"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center pt-6">
                      <Button 
                        type="submit" 
                        variant="cyber" 
                        size="lg" 
                        disabled={isSubmitting}
                        className="text-lg px-12 py-3"
                      >
                        {isSubmitting ? "Preparing Quote Request..." : "Submit Quote Request"}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                      <p className="text-sm text-muted-foreground mt-4">
                        Our team will review your request and respond within 24 hours with a customized quote.
                      </p>
                    </div>
                  </form>
                </Card>
              </div>
            </div>
          </section>

          {/* Emergency Contact CTA */}
          <section className="py-16 bg-gradient-to-r from-cyber-dark/20 via-transparent to-cyber-dark/20">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  For urgent security incidents or immediate consultation needs, contact our 24/7 emergency hotline.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="incident" size="lg" className="text-lg px-8 py-3">
                    Emergency Hotline: 803-900-4609
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-lg px-8 py-3"
                    onClick={() => window.open('https://outlook.office.com/bookwithme/user/a36dd60bc57d4471926cdb17d751f663@DarkStack7.com?anonymous&ismsaljsauthenabled&ep=plink', '_blank')}
                  >
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default RequestQuote;