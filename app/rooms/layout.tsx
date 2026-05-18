import { Sidebar } from '@/components/layout/Sidebar'
import { RainBackground } from '@/components/ambient/RainBackground'
import { FloatingParticles } from '@/components/ambient/FloatingParticles'

export default function RoomsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
      {/* Ambient layers */}
      <RainBackground />
      <FloatingParticles />
      
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content */}
      <main className="relative z-10 md:pl-32 min-h-screen">
        {children}
      </main>
    </div>
  )
}
