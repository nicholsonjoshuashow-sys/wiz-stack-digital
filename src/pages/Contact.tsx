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
import { AlertTriangle, Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    criticality: '',
    services: [] as string[],
    details: '',
    newsletter: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({ ...prev, services: [...prev.services, service] }));
    } else {
      setFormData(prev => ({ ...prev, services: prev.services.filter(s => s !== service) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const contactData = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        services: formData.services,
        priority: formData.criticality,
        message: formData.details || 'No additional details provided'
      };

      const response = await fetch('https://jfreigfygqxnwaafgwvr.supabase.co/functions/v1/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmcmVpZ2Z5Z3F4bndhYWZnd3ZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1Njc1OTQsImV4cCI6MjA3MzE0MzU5NH0.YwrYcYFEh903zhF6G-rhf5E37uq9ZSKPsnV75_igJp0`
        },
        body: JSON.stringify(contactData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast({
          title: "Message Sent Successfully",
          description: "We'll get back to you within 15 minutes.",
        });

        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          position: '',
          criticality: '',
          services: [],
          details: '',
          newsletter: false
        });
      } else {
        throw new Error(result.error || 'Failed to send message');
      }

    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error Sending Message",
        description: "Please try again or contact us directly at sales@darkstack7.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'IR Response',
    'IR Insider Threat', 
    'IR Tabletop Exercise',
    'Advisory - vCISO Retainer',
    'Advisory - Security Consulting',
    'Advisory - Network / Cloud Security',
    'Advisory - Artificial Intelligence (AI)',
    'Training & Speaking Opportunity',
    'Other'
  ];

  return (
    <>
      <SEO 
        title="Contact DARKSTACK7 - Cybersecurity Experts"
        description="Contact DARKSTACK7 for immediate cybersecurity assistance, incident response, and security consulting. Available 24/7 for cyber emergencies."
        keywords="cybersecurity contact, incident response contact, security consulting, cyber emergency, DARKSTACK7 contact"
        canonical="/contact"
      />

      <div className="min-h-screen bg-background relative">
        <Header />
        <BreadcrumbNavigation className="pt-20 relative z-10" />
        
        {/* Background Image */}
        <div className="fixed inset-0 z-0">
          <img 
            src="/lovable-uploads/1a3296a0-be16-468e-8e7d-049aff4813b4.png" 
            alt="Cybersecurity background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-cyber-dark/85"></div>
        </div>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-space-gray/80 via-midnight-blue/80 to-slate-900/80 relative z-10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-fire-red/10 border border-fire-red/30 rounded-full mb-6">
                <AlertTriangle className="w-8 h-8 text-fire-red" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-pearl-white mb-6">
                Let's Connect!
              </h1>
              
              <div className="bg-fire-red/10 border border-fire-red/30 rounded-lg p-6 mb-8">
                <div className="flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-fire-red mr-2" />
                  <span className="text-fire-red font-bold">CYBERSECURITY REALITY CHECK</span>
                </div>
                <blockquote className="text-xl text-pearl-white italic">
                  "Artificial Intelligence is no match for natural stupidity!"
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 relative z-10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Contact Information */}
              <div className="lg:col-span-1 bg-muted/20 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
                
                <div className="space-y-6">
                  <Card className="p-6 bg-gradient-cyber/10 border-cyber-blue/30 border-2 border-red-500">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-cyber-cyan" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Emergency Hotline</h3>
                        <p className="text-muted-foreground">24/7 Incident Response</p>
                        <p className="text-cyber-cyan font-semibold">803-900-4609</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-gradient-cyber/10 border-cyber-blue/30 border-2 border-red-500">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-cyber-cyan" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Email Support</h3>
                        <p className="text-muted-foreground">info@darkstack7.com</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-gradient-cyber/10 border-cyber-blue/30 border-2 border-red-500">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-cyber-cyan" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Response Time</h3>
                        <p className="text-muted-foreground">15 minutes or less</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="p-8 border-2 border-red-500">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
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
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="position">Position</Label>
                        <Input
                          id="position"
                          value={formData.position}
                          onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="criticality">Issue Criticality *</Label>
                      <Select value={formData.criticality} onValueChange={(value) => setFormData(prev => ({ ...prev, criticality: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select criticality level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low criticality - Issue can wait until normal business hours</SelectItem>
                          <SelectItem value="serious">Serious Situation</SelectItem>
                          <SelectItem value="emergency">Cyber Emergency - Immediate Contact Needed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>The services I am interested in are:</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                        {services.map((service) => (
                          <div key={service} className="flex items-center space-x-2">
                            <Checkbox
                              id={service}
                              checked={formData.services.includes(service)}
                              onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                            />
                            <Label htmlFor={service} className="text-sm">{service}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="details">Details:</Label>
                      <Textarea
                        id="details"
                        rows={5}
                        value={formData.details}
                        onChange={(e) => setFormData(prev => ({ ...prev, details: e.target.value }))}
                        placeholder="Please describe your situation or requirements..."
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => setFormData(prev => ({ ...prev, newsletter: checked as boolean }))}
                      />
                      <Label htmlFor="newsletter" className="text-sm">Yes, subscribe me to your newsletter.</Label>
                    </div>

                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Submit Request"}
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Contact;