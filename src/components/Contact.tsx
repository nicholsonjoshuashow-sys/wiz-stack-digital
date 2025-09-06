import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  Clock, 
  Shield, 
  AlertTriangle,
  ArrowRight 
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Talk</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to secure your organization? Contact us for immediate assistance or schedule a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Emergency Contact */}
            <Card className="p-6 bg-destructive/10 border-destructive/30">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-8 w-8 text-destructive mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-destructive mb-2">Emergency Incident Response</h3>
                  <p className="text-muted-foreground mb-4">
                    Under attack now and need immediate assistance?
                  </p>
                  <Button variant="incident" size="lg" className="w-full" asChild>
                    <a href="tel:803-900-4609">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Emergency Hotline
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Regular Contact */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-cyber-gray/30">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-cyber-blue" />
                  <div>
                    <h4 className="font-semibold text-foreground">General Inquiries</h4>
                    <p className="text-muted-foreground">contact@darkstack7.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-cyber-cyan" />
                  <div>
                    <h4 className="font-semibold text-foreground">Response Time</h4>
                    <p className="text-muted-foreground">24/7 Emergency • 2-4 hours Standard</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Shield className="h-6 w-6 text-cyber-blue" />
                  <div>
                    <h4 className="font-semibold text-foreground">Service Areas</h4>
                    <p className="text-muted-foreground">Global Remote • On-site Available</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Partners */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-cyber-gray/30">
              <h4 className="font-bold text-foreground mb-4">Trusted Partners</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">DeepSeas Managed Services</span>
                  <ArrowRight className="h-4 w-4 text-cyber-blue" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">OnDefend Cybersecurity</span>
                  <ArrowRight className="h-4 w-4 text-cyber-blue" />
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-cyber-gray/30">
            <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name
                  </label>
                  <Input 
                    placeholder="John" 
                    className="bg-background/50 border-cyber-gray/50 focus:border-cyber-blue"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Doe" 
                    className="bg-background/50 border-cyber-gray/50 focus:border-cyber-blue"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <Input 
                  type="email" 
                  placeholder="john@company.com" 
                  className="bg-background/50 border-cyber-gray/50 focus:border-cyber-blue"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Company
                </label>
                <Input 
                  placeholder="Your Company" 
                  className="bg-background/50 border-cyber-gray/50 focus:border-cyber-blue"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Service Interest
                </label>
                <select className="w-full p-3 bg-background/50 border border-cyber-gray/50 rounded-lg text-foreground focus:border-cyber-blue focus:outline-none">
                  <option>Select a service</option>
                  <option>Emergency Incident Response</option>
                  <option>Virtual CISO (vCISO)</option>
                  <option>Penetration Testing</option>
                  <option>Security Consulting</option>
                  <option>Tabletop Exercises</option>
                  <option>Training & Speaking</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your cybersecurity needs..." 
                  rows={4}
                  className="bg-background/50 border-cyber-gray/50 focus:border-cyber-blue"
                />
              </div>

              <Button variant="cyber" size="lg" className="w-full text-lg">
                Send Message
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;