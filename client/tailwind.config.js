/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'smart-pay': "url('../public/smartpay_bg.svg')",
    },
  },
  plugins: [],
}