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
        "blue-bg": "#2F3C7E",
        "white-fr": "#FBEAEB",
        "cherry-red": "#990011",
        offwhite: "#FCF6F5",
        babyblue: "#8AAAE5",
        peach: "#FCEDDA",
        vanilla: "#ECE4B7",
        paynegray: "#646881",
        periwinkle: "#B7C0EE",
        thistle: "#D1BECF",
        lavender: "#F7EBEC",
        aqua: "#73D2DE",
        "slate-blue": "#7067CF",
        eerie: "#191716",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
