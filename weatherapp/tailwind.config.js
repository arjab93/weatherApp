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
        'warm': "url('/src/assets/warm.jpg')",
        'cool': "url('/src/assets/cool.jpg')",
        'cold': "url('/src/assets/cold.jpg')"
      }
    },
  },
  plugins: [],
}