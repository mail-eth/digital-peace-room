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
    // Placeholder - will integrate with Supabase
    setLastSaved(new Date())
    console.log('Saving journal entry...', { content, tags: selectedTags })
  }

  return (
    <div className="min-h-screen px-6 py-12">
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
            className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 px-6 py-3 rounded-full mb-6"
          >
            <BookOpen className="w-5 h-5 text-amber-300" />
            <span className="text-sm uppercase tracking-wider text-amber-200">Journal Room</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
            Your Private Space
          </h1>
          <p className="text-lg md:text-xl text-amber-200/70 max-w-2xl mx-auto">
            Write freely, reflect deeply, grow quietly
          </p>
        </motion.div>

        {/* Journal Entry */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl mb-6"
        >
          {/* Date */}
          <div className="flex items-center gap-2 text-white/60 mb-6">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">
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
            className="w-full h-[400px] bg-transparent text-white text-lg leading-relaxed placeholder-white/30 outline-none resize-none font-serif"
            style={{ fontFamily: 'Georgia, serif' }}
          />

          {/* Word count */}
          <div className="flex justify-between items-center mt-6 pt-6 border-t border-white/10">
            <span className="text-sm text-white/40">
              {wordCount} {wordCount === 1 ? 'word' : 'words'}
            </span>
            
            {lastSaved && (
              <span className="text-xs text-green-300/60">
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
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl mb-6"
        >
          <h3 className="text-lg font-semibold text-white mb-4">
            How are you feeling?
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {emotionalTags.map((tag) => (
              <motion.button
                key={tag}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleTag(tag)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${selectedTags.includes(tag)
                    ? 'bg-amber-500/20 text-amber-200 border-2 border-amber-500/50'
                    : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white'
                  }
                `}
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
          className="w-full bg-amber-500/20 border border-amber-500/30 py-4 rounded-2xl text-amber-200 font-semibold hover:bg-amber-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <Save className="w-5 h-5" />
          Save Entry
        </motion.button>

        {/* Note */}
        <p className="text-xs text-amber-300/40 text-center mt-6 italic">
          Your entries are private and encrypted • Supabase integration coming soon
        </p>
      </div>
    </div>
  )
}
