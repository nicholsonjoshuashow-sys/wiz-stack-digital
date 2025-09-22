import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface PodcastEpisode {
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
}

export const usePodcastEpisodes = () => {
  return useQuery({
    queryKey: ['podcast-episodes'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('podcast_episodes')
        .select('*')
        .eq('is_published', true)
        .order('published_at', { ascending: false });

      if (error) {
        console.error('Error fetching podcast episodes:', error);
        throw error;
      }

      return data as PodcastEpisode[];
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: true,
  });
};