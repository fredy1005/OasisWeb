import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f8f4',
          100: '#e9ede4',
          200: '#d3dbc9',
          300: '#b5c1a4',
          400: '#95a57e',
          500: '#7a8c64',
          600: '#5f6f4d',
          700: '#4a573e',
          800: '#3c4633',
          900: '#323a2c',
          950: '#1a1f16',
        },
        cream: '#fdf8f0',
        gold: {
          200: '#f0e4c2',
          300: '#e8d5a3',
          400: '#dcc28a',
          500: '#c9a96e',
          600: '#b89254',
        },
        deep: {
          green: '#1e3a2a',
          teal: '#2a4a3e',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Palatino Linotype', 'Book Antiqua', 'Palatino', 'serif'],
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        base: '18px',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.6' },
          '80%, 100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        blob: 'blob 12s infinite ease-in-out',
        float: 'float 5s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.7s ease-out both',
        'pulse-ring': 'pulse-ring 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'dot-pattern':
          'radial-gradient(circle, currentColor 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}

export default config
