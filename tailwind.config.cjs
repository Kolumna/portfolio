/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'input': ['input'],
        'input-bold': ['input-bold'],
      },
    },
  },
  plugins: [],
}
