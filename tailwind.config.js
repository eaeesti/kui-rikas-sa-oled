const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require(`tailwindcss/colors`);

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.teal,
      },
      fontFamily: {
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
      },
      width: {
        128: "32rem",
        144: "36rem",
      },
      height: {
        128: "32rem",
        144: "36rem",
      },
      animation: {
        "fade-in": "fadeIn 350ms ease",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
