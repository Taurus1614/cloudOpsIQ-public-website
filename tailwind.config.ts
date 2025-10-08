import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#594AE2',
          dark: '#7C3AED',
        },
        secondary: {
          DEFAULT: '#00C9A7',
          light: '#00D084',
        },
        success: '#00D084',
        warning: '#FF9800',
        slate: {
          dark: '#1E293B',
          medium: '#64748B',
          light: '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'hero-desktop': '72px',
        'hero-mobile': '48px',
        'section-desktop': '48px',
        'section-mobile': '36px',
      },
      maxWidth: {
        'content': '1400px',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(45deg, #594AE2, #7C3AED)',
        'cta-gradient': 'linear-gradient(135deg, #00C9A7, #00D084)',
      },
    },
  },
  plugins: [],
}
export default config
