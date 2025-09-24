-- Add Episode 42 to podcast_episodes
INSERT INTO podcast_episodes (
  episode_number,
  season,
  title,
  description,
  audio_url,
  duration,
  published_at,
  keywords,
  youtube_link,
  libsyn_link,
  is_published
) VALUES (
  42,
  2,
  'Future-Proofing Your Career in Cybersecurity',
  'In this episode, we explore the evolving cybersecurity landscape and discuss strategies for building a resilient career that adapts to technological changes, emerging threats, and industry shifts.',
  'https://traffic.libsyn.com/secure/cybersecurityamerica/CSA_Ep_42_Future-Proofing_Your_Career.mp3',
  '45:32',
  '2024-09-15',
  ARRAY['career development', 'cybersecurity trends', 'professional growth', 'future skills', 'industry evolution'],
  'https://www.youtube.com/watch?v=example42',
  'https://cybersecurityamerica.libsyn.com/future-proofing-your-career-in-cybersecurity',
  true
);

-- Remove duplicate entries (keeping the first occurrence of each episode)
DELETE FROM podcast_episodes 
WHERE id NOT IN (
  SELECT DISTINCT ON (episode_number, season) id 
  FROM podcast_episodes 
  ORDER BY episode_number, season, created_at
);