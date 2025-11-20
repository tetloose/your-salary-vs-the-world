/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,hbs,ts,js}',
    './src/templates/**/*.hbs',
    './src/components/**/*.hbs'
  ],
  theme: {
    extend: {},
  },
  safelist: ['!text-[#B3C066]', '!text-[#E97657]'],

  plugins: [],
}
