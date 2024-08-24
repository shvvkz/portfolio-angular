/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      textColor: ['hover'],
    },
  },
  plugins: [],
}
