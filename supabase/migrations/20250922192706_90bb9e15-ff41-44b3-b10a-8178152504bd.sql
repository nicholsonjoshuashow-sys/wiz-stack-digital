-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
NEW.updated_at = now();
RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create podcast episodes table
CREATE TABLE public.podcast_episodes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  episode_number INTEGER NOT NULL,
  season INTEGER NOT NULL DEFAULT 2,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  audio_url TEXT NOT NULL,
  duration TEXT NOT NULL,
  published_at DATE NOT NULL,
  keywords TEXT[] DEFAULT '{}',
  youtube_link TEXT,
  libsyn_link TEXT,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.podcast_episodes ENABLE ROW LEVEL SECURITY;

-- Create policies - episodes are publicly viewable
CREATE POLICY "Anyone can view published episodes" 
ON public.podcast_episodes 
FOR SELECT 
USING (is_published = true);

-- Only admins can manage episodes
CREATE POLICY "Only admins can insert episodes" 
ON public.podcast_episodes 
FOR INSERT 
WITH CHECK (is_admin(auth.uid()));

CREATE POLICY "Only admins can update episodes" 
ON public.podcast_episodes 
FOR UPDATE 
USING (is_admin(auth.uid()));

CREATE POLICY "Only admins can delete episodes" 
ON public.podcast_episodes 
FOR DELETE 
USING (is_admin(auth.uid()));

-- Create index for better performance
CREATE INDEX idx_podcast_episodes_published_at ON public.podcast_episodes(published_at DESC) WHERE is_published = true;
CREATE INDEX idx_podcast_episodes_season_episode ON public.podcast_episodes(season, episode_number);

-- Add trigger for automatic timestamp updates
CREATE TRIGGER update_podcast_episodes_updated_at
BEFORE UPDATE ON public.podcast_episodes
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();