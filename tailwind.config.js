/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
    "../pages/shop.html",
    "../pages/contactus.html",
    "../pages/aboutus.html",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "false",
  theme: {
    // screens:{
    //   sm: '576',

    // },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        nunito: "'Nunito Sans', sans-serif",
      },
      colors: {
        navy: "#0C2D57",
        orange: "#FC6736",
        gray: "#d9d9d9",

      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  variants: {
    display: ["group-hover"],
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
