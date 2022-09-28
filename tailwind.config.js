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
  daisyui: {
    themes: [
      {
      mytheme: {    
        "primary": "#E8C3FD",
        "secondary": "#86C5FC",
        "accent": "#345C85",
        "neutral": "#FFFFFF",
        "base-100": "#FFFFFF",
        "info": "#86C5FC",
        "success": "#E8C3FD",
        "warning": "#E8C3FD",
        "error": "#E8C3FD",
      },
      },
    ],
  },
  plugins: [require("daisyui")]
  }