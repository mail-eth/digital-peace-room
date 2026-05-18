'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { MessageCircle, Send, Users, Moon, Cloud, Brain, Coffee, Dumbbell } from 'lucide-react'

const chatRooms = [
  { id: 'late-night', name: 'Late Night Room', icon: Moon, members: 12 },
  { id: 'rain', name: 'Rain Room', icon: Cloud, members: 8 },
  { id: 'overthinking', name: 'Overthinking Room', icon: Brain, members: 15 },
  { id: 'study-cafe', name: 'Study Cafe', icon: Coffee, members: 6 },
  { id: 'quiet-gym', name: 'Quiet Gym Room', icon: Dumbbell, members: 4 },
]

const mockMessages = [
  {
    id: 1,
    nickname: 'sleepyfox',
    animal: '🦊',
    message: 'anyone else up late thinking about everything?',
    timestamp: '23:45'
  },
  {
    id: 2,
    nickname: 'quietowl',
    animal: '🦉',
    message: 'yeah... can\'t sleep. too much on my mind',
    timestamp: '23:47'
  },
  {
    id: 3,
    nickname: 'lonelycat',
    animal: '🐱',
    message: 'same here. this room feels safe though',
    timestamp: '23:50'
  },
]

export default function ChatLounge() {
  const [selectedRoom, setSelectedRoom] = useState(chatRooms[0])
  const [messages, setMessages] = useState(mockMessages)
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return

    const newMessage = {
      id: messages.length + 1,
      nickname: 'peacefulbear',
      animal: '🐻',
      message: input.trim(),
      timestamp: new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      })
    }

    setMessages([...messages, newMessage])
    setInput('')
  }

  return (
    <div className="min-h-screen px-4 md:px-8 py-8 md:py-12 bg-linear-black">
      <div className="max-w-7xl mx-auto">
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
            <MessageCircle className="w-5 h-5" style={{ color: '#7170ff' }} />
            <span className="text-sm uppercase tracking-wider" style={{ color: '#d0d6e0', fontWeight: 510 }}>
              Chat Lounge
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-medium text-linear-primary mb-4" style={{ fontWeight: 510, letterSpacing: '-1.056px' }}>
            Anonymous Sanctuary
          </h1>
          <p className="text-lg md:text-xl text-linear-tertiary max-w-2xl mx-auto leading-relaxed" style={{ fontWeight: 400 }}>
            Connect with others in peaceful spaces
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Room list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="rounded-2xl p-6" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <h3 className="text-sm uppercase tracking-wider mb-6" style={{ color: '#8a8f98', fontWeight: 510 }}>
                Rooms
              </h3>
              <div className="space-y-3">
                {chatRooms.map((room) => (
                  <motion.button
                    key={room.id}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedRoom(room)}
                    className="w-full text-left p-4 rounded-xl transition-all"
                    style={{
                      background: selectedRoom.id === room.id ? 'rgba(94, 106, 210, 0.2)' : 'transparent',
                      border: selectedRoom.id === room.id ? '2px solid rgba(94, 106, 210, 0.5)' : '1px solid transparent',
                      color: selectedRoom.id === room.id ? '#f7f8f8' : '#8a8f98'
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="flex items-center gap-2">
                        <room.icon className="w-5 h-5" />
                        <span className="text-sm font-medium" style={{ fontWeight: 510 }}>{room.name}</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs" style={{ color: '#62666d' }}>
                      <Users className="w-3 h-3" />
                      <span>{room.members} online</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Chat area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl p-8" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              {/* Room header */}
              <div className="flex items-center justify-between mb-8 pb-6" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div className="flex items-center gap-3">
                  <selectedRoom.icon className="w-8 h-8" style={{ color: '#7170ff' }} />
                  <div>
                    <h2 className="text-2xl font-medium text-linear-primary" style={{ fontWeight: 510 }}>
                      {selectedRoom.name}
                    </h2>
                    <p className="text-sm" style={{ color: '#62666d' }}>
                      {selectedRoom.members} people here
                    </p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="h-[500px] overflow-y-auto scrollbar-custom mb-6 space-y-4">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex gap-3"
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                      style={{
                        background: 'linear-gradient(135deg, rgba(94, 106, 210, 0.2), rgba(113, 112, 255, 0.2))',
                        border: '1px solid rgba(255, 255, 255, 0.08)'
                      }}
                    >
                      {msg.animal}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-sm font-medium text-linear-primary" style={{ fontWeight: 510 }}>
                          {msg.nickname}
                        </span>
                        <span className="text-xs" style={{ color: '#62666d' }}>
                          {msg.timestamp}
                        </span>
                      </div>
                      <p className="text-base text-linear-secondary leading-relaxed" style={{ fontWeight: 400 }}>
                        {msg.message}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input */}
              <div className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type a message... (be kind)"
                  className="flex-1 px-6 py-4 rounded-2xl text-linear-primary outline-none focus:ring-2 transition-all"
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
                  disabled={!input.trim()}
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
                Realtime chat with Supabase coming soon • Be kind, be human
              </p>
            </div>
          </motion.div>
        </div>

        {/* Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 p-8 rounded-2xl"
          style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)' }}
        >
          <h3 className="text-xl font-medium text-linear-primary mb-6" style={{ fontWeight: 510 }}>
            🤝 Lounge Guidelines
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm" style={{ color: '#8a8f98' }}>
            <div>
              <span className="text-linear-primary font-medium block mb-2" style={{ fontWeight: 510 }}>Be kind</span>
              <p>This is a safe space for everyone</p>
            </div>
            <div>
              <span className="text-linear-primary font-medium block mb-2" style={{ fontWeight: 510 }}>Be human</span>
              <p>Share authentically, listen deeply</p>
            </div>
            <div>
              <span className="text-linear-primary font-medium block mb-2" style={{ fontWeight: 510 }}>Be calm</span>
              <p>Slow mode enabled for peaceful conversations</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
