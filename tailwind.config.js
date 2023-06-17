const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        header: "rgba(31,36,44)",
        primary: "#101317",
      },
      backgroundImage: {
        tokenomics: "url('/tokenomics-bg.webp')",
      },
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
        oswald: ["Oswald"],
      },
    },
  },
  plugins: [],
};
