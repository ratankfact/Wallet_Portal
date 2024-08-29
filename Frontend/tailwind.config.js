/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
      },
      colors:{
        'custom-dark-blue': '#1e3a8a',
        'dark-blue': '#111184',
        'Eigengrau': '#1F222E',
        'customGold': '#FFD700',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
