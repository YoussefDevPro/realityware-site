import type { Config } from 'tailwindcss'

/* can u tell the wind to shut up ? (tailwind ref :p) */

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        neutral: 'var(--neutral)',
        accent: 'var(--accent)',
        lightblack: 'var(--lightblack)',
        purple: 'var(--purple)',
        gray: 'var(--gray)',
        lightaccent: 'var(--lightaccent)',
        red: 'var(--red)',
        textlight: 'var(--text-light)',
        lightblue: 'var(--lightblue)',
      },
    },
  },
  plugins: [],
}
export default config
