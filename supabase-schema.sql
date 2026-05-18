-- Digital Peace Room - Supabase Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Users table (anonymous identity system)
create table users (
  id uuid primary key default uuid_generate_v4(),
  nickname text unique not null,
  password_hash text not null,
  animal_avatar text not null check (animal_avatar in ('fox', 'owl', 'rabbit', 'cat', 'wolf', 'bear')),
  mood text,
  created_at timestamp with time zone default now()
);

-- Music tracks table
create table music_tracks (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  category text not null check (category in ('jazz', 'classical', 'piano', 'rain', 'ocean', 'lofi')),
  mood text,
  audio_url text not null,
  duration integer not null,
  created_at timestamp with time zone default now()
);

-- Journal entries table
create table journal_entries (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id) on delete cascade,
  content text not null,
  mood_tags text[],
  created_at timestamp with time zone default now()
);

-- Chat messages table
create table chat_messages (
  id uuid primary key default uuid_generate_v4(),
  room text not null check (room in ('late-night', 'rain', 'overthinking', 'study-cafe', 'quiet-gym')),
  user_id uuid references users(id) on delete cascade,
  nickname text not null,
  animal_avatar text not null,
  message text not null,
  created_at timestamp with time zone default now()
);

-- User settings table
create table user_settings (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id) on delete cascade unique,
  ambience_intensity integer default 70 check (ambience_intensity >= 0 and ambience_intensity <= 100),
  visual_effects boolean default true,
  animations boolean default true,
  autoplay_music boolean default false,
  theme text default 'midnight' check (theme in ('midnight', 'rain', 'sunset', 'forest')),
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Indexes for performance
create index journal_entries_user_id_created_at_idx on journal_entries(user_id, created_at desc);
create index chat_messages_room_created_at_idx on chat_messages(room, created_at desc);
create index users_nickname_idx on users(nickname);

-- Row Level Security (RLS)
alter table users enable row level security;
alter table journal_entries enable row level security;
alter table chat_messages enable row level security;
alter table user_settings enable row level security;

-- RLS Policies

-- Users: Can read own profile
create policy "Users can read own profile"
  on users for select
  using (auth.uid() = id);

-- Journal: Users can only access their own entries
create policy "Users can read own journal entries"
  on journal_entries for select
  using (auth.uid() = user_id);

create policy "Users can insert own journal entries"
  on journal_entries for insert
  with check (auth.uid() = user_id);

create policy "Users can update own journal entries"
  on journal_entries for update
  using (auth.uid() = user_id);

create policy "Users can delete own journal entries"
  on journal_entries for delete
  using (auth.uid() = user_id);

-- Chat: Everyone can read messages in rooms
create policy "Anyone can read chat messages"
  on chat_messages for select
  to authenticated
  using (true);

create policy "Authenticated users can send messages"
  on chat_messages for insert
  to authenticated
  with check (auth.uid() = user_id);

-- Settings: Users can only access their own settings
create policy "Users can read own settings"
  on user_settings for select
  using (auth.uid() = user_id);

create policy "Users can insert own settings"
  on user_settings for insert
  with check (auth.uid() = user_id);

create policy "Users can update own settings"
  on user_settings for update
  using (auth.uid() = user_id);

-- Music tracks: Public read access
create policy "Anyone can read music tracks"
  on music_tracks for select
  to authenticated
  using (true);

-- Functions

-- Update updated_at timestamp
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Trigger for user_settings
create trigger update_user_settings_updated_at
  before update on user_settings
  for each row
  execute function update_updated_at_column();

-- Sample data (optional)

-- Insert sample music tracks
insert into music_tracks (title, category, mood, audio_url, duration) values
  ('Midnight Jazz', 'jazz', 'peaceful', 'https://example.com/midnight-jazz.mp3', 180),
  ('Cafe Noir', 'jazz', 'focused', 'https://example.com/cafe-noir.mp3', 240),
  ('Moonlight Sonata', 'classical', 'reflective', 'https://example.com/moonlight.mp3', 300),
  ('Night Rain', 'piano', 'peaceful', 'https://example.com/night-rain.mp3', 220),
  ('Heavy Rain', 'rain', 'calm', 'https://example.com/heavy-rain.mp3', 600),
  ('Gentle Waves', 'ocean', 'peaceful', 'https://example.com/gentle-waves.mp3', 600),
  ('Study Session', 'lofi', 'focused', 'https://example.com/study-session.mp3', 180);

-- Grant permissions
grant usage on schema public to anon, authenticated;
grant all on all tables in schema public to anon, authenticated;
grant all on all sequences in schema public to anon, authenticated;
