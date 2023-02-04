/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        button: ' rgb(45, 164, 78)',
        loading: ' rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
