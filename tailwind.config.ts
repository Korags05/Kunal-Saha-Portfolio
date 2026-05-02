import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      colors: {
        accent: {
          50: '#FEF2EB',
          100: '#FDE8DB',
          200: '#FCCAB1',
          300: '#FBAA86',
          400: '#F98D5C',
          500: '#E85D3F',
          600: '#D24A2A',
          700: '#A83820',
          800: '#7E2815',
          900: '#541C0F',
        },
        background: {
          pink: '#FDE8E4',
        },
      },
    },
  },
  plugins: [],
};

export default config;