import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0c',
        surface: '#16161a',
        surfaceElevated: '#1f1f26',
        border: '#2a2a30',
        accent: '#ffeac6',
        textMuted: '#9a9aa2',
      },
    },
  },
  plugins: [],
};

export default config;
