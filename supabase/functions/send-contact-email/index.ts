import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  services: string[];
  priority: string;
  message: string;
}

const esc = (s: unknown): string =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const clamp = (s: unknown, max: number): string => {
  const str = String(s ?? "");
  return str.length > max ? str.slice(0, max) : str;
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const contactData: ContactRequest = await req.json();

    console.log("Contact form submission received");

    const name = clamp(contactData.name, 100);
    const email = clamp(contactData.email, 254);
    const company = clamp(contactData.company, 200);
    const phone = clamp(contactData.phone, 50);
    const priority = clamp(contactData.priority, 50);
    const message = clamp(contactData.message, 5000);
    const services = Array.isArray(contactData.services)
      ? contactData.services.slice(0, 20).map((s) => clamp(s, 100))
      : [];

    const servicesList = services.length > 0 ? services.map(esc).join(", ") : "Not specified";

    // Send email to nicholson.joshua.show@gmail.com
    const emailResponse = await resend.emails.send({
      from: "Contact Form <noreply@resend.dev>",
      to: ["nicholson.joshua.show@gmail.com"],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        
        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${esc(name)}</p>
        <p><strong>Email:</strong> ${esc(email)}</p>
        ${company ? `<p><strong>Company:</strong> ${esc(company)}</p>` : ''}
        ${phone ? `<p><strong>Phone:</strong> ${esc(phone)}</p>` : ''}
        
        <h3>Request Details</h3>
        <p><strong>Services Interested In:</strong> ${servicesList}</p>
        <p><strong>Priority Level:</strong> ${esc(priority)}</p>
        
        <h3>Message</h3>
        <p>${esc(message).replace(/\n/g, '<br>')}</p>
        
        <hr>
        <p><em>This message was sent from the DARKSTACK7 website contact form.</em></p>
      `,
    });

    console.log("Email sent successfully");

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Contact form submitted successfully" 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: "An internal error occurred. Please try again." }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);