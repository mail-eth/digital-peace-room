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
    { id: 'midnight', name: 'Midnight Blue', gradient: 'linear-gradient(135deg, #1e1b4b, #312e81)' },
    { id: 'rain', name: 'Rainy Night', gradient: 'linear-gradient(135deg, #0f172a, #1e293b)' },
    { id: 'sunset', name: 'Sunset Glow', gradient: 'linear-gradient(135deg, #7c2d12, #9f1239)' },
    { id: 'forest', name: 'Forest Night', gradient: 'linear-gradient(135deg, #064e3b, #065f46)' },
  ]

  return (
    <div className="min-h-screen px-6 py-12 bg-linear-black">
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
            <SettingsIcon className="w-5 h-5" style={{ color: '#7170ff' }} />
            <span className="text-sm uppercase tracking-wider" style={{ color: '#d0d6e0', fontWeight: 510 }}>
              Settings
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-medium text-linear-primary mb-4" style={{ fontWeight: 510, letterSpacing: '-1.056px' }}>
            Personalize Your Space
          </h1>
          <p className="text-lg md:text-xl text-linear-tertiary max-w-2xl mx-auto leading-relaxed" style={{ fontWeight: 400 }}>
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
            className="rounded-2xl p-8"
            style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)' }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Volume2 className="w-6 h-6" style={{ color: '#7170ff' }} />
              <h2 className="text-2xl font-medium text-linear-primary" style={{ fontWeight: 510 }}>Ambience</h2>
            </div>

            <div className="space-y-8">
              {/* Intensity slider */}
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-base text-linear-secondary" style={{ fontWeight: 400 }}>Ambience Intensity</label>
                  <span className="text-base text-linear-tertiary font-medium" style={{ fontWeight: 510 }}>{ambienceIntensity}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={ambienceIntensity}
                  onChange={(e) => setAmbienceIntensity(Number(e.target.value))}
                  className="w-full h-3 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #7170ff 0%, #7170ff ${ambienceIntensity}%, rgba(255,255,255,0.1) ${ambienceIntensity}%)`
                  }}
                />
                <p className="text-sm text-linear-quaternary mt-3" style={{ fontWeight: 400 }}>
                  Controls rain, particles, and ambient effects
                </p>
              </div>

              {/* Autoplay music */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base text-linear-secondary mb-1" style={{ fontWeight: 400 }}>Autoplay Music</p>
                  <p className="text-sm text-linear-quaternary" style={{ fontWeight: 400 }}>Start ambient music when entering rooms</p>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setAutoplayMusic(!autoplayMusic)}
                  className="w-16 h-9 rounded-full transition-all relative"
                  style={{
                    background: autoplayMusic ? '#5e6ad2' : 'rgba(255, 255, 255, 0.1)'
                  }}
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
            className="rounded-2xl p-8"
            style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)' }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Eye className="w-6 h-6" style={{ color: '#7170ff' }} />
              <h2 className="text-2xl font-medium text-linear-primary" style={{ fontWeight: 510 }}>Visual Effects</h2>
            </div>

            <div className="space-y-8">
              {/* Visual effects toggle */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base text-linear-secondary mb-1" style={{ fontWeight: 400 }}>Enable Visual Effects</p>
                  <p className="text-sm text-linear-quaternary" style={{ fontWeight: 400 }}>Floating particles, glows, and blur effects</p>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setVisualEffects(!visualEffects)}
                  className="w-16 h-9 rounded-full transition-all relative"
                  style={{
                    background: visualEffects ? '#5e6ad2' : 'rgba(255, 255, 255, 0.1)'
                  }}
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
                  <p className="text-base text-linear-secondary mb-1" style={{ fontWeight: 400 }}>Enable Animations</p>
                  <p className="text-sm text-linear-quaternary" style={{ fontWeight: 400 }}>Smooth transitions and motion effects</p>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setAnimations(!animations)}
                  className="w-16 h-9 rounded-full transition-all relative"
                  style={{
                    background: animations ? '#5e6ad2' : 'rgba(255, 255, 255, 0.1)'
                  }}
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
            className="rounded-2xl p-8"
            style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)' }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Palette className="w-6 h-6" style={{ color: '#7170ff' }} />
              <h2 className="text-2xl font-medium text-linear-primary" style={{ fontWeight: 510 }}>Theme</h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {themes.map((t) => (
                <motion.button
                  key={t.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setTheme(t.id)}
                  className="p-6 rounded-2xl transition-all text-left"
                  style={{
                    background: theme === t.id ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.02)',
                    border: theme === t.id ? '2px solid rgba(94, 106, 210, 0.5)' : '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <div className="h-20 rounded-xl mb-4" style={{ background: t.gradient, border: '1px solid rgba(255, 255, 255, 0.08)' }} />
                  <p className="text-base font-medium text-linear-primary" style={{ fontWeight: 510 }}>{t.name}</p>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Account */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="rounded-2xl p-8"
            style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)' }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="w-6 h-6" style={{ color: '#7170ff' }} />
              <h2 className="text-2xl font-medium text-linear-primary" style={{ fontWeight: 510 }}>Account</h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(94, 106, 210, 0.2), rgba(113, 112, 255, 0.2))',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  🐻
                </div>
                <div>
                  <p className="text-lg text-linear-primary font-medium" style={{ fontWeight: 510 }}>peacefulbear</p>
                  <p className="text-sm text-linear-quaternary" style={{ fontWeight: 400 }}>Anonymous identity</p>
                </div>
              </div>

              <p className="text-sm text-linear-quaternary italic" style={{ fontWeight: 400 }}>
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
            className="w-full py-5 rounded-2xl text-lg font-medium transition-all"
            style={{
              background: '#5e6ad2',
              color: '#ffffff',
              fontWeight: 510
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#828fff'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#5e6ad2'}
          >
            Save Preferences
          </motion.button>
        </div>
      </div>
    </div>
  )
}
