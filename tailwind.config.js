/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-sono)', ...fontFamily.mono],
      },
      colors: {
        'orange-theme': {
          DEFAULT: '#ff5500',
        },
      }
    },
  },
  plugins: [],
}
