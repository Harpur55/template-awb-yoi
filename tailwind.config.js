/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  extend: {
    fontFamily: {
      graduate: ['Graduate', 'sans-serif'],
      holtwood: ['Holtwood One SC', 'sans-serif'],
      'roboto-slab': ['Roboto Slab', 'serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
  },
   
  
  
  plugins: [
    require('@tailwindcss/forms'),
  ],
}