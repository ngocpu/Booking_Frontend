

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      "d-text":"#fefdf9",
      "light":'#131314',
      "p-text":"#757575"

    },
    backgroundColor:{
      "light":'#fefdf9',
      "dark":'#0f0f0f',
      "d-card":"#272727"
    },
    borderColor:{
      'dark':'#131314'
    }
  },
  plugins: [],
  darkMode:"class"
}

// #1c1915
// #6c6b6a
// #2c2822
// #100e0b
