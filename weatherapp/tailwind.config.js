/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Changa': ['Changa One']
    },
    extend: {
      backgroundImage: {
        'hot' : "url('/src/assets/hot.jpg')",
      }
    },
  },
  plugins: [],
}