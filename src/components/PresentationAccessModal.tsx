import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Download, ExternalLink, Loader2 } from "lucide-react";

interface PresentationAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PresentationAccessModal = ({ isOpen, onClose }: PresentationAccessModalProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAccess = async (type: 'pdf' | 'gamma') => {
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast({
        title: "Required Fields",
        description: "Please fill in all fields to access the presentation.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email notification
      const { error } = await supabase.functions.invoke('send-presentation-access', {
        body: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          accessType: type,
          timestamp: new Date().toISOString()
        }
      });

      if (error) {
        console.error('Error sending notification:', error);
        toast({
          title: "Notification Error",
          description: "There was an issue sending the notification, but you can still access the presentation.",
          variant: "destructive"
        });
      }

      // Provide access based on type
      if (type === 'pdf') {
        // Download PDF
        const link = document.createElement('a');
        link.href = '/Darkstack7_Cyber_Defense_ISACA_ISC2_Summit_Building-Trust-in-AI.pdf';
        link.download = 'Building-Trust-in-AI-Presentation.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        // Open Gamma presentation
        window.open('https://gamma.app/docs/Building-Trust-in-AI-2uqr2rxhqmzksaf', '_blank');
      }

      toast({
        title: "Access Granted",
        description: `Thank you! You now have access to the ${type === 'pdf' ? 'PDF download' : 'online presentation'}.`
      });

      // Reset form and close modal
      setFormData({ firstName: "", lastName: "", email: "" });
      onClose();

    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Access Presentation: Building Trust in AI</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Please provide your information to access the ISC2/ISACA Cyber Connect Summit 2025 presentation.
          </p>
          
          <div className="space-y-3">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter your first name"
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter your last name"
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                disabled={isSubmitting}
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2 pt-4">
            <Button 
              onClick={() => handleAccess('gamma')} 
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <ExternalLink className="mr-2 h-4 w-4" />
              )}
              View Online Presentation
            </Button>
            
            <Button 
              onClick={() => handleAccess('pdf')} 
              disabled={isSubmitting}
              variant="outline"
              className="w-full"
            >
              {isSubmitting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Download className="mr-2 h-4 w-4" />
              )}
              Download PDF
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};