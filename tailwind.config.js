/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary':['Quicksand', 'sans-serif'],
        'secondary': ['DM Serif Display', 'sans-serif']
      },
      colors: {
        'theme_purple': '#E8C3FD',
        'theme_blue': '#86C5FC',
        'theme_black': '#231F20',
        'theme_navy': '#345C85',
      }
    },
  },
  plugins: [require("daisyui")]
  }