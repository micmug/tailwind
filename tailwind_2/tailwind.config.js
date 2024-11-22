/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html', // Haupt-HTML-Datei
    //"./**/*.{vue,js,ts,jsx,tsx}",
    // Alle relevanten Dateien im src-Verzeichnis
  ],
  theme: {
    fontFamily: {
      sans: ['Open+Sans', 'sans-serif'],
      display: ['Open+Sans', 'sans-serif'],
      body: ['Open+Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#8bc53e',
        secondary: '#1e69de',
      },
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
}
