import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const RSS_URL = "https://feeds.libsyn.com/506373/rss";

function pick(xml: string, tag: string): string | null {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`);
  const m = xml.match(re);
  if (!m) return null;
  return m[1].replace(/^<!\[CDATA\[/, "").replace(/\]\]>$/, "").trim();
}

function pickAttr(xml: string, tag: string, attr: string): string | null {
  const re = new RegExp(`<${tag}[^>]*\\s${attr}="([^"]+)"[^>]*/?>`);
  const m = xml.match(re);
  return m ? m[1] : null;
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const admin = createClient(supabaseUrl, serviceKey);

    const res = await fetch(RSS_URL, { headers: { "User-Agent": "Darkstack7-Sync/1.0" } });
    if (!res.ok) {
      return new Response(JSON.stringify({ error: "Failed to fetch RSS" }), {
        status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const xml = await res.text();
    const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];

    const rows = items.map((item) => {
      const epStr = pick(item, "itunes:episode");
      const seasonStr = pick(item, "itunes:season");
      const title = pick(item, "title") ?? "Untitled";
      const description = pick(item, "description") ?? "";
      const duration = pick(item, "itunes:duration") ?? "";
      const pubDate = pick(item, "pubDate");
      const audioUrl = pickAttr(item, "enclosure", "url") ?? "";
      const keywordsRaw = pick(item, "itunes:keywords") ?? "";
      const keywords = keywordsRaw.split(",").map((k) => k.trim()).filter(Boolean);
      const link = pick(item, "link") ?? undefined;

      if (!epStr || !audioUrl || !pubDate) return null;
      const episode_number = parseInt(epStr, 10);
      if (Number.isNaN(episode_number)) return null;
      const season = seasonStr ? parseInt(seasonStr, 10) : 2;
      const published_at = new Date(pubDate).toISOString().slice(0, 10);

      return {
        episode_number,
        season: Number.isNaN(season) ? 2 : season,
        title,
        description,
        audio_url: audioUrl,
        duration,
        published_at,
        keywords,
        libsyn_link: link,
        is_published: true,
      };
    }).filter(Boolean) as Array<Record<string, unknown>>;

    // Deduplicate by episode_number, keeping the latest occurrence (feed lists newest first).
    const seen = new Set<number>();
    const uniqueRows = rows.filter((r) => {
      const n = r.episode_number as number;
      if (seen.has(n)) return false;
      seen.add(n);
      return true;
    });

    if (uniqueRows.length === 0) {
      return new Response(JSON.stringify({ synced: 0, message: "No items parsed" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { data, error } = await admin
      .from("podcast_episodes")
      .upsert(uniqueRows, { onConflict: "episode_number", ignoreDuplicates: false })
      .select("episode_number");

    if (error) {
      console.error("Upsert error", error);
      return new Response(JSON.stringify({ error: "Sync failed" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ synced: data?.length ?? 0, total_items: uniqueRows.length }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("sync-podcast-rss error", e);
    return new Response(JSON.stringify({ error: "Internal error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});