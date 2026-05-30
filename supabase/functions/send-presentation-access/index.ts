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
    const { firstName, lastName, email, accessType, timestamp }: PresentationAccessRequest = await req.json();

    console.log('Presentation access request received');

    const safeFirst = clamp(firstName, 100);
    const safeLast = clamp(lastName, 100);
    const safeEmail = clamp(email, 254);
    const safeAccess = accessType === 'pdf' ? 'pdf' : 'gamma';
    const safeTimestamp = clamp(timestamp, 64);

    // Send notification email to the site owner
    const emailResponse = await resend.emails.send({
      from: "DARKSTACK7 <nicholson.joshua.show@gmail.com>",
      to: ["nicholson.joshua.show@gmail.com"],
      subject: `New Presentation Access Request - ${safeFirst} ${safeLast}`,
      html: `
        <h2>New Presentation Access Request</h2>
        <p><strong>Name:</strong> ${esc(safeFirst)} ${esc(safeLast)}</p>
        <p><strong>Email:</strong> ${esc(safeEmail)}</p>
        <p><strong>Access Type:</strong> ${safeAccess === 'pdf' ? 'PDF Download' : 'Online Presentation (Gamma)'}</p>
        <p><strong>Presentation:</strong> Building Trust in AI - ISC2/ISACA Cyber Connect Summit 2025</p>
        <p><strong>Timestamp:</strong> ${esc(new Date(safeTimestamp).toLocaleString())}</p>
        
        <hr style="margin: 20px 0;">
        
        <h3>Contact Information</h3>
        <p>You can reach out to this person at: <a href="mailto:${esc(safeEmail)}">${esc(safeEmail)}</a></p>
        
        <p style="margin-top: 20px; font-size: 12px; color: #666;">
          This notification was automatically generated from the DARKSTACK7 website presentation access form.
        </p>
      `,
    });

    console.log("Notification email sent successfully");

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
      JSON.stringify({ error: "An internal error occurred. Please try again.", success: false }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);