import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '2rem'
      },
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      spacing: {
        18: '72px'
      },
      colors: {
        gray: {
          dark: '#737380',
          medium: '#A8A8B3',
          light: '#DBDCDD',
          'medium-hover': '#7E7E86',
          'light-hover': '#CECECE',
        },
        white: {
          background: '#F8F8F8',
          details: '#FEFEFE'
        },
        black: '#29292E',
        shadow: '#050206',
        primary: {
          DEFAULT: '#',
          hover: '#6F4BD8',
        },
        danger: {
          DEFAULT: '#',
          hover: '#D73754,
        },
        pink: {
          dark: '#E559F9',
          light: '#D67EE2'
        }
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config
