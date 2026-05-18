'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Settings as SettingsIcon, Volume2, Eye, Sparkles, Palette } from 'lucide-react'

export default function SettingsPage() {
  const [ambienceIntensity, setAmbienceIntensity] = useState(70)
  const [visualEffects, setVisualEffects] = useState(true)
  const [animations, setAnimations] = useState(true)
  const [autoplayMusic, setAutoplayMusic] = useState(false)
  const [theme, setTheme] = useState('midnight')

  const themes = [
    { id: 'midnight', name: 'Midnight Blue', gradient: 'from-blue-950 to-purple-950' },
    { id: 'rain', name: 'Rainy Night', gradient: 'from-slate-950 to-blue-950' },
    { id: 'sunset', name: 'Sunset Glow', gradient: 'from-orange-950 to-pink-950' },
    { id: 'forest', name: 'Forest Night', gradient: 'from-green-950 to-teal-950' },
  ]

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
            <SettingsIcon className="w-5 h-5 text-slate-300" />
            <span className="text-sm uppercase tracking-wider text-slate-200">Settings</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-3">
            Personalize Your Space
          </h1>
          <p className="text-slate-200/60 text-lg">
            Adjust your peace room experience
          </p>
        </motion.div>

        {/* Settings sections */}
        <div className="space-y-6">
          {/* Ambience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-strong rounded-2xl p-6 glow-soft"
          >
            <div className="flex items-center gap-3 mb-6">
              <Volume2 className="w-5 h-5 text-blue-300" />
              <h2 className="text-xl font-semibold text-white">Ambience</h2>
            </div>

            <div className="space-y-6">
              {/* Intensity slider */}
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-sm text-white/80">Ambience Intensity</label>
                  <span className="text-sm text-white/60">{ambienceIntensity}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={ambienceIntensity}
                  onChange={(e) => setAmbienceIntensity(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, rgb(59 130 246) 0%, rgb(168 85 247) ${ambienceIntensity}%, rgba(255,255,255,0.1) ${ambienceIntensity}%)`
                  }}
                />
                <p className="text-xs text-white/40 mt-2">
                  Controls rain, particles, and ambient effects
                </p>
              </div>

              {/* Autoplay music */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/80 mb-1">Autoplay Music</p>
                  <p className="text-xs text-white/40">Start ambient music when entering rooms</p>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setAutoplayMusic(!autoplayMusic)}
                  className={`
                    w-14 h-8 rounded-full transition-smooth relative
                    ${autoplayMusic ? 'bg-blue-500' : 'bg-white/10'}
                  `}
                >
                  <motion.div
                    animate={{ x: autoplayMusic ? 24 : 2 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    className="absolute top-1 w-6 h-6 bg-white rounded-full"
                  />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-strong rounded-2xl p-6 glow-soft"
          >
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-5 h-5 text-purple-300" />
              <h2 className="text-xl font-semibold text-white">Visual Effects</h2>
            </div>

            <div className="space-y-6">
              {/* Visual effects toggle */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/80 mb-1">Enable Visual Effects</p>
                  <p className="text-xs text-white/40">Floating particles, glows, and blur effects</p>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setVisualEffects(!visualEffects)}
                  className={`
                    w-14 h-8 rounded-full transition-smooth relative
                    ${visualEffects ? 'bg-purple-500' : 'bg-white/10'}
                  `}
                >
                  <motion.div
                    animate={{ x: visualEffects ? 24 : 2 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    className="absolute top-1 w-6 h-6 bg-white rounded-full"
                  />
                </motion.button>
              </div>

              {/* Animations toggle */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/80 mb-1">Enable Animations</p>
                  <p className="text-xs text-white/40">Smooth transitions and motion effects</p>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setAnimations(!animations)}
                  className={`
                    w-14 h-8 rounded-full transition-smooth relative
                    ${animations ? 'bg-purple-500' : 'bg-white/10'}
                  `}
                >
                  <motion.div
                    animate={{ x: animations ? 24 : 2 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    className="absolute top-1 w-6 h-6 bg-white rounded-full"
                  />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Theme */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-strong rounded-2xl p-6 glow-soft"
          >
            <div className="flex items-center gap-3 mb-6">
              <Palette className="w-5 h-5 text-pink-300" />
              <h2 className="text-xl font-semibold text-white">Theme</h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {themes.map((t) => (
                <motion.button
                  key={t.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setTheme(t.id)}
                  className={`
                    p-4 rounded-xl transition-smooth text-left
                    ${theme === t.id
                      ? 'ring-2 ring-white/30 bg-white/5'
                      : 'glass hover:bg-white/5'
                    }
                  `}
                >
                  <div className={`h-16 rounded-lg bg-gradient-to-br ${t.gradient} mb-3`} />
                  <p className="text-sm font-medium text-white">{t.name}</p>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Account */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass-strong rounded-2xl p-6 glow-soft"
          >
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-5 h-5 text-amber-300" />
              <h2 className="text-xl font-semibold text-white">Account</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center text-3xl">
                  🐻
                </div>
                <div>
                  <p className="text-white font-medium">peacefulbear</p>
                  <p className="text-sm text-white/40">Anonymous identity</p>
                </div>
              </div>

              <p className="text-xs text-white/40 italic">
                Authentication system coming soon
              </p>
            </div>
          </motion.div>

          {/* Save button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full glass-strong py-4 rounded-2xl text-white font-medium hover:bg-white/5 transition-smooth"
          >
            Save Preferences
          </motion.button>
        </div>
      </div>
    </div>
  )
}
