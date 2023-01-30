/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'input': ['input'],
        'input-bold': ['input-bold'],
        'input-black': ['input-black'],
        'logo': ['logo']
      },
    },
  },
  plugins: [],
}
