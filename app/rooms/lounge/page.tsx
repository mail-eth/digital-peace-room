'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { MessageCircle, Send, Users } from 'lucide-react'

const chatRooms = [
  { id: 'late-night', name: 'Late Night Room', emoji: '🌙', members: 12 },
  { id: 'rain', name: 'Rain Room', emoji: '🌧️', members: 8 },
  { id: 'overthinking', name: 'Overthinking Room', emoji: '💭', members: 15 },
  { id: 'study-cafe', name: 'Study Cafe', emoji: '☕', members: 6 },
  { id: 'quiet-gym', name: 'Quiet Gym Room', emoji: '🏋️', members: 4 },
]

const mockMessages = [
  {
    id: 1,
    nickname: 'sleepyfox',
    animal: 'fox',
    message: 'anyone else up late thinking about everything?',
    timestamp: '23:45'
  },
  {
    id: 2,
    nickname: 'quietowl',
    animal: 'owl',
    message: 'yeah... can\'t sleep. too much on my mind',
    timestamp: '23:47'
  },
  {
    id: 3,
    nickname: 'lonelycat',
    animal: 'cat',
    message: 'same here. this room feels safe though',
    timestamp: '23:50'
  },
]

const getAnimalEmoji = (animal: string) => {
  const emojis: Record<string, string> = {
    fox: '🦊',
    owl: '🦉',
    cat: '🐱',
    rabbit: '🐰',
    wolf: '🐺',
    bear: '🐻'
  }
  return emojis[animal] || '🐾'
}

export default function ChatLounge() {
  const [selectedRoom, setSelectedRoom] = useState(chatRooms[0])
  const [messages, setMessages] = useState(mockMessages)
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return

    const newMessage = {
      id: messages.length + 1,
      nickname: 'peacefulbear',
      animal: 'bear',
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
    <div className="min-h-screen px-6 py-12">
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
            className="inline-flex items-center gap-2 bg-green-500/10 backdrop-blur-sm border border-green-500/20 px-6 py-3 rounded-full mb-6"
          >
            <MessageCircle className="w-5 h-5 text-green-300" />
            <span className="text-sm uppercase tracking-wider text-green-200">Chat Lounge</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
            Anonymous Sanctuary
          </h1>
          <p className="text-lg md:text-xl text-green-200/70 max-w-2xl mx-auto">
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
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
              <h3 className="text-sm uppercase tracking-wider text-white/60 mb-6">
                Rooms
              </h3>
              <div className="space-y-3">
                {chatRooms.map((room) => (
                  <motion.button
                    key={room.id}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedRoom(room)}
                    className={`
                      w-full text-left p-4 rounded-xl transition-all
                      ${selectedRoom.id === room.id
                        ? 'bg-green-500/20 text-white border-2 border-green-500/50'
                        : 'text-white/60 hover:text-white hover:bg-white/5 border border-transparent'
                      }
                    `}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="flex items-center gap-2">
                        <span className="text-xl">{room.emoji}</span>
                        <span className="text-sm font-medium">{room.name}</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-white/40">
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
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              {/* Room header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{selectedRoom.emoji}</span>
                  <div>
                    <h2 className="text-2xl font-semibold text-white">
                      {selectedRoom.name}
                    </h2>
                    <p className="text-sm text-white/40">
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
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center text-xl flex-shrink-0">
                      {getAnimalEmoji(msg.animal)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-sm font-medium text-white">
                          {msg.nickname}
                        </span>
                        <span className="text-xs text-white/30">
                          {msg.timestamp}
                        </span>
                      </div>
                      <p className="text-base text-white/80 leading-relaxed">
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
                  className="flex-1 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="bg-green-500/20 border border-green-500/30 px-6 py-4 rounded-2xl text-green-300 hover:bg-green-500/30 hover:text-green-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Note */}
              <p className="text-xs text-green-300/40 text-center mt-6 italic">
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
          className="mt-8 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl"
        >
          <h3 className="text-xl font-semibold text-white mb-6">
            🤝 Lounge Guidelines
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white/60">
            <div>
              <span className="text-white font-medium block mb-2">Be kind</span>
              <p>This is a safe space for everyone</p>
            </div>
            <div>
              <span className="text-white font-medium block mb-2">Be human</span>
              <p>Share authentically, listen deeply</p>
            </div>
            <div>
              <span className="text-white font-medium block mb-2">Be calm</span>
              <p>Slow mode enabled for peaceful conversations</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
