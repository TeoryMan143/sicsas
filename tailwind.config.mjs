import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        questrial: ['Questrial', 'sans-serif'],
        rubik: ['Rubik Variable', 'sans-serif'],
      },
      colors: {
        bright: '#0466c8',
        dark: '#001233',
        pale: '#33415c',
        detail: '#979dac',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        carousel: 'url("/img/bg-carousel.webp")',
      },
    },
  },
  plugins: [typography, require('tailwindcss-animate')],
};
