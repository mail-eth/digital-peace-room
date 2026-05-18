'use client'

import { motion } from 'framer-motion'
import { RainBackground } from '@/components/ambient/RainBackground'
import { FloatingParticles } from '@/components/ambient/FloatingParticles'
import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const router = useRouter()

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
      {/* Ambient layers */}
      <RainBackground />
      <FloatingParticles />
      
      {/* City lights glow effect */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 3 }}>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm uppercase tracking-[0.3em] text-blue-300/60 mb-8"
        >
          Digital Peace Room
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-6xl md:text-8xl font-display font-bold mb-6 text-glow"
          style={{
            background: 'linear-gradient(to bottom, #ffffff, #93c5fd)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Welcome to your
          <br />
          peace room
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl text-blue-200/70 mb-12 font-body italic"
        >
          A quiet place for loud minds.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(59, 130, 246, 0.4)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push('/rooms/reflection')}
          className="glass-strong px-16 py-6 rounded-2xl text-xl md:text-2xl font-semibold text-white transition-smooth glow-blue hover:bg-white/10"
        >
          Enter Room
        </motion.button>

        {/* Feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: '🌧️',
              title: 'Ambient Atmosphere',
              description: 'Rain sounds, jazz cafe, midnight piano'
            },
            {
              icon: '✨',
              title: 'AI Reflection',
              description: 'Calm conversations for overwhelmed minds'
            },
            {
              icon: '🎵',
              title: 'Peaceful Music',
              description: 'Curated playlists for emotional comfort'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="glass p-6 rounded-2xl glow-soft transition-smooth"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-sm text-blue-200/60">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="mt-16 text-sm text-blue-300/40 italic"
        >
          Late night rain • Quiet jazz cafe • Emotional minimalism
        </motion.p>
      </div>
    </div>
  )
}
