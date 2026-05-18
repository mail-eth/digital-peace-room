'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { 
  Sparkles, 
  Music, 
  Heart, 
  BookOpen, 
  MessageCircle, 
  Settings,
  Home,
  Menu,
  X
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Desktop Sidebar - Left floating */}
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

      {/* Mobile Menu Button - Bottom right */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="fixed bottom-6 right-6 z-50 md:hidden glass-strong p-4 rounded-full glow-soft"
      >
        {mobileMenuOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </motion.button>

      {/* Mobile Menu - Full screen overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />
            
            {/* Menu content */}
            <motion.nav
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative h-full flex items-center justify-center p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="glass-strong rounded-3xl p-8 max-w-sm w-full glow-soft">
                <h2 className="text-2xl font-display font-bold text-white mb-8 text-center">
                  Navigate
                </h2>
                
                <div className="space-y-3">
                  {navItems.map((item, index) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href
                    
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`
                            flex items-center gap-4 p-4 rounded-2xl transition-smooth
                            ${isActive
                              ? 'bg-blue-500/20 text-blue-300'
                              : 'text-white/80 hover:text-white hover:bg-white/5'
                            }
                          `}
                        >
                          <Icon className="w-6 h-6" />
                          <span className="text-lg font-medium">{item.label}</span>
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
