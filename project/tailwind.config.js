/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        }
      },
      colors: {
        primary: {
          DEFAULT: '#7928ca',
          hover: '#9333ea',
        },
        secondary: {
          DEFAULT: '#00d4ff',
          hover: '#38bdf8',
        },
        accent: {
          DEFAULT: '#ff0080',
          hover: '#f43f5e',
        },
        background: {
          start: '#1a0b2e',
          middle: '#2b1055',
          end: '#16213e',
        },
        text: {
          primary: '#e2c4ff',
          secondary: '#b3e6ff',
          accent: '#ffb3d9',
        }
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
      backdropBlur: {
        'sm': '4px',
      }
    },
  },
  plugins: [],
}