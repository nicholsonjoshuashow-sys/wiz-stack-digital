import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Expertise from "@/components/Expertise";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { organizationStructuredData } from "@/data/structuredData";

const Index = () => {
  return (
    <>
      <SEO 
        title="Darkstack7 - Elite Cybersecurity Leadership | 24/7 Incident Response & Virtual CISO"
        description="Elite cybersecurity leadership for high-stakes moments. 24/7 incident response, virtual CISO services, penetration testing by Joshua R. Nicholson - 24-year veteran & former U.S. Marine."
        keywords="cybersecurity leadership, incident response, virtual CISO, penetration testing, security consulting, cyber defense, Joshua Nicholson, darkstack7, emergency response"
        canonical="https://darkstack7.com"
        structuredData={organizationStructuredData}
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Services />
          <Expertise />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
