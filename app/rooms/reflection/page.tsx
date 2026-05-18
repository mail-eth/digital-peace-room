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
    
    // Simulate AI typing
    setIsTyping(true)
    
    // Placeholder response (AI integration later)
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'ai',
        content: 'I hear you. Take a moment to breathe. This space is here for you whenever you need it. (AI integration coming soon)'
      }])
      setIsTyping(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 glass-strong px-6 py-3 rounded-full mb-4"
          >
            <Sparkles className="w-5 h-5 text-blue-300" />
            <span className="text-sm uppercase tracking-wider text-blue-200">Reflection Room</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-3">
            Your Safe Space
          </h1>
          <p className="text-blue-200/60 text-lg">
            A calm conversation for your loud mind
          </p>
        </div>

        {/* Chat container */}
        <div className="glass-strong rounded-3xl p-6 md:p-8 glow-soft">
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
                  className={`
                    max-w-[80%] px-6 py-4 rounded-2xl
                    ${message.role === 'user'
                      ? 'bg-blue-500/20 text-white'
                      : 'glass text-blue-100'
                    }
                  `}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="glass px-6 py-4 rounded-2xl">
                  <div className="flex gap-2">
                    <span className="w-2 h-2 bg-blue-300 rounded-full animate-pulse" />
                    <span className="w-2 h-2 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <span className="w-2 h-2 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
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
              className="flex-1 glass px-6 py-4 rounded-2xl text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-blue-500/50 transition-smooth"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className="glass-strong px-6 py-4 rounded-2xl text-blue-300 hover:text-blue-200 transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Note */}
          <p className="text-xs text-blue-300/40 text-center mt-4 italic">
            AI integration coming soon • This is a safe, judgment-free space
          </p>
        </div>
      </motion.div>
    </div>
  )
}
