/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        script: ["Great Vibes", "cursive"],
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        paper: "#f8f5ef",
        wine: "#a94358",
        gold: "#b69a70",
      },
    },
  },
  plugins: [],
};