import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface PodcastEpisode {
  id: string;
  episode_number: number;
  season: number;
  title: string;
  description: string;
  audio_url: string;
  duration: string;
  published_at: string;
  keywords: string[];
  youtube_link?: string;
  libsyn_link?: string;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export const usePodcastEpisodes = () => {
  return useQuery({
    queryKey: ["podcast-episodes"],
    queryFn: async (): Promise<PodcastEpisode[]> => {
      const { data, error } = await supabase
        .from("podcast_episodes")
        .select("*")
        .eq("is_published", true)
        .order("published_at", { ascending: false });

      if (error) {
        console.error("Error fetching podcast episodes:", error);
        throw error;
      }

      return data || [];
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchInterval: 1000 * 60 * 5, // Automatically refetch every 5 minutes
  });
};