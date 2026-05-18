'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Heart } from 'lucide-react'
import { getMoodColor, getMoodAmbience } from '@/lib/utils'

const moods = [
  {
    id: 'anxious',
    name: 'Anxious',
    emoji: '😰',
    description: 'Feeling worried or restless',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 'lonely',
    name: 'Lonely',
    emoji: '😔',
    description: 'Feeling isolated or disconnected',
    color: 'from-blue-500 to-purple-500',
  },
  {
    id: 'overwhelmed',
    name: 'Overwhelmed',
    emoji: '😵',
    description: 'Too much on your mind',
    color: 'from-red-500 to-pink-500',
  },
  {
    id: 'peaceful',
    name: 'Peaceful',
    emoji: '😌',
    description: 'Calm and centered',
    color: 'from-green-500 to-blue-500',
  },
  {
    id: 'focused',
    name: 'Focused',
    emoji: '🎯',
    description: 'Ready to concentrate',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'emotionally tired',
    name: 'Emotionally Tired',
    emoji: '😪',
    description: 'Drained and need rest',
    color: 'from-gray-500 to-slate-500',
  },
]

export default function MoodSpace() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const currentMood = moods.find(m => m.id === selectedMood)
  const ambience = selectedMood ? getMoodAmbience(selectedMood) : null

  return (
    <div className={`min-h-screen p-6 py-12 transition-all duration-1000 ${ambience?.background || ''}`}>
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
            <Heart className="w-5 h-5 text-pink-300" />
            <span className="text-sm uppercase tracking-wider text-pink-200">Mood Space</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-3">
            How Are You Feeling?
          </h1>
          <p className="text-pink-200/60 text-lg">
            Your mood shapes your experience
          </p>
        </motion.div>

        {/* Current mood display */}
        {currentMood && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className={`glass-strong rounded-3xl p-8 mb-8 text-center ${ambience?.glow}`}
          >
            <div className="text-8xl mb-4">{currentMood.emoji}</div>
            <h2 className="text-3xl font-bold text-white mb-2">
              {currentMood.name}
            </h2>
            <p className="text-white/60 mb-6">
              {currentMood.description}
            </p>
            
            {/* Mood recommendations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="glass p-4 rounded-xl">
                <p className="text-sm text-white/60 mb-2">Recommended Music</p>
                <p className="text-white font-medium">
                  {currentMood.id === 'anxious' && 'Calm Piano'}
                  {currentMood.id === 'lonely' && 'Jazz Cafe'}
                  {currentMood.id === 'overwhelmed' && 'Rain Sounds'}
                  {currentMood.id === 'peaceful' && 'Classical'}
                  {currentMood.id === 'focused' && 'Lo-fi Focus'}
                  {currentMood.id === 'emotionally tired' && 'Ocean Night'}
                </p>
              </div>
              
              <div className="glass p-4 rounded-xl">
                <p className="text-sm text-white/60 mb-2">Suggested Activity</p>
                <p className="text-white font-medium">
                  {currentMood.id === 'anxious' && 'Deep breathing'}
                  {currentMood.id === 'lonely' && 'Join lounge chat'}
                  {currentMood.id === 'overwhelmed' && 'Journal your thoughts'}
                  {currentMood.id === 'peaceful' && 'Reflect quietly'}
                  {currentMood.id === 'focused' && 'Start working'}
                  {currentMood.id === 'emotionally tired' && 'Rest and listen'}
                </p>
              </div>
              
              <div className="glass p-4 rounded-xl">
                <p className="text-sm text-white/60 mb-2">Ambient Scene</p>
                <p className="text-white font-medium">
                  {currentMood.id === 'anxious' && 'Soft city lights'}
                  {currentMood.id === 'lonely' && 'Rainy window'}
                  {currentMood.id === 'overwhelmed' && 'Quiet room'}
                  {currentMood.id === 'peaceful' && 'Ocean night'}
                  {currentMood.id === 'focused' && 'Cyber cafe'}
                  {currentMood.id === 'emotionally tired' && 'Snowy night'}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Mood selection grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {moods.map((mood, index) => (
            <motion.button
              key={mood.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedMood(mood.id)}
              className={`
                glass p-8 rounded-2xl text-center transition-all duration-500
                ${selectedMood === mood.id 
                  ? `ring-2 ring-white/30 bg-gradient-to-br ${mood.color} bg-opacity-10` 
                  : 'hover:bg-white/5'
                }
              `}
            >
              <div className="text-5xl md:text-6xl mb-4">{mood.emoji}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {mood.name}
              </h3>
              <p className="text-sm text-white/60">
                {mood.description}
              </p>
            </motion.button>
          ))}
        </motion.div>

        {/* Info note */}
        {!selectedMood && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center text-white/40 text-sm mt-8 italic"
          >
            Select a mood to personalize your experience
          </motion.p>
        )}
      </div>
    </div>
  )
}
