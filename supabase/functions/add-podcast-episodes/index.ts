import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface PodcastEpisode {
  episode_number: number;
  season: number;
  title: string;
  description: string;
  audio_url: string;
  duration: string;
  published_at: string;
  is_published: boolean;
  keywords: string[];
  youtube_link?: string;
  libsyn_link?: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    const { episodes } = await req.json() as { episodes: PodcastEpisode[] };
    
    if (!episodes || !Array.isArray(episodes)) {
      throw new Error("Episodes array is required");
    }

    const { data, error } = await supabase
      .from("podcast_episodes")
      .insert(episodes)
      .select();

    if (error) {
      throw error;
    }

    return new Response(
      JSON.stringify({ success: true, inserted: data?.length || 0 }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error adding podcast episodes:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
