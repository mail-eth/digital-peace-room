'use client'

import { motion } from 'framer-motion'
import { RainBackground } from '@/components/ambient/RainBackground'
import { useRouter } from 'next/navigation'
import { Sparkles, Music, MessageCircle } from 'lucide-react'

export default function LandingPage() {
  const router = useRouter()

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-black">
      {/* Subtle ambient layer */}
      <div className="fixed inset-0 opacity-20">
        <RainBackground />
      </div>
      
      {/* Gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#08090a] via-[#0f1011]/50 to-[#08090a]" />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 lg:px-12 text-center">
        {/* Main heading - Linear Display style */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-medium mb-8 text-linear-primary leading-tight"
          style={{ 
            fontWeight: 510,
            letterSpacing: '-1.584px',
            fontFeatureSettings: '"cv01", "ss03"'
          }}
        >
          A quiet place
          <br />
          for loud minds
        </motion.h1>

        {/* Subtitle - Linear Body Large */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-linear-tertiary mb-16 max-w-2xl mx-auto leading-relaxed"
          style={{ 
            fontWeight: 400,
            letterSpacing: '-0.165px'
          }}
        >
          Your digital sanctuary for reflection, calm music, and emotional peace
        </motion.p>

        {/* CTA Button - Linear Primary Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => router.push('/rooms/reflection')}
          className="px-16 py-5 rounded-xl text-lg font-medium text-white transition-all"
          style={{
            backgroundColor: '#5e6ad2',
            fontWeight: 510,
            borderRadius: '12px',
            boxShadow: '0 4px 24px rgba(94, 106, 210, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#7170ff'
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(113, 112, 255, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.15)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#5e6ad2'
            e.currentTarget.style.boxShadow = '0 4px 24px rgba(94, 106, 210, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)'
          }}
        >
          Enter Peace Room
        </motion.button>

        {/* Feature cards - Linear Card style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6"
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
              className="p-8 rounded-lg transition-all"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)'}
            >
              <feature.icon className="w-8 h-8 text-linear-primary mb-4 mx-auto" />
              <h3 className="text-xl font-medium text-linear-primary mb-3" style={{ fontWeight: 590, letterSpacing: '-0.24px' }}>
                {feature.title}
              </h3>
              <p className="text-linear-tertiary leading-relaxed" style={{ fontSize: '15px', fontWeight: 400 }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
