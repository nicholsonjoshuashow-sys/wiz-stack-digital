import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <>
      <SEO 
        title="Thank You - DARKSTACK7"
        description="Thank you for contacting DARKSTACK7. We've received your message and will respond within 15 minutes."
        keywords="thank you, contact confirmation, DARKSTACK7"
        canonical="/thank-you"
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

        {/* Thank You Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-space-gray/80 via-midnight-blue/80 to-slate-900/80 relative z-10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="p-12 text-center border-2 border-cyber-cyan/30 bg-gradient-cyber/10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-full mb-8">
                  <CheckCircle className="w-12 h-12 text-cyber-cyan" />
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-pearl-white mb-6">
                  Thank You!
                </h1>
                
                <p className="text-xl text-pearl-white/90 mb-8">
                  We've received your message and our cybersecurity experts will respond within 15 minutes.
                </p>

                <div className="bg-fire-red/10 border border-fire-red/30 rounded-lg p-6 mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-fire-red mr-2" />
                    <span className="text-fire-red font-bold">IMPORTANT NOTICE</span>
                  </div>
                  <p className="text-pearl-white">
                    Sometimes messages can get lost in cyberspace. If you don't receive a response within one hour, 
                    please call us directly at <strong className="text-cyber-cyan">803-900-4609</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card className="p-6 bg-gradient-cyber/10 border-cyber-blue/30 border-2">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-full flex items-center justify-center mb-4">
                        <Phone className="w-6 h-6 text-cyber-cyan" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">Emergency Hotline</h3>
                      <p className="text-cyber-cyan font-semibold">803-900-4609</p>
                      <p className="text-muted-foreground text-sm">24/7 Available</p>
                    </div>
                  </Card>

                  <Card className="p-6 bg-gradient-cyber/10 border-cyber-blue/30 border-2">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-full flex items-center justify-center mb-4">
                        <Mail className="w-6 h-6 text-cyber-cyan" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">Email Support</h3>
                      <p className="text-muted-foreground">info@darkstack7.com</p>
                    </div>
                  </Card>

                  <Card className="p-6 bg-gradient-cyber/10 border-cyber-blue/30 border-2">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-full flex items-center justify-center mb-4">
                        <Clock className="w-6 h-6 text-cyber-cyan" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
                      <p className="text-muted-foreground">15 minutes or less</p>
                    </div>
                  </Card>
                </div>

                <div className="space-y-4">
                  <Button asChild size="lg" className="mr-4">
                    <Link to="/">Return to Home</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/services">Explore Our Services</Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ThankYou;