/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        burtons:'burtons'
      },
      animation: {
        type: 'type 2.7s ease-out .8s infinite alternate both',
      },

      
      
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#BFA89E",
        
"secondary": "#EBF5EE",
        
"accent": "#BCABAE",
        
"neutral": "#191D24",
        
"base-100": "#283044",
        
"info": "#78A1BB",
        
"success": "#8B80F9",
        
"warning": "#FBBD23",
        
"error": "#F87272",
        },
      },
    ],
  },
}


