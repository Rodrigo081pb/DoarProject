/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Se for Vite
    // "./src/**/*.{js,jsx,ts,tsx}", // Se for Create React App
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
