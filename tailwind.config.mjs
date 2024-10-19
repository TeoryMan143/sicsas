import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
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
    },
  },
  plugins: [typography],
};
