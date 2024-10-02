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
    },
  },
  plugins: [],
}

