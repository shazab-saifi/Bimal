/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kesari: {
          100: "#FDECD7",
          400: "#F06D1F",
          500: "#E15315",
          900: "#411309"
        },
        customWhite: "#FEF6EE"
      }
    },
  },
  plugins: [],
}
