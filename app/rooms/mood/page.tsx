'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Heart } from 'lucide-react'

const moods = [
  {
    id: 'anxious',
    name: 'Anxious',
    emoji: '😰',
    color: 'from-orange-500/20 to-red-500/20',
    borderColor: 'border-orange-500/30',
    description: 'Feeling overwhelmed and restless',
    recommendation: 'Try deep breathing exercises and calming rain sounds'
  },
  {
    id: 'lonely',
    name: 'Lonely',
    emoji: '😔',
    color: 'from-blue-500/20 to-indigo-500/20',
    borderColor: 'border-blue-500/30',
    description: 'Feeling disconnected and isolated',
    recommendation: 'Visit the chat lounge or write in your journal'
  },
  {
    id: 'overwhelmed',
    name: 'Overwhelmed',
    emoji: '😵',
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30',
    description: 'Too much on your mind',
    recommendation: 'Take a break with ambient music and reflection'
  },
  {
    id: 'peaceful',
    name: 'Peaceful',
    emoji: '😌',
    color: 'from-green-500/20 to-teal-500/20',
    borderColor: 'border-green-500/30',
    description: 'Feeling calm and centered',
    recommendation: 'Enjoy classical music or write gratitude notes'
  },
  {
    id: 'focused',
    name: 'Focused',
    emoji: '🎯',
    color: 'from-cyan-500/20 to-blue-500/20',
    borderColor: 'border-cyan-500/30',
    description: 'Ready to concentrate',
    recommendation: 'Try lo-fi beats and distraction-free journaling'
  },
  {
    id: 'tired',
    name: 'Emotionally Tired',
    emoji: '😪',
    color: 'from-gray-500/20 to-slate-500/20',
    borderColor: 'border-gray-500/30',
    description: 'Drained and need rest',
    recommendation: 'Listen to ocean sounds and take it slow'
  },
]

export default function MoodSpace() {
  const [selectedMood, setSelectedMood] = useState<typeof moods[0] | null>(null)

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
            className="inline-flex items-center gap-2 bg-pink-500/10 backdrop-blur-sm border border-pink-500/20 px-6 py-3 rounded-full mb-6"
          >
            <Heart className="w-5 h-5 text-pink-300" />
            <span className="text-sm uppercase tracking-wider text-pink-200">Mood Space</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
            How Are You Feeling?
          </h1>
          <p className="text-lg md:text-xl text-pink-200/70 max-w-2xl mx-auto">
            Choose your emotional state and get personalized recommendations
          </p>
        </motion.div>

        {/* Mood Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8"
        >
          {moods.map((mood, index) => (
            <motion.button
              key={mood.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedMood(mood)}
              className={`
                p-8 rounded-3xl text-center transition-all
                bg-gradient-to-br ${mood.color}
                border-2 ${selectedMood?.id === mood.id ? mood.borderColor : 'border-white/10'}
                ${selectedMood?.id === mood.id ? 'shadow-2xl' : 'hover:border-white/20'}
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

        {/* Selected Mood Details */}
        {selectedMood && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
          >
            <div className="flex items-start gap-6">
              <div className="text-6xl">{selectedMood.emoji}</div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  You're feeling {selectedMood.name.toLowerCase()}
                </h2>
                <p className="text-lg text-white/70 mb-6">
                  {selectedMood.description}
                </p>
                
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    💡 Recommendation
                  </h3>
                  <p className="text-white/80">
                    {selectedMood.recommendation}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {!selectedMood && (
          <div className="text-center">
            <p className="text-white/40 italic">
              Select a mood to see personalized recommendations
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
