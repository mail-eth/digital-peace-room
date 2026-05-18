'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Play, Pause, Volume2, Music as MusicIcon } from 'lucide-react'

const musicCategories = [
  {
    id: 'jazz',
    name: 'Jazz Cafe',
    emoji: '☕',
    description: 'Smooth jazz for late nights',
    tracks: [
      { id: 1, title: 'Midnight Jazz', duration: 180 },
      { id: 2, title: 'Cafe Noir', duration: 240 },
      { id: 3, title: 'Blue Notes', duration: 200 },
    ]
  },
  {
    id: 'classical',
    name: 'Classical',
    emoji: '🎹',
    description: 'Timeless piano melodies',
    tracks: [
      { id: 4, title: 'Moonlight Sonata', duration: 300 },
      { id: 5, title: 'Nocturne', duration: 280 },
      { id: 6, title: 'Clair de Lune', duration: 320 },
    ]
  },
  {
    id: 'piano',
    name: 'Midnight Piano',
    emoji: '🌙',
    description: 'Peaceful piano for reflection',
    tracks: [
      { id: 7, title: 'Night Rain', duration: 220 },
      { id: 8, title: 'Quiet Thoughts', duration: 260 },
      { id: 9, title: 'Solitude', duration: 240 },
    ]
  },
  {
    id: 'rain',
    name: 'Rain Sounds',
    emoji: '🌧️',
    description: 'Natural rain ambience',
    tracks: [
      { id: 10, title: 'Heavy Rain', duration: 600 },
      { id: 11, title: 'Light Drizzle', duration: 600 },
      { id: 12, title: 'Thunder Storm', duration: 600 },
    ]
  },
  {
    id: 'ocean',
    name: 'Ocean Night',
    emoji: '🌊',
    description: 'Calming ocean waves',
    tracks: [
      { id: 13, title: 'Gentle Waves', duration: 600 },
      { id: 14, title: 'Beach at Night', duration: 600 },
      { id: 15, title: 'Ocean Breeze', duration: 600 },
    ]
  },
  {
    id: 'lofi',
    name: 'Lo-fi Focus',
    emoji: '🎧',
    description: 'Chill beats for concentration',
    tracks: [
      { id: 16, title: 'Study Session', duration: 180 },
      { id: 17, title: 'Rainy Day', duration: 200 },
      { id: 18, title: 'Coffee Shop', duration: 220 },
    ]
  },
]

export default function MusicRoom() {
  const [selectedCategory, setSelectedCategory] = useState(musicCategories[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(selectedCategory.tracks[0])
  const [volume, setVolume] = useState(70)

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen p-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 glass-strong px-6 py-3 rounded-full mb-4"
          >
            <MusicIcon className="w-5 h-5 text-purple-300" />
            <span className="text-sm uppercase tracking-wider text-purple-200">Music Room</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-3">
            Your Ambient Sanctuary
          </h1>
          <p className="text-purple-200/60 text-lg">
            Curated soundscapes for emotional comfort
          </p>
        </motion.div>

        {/* Music player */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-strong rounded-3xl p-8 mb-8 glow-soft"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Album art */}
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-5xl md:text-6xl">
              {selectedCategory.emoji}
            </div>

            {/* Player controls */}
            <div className="flex-1 w-full">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {currentTrack.title}
              </h3>
              <p className="text-purple-200/60 mb-6">
                {selectedCategory.name}
              </p>

              {/* Progress bar */}
              <div className="mb-6">
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                    initial={{ width: '0%' }}
                    animate={{ width: isPlaying ? '100%' : '0%' }}
                    transition={{ duration: currentTrack.duration, ease: 'linear' }}
                  />
                </div>
                <div className="flex justify-between text-xs text-white/40 mt-2">
                  <span>0:00</span>
                  <span>{formatTime(currentTrack.duration)}</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-6">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white glow-blue"
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                </motion.button>

                <div className="flex-1 flex items-center gap-3">
                  <Volume2 className="w-5 h-5 text-white/60" />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="flex-1 h-2 bg-white/10 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, rgb(168 85 247) 0%, rgb(59 130 246) ${volume}%, rgba(255,255,255,0.1) ${volume}%)`
                    }}
                  />
                  <span className="text-sm text-white/60 w-12">{volume}%</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-purple-300/40 text-center mt-6 italic">
            Audio streaming integration coming soon • Placeholder UI
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {musicCategories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setSelectedCategory(category)
                setCurrentTrack(category.tracks[0])
                setIsPlaying(false)
              }}
              className={`
                glass p-6 rounded-2xl text-left transition-smooth
                ${selectedCategory.id === category.id ? 'ring-2 ring-purple-500/50 bg-purple-500/10' : 'hover:bg-white/5'}
              `}
            >
              <div className="text-4xl mb-3">{category.emoji}</div>
              <h3 className="text-lg font-semibold text-white mb-1">
                {category.name}
              </h3>
              <p className="text-sm text-purple-200/60">
                {category.description}
              </p>
              <p className="text-xs text-white/40 mt-3">
                {category.tracks.length} tracks
              </p>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
