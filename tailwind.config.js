/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['poppins', 'sans-serif']
      },
      colors: {
        'primary': '#3865F4',
        'grey': '#94959A',
        'black': '#120D26'
      }
    },
  },
  plugins: [],
}

// TODO COLORING
// TODO SIZING