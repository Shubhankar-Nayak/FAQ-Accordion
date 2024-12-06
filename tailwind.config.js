/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        White: "hsl(0, 0%, 100%)",
        LightPink: "hsl(297, 87%, 63%)",
        GrayishPurple: "hsl(292, 16%, 49%)",
        DarkPurple: "hsl(292, 42%, 14%)",
      },
      screens: {
        'tablet' : '577px'
      }
    },
  },
  plugins: [],
}

