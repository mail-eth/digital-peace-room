import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

export function getAnimalEmoji(animal: string): string {
  const emojis: Record<string, string> = {
    fox: '🦊',
    owl: '🦉',
    rabbit: '🐰',
    cat: '🐱',
    wolf: '🐺',
    bear: '🐻'
  }
  return emojis[animal] || '🦊'
}

export function getMoodColor(mood: string): string {
  const colors: Record<string, string> = {
    anxious: 'from-orange-500/20 to-red-500/20',
    lonely: 'from-blue-500/20 to-purple-500/20',
    overwhelmed: 'from-red-500/20 to-pink-500/20',
    peaceful: 'from-green-500/20 to-blue-500/20',
    focused: 'from-cyan-500/20 to-blue-500/20',
    'emotionally tired': 'from-gray-500/20 to-slate-500/20'
  }
  return colors[mood] || 'from-blue-500/20 to-purple-500/20'
}

export function getMoodAmbience(mood: string): {
  background: string
  particles: string
  glow: string
} {
  const ambiences: Record<string, any> = {
    anxious: {
      background: 'bg-gradient-to-br from-orange-950/30 to-red-950/30',
      particles: 'bg-orange-400/30',
      glow: 'shadow-orange-500/20'
    },
    lonely: {
      background: 'bg-gradient-to-br from-blue-950/30 to-purple-950/30',
      particles: 'bg-blue-400/30',
      glow: 'shadow-blue-500/20'
    },
    overwhelmed: {
      background: 'bg-gradient-to-br from-red-950/30 to-pink-950/30',
      particles: 'bg-red-400/30',
      glow: 'shadow-red-500/20'
    },
    peaceful: {
      background: 'bg-gradient-to-br from-green-950/30 to-blue-950/30',
      particles: 'bg-green-400/30',
      glow: 'shadow-green-500/20'
    },
    focused: {
      background: 'bg-gradient-to-br from-cyan-950/30 to-blue-950/30',
      particles: 'bg-cyan-400/30',
      glow: 'shadow-cyan-500/20'
    },
    'emotionally tired': {
      background: 'bg-gradient-to-br from-gray-950/30 to-slate-950/30',
      particles: 'bg-gray-400/30',
      glow: 'shadow-gray-500/20'
    }
  }
  
  return ambiences[mood] || ambiences.peaceful
}

export function generateUsername(animal: string): string {
  const adjectives = [
    'sleepy', 'quiet', 'lonely', 'peaceful', 'dreamy', 
    'midnight', 'rainy', 'cozy', 'gentle', 'soft'
  ]
  const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)]
  return `${randomAdj}${animal}`
}
