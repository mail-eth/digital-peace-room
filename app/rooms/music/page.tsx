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
      { id: 3, title: 'Blue Note', duration: 210 },
    ]
  },
  {
    id: 'classical',
    name: 'Classical',
    emoji: '🎹',
    description: 'Timeless compositions',
    tracks: [
      { id: 4, title: 'Moonlight Sonata', duration: 300 },
      { id: 5, title: 'Clair de Lune', duration: 280 },
      { id: 6, title: 'Nocturne', duration: 260 },
    ]
  },
  {
    id: 'piano',
    name: 'Midnight Piano',
    emoji: '🌙',
    description: 'Peaceful piano melodies',
    tracks: [
      { id: 7, title: 'Night Rain', duration: 220 },
      { id: 8, title: 'Quiet Hours', duration: 240 },
      { id: 9, title: 'Solitude', duration: 200 },
    ]
  },
  {
    id: 'rain',
    name: 'Rain Sounds',
    emoji: '🌧️',
    description: 'Natural rain ambience',
    tracks: [
      { id: 10, title: 'Heavy Rain', duration: 600 },
      { id: 11, title: 'Soft Drizzle', duration: 600 },
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
      { id: 14, title: 'Beach Night', duration: 600 },
      { id: 15, title: 'Tide', duration: 600 },
    ]
  },
  {
    id: 'lofi',
    name: 'Lo-fi Focus',
    emoji: '🎧',
    description: 'Chill beats to focus',
    tracks: [
      { id: 16, title: 'Study Session', duration: 180 },
      { id: 17, title: 'Focus Flow', duration: 200 },
      { id: 18, title: 'Chill Vibes', duration: 190 },
    ]
  },
]

export default function MusicRoom() {
  const [selectedCategory, setSelectedCategory] = useState(musicCategories[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(70)
  const [currentTrack, setCurrentTrack] = useState(selectedCategory.tracks[0])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto">
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
            className="inline-flex items-center gap-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 px-6 py-3 rounded-full mb-6"
          >
            <MusicIcon className="w-5 h-5 text-purple-300" />
            <span className="text-sm uppercase tracking-wider text-purple-200">Music Room</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
            Peaceful Ambience
          </h1>
          <p className="text-lg md:text-xl text-purple-200/70 max-w-2xl mx-auto">
            Curated music for emotional comfort
          </p>
        </motion.div>

        {/* Now Playing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-8 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Album art */}
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-5xl md:text-6xl border border-white/10">
              {selectedCategory.emoji}
            </div>

            {/* Player controls */}
            <div className="flex-1 w-full">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {currentTrack.title}
              </h2>
              <p className="text-purple-200/60 mb-6">{selectedCategory.name}</p>

              {/* Progress bar */}
              <div className="mb-6">
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 w-1/3 rounded-full" />
                </div>
                <div className="flex justify-between text-xs text-white/40 mt-2">
                  <span>1:20</span>
                  <span>{formatTime(currentTrack.duration)}</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-6">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-14 h-14 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 hover:bg-purple-500/30 transition-all"
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
                      background: `linear-gradient(to right, rgb(168 85 247) 0%, rgb(168 85 247) ${volume}%, rgba(255,255,255,0.1) ${volume}%)`
                    }}
                  />
                  <span className="text-sm text-white/60 w-12">{volume}%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
            Browse Categories
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {musicCategories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setSelectedCategory(category)
                  setCurrentTrack(category.tracks[0])
                }}
                className={`
                  p-6 rounded-2xl text-left transition-all
                  ${selectedCategory.id === category.id
                    ? 'bg-purple-500/20 border-2 border-purple-500/50'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }
                `}
              >
                <div className="text-4xl mb-3">{category.emoji}</div>
                <h4 className="text-lg font-semibold text-white mb-1">
                  {category.name}
                </h4>
                <p className="text-sm text-white/60">
                  {category.description}
                </p>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Note */}
        <p className="text-xs text-purple-300/40 text-center mt-8 italic">
          Music streaming integration coming soon • Placeholder UI
        </p>
      </div>
    </div>
  )
}
