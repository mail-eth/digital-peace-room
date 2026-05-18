'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Send, Sparkles } from 'lucide-react'

export default function ReflectionRoom() {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'ai', content: string }>>([
    {
      role: 'ai',
      content: 'Welcome to your reflection space. How are you feeling tonight?'
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    
    setIsTyping(true)
    
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'ai',
        content: 'I hear you. Take a moment to breathe. This space is here for you whenever you need it. (AI integration coming soon)'
      }])
      setIsTyping(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 md:px-8 py-8 md:py-12 bg-linear-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl"
      >
        {/* Header */}
        <div className="text-center mb-12">
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
            <Sparkles className="w-5 h-5" style={{ color: '#7170ff' }} />
            <span className="text-sm uppercase tracking-wider" style={{ color: '#d0d6e0', fontWeight: 510 }}>
              Reflection Room
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-medium text-linear-primary mb-4" style={{ fontWeight: 510, letterSpacing: '-1.056px' }}>
            Your Safe Space
          </h1>
          <p className="text-lg md:text-xl text-linear-tertiary max-w-2xl mx-auto leading-relaxed" style={{ fontWeight: 400 }}>
            A calm conversation for your loud mind
          </p>
        </div>

        {/* Chat container */}
        <div className="rounded-2xl p-6 md:p-8" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          {/* Messages */}
          <div className="h-[500px] overflow-y-auto scrollbar-custom mb-6 space-y-4">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className="max-w-[80%] px-6 py-4 rounded-2xl"
                  style={{
                    background: message.role === 'user' ? 'rgba(94, 106, 210, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                    border: message.role === 'user' ? '1px solid rgba(94, 106, 210, 0.3)' : '1px solid rgba(255, 255, 255, 0.08)',
                    color: '#f7f8f8'
                  }}
                >
                  <p className="text-base leading-relaxed" style={{ fontWeight: 400 }}>{message.content}</p>
                </div>
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="px-6 py-4 rounded-2xl" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div className="flex gap-2">
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#7170ff' }} />
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#7170ff', animationDelay: '0.2s' }} />
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#7170ff', animationDelay: '0.4s' }} />
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Input */}
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="How are you feeling tonight?"
              className="flex-1 px-6 py-4 rounded-2xl text-linear-primary placeholder-linear-quaternary outline-none focus:ring-2 transition-all"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                fontWeight: 400
              }}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className="px-6 py-4 rounded-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: '#5e6ad2',
                color: '#ffffff',
                fontWeight: 510
              }}
              onMouseEnter={(e) => !e.currentTarget.disabled && (e.currentTarget.style.background = '#828fff')}
              onMouseLeave={(e) => e.currentTarget.style.background = '#5e6ad2'}
            >
              <Send className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Note */}
          <p className="text-xs text-center mt-6 italic" style={{ color: '#62666d' }}>
            AI integration coming soon • This is a safe, judgment-free space
          </p>
        </div>
      </motion.div>
    </div>
  )
}
