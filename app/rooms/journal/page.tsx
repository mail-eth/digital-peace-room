'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { BookOpen, Save, Calendar } from 'lucide-react'

const emotionalTags = [
  'grateful', 'anxious', 'hopeful', 'overwhelmed', 'peaceful', 
  'lonely', 'excited', 'tired', 'reflective', 'uncertain'
]

export default function JournalRoom() {
  const [content, setContent] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [wordCount, setWordCount] = useState(0)
  const [lastSaved, setLastSaved] = useState<Date | null>(null)

  useEffect(() => {
    const words = content.trim().split(/\s+/).filter(w => w.length > 0)
    setWordCount(words.length)
  }, [content])

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  const handleSave = () => {
    setLastSaved(new Date())
    console.log('Saving journal entry...', { content, tags: selectedTags })
  }

  return (
    <div className="min-h-screen px-4 md:px-8 py-8 md:py-12 bg-linear-black">
      <div className="max-w-4xl mx-auto">
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
            <BookOpen className="w-5 h-5" style={{ color: '#7170ff' }} />
            <span className="text-sm uppercase tracking-wider" style={{ color: '#d0d6e0', fontWeight: 510 }}>
              Journal Room
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-medium text-linear-primary mb-4" style={{ fontWeight: 510, letterSpacing: '-1.056px' }}>
            Your Private Space
          </h1>
          <p className="text-lg md:text-xl text-linear-tertiary max-w-2xl mx-auto leading-relaxed" style={{ fontWeight: 400 }}>
            Write freely, reflect deeply, grow quietly
          </p>
        </motion.div>

        {/* Journal Entry */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl p-8 mb-6"
          style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)' }}
        >
          {/* Date */}
          <div className="flex items-center gap-2 mb-6" style={{ color: '#8a8f98' }}>
            <Calendar className="w-4 h-4" />
            <span className="text-sm" style={{ fontWeight: 400 }}>
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>

          {/* Writing area */}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="How are you feeling today? What's on your mind?"
            className="w-full h-[400px] bg-transparent text-lg leading-relaxed outline-none resize-none"
            style={{ 
              color: '#f7f8f8',
              fontFamily: 'Georgia, serif',
              fontWeight: 400
            }}
          />

          {/* Word count */}
          <div className="flex justify-between items-center mt-6 pt-6" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <span className="text-sm" style={{ color: '#62666d' }}>
              {wordCount} {wordCount === 1 ? 'word' : 'words'}
            </span>
            
            {lastSaved && (
              <span className="text-xs" style={{ color: '#10b981' }}>
                Saved at {lastSaved.toLocaleTimeString()}
              </span>
            )}
          </div>
        </motion.div>

        {/* Emotional Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-2xl p-8 mb-6"
          style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)' }}
        >
          <h3 className="text-lg font-medium text-linear-primary mb-4" style={{ fontWeight: 510 }}>
            How are you feeling?
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {emotionalTags.map((tag) => (
              <motion.button
                key={tag}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleTag(tag)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                style={{
                  background: selectedTags.includes(tag) ? 'rgba(94, 106, 210, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                  border: selectedTags.includes(tag) ? '2px solid rgba(94, 106, 210, 0.5)' : '1px solid rgba(255, 255, 255, 0.08)',
                  color: selectedTags.includes(tag) ? '#7170ff' : '#8a8f98',
                  fontWeight: 510
                }}
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Save Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSave}
          disabled={!content.trim()}
          className="w-full py-4 rounded-xl font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          style={{
            background: '#5e6ad2',
            color: '#ffffff',
            fontWeight: 510
          }}
          onMouseEnter={(e) => !e.currentTarget.disabled && (e.currentTarget.style.background = '#828fff')}
          onMouseLeave={(e) => e.currentTarget.style.background = '#5e6ad2'}
        >
          <Save className="w-5 h-5" />
          Save Entry
        </motion.button>

        {/* Note */}
        <p className="text-xs text-center mt-6 italic" style={{ color: '#62666d' }}>
          Your entries are private and encrypted • Supabase integration coming soon
        </p>
      </div>
    </div>
  )
}
