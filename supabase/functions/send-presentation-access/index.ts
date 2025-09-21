import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface PresentationAccessRequest {
  firstName: string;
  lastName: string;
  email: string;
  accessType: 'pdf' | 'gamma';
  timestamp: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, email, accessType, timestamp }: PresentationAccessRequest = await req.json();

    console.log('Presentation access request:', { firstName, lastName, email, accessType, timestamp });

    // Send notification email to the site owner
    const emailResponse = await resend.emails.send({
      from: "DARKSTACK7 <onboarding@resend.dev>",
      to: ["joshua@darkstack7.com"], // Replace with your actual email
      subject: `New Presentation Access Request - ${firstName} ${lastName}`,
      html: `
        <h2>New Presentation Access Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Access Type:</strong> ${accessType === 'pdf' ? 'PDF Download' : 'Online Presentation (Gamma)'}</p>
        <p><strong>Presentation:</strong> Building Trust in AI - ISC2/ISACA Cyber Connect Summit 2025</p>
        <p><strong>Timestamp:</strong> ${new Date(timestamp).toLocaleString()}</p>
        
        <hr style="margin: 20px 0;">
        
        <h3>Contact Information</h3>
        <p>You can reach out to this person at: <a href="mailto:${email}">${email}</a></p>
        
        <p style="margin-top: 20px; font-size: 12px; color: #666;">
          This notification was automatically generated from the DARKSTACK7 website presentation access form.
        </p>
      `,
    });

    console.log("Notification email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Access granted and notification sent" 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-presentation-access function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);