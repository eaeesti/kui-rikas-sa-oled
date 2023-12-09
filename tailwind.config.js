const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef8f2",
          100: "#d4ede1",
          200: "#b2ddc9",
          300: "#81ceb0",
          400: "#50c79c",
          500: "#1aab7c",
          600: "#099067",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          950: "#022c1f",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
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
