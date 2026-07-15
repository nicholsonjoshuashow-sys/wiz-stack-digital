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

    // First pass: parse everything and remember which items lack itunes:episode.
    type Parsed = {
      episode_number: number | null;
      season: number;
      title: string;
      description: string;
      audio_url: string;
      duration: string;
      published_at: string;
      keywords: string[];
      libsyn_link?: string;
      is_published: boolean;
    };
    const parsed: Parsed[] = items.map((item) => {
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

      if (!audioUrl || !pubDate) return null as unknown as Parsed;
      const parsedEp = epStr ? parseInt(epStr, 10) : NaN;
      const episode_number = Number.isNaN(parsedEp) ? null : parsedEp;
      const season = seasonStr ? parseInt(seasonStr, 10) : 1;
      const published_at = new Date(pubDate).toISOString().slice(0, 10);

      return {
        episode_number,
        season: Number.isNaN(season) ? 1 : season,
        title,
        description,
        audio_url: audioUrl,
        duration,
        published_at,
        keywords,
        libsyn_link: link,
        is_published: true,
      };
    }).filter(Boolean) as Parsed[];

    // For older items lacking itunes:episode, assign numbers descending from
    // (min-known-episode - 1). Feed is newest-first, so iterate in order.
    const knownNums = parsed.map((p) => p.episode_number).filter((n): n is number => n !== null);
    let nextUnknown = (knownNums.length ? Math.min(...knownNums) : parsed.length + 1) - 1;
    for (const p of parsed) {
      if (p.episode_number === null) {
        p.episode_number = nextUnknown--;
      }
    }

    const rows = parsed as unknown as Array<Record<string, unknown> & { episode_number: number }>;

    // Deduplicate by episode_number (feed occasionally reuses a number); keep the first (newest).
    const seen = new Set<number>();
    const uniqueRows = rows.filter((r) => {
      const n = r.episode_number;
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