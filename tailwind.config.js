/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'darkText':'var(--Dark-Text)',
      'score': 'var(--Score-Text)',
      'outline':'var(--Header-Outline)',
      'white':'var(--white)',
      'circle': 'var(--circle)'
    },
    backgroundImage:{
      'background':'var(--Radial-Gradient)',
      'scissors':'var(--Scissors-Gradient)',
      'paper':'var(--Paper-Gradient)',
      'rock':'var(--Rock-Gradient)',
      'triangle': 'var(--triangle)',
    },
  },
  plugins: [],
}

