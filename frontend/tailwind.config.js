/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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

