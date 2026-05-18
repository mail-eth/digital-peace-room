import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export type User = {
  id: string
  nickname: string
  animal_avatar: 'fox' | 'owl' | 'rabbit' | 'cat' | 'wolf' | 'bear'
  mood?: string
  created_at: string
}

export type MusicTrack = {
  id: string
  title: string
  category: string
  mood: string
  audio_url: string
  duration: number
}

export type JournalEntry = {
  id: string
  user_id: string
  content: string
  mood_tags: string[]
  created_at: string
}

export type ChatMessage = {
  id: string
  room: string
  user_id: string
  nickname: string
  animal_avatar: string
  message: string
  created_at: string
}
