/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js, ts, jsx, tsx}",
    "./components/**/*.{js, ts, jsx, tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: { burtons: 'burtons' },
    colors: {
      'github-blue': '#4078c0',
      'twitter-blue': '#1DA1F2',
      'linkedin-blue': '#0077b5',
      'google-red': '#DB4437',
      'goq-orange': '#e99949',
      'goq-orange-light': '#f9c28b',
      'jakk-green': '#2A928F',
      'jakk-green-light': '#324B4A',
    },
  },
    plugins: [],
  }
}