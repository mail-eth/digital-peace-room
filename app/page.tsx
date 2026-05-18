'use client'

import { motion } from 'framer-motion'
import { RainBackground } from '@/components/ambient/RainBackground'
import { useRouter } from 'next/navigation'
import { Sparkles, Music, MessageCircle } from 'lucide-react'

export default function LandingPage() {
  const router = useRouter()

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Subtle ambient layer */}
      <div className="fixed inset-0 opacity-30">
        <RainBackground />
      </div>
      
      {/* Gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-white leading-tight"
        >
          A quiet place
          <br />
          for loud minds
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-300 mb-16 max-w-2xl mx-auto leading-relaxed"
        >
          Your digital sanctuary for reflection, calm music, and emotional peace
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push('/rooms/reflection')}
          className="bg-white text-slate-950 px-12 py-5 rounded-full text-xl font-semibold hover:bg-slate-100 transition-all shadow-2xl"
        >
          Enter Peace Room
        </motion.button>

        {/* Feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Sparkles,
              title: 'AI Reflection',
              description: 'Calm conversations for overwhelmed minds'
            },
            {
              icon: Music,
              title: 'Ambient Music',
              description: 'Jazz, classical, rain sounds, and lo-fi beats'
            },
            {
              icon: MessageCircle,
              title: 'Anonymous Chat',
              description: 'Connect with others in peaceful spaces'
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
            >
              <feature.icon className="w-8 h-8 text-white mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
