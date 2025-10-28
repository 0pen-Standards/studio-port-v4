// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        tf: ['var(--font-TF)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
