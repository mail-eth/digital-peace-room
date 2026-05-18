'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { BookOpen, Save, Calendar } from 'lucide-react'

const emotionalTags = [
  'grateful', 'anxious', 'peaceful', 'overwhelmed', 
  'hopeful', 'tired', 'reflective', 'lonely'
]

export default function JournalRoom() {
  const [content, setContent] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [isSaved, setIsSaved] = useState(false)
  const [wordCount, setWordCount] = useState(0)

  useEffect(() => {
    const words = content.trim().split(/\s+/).filter(w => w.length > 0)
    setWordCount(words.length)
  }, [content])

  const handleSave = () => {
    // Placeholder - will integrate with Supabase later
    console.log('Saving journal entry:', { content, tags: selectedTags })
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 2000)
  }

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  return (
    <div className="min-h-screen p-6 py-12">
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
            className="inline-flex items-center gap-2 glass-strong px-6 py-3 rounded-full mb-4"
          >
            <BookOpen className="w-5 h-5 text-amber-300" />
            <span className="text-sm uppercase tracking-wider text-amber-200">Journal Room</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-3">
            Your Private Space
          </h1>
          <p className="text-amber-200/60 text-lg">
            Write freely, without judgment
          </p>
        </motion.div>

        {/* Journal container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-strong rounded-3xl p-8 glow-soft"
        >
          {/* Date */}
          <div className="flex items-center gap-2 text-white/60 mb-6">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{today}</span>
          </div>

          {/* Writing area */}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="How are you feeling tonight? What's on your mind?"
            className="w-full h-[400px] bg-transparent text-white placeholder-white/30 outline-none resize-none text-lg leading-relaxed scrollbar-custom"
            style={{ fontFamily: 'Georgia, serif' }}
          />

          {/* Word count */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm text-white/40">
              {wordCount} {wordCount === 1 ? 'word' : 'words'}
            </span>
          </div>

          {/* Emotional tags */}
          <div className="mb-6">
            <p className="text-sm text-white/60 mb-3">How does this entry feel?</p>
            <div className="flex flex-wrap gap-2">
              {emotionalTags.map((tag) => (
                <motion.button
                  key={tag}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleTag(tag)}
                  className={`
                    px-4 py-2 rounded-full text-sm transition-smooth
                    ${selectedTags.includes(tag)
                      ? 'bg-amber-500/30 text-amber-200 ring-1 ring-amber-500/50'
                      : 'glass text-white/60 hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  {tag}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Save button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSave}
            disabled={!content.trim()}
            className={`
              w-full py-4 rounded-2xl font-medium transition-smooth
              ${isSaved
                ? 'bg-green-500/20 text-green-300 ring-1 ring-green-500/50'
                : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-lg hover:shadow-amber-500/20'
              }
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
          >
            <span className="flex items-center justify-center gap-2">
              <Save className="w-5 h-5" />
              {isSaved ? 'Saved ✓' : 'Save Entry'}
            </span>
          </motion.button>

          {/* Privacy note */}
          <p className="text-xs text-white/40 text-center mt-4 italic">
            🔒 Your journal is private and encrypted • Supabase integration coming soon
          </p>
        </motion.div>

        {/* Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {[
            {
              emoji: '✍️',
              title: 'Write freely',
              description: 'No rules, no judgment'
            },
            {
              emoji: '🌙',
              title: 'Late night thoughts',
              description: 'Best time for reflection'
            },
            {
              emoji: '💭',
              title: 'Be honest',
              description: 'This space is yours alone'
            }
          ].map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className="glass p-4 rounded-xl text-center"
            >
              <div className="text-3xl mb-2">{tip.emoji}</div>
              <h3 className="text-sm font-semibold text-white mb-1">
                {tip.title}
              </h3>
              <p className="text-xs text-white/60">
                {tip.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
