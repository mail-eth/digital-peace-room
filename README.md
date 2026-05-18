# 🌙 Digital Peace Room

> A quiet place for loud minds.

**Digital Peace Room** is a calm emotional digital sanctuary for overwhelmed people. An immersive, peaceful, cozy, and deeply human web experience that feels like late-night rain in a quiet jazz cafe.

---

## ✨ Features

### 🎨 **Immersive Experience**
- Animated rain background
- Floating blur particles
- City light glow effects
- Cinematic transitions
- Dark glassmorphism UI
- Smooth ambient animations

### 🏠 **Rooms**

#### 🌟 **Reflection Room**
- AI-powered emotional reflection (integration coming soon)
- Calm conversation interface
- Safe, judgment-free space
- Terminal-style chat UI

#### 🎵 **Music Room**
- Curated ambient music categories
  - Jazz Cafe ☕
  - Classical 🎹
  - Midnight Piano 🌙
  - Rain Sounds 🌧️
  - Ocean Night 🌊
  - Lo-fi Focus 🎧
- Layered ambience support
- Beautiful music player UI

#### 💭 **Mood Space**
- Dynamic mood system
- 6 emotional states:
  - Anxious 😰
  - Lonely 😔
  - Overwhelmed 😵
  - Peaceful 😌
  - Focused 🎯
  - Emotionally Tired 😪
- Mood-based ambience changes
- Personalized recommendations

#### 📖 **Journal Room**
- Private digital journaling
- Markdown support
- Emotional tags
- Autosave functionality
- Distraction-free writing
- Encrypted storage (coming soon)

#### 💬 **Chat Lounge**
- Anonymous realtime chat (integration coming soon)
- Peaceful themed rooms:
  - Late Night Room 🌙
  - Rain Room 🌧️
  - Overthinking Room 💭
  - Study Cafe ☕
  - Quiet Gym Room 🏋️
- Slow mode for calm conversations
- Kind, human atmosphere

#### ⚙️ **Settings**
- Ambience intensity control
- Visual effects toggle
- Animation preferences
- Theme selection
- Music autoplay
- Anonymous identity system

---

## 🎯 Design Philosophy

**The app should feel like:**
- Late night rain
- Quiet jazz cafe
- Classical music at midnight
- Soft city lights
- Emotional minimalism
- Calm internet
- Safe solitude
- Nostalgic internet comfort

**The app should NOT feel:**
- Corporate
- Productivity toxic
- Overstimulating
- Social media dopamine driven

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Database:** Supabase (integration in progress)
- **Icons:** Lucide React
- **Design:** macOS-inspired glassmorphism

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account (optional, for full features)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/digital-peace-room.git
   cd digital-peace-room
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

---

## 📊 Database Schema (Supabase)

### Users Table
```sql
create table users (
  id uuid primary key default uuid_generate_v4(),
  nickname text unique not null,
  password_hash text not null,
  animal_avatar text not null check (animal_avatar in ('fox', 'owl', 'rabbit', 'cat', 'wolf', 'bear')),
  mood text,
  created_at timestamp with time zone default now()
);
```

### Music Tracks Table
```sql
create table music_tracks (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  category text not null,
  mood text,
  audio_url text not null,
  duration integer not null,
  created_at timestamp with time zone default now()
);
```

### Journal Entries Table
```sql
create table journal_entries (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id) on delete cascade,
  content text not null,
  mood_tags text[],
  created_at timestamp with time zone default now()
);
```

### Chat Messages Table
```sql
create table chat_messages (
  id uuid primary key default uuid_generate_v4(),
  room text not null,
  user_id uuid references users(id) on delete cascade,
  nickname text not null,
  animal_avatar text not null,
  message text not null,
  created_at timestamp with time zone default now()
);

-- Index for realtime queries
create index chat_messages_room_created_at_idx on chat_messages(room, created_at desc);
```

---

## 🎨 Project Structure

```
digital-peace-room/
├── app/
│   ├── page.tsx                 # Landing page
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   └── rooms/
│       ├── layout.tsx           # Rooms layout with sidebar
│       ├── reflection/          # AI reflection room
│       ├── music/               # Music player room
│       ├── mood/                # Mood selection space
│       ├── journal/             # Private journal
│       ├── lounge/              # Chat lounge
│       └── settings/            # Settings page
├── components/
│   ├── layout/
│   │   └── Sidebar.tsx          # Floating navigation
│   ├── ambient/
│   │   ├── RainBackground.tsx   # Animated rain
│   │   └── FloatingParticles.tsx # Blur particles
│   ├── ui/                      # Reusable UI components
│   └── rooms/                   # Room-specific components
├── lib/
│   ├── supabase/
│   │   └── client.ts            # Supabase client
│   └── utils.ts                 # Utility functions
└── public/
    ├── audio/                   # Music files (CDN recommended)
    └── images/                  # Static images
```

---

## 🎵 Music Integration

**IMPORTANT:** Do NOT store music files locally on the VPS.

### Recommended Approaches:

1. **Supabase Storage**
   ```typescript
   const { data } = await supabase.storage
     .from('music')
     .getPublicUrl('jazz/midnight-jazz.mp3')
   ```

2. **Cloudflare R2**
   - Cost-effective CDN storage
   - Zero egress fees
   - Fast global delivery

3. **Remote URLs**
   - Use royalty-free music APIs
   - Stream from CDN services
   - Example: Pixabay, Freesound

---

## 🤖 AI Integration (Coming Soon)

The Reflection Room will support multiple AI providers:

- OpenAI GPT-4
- Anthropic Claude
- Custom AI endpoints

**AI Personality:**
- Emotionally intelligent
- Calm and warm
- Reflective and thoughtful
- Concise and human
- Avoids toxic positivity
- Creates emotional safety

---

## 🔐 Anonymous Identity System

Users create cozy anonymous identities:

1. Choose animal avatar (fox, owl, rabbit, cat, wolf, bear)
2. Create nickname (e.g., sleepyfox, quietowl)
3. Set password

**No email required.** Privacy-first, emotionally safe.

---

## 🎭 Mood System

Dynamic mood-based experience:

- **Anxious** → Warm colors, calming music
- **Lonely** → Cool blues, jazz cafe
- **Overwhelmed** → Minimal UI, rain sounds
- **Peaceful** → Soft greens, classical
- **Focused** → Cyan tones, lo-fi beats
- **Emotionally Tired** → Muted grays, ocean sounds

---

## 🚢 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables
   - Deploy!

3. **Environment Variables**
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint
npm run lint
```

---

## 📝 Roadmap

### Phase 1: Core Experience ✅
- [x] Landing page with rain animation
- [x] Floating sidebar navigation
- [x] Reflection Room UI
- [x] Music Room UI
- [x] Mood Space
- [x] Journal Room
- [x] Chat Lounge UI
- [x] Settings page

### Phase 2: Backend Integration 🚧
- [ ] Supabase authentication
- [ ] Anonymous identity system
- [ ] Journal storage
- [ ] Music streaming
- [ ] Realtime chat
- [ ] User preferences

### Phase 3: AI & Advanced Features 🔮
- [ ] AI reflection integration
- [ ] Mood-based music recommendations
- [ ] Ambient scene animations
- [ ] Voice memos
- [ ] Shared playlists
- [ ] Community features

---

## 🎨 Design Credits

Inspired by:
- macOS Big Sur glassmorphism
- Late-night lo-fi aesthetics
- Calm.com emotional design
- Poolsuite.net nostalgic vibes
- Rainy Mood ambient simplicity

---

## 🤝 Contributing

This is a personal sanctuary project, but suggestions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 📄 License

MIT License - feel free to use this for your own peace room.

---

## 💭 Philosophy

> "In a world of constant noise, we need quiet digital spaces. Places that don't demand productivity, don't chase engagement, don't optimize for dopamine. Just... peace."

**Digital Peace Room** is an experiment in calm internet. A reminder that technology can be gentle, human, and emotionally intelligent.

---

## 🌙 Final Note

This space is for you. When your mind is loud, when the world feels overwhelming, when you need a moment to breathe — this room is here.

Take your time. You're safe here.

---

**Built with 💙 for overwhelmed minds**

*Late night rain • Quiet jazz cafe • Emotional minimalism*
