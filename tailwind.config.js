const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        textColor: "#000000",
        textSecColor: "#7a7a7a",
        bgColor: "#FCFCFC",
        primaryColor: "#3c2b5c",
        secondaryColor: "#6610F2",
        highlightColor: "#f99c59",
        darkMode: "#ff7818",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sand: ["Quicksand", "serif"],
      },
      backgroundImage: {
        contact: "url('/src/assets/images/bgContact.png')",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
