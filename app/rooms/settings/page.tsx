'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Settings as SettingsIcon, Volume2, Eye, Palette, Sparkles } from 'lucide-react'

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
            className="inline-flex items-center gap-2 bg-slate-500/10 backdrop-blur-sm border border-slate-500/20 px-6 py-3 rounded-full mb-6"
          >
            <SettingsIcon className="w-5 h-5 text-slate-300" />
            <span className="text-sm uppercase tracking-wider text-slate-200">Settings</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
            Personalize Your Space
          </h1>
          <p className="text-lg md:text-xl text-slate-200/70 max-w-2xl mx-auto">
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
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <Volume2 className="w-6 h-6 text-blue-300" />
              <h2 className="text-2xl font-semibold text-white">Ambience</h2>
            </div>

            <div className="space-y-8">
              {/* Intensity slider */}
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-base text-white/80">Ambience Intensity</label>
                  <span className="text-base text-white/60 font-medium">{ambienceIntensity}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={ambienceIntensity}
                  onChange={(e) => setAmbienceIntensity(Number(e.target.value))}
                  className="w-full h-3 bg-white/10 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, rgb(59 130 246) 0%, rgb(168 85 247) ${ambienceIntensity}%, rgba(255,255,255,0.1) ${ambienceIntensity}%)`
                  }}
                />
                <p className="text-sm text-white/40 mt-3">
                  Controls rain, particles, and ambient effects
                </p>
              </div>

              {/* Autoplay music */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base text-white/80 mb-1">Autoplay Music</p>
                  <p className="text-sm text-white/40">Start ambient music when entering rooms</p>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setAutoplayMusic(!autoplayMusic)}
                  className={`
                    w-16 h-9 rounded-full transition-all relative
                    ${autoplayMusic ? 'bg-blue-500' : 'bg-white/10'}
                  `}
                >
                  <motion.div
                    animate={{ x: autoplayMusic ? 28 : 2 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    className="absolute top-1 w-7 h-7 bg-white rounded-full shadow-lg"
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
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <Eye className="w-6 h-6 text-purple-300" />
              <h2 className="text-2xl font-semibold text-white">Visual Effects</h2>
            </div>

            <div className="space-y-8">
              {/* Visual effects toggle */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base text-white/80 mb-1">Enable Visual Effects</p>
                  <p className="text-sm text-white/40">Floating particles, glows, and blur effects</p>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setVisualEffects(!visualEffects)}
                  className={`
                    w-16 h-9 rounded-full transition-all relative
                    ${visualEffects ? 'bg-purple-500' : 'bg-white/10'}
                  `}
                >
                  <motion.div
                    animate={{ x: visualEffects ? 28 : 2 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    className="absolute top-1 w-7 h-7 bg-white rounded-full shadow-lg"
                  />
                </motion.button>
              </div>

              {/* Animations toggle */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base text-white/80 mb-1">Enable Animations</p>
                  <p className="text-sm text-white/40">Smooth transitions and motion effects</p>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setAnimations(!animations)}
                  className={`
                    w-16 h-9 rounded-full transition-all relative
                    ${animations ? 'bg-purple-500' : 'bg-white/10'}
                  `}
                >
                  <motion.div
                    animate={{ x: animations ? 28 : 2 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    className="absolute top-1 w-7 h-7 bg-white rounded-full shadow-lg"
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
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <Palette className="w-6 h-6 text-pink-300" />
              <h2 className="text-2xl font-semibold text-white">Theme</h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {themes.map((t) => (
                <motion.button
                  key={t.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setTheme(t.id)}
                  className={`
                    p-6 rounded-2xl transition-all text-left
                    ${theme === t.id
                      ? 'ring-2 ring-white/30 bg-white/5'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                    }
                  `}
                >
                  <div className={`h-20 rounded-xl bg-gradient-to-br ${t.gradient} mb-4 border border-white/10`} />
                  <p className="text-base font-medium text-white">{t.name}</p>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Account */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="w-6 h-6 text-amber-300" />
              <h2 className="text-2xl font-semibold text-white">Account</h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-white/10 flex items-center justify-center text-4xl">
                  🐻
                </div>
                <div>
                  <p className="text-lg text-white font-medium">peacefulbear</p>
                  <p className="text-sm text-white/40">Anonymous identity</p>
                </div>
              </div>

              <p className="text-sm text-white/40 italic">
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
            className="w-full bg-white/5 border border-white/10 py-5 rounded-2xl text-white text-lg font-semibold hover:bg-white/10 transition-all"
          >
            Save Preferences
          </motion.button>
        </div>
      </div>
    </div>
  )
}
