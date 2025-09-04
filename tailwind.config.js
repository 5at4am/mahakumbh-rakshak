/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        primary: {
          DEFAULT: '#B94E2A', // saffron-warm
          50: '#fef8f5',
          100: '#fdeee7',
          200: '#faddd5',
          300: '#f5b7a5',
          400: '#ef8d72',
          500: '#e76b4a',
          600: '#d74d2f',
          700: '#b94129',
          800: '#973724',
          900: '#7c2f21',
          950: '#42170f',
        },
        // Secondary/Accent colors
        accent: {
          DEFAULT: '#F4A261', // light orange
          50: '#fffdfb',
          100: '#fef8f0',
          200: '#fdeedd',
          300: '#fcdec3',
          400: '#f9c89c',
          500: '#f4a261',
          600: '#ec874f',
          700: '#c86943',
          800: '#a15039',
          900: '#824230',
          950: '#482117',
        },
        // Status colors
        success: {
          DEFAULT: '#2F9E44', // green
          50: '#f5fbf6',
          100: '#e6f6e9',
          200: '#c2e8cd',
          300: '#99d8af',
          400: '#6bc58f',
          500: '#45b274',
          600: '#2f9e44',
          700: '#258435',
          800: '#20692c',
          900: '#1c5626',
          950: '#0d2f13',
        },
        warning: {
          DEFAULT: '#F6C85F', // yellow
          50: '#fffef9',
          100: '#fefcf1',
          200: '#fdf7d7',
          300: '#fbeeb8',
          400: '#f8e08c',
          500: '#f6c85f',
          600: '#e6ac3d',
          700: '#c18132',
          800: '#9b632d',
          900: '#7f5029',
          950: '#462a13',
        },
        danger: {
          DEFAULT: '#D7263D', // red
          50: '#fdf5f6',
          100: '#fcebec',
          200: '#f7cfd3',
          300: '#ef9fa6',
          400: '#e56d77',
          500: '#d7263d',
          600: '#c01f36',
          700: '#9d1b31',
          800: '#811a30',
          900: '#6c1930',
          950: '#3c0b19',
        },
        // Background colors
        background: {
          DEFAULT: '#FFF8F2',
          light: '#FFF8F2',
          card: '#FFFFFF',
          dark: '#242424',
        },
        // Text colors
        text: {
          primary: '#213547',
          secondary: '#64748B',
          tertiary: '#94A3B8',
          light: '#F1F5F9',
          dark: '#0F172A',
        },
        // Map overlay colors
        density: {
          low: '#2F9E44',    // Green
          medium: '#F6C85F', // Yellow
          high: '#D7263D',   // Red
        }
      },
      fontFamily: {
        sans: ['system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        // Custom font sizes for consistent typography
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      // Custom spacing scale
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  plugins: [],
}