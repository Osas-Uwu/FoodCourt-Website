/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
  content: ["./index.html"],
  theme: {
    extend: {},
    fontFamily: {
      'custom': ['Manrope', 'Ubuntu', 'sans-serif'],
  },
  },
  plugins: [],
}

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
      extend: {},
      fontFamily: {
          'custom': ['ubuntu-mono', 'Ubuntu', 'sans-serif'],
      },
  },
  plugins: [],
}
//@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Satisfy&display=swap');
=======
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
>>>>>>> 517b1e13356e2b0e13448dc46fb53785fd652003
