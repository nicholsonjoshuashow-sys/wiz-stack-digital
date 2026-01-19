import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import { Card } from "@/components/ui/card";
import { AlertTriangle, Mail, Phone, Clock, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

const Contact = () => {
  const [isFormLoading, setIsFormLoading] = useState(true);

  useEffect(() => {
    // Load HubSpot forms script
    const script = document.createElement('script');
    script.src = 'https://js-na2.hsforms.net/forms/embed/243597457.js';
    script.defer = true;
    document.body.appendChild(script);

    // Check for form load completion
    const checkFormLoaded = setInterval(() => {
      const formContainer = document.querySelector('.hs-form-frame form, .hs-form-frame .hs-form');
      if (formContainer) {
        setIsFormLoading(false);
        clearInterval(checkFormLoaded);
      }
    }, 100);

    // Fallback timeout after 5 seconds
    const timeout = setTimeout(() => {
      setIsFormLoading(false);
      clearInterval(checkFormLoaded);
    }, 5000);

    return () => {
      clearInterval(checkFormLoaded);
      clearTimeout(timeout);
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://js-na2.hsforms.net/forms/embed/243597457.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

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

              {/* HubSpot Contact Form */}
              <div className="lg:col-span-2">
                <Card className="p-8 border-2 border-red-500 min-h-[400px] bg-white">
                  {isFormLoading && (
                    <div className="flex flex-col items-center justify-center py-16">
                      <Loader2 className="w-10 h-10 text-cyber-blue animate-spin mb-4" />
                      <p className="text-gray-600">Loading form...</p>
                    </div>
                  )}
                  <div 
                    className={`hs-form-frame ${isFormLoading ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}
                    data-region="na2" 
                    data-form-id="7c66cff7-3de1-4e56-ae2e-3b32c418a9b9" 
                    data-portal-id="243597457"
                  ></div>
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
