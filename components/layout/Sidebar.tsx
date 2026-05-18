'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Sparkles, 
  Music, 
  Heart, 
  BookOpen, 
  MessageCircle, 
  Settings,
  Home
} from 'lucide-react'

const navItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Sparkles, label: 'Reflection', href: '/rooms/reflection' },
  { icon: Music, label: 'Music', href: '/rooms/music' },
  { icon: Heart, label: 'Mood', href: '/rooms/mood' },
  { icon: BookOpen, label: 'Journal', href: '/rooms/journal' },
  { icon: MessageCircle, label: 'Lounge', href: '/rooms/lounge' },
  { icon: Settings, label: 'Settings', href: '/rooms/settings' },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:block"
    >
      <nav className="glass-strong rounded-3xl p-4 glow-soft">
        <div className="flex flex-col gap-3">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    p-3 rounded-2xl transition-smooth
                    ${isActive 
                      ? 'bg-blue-500/20 text-blue-300' 
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  <Icon className="w-6 h-6" />
                </motion.div>
                
                {/* Tooltip */}
                <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="glass-strong px-4 py-2 rounded-xl whitespace-nowrap text-sm">
                    {item.label}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </nav>
    </motion.aside>
  )
}
