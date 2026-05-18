'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Heart, Frown, AlertCircle, Smile, Target, Battery } from 'lucide-react'

const moods = [
  {
    id: 'anxious',
    name: 'Anxious',
    icon: AlertCircle,
    color: 'rgba(239, 68, 68, 0.2)',
    borderColor: 'rgba(239, 68, 68, 0.3)',
    description: 'Feeling overwhelmed and restless',
    recommendation: 'Try deep breathing exercises and calming rain sounds'
  },
  {
    id: 'lonely',
    name: 'Lonely',
    icon: Frown,
    color: 'rgba(99, 102, 241, 0.2)',
    borderColor: 'rgba(99, 102, 241, 0.3)',
    description: 'Feeling disconnected and isolated',
    recommendation: 'Visit the chat lounge or write in your journal'
  },
  {
    id: 'overwhelmed',
    name: 'Overwhelmed',
    icon: AlertCircle,
    color: 'rgba(168, 85, 247, 0.2)',
    borderColor: 'rgba(168, 85, 247, 0.3)',
    description: 'Too much on your mind',
    recommendation: 'Take a break with ambient music and reflection'
  },
  {
    id: 'peaceful',
    name: 'Peaceful',
    icon: Smile,
    color: 'rgba(34, 197, 94, 0.2)',
    borderColor: 'rgba(34, 197, 94, 0.3)',
    description: 'Feeling calm and centered',
    recommendation: 'Enjoy classical music or write gratitude notes'
  },
  {
    id: 'focused',
    name: 'Focused',
    icon: Target,
    color: 'rgba(6, 182, 212, 0.2)',
    borderColor: 'rgba(6, 182, 212, 0.3)',
    description: 'Ready to concentrate',
    recommendation: 'Try lo-fi beats and distraction-free journaling'
  },
  {
    id: 'tired',
    name: 'Emotionally Tired',
    icon: Battery,
    color: 'rgba(107, 114, 128, 0.2)',
    borderColor: 'rgba(107, 114, 128, 0.3)',
    description: 'Drained and need rest',
    recommendation: 'Listen to ocean sounds and take it slow'
  },
]

export default function MoodSpace() {
  const [selectedMood, setSelectedMood] = useState<typeof moods[0] | null>(null)

  return (
    <div className="min-h-screen px-4 md:px-8 py-8 md:py-12 bg-linear-black">
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
            <Heart className="w-5 h-5" style={{ color: '#7170ff' }} />
            <span className="text-sm uppercase tracking-wider" style={{ color: '#d0d6e0', fontWeight: 510 }}>
              Mood Space
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-medium text-linear-primary mb-4" style={{ fontWeight: 510, letterSpacing: '-1.056px' }}>
            How Are You Feeling?
          </h1>
          <p className="text-lg md:text-xl text-linear-tertiary max-w-2xl mx-auto leading-relaxed" style={{ fontWeight: 400 }}>
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
              className="p-8 rounded-2xl text-center transition-all"
              style={{
                background: selectedMood?.id === mood.id ? mood.color : 'rgba(255, 255, 255, 0.02)',
                border: selectedMood?.id === mood.id ? `2px solid ${mood.borderColor}` : '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <mood.icon className="w-12 h-12 mb-4 mx-auto" style={{ color: selectedMood?.id === mood.id ? '#7170ff' : '#d0d6e0' }} />
              <h3 className="text-xl font-medium text-linear-primary mb-2" style={{ fontWeight: 510 }}>
                {mood.name}
              </h3>
              <p className="text-sm text-linear-tertiary" style={{ fontWeight: 400 }}>
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
            className="rounded-2xl p-8"
            style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)' }}
          >
            <div className="flex items-start gap-6">
              <selectedMood.icon className="w-16 h-16" style={{ color: '#7170ff' }} />
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-medium text-linear-primary mb-3" style={{ fontWeight: 510 }}>
                  You're feeling {selectedMood.name.toLowerCase()}
                </h2>
                <p className="text-lg text-linear-secondary mb-6" style={{ fontWeight: 400 }}>
                  {selectedMood.description}
                </p>
                
                <div className="rounded-2xl p-6" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <h3 className="text-lg font-medium text-linear-primary mb-3" style={{ fontWeight: 510 }}>
                    💡 Recommendation
                  </h3>
                  <p className="text-linear-secondary" style={{ fontWeight: 400 }}>
                    {selectedMood.recommendation}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {!selectedMood && (
          <div className="text-center">
            <p className="text-linear-quaternary italic" style={{ fontWeight: 400 }}>
              Select a mood to see personalized recommendations
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
