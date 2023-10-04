/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Lora': ['Lora', 'serif'],
        'Sanchez': ['Sanchez', 'serif'],
        'Varela': ['Varela', 'sans-serif'],
        'Source': ['Source Serif 4', 'serif'],
        'FiraSans': ['Fira Sans', 'sans-serif'],
        'Garamond': ['EB Garamond', 'serif']
      },
      colors: {
        'verde': '#AEC8A4',
        'verdealt': '#819479',
        'crema': '#FFFFF5'
      }
    },
  },
  plugins: [],
}
