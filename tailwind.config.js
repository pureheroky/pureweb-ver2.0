/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        "black-blue-dark": "rgb(21, 23, 25)",
        "black-blue-dark-darker": "rgb(18, 20, 22)",
        "cherry-red": "#be1818",
        vanilla: "#ECE4B7",
        eerie: "#191716",
        progressBar: "#282f94",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
