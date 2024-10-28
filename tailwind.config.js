/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "kesari-500": "#E15315",
        "kesari-900": "#411309",
        "kesari-400": "#F06D1F"
      }
    },
  },
  plugins: [],
}