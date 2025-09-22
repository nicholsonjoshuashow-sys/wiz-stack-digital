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

-- Insert existing episodes
INSERT INTO public.podcast_episodes (episode_number, season, title, description, audio_url, duration, published_at, keywords, youtube_link, libsyn_link) VALUES
(41, 2, 'From Combat Boots to Cybersecurity - Nia Luckey on her journey', 'Army veteran, published author, and cybersecurity leader Nia Luckey shares lessons on resilience, leadership, and transitioning from military service to cyber defense. Topics include building resilience, avoiding burnout, AI in cybersecurity, and the future of work in cyber.', 'https://traffic.libsyn.com/secure/40dd79c0-9f4f-4e25-89de-80a6711c1b0f/Episode_41_-_From_Combat_Boots_to_Cybersecurity_-_Nia_Luckey_on_her_journey.mp3', '53:08', '2025-08-21', ARRAY['cybersecurity', 'veterans', 'leadership', 'military transition', 'AI'], 'https://youtu.be/X7ys8GnQUHk', NULL),
(40, 2, 'Cybersecurity''s Golden Rule: The Legal Blueprint No One Shares', 'Chris Cronin from Halock Security Labs explores the intersection of cybersecurity, risk management, and legal principles behind ''reasonable'' safeguards. Discussion covers DoCRA Standard, CIS RAM, and applying legal frameworks to cybersecurity strategies.', 'https://traffic.libsyn.com/secure/40dd79c0-9f4f-4e25-89de-80a6711c1b0f/Episode_40_-_Cybersecuritys_Golden_Rule__The_Legal_Blueprint_No_One_Shares.mp3', '48:07', '2025-08-15', ARRAY['legal', 'risk management', 'compliance', 'DoCRA', 'reasonable security'], NULL, 'http://sites.libsyn.com/506373/cybersecuritys-golden-rule-the-legal-blueprint-no-one-shares'),
(39, 2, 'Memory-Only Malware: The Threat You''re Probably Missing', 'Memory forensics expert Andrew Case, co-developer of the Volatility framework, explores memory analysis in incident response. Learn about memory-only malware, Volatility 3 updates, and why CISA recommends memory imaging in emergency directives.', 'https://traffic.libsyn.com/secure/40dd79c0-9f4f-4e25-89de-80a6711c1b0f/Episode_39_-_The_Art_of_Forensics_Memory_Traces_and_Malware.mp3', '51:27', '2025-07-16', ARRAY['memory forensics', 'malware', 'incident response', 'Volatility', 'DFIR'], 'https://youtu.be/2q4z9Z2_cwc', NULL),
(38, 2, 'Digital Forensics & Incident Response (DFIR) with Surefire Cyber', 'Deep dive into digital forensics and incident response with industry experts from Surefire Cyber, covering advanced DFIR techniques, tools, and methodologies for modern cybersecurity incidents.', 'https://traffic.libsyn.com/secure/40dd79c0-9f4f-4e25-89de-80a6711c1b0f/Episode_38_-_Digital_Forensics_Incident_Response_DFIR_with_Surefire_Cyber.mp3', '45:32', '2025-06-24', ARRAY['DFIR', 'digital forensics', 'incident response', 'cybersecurity'], NULL, 'http://www.darkstack7.com/podcast');