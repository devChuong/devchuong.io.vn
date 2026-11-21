/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#08090d',
        surface: '#111319',
        'surface-dim': '#111319',
        'surface-bright': '#373940',
        'surface-container-lowest': '#08090d',
        'surface-container-low': '#12151c',
        'surface-container': '#181b24',
        'surface-container-high': '#222633',
        'surface-container-highest': '#2c3142',
        'on-surface': '#f1f5f9',
        'on-surface-variant': '#94a3b8',
        'outline': '#64748b',
        'outline-variant': '#334155',
        primary: {
          DEFAULT: '#38bdf8',
          light: '#7dd3fc',
          dark: '#0284c7',
          container: '#38bdf8',
        },
        secondary: {
          DEFAULT: '#10b981',
          light: '#34d399',
          dark: '#059669',
          container: '#00a572',
        },
        tertiary: {
          DEFAULT: '#818cf8',
          light: '#a5b4fc',
          dark: '#4f46e5',
          container: '#6366f1',
        },
      },
      fontFamily: {
        display: ['Geist', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-primary': '0 0 24px rgba(56, 189, 248, 0.25)',
        'glow-secondary': '0 0 24px rgba(16, 185, 129, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
