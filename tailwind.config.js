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
        'Garamond': ['EB Garamond', 'serif'],
        'Poppins': ['Poppins', 'sans-serif'],
        'Cuprum': ['Cuprum', 'sans-serif']
      },
      colors: {
        'verde': '#AEC8A4',
        'verdealt': '#739665',
        'crema': '#FFFFF5',
        'marronalt': '#42351E'
      }
    },
  },
  plugins: [],
}
