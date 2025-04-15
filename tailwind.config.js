/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#2563eb',
          600: '#1d4ed8'
        },
        primary: '#2563eb'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
} 