/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray-1': '#dee1e1',
        'custom-gray-2': '#f4f4f4',
      },  
    fontFamily: {
    'playfair': ['Playfair Display', 'serif'],
    'cinzel': ['Cinzel', 'serif'],
    'cormorant': ['Cormorant Garamond', 'serif'],
    'lato': ['Lato', 'sans-serif'],
    'opensans': ['Open Sans', 'sans-serif'],
    'roboto': ['Roboto', 'sans-serif'],
  },
    },
  },
  plugins: [],
}



// fontFamily: {
//   'headline': ['Playfair Display', 'serif'],
//   'body': ['Open Sans', 'sans-serif'],
// },