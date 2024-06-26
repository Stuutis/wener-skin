/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'clodoaldobg': "url('./assets/clodoaldoBg.jpg')",
      },
    },
    fontFamily: {
      'body': ['Barlow', 'sans-serif']
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}