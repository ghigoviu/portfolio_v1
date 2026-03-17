/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // We will toggle a 'dark' class on the html/body element
  theme: {
    extend: {
      fontFamily: {
        // Light Theme (Comensal) -> Default serif/sans
        playfair: ['"Playfair Display"', 'serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        lato: ['"Lato"', 'sans-serif'],
        
        // Dark Theme (Cocina) -> Default display/sans
        bebas: ['"Bebas Neue"', 'cursive'],
        inter: ['"Inter"', 'sans-serif'],
        oswald: ['"Oswald"', 'sans-serif'],
      },
      colors: {
        // Light Theme Colors
        light: {
          bg: '#F8F9FA',
          bgSecondary: '#E3F2FD',
          text: '#495057',
          heading: '#212529',
          accent1: '#1B5E20',
          accent2: '#43A047',
          accent3: '#1565C0',
          accent4: '#90CAF9',
        },
        // Dark Theme Colors
        dark: {
          bg: '#121212',
          bgSecondary: '#1E1E1E',
          text: '#F8F8F8',
          heading: '#E63946',
          accent1: '#D90429',
          accent2: '#FFD700',
          accent3: '#00E5FF',
          accent4: '#9D4EDD',
        }
      }
    },
  },
  plugins: [],
}
