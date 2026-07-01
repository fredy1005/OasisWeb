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
    },
  },
  plugins: [],
}

export default config
