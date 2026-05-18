'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Play, Pause, Volume2, Music as MusicIcon, Coffee, Piano, Cloud, Waves, Headphones } from 'lucide-react'

const musicCategories = [
  {
    id: 'jazz',
    name: 'Jazz Cafe',
    icon: Coffee,
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
    icon: Piano,
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
    icon: Piano,
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
    icon: Cloud,
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
    icon: Waves,
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
    icon: Headphones,
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
    <div className="min-h-screen px-6 py-12 bg-linear-black">
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-6"
            style={{
              background: 'rgba(94, 106, 210, 0.1)',
              border: '1px solid rgba(94, 106, 210, 0.2)'
            }}
          >
            <MusicIcon className="w-5 h-5" style={{ color: '#7170ff' }} />
            <span className="text-sm uppercase tracking-wider" style={{ color: '#d0d6e0', fontWeight: 510 }}>
              Music Room
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-medium text-linear-primary mb-4" style={{ fontWeight: 510, letterSpacing: '-1.056px' }}>
            Peaceful Ambience
          </h1>
          <p className="text-lg md:text-xl text-linear-tertiary max-w-2xl mx-auto leading-relaxed" style={{ fontWeight: 400 }}>
            Curated music for emotional comfort
          </p>
        </motion.div>

        {/* Now Playing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl p-8 mb-8"
          style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)' }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Album art */}
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl flex items-center justify-center"
              style={{ 
                background: 'linear-gradient(135deg, rgba(94, 106, 210, 0.2), rgba(113, 112, 255, 0.2))',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <selectedCategory.icon className="w-20 h-20" style={{ color: '#7170ff' }} />
            </div>

            {/* Player controls */}
            <div className="flex-1 w-full">
              <h2 className="text-2xl md:text-3xl font-medium text-linear-primary mb-2" style={{ fontWeight: 510 }}>
                {currentTrack.title}
              </h2>
              <p className="text-linear-tertiary mb-6" style={{ fontWeight: 400 }}>{selectedCategory.name}</p>

              {/* Progress bar */}
              <div className="mb-6">
                <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                  <div className="h-full w-1/3 rounded-full" style={{ background: '#7170ff' }} />
                </div>
                <div className="flex justify-between text-xs mt-2" style={{ color: '#62666d' }}>
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
                  className="w-14 h-14 rounded-full flex items-center justify-center transition-all"
                  style={{
                    background: 'rgba(94, 106, 210, 0.2)',
                    border: '1px solid rgba(94, 106, 210, 0.3)',
                    color: '#7170ff'
                  }}
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                </motion.button>

                <div className="flex-1 flex items-center gap-3">
                  <Volume2 className="w-5 h-5" style={{ color: '#8a8f98' }} />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="flex-1 h-2 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #7170ff 0%, #7170ff ${volume}%, rgba(255,255,255,0.1) ${volume}%)`
                    }}
                  />
                  <span className="text-sm w-12" style={{ color: '#8a8f98' }}>{volume}%</span>
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
          <h3 className="text-xl md:text-2xl font-medium text-linear-primary mb-6" style={{ fontWeight: 510 }}>
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
                className="p-6 rounded-2xl text-left transition-all"
                style={{
                  background: selectedCategory.id === category.id 
                    ? 'rgba(94, 106, 210, 0.2)' 
                    : 'rgba(255, 255, 255, 0.02)',
                  border: selectedCategory.id === category.id
                    ? '2px solid rgba(94, 106, 210, 0.5)'
                    : '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <category.icon className="w-8 h-8 mb-3" style={{ color: selectedCategory.id === category.id ? '#7170ff' : '#d0d6e0' }} />
                <h4 className="text-lg font-medium text-linear-primary mb-1" style={{ fontWeight: 510 }}>
                  {category.name}
                </h4>
                <p className="text-sm text-linear-tertiary" style={{ fontWeight: 400 }}>
                  {category.description}
                </p>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Note */}
        <p className="text-xs text-center mt-8 italic" style={{ color: '#62666d' }}>
          Music streaming integration coming soon • Placeholder UI
        </p>
      </div>
    </div>
  )
}
